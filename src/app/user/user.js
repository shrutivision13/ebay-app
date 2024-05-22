'use client'
import { useEffect, useState } from 'react';
import { SimpleModel } from '@/helper/Model';
import { DataTable, IconPencil, IconTrash, IconUserPlus } from '@/helper/imports/Imports'
import { ApiAddUser, ApiDeleteUser, ApiEditUser, ApiGetUser } from '@/api-wrapper/ApiUser';
import Toast from '@/helper/toast/Toast';
import Loader from '@/helper/loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { handleRowPerPage, loading } from '../Redux/Features/CommonSlice';

function User() {

    const dispatch = useDispatch()
    const rowsPerPage = useSelector((state) => state.common.rowPerPage);

    const [currentPage, setcurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [openedModal, setOpenedModal] = useState('edit');
    const [selectedUserData, setSelectedUserData] = useState()
    const [tableData, setTableData] = useState([])

    let columns = [
        {
            name: "User Name",
            selector: (row) => row.userName,
            sortable: true,
        },
        {
            name: "User Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Contact Number",
            selector: (row) => row.phoneNumber,
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex gap-3">
                    <button
                        className="flex align-middle justify-center h-12 max-h-[35px] w-12 max-w-[35px] rounded-lg bg-[#e4f8e4] hover:shadow-lg hover:shadow-green-500/40"
                        onClick={() => handleOpenModel('edit', row)}
                    >
                        <IconPencil stroke={1.6} color='#049104' className='flex h-full' />
                    </button>

                    <button
                        className="flex align-middle justify-center h-12 max-h-[35px] w-12 max-w-[35px] rounded-lg bg-[#ecd3d3] hover:shadow-lg hover:shadow-red-500/40"
                        onClick={() => handleOpenModel('delete', row)}
                    >
                        <IconTrash stroke={1.6} color='red' className='flex h-full' />
                    </button>

                </div>
            )
        }

    ]

    const handleList = async (page, perPage) => {
        let data = {
            pageNo: page || 1,
            perPage: perPage || rowsPerPage,
        };

        await ApiGetUser(data).
            then((res) => {
                if (res.success) {
                    setTableData(res.data);
                    setcurrentPage(res.currentPageNo);
                    setTotalRecords(res.totalRecords);
                } else {
                    Toast.error(res.message);
                }
            })
            .catch((err) => {
                Toast.error("something went to wrong!!");
            });

    };

    const handleClose = () => {
        setShowModal(false)
    }

    const handleApiCall = async (apiFunction, data) => {

        dispatch(loading(true))
        try {
            const res = await apiFunction(data);
            if (res.success) {
                Toast.success(res.message);
                handleList();
                dispatch(loading(false))
            } else {
                Toast.error(res.message);
                dispatch(loading(false))
            }
        } catch (err) {
            dispatch(loading(false))
            Toast.error("something went to wrong!!");
        } finally {
            dispatch(loading(false))
            setShowModal(false);
        }
    };

    const onSubmit = (data) => {
        if (openedModal == 'edit') {
            let EditData = {
                email: data.email,
                userName: data.userName,
                phoneNumber: data.phoneNumber
            };
            handleApiCall(ApiEditUser, { id: selectedUserData._id, data: EditData });
        } else if (openedModal == 'add') {
            let AddData = {
                email: data.email,
                userName: data.userName,
                password: data.password,
                phoneNumber: data.phoneNumber
            };
            handleApiCall(ApiAddUser, AddData);
        } else {
            handleApiCall(ApiDeleteUser, selectedUserData._id);
        }
    }


    const handleOpenModel = (modalType, row) => {
        setShowModal(true);
        setOpenedModal(modalType)
        if (modalType === 'edit' || modalType === 'delete') {
            setSelectedUserData(row)
        }
    }

    useEffect(() => {
        handleList();
        dispatch(handleRowPerPage(10))
    }, []);
    return (
        <>
            {loading && <Loader isLoading={loading} />}
            {showModal ? (
                <>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    <SimpleModel handleClose={handleClose} onSubmit={onSubmit} openedModal={openedModal} selectedUserData={selectedUserData} showModal={showModal} />
                </>
            ) : null}
            <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 h-[100vh]">
                <div className="outer-box">
                    <div className='flex justify-between mb-2'>
                        <h4 className='text-xl font-normal mb-3'>Users</h4>
                        <button
                            className="flex h-full gap-3 align-middle mr-3 rounded-lg bg-[#1E293B] py-2 px-6 font-sans text-xs font-bold uppercase text-white transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={() => handleOpenModel('add')}
                        >
                            <IconUserPlus stroke={1.6} color='white' className='' />
                            <span className='flex h-full align-middle m-auto'>
                                Add  User
                            </span>
                        </button>

                    </div>
                    <DataTable
                        className=""
                        columns={columns}
                        striped={true}
                        data={tableData}
                        pagination
                        paginationServer
                        paginationPerPage={rowsPerPage}
                        onChangeRowsPerPage={(event) => {
                            dispatch(handleRowPerPage(event))
                            handleList(currentPage, event);
                        }}
                        onChangePage={(page) => {
                            handleList(page);
                        }}
                        paginationDefaultPage={currentPage}
                        paginationTotalRows={totalRecords}
                        fixedHeader
                    />
                </div>
            </div>
        </>
    )
}

export default User;
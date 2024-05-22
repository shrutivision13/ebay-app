'use client'
import { DataTable, IconPencil, IconTrash, IconUserPlus } from '@/helper/imports/Imports'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleRowPerPage } from '../Redux/Features/CommonSlice';

function Products() {
    const dispatch = useDispatch()
    const rowPerPage = useSelector((state) => state.common.rowPerPage);
    const [currentPage, setcurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [openedModal, setOpenedModal] = useState('edit');
    const [selectedUserData, setSelectedUserData] = useState()
    const [tableData, setTableData] = useState([
        {
            id: 1,
            userName: 'John Doe',
            email: "john@gmail.com",
            phoneNumber: "1234567890"
        }
    ])

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
        }

    ]

    const handleList = async (page, perPage) => {
        let data = {
            pageNo: page || 1,
            perPage: perPage || rowPerPage,
        };

        // await ApiGetUser(data).
        //     then((res) => {
        //         if (res.success) {
        //             setTableData(res.data);
        //             setcurrentPage(res.currentPageNo);
        //             setTotalRecords(res.totalRecords);
        //         } else {
        //             Toast.error(res.message);
        //         }
        //     })
        //     .catch((err) => {
        //         Toast.error("something went to wrong!!");
        //     });

    };

    const handleClose = () => {
        setShowModal(false)
    }

    const onSubmit = (data) => {
        // if (openedModal == 'edit') {
        //     let EditData = {
        //         email: data.email,
        //         userName: data.userName,
        //         phoneNumber: data.phoneNumber
        //     }
        //     ApiEditUser(selectedUserData._id, EditData)
        //         .then((res) => {
        //             if (res.success) {
        //                 Toast.success(res.message);
        //                 handleList();
        //                 setIsLoading(false)
        //                 setShowModal(false)
        //             } else {
        //                 setIsLoading(false)
        //                 Toast.error(res.message);
        //             }
        //         })
        //         .catch((err) => {
        //             setShowModal(false);
        //             setIsLoading(false)
        //             Toast.error("something went to wrong!!");
        //         });

        // } else if (openedModal == 'add') {
        //     setIsLoading(true)
        //     let AddData = {
        //         email: data.email,
        //         userName: data.userName,
        //         password: data.password,
        //         phoneNumber: data.phoneNumber
        //     }
        //     ApiAddUser(AddData).then((res) => {
        //         if (res.success) {
        //             Toast.success(res.message);
        //             // reset();
        //             // setShow(false);
        //             handleList();
        //             setIsLoading(false)
        //             setShowModal(false)
        //         } else {
        //             setIsLoading(false)
        //             Toast.error(res.message);
        //         }
        //     })
        //         .catch((err) => {
        //             setShowModal(false);
        //             setIsLoading(false)
        //             Toast.error("something went to wrong!!");
        //         });
        // } else {
        //     ApiDeleteUser(selectedUserData._id)
        //         .then((res) => {
        //             if (res.success) {
        //                 Toast.success(res.message);
        //                 handleList();
        //                 setIsLoading(false)
        //                 setShowModal(false)
        //             } else {
        //                 setIsLoading(false)
        //                 Toast.error(res.message);
        //             }
        //         })
        //         .catch((err) => {
        //             setShowModal(false);
        //             setIsLoading(false)
        //             Toast.error("something went to wrong!!");
        //         });
        // }

    }

    const handleOpenModel = (modalType, row) => {
        // setShowModal(true);
        // setOpenedModal(modalType)
        // if (modalType === 'edit' || modalType === 'delete') {
        //     setSelectedUserData(row)
        // }
    }

    useEffect(() => {
        handleList();
        dispatch(handleRowPerPage(10))
    }, []);

    return (
        <>
            <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 h-[100vh]">
                <div className="outer-box">
                    <div className='flex justify-between mb-2'>
                        <h4 className='text-xl font-normal mb-3'>Inventory</h4>
                        {/* <button
                            className="flex h-full gap-3 align-middle mr-3 rounded-lg bg-[#1E293B] py-2 px-6 font-sans text-xs font-bold uppercase text-white transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        // onClick={() => handleOpenModel('add')}
                        >
                            <IconUserPlus stroke={1.6} color='white' className='' />
                            <span className='flex h-full align-middle m-auto'>
                                Add  User
                            </span>
                        </button> */}

                    </div>
                    <DataTable
                        className=""
                        columns={columns}
                        striped={true}
                        data={tableData}
                        pagination
                        paginationServer
                        paginationPerPage={rowPerPage}
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

export default Products;
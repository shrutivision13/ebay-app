
"use client"
import DataTable from "react-data-table-component";

function Dashboard() {
    let columns = [
        {
            name: "Auftrag Nr.",
            selector: (row) => row.apOrderNumber,
            sortable: true,
        },
        {
            name: "Erstellt von",
            selector: (row) => row.createdBy,
            sortable: true,
        },
    ]
    let tableData = [{
        id: 1,
        apOrderNumber: "test",
        createdBy: "text"
    },
    {
        id: 2,
        apOrderNumber: "test",
        createdBy: "text"
    }
    ]
    return (
        <>
            <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 h-[100vh]">
                <div className="outer-box ">

                    <DataTable
                        className="table_content"
                        columns={columns}
                        striped={true}
                        data={tableData}
                        // pagination
                        // paginationServer
                        // paginationPerPage={rowsPerPage}
                        // onChangeRowsPerPage={(event) => {
                        // 	setRowsPerPage(parseInt(event));
                        // 	handleList(currentPage, event);
                        // }}
                        // onChangePage={(page) => {
                        // 	handleList(page);
                        // }}
                        // paginationDefaultPage={currentPage}
                        // paginationTotalRows={totalRecords}
                        fixedHeader
                    />
                </div>
            </div>
        </>
    )

}

export default Dashboard;
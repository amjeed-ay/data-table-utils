import { styled } from "@mui/material";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";

const DataGrid = styled(MuiDataGrid)(() => ({
    "& .MuiDataGrid-virtualScroller": { marginTop: "0!important" },
}));

function TransactionTable({
    paginationModel,
    setPaginationModel,
    data,
    setViewDetailModal,
}) {
    return (
        <>
            <DataGrid
                disableColumnFilter
                rows={data.data || []}
                columns={columns}
                rowCount={data?.meta?.total || 0}
                loading={!data}
                pageSizeOptions={[20]}
                paginationModel={paginationModel}
                paginationMode="server"
                onPaginationModelChange={setPaginationModel}
                disableRowSelectionOnClick
                onRowClick={(data) => {
                    setViewDetailModal({ show: true, id: data.row.id });
                }}
                rowHeight={55}
                headerHeight={40}
                showCellVerticalBorder={true}
                showColumnVerticalBorder={true}
                sx={{
                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                        outline: "none !important",
                    },
                }}
            />
        </>
    );
}

export default TransactionTable;

const columns = [
    {
        field: "reference",
        width: 150,
        headerName: "Transaction ID",
        disableColumnMenu: true,
        sortable: false,
        filterable: false,
        editable: false,
    },
    {
        field: "amount",
        width: 80,
        headerName: "Amount",
        disableColumnMenu: true,
        sortable: false,
        filterable: false,
        editable: false,
    },
    {
        field: "edit",
        minWidth: 450,
        flex: 1,
        headerName: "Description",
        align: "left",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params) => <TransactionDescription row={params.row} />,
    },
    {
        field: "status",
        width: 70,
        headerName: "Status",
        disableColumnMenu: true,
        sortable: false,
        filterable: false,
        editable: false,
    },
    {
        minWidth: 450,
        flex: 1,
        headerName: "Api Response",
        disableColumnMenu: true,
        sortable: false,
        filterable: false,
        editable: false,
        renderCell: (params) => (
            <>
                <span>{params.row.api_response}</span>
            </>
        ),
    },
    {
        field: "balance_before",
        width: 120,
        headerName: "Balance Before",
        disableColumnMenu: true,
        sortable: false,
        filterable: false,
        editable: false,
    },
    {
        field: "balance_after",
        width: 120,
        headerName: "Balance After",
        disableColumnMenu: true,
        sortable: false,
        filterable: false,
        editable: false,
    },
];

function TransactionDescription(props) {
    return (
        <>
            <div className="flex text-start p-2 flex-col">
                <span className=" text-theme-2">{props.row.description}</span>
                <span className="w-full text-xs">{props.row.date}</span>
            </div>
        </>
    );
}

function UserDetails(props) {
    return (
        <>
            <div className="flex text-start p-2 flex-col">
                <span className=" text-theme-2">{props.row.user.name}</span>
                <span className="w-full text-xs">{props.row.user.phone}</span>
            </div>
        </>
    );
}

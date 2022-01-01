import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& div[data-rowIndex][role="row"]:nth-of-type(5n-4)': {
        color: "blue",
        fontSize: 18,
        //risky
        minHeight: "60px !important",
        height: 60,
        "& div": {
          minHeight: "60px !important",
          height: 60,
          lineHeight: "59px !important"
        }
      },
      "& .MuiDataGrid-renderingZone": {
        "& .MuiDataGrid-row": {
          "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" }
        }
      }
    }
  })
);

const handleCellClick = (param, event) => {
  console.log(param);
  console.log(event);
  if (param.colIndex === 2) {
    event.stopPropagation();
  }
};

const handleRowClick = (param, event) => {
  console.log("Row:");
  console.log(param);
  console.log(event);
};

const columns = [
  {
    field: "Previous Ward/Bed",
    headerName: "Previous Ward/Bed",
    width: 200
    
  },
  {
    field: "Time",
    headerName: "Time",
    width: 160,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "blue",
            fontSize: 18,
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>
      );
    }
  },
  { field: "Time", headerName: "Time", width: 160 },
  {
    field: "Date",
    headerName: "Date",
    type: "number",
    width: 160,
    align: "center"
  },
  {
    field: "Doctor",
    headerName: "Doctor",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => {
      return `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`;
    }
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Amy", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 12 },
  { id: 6, lastName: "Melisandre", firstName: "Jane", age: 15 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

export default function DataGridDemo() {
  const classes = useStyles();

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rowHeight={120}
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
      <div style={{ margin: "40px", textAlign: "center" }}>
        <a
          target="_blank"
          href="https://smartdevpreneur.com/the-ultimate-guide-to-customizing-material-ui-datagrid/"
        >
          How do you change DataGrid row height?
        </a>
      </div>
    </div>
  );
}

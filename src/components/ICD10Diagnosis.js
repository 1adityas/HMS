import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import './DataGrid.css'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& div[data-rowIndex][role="row"]:nth-of-type(n)': {
        fontSize: "22px",
        color: "#253143",

        //risky
        minHeight: "60px !important",
        height: 40,
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
    field: "#",
    headerName: "#",
    width: 100,
    headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
    valueGetter: (params) => {
      return `${params.getValue(params.id, "number") || ""} `;
    }

  },
  {
    field: "ICD Code",
    headerName: "ICD Code",
    textAlign: "centre",
    fontSize: "30px",
    width: 300,
    headerClassName: 'super-app-theme--header',
    

  },
  {
    field: "Disease",
    headerName: "Disease",
    type: "number",
    fontSize: "20px",
    width: 300,
    align: "center",
    textAlign:"center",
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "Status",
    headerName: "Status",
    align: "center",
    width: 300,
    headerClassName: 'super-app-theme--header',
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "blue",
            fontSize: "22px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    }
  },
  
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, number: 1 },
  { id: 2, lastName: "Lannister", firstName: "Amy", age: 42, number: 2 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, number: 3 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, number: 4 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 12, number: 5 },
  { id: 6, lastName: "Melisandre", firstName: "Jane", age: 15, number: 6 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, number: 7 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, number: 8 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, number: 9 }
];

export default function DataGridDemo() {
  const classes = useStyles();

  return (
    <div className="headeralign" style={{
      height: 300, width: "80%", textAlign: "center", marginLeft: "165px", marginRight: "165px", marginBottom: "20px"
    }}>
      < DataGrid
        rowHeight={60}
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={3}
        // checkboxSelection
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
      {/* <div style={{ margin: "40px", textAlign: "center" }}>
        <a
          target="_blank"
          href="https://smartdevpreneur.com/the-ultimate-guide-to-customizing-material-ui-datagrid/"
        >
          How do you change DataGrid row height?
        </a>
      </div> */}
    </div>
  );
}

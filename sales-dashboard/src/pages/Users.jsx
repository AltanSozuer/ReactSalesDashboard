import "../styles/css/shared/shadowbox.css"
import "../styles/css/userTable.css"
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip, Tooltip, Zoom } from '@mui/material';
import { Edit, Delete } from "@mui/icons-material"
import { userData } from '../DummyData/UserTable';
import AtomIconButton from "../components/atoms/AtomIconButton"
import { labelTypeDetector } from "../utils/utils"
import { Link } from "react-router-dom"



export default function Users() {
  const [ data, setData ] = useState(userData);

  const handleDeleteAction = ( id ) => {
    setData( data.filter( obj => obj.id !== id ))
  }

  const columns = [
    { 
      field: 'id',
      headerName: 'ID', 
      width: 80,
      align: "center",
      headerAlign: "center",
      flex: 1
    },
    { 
      field: 'fullName', 
      headerName: 'Full Name', 
      width: 250,
      headerAlign: "center",
      flex: 3,
      renderCell: ( params ) => {
        return (
          <div className='fullname'>
            <img src= { params.row.image } className="fullname-image" alt="" />
            { params.row.fullName }
          </div>
        )
      }
         
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      width: 200 ,
      align: "center",
      headerAlign: "center",
      flex: 2,
    },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 120 ,
      align: "center",
      headerAlign: "center",
      flex: 2,
      renderCell: ( params ) => {
        return (
          <Chip 
            label={ params.row.status } 
            color={labelTypeDetector(params.row.status)}
            sx={{ padding: "5px"}} /> 
        )
      }
    },
    {
      field: 'total_transaction',
      headerName: 'Total Transaction',
      width: 200,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      align: "center",
      headerAlign: "center",
      flex: 2,
      renderCell: ( params ) => {
        return (
          <div className='action-container'>
              <Tooltip title="Edit" TransitionComponent={ Zoom }>
                <Link to={`/user/${params.row.id}`}>
                  <AtomIconButton text="" size="small" color= "success"> 
                    <Edit />
                  </AtomIconButton>
                </Link>
              </Tooltip>
              
              <Tooltip title="Delete" TransitionComponent={ Zoom } >
                <span>
                <AtomIconButton text="" size="small" onClick={() => handleDeleteAction(params.row.id)} color= "error" sx={{ marginRight: "15px" }}> 
                  <Delete />
                </AtomIconButton>
                </span>
              </Tooltip>
              
          </div> 
        )
      }
    }
  ];

  return (
    <div className='shadow-box' 
         style={{ height: "80%", width: '95%', margin: "20px 10px" }}>
      <DataGrid
        rows={data}
        columns={ columns}
        pageSize={10}
        autoPageSize
        density="comfortable" 
        disableSelectionOnClick
        checkboxSelection />
    </div>
  );
}
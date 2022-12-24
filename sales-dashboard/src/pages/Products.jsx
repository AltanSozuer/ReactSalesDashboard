import "../styles/css/shared/shadowbox.css"
import "../styles/css/productTable.css"
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip, Tooltip, Zoom } from '@mui/material';
import { Edit, Delete } from "@mui/icons-material"
import { productData } from '../DummyData/ProductData';
import AtomIconButton from "../components/atoms/AtomIconButton"
import { ProductStatusColorMapping } from "../constants/ProductStatusColorMapping"
import { Link } from "react-router-dom"

export default function Products() {
    const [ data, setData ] = useState(productData);

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
        field: 'product', 
        headerName: 'Product', 
        width: 250,
        headerAlign: "center",
        flex: 3, 
        renderCell: ( params ) => {
          return ( 
            <div className='product-inline'>
              <img src= { params.row.image } className="product-image" alt="" />
              { params.row.product }
            </div>
          ) 
        }
           
      },
      { 
        field: 'stock', 
        headerName: 'Stock', 
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
              color={ ProductStatusColorMapping[params.row.status] }
              sx={{ padding: "5px"}} /> 
          )
        }
      }, 
      {
        field: 'price',
        headerName: 'Price',
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
            <div className='product-action-container'>
                <Tooltip title="Edit" TransitionComponent={ Zoom }>
                  <Link to={`/product/${params.row.id}`}>
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





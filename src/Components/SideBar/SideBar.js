import React from 'react'
import "./sidebar.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import { Link } from 'react-router-dom';


export default function SideBar() {
  return (
    <div className='sidenav'>

      
      <Link to="/"> <span style={{display:"flex", justifyContent:'center', textAlign:"center", marginRight:"10px"}}><ForwardToInboxOutlinedIcon style={{marginRight:"20px"}}/> Notes </span></Link>

      <Link to="/bin"> <span style={{display:"flex", justifyContent:'center', textAlign:"center", marginRight:"20px"}}><DeleteOutlineIcon style={{marginRight:"25px"}}/>  Bin </span></Link>
      <Link to="/archive"> <span style={{display:"flex", justifyContent:'center', textAlign:"center", marginRight:"20px"}}><ArchiveIcon style={{marginRight:"15px"}}/> Archive</span></Link>

      {/* <Link href="#about"> <span style={{display:"flex", justifyContent:'center', textAlign:"center", marginRight:"20px"}}><DeleteOutlineIcon style={{marginRight:"20px"}}/> About </span></Link> */}

     
    </div>
  )
}

import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import './deleteCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px"
   
};
export default function BinCard({setOpenDelete, data, selectedNote}) {
    
    const DeleteNotes = async (id) => {
        const updatedNotes = data.filter((e) => e.n_id !== id)
        console.log(updatedNotes,90);
        localStorage.setItem("note", JSON.stringify(updatedNotes))
        await setOpenDelete(false)
      
        
    }
  return (
    <div>
         <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you Sure to delete?
                </Typography>
                <Box>
                    <DeleteIcon className='delete-btn'  onClick={() => DeleteNotes(selectedNote)}>Delete</DeleteIcon>
                    <CancelIcon className='cancle-btn' onClick={() => { setOpenDelete(false) }}>cancle</CancelIcon>
                </Box>

            </Box>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './deleteCard.css'
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
export default function DeleteCard({ setOpenDelete, data, selectedNote, setOpenDelete2 }) {

    const [index, setIndex] = useState()
    const [updateData, setupdateData] = useState(selectedNote)

    useEffect(() => {
        const Index = (data.findIndex((e) => e.n_id === updateData.n_id))
        setIndex(Index)
    }, [])


    const DeleteNotes = async (id) => {
        const allData = [...data]
       
    

        if (index !== -1) {
            allData[index] = {
                ...allData[index],
                status: "deleted"
            }
           
            localStorage.setItem("note", JSON.stringify(allData))
            await setOpenDelete(false)
            await setOpenDelete2((prev) => !prev)
        }

    }
    return (
        <div>
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you Sure to delete?
                </Typography>
                <Box>
                    <DeleteIcon className='delete-btn' onClick={DeleteNotes}>Delete</DeleteIcon>
                    <CancelIcon className='cancle-btn' onClick={() => { setOpenDelete(false) }}>cancle</CancelIcon>
                </Box>

            </Box>
        </div>
    )
}

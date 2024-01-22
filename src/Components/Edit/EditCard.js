import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Button, TextField } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px"
    

};

export default function EditCard({ data, selectedNote, openEdit, setOpenEdit }) {
    const [index, setIndex] = useState()
    const [updateData, setUpdateData] = useState(selectedNote)
    console.log(updateData + "this is updateData");

    useEffect(() => {
        const Index = (data.findIndex((e) => e.n_id === selectedNote.n_id))
        setIndex(Index)
    }, [])

    const handleChange = (e) => {
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        const allData = [...data]
        allData.splice(index, 1, updateData)
        localStorage.setItem("note", JSON.stringify(allData))
        await setOpenEdit(false)
    }



    return (
        <div >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit
                </Typography>
                <Box sx={{ mb: 2, mt: 2 }}>
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        name='title'
                        placeholder='Title'
                        label="Title"
                        variant="outlined"
                        size='small'
                        value={updateData.title}
                        onChange={handleChange}

                    />
                </Box>
                <Box sx={{ mb: 2, mt: 1 }}>
                    <TextField
                        style={{ width: "200px", margin: "5px" }}

                        id="filled-textarea"
                        label=" description"
                        placeholder="description"
                        multiline
                        variant="outlined"
                        name='description'
                        maxRows={5}
                        value={updateData.description}
                        onChange={handleChange}
                    />

                    {/* <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        name='description'
                        placeholder='description'
                        label="description"
                        variant="outlined"
                        value={updateData.description}
                        onChange={handleChange}


                    /> */}
                </Box>
                <Box>
                    <Button variant="outlined" sx={{ marginRight: 6 }} onClick={() => { handleSubmit() }}>Submit</Button>
                    <Button variant="outlined" color="error" onClick={() => setOpenEdit(false)}>Cancle</Button>
                </Box>

            </Box>
        </div>
    )
}

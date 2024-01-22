import React, { useEffect, useState } from 'react'
import './home.css'
import { Box, Button, TextField } from '@mui/material'
import ViewCard from '../ViewCard/ViewCard'
import SendIcon from '@mui/icons-material/Send';


export default function Home() {

    const [openDelete2, setOpenDelete2] = useState(false)
    console.log(openDelete2, 'openDelete2');
    const [value, setValue] = useState([])
    const [user, setUser] = useState([])
    const [open, setOpen] = useState(false)

    let initialValue;

    useEffect(() => {
        if (localStorage.getItem("note") === null) {
            initialValue = []
        } else {
            initialValue = JSON.parse(localStorage.getItem("note"))
            setValue(initialValue)
        }
    }, [openDelete2])




    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    console.log(user);


    // Submit

    const handleSubmit = (e) => {

        // Giving the id
        const newNoteId = value.length === 0 ? 1 : value[value.length - 1].n_id + 1
        // console.log(newNoteId);

        const details = {
            n_id: newNoteId,
            status: 'new',
            ...user
        }

        const updateValue = [...value, details]
        console.log(updateValue);

        setValue(updateValue)

        // inserting to localstorage


        localStorage.setItem("note", JSON.stringify(updateValue))
        setOpen(false)


    }

    return (
        // <div className="fullModel" style={{display:"flex", marginTop:"0px"}}>
            <div className='mainBar' style={{width:"100%", marginLeft:"10px"}}>
                {open === true ? (
                    <div className='text-area'>
                        <div className="input">
                            <Box sx={{ mb: 2, mt: 2 }}>
                                {/* <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleChange}/> */}
                                <TextField
                                    style={{ width: "200px", margin: "5px" }}
                                    type="text"
                                    name='title'
                                    placeholder='Title'
                                    label="Title"
                                    variant="outlined"
                                    onChange={handleChange}
                                // value={user?.title}
                                />
                            </Box>
                            <Box>
                           
                                <TextField
                                    style={{ width: "200px", margin: "5px" }}

                                    name='description'

                                    id="filled-textarea"
                                    label="description"
                                    placeholder="description"
                                    multiline
                                    variant="outlined"
                                    onChange={handleChange}

                                />
                            </Box>
                            <div className="btn" >
                                <Button size="small" variant="contained" endIcon={<SendIcon />} onClick={() => handleSubmit()} sx={{ marginRight: "40px" }}>
                                    Submit
                                </Button>
                                {/* <Button onClick={() => handleSubmit()} sx={{ marginRight: "40px" }}>Submit</Button> */}
                                <Button onClick={() => setOpen(false)}>Close</Button>
                            </div>
                        </div>

                    </div>
                ) : (

                    <div className="container" onClick={() => setOpen(true)}>
                        <div className="items">
                           
                            Take a note..
                        </div>
                    </div>)

                }

                <div className="view-Card">
                    <ViewCard
                        open={open}
                        setOpenDelete2={setOpenDelete2}
                    />
                </div>

            </div>
        // </div>
    )
}

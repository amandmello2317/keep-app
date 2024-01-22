import React, { useEffect, useState } from 'react';
import './viewCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModelDelete from '../Delete/ModelDelete';
import ModelEdit from '../Edit/ModelEdit';
import { Link } from 'react-router-dom';
import ModelView from '../SingleView/ModelView';
import ArchiveIcon from '@mui/icons-material/Archive';



export default function ViewCard({ open, setOpenDelete2 }) {

    const [data, setData] = useState([])
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [selectedNote, setSelectedNote] = useState()
    const [index, setIndex] = useState()
    const [updateData, setupdateData] = useState(selectedNote)
    const [counter, setCounter] = useState(false)


    useEffect(() => {
        let val = JSON.parse(localStorage.getItem("note"))
        setData(val)
    }, [open, openDelete, openEdit, counter])
    console.log(data);

    useEffect(() => {
       
    }, [])


    const handleClose = () => {
        setOpenDelete(false);
    };


    const handleDelete = (id) => {
        setOpenDelete(true)

        setSelectedNote(id)

    }
    console.log(selectedNote, openDelete);

    const handleEdit = (notes) => {
        setOpenEdit(true)
        setSelectedNote(notes)
        console.log(selectedNote);

    }

    const handleArchive =async (id) => {
        await setSelectedNote(id)
        
        console.log(selectedNote);
        // console.log(updateData);

        const Index = await (data.findIndex((e) => e.n_id === selectedNote.n_id))
        setIndex(Index)

        const allData = [...data]

        if (index !== -1) {
            allData[index] = {
                ...allData[index],
                status: "archive"
            }

           await localStorage.setItem("note", JSON.stringify(allData))
          
            setCounter((prev) => !prev)
        }

    }

    return (
        <>
            <div className="grid-container">

                {data && data.map((e, index) => (
                    <>

                        {e.status == 'new' && (
                            <Card className='card-view' key={index} >
                                <CardContent onClick={() => handleEdit(e)}>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {e.title}

                                    </Typography>
                                    {e.description.length < 50 ?
                                        (<Typography variant="h5" component="div">
                                            {/* {e.description.slice(0, 50)} */}
                                            {e.description}
                                        </Typography>)
                                        :
                                        (
                                            <Typography variant="h5" component="div">
                                                {e.description.slice(0, 50)}....
                                                <span style={{ fontSize: "1rem" }}><Link> read more</Link></span>
                                            </Typography>
                                        )}

                                </CardContent>
                                <CardActions>
                                    <IconButton onClick={() => handleEdit(e)} size='small'>
                                        <EditIcon />
                                    </IconButton>
                                    {/* <Button size="small" onClick={() => handleEdit(e)} startIcon={<EditIcon />}>Edit</Button> */}
                                    <IconButton onClick={() => handleDelete(e)} color="error" size='small'>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleArchive(e)} size='small'>
                                        <ArchiveIcon />
                                    </IconButton>

                                    {/* <Button startIcon={<DeleteIcon />} variant="outlined" color="error" size="small" onClick={() => handleDelete(e.n_id)}>Delete</Button> */}
                                </CardActions>

                            </Card>
                        )}
                    </>
                ))}

            </div >

            <ModelDelete
                selectedNote={selectedNote}
                data={data}
                handleClose={handleClose}
                openDelete={openDelete}
                setOpenDelete={setOpenDelete}
                setOpenDelete2={setOpenDelete2}

            />

            <ModelEdit
                selectedNote={selectedNote}
                data={data}
                handleClose={handleClose}
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
            />
            {/* <ModelView

            /> */}
        </>


    );
}
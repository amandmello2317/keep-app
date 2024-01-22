import React, { useEffect, useState } from 'react';
import './bin.css'
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
import BinModel from './BinModel';
import RecyclingIcon from '@mui/icons-material/Recycling';
import BinDeleteModel from './BinDeleteModel';




export default function Bin({ open }) {

    const [data, setData] = useState([])
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [selectedNote, setSelectedNote] = useState()
    const [openRestore, setOpenRestore] = useState(false)


    useEffect(() => {
        let val = JSON.parse(localStorage.getItem("note"))
        setData(val)

        
    }, [open, openDelete, openEdit, openRestore])
    console.log(data);

    const handleClose = () => {
        setOpenDelete(false);
    };


    const handleDelete = (id) => {
        setOpenDelete(true)
        setSelectedNote(id)
    }
    console.log(selectedNote, openDelete);

    // Resote and send to index

    const handleRestore = (notes) => {
        setOpenRestore(true)
        setSelectedNote(notes)

    }

 


    return (
        <div>
        <div className='bin-heading'>
            Bin
        </div>

            <div className="grid-container">

                {data && data.map((e, index) => (
                    <>
                        {e.status === 'deleted' && (

                            <Card className='card-view' key={index} >
                                <CardContent >
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {e.title}
                                    </Typography>
                                    {e.description.length < 50 ?
                                        (<Typography variant="h5" component="div">
                                           
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

                                    <IconButton onClick={() => handleDelete(e.n_id)} color="error" size='small'>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleRestore(e)} color="error" size='small'>
                                        <RecyclingIcon />
                                    </IconButton>

                                </CardActions>

                            </Card>
                        )}
                    </>
                )) }
            </div>



            <BinModel
                selectedNote={selectedNote}
                data={data}
                handleClose={handleClose}
                openDelete={openDelete}
                setOpenDelete={setOpenDelete}
            />

            <BinDeleteModel 
                selectedNote={selectedNote}
                data={data}
                handleClose={handleClose}
                setOpenRestore={setOpenRestore}
                openRestore={openRestore}
              
            />


            {/* <ModelView

            /> */}
        </div>


    );
}
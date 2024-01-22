import React from 'react'
import Modal from '@mui/material/Modal';
import DeleteCard from './DeleteCard';

export default function ModelDelete({openDelete, handleClose, data, selectedNote, setOpenDelete,setOpenDelete2}) {
  return (
    <div>
           <div>
            <Modal
                open={openDelete}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DeleteCard
                    data={data}
                    selectedNote={selectedNote}
                    setOpenDelete={setOpenDelete}
                    openDelete={openDelete}
                    setOpenDelete2={setOpenDelete2}
                />

            </Modal>

        </div>
    </div>
  )
}

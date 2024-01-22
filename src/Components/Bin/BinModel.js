import React from 'react'
import Modal from '@mui/material/Modal';
import BinCard from './BinCard';

export default function BinModel({openDelete, handleClose, data, selectedNote, setOpenDelete}) {
  return (
    <div>
           <div>
            <Modal
                open={openDelete}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BinCard
                    data={data}
                    selectedNote={selectedNote}
                    setOpenDelete={setOpenDelete}
                    openDelete={openDelete}
                    
                />

            </Modal>

        </div>
    </div>
  )
}

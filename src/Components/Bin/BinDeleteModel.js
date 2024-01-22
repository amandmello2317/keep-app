import React from 'react'
import Modal from '@mui/material/Modal';
import BinDelete from './BinDelete';

export default function BinDeleteModel({setOpenRestore, handleClose, data, selectedNote, openRestore}) {
  return (
    <div>
           <div>
            <Modal
                open={openRestore}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BinDelete
                    data={data}
                    selectedNote={selectedNote}
                    setOpenRestore={setOpenRestore}
                    openRestore={openRestore}
                    
                />

            </Modal>

        </div>
    </div>
  )
}

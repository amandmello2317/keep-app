import React from 'react'
import Modal from '@mui/material/Modal';
import EditCard from './EditCard'

export default function ModelEdit({selectedNote, data, handleClose, openEdit, setOpenEdit}) {
  return (
    <div>
          <Modal
                open={openEdit}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            
              <EditCard 
               data={data}
               selectedNote={selectedNote}
               openEdit={openEdit}
               setOpenEdit={setOpenEdit}
             /> 
            </Modal>
    </div>
  )
}

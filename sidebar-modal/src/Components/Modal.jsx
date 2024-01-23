import React from 'react'
import '../App.css'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext();

  return (
    <div className={`${isModalOpen ? 'modal' :  'modal hide-modal'}`}>
        <div className="modal-times">
            <FaTimes color='red' onClick={closeModal}/>
        </div>
      <div className="modal-box">
        <div>
            <h3>Modal Content</h3>
        </div>
      </div>
    </div>
  )
}

export default Modal

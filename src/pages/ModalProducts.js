import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/ModalBackground.scss'
function ModalProducts({ children }) {
  // console.log(children);
  return ReactDOM.createPortal(
    <div className="ModalProductsBackground">
      {children}

    </div>,


    document.getElementById('modal')
  )
}

export { ModalProducts }

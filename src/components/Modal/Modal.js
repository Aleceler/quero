import React from 'react';
import ReactModal from 'react-modal';
import Filters from '../../views/FavoriteScholarship/Filters';

const customStyles = document.documentElement.clientWidth > 700 ? {
  content: {
    width: '35%',
    top: '50px',
    left: '32%',
    right: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(31,45,48,0.12)',
  },
}
  : {
    content: {
      width: '100%',
      top: '50px',
      left: 'auto',
      right: 'auto',
    },
    overlay: {
      backgroundColor: 'rgba(31,45,48,0.12)',
    },
  };


const Modal = (props) =>
// console.log(props);
   <ReactModal
                style={customStyles}
                isOpen={props.show}
                onRequestClose={props.onclose}
                onAfterOpen={() => document.body.style.overflow = 'hidden'}
                onAfterClose={() => document.body.style.overflow = 'unset'}
    >
        <Filters onclose={props.onclose} />
    </ReactModal>;
export default Modal;

import React, { useState } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import Filters from '../Modal';

const AddButtonStyled = styled.button`
    cursor: pointer;
    
    
    background: white;
    color: ${(props) => props.theme.colors.primary};
    border: none;
    box-shadow: 0 0 5px grey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    margin: 30px 0;

    @media (max-width: 1024px) {
        height: 250px;
    }

    @media (min-width: 1024px) {
        width: 300px;
        height: 380px;
    }


`;

const Texts = styled.div`
    color: ${(props) => props.theme.colors.text};
    max-width: 60%;
    p{
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: bold;
    }
`;


const AddButton = ({ title, subtitle }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
        <Modal open={open} onClose={() => setOpen(false)}>
            <Filters />
        </Modal>
        <AddButtonStyled onClick={() => setOpen(true)}>
            <AddCircleIcon style={{ height: '80px', width: '80px' }} />
            <Texts>
                <p>{title}</p>
                <span>{subtitle}</span>
            </Texts>
        </AddButtonStyled>
    </>
  );
};

AddButton.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

AddButton.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle here',
};


export default AddButton;

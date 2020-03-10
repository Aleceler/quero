import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CancelButtonStyle = styled.button`
    background-color: white;
    color: ${(props) => props.theme.colors.secondary};
    border: none;
    padding: 10px 30px;
    font-weight: 500;
    font-size: 16px;
    border-radius: 3px;
    border: solid 1px ${(props) => props.theme.colors.secondary};
`;

const SucessButton = ({ text, onClick }) => (
        <CancelButtonStyle onClick={onClick} type="button">
            {text}
        </CancelButtonStyle>
);


SucessButton.propTypes = {
  text: PropTypes.string.isRequired,
};

SucessButton.defaultProps = {
  text: 'Button',
};

export default SucessButton;

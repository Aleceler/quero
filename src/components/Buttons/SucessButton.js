import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SuccessButtonStyle = styled.button`
    background-color: ${(props) => props.theme.colors.primaryYellow};
    color: ${(props) => props.theme.colors.secondary};
    border: none;
    padding: 10px 30px;
    font-weight: 500;
    font-size: 16px;
    border-radius: 3px;
    border: solid 1px #e1ad01;
    :disabled{
      background: #CACDCE;
      color: #82898B;
      border: solid 1px #82898B;
    }
`;

const SucessButton = ({ text, onSubmit, disabled }) => (
        <SuccessButtonStyle onSubmit={onSubmit} disabled={disabled} type="submit">
            {text}
        </SuccessButtonStyle>
);


SucessButton.propTypes = {
  text: PropTypes.string.isRequired,
};

SucessButton.defaultProps = {
  text: 'Button',
};

export default SucessButton;

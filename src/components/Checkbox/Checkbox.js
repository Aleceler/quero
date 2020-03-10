import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import PropTypes from 'prop-types';

export const CheckBox = styled.div`

    .input-helper {
    position: relative;
    display: inline-block;
    cursor: pointer;
    
    &:before {
        content: '';
        display: block;
        position: absolute;
    }
}

.input-helper--checkbox {
    padding-left: 20px;

    &:before {
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        border-radius: 2px;
        border: 1px solid #828282;
    }
}

input[type="checkbox"] {
    display: none;
    
    &:checked + label:before {
        background: ${(props) => props.theme.colors.primary};
        border: 1px solid ${(props) => props.theme.colors.primary};;
        border-radius: 3;
        content: "✓";
        color: white;
        font-size: 18px;
        display:flex;
        justify-content: center;
        align-items: center;
        }

    }
`;

const Checkbox = ({ id, name }) => (
    <CheckBox>
        <Field id={id} type="checkbox" name={name} />
        <label
            htmlFor={id}
            className="input-helper input-helper--checkbox"
        >
            &nbsp;{id}
        </label>
    </CheckBox>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  name: 'name',
  id: 'label',
};

export default Checkbox;

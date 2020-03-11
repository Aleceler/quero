import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import PropTypes from 'prop-types';

export const CheckBox = styled.div`
margin: 10px 0;

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

.disabled{
    .input-helper--checkbox {
    padding-left: 20px;

    &:before {
        top: 0;
        left: 0;
        background: grey;
        width: 18px;
        height: 18px;
        border-radius: 2px;
        border: 1px solid #828282;
    }
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

const Checkbox = ({
  id, name, label, disabled, submit,
}) => (
    <CheckBox>
        <Field id={id} type="checkbox" onInput={submit} disabled={disabled} name={name} />
        <label
        style={ disabled ? {
          background: 'lightgrey', borderRadius: '3px', padding: '0px 8px', cursor: 'none',
        } : {}}
            htmlFor={id}
            className="input-helper input-helper--checkbox"
        >
            &nbsp;{label}
        </label>
    </CheckBox>
);

Checkbox.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

Checkbox.defaultProps = {
  name: 'name',
  id: 'teste',
  label: '',
};

export default Checkbox;

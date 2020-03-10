import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectStyled = styled.div`
    
    .select{
        width: 100%;
        height: 35px;
        margin: 3px 0px;
        border-radius: 3px;
        border: solid 1px lightgray;
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSize.medium};
        font-weight: 300;
    }
`;

const Label = styled.label`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 500;
`;

const Option = styled.option`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 300;
`;

const Select = ({ name, label, options }) => (
      <SelectStyled>
        <Label htmlFor={name}>{label}</Label>
        <Field className="select" as="select" name={name}>
            {options.map((item, index) => <Option key={index} value={item}>{item}</Option>)}
        </Field>
      </SelectStyled>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  name: 'name',
  label: 'label',
  options: ['1', '2', '3'],
};

export default Select;

import React, { useState } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import { formatToBRL } from 'brazilian-values';
import PropTypes from 'prop-types';

const RangeContainer = styled.div`
margin: 10px 0;
  position: relative;
  width: 100%;
`;

const Input = styled.input.attrs(() => ({ type: 'range' }))`
  appearance: none;
  background-color: transparent;
  box-sizing: content-box;
  height: 14px;
  margin: 4px 0;
  outline: none;
  padding: 0;
  width: 100%;

  &:focus {
    outline: none;
  }

  /* Chrome Shadow Elements */

  &::-webkit-slider-runnable-track {
    animate: 0.2s;
    background: lightgrey;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    height: 4px;
    transition: .2s ease-in-out;
    width: 100%;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 50px;
    cursor: pointer;
    height: 14px;
    margin: -5px 0 0 0;
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 14px;
  }

  &:focus::-webkit-slider-thumb {
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(1.6);
  }

  /* Firefox Shadow Elements */

  &::-moz-range-track {
    animate: 0.2s;
    background: lightgrey;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    height: 4px;
    transition: .2s ease-in-out;
    width: 100%;
  }

  &::-moz-range-thumb {
    appearance: none;
    background: ${(props) => props.theme.colors.secondary};
    border: none;
    border-radius: 50px;
    cursor: pointer;
    height: 14px;
    margin-top: -5px;
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate3d(0, 0, 10px);
    width: 14px;
  }

  &:focus::-moz-range-thumb {
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(1.6);
  }

  &::-moz-focus-outer {
    border: 0;
  }
`;

const Fill = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 20px 0 0 20px;
  height: 4px;
  margin: 0;
  padding: 0;
  pointer-events: none;
  position: absolute;
  top: calc(50% - 2px);

  -moz-top: calc(50% - 2px);
`;

const Label = styled.label`
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
    font-weight: 500;
`;


const Range = ({
  max,
  min,
  name,
  step,
  initValue,
  label,
}) => {
  const [values, setValues] = useState(initValue);
  const percentage = ((values - min) * 100) / (max - min);

  return (<>
        <Label htmlFor={name}>{label}</Label>
        <p>{formatToBRL(values)}</p>
        <RangeContainer>
            <Field
                name={name}
                render={({ field }) => (
                <Input
                    onInput={(e) => setValues(e.target.value)}
                    value={initValue}
                    max={max}
                    min={min}
                    step={step}
                    {...field}
                    />
                )}
            />
            <Fill style={{ width: `${percentage}%` }} />
        </RangeContainer>
  </>
  );
};

Range.defaultProps = {
  max: 10000,
  min: 0,
  name: 'range',
  step: 500,
  initValue: 5000,
  label: 'LABEL',
};

Range.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  initValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
};

export default Range;

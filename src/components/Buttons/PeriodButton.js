import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

const PeriodButtonStyled = styled.button`
    color: ${(props) => props.theme.colors.secondary};
    background: white;
    border: solid 1px ${(props) => props.theme.colors.secondary};
    padding: 10px;
    border-radius: 3px;
    font-weight: bold;
    
    cursor: pointer;
    :hover{
      box-shadow: 0 0 2px ${(props) => props.theme.colors.secondary};
    }

    :active, :hover, :focus{
      outline: none;

    }

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        width: 300px;
    }
`;

const PeriodButtonStyledActive = styled(PeriodButtonStyled)`
    background: ${(props) => props.theme.colors.secondary};
    color: white;
    border: solid 1px ${(props) => props.theme.colors.secondary};
    padding: 10px;
    border-radius: 3px;
    font-weight: bold;
    
`;

const PeriodButton = ({ periods }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.scholarship.fetch({ semester: 'Todos os semestres' });
  }, [dispatch.scholarship]);

  const [active, setActive] = useState(periods[0]);

  return periods.map((item, index) => (
    active === item
      ? <PeriodButtonStyledActive key={index} onClick={() => { setActive(item); dispatch.scholarship.fetch({ semester: item }); }}>
            {item.indexOf('.') > -1 ? `${item.split('.')[1]}º semestre de ${item.split('.')[0]}` : item}
        </PeriodButtonStyledActive>
      : <PeriodButtonStyled key={index} onClick={() => { setActive(item); dispatch.scholarship.fetch({ semester: item }); }}>
            {item.indexOf('.') > -1 ? `${item.split('.')[1]}º semestre de ${item.split('.')[0]}` : item}
        </PeriodButtonStyled>
  ));
};

PeriodButton.propTypes = {
  periods: PropTypes.array.isRequired,
};

PeriodButton.defaultProps = {
  periods: ['1', '2', '3'],
};

export default PeriodButton;

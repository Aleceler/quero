import React from 'react';
import { useSelector } from 'react-redux';
import styled, { withTheme } from 'styled-components';

const FilterContainer = styled.div`
      display: flex;
      margin-top: 50px;
      height: 80vh;
      padding: 10px;
      background: white;
      color: ${(props) => props.theme.colors.text};
      font-size: 12px;
  `;

const FilterTitles = styled.div`
    display: flex;
    flex-direction: column;
`;

const Filters = () => {
  const scholarship = useSelector((state) => state.scholarship);
  console.log(scholarship);

  return (
    <div>
      <FilterContainer >
          <FilterTitles>
            <h1>Adicionar Bolsa</h1>
            <p>Filtre e adicione as bolsas de seu interesse.</p>
          </FilterTitles>
      </FilterContainer>
    </div>
  );
};


export default withTheme(Filters);

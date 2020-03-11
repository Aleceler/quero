import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { AddButton, PeriodButton } from '../../components/Buttons';

const Container = styled.article`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;


    @media (max-width: 1024px) {
        align-items: center;
        padding: 0 10px;
    }

    @media (min-width: 1024px) {
        padding: 0 8%;
        padding-bottom: 4%;
    }

`;

const Titles = styled.div`
    margin: 20px 0;
    color: ${(props) => props.theme.colors.text};
    h1{
        font-size: ${(props) => props.theme.fontSize.extraLarge};
    }
    p{
        margin: 10px 0;
        font-size: ${(props) => props.theme.fontSize.large};
    }
`;

const PeriodContainer = styled.div`
      @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    

    @media (min-width: 1024px) {
        display: flex;
        justify-content: flex-end;
    }
`;


const FavoriteScholarship = () => {
  const scholarship = useSelector((state) => state.scholarship);


  return (
                <Container>
                    <Titles>
                        <h1>Bolsas favoritas</h1>
                        <p>Adicione bolsas de cursos e faculdades do seu interesse e
                            receba atualizações com as melhores ofertas disponíveis.
                        </p>
                    </Titles>
                    <PeriodContainer>
                        <PeriodButton periods={['Todos os semestres', '2019.2', '2020.1']} />
                    </PeriodContainer>
                    <AddButton title="Adicionar Bolsa" subtitle="Clique para adicionar bolsas de cursos do seu interesse" />
                </Container>
  );
};

export default FavoriteScholarship;

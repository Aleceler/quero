import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { formatToBRL } from 'brazilian-values';
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

const Hr = styled.hr`
    border: 1px solid #EBEBEB;
    width: 100%;
    margin: 10px 10px;
`;

const ScholarshipCards = styled.div`
    background: white;
    color: ${(props) => props.theme.colors.text};
    border: none;
    box-shadow: 0 0 5px grey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    margin: 30px 0;

    img{
        width: 150px;
        height: 40px;
    }

    p{
        color: ${(props) => props.theme.colors.secondary};
        font-weight: bold;
    }

    h4{
        text-decoration: line-through;
    }

    h5{
        color: ${(props) => props.theme.colors.verde};
        font-weight: 700;
        span{
            color: ${(props) => props.theme.colors.text};
            font-weight: 300;
        }
    }

    @media (max-width: 1024px) {
        height: 250px;
    }

    @media (min-width: 1024px) {
        width: 300px;
        height: 380px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
`;

const FavoriteScholarship = () => {
  const cards = useSelector((state) => state.cards.items);
  const items = useSelector((state) => state.scholarship.items);

  const list = [];
  const listCards = Object.keys(cards);
  for (const i in listCards) {
    listCards[i].length <= 2 && list.push(
    <ScholarshipCards key={items[listCards[i]].id}>
        <img src={items[listCards[i]].university.logo_url} alt={items[listCards[i]].university.name}/>
        <h2>{items[listCards[i]].university.name}</h2>
        <p>{items[listCards[i]].course.name}</p>
        <Hr />
        <h2>{items[listCards[i]].course.kind} - {items[listCards[i]].course.shift}</h2>
        <span>Inicio das aulas em: {items[listCards[i]].start_date}</span>
        <Hr />
        <h3>Mensalidade com o Quero Bolsa:</h3>
        <h4>{formatToBRL(items[listCards[i]].full_price)}</h4>
        <h5>{formatToBRL(items[listCards[i]].price_with_discount)} <span>/mes</span></h5>
        <ButtonsContainer>
            <button>Excluir</button>
            <button>Ver Oferta</button>
        </ButtonsContainer>
    </ScholarshipCards>,
    );
  }

  console.log(list);
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
                    {list && list}

                </Container>
  );
};

export default FavoriteScholarship;

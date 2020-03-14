import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { formatToBRL } from 'brazilian-values';
import Rating from '@material-ui/lab/Rating';
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

const ButtonOferta = styled.button`
    font-weight:bold;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.primaryYellow};
    border: 1px solid ${(props) => props.theme.colors.secondaryYellow};
    color: ${(props) => props.theme.colors.text};
    border-radius: 3px;
    max-height: 50px;
`;

const ButtonExcluir = styled.button`
    font-weight: bold;
    margin-top: 10px;
    padding: 10px 20px;
    color: ${(props) => props.theme.colors.secondary};
    background-color: white;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 3px;
    max-height: 50px;
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


    img{
        width: 150px;
        height: 40px;
        margin-bottom: 10px;
    }

    p{
        color: ${(props) => props.theme.colors.secondary};
        font-weight: bold;
    }

    h2{
        text-transform: uppercase;
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
        height: 380px;
        width: 100%;
        margin: 15px 0px;
    }

    @media (min-width: 1024px) {
        width: 300px;
        height: 380px;
        margin: 30px 10px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
`;

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const FavoriteScholarship = () => {
  const cards = useSelector((state) => state.cards.items);
  const items = useSelector((state) => state.scholarship.items);

  const dispatch = useDispatch();


  const list = [];

  for (const i in items) {
    if (cards.indexOf(items[i].id.toString()) > -1) {
      list.push(<ScholarshipCards key={items[i].id}>
                    <img src={items[i].university.logo_url} alt={items[i].university.name}/>
                    <h2>{items[i].university.name}</h2>
                    <p>{items[i].course.name}</p>
                    <h2>{items[i].university.score} &nbsp;
                    <Rating
                        name="half-rating-read"
                        defaultValue={items[i].university.score}
                        precision={0.1}
                        readOnly
                    /></h2>
                    <Hr />
                    <h2>{items[i].course.kind} - {items[i].course.shift}</h2>
                    <span>Inicio das aulas em: {items[i].start_date}</span>
                    <Hr />
                    <h3>Mensalidade com o Quero Bolsa:</h3>
                    <h4>{formatToBRL(items[i].full_price)}</h4>
                    <h5>{formatToBRL(items[i].price_with_discount)} <span>/mes</span></h5>
                    <ButtonsContainer>
                        <ButtonExcluir onClick={() => dispatch.cards.remove(items[i].id)}>Excluir</ButtonExcluir>
                        <ButtonOferta>Ver Oferta</ButtonOferta>
                    </ButtonsContainer>
                </ScholarshipCards>);
    }
  }


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
                    <ListContainer>
                        <AddButton title="Adicionar Bolsa" subtitle="Clique para adicionar bolsas de cursos do seu interesse" />
                        {list && list}
                    </ListContainer>

                </Container>
  );
};

export default FavoriteScholarship;

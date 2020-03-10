import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useSelector } from 'react-redux';

import { formatToBRL } from 'brazilian-values';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';
import Range from '../../components/Range';
import { SucessButton, CancelButton } from '../../components/Buttons';

const CheckBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 45%;
    padding: 10px 0;
`;

const Label = styled.label`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 500;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const OrdenationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.colors.text};
    div{
        text-align: right;
        .buttonIcon{
            display: flex;
            align-items: center;
            color: ${(props) => props.theme.colors.secondary}; 
            border: none;
            background: transparent;
            font-weight: 500;
        }
    }
`;

const Hr = styled.hr`
    border: 1px solid #EBEBEB;
    width: 100%;
    margin: 10px 10px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;


const Home = () => {
  const scholarship = useSelector((state) => state.scholarship);

  console.log(scholarship);
  const initialValues = {
    city: '',
    course: '',
    presencial: '',
    ead: '',
    price: 5000,
  };

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleSubmit,
          values,
        }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Select label="SELECIONE SUA CIDADE"
            options={
                [
                  '',
                  'São José dos Campos',
                  'São Paulo',
                  'Fortaleza',
                  'Jacareí',
                ]}
                name="city" />
            <Select label="SELECIONE O CURSO DE SUA PREFERÊNCIA"
            options={
                [
                  '',
                  'Administração',
                  'Arquitetura e Urbanismo',
                  'Biomedicina',
                  'Ciência da Computação',
                  'Ciências Econômicas',
                  'Educação Física',
                  'Engenharia Mecânica',
                  'Farmácia',
                  'Gastronomia',
                  'Gestão de Recursos Humanos',
                  'História',
                  'Jogos Digitais',
                  'Jornalismo',
                  'Marketing',
                  'Propaganda e Marketing',
                  'Sistemas de Informação',
                ]}
                name="course" />
            <Label>COMO VOCÊ QUER ESTUDAR?</Label>
            <CheckBoxContainer>
                <Checkbox name="presencial" id="Presencial" />
                <Checkbox name="ead" id="EaD" />
            </CheckBoxContainer>
            <Range label="ATÉ QUANTO PODE PAGAR ?" name="price" initValue={initialValues.price} min={0} max={10000} step={500} />

            <OrdenationContainer>
                <span>Resultado:</span>
                <div>
                    <span>Ordenar por</span>
                    <button type="button" onClick={() => console.log('ae')} className="buttonIcon">
                        <span>Nome da Faculdade </span>
                        <ArrowDropDownIcon />
                    </button>
                </div>
            </OrdenationContainer>

            <ListContainer>
                <Hr />
                {scholarship.items.map((item, index) => {
                  console.log(item);
                  return (
                  <div>
                      <div>
                          checkbox
                      </div>
                        <div>
                            <img src={item.university.logo_url} />
                        </div>
                        <div>
                            <p>{item.course.name}</p>
                            <p>{item.course.level}</p>
                            <p>Bolsa de {item.course.discount_percentage}%</p>
                            <p>{formatToBRL(item.price_with_discount)}/mês</p>
                        </div>
                        <Hr />
                    </div>);
                })}
            </ListContainer>

            <ButtonContainer>
                <CancelButton onClick={() => console.log('cancel')} text="Cancelar" />
                <SucessButton text="Adicionar bolsa(s)" />
            </ButtonContainer>
          </Form>
        )}
      </Formik>
  );
};
export default Home;

import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useSelector } from 'react-redux';


import Item from './List';
import Select from '../../../components/Select';
import Checkbox from '../../../components/Checkbox';
import Range from '../../../components/Range';
import { SucessButton, CancelButton } from '../../../components/Buttons';

const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div{
      display: flex;
      flex-direction: row;
      :last-child{
        margin-left: 5px;
      }
    }
    @media (min-width: 1024px) {
    width: 48%;   
  
  }
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

const SelectContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;  
  }`;

const ResponsiveFilterContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    padding: 10px 0;
  }
  @media (max-width: 1024px) {
    padding: 5px 0;
    display: flex;
    flex-direction: column; 
  }
`;

const RangeContainer = styled.div`
   @media (min-width: 1024px) {
    width: 48%;     
    padding-top: 5px;
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

const Titles = styled.div`
  color: ${(props) => props.theme.colors.text};
  h1{
    font-size: ${(props) => props.theme.fontSize.large};
  }
  p{
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  padding: 10px 0;
`;


const Filters = (props) => {
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
            <Titles>
            <h1>Adicionar bolsa</h1>
            <p>Filtre e adicione as bolsas do seu interesse.</p>
            </Titles>
            <SelectContainer>

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
            </SelectContainer>

            <ResponsiveFilterContainer>
              <CheckBoxContainer>
              <Label>COMO VOCÊ QUER ESTUDAR?</Label>
              <div>
                  <Checkbox label="Presencial" name="presencial" id="Presencial" />
                  <Checkbox label="EaD" name="ead" id="EaD" />
              </div>
              </CheckBoxContainer>

              <RangeContainer>
                <Range label="ATÉ QUANTO PODE PAGAR ?" name="price" initValue={initialValues.price} min={0} max={10000} step={500} />
              </RangeContainer>
            </ResponsiveFilterContainer>

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
                {scholarship.items.map((item, index) => (
                    <Item key={index} item={item} index={index} />
                ))}
            </ListContainer>

            <ButtonContainer>
                <CancelButton onClick={() => props.onclose()} text="Cancelar" />
                <SucessButton text="Adicionar bolsa(s)" />
            </ButtonContainer>
          </Form>
        )}
      </Formik>
  );
};
export default Filters;

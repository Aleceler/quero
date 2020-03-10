import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';
import Range from '../../components/Range';

const CheckBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 45%;
    padding: 10px 0;
`;

const Home = () => {
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
            <CheckBoxContainer>
                <Checkbox name="presencial" id="Presencial" />
                <Checkbox name="ead" id="EaD" />
            </CheckBoxContainer>
            <Range name="price" initValue={initialValues.price} min={0} max={10000} step={500} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
  );
};
export default Home;

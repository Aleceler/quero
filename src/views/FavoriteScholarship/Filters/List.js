import React from 'react';
import styled from 'styled-components';
import { formatToBRL } from 'brazilian-values';

import Checkbox from '../../../components/Checkbox';

const Hr = styled.hr`
    border: 1px solid #EBEBEB;
    width: 100%;
    margin: 10px 10px;
`;


const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CheckboxContainer = styled.div`
    min-width: 50px;
    display: flex;
    justify-content: center;

`;

const ImgContainer = styled.div`
    max-width: 120px;

    
    @media (max-width: 1024px) {
        img{
            width: 80px;
            height: 40px;
        }
    }
    @media (min-width: 1024px) {
        img{
            width: 120px;
            height: 60px;
        }
    }
`;

const InfoContainer = styled.div`
    
    h3{
        color: ${(props) => props.theme.colors.secondary};
    }
    span{
        color: ${(props) => props.theme.colors.verde};
        font-weight: 500;
    }

    @media (min-width: 1024px) {
        display: flex;
        width: 65%;
        justify-content: space-between;
    }

    @media (max-width: 1024px) {
        width: 130px;
    }
`;

const InfoValues = styled.div`
    @media (min-width: 1024px) {
        width: 110px;
        text-align: left;
    }
`;

const List = ({ index, item }) => (
  <>
    <ItemStyled>
        <CheckboxContainer>
            <Checkbox id={index} name={index} disabled={item.enabled === false} />
        </CheckboxContainer>
          <ImgContainer>
              <img src={item.university.logo_url} />
          </ImgContainer>
          <InfoContainer>
              <div>
                <h3>{item.course.name}</h3>
                <small>{item.course.level}</small>
              </div>
              <InfoValues>
                <p>Bolsa de <span>{item.discount_percentage}%</span></p>
                <span>{formatToBRL(item.price_with_discount)}/mês</span>
              </InfoValues>
          </InfoContainer>
        </ItemStyled>
        <Hr />
  </>
);
export default List;

import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  @media (max-width: 800px) {
    width: 100px;
  }
`;

export const ImageContainer = styled.img`
  width: 30%;

  @media (max-width: 800px) {
    width: 40px;
    margin-right: 80px;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  @media (max-width: 800px) {
    padding: 10px 10px;
  }
`;

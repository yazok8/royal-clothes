import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 60vw;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media (max-width: 800px) {
    margin-right: 100px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 80%;
    height: 80%;
  }
  @media (max-width: 800px) {
    width: 20px;
    padding-right: 5px;

    img {
      width: 40px;
    }
  }
`;

export const TextContainer = styled.span`
  width: 23%;

  @media (max-width: 800px) {
    width: 10px;
    font-size: 10px;
    margin-left: 48px;
    margin-right: 25px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

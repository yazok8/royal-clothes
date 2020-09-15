import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media (max-width: 800px) {
    align-items: center;
    margin-left: 100px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 117%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 800px) {
    width: 400px;
    font-size: 13px;
    justify-content: space-between;
    padding-right: 10px;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 40%;
  }

  @media (max-width: 800px) {
    margin-left: 10px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

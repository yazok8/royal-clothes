import styled from 'styled-components';

export const ContactUsContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 30%;

  @media screen and (max-width: 800px) {
    display: block;
    width: 300px;
    margin-left: 10%;
  }
`;

export const ContactPageTitle = styled.h2`
  margin: 10px 0;
`;

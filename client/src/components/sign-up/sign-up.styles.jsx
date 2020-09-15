import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media (max-width: 800px) {
    display: block;
    width: 300px;
    margin-left: 10px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

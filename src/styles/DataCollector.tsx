import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
`;

export const Form = styled.form`
  padding: 1rem 0 0 0;
`;

export const FormEntry = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0;
  
  &:nth-of-type(odd) {
    background-color: #ededed;
  }

  input {
    text-align: right;
  }

  .bold {
    font-weight: bold;
    text-transform: uppercase;
  }
`;
import styled from "styled-components";
import device from "../helpers/device";

export const Container = styled.div`

  @media ${device.tablet} {
    width: 48%;
  }
`;

export const Form = styled.form`
  padding: 0 0 0 0.1rem;;

  @media ${device.tablet} {
    padding: 1rem 0 0 0;
  }
`;

export const FormEntry = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0;

  input {
    text-align: right;
  }

  .bold {
    font-weight: bold;
    text-transform: uppercase;
  }

  @media ${device.laptop} {

    &:nth-of-type(odd) {
      background-color: #ededed;
    }

  }
`;
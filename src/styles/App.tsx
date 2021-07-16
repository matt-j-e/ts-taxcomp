import styled from "styled-components";
import device from "../helpers/device";

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
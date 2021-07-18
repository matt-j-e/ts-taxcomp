import styled from "styled-components";
import device from "../helpers/device";

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    padding: 1rem;
  }
`;
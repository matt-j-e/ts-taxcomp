import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  &.total-row {
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.5rem 0;
  }

  &.grand-total-row {
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.25rem 0;
    margin: 0.5rem 0;
    background-color: rgba(0,0,0,0.2);
  }
`;
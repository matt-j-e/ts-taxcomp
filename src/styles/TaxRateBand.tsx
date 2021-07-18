import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    display: inline-block;
    text-align: right;
    flex-basis: 25%;
  }

  span:first-of-type {
    flex-basis: 50%;
  }
`;
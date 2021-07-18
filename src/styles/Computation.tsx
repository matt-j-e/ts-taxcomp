import styled from "styled-components";
import device from "../helpers/device";

export const Container = styled.div`
  width: 90%;
  padding: 5%;

  @media ${device.tablet} {
    width: 48%;
    padding: 0;
  }
`;

export const Section = styled.section`
  padding: 0 0 1rem 0;
  margin:  0 0 1.8rem 0;

`;

export const SectionHeading = styled.h3`
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
  background-color: rgba(0,0,0,0.1);
`;

export const TaxRateBand = styled.div`
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
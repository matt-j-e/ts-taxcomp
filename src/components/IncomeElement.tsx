import { Container } from "../styles/IncomeElement";
import { numberFormat } from "../helpers/numberFormat";

interface IncomeElementProps {
  name: string;
  value: string | number;
  elementClass?: string | null;
  decimals?: string
}

const IncomeElement = ({ name, value, elementClass, decimals }: IncomeElementProps) => {
  if (!elementClass) elementClass = "";
  return (
    <Container className={`${elementClass}`}>
      <span>{name}</span>
      <span>{numberFormat(Number(value), Number(decimals))}</span>
    </Container>
  )
};

export default IncomeElement;
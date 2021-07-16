import { Container } from "../styles/IncomeElement";

interface IncomeElementProps {
  name: string;
  value: string | number;
  elementClass?: string | null;
}

const IncomeElement = ({ name, value, elementClass }: IncomeElementProps) => {
  if (!elementClass) elementClass = "";
  return (
    <Container className={`${elementClass}`}>
      <span>{name}</span>
      <span>{Number(value)}</span>
    </Container>
  )
};

export default IncomeElement;
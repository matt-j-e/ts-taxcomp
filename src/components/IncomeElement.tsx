interface IncomeElementProps {
  name: string;
  value: string | number;
  elementClass: string;
}

const IncomeElement = ({ name, value, elementClass }: IncomeElementProps) => {
  return (
    <div className={`${elementClass}`}>
      <span>{name}</span>
      <span>{Number(value)}</span>
    </div>
  )
};

export default IncomeElement;
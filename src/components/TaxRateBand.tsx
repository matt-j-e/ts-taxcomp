import { numberFormat } from "../helpers/numberFormat";
import { Row } from "../styles/TaxRateBand";

interface Props {
  taxable: number;
  rate: number;
  amountDue: number;
}

const TaxRateBand = ({ taxable, rate, amountDue }: Props) => {
  return (
    <Row>
      <span>{numberFormat(taxable)}</span>
      <span>at {rate * 100}%</span>
      <span>{numberFormat(amountDue, 2)}</span>
    </Row>
  )
};

export default TaxRateBand;

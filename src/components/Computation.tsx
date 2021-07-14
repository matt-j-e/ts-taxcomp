import { Data } from "../interfaces";
import { Comp } from "../resources/comp";

interface AppProps {
  fields: Data;
  c4Liable: boolean;
}

const Computation = ({ fields, c4Liable }: AppProps) => {
  const { employment, pensionPrivate, pensionState, selfEmployment, partnership, rental, interest, dividend } = fields
  const comp = new Comp(fields, c4Liable, 2021);

  return (
    <div>
      <h2>Income tax computation</h2>
      <div>
        <span>Employment</span>
        <span>{Number(employment)}</span>
      </div>
      <div>
        <span>Pension</span>
        <span>{Number(pensionPrivate) + Number(pensionState)}</span>
      </div>
      <div>
        <span>Self Employment</span>
        <span>{Number(selfEmployment)}</span>
      </div>
      <div>
        <span>Partnership</span>
        <span>{Number(partnership)}</span>
      </div>
      <div>
        <span>Rental</span>
        <span>{Number(rental)}</span>
      </div>
      <div>
        <span>Interest</span>
        <span>{Number(interest)}</span>
      </div>
      <div>
        <span>Dividends</span>
        <span>{Number(dividend)}</span>
      </div>
      <div>
        <span>Total income</span>
        <span>{comp.totalIncome}</span>
      </div>
    </div>
  )
}

export default Computation;
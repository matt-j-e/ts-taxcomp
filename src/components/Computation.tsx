import { Data } from "../interfaces";
import { Comp } from "../resources/comp";

interface AppProps {
  fields: Data;
  c4Liable: boolean;
}

const Computation = ({ fields, c4Liable }: AppProps) => {
  const { taxYear, employment, pensionPrivate, pensionState, selfEmployment, partnership, rental, interest, dividend } = fields
  const comp = new Comp(fields, c4Liable, Number(taxYear));

  return (
    <div>
      <h2>Income tax computation</h2>
      <section>
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
        <div>
          <span>Personal Allowance</span>
          <span>{comp.availablePA}</span>
        </div>
        <div>
          <span>Taxable income</span>
          <span>{Math.max(comp.totalIncome - comp.availablePA, 0)}</span>
        </div>
      </section>

      <section>
        <h3>earned income tax</h3>
        <div>
          <span>{comp.earnedIncomeBRB}</span>
          <span>at {comp.br * 100}%</span>
          <span>{comp.earnedIncomeBRTax}</span>
        </div>
        <div>
          <span>{comp.earnedIncomeHRB}</span>
          <span>at {comp.hr * 100}%</span>
          <span>{comp.earnedIncomeHRTax}</span>
        </div>
        <div>
          <span>{comp.earnedIncomeARB}</span>
          <span>at {comp.ar * 100}%</span>
          <span>{comp.earnedIncomeARTax}</span>
        </div>
      </section>

      <section>
        <h3>savings income tax</h3>
        <div>
          <span>{comp.savingsIncomeBRB}</span>
          <span>at {comp.br * 100}%</span>
          <span>{comp.savingsIncomeBRTax}</span>
        </div>
        <div>
          <span>{comp.savingsIncomeHRB}</span>
          <span>at {comp.hr * 100}%</span>
          <span>{comp.savingsIncomeHRTax}</span>
        </div>
        <div>
          <span>{comp.savingsIncomeARB}</span>
          <span>at {comp.ar * 100}%</span>
          <span>{comp.savingsIncomeARTax}</span>
        </div>
      </section>

      <section>
        <h3>dividend income tax</h3>
        <div>
          <span>{comp.dividendIncomeBRB}</span>
          <span>at {comp.brdiv * 100}%</span>
          <span>{comp.dividendIncomeBRTax}</span>
        </div>
        <div>
          <span>{comp.dividendIncomeHRB}</span>
          <span>at {comp.hrdiv * 100}%</span>
          <span>{comp.dividendIncomeHRTax}</span>
        </div>
        <div>
          <span>{comp.dividendIncomeARB}</span>
          <span>at {comp.ardiv * 100}%</span>
          <span>{comp.dividendIncomeARTax}</span>
        </div>
      </section>

      <section>
        <h3>Totals</h3>
        <div>
          <span>Total tax</span>
          <span>{comp.allTax}</span>
        </div>
        <div>
          <span>Class 4 NICs</span>
          <span>{comp.c4liability}</span>
        </div>
        <div>
          <span>Total tax & national insurance</span>
          <span>{comp.allTaxNI}</span>
        </div>
      </section>
      <br />
    </div>
  )
}

export default Computation;
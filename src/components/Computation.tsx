import { Data } from "../interfaces";
import { Comp } from "../resources/comp";
import IncomeElement from "./IncomeElement";
import { MainHeading } from "../styles/Global";
import { Container, Section, SectionHeading, TaxRateBand } from "../styles/Computation";

interface ComputationProps {
  fields: Data;
  c4Liable: boolean;
}

const Computation = ({ fields, c4Liable }: ComputationProps) => {
  const { taxYear, employment, pensionPrivate, pensionState, selfEmployment, partnership, rental, interest, dividend } = fields
  const comp = new Comp(fields, c4Liable, Number(taxYear));

  return (
    <Container>
      <MainHeading>Income tax computation</MainHeading>
      <Section>
        <IncomeElement name="Employment" value={employment} />
        <IncomeElement name="Private Pension" value={pensionPrivate} />
        <IncomeElement name="State Pension" value={pensionState} />
        <IncomeElement name="Self Employment" value={selfEmployment} />
        <IncomeElement name="Partnership" value={partnership} />
        <IncomeElement name="Rental" value={rental} />
        <IncomeElement name="Interest" value={interest} />
        <IncomeElement name="Dividends" value={dividend} />
        <IncomeElement name="Total income" value={comp.totalIncome} elementClass="total-row" />
        <IncomeElement name="Personal Allowance" value={comp.availablePA} />
        <IncomeElement name="Taxable Income" value={Math.max(comp.totalIncome - comp.availablePA, 0)} elementClass="total-row" />
      </Section>

      <Section>
        <SectionHeading>earned income</SectionHeading>
        <TaxRateBand>
          <span>{comp.earnedIncomeBRB}</span>
          <span>at {comp.br * 100}%</span>
          <span>{comp.earnedIncomeBRTax}</span>
        </TaxRateBand>
        <TaxRateBand>
          <span>{comp.earnedIncomeHRB}</span>
          <span>at {comp.hr * 100}%</span>
          <span>{comp.earnedIncomeHRTax}</span>
        </TaxRateBand>
        <TaxRateBand>
          <span>{comp.earnedIncomeARB}</span>
          <span>at {comp.ar * 100}%</span>
          <span>{comp.earnedIncomeARTax}</span>
        </TaxRateBand>
      </Section>

      <Section>
        <SectionHeading>savings income</SectionHeading>
        { comp.savingsIncomeBRZero > 0 && 
          <TaxRateBand>
            <span>{comp.savingsIncomeBRZero}</span> 
            <span>at 0%</span>
            <span>0</span>
          </TaxRateBand>
        }
        <TaxRateBand>
          <span>{comp.savingsIncomeBRB - comp.savingsIncomeBRZero}</span>
          <span>at {comp.br * 100}%</span>
          <span>{comp.savingsIncomeBRTax}</span>
        </TaxRateBand>
        { comp.savingsIncomeHRZero > 0 && 
          <TaxRateBand>
            <span>{comp.savingsIncomeHRZero}</span> 
            <span>at 0%</span>
            <span>0</span>
          </TaxRateBand>
        }
        <TaxRateBand>
          <span>{comp.savingsIncomeHRB - comp.savingsIncomeHRZero}</span>
          <span>at {comp.hr * 100}%</span>
          <span>{comp.savingsIncomeHRTax}</span>
        </TaxRateBand>
        <TaxRateBand>
          <span>{comp.savingsIncomeARB}</span>
          <span>at {comp.ar * 100}%</span>
          <span>{comp.savingsIncomeARTax}</span>
        </TaxRateBand>

      </Section>

      <Section>
        <SectionHeading>dividend income</SectionHeading>
        { comp.dividendIncomeBRZero > 0 && 
          <TaxRateBand>
            <span>{comp.dividendIncomeBRZero}</span> 
            <span>at 0%</span>
            <span>0</span>
          </TaxRateBand>
        }
        <TaxRateBand>
          <span>{comp.dividendIncomeBRB - comp.dividendIncomeBRZero}</span>
          <span>at {comp.brdiv * 100}%</span>
          <span>{comp.dividendIncomeBRTax}</span>
        </TaxRateBand>
        { comp.dividendIncomeHRZero > 0 && 
          <TaxRateBand>
            <span>{comp.dividendIncomeHRZero}</span> 
            <span>at 0%</span>
            <span>0</span>
          </TaxRateBand>
        }
        <TaxRateBand>
          <span>{comp.dividendIncomeHRB - comp.dividendIncomeHRZero}</span>
          <span>at {comp.hrdiv * 100}%</span>
          <span>{comp.dividendIncomeHRTax}</span>
        </TaxRateBand>
        <TaxRateBand>
          <span>{comp.dividendIncomeARB}</span>
          <span>at {comp.ardiv * 100}%</span>
          <span>{comp.dividendIncomeARTax}</span>
        </TaxRateBand>
      </Section>

      <Section>
        <IncomeElement name="Total tax" value={comp.allTax} elementClass="grand-total-row" />
        { c4Liable && 
        <>
        <IncomeElement name="Class 4 NICs" value={comp.c4liability} />
        <IncomeElement name="Total tax & national insurance" value={comp.allTaxNI} elementClass="grand-total-row" /> 
        </> }
      </Section>
      <br />
    </Container>
  )
}

export default Computation;
import { Data } from "../interfaces";
import { Comp } from "../resources/comp";
import IncomeElement from "./IncomeElement";
import { MainHeading } from "../styles/Global";
import { Container, Section, SectionHeading } from "../styles/Computation";
import TaxRateBand from "./TaxRateBand";

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
        <TaxRateBand taxable={comp.earnedIncomeBRB} rate={comp.br} amountDue={comp.earnedIncomeBRTax} />
        <TaxRateBand taxable={comp.earnedIncomeHRB} rate={comp.hr} amountDue={comp.earnedIncomeHRTax} />
        <TaxRateBand taxable={comp.earnedIncomeARB} rate={comp.ar} amountDue={comp.earnedIncomeARTax} />
      </Section>

      <Section>
        <SectionHeading>savings income</SectionHeading>
        { comp.savingsIncomeBRZero > 0 && <TaxRateBand taxable={comp.savingsIncomeBRZero} rate={0} amountDue={0} />}
        <TaxRateBand taxable={comp.savingsIncomeBRB - comp.savingsIncomeBRZero} rate={comp.br} amountDue={comp.savingsIncomeBRTax} />
        { comp.savingsIncomeHRZero > 0 && <TaxRateBand taxable={comp.savingsIncomeHRZero} rate={0} amountDue={0} />}
        <TaxRateBand taxable={comp.savingsIncomeHRB - comp.savingsIncomeHRZero} rate={comp.hr} amountDue={comp.savingsIncomeHRTax} />
        <TaxRateBand taxable={comp.savingsIncomeARB} rate={comp.ar} amountDue={comp.savingsIncomeARTax} />
      </Section>

      <Section>
        <SectionHeading>dividend income</SectionHeading>
        { comp.dividendIncomeBRZero > 0 && <TaxRateBand taxable={comp.dividendIncomeBRZero} rate={0} amountDue={0} />}
        <TaxRateBand taxable={comp.dividendIncomeBRB - comp.dividendIncomeBRZero} rate={comp.brdiv} amountDue={comp.dividendIncomeBRTax} />
        { comp.dividendIncomeHRZero > 0 && <TaxRateBand taxable={comp.dividendIncomeHRZero} rate={0} amountDue={0} />}
        <TaxRateBand taxable={comp.dividendIncomeHRB - comp.dividendIncomeHRZero} rate={comp.hrdiv} amountDue={comp.dividendIncomeHRTax} />
        <TaxRateBand taxable={comp.dividendIncomeARB} rate={comp.ardiv} amountDue={comp.dividendIncomeARTax} />
      </Section>

      <Section>
        <IncomeElement name="Total tax" value={comp.allTax} elementClass="grand-total-row" decimals="2" />
        { c4Liable && 
        <>
        <IncomeElement name="Class 4 NICs" value={comp.c4liability} decimals="2" />
        <IncomeElement name="Total tax & national insurance" value={comp.allTaxNI} elementClass="grand-total-row" decimals="2" /> 
        </> }
      </Section>
      <br />
    </Container>
  )
}

export default Computation;
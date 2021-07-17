import { Data } from "../interfaces"
import { Container, Form, FormEntry } from "../styles/DataCollector";
import { MainHeading } from "../styles/Global";

interface AppProps {
  fields: Data;
  setFields: React.Dispatch<React.SetStateAction<Data>>;
  c4Liable: boolean;
  setC4Liable: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataCollector = ({ fields, setFields, c4Liable, setC4Liable }: AppProps) => {

  // const handleAddData = (e: React.FocusEvent<HTMLSelectElement> | React.FocusEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log(fields, c4Liable);
  // }

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => {
      return {
        ...prev, [e.target.name]: e.target.value,
      };
    });
  };

  const handleC4Change = () => {
    setC4Liable(!c4Liable);
  }

  return (
    <Container>
      <MainHeading>Income Details</MainHeading>
      <Form>
        <FormEntry>
          <label className="bold" htmlFor="taxYear">Tax Year ended</label>
          <select name="taxYear" id="taxYear" value={fields.taxYear} onChange={handleFieldChange}>
            <option value="2022">5th April 2022</option>
            <option value="2021">5th April 2021</option>
            <option value="2020">5th April 2020</option>
            <option value="2019">5th April 2019</option>
          </select>
        </FormEntry>

        <FormEntry>
          <label htmlFor="employment">Employment</label>
          <input
            type="text"
            id="employment"
            name="employment"
            value={fields.employment}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="pensionState">State Pension</label>
          <input
            type="text"
            id="pensionState"
            name="pensionState"
            value={fields.pensionState}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="pensionPrivate">Private Pension</label>
          <input
            type="text"
            id="pensionPrivate"
            name="pensionPrivate"
            value={fields.pensionPrivate}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="selfEmployment">Self Employment</label>
          <input
            type="text"
            id="selfEmployment"
            name="selfEmployment"
            value={fields.selfEmployment}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="partnership">Partnership</label>
          <input
            type="text"
            id="partnership"
            name="partnership"
            value={fields.partnership}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="rental">Rental</label>
          <input
            type="text"
            id="rental"
            name="rental"
            value={fields.rental}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="interest">Interest</label>
          <input
            type="text"
            id="interest"
            name="interest"
            value={fields.interest}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="dividend">Dividends</label>
          <input
            type="text"
            id="dividend"
            name="dividend"
            value={fields.dividend}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="pensionContrib">Pension Contributions (gross)</label>
          <input
            type="text"
            id="pensionContrib"
            name="pensionContrib"
            value={fields.pensionContrib}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="giftAid">Gift Aid Donations (gross)</label>
          <input
            type="text"
            id="giftAid"
            name="giftAid"
            value={fields.giftAid}
            onChange={handleFieldChange}
            // onBlur={handleAddData}
          />
        </FormEntry>

        <FormEntry>
          <label htmlFor="c4Liable">Tick if you are liable for C4 NICs</label>
          <input
            type="checkbox"
            id="c4Liable"
            name="c4Liable"
            checked={c4Liable}
            onChange={handleC4Change}
            // onBlur={handleAddData}
          />
        </FormEntry>
      </Form>
    </Container>
  )


}

export default DataCollector;
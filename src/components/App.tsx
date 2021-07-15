import { useState } from 'react';
import DataCollector from './DataCollector';
import Computation from './Computation';
import { Data } from "../interfaces"

function App() {

  const initialState: Data = {
    taxYear: "2021",
    employment: "",
    pensionState: "",
    pensionPrivate: "",
    selfEmployment: "",
    partnership: "",
    rental: "",
    interest: "",
    dividend: "",
    pensionContrib: "",
    giftAid: "",
  };

  const [fields, setFields] = useState<Data>(initialState);
  const [c4Liable, setC4Liable] = useState<boolean>(true);

  return (
    <div className="App">
      <DataCollector
        fields={fields}
        setFields={setFields}
        c4Liable={c4Liable}
        setC4Liable={setC4Liable}
      />
      <Computation
        fields={fields}
        c4Liable={c4Liable}
      />
    </div>
  );
}

export default App;

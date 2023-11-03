import React from 'react';
import { AdaptiveForm } from "@aemforms/af-react-renderer";
import { mappings } from "@aemforms/af-react-components";
//import json from './forms/loan-form-wizard.form.json';
import json from './forms/creditcardApplication.json';
//import json from './forms/AFBasedForm.json';
import './App.css';
import customMappings from './utils/mappings';

function App() {
  return (
    <div>
      <div className='header-logo'><h2>{json?.metadata?.name || "Adaptive Form"}</h2></div>
      <div className="app">
        <AdaptiveForm mappings={customMappings} formJson={json} />
      </div>
    </div>
  );
}
export default App;
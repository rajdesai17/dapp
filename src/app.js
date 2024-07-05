import React from 'react';
import EmergencyReportForm from './components/EmergencyReportForm';
import EmergencyList from './components/EmergencyList'; // Placeholder for now

const App = () => {
  return (
    <div className="App">
      <h1>Disaster Management dApp</h1>
      <EmergencyReportForm />
      <EmergencyList emergencies={[]} />  // Placeholder for emergencies list
    </div>
  );
};

export default App;

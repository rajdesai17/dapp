import React, { useState } from 'react';
import web3 from '../web3'; // Import web3 instance

const EmergencyReportForm = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Connect to Polygon network using web3
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract( // Replace with your contract ABI and address
      // ... your contract ABI
      , // Replace with your deployed contract address
      { from: accounts[0] } // Use first account for now
    );

    // Call contract function to add emergency report (replace with your function name)
    try {
      await contract.methods.addEmergency(location, description).send({
        from: accounts[0]
      });
      alert('Emergency report submitted!');
      setLocation(''); // Clear form after successful submission
      setDescription('');
    } catch (error) {
      console.error(error);
      alert('Error submitting report. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Location:</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Report Emergency</button>
    </form>
  );
};

export default EmergencyReportForm;

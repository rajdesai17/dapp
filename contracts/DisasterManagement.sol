// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract DisasterManagement {
  // Define a struct to store emergency data
  struct Emergency {
    string location;
    string description;
    uint256 timestamp; // Time of reporting
  }

  // Mapping to store emergency reports indexed by ID
  mapping(uint256 => Emergency) public emergencies;
  uint256 public emergencyCount;

  // Function to add a new emergency report
  function addEmergency(string calldata location, string calldata description) public {
    emergencies[emergencyCount] = Emergency(location, description, block.timestamp);
    emergencyCount++;
  }

  // Function to retrieve emergency data by ID (optional)
  function getEmergency(uint256 id) public view returns (Emergency memory) {
    return emergencies[id];
  }
}

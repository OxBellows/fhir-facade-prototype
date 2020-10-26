let dummyPatient = require("./dummy/dummyPatient.json");

module.exports.search = async (args, context) => {
  console.log("Patient search");
  throw new Error('Unable to locate patients - not yet implemented');
};

module.exports.searchById = async (args, context) => {
  console.log("Patient searchById");
  // return dummy patient
  return dummyPatient;
  throw new Error('Unable to locate patients');
};

module.exports.create = async (args, context) => {
  throw new Error('Unable to create patient - not yet implemented');
};
const { VERSIONS, RESOURCES } = require('@asymmetrik/node-fhir-server-core').constants;
const env = require('var');

// Set up whitelist
let whitelist_env = env.WHITELIST && env.WHITELIST.split(',').map(host => host.trim()) || false;

// If no whitelist is present, disable cors
// If it's length is 1, set it to a string, so * works
// If there are multiple, keep them as an array
let whitelist = whitelist_env && whitelist_env.length === 1
	? whitelist_env[0]
	: whitelist_env;

/**
 * @name fhirServerConfig
 * @summary @asymmetrik/node-fhir-server-core configurations.
 */
let fhirServerConfig = {
	profiles: {
    diagnosticreport: {
      service: './services/diagnosticreport/diagnosticreport.service.js',
      versions: [VERSIONS['4_0_0']],
    },
    medication: {
      service: './services/medication/medication.service.js',
      versions: [VERSIONS['4_0_0']],
    },
    medicationdispense: {
      service: './services/medicationdispense/medicationdispense.service.js',
      versions: [VERSIONS['4_0_0']],
    },
    medicationrequest: {
      service: './services/medicationrequest/medicationrequest.service.js',
      versions: [VERSIONS['4_0_0']],
    },
    observation: {
      service: './services/observation/observation.service.js',
      versions: [VERSIONS['4_0_0']],
    },
    patient: {
      service: './services/patient/patient.service.js',
      versions: [VERSIONS['4_0_0']],
    },
    practitioner: {
      service: './services/practitioner/practitioner.service.js',
      versions: [VERSIONS['4_0_0']],
    }
  },
};

module.exports = {
	fhirServerConfig
};
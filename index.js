const { initialize, loggers } = require('@asymmetrik/node-fhir-server-core');
const FHIRServer = require('@asymmetrik/node-fhir-server-core');

const {
	fhirServerConfig
} = require('./config');

let server = initialize(fhirServerConfig);
let logger = loggers.get('default');

server.listen(3000, () => {
  logger.info('Starting the FHIR Server at localhost:3000');
});
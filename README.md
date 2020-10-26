# fhir-facade-prototype

A prototype of a node.js fhir facade server. Only a subset of available resources are enabled (through config.js). Currently, all resources have a search method that will return an error saying the method is not implemented. The patient resource also has a searchById method that will return dummy patient data.

Local dev instructions:

1. Install Node.js + NPM: https://www.npmjs.com/get-npm

2. Navigate to the project directory

2. Run npm install to install dependencies

3. Run npm run start - it may take a moment for the server to run

You can test the server by importing the Postman collection inside of /postman and using those requests while the server is running.

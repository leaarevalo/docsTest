const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/routes/index'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('../src/app.js')           // Your project's root file
})
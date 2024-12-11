import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'API Backend',
        description: 'Documentación generada automáticamente con Swagger',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = ['./src/index.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);

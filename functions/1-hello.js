// domain/.netlify/functions/1-hello

//const person = { name: 'VANIA'}
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'Hello world TEST with api example',
    }
}
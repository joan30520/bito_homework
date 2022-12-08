const testFunction = require("./api");
const schema= require('./schema.json'); 
const Ajv = require("ajv");
const ajv = new Ajv({ code: { source: true } })


test(' test api schema ', async() =>{
  const data = await testFunction();
  console.log(data.body);
  const validate = ajv.compile(schema);
  const valid = validate(data.body);
  expect(data.statusCode).toBe(200);
  expect(ajv.validate(schema, data.body)).toBe(true);
  if (!valid) console.log(validate.errors);
});

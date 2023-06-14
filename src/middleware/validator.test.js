
const supertest = require('supertest');
const {app} = require('../server');
const req = supertest(app);

describe('Server test', () => {
it('right name', async () => {
    const res = await req.get('/person?name=moahammad');
    expect(res.status).toEqual(200);
  })
  it('name error', async () => {
    const res = await req.get('/person?name=');
    expect(res.status).toEqual(500);
  })
  it('name error', async () => {
    const res = await req.get('/person?name=idrees');
    console.info(req)
    expect(res._body.message).toEqual(' name is  idrees ');
  })
})
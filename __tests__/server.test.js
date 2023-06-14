'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const req = supertest(app);

describe('Server test', () => {
  it('Handel not found pages', async () => {
    const res = await req.get('/pLPAPAL');
    expect(res.status).toEqual(404);

  });
  it('method not found pages', async () => {
    const res = await req.put('/pLPAPAL');
    expect(res.status).toEqual(404);

  });

  it('Handle the HOME path', async () => {
    const res = await req.get('/');
    expect(res.status).toEqual(200);
    expect(res.body.message).toEqual('Welcome to Home page')
  })

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
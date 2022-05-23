const request = require('supertest');
const buildApp = require('../../app');
const UserRepo = require('../../repos/user-repo');
const pool = require('../../pool');
const Context = require('../context');

let context;

beforeAll(async () => {
  context = await Context.build();
});

beforeEach(async () => {
  await context.reset();
});

afterAll(() => {
  return context.close();
});

it('create a user', async () => {
  const startingCount = await UserRepo.count();
  await request(buildApp()).post('/users').send({ username: 'Test Username', bio: 'Test Bio' }).expect(201);
  const finishCount = await UserRepo.count();
  expect(finishCount - startingCount).toEqual(1);
});

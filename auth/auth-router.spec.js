const server = require("../api/server.js");
const request = require("supertest");
const db = require("../database/dbConfig.js");
const Users = require("../users/users-model.js");

describe("register", () => {
  it("should return status 201", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "testj", password: "password1" });
    expect(res.status).toBe(201);
  });

  it("should return the new user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "jacktest", password: "password1" });
    expect({ username: "jacktest" });
  });
  beforeEach(async () => {
    await db("users").truncate();
  });
});

describe("login", () => {
  it("should return status 200", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "jacktest", password: "password1" });
    expect(res.status).toBe(200);
  });

  it("should return a token", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "jacktest", password: "password1" });

    expect(res.body.token);
  });
});
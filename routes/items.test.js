process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let items = require("../fakeDb");
const { beforeEach, afterEach } = require("node:test");

let snickers = { name: "Snickers", price: "2.99" };

beforeEach(function () {
  items.push(snickers);
});

afterEach(function () {
  items.length = 0;
});

describe("Get /items", function () {
  test("Gets a list of items", async function () {
    const resp = await request(app).get("/cats");
    expect(resp.statusCode).toBe(200);

    expect(resp.body).toEqual({ items: [snickers] });
  });
});

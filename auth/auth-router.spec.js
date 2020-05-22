const supertest = require("supertest");

const server = require("../api/server");
const db = require("../database/dbConfig");


beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

describe("GET /", () => {
    it("should return http status code 200 OK", () => {
      return (
        supertest(server)
          .get("/")
          // .expect(200) // from supertest
          .then(response => {
            // from jest
            expect(response.status).toBe(200);
          })
      );
    });

    it("should return { api: 'I want to take a nap' }", () => {
        return supertest(server)
          .get("/")
          .then(response => {
            expect(response.body).toEqual({ api: "I want to take a nap" });
            expect(response.body.api).toBeDefined();
            expect(response.body.api).toBe("I want to take a nap");
          });
      });
    });

    test("POST /api/auth/register", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send({ username: "kitty", password: "meow" });
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        username: "kitty",
      });
    });



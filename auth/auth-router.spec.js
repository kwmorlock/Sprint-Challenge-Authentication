const supertest = require("supertest");

const server = require("../api/server");
const db = require("../database/dbConfig");


// beforeEach(() => {
//   return db.migrate
//     .rollback()
//     .then(() => db.migrate.latest())
//     .then(() => db.seed.run());
// });

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

    // test("POST /api/auth/register", async () => {
    //   const res = await supertest(server)
    //     .post("/api/auth/register")
        // .send({ username: "kittys", password: "meow" });
    //   expect(res.status).toBe(500);
    //   // expect(res.body).toMatchObject({
    //   //   username: "kitty",
    //   // });
    // });


    // describe("Post /", () => {
    //   it("should return http status code 200 OK", () => {
    //     return (
    //       supertest(server)
    //         .post("/api/auth/register")
    //         .send({ username: "kittys", password: "meow" })
    //         .then(res => {
    //           expect(res.status).toBe(201);
    //         })
    //         // .expect(200) // from supertest
    //         // .then(response => {
    //         //   // from jest
    //         //   expect(response.status).toBe(200);
    //         // })
    //     );
    //   });

    // })

    test("POST /api/users/register to be failing", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send({ username: "", password: "meow" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password shoud be alphanumeric"
      });
    });

    // describe("GET /", () => {
    //   it("should return http status code 200 OK", () => {
    //     return (
    //       supertest(server)
    //         .post("/api/auth/register")
    //         .send({ username: "kitty", password: "meow" })
    //         // .expect(200) // from supertest
    //         .then(response => {
    //           // from jest
    //           expect(response.status).toBe(200);
    //         })
    //     );
    //   });
    // })

    test("POST /api/auth/login to be failing", async () => {
      const res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "kitty", password: "meow" });
      expect(res.status).toBe(500);
    });

    test("POST /api/auth/login to be failing", async () => {
      const res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "", password: "meow" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password shoud be alphanumeric"
      });
    });


describe("GET /", () => {
  it("should return http status code 200 OK", () => {
    return (
      supertest(server)
        .get("/api/jokes")
        .then(response => {
          // from jest
          expect(response.status).toBe(400);
        })
    );
  });

  it("should return { api: 'I want to take a nap' }", () => {
      return supertest(server)
        .get("/api/jokes")
        .then(response => {
          expect(response.body).toMatchObject({
            message: "Please provide the authentication information"
          });
        });
    });
  });


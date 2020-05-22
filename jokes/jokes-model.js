//maybe

const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "username", "password")
    // .join("roles as r", "u.role", "r.id")
    // .select("u.id", "u.username", "r.name as role")
    // .orderBy("u.id");
}

function findBy(filter) {
  console.log("filter", filter);
  return db("users").where(filter);
    // .join("roles as r", "u.role", "r.id")
    // .where(filter)
    // .select("u.id", "u.username", "r.name as role", "u.password")
    // .orderBy("u.id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}



// async function add(user) {
//   // try {
//   //   const [id] = await db("users").insert(user, "id");

//   //   return findById(id);
//   // } catch (error) {
//   //   throw error;
//   // }
//   return db("users").insert(user).then( res => {
//     return { id: res[0]};
//   })
// }


// function findBy(filter) {
//   console.log("filter", filter);
//   return db("users").where(filter).first();
//     // .join("roles as r", "u.role", "r.id")
//     // .where(filter)
//     // .select("u.id", "u.username", "r.name as role", "u.password")
//     // .orderBy("u.id");
// }
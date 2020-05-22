// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// module.exports = knex(knexConfig.development);

const knex = require("knex");

const knexconfig = require("../knexfile.js");
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexconfig[environment]);


// src/config/env.js
require('dotenv').config();

const required = ['PORT', 'JWT_SECRET'];
required.forEach((k) => {
  if (!process.env[k]) throw new Error(`Missing env: ${k}`);
});

module.exports = {
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DATABASE_URL,
};

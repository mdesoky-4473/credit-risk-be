require("dotenv").config();
const client = require("./db.js"); 

(async () => {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Database seeded successfully.");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    await client.end(); // close the connection
  }
})();

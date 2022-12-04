const app = require("./src/config/express");
const { connectMongo } = require("./src/config/database");
const { PORT } = require("./src/config/secrets");

(async () => {
  try {
    await connectMongo();
    console.log("DATABASE IS CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log("DATABASE CONNECTION FAILED", err);
  }
})();

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
});

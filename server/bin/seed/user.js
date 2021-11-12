// create a test data set of valid users
require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const UserModel = require("./../../model/users"); // fetch the model to validate our user document before insertion (in database)

(async function insertUser() {
  const user = {
    email: "themealdb@mail.com",
    password: "1234",
    username: "TheMealDb"
  }
  try {
    const inserted = await UserModel.create(user); // insert docs in db
    console.log(`seed user done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();

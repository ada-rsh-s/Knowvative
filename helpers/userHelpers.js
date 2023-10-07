const db = require("../config/connection");
const collection = require("../config/collections");
const bcrypt = require("bcrypt");

module.exports = {

    signin: (userDetails) => {
        console.log(userDetails);
    return new Promise(async (resolve, reject) => {
      const user = await db
        .get()
        .collection(collection.USER_COLLECTION)
        .findOne({ Username: userDetails.Username });
      if (user) {
        bcrypt
          .compare(userDetails.Password, user.Password)
          .then((status) => {
            if (status) {
              response.student = student;
              response.status = true;
              resolve(response);
            } else {
              resolve({ status: false });
            }
          });
      } else {
        resolve({ status: false });
      }
    });
  },
}; 

const fs = require("fs");

const writeFile = (content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Create",
      });
    });
  });
};

module.exports = { writeFile };

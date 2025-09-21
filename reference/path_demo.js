const path = require('path');

// Base file name
function logPathDemo() {
  console.log("Full path: " + __filename); // entire path + file name
  console.log("This file name: " + path.basename(__filename)); // only the file name
  console.log("Path holding this file: " + path.dirname(__filename)); // gives the path
  console.log("Folder name: " + path.basename(__dirname)); // gives only the parent folder

  // File Extension

  console.log("This file's extension: " + path.extname(__filename));

  // Create path object
  const myObject = path.parse(__filename);
  console.log("The __filename object: " + JSON.stringify(myObject, null, "\t"));
  // console.log(path.parse(__filename));

  // Concatenate paths

  console.log(path.join(__dirname, 'new-folder', 'html.html'));
}


module.exports = logPathDemo
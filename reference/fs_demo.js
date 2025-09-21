const fs = require('fs');
const path = require('path');

// Create Folder and write to a file created there

/* fs.mkdir(path.join(__dirname, '/testMkdir'), {}, err => {
  if (err) throw err;
  console.log('Folder Created...');
  fs.writeFile(path.join(__dirname, '/testMkdir', 'hello.txt'), 'Hello World!', err => {
    if (err) throw err;
    console.log('File Created and Written to...');
  });
}); */

// Append to file

/* setTimeout(() => fs.appendFile(path.join(__dirname, '/testMkdir', 'hello.txt'), '\nHello World Again!', err => {
  if (err) throw err;
  console.log('Appended to hello.txt');
}), 1000); // timeout so it doesnt overwrite or insert the text while the other one is being written since its asynchronous */

// Read File

/* setTimeout(() => fs.readFile(path.join(__dirname, '/testMkdir', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
}), 1000); */

// Rename File

fs.rename(path.join(__dirname, '/testMkdir', 'hello.txt'),
  path.join(__dirname, '/testMkdir', 'helloRenamed.txt'),
  (err, data) => {
    if (err) throw err;
    console.log('Renamed file');
  });
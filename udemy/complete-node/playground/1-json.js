const fs = require('fs');

// const book = {
//   title: 'The Lord of the Rings',
//   author: 'J. R. R. Tolkien',
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// challenge code
const challengeData = JSON.parse(fs.readFileSync('1-json.json').toString());
challengeData.name = 'Sarah';
challengeData.age = 27;
fs.writeFileSync('1-json.json', JSON.stringify(challengeData));

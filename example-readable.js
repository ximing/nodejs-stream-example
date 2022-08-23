const fs = require('fs')

const readableStream = fs.createReadStream('./files/file1.txt');

let num = 0;
readableStream.on('data', (data) => {
    num++;
    readableStream.end()
    console.log('Received Data ', data.toString());
});

readableStream.on('end', () => {
    console.log('End of file reached!!!');
})

readableStream.on('close', () => {
    console.log('----');
})

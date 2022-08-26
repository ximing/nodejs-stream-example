const { PassThrough } = require('stream')
const fs = require('fs')

const s = new PassThrough({
    // objectMode:true,
    highWaterMark:2
})



s.pipe(process.stdout);

s.push('ssss\n');
s.write('ssss1\n');
s.push('ssss112');

// const readableStream = fs.createReadStream('./files/file1.txt');
// readableStream.pipe(s);

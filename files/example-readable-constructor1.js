const { Readable } = require('stream');

const myReadbleStream = () => {
    const data = [
        "This is the stream data 1",
        "This is the stream data 2",
        "This is the stream data 3",
        "This is the stream data 4",
        "This is the stream data 5"
    ];
    return new Readable({
        read () {
            // if(data.length === 0) {
            //     this.push(null);
            // } else {
            //     this.push(data.shift());
            // }
        }
    })
}

const readableStream = myReadbleStream();
let num = 0;
let timer = setInterval(()=>{
    num++;
    if(num>3){
        clearInterval(timer);
        readableStream.push(null);
            // readableStream.destroy();
        return;
    }
    readableStream.push('111->'+num);

},1000)
readableStream.on('data', (data) => {
    console.log('Received Data ', data.toString());
});

readableStream.on('end', () => {
    console.log('End of data!!!');
})

readableStream.on('close', () => {
    console.log('close of data!!!');
})
setInterval(()=>{},2000)

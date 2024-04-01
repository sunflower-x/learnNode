const {Buffer} = require('node:buffer')

const buf1=Buffer.alloc(10)

const buf2=Buffer.alloc(10,2)

const buf3=Buffer.allocUnsafe(10)

const buf4=Buffer.from([1,2,3])

const buf5=Buffer.from([257,257.5,-255,'1'])

const buf6=Buffer.from('test')

const buf7 =Buffer.from('test','latin1')

const buf8=Buffer.from('hello world','utf-8')

console.log(buf8.toString('hex'));   
console.log(buf8.toString('base64'));   
console.log(buf8.toString('utf16le'));   

console.log(buf8);


const buf9= Buffer.from([1,2,3,4])
const unit32array=new Uint32Array(buf9)
console.log(unit32array);



const buf10=Buffer.from('hello','utf16le')
const unit16array=new Uint16Array(buf10.buffer,buf10.byteOffset,buf10.length/Uint16Array.BYTES_PER_ELEMENT)
console.log(unit16array);



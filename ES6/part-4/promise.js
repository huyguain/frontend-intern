import fs from 'fs';

const readFilePromise = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

readFilePromise('./part-4/huy.txt')
.then(
    data1 => {
        console.log(data1);
        return readFilePromise('./part-4/abc.txt');
    }
).then(
    data2 => {
        console.log(data2)
    }
).catch(
    err => console.log(err)
)

// console.log(1);
// console.log(2);
// fs.readFile('./part-4/huy.txt', 'utf8', (err, data) => {
//     console.log(data);
// })
// console.log(3);
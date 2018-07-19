import fs from 'fs';

const readFilePromise = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

let data1, data2, dataResult;
// Khi sử dụng Promise.all 2 promise đọc file sẽ được thực hiện đồng thời
Promise.all([
    readFilePromise('./part-4/config1.json'), 
    readFilePromise('./part-4/config2.json')
]).then( //Nếu thành công no sẽ trả về [data1, data2] tương ứng
    data => {
        data1 = JSON.parse(data[0]);
        data2 = JSON.parse(data[1]);
        for (let value of data2) {
            if (value.env === data1.env) data1.port = value.port;
        }
        fs.writeFile('./part-4/config3.json', JSON.stringify(data1), (err) => {
            if (err) throw err;
            console.log('Saved!');
        });
    }
).catch(
    err => console.log(err)
)

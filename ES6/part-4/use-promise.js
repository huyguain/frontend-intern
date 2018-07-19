import fs from 'fs';

// Định nghĩa hàm với tham số truyền vào là đường dẫn của file cần đọc
const readFilePromise = (fileName) => {
    // Hàm này trả về một Promise với tham sô là một callback có 2 tham số resolve, reject
    // resolve nếu Promise này thành công
    // reject nếu Promise này thất bại
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

// Tạo 2 biến data1 tương ưng nội dung đọc được file config1.json
// data2 tương ứng nội dung đọc được file config2.json
let data1, data2;

// Đầu tiên gọi hàm đọc file sử dụng Promise với tham sô truyền vào là đường dẫn file
readFilePromise('./part-4/config1.json')
// Nếu đọc file thành công, hàm resolve(data) sẽ được chạy và chạy vào "then"
.then(
    data => {
        data1 = JSON.parse(data);
        // ta return về một promise để thenable tiếp theo
        return readFilePromise('./part-4/config2.json');
    }
)
// then này chính là xử lí kết quả resolve của readFilePromise('./part-4/config2.json'); bên trên
.then(
    data => {
        data2 = JSON.parse(data);
        for (let value of data2) {
            if (value.env === data1.env) data1.port = value.port;
        }
        fs.writeFile('./part-4/config3.json', JSON.stringify(data1), (err) => {
            if (err) throw err;
            console.log('Saved!');
        });
    }
)
.catch(
    err => console.log(err)
)
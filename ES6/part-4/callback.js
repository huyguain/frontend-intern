import fs from 'fs';

fs.readFile('./part-4/config1.json', (err1, data1) => {
    if (err1) console.log(err1);
    data1 = JSON.parse(data1);

    fs.readFile('./part-4/config2.json', (err2, data2) => {
        if (err2) console.log(err2);

        data2 = JSON.parse(data2);
        for (let value of data2) {
            if (value.env === data1.env) {
                data1.port = value.port;
            }
        }

        console.log(data1);
        fs.writeFile('./part-4/config3.json', JSON.stringify(data1), (err) => {
            if (err) throw err;
            console.log('Saved!');
        });
    })
})
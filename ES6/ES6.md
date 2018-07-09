# Learn ES6
## 1. Setup
- Tạo file "package.json":
	``` javascript
    $ npm init -y
    ```

- Setup babel:
	``` javascript
    $ npm install --save babel-cli
    $ npm install --save babel-preset-env
    ```
- Chỉnh sửa file package.json:
	``` javascript
    "scripts": {
    	"babel-node": "babel-node",
    	"test": "echo \"Error: no test specified\" && exit 1"
  	},
    ```
- Trong thư mục chứa file "node_module", tạo file ".babelrc", copy đoạn sau:
	``` javascript
    {
		"presets": [
			"env"
		]
	}
    ```
- Để chạy một file bất kì. Trong thư mục chứa node_module, chạy lệnh:
	``` javascript
    $ npm run babel-node "đường dẫn file cần chạy"
    ```



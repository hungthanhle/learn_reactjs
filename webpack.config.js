const path = require('path');

module.exports = {
  entry: './src/index.js', // Đường dẫn đến tệp JavaScript gốc của ứng dụng
  output: {
    path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra cho tệp bundle.js
    filename: 'bundle.js' // Tên của tệp bundle.js
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // Sử dụng babel-loader để biên dịch mã JavaScript
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Cho phép import các tệp có phần mở rộng .js hoặc .jsx
  }
};

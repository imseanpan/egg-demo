

const path = require('path');
const webpack = require('webpack');

const vendors = [
  'antd',
  'react',
  'react-dom',
];

module.exports = {
  output: {
    path: path.join(__dirname, 'app/public/dist'),
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname,
    }),
  ],
};

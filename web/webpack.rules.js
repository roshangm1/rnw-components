module.exports = [
  {
    test: /\.(tsx|ts|jsx|js|mjs)$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
  // {
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   loader: 'source-map-loader',
  // },
];

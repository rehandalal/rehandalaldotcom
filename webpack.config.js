/* eslint-env node */
const autoprefixer = require('autoprefixer');
const BundleTracker = require('webpack-bundle-tracker');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const CSS_LOADERS = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => (
        [
          autoprefixer({ browsers: ['last 4 versions'] }),
        ]
      ),
    },
  },
];


module.exports = [
  {
    context: path.resolve(__dirname),

    entry: {
      front: [
        './client/front/index.js',
        'normalize-css/normalize.css',
        './client/front/sass/style.scss',
      ],
    },

    output: {
      path: path.resolve('./assets/bundles/'),
      filename: '[name]-[hash].js',
    },

    plugins: [
      new BundleTracker({ filename: './webpack-stats.json' }),
      new ExtractTextPlugin('[name]-[hash].css'),
    ],

    module: {
      loaders: [
        {
          test: /(\.|\/)(jsx|js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              ...CSS_LOADERS,
              'sass-loader',
            ],
          }),
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              ...CSS_LOADERS,
            ],
          }),
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          loader: 'file-loader',
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: 'file-loader',
        },
      ],
    },

    resolve: {
      alias: {
        client: path.resolve(__dirname, './client'),
        front: path.resolve(__dirname, './client/front'),
      },
    },
  },
];

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
                type: 'javascript/auto',
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],

        alias: {
            Pages: path.resolve(__dirname, 'src/presentation/Pages/'),
            '@GlobalComponents': path.resolve(__dirname, 'src/presentation/GlobalComponents/'),
            '@store': path.resolve(__dirname, 'src/infrastructure/store/'),
            '@api': path.resolve(__dirname, 'src/infrastructure/api/'),
            '@domain': path.resolve(__dirname, 'src/domain/'),
            '@layout': path.resolve(__dirname, 'src/application/Layout/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: path.join(__dirname, './src'),
        port: 3000,
        hot: true,
        compress: true,
        open: true,
        historyApiFallback: true,
    },
};

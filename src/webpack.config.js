const styleLoader = {
    test: /\.(scss)$/,
    include: path.resolve(__dirname, 'src'),
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: path.join(__dirname, 'postcss.config.js')
            }
          }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    })
  };
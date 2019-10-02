This project is my playground to try to learn how to use react with vanilla zdog.

### Config

1.  npm run eject
2.  Add this script to webpack.config.js
    ```
        module: {
            rules: [
                     {
                      test: require.resolve('../node_modules/zdog/js/dragger.js'),
                      use: 'imports-loader?this=>window'
                     },
                    ...
                   ]
                }
    ```

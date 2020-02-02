module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            browsers: ['last 2 versions', 'IE 11'],
            node: 'current',
          },
        },
      ],
      ['@babel/preset-react'],
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            containers: './src/containers',
            models: './src/models',
          },
          extensions: ['.js', '.json'],
        },
      ],
    ],
  };
};

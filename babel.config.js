module.exports = function babelConfig(api) {
  api.cache(true);
  console.log('Using root babel.config.js');
  const presets = [['@babel/env', {
    targets: {
      node: 'current',
    },
  }]];
  const plugins = [
    ['module-resolver', {
      alias: {
        shared: './shared',
      },
    }],
  ];

  return {
    presets,
    plugins,
  };
};

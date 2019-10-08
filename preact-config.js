export default (config, env, helpers) => {
  config.module.rules.push({ 
    test: /\.js?$/,
    loader: require.resolve('linaria/loader')
  });
};
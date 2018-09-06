exports.modifyWebpackConfig = ({ config, stage }) => {
  config.loader('svg', {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      include: /static/,
    },
  });

  return config;
};

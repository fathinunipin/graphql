module.exports = {
  apps: [
    {
      name: 'angular-graphql',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'dist/angular-graphql',
        PM2_SERVE_PORT: +(process.env.PORT || 80)
      }
    }
  ]
};

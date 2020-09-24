module.exports = {
  apps: [
    {
      name: "ttt-be",
      script: "src/index.js",
      instances: 1,
      autorestart: true,
      watch: false,
      time: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

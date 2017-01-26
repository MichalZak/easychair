module.exports = {

  apps : [

    // First application
    {
      name      : "Easychair",
      script    : "server.js",
      env: {
        NODE_ENV: "production"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },
  ],

}



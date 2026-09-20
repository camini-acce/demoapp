module.exports = {
  apps: [{
    name: 'demoapp',
    script: 'app/server.js',
    env: { PORT: 3000 },
    watch: false,
    autorestart: true,
    instances: 1,
    exec_mode: 'fork',
    out_file: 'logs/out.log',
    error_file: 'logs/error.log'
  }]
};

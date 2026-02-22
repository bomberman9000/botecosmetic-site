module.exports = {
  apps: [{
    name: "bote-site",
    cwd: "/var/www/bote-site",
    script: "./node_modules/next/dist/bin/next",
    args: "start -p 3001",
    exec_mode: "fork",
    instances: 1,
    autorestart: true,
    watch: false,
    // Prevent frequent PM2 restarts during normal Next.js memory spikes.
    max_memory_restart: "1536M",
    env: {
      NODE_ENV: "production",
      PORT: "3001"
    }
  }]
}

const DiscordTransport = require('./dist')
const winston = require('winston')

const logger = winston.createLogger({
  transports: [
    new DiscordTransport({
      webhook: process.env.DISCORD_WEBHOOK_URL,
      level: 'warn'
    })
  ],
});
  
logger.log({
  level: 'error',
  message: 'Error intializing service',
  meta: {
    additionalKey: 'someValue'
  },
  error: new Error()
});
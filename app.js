const { App } = require('@slack/bolt');
require('dotenv').config()

const messageHandler = require('./tools/message-handler.js');
const eventHandler = require('./tools/event-handler.js');
const slashHandler = require('./tools/slash-handler.js');


const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, 
    appToken: process.env.SLACK_APP_TOKEN 
});

app.message('hello', messageHandler.hello);

app.command('/switch', slashHandler.switch);
app.command('/a8ksync', slashHandler.a8ksync);

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running! on port', (process.env.PORT || 3000));
})();
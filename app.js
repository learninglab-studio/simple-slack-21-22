const { App } = require('@slack/bolt');
require('dotenv').config()

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, 
    appToken: process.env.SLACK_APP_TOKEN 
});

app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    console.log(`heard a hello`)
    await say(`Hey there <@${message.user}>!`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running! on port', (process.env.PORT || 3000));
})();
const atemTools = require(`./atem-tools`)

exports.hello = async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    console.log(`let's try a simple switch to camera 5`)
    await atemTools.switch({
        atemIp: process.env.A8K_IP,
        camera: 5
    })
    await say(`Hey there <@${message.user}>!`);
}

exports.rocket = async ({ message, say }) => {
    await say(`thanks for the :rocket:, <@${message.user}>`);
}
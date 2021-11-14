const atemTools = require(`./atem-tools`)

exports.switch = async ({ command, ack, say }) => {
    ack();
    console.log(JSON.stringify(command, null, 4))
    console.log(`let's try a simple switch to camera ${command.text}`)
    await atemTools.switch({
        atemIp: process.env.A8K_IP,
        camera: command.text
    })
}

exports.rocket = async ({ message, say }) => {
    await say(`thanks for the :rocket:, <@${message.user}>`);
}
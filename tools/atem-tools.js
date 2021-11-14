const { Atem } = require('atem-connection');

module.exports.switch = async (options) => {
    console.log(`starting the ATEM`);
    const myAtem = new Atem();
    myAtem.on('info', console.log)
    myAtem.on('error', console.error)
    myAtem.connect(options.atemIp)
    myAtem.on('connected', () => {
        myAtem.changeProgramInput(options.camera).then(() => {
            console.log(`program input set to ${options.camera}. now ending the connection`);
            myAtem.disconnect()
        })
    })
    myAtem.on('disconnected', () => {
        console.log(`now disconnected from the ATEM. bye.`);
    })
}

module.exports.syncToClock = async (options) => {
    console.log(`starting the ATEM connection to sync`);
    const myAtem = new Atem(options.atemIp);
    myAtem.on('info', console.log)
    myAtem.on('error', console.error)
    myAtem.connect(options.atemIp)
    myAtem.on('connected', () => {
        let now = new Date()
        myAtem.setTime(now.getHours(), now.getMinutes(), (now.getSeconds()+1), 7).then(() => {
            // console.log(`new ATEM Time is ${JSON.stringify(myAtem.state.info.lastTime, null, 4)}`);
            console.log(`now ending the connection`);
            myAtem.disconnect()
        });
    })
    myAtem.on('disconnected', () => {
        console.log(`now disconnected from the ATEM. bye.`);
    })
}



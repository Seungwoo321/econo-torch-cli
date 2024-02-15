const { oecd } = require('eidl')
async function oecdDownload(options) {
    try {
        const data = await oecd.getIndicatorData(options.dataUrl.toString())
        console.log(data)
    } catch (error) {
        throw error
    }
}


module.exports = (...args) => {
    return oecdDownload(...args).catch(error => {
        console.log(error?.response?.errors || error.message)
        if (!process.env.EIDC_CLI_TEST) {
            process.exit(1)
        }
    })
}
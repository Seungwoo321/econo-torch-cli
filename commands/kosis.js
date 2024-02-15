const GeneratorAPI = require('../util/GeneratorAPI')
const { kosis } = require('eidl')
async function kosisDownload(options) {
    try {
        const generator = new GeneratorAPI()
        const apiKey = await generator.getData('kosis')
        const fn = options.dateRange ? kosis.getIndicatorData : kosis.getIndicatorLatestData
        const data = await fn({
                apiKey,
                ...options            
        })
        console.log(data)

    } catch (error) {
        throw error
    }
}


module.exports = (...args) => {
    return kosisDownload(...args).catch(error => {
        console.log(error?.response?.errors || error.message)
        if (!process.env.EIDC_CLI_TEST) {
            process.exit(1)
        }
    })
}
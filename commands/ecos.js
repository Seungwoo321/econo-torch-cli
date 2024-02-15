const GeneratorAPI = require('../util/GeneratorAPI')
const { ecos } = require('eidl')
async function ecosDownload(options) {
    try {
        const generator = new GeneratorAPI()
        const apiKey = await generator.getData('ecos')
        const data = await ecos.getIndicatorData({
            apiKey,
            ...options
        })
        console.log(data)
    } catch (error) {
        throw error
    }
}


module.exports = (...args) => {
    return ecosDownload(...args).catch(error => {
        console.log(error?.response?.errors || error.message)
        if (!process.env.EIDC_CLI_TEST) {
            process.exit(1)
        }
    })
}
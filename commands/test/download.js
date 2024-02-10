const GeneratorAPI = require('../../util/GeneratorAPI')
const { kosis } = require('eidl')
async function download (source, options) {
    try {
        const generator = new GeneratorAPI()
        const apiKey = await generator.getData(source)
        console.log(`API Key is '${apiKey}'`)
        console.log(kosis)
    } catch (error) {
        throw error
    }
}


module.exports = (...args) => {
    return download(...args).catch(error => {
        console.log(error?.response?.errors || error.message)
        if (!process.env.EIDC_CLI_TEST) {
            process.exit(1)
        }
    })
}
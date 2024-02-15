const configPrompt = require('../util/configPrompt')
const GeneratorAPI = require('../util/GeneratorAPI')
const inquirer = require('inquirer')

function valildArgmuent (source) {
    return ['kosis', 'ecos'].includes(source)
}

async function configure (source, options) {
    try {
        
        if (!valildArgmuent(source)) {
            throw new Error('Invalied Source')
        }
        let apiKey = options.apiKey
        if (!options.apiKey) {
            const promptOptions = await inquirer.prompt(configPrompt(source, options))
            apiKey = promptOptions.apiKey
        }
        const generator = new GeneratorAPI()
        await generator.saveData({ [source]: apiKey })
        
    } catch (error) {
        throw error
    }
}

module.exports = (...args) => {
    return configure(...args).catch(error => {
        console.log(error?.response?.errors || error.message)
        if (!process.env.EIDC_CLI_TEST) {
            process.exit(1)
        }
    })
}
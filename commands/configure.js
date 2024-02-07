const configPrompt = require('../util/configPrompt')
const GeneratorAPI = require('../util/GeneratorAPI')
const inquirer = require('inquirer')

async function configure (source, options) {
    try {
        let apiKey = options.apiKey
        if (!options.apiKey) {
            const promptOptions = await inquirer.prompt(configPrompt(source, options))
            apiKey = promptOptions.apiKey
        }
        const generator = new GeneratorAPI()
        await generator.saveData({ kosis: apiKey })
        
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
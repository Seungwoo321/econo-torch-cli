const { Configuration } = require("tslint")

async function configuration (options) {
    
}

module.exports = (...args) => {
    return configuration(...args).catch(error => {
        console.log(error?.response?.errors || error)
        if (!process.env.EIDC_CLI_TEST) {
            process.exit(1)
        }
    })
}
#!/usr/bin/env node

const chalk = require('chalk')
const semver = require('semver')
const requiredVersion = require('../package.json').engines.node
const minimist = require('minimist')

function checkNodeVersion(wanted, id) {
    if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
        console.log(chalk.red(
            'You are using Node ' + process.version + ', but this version of ' + id +
            ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
        ))
        process.exit(1)
    }
}

checkNodeVersion(requiredVersion, 'eidc')

function valildArgmuent (source) {
    return ['kosis', 'ecos', 'oecd'].includes(source)
}

const program = require('commander')

program
    .version(`eidc ${require('../package').version}`)
    .usage('<command> [options]')

program.command('configure')
    .argument('<source>', 'kosis, ecos and oecd')
    .option('--api-key <API Key>', 'Please enter API key')
    .action((source, options) => {
        if (valildArgmuent(source)) {
            require('../commands/configure')(source, options)
        } else {

        }
    })
program.command('download')
    .argument('<source>', 'kosis, ecos and oecd')
    .option('--api-key <API Key>', 'Please enter API key')
    .action((source, options) => {
        if (valildArgmuent(source)) {
            require('../commands/download')(source, options)
        } else {
            
        }
    })



// output help information on unknown commands
program.on('command', ([cmd]) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
    process.exitCode = 1
})
program.on('command:', ([cmd]) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
    process.exitCode = 1
})
program.on('--help', () => {
    console.log()
    console.log(`  Run ${chalk.cyan(`eidc <command> --help`)} for detailed usage of given command.`)
    console.log()
})

program.commands.forEach(c => c.on('--help', () => console.log()))

// enhance common error messages
const enhanceErrorMessages = require('../util/enhanceErrorMessages')

enhanceErrorMessages('missingArgument', argName => {
    return `Missing required argument ${chalk.yellow(`<${argName}>`)}.`
})

enhanceErrorMessages('unknownOption', optionName => {
    return `Unknown option ${chalk.yellow(optionName)}.`
})

enhanceErrorMessages('optionMissingArgument', (option, flag) => {
    return `Missing required argument for option ${chalk.yellow(option.flags)}` + (
        flag ? `, got ${chalk.yellow(flag)}` : ``
    )
})

program.parse(process.argv)
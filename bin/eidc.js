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
    return ['kosis', 'ecos'].includes(source)
}

const program = require('commander')

program
    .version(`eidc ${require('../package').version}`)
    .usage('<command> [options]')

program.command('configure')
    .argument('<source>', 'kosis, ecos')
    .option('--api-key <API Key>', 'Please enter API key')
    .action((source, options) => {
        if (valildArgmuent(source)) {
            require('../commands/configure')(source, options)
        } else {

        }
    })

program.command('oecd')
    .option('--data-url <dataUrl>', '')
    .action(options => {
        require('../commands/oecd')(options)
    })

program.command('ecos')
    .option('--serviceName <serviceName>', '서비스명')
    .option('--language <language>', '언어구분')
    .option('--startCount <startCount', '요청 시작 건수')
    .option('--endCount <endCount', '요청 종료 건수')
    .option('--stateCode <stateCode>', '통계표 코드')
    .option('--period <period>', '주기')
    .option('--searchStartDate <searchStartDate>', '검색시작 일자')
    .option('--searchEndDate <searchEndDate>', '검색종료 일자')
    .option('--itemCode <itemCode1>', '통계 항목 코드1')
    .option('--itemCode2 <itemCode2>', '통계 항목 코드2 (option)')
    .option('--itemCode3 <itemCode3>', '통계 항목 코드3 (option)')
    .option('--itemCode4 <itemCode4>', '통계 항목 코드4 (option)')
    .action(options => {
        require('../commands/ecos')(options)
    })

program.command('kosis')
    .option('--orgId <orgId>', '')
    .option('--tblId <tblId>', '')
    .option('--itemId <itemId>', '')
    .option('--prdSe <prdSe>', '수록주기')
    .option('--newEstPrdCnt <newEstPrdCnt>', '기간조회 방법1. 최신자료 기준 조회시 최근 수록 시점 개수')
    .option('--prdInterval <prdInterval>', '기간조회 방법1. 최신자료 기준 조회시 최근 수록 시점 간격')
    .option('--startPrdDe <startPrdDe>', '기간조회 방법2. 시점 기준 조회시 시작 수록 시점')
    .option('--endPrdDe <endPrdDe>', '기간조회 방법2. 시점 기준 조회시 종료 수록 시점')
    .option('--objL1 <objL1>', '')
    .option('--objL2 <objL1>', 'optional')
    .option('--objL3 <objL1>', 'optional')
    .option('--objL4 <objL1>', 'optional')
    .option('--objL5 <objL1>', 'optional')
    .option('--objL6 <objL1>', 'optional')
    .option('--objL7 <objL1>', 'optional')
    .option('--objL8 <objL1>', 'optional')
    .option('')
    .action(options => {
        require('../commands/kosis')(options)
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
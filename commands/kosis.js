const GeneratorAPI = require('../util/GeneratorAPI')
const { kosis } = require('eidl')
async function kosisDownload(options) {
    try {
        const generator = new GeneratorAPI()
        const apiKey = await generator.getData('kosis')
        let parmas = {}
        if (options.latestDate) {
            console.log(options)
            const {
                format,
                orgId,
                tblId,
                itemId,
                prdSe,
                newEstPrdCnt,
                prdInterval,
                objL1
            } = options
            const data = await kosis.getIndicatorLatestData({
                apiKey,
                format,
                orgId,
                tblId,
                itemId,
                prdSe,
                newEstPrdCnt,
                prdInterval,
                objL1,
                objL2: '',
                objL3: '',
                objL4: '',
                objL5: '',
                objL6: '',
                objL7: '',
                objL8: '',

            })
            console.log(data)
        }
        if (options.dateRange) {
            // const data = await kosis.getIndicatorData({
            //     apiKey,
            //     ...options
            // })
            // console.log(data)
        }

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
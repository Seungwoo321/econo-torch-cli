const GeneratorAPI = require('../util/GeneratorAPI')
const { ecos } = require('eidl')
const { Ecos } = require('../model')
async function ecosDownload(options) {
  try {
    const generator = new GeneratorAPI()
    const apiKey = await generator.getData('ecos')
    const data = await ecos.getIndicatorData({
      apiKey,
      ...options
    })
    if (options.upload) {
      console.log('upload')
      const result = await importData(data)
      console.log(result)
    } else {
      console.log(data)
    }
  } catch (error) {
    throw error
  }
}
async function importData (data) {
  if (data.CODE) throw new Error(`${data.CODE}: ${data.MESSAGE}`)
  try {
    const rows = data.filter(value => !value.err).map(convertRow)
    const fn = rows.map(row => Ecos.findOrCreate({
      where: {
        stat_code: row.stat_code,
        item_code1: row.item_code1,
        item_code2: row.item_code2,
        item_code3: row.item_code3,
        item_code4: row.item_code4,
        wgt: row.wgt,
        time: row.time,
        data_value: row.data_value
      },
      defaults: row
    }))

    const values = await Promise.all(fn)
    const createdRows = values.filter(([_, created]) => created)
    if (createdRows.length) {
      return 'SUCCESS Import row: ' + createdRows.length
    } else {
      return 'EXIST DATA!!!!!'
    }
  } catch (error) {
    console.log(error)
  }
}
const convertRow = row => ({
  stat_code: row.STAT_CODE,
  stat_name: row.STAT_NAME,
  item_code1: row.ITEM_CODE1,
  item_name1: row.ITEM_NAME1,
  item_code2: row.ITEM_CODE2,
  item_name2: row.ITEM_NAME2,
  item_code3: row.ITEM_CODE3,
  item_name3: row.ITEM_NAME3,
  item_code4: row.ITEM_CODE4,
  item_name4: row.ITEM_NAME4,
  unit_name: row.UNIT_NAME,
  wgt: row.WGT,
  time: row.TIME,
  data_value: row.DATA_VALUE
})

module.exports = (...args) => {
  return ecosDownload(...args).catch(error => {
    console.log(error?.response?.errors || error.message)
    if (!process.env.EIDC_CLI_TEST) {
      process.exit(1)
    }
  })
}
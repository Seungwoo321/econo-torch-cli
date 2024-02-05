const { homedir } = require("os")

module.exports = class ConfigGenerator {
    constructor () {
        this._config = {}
        this.configPath = path.resolve(homedir, '.local.eidc.json')
    }

    set data (data) {
        this._config = {
            ...this._config,
            [data.key]: data.value
        }
    }

    get data () {
        return this._config
    }

    async getData () {
        if (fs.existsSync(this.configPath)) {
            const data = await fs.readJson(this.configPath)
            return data
        } else {
            return this._config
        }
    }
    
    getConfigPath () {
        return this.configPath
    }

    getConfig (key) {
        if (this._config.hasOwnProperty(key)) {
            return this._config[key]
        } else {
            throw new Error('No exist property key')
        }
    }

    async saveData () {
        await fs.writeJsonSync(this.configPath, this._config)
    }

    async resetConfig () {
        this._config = {}
        await fs.writeJsonSync(this.configPath, this._config)
    }
}
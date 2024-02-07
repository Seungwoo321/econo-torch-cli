module.exports = (source, options) => {
    const prompts = [
        {
            name: 'apiKey',
            type: 'input',
            message: `Please enter API key issued by ${source}.`,
        }
    ]
    return prompts
}
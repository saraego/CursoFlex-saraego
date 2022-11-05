const helpers = {
    upperCase(content){
        return content.toUpperCase()
    },

    FormataData(content){
        return content.split('-').reverse().join('/')
    }
}

module.exports = helpers
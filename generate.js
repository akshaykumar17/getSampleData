module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        people: _.times(31, function (n) {
            return {
                name: faker.name.findName(),
                
            }
        })
    }
}
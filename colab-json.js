// index.js
var faker = require('faker');
var moment=require('moment');
var _ = require('lodash');

module.exports = function () {
  var data = { projects: [], people:[] }
  // Create 10 projects
  for (var i = 0; i < 10; i++) {
    data.projects.push({ id: faker.random.number({ min: 1, max: 100 }), name: faker.company.companyName(), campaigns: [] })
  }
  // Create random campaigns
  data.projects.map(p => {
    let no_of_projects = Math.round(Math.random() * 10 + 1)
    for (var i = 0; i < no_of_projects; i++) {
      p.campaigns.push({
        id: i + 1000 * p.id,
        name: faker.commerce.productName(),
        startDate: moment(),
        endDate: moment(),
        owners: [],
        status: faker.hacker.adjective(),
        lastUpdated: faker.date.recent(),
        industry: faker.commerce.department()
      })
    }
  })
      data.people= _.times(100, function (n) {
          return {
              name: faker.name.findName(),

          }
      })
  return data
}

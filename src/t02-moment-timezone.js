const momentTz = require('moment-timezone')

// Format Dates

const date = new Date()

const vienna = momentTz.tz(date, "Europe/Vienna")
console.log(vienna.format())

const losAngeles = vienna.clone().tz("America/Los_Angeles");
console.log(losAngeles.format())

var london = vienna.clone().tz("Europe/London");
console.log(london.format())

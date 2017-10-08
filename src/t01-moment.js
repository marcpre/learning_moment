const moment = require('moment')

// Format Dates


console.log(moment().format('MMMM Do YYYY, h:mm:ss a')) // October 8th 2017, 2:31:43 pm
console.log(moment().format('dddd'))                    // Sunday
console.log(moment().format("MMM Do YY"))               // Oct 8th 17
console.log(moment().format('YYYY [escaped] YYYY'))     // 2017 escaped 2017
console.log(moment().format())                          // 2017-10-08T14:31:43+02:00

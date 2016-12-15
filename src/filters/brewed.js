const filter = require('lodash/filter')
const curry = require('lodash/curry')
const { isDateBefore, isDateAfter } = require('../helpers/dates')

function brewedBeforeFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => isDateBefore(b.first_brewed, val))
}

function brewedAfterFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => isDateAfter(b.first_brewed, val))
}

exports.brewedBeforeFilter = curry(brewedBeforeFilter)
exports.brewedAfterFilter = curry(brewedAfterFilter)

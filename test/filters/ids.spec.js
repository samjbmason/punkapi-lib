const db = require("punkapi-db")
const idsFilter = require("../../dist/filters/ids")

describe("idsFilter", function() {
  it("should return beers with ids 2,8,20", function() {
    idsFilter("2|8|20", db).should.containDeep([
      { id: 2 },
      { id: 8 },
      { id: 20 }
    ])
  })

  it("should not return beers with ids 3260", function() {
    idsFilter("2|8|3260", db).should.containDeep([{ id: 2 }, { id: 8 }])
    idsFilter("2|8|3260", db).should.not.containDeep([{ id: 3260 }])
  })
})

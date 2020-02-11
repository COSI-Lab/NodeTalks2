/* eslint-env mocha */
const assert = require('assert')
const add = require('../lib/add2.js')

describe('Addition', function () {
  it('should return 4 when adding 2 + 2', function () {
    assert.strictEqual(4, add(2, 2))
  })
})

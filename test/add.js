/* eslint-env mocha */
const assert = require('assert')
const add = require('../lib/add.js')

describe('Addition', function () {
  it('should return 3 when adding 1 + 2', function () {
    assert.strictEqual(3, add(1, 2))
  })
})

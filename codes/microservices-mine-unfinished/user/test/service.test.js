const chai = require('chai')
const chaiAsPromised = require("chai-as-promised")
const assert = require('chai').assert
const service = require('../service')

chai.use(chaiAsPromised)

describe('service', function () {
  describe('#findUserById', function () {
    it('should not error for invalid id', function () {
      return assert.isRejected(service.findUserById(-1))
    })
  })
})
const chai = require('chai')
const chaiAsPromised = require("chai-as-promised")
const assert = require('chai').assert
const service = require('../service')

describe('service', function () {
  describe('#generateRefreshToken', function () {
    it('should not return empty value', function () {
      assert.isNotEmpty(service.generateRefreshToken())
    })

    it('should have high entropy', function () {
      assert.isAtLeast(service.generateRefreshToken().length, 16)
    })

    it('should return difference value when call multiple times', function () {
      assert.notEqual(service.generateRefreshToken(), service.generateRefreshToken())
    })
  })
})
const sender = require('../index')
const sinon = require('sinon')
const {expect} = require('chai')

describe('Express Json Sender Test', () => {
    let status
    let json
    let next
    let res
    beforeEach(() => {
        status = sinon.spy(() => res)
        json = sinon.stub()
        next = sinon.stub()
        res = {status, json}
        req = {}
    })

    it('calls status with status provided', (done) => {
        sender(200)(req, res, next)
        expect(res.status.args[0][0]).to.eql(200)
        expect(next.called).to.eql(true)
        expect(next.args[0][0]).to.eql(undefined)
        done()
    })

    it('calls status and json when 2 args are provided', (done) => {
        sender(200, {})(req, res, next)
        expect(res.json.args[0][0]).to.eql({})
        expect(res.status.args[0][0]).to.eql(200)
        expect(next.called).to.eql(true)
        expect(next.args[0][0]).to.eql(undefined)
        done()
    })

    afterEach(() => {
        status = null
        json = null
        next = null
        res = null
        req = null
    })
})
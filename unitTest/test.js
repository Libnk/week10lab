var linearPoint = require('../linearPoint');
var assert = require('assert'); //link in assertion library
describe('Test for mcx function #linearPoint()', () =>
{
    describe('Test case 1', () =>
    {
        it('m*x + c should equal m + c when x = 1', () =>
        {
            assert.equal(linearPoint(2, 1, 4), 6);
        });
    });

    describe('Test case 2', () =>
    {
        it('m*x + c should equal c when x = 0', () =>
        {
            assert.equal(linearPoint(2, 0, 4), 4);
        });
    });

    describe('Test case 1', () =>
    {
        it('m*x + c should equal c - m when x = -1', () =>
        {
            assert.equal(linearPoint(2, -1, 4), 2);
        });
    });
});
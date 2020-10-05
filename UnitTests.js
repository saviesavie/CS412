const {reverse} = require('./PS1.P1');

const {describe, it} = require('mocha');
const {expect} = require('chai');

// UNIT TEST FOR PS1.P1
describe('reverse tests', () => {
    it('should return ', () => {
        let testStr = 'supercalifragilisticexpialidocious';
        let expectStr = 'xuutsssrrppoollliiiiiiigfeedcccaaa';
        expect(expectStr).equal(reverse(testStr));
    })
    it('should return ', () => {
        let testStr = 'savannah';
        let expectStr = 'vsnnhaaa';
        expect(expectStr).equal(reverse(testStr));
    })
})

// UNIT TEST FOR PS1.P2
const {evaluate} = require('./PS1.P2');
describe('evaluate tests', () => {
    it('should return 6', () => {
        let sum = evaluate('4+2')();
        expect(sum).equal(6)
    });
    it('should return 35', () => {
        let mul = evaluate('5*7')();
        expect(mul).equal(35)
    });
    it('should return 5', () => {
        let sub = evaluate('6-1')();
        expect(sub).equal(5)
    });
    it('should return 4.5', () => {
        let div = evaluate('9/2')();
        expect(div).equal(4.5)
    });
    it('should return 256', () => {
        let div = evaluate('2^8')();
        expect(div).equal(256)
    });
})

// UNIT TEST FOR PS1.P3
const {stringMod} = require('./PS1.P3');
describe('p3 tests', () => {
    it('should return ["super", "califragilisti", "cexpialido", "cious"]', () => {
        let s = 'supercalifragilisticexpialidocious';
        let expectedresult = ["super", "califragilisti", "cexpialido", "cious"];
        let actualResult = stringMod(s, (s) => s.replace(/c/gi, ',c').split(','));
        console.log(expectedresult);
        console.log(actualResult);
        expect(actualResult).to.eql(expectedresult);
    });
    it('should return "supercAlifrAgilisticexpiAlidocious"', () => {
        let s = 'supercalifragilisticexpialidocious';
        let expectedresult = "supercAlifrAgilisticexpiAlidocious";
        let actualResult = stringMod(s, (s) => s.replace(/a/gi, 'A'));
        console.log(expectedresult);
        console.log(actualResult);
        expect(actualResult).equal(expectedresult);
    });
    it('should return ["a", "c", "compli", "ce"]', () => {
        let s = 'accomplice';
        let expectedresult = ["a", "c", "compli", "ce"];
        let actualResult = stringMod(s, (s) => s.replace(/c/gi, ',c').split(','));
        console.log(expectedresult);
        console.log(actualResult);
        expect(actualResult).to.eql(expectedresult);
    });
    it('should return "AArdvArk"', () => {
        let s = 'aardvark';
        let expectedresult = "AArdvArk";
        let actualResult = stringMod(s, (s) => s.replace(/a/gi, 'A'));
        console.log(expectedresult);
        console.log(actualResult);
        expect(actualResult).equal(expectedresult);
    });
 })
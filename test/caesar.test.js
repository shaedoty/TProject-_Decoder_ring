// Write your tests here!
const expect = require('chai').expect;
const caesarModule = require("../src/caesar.js")

describe("caesar", ()=>{
    it( "should encode a message by shifting the letters",()=>{
 const actual = caesarModule.caesar("secret message", 2, true);
 const expected = "ugetgv oguucig";
 expect(actual).to.equal(expected);
    });
    it("should decode a message by shifting the letters in the opposite direction",()=>{
const actual = caesarModule.caesar("ugetgv oguucig", 2, false);
const expected = "secret message";
expect(actual).to.equal(expected);
    });
    it("should ignore capital letters",()=>{
const actual = caesarModule.caesar("Secret", 2, true);
const expected = "ugetgv";
expect(actual).to.equal(expected);
    });
    it("should leave spaces and other symbols as is",()=>{
const actual = caesarModule.caesar("secret message", 2, true);
const expected = "ugetgv oguucig";
expect(actual).to.equal(expected);
    });
    it("should handle letters at the end of the alphabet",()=>{
const actual = caesarModule.caesar("zoo", 3, true);
const expected = "crr";
expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left",()=>{
const actual = caesarModule.caesar("secret message", -2, true);
const expected = "qcapcr kcqqyec"
expect(actual).to.equal(expected)
    });
    it("should return false if the shift amount is 0",()=>{
const actual = caesarModule.caesar("secret message", 0, true);
const expected = false 
expect(actual).to.equal(expected);
    });
    it("should return false if the shirt amount is above 25",()=>{
        const actual = caesarModule.caesar("secret message", 29, true);
        const expected = false 
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift amount is less than -25",()=>{
        const actual = caesarModule.caesar("secret message", -28, true);
        const expected = false 
        expect(actual).to.equal(expected);
    })
})


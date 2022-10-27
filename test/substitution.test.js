// Write your tests here!
const expect = require('chai').expect;
const {substitution} = require('../src/substitution.js');


describe("substitution", ()=>{
    it( "should encode a message by translating each letter to number pairs",()=>{
 const actual = substitution("message","$wae&zrdxtfcygvuhbijnokmpl", true)
 const expected = "y&ii$r&";
 expect(actual).to.equal(expected);
    });
it(" should decode a message by using the given substitution alphabet",()=>{
    const actual = substitution("y&ii$r&","$wae&zrdxtfcygvuhbijnokmpl", false)
    const expected = "message";
    expect(actual).to.equal(expected);
})
it("should return false if the substitution alphabet is missing",()=>{
    const actual = substitution("message")
    const expected = false
    expect(actual).to.equal(expected);
})
it("should return false if the substitution alphabet is not exactly 26 characters",()=>{
    const message = "message";
    const alphabet = "wae&zrdxtfcyg";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false
})
it("should return false if the substitution alphabet does not contain unique characters",()=>{
    const message = "message";
    const alphabet = "qwertyuiopasdfghjklzxcvbn";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false
})
it("while encoding it should work with any kind of key with unique characters",()=>{
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl", true)
    const expected = "y&ii$r&"
    expect(actual).to.equal(expected);
})
it("while encoding should preserve spaces",()=>{
    const actual = substitution("hi there", "$wae&zrdxtfcygvuhbijnokmpl", true)
    const expected = "dx jd&b&"
    expect(actual).to.equal(expected);
})

it("while decoding it should work with any kind of key with unique characters", () => {
    const message = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet, false);
    const expected = "message";

    expect(actual).to.equal(expected);
  });

  it("while decoding it should preserve spaces", () => {
    const message = "dx jd&b&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet, false);
    const expected = "hi there";

    expect(actual).to.equal(expected);
  });
})
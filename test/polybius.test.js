// Write your tests here!
let expect = require("chai").expect;
let polybius = require("../src/polybius").polybius;

describe("polybius()", ()=>{
    it("should encode a message by translating each letter to number pairs",()=>{
        let actual = polybius("hi")
        let expected = "3242"
        expect(actual).to.equal(expected)
    })
    it("should turn 'i' and 'j' to 42",()=>{
        let actual = polybius("hi Joe")
        let expected = "3242 424351"
        expect(actual).to.equal(expected)

})
it("should leave spaces as they are",()=>{
    let actual = polybius("hi Joe")
    let expected = "3242 424351"
    expect(actual).to.equal(expected)
})
it("should decode a message by translating each pair of numbers into a letter",()=>{
    let expected = polybius("hi")
    let actual = "3242"
    expect(actual).to.equal(expected)

})
it("should chang 42 to 'j' and 'i'",()=>{
    let expected = polybius("hi Joe")
    let actual = "3242 424351"
    expect(actual).to.equal(expected)
})
it("should leave spaces as they are",()=>{
    let expected = polybius("hi Joe")
    let actual = "3242 424351"
    expect(actual).to.equal(expected)
})
it("should false if length of number is odd",()=>{
    const message = "156"
    let actual = polybius(message, false);
    expect(actual).to.be.false

})
})

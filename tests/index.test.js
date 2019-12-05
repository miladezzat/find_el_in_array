let searchInArray = require("../index")
var assert = require('chai').assert
var expect = require('chai').expect
    // searchInArray.searchInSimpleArray


describe('searchInSimpleArray method', function() {
    describe('#Array of numbers element', function() {
        let testArray = [
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ]
        let searchItem = 8;

        it(`sent array[ ${[...testArray]} ]and searchItem ${searchItem} should result equal 8`, () => {
            assert.equal(searchInArray.searchInSimpleArray(testArray, searchItem), 8)
        })
        it(`sent array[ ${[...testArray]} ]and searchItem 10 should result equal 10 not found`, () => {
            expect(searchInArray.searchInSimpleArray(testArray, 10)).to.be.equal("10 not found")
        })

    });
    describe('#Array of string element', function() {
        let testArray = [
            "milad", 'ezzat', 'fahmy'
        ]
        it(`sent array[ ${[...testArray]} ]and searchItem ezzat should result equal ezzat`, () => {
            assert.equal(searchInArray.searchInSimpleArray(testArray, "ezzat"), "ezzat")
        })

        it(`sent array[ ${[...testArray]} ]and searchItem Milad  should result equal milad`, () => {
            expect(searchInArray.searchInSimpleArray(testArray, 'Milad')).to.be.equal("milad")
        })

        it(`sent array[ ${[...testArray]} ]and searchItem Naroz should result equal Naroz not found`, () => {
            expect(searchInArray.searchInSimpleArray(testArray, "Naroz")).to.be.equal("Naroz not found")
        })

    });

    describe('#Array of mix string element and number elements', function() {
        let testArray = [
            "milad", 'ezzat', 'fahmy', 1, 5, 8
        ]
        it(`sent array[ ${[...testArray]} ]and searchItem ezzat should result equal ezzat`, () => {
            assert.equal(searchInArray.searchInSimpleArray(testArray, "ezzat"), "ezzat")
        })
        it(`sent array[ ${[...testArray]} ]and searchItem 5 should result equal 5`, () => {
            assert.equal(searchInArray.searchInSimpleArray(testArray, 5), 5)
        })
    });
});

describe('searchInComplexArray method', function() {
    describe('#Array of object elements', function() {
        let testArray = [
            { id: 1, name: "milad", age: 24 },
            { id: 2, name: "ezzat", age: 24 },
            { id: 3, name: "Fahym", age: 24 },
            { id: 4, name: "Milad", age: 24 },
        ]
        it(`sent array of objects and searchItem 1 and key id return {id:1, name:'milad', age: 24}`, () => {
                expect(searchInArray.searchInComplexArray(testArray, 'id', 1)).to.eql({ id: 1, name: 'milad', age: 24 })
            })
            // nokey is not propery in any object of array
        it(`sent array of objects and searchItem 1 and key blabla return blabla is not propery in any object of array `, () => {
            expect(searchInArray.searchInComplexArray(testArray, 'blabla', 1)).to.equal("blabla is not propery in any object of array")
        })

        //not founded in array
        it(`sent array of objects and searchItem 45 and key id return 45 not founded in array`, () => {
            expect(searchInArray.searchInComplexArray(testArray, 'id', 45)).to.equal("45 not founded in array")
        })
    });
});
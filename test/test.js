const chai = require('chai');
const expect = chai.expect;
const {add} = require("../index.js");
chai.should();

describe('Testing Mathmetical functions', ()=>{
    
    it('should return sum of 2 number', ()=>{
        add(5,5).should.equal(10);
    });
});
var expect = require('chai').expect;
var uncapitalize = require('../');

describe('uncapitalize', function() {
  it('should work', function() {
    expect(uncapitalize('Test')).to.equal('test');
  });

  it('should handle falsy values', function() {
    expect(uncapitalize(null)).to.equal(null);
    expect(uncapitalize('')).to.equal('');
  });

  it('should do nothing to lowercase strings', function() {
    expect(uncapitalize('test')).to.equal('test');
  });

  describe('words', function() {
    it('should work', function() {
      expect(uncapitalize.words('This Is A Test')).to.equal('this is a test');
    });

    it('should do nothing to lowercase strings', function() {
      expect(uncapitalize.words('this is a test')).to.equal('this is a test');
    });

    it('should only effect letters at the start of words', function() {
      expect(uncapitalize.words('THIS IS A TEST')).to.equal('tHIS iS a tEST');
    });
  });
});
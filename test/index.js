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
});
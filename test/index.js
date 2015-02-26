var chai = require('chai').expect;
var uncapitalize = require('../');

describe('uncapitalize', function() {
  it('should work', function() {
    expect(uncapitalize('Test')).to.equal('test');
    expect(uncapitalize(null)).to.equal(null);
    expect(uncapitalize('')).to.equal('');
    expect(uncapitalize('test')).to.equal('test');
  });
});
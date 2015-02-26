module.exports = function(str) {
  return str && (str[0].toLowerCase() + str.slice(1));
};

module.exports.words = function(str) {
  return str && str.replace(/(?:^|\s)[A-Z]/g, function(m) {
    return m.toLowerCase();
  });
};
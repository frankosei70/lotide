
const countLetters = function(sentence) {
  const counts = {};
  for (const letter of sentence) {
    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
};
module.exports = countLetters;
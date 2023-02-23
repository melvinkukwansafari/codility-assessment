function countOccurrences(str) {
    const counts = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    return Object.entries(counts).map(([char, count]) => [char, count]);
}
countOccurrences("abracadabra"); //returns [["a", 5], ["b", 2], ["r", 2], ["c", 1], ["d", 1]]
  
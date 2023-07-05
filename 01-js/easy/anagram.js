/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase()
  str2=str2.toLowerCase()
  if (str1.length !== str2.length) {
    return false;
  }
  let map1 = {},
    map2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (map1[str1[i]]) {
      map1[str1[i]] += 1;
    } else {
      map1[str1[i]] = 1;
    }

    if (map2[str2[i]]) {
      map2[str2[i]] += 1;
    } else {
      map2[str2[i]] = 1;
    }
  }

  let res = true;
  Object.keys(map1).forEach(i => {
    if(map1[i] != map2[i]){
      res = false
      return
    }
  });

  return res;
}

module.exports = isAnagram;

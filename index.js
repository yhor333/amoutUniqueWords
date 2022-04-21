function amoutUniqueWords(str) {
  if (!(typeof str === 'string')) {
    throw new Error('Enter the text');
  }

  const words = str.split(' ');
  const list = {};
  let counter = 0;

  for (let i = 0; i < words.length; i++) {
    if (!(list.hasOwnProperty(words[i]))) {
      list[words[i]] = 0;
    }
    ++list[words[i]];
  }

  for (let word in list) {
    if (list[word] === 1) {
      counter++
    }
  }

  return counter;
}

// 华为 OD 题，猜字谜

// 检查两个单词变换顺序是否相等
function isAnagram(words1: string, words2: string) {
  const freq = new Map<string, number>();

  for (let char of words1) {
    freq.set(char, (freq.get(char) ?? 0) + 1);
  }

  for (let char of words2) {
    if (!freq.has(char)) return false;
    freq.set(char, (freq.get(char) as number) - 1);
  }

  return Array.from(freq.values()).every(i => i === 0);
}

// 判断一个单词是否是另一个单词的子集
function isSubset(words1: Set<string>, words2: Set<string>) {
  for (let char of words1) {
    if (!words2.has(char)) {
      return false;
    }
  }

  return true;
}

function findNumOfValidWords(puzzles: string[], words: string[]) {
  const result: string[] = [];

  for (let puzzle of puzzles) {
    let found = false;
    const puzzleSet = new Set(puzzle);

    for (let word of words) {
      const wordSet = new Set(word);

      if (puzzle.length === word.length && isAnagram(puzzle, word)) {
        result.push(word);

        found = true;

        continue;
      }

      if (puzzleSet.size === wordSet.size) {
        result.push(word);

        found = true;

        continue;
      }

      if (!found) {
        result.push('not found');
      }
    }
  }

  return result;
}

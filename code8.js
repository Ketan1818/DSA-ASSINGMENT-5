function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      // If the length is odd, it cannot be a doubled array
      return [];
    }
  
    const countMap = new Map();
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    const original = [];
    for (const num of changed) {
      const half = num / 2;
      if (countMap.has(half) && countMap.get(half) > 0) {
        countMap.set(half, countMap.get(half) - 1);
        original.push(half);
      } else {
        return [];
      }
    }
  
    return original;
  }
  
function convertTo2DArray(original, m, n) {
    if (original.length !== m * n) {
      return [];
    }
  
    let result = new Array(m);
  
    for (let i = 0; i < m; i++) {
      result[i] = new Array(n);
      for (let j = 0; j < n; j++) {
        result[i][j] = original[i * n + j];
      }
    }
  
    return result;
  }
  
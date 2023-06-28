function findCompleteRows(n) {
    let completeRows = 0;
    let totalCoins = 0;
    let k = 1;
  
    while (totalCoins + k <= n) {
      totalCoins += k;
      k++;
      completeRows++;
    }
  
    return completeRows;
  }
  
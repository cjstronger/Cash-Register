function checkCashRegister(price, cash, cid) {
  let countdown = cash - price;
  let newArray = []
  let obj = {status: 'OPEN', change: newArray}
  let currency = [
    ['PENNY', .01], ['NICKEL', .05], ['DIME', .10], ['QUARTER', .25],
    ['ONE', 1], ['FIVE', 5],['TEN', 10],['TWENTY', 20], ['ONE HUNDRED', 100]
  ];
  for(let i = currency.length - 1; i >= 0; i--){
    let cashInDrawer = cid.find(e => e[0] === currency[i][0])[1];
    let change = 0
    if(cid.reduce((acc, e) => acc+e[1], 0) === countdown){
      return obj = {status: 'CLOSED', change: cid}}
    while(countdown >= currency[i][1] && cashInDrawer > 0){
      countdown -= currency[i][1];
      change = parseFloat(change.toFixed(2)) + currency[i][1]
      cashInDrawer -= currency[i][1];
      cid[i][1] -= currency[i][1];
      countdown = Math.round(countdown * 100) / 100;
    }
    change = [cid[i][0], change]
    change[1] > 0 ? newArray.push(change) : undefined
  }
  countdown > 0 ? (obj.status = 'INSUFFICIENT_FUNDS', newArray.splice(0)) : undefined
  console.log(obj)
  return obj
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], 
["ONE HUNDRED", 0]])

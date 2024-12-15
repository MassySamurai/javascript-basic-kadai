const todayTs = new Date();
console.log(todayTs);
let todayYear = todayTs.getFullYear();
let todayMonth = todayTs.getMonth() + 1;
let todayDate = todayTs.getDate();
let todayText = todayYear + '年' + todayMonth + '月' + todayDate + '日'
console.log(todayText);

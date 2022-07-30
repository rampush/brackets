module.exports = function check(str, bracketsConfig) {
  let arrstr = str.split('');
  for (let i = 0; i < arrstr.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      if (arrstr[i] == bracketsConfig[k][1] && arrstr[i - 1] == bracketsConfig[k][0]) {
        arrstr.splice(i - 1, 2);
        i = 0;
        break;
      }
    }
  }
  if (arrstr < 1) {
    return true;
  } else {
    return false;
  }
};

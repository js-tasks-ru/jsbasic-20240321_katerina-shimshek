function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  if (lowerStr.indexOf("1xbet") != -1) {
    return true;
  }

  if (lowerStr.indexOf("xxx") != -1) {
    return true;
  }

  if (lowerStr.indexOf("innocent") != -1) {
    return false;
  }

  return false;
}

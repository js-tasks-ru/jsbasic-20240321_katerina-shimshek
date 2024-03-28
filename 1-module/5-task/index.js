// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "…"
//   } else {
//     str
//   }
// }; почему этот код не работает? это же то же самое, что и через тернарный оператор, или нет?

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
};
function sum(ary) {
  return ary.splice(2).reduce(function (prev, cur) {
    return +cur + prev;
  }, 0);
}

console.log(sum(process.argv));
var fn = function () {
  var where = "óuter";
  {
    let where = "inner";
  }
  ACTUAL = where;
};
fn();

expect(ACTUAL === "outer").to.be.true;

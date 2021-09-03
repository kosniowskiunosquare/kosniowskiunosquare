const consider = (name) => {
  return "creo ${name}";
};

//  function 2

const exclaim = (statement) => {
  return "${statement.toUppercase()}!";
};

const blame = _.compose(consider, exclaim);

blame("you");

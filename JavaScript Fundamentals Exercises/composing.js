const compose = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2);
    };
  };
};

fn();

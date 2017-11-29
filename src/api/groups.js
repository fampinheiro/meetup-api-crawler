const fetch = require("./fetch");

module.exports = name => {
  return fetch({
    pathname: `/${name}`
  });
};

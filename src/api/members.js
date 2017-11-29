const fetch = require("./fetch");

module.exports = query => {
  return fetch({
    pathname: `/2/members`,
    query: {
      page: 20,
      ...query
    }
  });
};

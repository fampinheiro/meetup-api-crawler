const get = require("lodash.get");
const url = require("url");
const api = require("./api");

module.exports = function iterate(result) {
  const body = result.body;
  const members = get(result, "body.results", []);
  if (body.meta && body.meta.next) {
    const uri = url.parse(body.meta.next);
    return api
      .more(uri)
      .then(iterate)
      .then(result => result.concat(members));
  }

  return Promise.resolve(members);
};

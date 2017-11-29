const got = require("got");
const url = require("url");
const config = require("../config");

module.exports = options => {
  const uri = url.format({
    ...options,
    protocol: "https",
    host: "api.meetup.com",
    query: {
      ...options.query,
      key: config.key
    }
  });

  return got(uri, {
    json: true
  }).then(result => {
    const headers = Object.keys(result.headers)
      .reduce((headers, key) => {
        if (key.indexOf("ratelimit") === -1) {
          return headers;
        }
        return headers.concat(`${key}=${result.headers[key]}`);
      }, [])
      .join(", ");
    console.error(headers);
    return result;
  });
};

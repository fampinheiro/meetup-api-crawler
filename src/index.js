const api = require("./api");
const config = require("./config");
const iterate = require("./iterate");
const print = require("./print");

api
  .groups(config.group)
  .then(result => result.body)
  .then(result => api.members({ group_id: result.id }))
  .then(iterate)
  .then(print)
  .catch(err => {
    if (err.statusCode === 401) {
      return console.error(
        `❌  Go to https://secure.meetup.com/meetup_api/key/ and use it with --key to run the cli.`
      );
    }
    return console.error(err);
  });

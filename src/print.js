const get = require("lodash.get");

module.exports = members => {
  console.log(`id, name, city, link, photo, twitter, facebook`);
  console.log(
    members
      .map(member =>
        [
          member.id,
          member.name,
          member.city,
          member.link,
          get(member, "photo.photo_link", ""),
          services(member)
        ].join(", ")
      )
      .join("\n")
  );
  return members;
};

function services(member) {
  if (!member.services) {
    return [];
  }

  return ["twitter", "facebook"]
    .reduce((result, key) => {
      return result.concat(get(member, `service[${key}].identifier`, ""));
    }, [])
    .join(", ");
}

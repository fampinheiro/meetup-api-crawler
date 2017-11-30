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
  return ["twitter", "facebook"]
    .map(network => get(member, `other_services[${network}]identifier`, ""))
    .join(", ");
}

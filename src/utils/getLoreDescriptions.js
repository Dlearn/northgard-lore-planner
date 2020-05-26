const fs = require("fs");
const request = require("request"); // https://stackoverflow.com/questions/5801453/in-node-js-express-how-do-i-download-a-page-and-gets-its-html/51000443
const cheerio = require("cheerio");

const CLANS = [
  "Eikthyrnir",
  "Heidrun",
  "Fenrir",
  "Huginn_and_Muninn",
  "Bjarki",
  "Slidrugtanni",
  "Sváfnir",
  "Nidhogg",
  "Svadilfari",
  "Lyngbakr",
  "Himminbrjotir",
];

function requestWrapper(fancyName, loreDescriptions) {
  return new Promise((resolve, reject) => {
    request(
      { uri: `https://northgard.gamepedia.com/${fancyName}` },
      (error, response, body) => {
        const $ = cheerio.load(body);
        $("div.eq_knowledge").each((i, elem) => {
          const lore = $(elem).find("div.desc > span").text();
          const dirtyDescription = $(elem).find("div.desc > p.tooltip").text();
          const description = dirtyDescription
            .trim() // Remove leading and trailing whitespace
            .replace(/\s\s+/g, " "); // Turn 2 or more whitespace into 1 whitespace
          loreDescriptions[lore] = description;
        });
        resolve();
      }
    );
  });
}

const promises = [];
const loreDescriptions = {};
CLANS.forEach((clan) => {
  const promise = requestWrapper(clan, loreDescriptions);
  promises.push(promise);
});
Promise.all(promises).then(() => {
  fs.writeFileSync(
    `../descriptions/lores.json`,
    JSON.stringify(loreDescriptions)
  );
});

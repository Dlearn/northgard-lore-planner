const fs = require("fs");
const request = require("request"); // https://stackoverflow.com/questions/5801453/in-node-js-express-how-do-i-download-a-page-and-gets-its-html/51000443
const cheerio = require("cheerio");

const CLAN_NAMES = {
  Stag: "Eikthyrnir",
  Goat: "Heidrun",
  Wolf: "Fenrir",
  Raven: "Huginn_and_Muninn",
  Bear: "Bjarki",
  Boar: "Slidrugtanni",
  Snake: "Sváfnir",
  Dragon: "Nidhogg",
  Horse: "Svadilfari",
  Kraken: "Lyngbakr",
  Ox: "Himminbrjotir",
};

Object.entries(CLAN_NAMES).forEach(([name, fancyName]) => {
  request(
    { uri: `https://northgard.gamepedia.com/${fancyName}` },
    (error, response, body) => {
      const descriptions = [];
      const $ = cheerio.load(body);
      $("p.tooltip").each((i, elem) => {
        const descriptionWithMultipleSpaces = $(elem).text();
        const description = descriptionWithMultipleSpaces.replace(
          /\s\s+/g,
          " "
        );
        descriptions.push(description);
      });
      fs.writeFileSync(
        `../descriptions/${name}.json`,
        JSON.stringify(descriptions)
      );
    }
  );
});

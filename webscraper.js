import fetch from "node-fetch";
import cheerio from "cheerio";
import pretty from "pretty";

const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
      });
};

const URL = "https://regex101.com";

const getWebpageContents = async () => {
   const webpageData = await getRawData(URL);
   const contents = cheerio.load(webpageData);
   var webpage = (pretty(contents.html()));
   
   console.log(webpage.match("suicide"));

};

getWebpageContents();
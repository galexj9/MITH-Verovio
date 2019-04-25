import "verovio";
// Create the app - here with an empty option object
const app = new Verovio.App(document.getElementById("app"), {});
// Load a file (MEI or MusicXML)
//temporarily disabled so the website loads faster while working on it
/**
fetch("https://www.verovio.org/editor/brahms.mei")
    .then(function(response) {
      return response.text();
    }).then(function(text) {
      app.loadData(text);
    }); **/

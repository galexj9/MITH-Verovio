/* Some global variables */
let vrvToolkit = new verovio.toolkit();
//defaults
let pageHeight = 1920,  pageWidth = 1080;

let choiceXPathQuery = [];


//startup function call order:
  //document.ready
  //loadFile()
  //loadData()
  //setOptions()
  //loadPage()

$(document).ready(function() {
  //verovio file loading
  loadFile();

  //toggle button
  $('a#button1').click(function() {
    $(this).toggleClass("down");
    choiceXPathQuery = (choiceXPathQuery == "./reg")? [] : ["./reg"];
    loadFile();
  });

  $('a#controls').click(function() {
    $(this).toggleClass("down");
    playMIDI();
  });
});

//loads the mei file
function loadFile() {
  $.get("/data/nocturne.mei").then((data) => loadData(data));
}

//loads the mei data into the verovio toolkit with set options
function loadData(data) {
  setOptions();
  vrvToolkit.loadData(data);

  page = 1;
  loadPage();
}

//configures the rendering options for the verovio viewer
function setOptions() {
  /* Adjust the height and width according to the window size */
  pageHeight = document.pageHeight;
  pageWidth = document.pageWidth;
  options = {
    pageHeight: pageHeight,
    pageWidth: pageWidth,
    scale: 50,
    adjustPageHeight: true,
    choiceXPathQuery: choiceXPathQuery
  };
  vrvToolkit.setOptions(options);
}

//loads everything onto the page
function loadPage() {
  svg = vrvToolkit.renderToSVG(1, {});
  $("#output").html(svg);
}

//plays the song in MIDI
function playMIDI() {
  if (!MIDI.Player.playing) {
    MIDI.Player.BPM = 69;
    MIDI.loadPlugin({
      soundfontUrl: "MIDI/examples/soundfont/",
      instruments: 'acoustic_grand_piano',
      onsuccess: function() {
        var player = MIDI.Player;
        player.loadFile("data:audio/midi;base64," + vrvToolkit.renderToMIDI(),
          function() {

            MIDI.AudioTag.setVolume(0, 127);
            MIDI.AudioTag.setVolume(1, 127);
            MIDI.channel = 1;
            player.start();
          });
      }
    });
  } else {
    MIDI.Player.stop();
  }
}

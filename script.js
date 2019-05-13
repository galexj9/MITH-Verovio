/* Some global variables */
var vrvToolkit = new verovio.toolkit();
//defaults
var pageHeight = 1920;
var pageWidth = 1080;


/* A function for setting options to the toolkit */
function setOptions() {
  /* Adjust the height and width according to the window size */
  pageHeight = document.pageHeight;
  pageWidth = document.pageWidth;
  options = {
    pageHeight: pageHeight,
    pageWidth: pageWidth,
    scale: 50,
    adjustPageHeight: true
  };
  vrvToolkit.setOptions(options);
}

/* A function that sets the options, loads the data and renders the first page */
function loadData(data) {
  setOptions();
  vrvToolkit.loadData(data);
  svg = vrvToolkit.renderToSVG(1, {});
  $("#output").html(svg);
}

/* a function that paints the pedal markings all red */
function paintPeds() {
  var style = window.getComputedStyle($(".pedal")[0]);
  var red = "rgb(200, 0, 0)",
    black = "rgb(0, 0, 0)";
  //checks the first pedal's style
  if (style.stroke == red) {
    $(".pedal").attr("fill", black).attr("stroke", black);
  } else {
    $(".pedal").attr("fill", red).attr("stroke", red);
  }
}

function play_midi() {
  if (!MIDI.Player.playing) {
    MIDI.Player.BPM = 60;
    playMIDIString(vrvToolkit.renderToMIDI());
  } else {
    MIDI.Player.stop();
  }
}

function playMIDIString(string) {
  MIDI.loadPlugin({
    soundfontUrl: "MIDI/examples/soundfont/",
    instruments: 'acoustic_grand_piano',
    onsuccess: function() {
      var player = MIDI.Player;
      player.loadFile("data:audio/midi;base64," + string, function() {
        MIDI.AudioTag.setVolume(0, 127);
        MIDI.AudioTag.setVolume(1, 127);
        MIDI.channel = 1;
        player.start();
      });
    }
  });
}

$(document).ready(function() {
  //verovio file loading
  $.get("/data/nocturne.mei").then((data) => loadData(data));

  //toggle button
  $('a#button1').click(function() {
    $(this).toggleClass("down");
    paintPeds();
  });

  $('a#controls').click(function() {
    $(this).toggleClass("down");
    play_midi();
  });
});

const Webamp = window.Webamp;

const webamp = new Webamp({
  initialTracks: [
    {
      metaData: { title: "Tatiana", artist: "La Femme" },
      url: "./audio/tatiana.mp3",
    },
    {
      metaData: { title: "Bad Decisions", artist: "The Strokes" },
      url: "./audio/badDecisions.m4a",
    },
    {
      metaData: { title: "No Nein", artist: "1tbsp" },
      url: "./audio/noNein.m4a",
    },
  ],
  initialSkin: {
    url: "./skins/classic.wsz",
  },
});

webamp.renderWhenReady(document.getElementById("player"));

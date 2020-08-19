(() => {
  let placesAutocomplete = places({
    appId: "plOSV629H4PZ",
    apiKey: "f91689ee3fdf5af8eaf00eb81fdca94c",
    container: document.querySelector("#search-city-input"),
    templates: {
      value: function (suggestion) {
        return `${suggestion.name}`;
      },
    },
  }).configure({
    type: "city",
  });
})();

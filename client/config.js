window.OTP_config = {
  initLatLng: [48.8588589, 2.3475569],
  routerId: "paris",
  osmMapKey: 'conveyal.ikck6888', // temporary -- do not use in production, provide your own
  aerialMapKey: 'conveyal.map-a3mk3jug', // unset

  // mapzenApiKey: "your-key", // your Mapzen Search API key
  // geocoderSearchRadius : 25, // search radius in km for mapzen geocoder from initLatLng (defaults to 50 if not specified)

  otpApi: 'http://paris.acolytesanonymes.org/otp/routers/',

  // geocoders to use:
  geocoders: [ 'esri' ], // possible choices: esri, otp, nominatim, pelias, mapbox
  reverseGeocoder: 'esri', // possible choices: esri, nominatim, pelias, mapbox
  reverseGeocode: true,

  // geocoder api endpoints
  nominatimApi: 'https://nominatim.openstreetmap.org/',
  esriApi: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/',
  mapzenApi: 'https://search.mapzen.com/v1/',

  //Here should be all languages that we have translations for
  //Order doesn't matter
  availible_languages: {
      "de": {
        //Name of a language written in a language itself (Used in Frontend to
        //choose a language)
        name: 'Deutsch',
        //FALSE-imperial units are used
        //TRUE-Metric units are used
        metric : true, 
        //Name of localization file (*.po file) in src/client/i18n
        locale_short : "de",
        //Name of datepicker localization in
        //src/client/js/lib/jquery-ui/i18n (usually
        //same as locale_short)
        //this is index in $.datepicker.regional array
        //If file for your language doesn't exist download it from here
        //https://github.com/jquery/jquery-ui/tree/1-9-stable/ui/i18n
        //into src/client/js/lib/jquery-ui/i18n
        //and add it in index.html after other localizations
        //It will be used automatically when UI is switched to this locale
        datepicker_locale_short: "de",
        format         : "D. MMM LT", //momentjs
        date_format    : "DD.MM.YYYY", //momentjs
        time_format    : "H:mm", //prej je blo H:i momentjs
    },
    "fr" : {
        //Name of a language written in a language itself (Used in Frontend to
        //choose a language)
        name: 'Français',
        //FALSE-imperial units are used
        //TRUE-Metric units are used
        metric : true, 
        //Name of localization file (*.po file) in src/client/i18n
        locale_short : "fr",
        //Name of datepicker localization in
        //src/client/js/lib/jquery-ui/i18n (usually
        //same as locale_short)
        //this is index in $.datepicker.regional array
        //If file for your language doesn't exist download it from here
        //https://github.com/jquery/jquery-ui/tree/1-9-stable/ui/i18n
        //into src/client/js/lib/jquery-ui/i18n
        //and add it in index.html after other localizations
        //It will be used automatically when UI is switched to this locale
        datepicker_locale_short: "fr",
        format         : "D MMM LT", //moment.js
        date_format    : "DD/MM/YYYY", //momentjs 
        time_format    : "HH:mm", //momentjs
    },
    "it": {
        //Name of a language written in a language itself (Used in Frontend to
        //choose a language)
        name: 'Italiano',
        //FALSE-imperial units are used
        //TRUE-Metric units are used
        metric : true,
        //Name of localization file (*.po file) in src/client/i18n
        locale_short : "it",
        //Name of datepicker localization in
        //src/client/js/lib/jquery-ui/i18n (usually
        //same as locale_short)
        //this is index in $.datepicker.regional array
        //If file for your language doesn't exist download it from here
        //https://github.com/jquery/jquery-ui/tree/1-9-stable/ui/i18n
        //into src/client/js/lib/jquery-ui/i18n
        //and add it in index.html after other localizations
        //It will be used automatically when UI is switched to this locale
        datepicker_locale_short: "it",
        format: "D MMM LT", //momentjs
        date_format: "DD/MM/YYYY", //momentjs
        time_format: "HH:mm", //momentjs
    },
    "sl": {
        //Name of a language written in a language itself (Used in Frontend to
        //choose a language)
        name: 'Slovensko',
        //FALSE-imperial units are used
        //TRUE-Metric units are used
        metric : true, 
        //Name of localization file (*.po file) in src/client/i18n
        locale_short : "sl",
        //Name of datepicker localization in
        //src/client/js/lib/jquery-ui/i18n (usually
        //same as locale_short)
        //this is index in $.datepicker.regional array
        //If file for your language doesn't exist download it from here
        //https://github.com/jquery/jquery-ui/tree/1-9-stable/ui/i18n
        //into src/client/js/lib/jquery-ui/i18n
        //and add it in index.html after other localizations
        //It will be used automatically when UI is switched to this locale
        datepicker_locale_short: "sl",
        format         : "D. MMM LT", //momentjs
        date_format    : "DD.MM.YYYY", //momentjs
        time_format    : "H:mm", //momentjs
    },
    "ca_ES": {
        //Name of a language written in a language itself (Used in Frontend to
        //choose a language)
        name: 'Català',
        //FALSE-imperial units are used
        //TRUE-Metric units are used
        metric : true, 
        //Name of localization file (*.po file) in src/client/i18n
        locale_short : "ca_ES",
        //Name of datepicker localization in
        //src/client/js/lib/jquery-ui/i18n (usually
        //same as locale_short)
        //this is index in $.datepicker.regional array
        //If file for your language doesn't exist download it from here
        //https://github.com/jquery/jquery-ui/tree/1-9-stable/ui/i18n
        //into src/client/js/lib/jquery-ui/i18n
        //and add it in index.html after other localizations
        //It will be used automatically when UI is switched to this locale
        datepicker_locale_short: "ca",
        format         : "D MMM LT", //momentjs
        date_format    : "DD/MM/YYYY", //momentjs must be same as date_picker format which is by default: mm/dd/yy
        time_format    : "HH:mm", //momentjs
    },
    "en": {
        //Name of a language written in a language itself (Used in Frontend to
        //choose a language)
        name: 'English',
        //FALSE-imperial units are used
        //TRUE-Metric units are used
        metric : false, 
        //Name of localization file (*.po file) in src/client/i18n
        locale_short : "en",
        //Name of datepicker localization in
        //src/client/js/lib/jquery-ui/i18n (usually
        //same as locale_short)
        //this is index in $.datepicker.regional array
        //If file for your language doesn't exist download it from here
        //https://github.com/jquery/jquery-ui/tree/1-9-stable/ui/i18n
        //into src/client/js/lib/jquery-ui/i18n
        //and add it in index.html after other localizations
        //It will be used automatically when UI is switched to this locale
        datepicker_locale_short: "", //Doesn't use localization
        format         : "MMM Do h:mma", //moment.js
        date_format    : "MM/DD/YYYY", //momentjs must be same as date_picker format which is by default: mm/dd/yy
        time_format    : "h:mma", //momentjs
    },
  },

  cookieName: "wanted_language",

  langQS: "setLng"
}

var express = require('express');
var router = express.Router();

var say = require('say')

var googleTTS = require('google-tts-api');



router.get('/:text', function(req, res, next) {
  // say.speak(req.params.text);

  googleTTS('Hello World', 'en', 1)   // speed normal = 1 (default), slow = 0.24
    .then(function (url) {
      console.log(url); // https://translate.google.com/translate_tts?...
    })
    .catch(function (err) {
      console.error(err.stack);
    });

  res.send(req.params.text);
});

module.exports = router;

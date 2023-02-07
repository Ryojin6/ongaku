/* eslint global-require: 0 */
let audio = { VueAudioBetter: { render: () => '' } };

if (process.isClient) {
  audio = require('vue-audio-better');
}

module.exports = audio;

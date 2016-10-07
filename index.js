'use strict';

const config = require('./src/utils').config,
    hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState,
    dashButton = require('node-dash-button');

const api = new HueApi(config.HUE_HOST, config.HUE_USER);
const state = lightState.create();

dashButton(config.DASH_MAC, null, null, "all")
  .on("detected", function (dashId) {
    api.lightStatus(config.LIGHT_NUMBER)
    .then(toggleLight)
    .done();
  });

function logResult(data) {
  console.log(data);
}

function setLightState(command) {
  return api.setLightState(config.LIGHT_NUMBER, state[command]());
}

function toggleLight(status) {
  var lightStatus = status.state.on ? setLightState('off') : setLightState('on');

  lightStatus
  .fail(logResult)
  .done();
}

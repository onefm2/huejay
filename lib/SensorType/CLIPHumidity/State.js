'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * CLIPHumidity sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get humidity
   *
   * @return {float} Temperature (Celsius)
   */
  get humidity() {
    return this.attributes.get('humidity') / 100;
  }

  /**
   * Set humidity
   *
   * @param {float} degrees Degrees
   */
  set humidity(degrees) {
    this.attributes.set('humidity', Number(degrees) * 100);
  }
}

module.exports = State;
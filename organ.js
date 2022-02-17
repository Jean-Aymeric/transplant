"use strict";

/**
 * module Organ
 */
class Organ {
    /**
     * @private
     * @type {String} #name
     */
    #name

    /**
     * @param {String} name
     */
    constructor(name) {
        this.#name = name;
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.#name;
    }
}
module.exports = Organ;

"use strict";

/**
 * module Clothe
 */
class Clothe {
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
module.exports = Clothe;

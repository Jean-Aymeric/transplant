"use strict";

const Organ = require("./organ");
const Eart = require("./eart");
const Clothe = require("./clothe");

/**
 * module Human
 */
class Human {
    /**
     * @private
     * @type {Organ[]} #organs
     */
     #organs

    /**
     * @private
     * @type {Organ[]} #transplants
     */
     #transplants

     /**
     * @private
     * @type {Clothe[]} #clothes
     */
    #clothes

    constructor() {
        this.#organs = [];
        this.#transplants = [];
        this.#clothes = [];
        this.#organs.push(new Organ("Coeur"))
    }

    /**
     * @returns {null}
     */
    displayOrganNames() {
        this.#organs.forEach(organ => {
            console.log(organ.name);
        });
        this.#transplants.forEach(organ => {
            console.log(organ.name, "(transplant)");
        });
    }


    /**
     * @returns {null}
     */
    displayClotheNames() {
        if (this.#clothes.length == 0) {
            console.log("I'm nude.");
        } else {
            console.log("I wear :")
            this.#clothes.forEach(organ => {
                console.log(organ.name);
            });
        }
    }

    /**
     * @returns {Organ}
     */
    extractOrgan() {
        return this.#organs.pop();
    }

    /**
     * @param {Organ} organ
     * @return {null}
     */
    transplant(organ) {
        this.#transplants.push(organ);
    }

    /**
     * @param {Clothe} clothe
     * @return {null}
     */
    dress(clothe) {
        this.#clothes.push(clothe);
    }

    /**
     * returns {Clothe}
     */
    undress() {
        return this.#clothes.pop();
    }
}

module.exports = Human;

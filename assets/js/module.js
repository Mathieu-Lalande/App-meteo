/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

export const weekDayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export const monthNames = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Jui', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone timezone from UTC in seconds
 * @returns {string} date in format "Samedi 12, Juin"
 */


export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];
    
    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * @param {number} timeUnix Unix time in seconds
 * @param {number} timezone timezone from UTC in seconds
 * @returns {string} time in format "HH:MM"
 */

export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = (date.getUTCHours() + 2) % 24; // Ajouter 2 heures pour convertir en heure française
    const minutes = date.getUTCMinutes();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}


/**
 * @param {number} timeUnix Unix time in seconds
 * @param {number} timezone timezone from UTC in seconds
 * @returns {string} time in format "HH"
 */

export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = (date.getUTCHours() + 2) % 24; // Ajouter 2 heures pour convertir en heure française

    return hours.toString().padStart(2, '0');
}

/**
 * @param {number} mps Meter per second
 * @returns {number} km/h
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: 'Bonne',
        message: 'La qualité de l\'air est considérée comme satisfaisante, et la pollution de l\'air pose peu ou pas de risque.'
    },
    2: {
        level: 'Acceptable',
        message: 'La qualité de l\'air est acceptable. Cependant, pour certains polluants, il peut y avoir un risque sur la santé pour un très petit nombre de personnes inhabituellement sensibles à la pollution atmosphérique.'
    },
    3: {
        level: 'Modérée',
        message: 'Tout le monde peut commencer à ressentir des effets sur la santé; les membres des groupes sensibles peuvent ressentir des effets de santé plus graves.'
    },
    4: {
        level: 'Mauvaise',
        message: 'Des avertissements de santé de conditions d\'urgence. Toute la population est plus susceptible d\'être affectée.'
    },
    5: {
        level: 'Très mauvaise',
        message: 'Alerte de santé: tout le monde peut ressentir des effets de santé plus graves.'
    },
}
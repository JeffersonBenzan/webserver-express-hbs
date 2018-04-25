const hbs = require('hbs');


hbs.registerHelper("getAnio", () => new Date().getFullYear());
hbs.registerHelper("getHora", () => new Date().getHours());
hbs.registerHelper("getMinut", () => new Date().getMinutes());
hbs.registerHelper("getsecods", () => new Date().getSeconds());

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});
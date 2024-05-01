/*
    Name: Logs.js
    Author: iroaK
    Description: Un módulo de registro para Node.js que proporciona funciones para registrar mensajes de log y errores en archivos de registro.
*/

// Import Modules
const fs = require('fs');
const crypto = require('crypto');
const Colors = require('colors');

// LogHandler Class
class LogHandler {

    /**
    *   Constructor de la clase LogHandler.
    *   @param {string} Name - El nombre de la clase.
    *   @param {string} Color - El color de la clase.
    */
    constructor(Name, Color) {
        this.ClassName = Name;
        this.Color = Colors[Color] ? Colors[Color] : Colors['white'];
        if (!fs.existsSync('./Logs/')) {
            fs.mkdirSync('./Logs/');
        }
    }

    /**
    *   Calcula el hash MD5 de una cadena de texto.
    *   @param {string} theString - La cadena de texto a la que se le calculará el hash MD5.
    *   @returns {string} El hash MD5 de la cadena de texto.
    */
    getMD5(theString){
        return crypto.createHash('md5').update(theString).digest("hex");
    }

    /**
    *   Obtiene la hora actual en formato ISO.
    *   @returns {string} La hora actual en formato ISO.
    */
    getCurrentTime() {
        const now = new Date();
        return now.toISOString();
    }

    /**
    *   Crea un registro de log con el texto proporcionado.
    *   @param {string} textLog - El texto del log.
    */
    createLog(textLog) {
        try {
            let logMessage = `[${this.ClassName}] ${textLog}`;
            console.log(this.Color(logMessage));
            logMessage = `[${this.getCurrentTime()}][${this.ClassName}] ${textLog}`;
            fs.appendFileSync('./Logs/logs.log', logMessage + '\n');
        } catch (e) {
            console.error(e);
        }
    }

    /**
    *   Registra un error en el log de errores y muestra el mensaje de error en la consola.
    *   @param {string} error - El mensaje de error.
    *   @param {Error|string} errorStack - El stack de error o una cadena de texto adicional.
    */
    errorLog(error, errorStack) {
        try {
            let errorMessage = `[${this.ClassName} (ERROR)] ${error}`;
            console.error(Colors.red(errorMessage));
            errorMessage = `[${this.getCurrentTime()}][${this.ClassName} (ERROR)] ${error}`;
            if (errorStack instanceof Error) console.error(errorStack.stack);
            else if (errorStack && typeof errorStack === 'string') console.error(errorStack);
            const errorLogPath = `./Logs/errors.log`;
            fs.appendFileSync(errorLogPath, errorMessage + '\n');
            if (errorStack instanceof Error) {
                fs.appendFileSync(errorLogPath, errorStack.stack + '\n');
            } else if (errorStack && typeof errorStack === 'string') {
                fs.appendFileSync(errorLogPath, errorStack + '\n');
            }
        } catch (e) {
            console.error(e);
        }
    }

    /**
    *   Retrasa la ejecución de una función durante un número específico de milisegundos.
    *   @param {number} milliseconds - El número de milisegundos para retrasar la ejecución.
    *   @returns {Promise} - Una promesa que se resuelve después de que se haya retrasado la ejecución.
    */
    async delay(milliseconds) {
        return new Promise(resolve => {
          setTimeout(resolve, milliseconds);
        });
    }

}

// Exportar la clase LogHandler
exports.LogHandler = LogHandler;
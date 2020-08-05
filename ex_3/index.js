const Logger = require('logplease');
const logger1 = Logger.create('utils1',{ color: Logger.Colors.Blue }); 
const logger2 = Logger.create('utils2',{ color: Logger.Colors.Green }); 
const logger3 = Logger.create('utils3',{ color: Logger.Colors.Yellow });
const logger4 = Logger.create('utils2',{ color: Logger.Colors.Red });
logger1.debug(`Hello Node.js`);
logger2.info(`Node.js is great!!`);
logger3.warn(`Warning, Warning, I think we have a Warning`);
logger4.error(`Mayday Mayday, we have an errro, repeat.. we have an error`);

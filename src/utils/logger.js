import * as bunyan from 'bunyan';

const log = bunyan.createLogger(
  {
    name: 'graphDemo',
    level: 'info',
    streams: [
      {
        level: 'info',
        stream: process.stdout,
      },
      {
        level: 'error',
        path: 'error.log',
      },
    ],
  },
);

export {
  log,
};

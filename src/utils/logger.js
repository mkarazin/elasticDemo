import * as bunyan from 'bunyan';

export const log = bunyan.createLogger(
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


import { createLogger, format, transports } from 'winston';

export const createBaseLogger = (service: string) => {
  return createLogger({
    defaultMeta: { service },
    format: format.combine(
      format.timestamp(),
      format.json()
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: `logs/${service}-error.log`, level: 'error' }),
      new transports.File({ filename: `logs/${service}.log` })
    ]
  });
};

export const baseLogger = createBaseLogger('app');

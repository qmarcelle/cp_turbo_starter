
import { createLogger, format, transports } from 'winston';
import type { LoggerConfig, LogEntry, LogLevel } from './types';

class Logger {
  private logger;
  private service: string;
  private correlationId?: string;

  constructor(config: LoggerConfig) {
    this.service = config.service;
    this.correlationId = config.correlationId;

    this.logger = createLogger({
      level: config.level || 'info',
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
      defaultMeta: { 
        service: this.service,
        correlationId: this.correlationId 
      },
      transports: [
        new transports.Console(),
        new transports.File({ 
          filename: `logs/${this.service}-error.log`, 
          level: 'error' 
        }),
        new transports.File({ 
          filename: `logs/${this.service}.log` 
        })
      ]
    });
  }

  private log(level: LogLevel, message: string, metadata?: Record<string, unknown>) {
    const logEntry: LogEntry = {
      message,
      level,
      timestamp: new Date().toISOString(),
      correlationId: this.correlationId,
      service: this.service,
      ...(metadata && { metadata })
    };

    this.logger.log(level, message, logEntry);
  }

  error(message: string, metadata?: Record<string, unknown>) {
    this.log('error', message, metadata);
  }

  warn(message: string, metadata?: Record<string, unknown>) {
    this.log('warn', message, metadata);
  }

  info(message: string, metadata?: Record<string, unknown>) {
    this.log('info', message, metadata);
  }

  debug(message: string, metadata?: Record<string, unknown>) {
    this.log('debug', message, metadata);
  }

  setCorrelationId(correlationId: string) {
    this.correlationId = correlationId;
  }
}

export const createBaseLogger = (config: LoggerConfig) => new Logger(config);
export * from './types';

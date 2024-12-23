
export interface LoggerConfig {
  service: string;
  correlationId?: string;
  level?: string;
}

export interface LogEntry {
  message: string;
  level: string;
  timestamp: string;
  correlationId?: string;
  service: string;
  metadata?: Record<string, unknown>;
}

export type LogLevel = 'error' | 'warn' | 'info' | 'debug';

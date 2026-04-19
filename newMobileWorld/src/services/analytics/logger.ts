import { addSentryBreadcrumb } from './sentry';

type LogRequestInput = {
  method: string;
  url: string;
  data: unknown;
};

type LogResponseInput = {
  status: number;
  url: string;
};

type LogErrorInput = {
  error: unknown;
};

export const apiLogger = {
  logRequest: (input: LogRequestInput) => {
    addSentryBreadcrumb(`API ${input.method} ${input.url}`, 'http');
  },
  logResponse: (input: LogResponseInput) => {
    addSentryBreadcrumb(`API response ${input.status} ${input.url}`, 'http');
  },
  logError: (input: LogErrorInput) => {
    const message = input.error instanceof Error ? input.error.message : 'Unknown API error';
    addSentryBreadcrumb(message, 'http_error');
  },
};

// global-error-handler.ts
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    console.error('Angular caught error:', error);
    // TODO: Log to service or show global error UI
  }
}

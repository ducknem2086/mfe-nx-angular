// apps/remote/src/app/remote-translate.factory.ts
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';

/**
 * Factory that finds the <script> tag for remoteEntry.js
 * and uses its URL as the prefix for /assets/i18n/
 */
export function remoteTranslateLoaderFactory(
  http: HttpClient,
  document: Document
): TranslateLoader {
  const url = `http://localhost:4201/i18n/`;
  return new TranslateHttpLoader(http, url, '.json');
}

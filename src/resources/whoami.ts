// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Whoami extends APIResource {
  retrieve(options?: RequestOptions): APIPromise<WhoamiRetrieveResponse> {
    return this._client.get('/whoami', options);
  }
}

export interface WhoamiRetrieveResponse {
  id: string;

  createdAt: string;

  email: string;

  name: string;

  plan: string;
}

export declare namespace Whoami {
  export { type WhoamiRetrieveResponse as WhoamiRetrieveResponse };
}

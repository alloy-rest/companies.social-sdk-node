// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CompaniesSocial } from '../client';

export abstract class APIResource {
  protected _client: CompaniesSocial;

  constructor(client: CompaniesSocial) {
    this._client = client;
  }
}

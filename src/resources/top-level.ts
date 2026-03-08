// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface LookupCompanyResponse {
  cached: boolean;

  companyId: string;

  domain: string;

  scrapedAt: string;

  socials: { [key: string]: string };
}

export interface LookupCompanyParams {
  /**
   * Identifier type
   */
  idType: 'domain' | 'twitter' | 'linkedin' | 'github' | 'tiktok' | 'instagram' | 'facebook' | 'youtube';
}

export declare namespace TopLevel {
  export {
    type LookupCompanyResponse as LookupCompanyResponse,
    type LookupCompanyParams as LookupCompanyParams,
  };
}

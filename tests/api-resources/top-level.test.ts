// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CompaniesSocial from 'companies.social-sdk-node';

const client = new CompaniesSocial({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Mock server tests are disabled
  test.skip('lookupCompany: only required params', async () => {
    const responsePromise = client.lookupCompany('stripe.com', { idType: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lookupCompany: required and optional params', async () => {
    const response = await client.lookupCompany('stripe.com', { idType: 'domain' });
  });
});

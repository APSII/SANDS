const assert = require('assert');
const app = require('../../src/app');

describe('\'doador\' service', () => {
  it('registered the service', () => {
    const service = app.service('doador');

    assert.ok(service, 'Registered the service');
  });
});

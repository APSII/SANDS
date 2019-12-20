const assert = require('assert');
const app = require('../../src/app');

describe('\'doacao\' service', () => {
  it('registered the service', () => {
    const service = app.service('doacao');

    assert.ok(service, 'Registered the service');
  });
});

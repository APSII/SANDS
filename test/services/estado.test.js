const assert = require('assert');
const app = require('../../src/app');

describe('\'estado\' service', () => {
  it('registered the service', () => {
    const service = app.service('estado');

    assert.ok(service, 'Registered the service');
  });
});

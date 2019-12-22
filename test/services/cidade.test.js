const assert = require('assert');
const app = require('../../src/app');

describe('\'cidade\' service', () => {
  it('registered the service', () => {
    const service = app.service('cidade');

    assert.ok(service, 'Registered the service');
  });
});

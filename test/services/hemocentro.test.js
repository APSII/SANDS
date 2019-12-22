const assert = require('assert');
const app = require('../../src/app');

describe('\'hemocentro\' service', () => {
  it('registered the service', () => {
    const service = app.service('hemocentro');

    assert.ok(service, 'Registered the service');
  });
});

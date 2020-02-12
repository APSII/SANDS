const useSortQuery = require('./hooks/use-sort-query');
const useLikeQuery = require('./hooks/use-like-query');
const useIncludeQuery = require('./hooks/use-include-query');
// Application hooks that run for every service

module.exports = {
  before: {
    all: [],
    find: [useSortQuery(), useLikeQuery(), useIncludeQuery()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

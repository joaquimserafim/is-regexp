'use strict';

var test      = require('tape');
var isRegExp  = require('./');

test('should test valids RegExp Objects', function(assert) {
  assert.deepEqual(isRegExp(/[a-z]/), true);
  assert.deepEqual(isRegExp(new RegExp('^a')), true);
  assert.end();
});

test('should test invalids RegExp Objects', function(assert) {
  /*jshint -W009 */
  ['1', '', 1, null, undefined, [], false, Object, new Array()]
    .forEach(function(value) {
      assert.deepEqual(isRegExp(value), false);
    });
  assert.end();
});
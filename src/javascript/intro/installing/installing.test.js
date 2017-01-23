import Test from 'ava';
import * as Assignment from './';

Test.only('ava **/*.test.js', t => {
  t.truthy(Assignment.name);
});

Test.only('ava **/*.test.js', t => {
  t.truthy(Assignment.email);
});

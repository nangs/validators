import test from 'ava';
import sut from './index';

test('valid JSON', t => t.true(sut('{}')));

test('invalid JSON', t => t.false(sut('{a: }')));

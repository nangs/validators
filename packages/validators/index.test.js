import test from 'ava';
import sut from './index';

test('Has members', t => t.true(Object.keys(sut).length > 0));
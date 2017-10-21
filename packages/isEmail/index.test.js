import test from 'ava';
import sut from './index';

test('valid email', t => t.true(sut('public@quillio.io')));

test('invalid JSON', t => t.false(sut('public.io')));

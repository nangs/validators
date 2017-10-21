import test from 'ava';
import sut from './index';

test('valid url', t => t.true(sut('https://www.quillio.io')));

test('invalid protocol', t => t.false(sut('badprotocol://quillio.io')));

test('missing protocol', t => t.false(sut('quillio.io')));

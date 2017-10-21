import test from 'ava';
import sut from './index';

test('valid url', t => t.true(sut('https://www.quillio.io')));

test('invalid protocol', t => t.false(sut('badprotocol://quillio.io')));

test('custom protocol', t => t.true(sut('ftp://quillio.io', { protocols: ['ftp'] })));

test('missing protocol', t => t.false(sut('quillio.io')));

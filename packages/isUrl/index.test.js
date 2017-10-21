import test from 'ava';
import sut from './index';

test('valid url', t => t.true(sut('https://www.quillio.io')));

test('query param', t => t.true(sut('https://www.quillio.io?query=awesome')));

test('many query params', t => t.true(sut('https://www.quillio.io?query=awesome&page=1')));

test('invalid protocol', t => t.false(sut('badprotocol://quillio.io')));

test('custom protocol', t => t.true(sut('ftp://quillio.io', { protocols: ['ftp'] })));

test('missing protocol', t => t.false(sut('quillio.io')));

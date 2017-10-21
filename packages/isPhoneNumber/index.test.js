import test from 'ava';
import sut from './index';

test('NANP phone number', t => t.true(sut('7065776256')));

test('NANP phone number leading 1', t => t.true(sut('17065776256')));

test('NANP phone number leading +1', t => t.true(sut('+17065776256')));

test('invalid phone number', t => t.false(sut('55555555')));

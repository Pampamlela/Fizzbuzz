const test = require('node:test');
const assert = require('node:assert');
const { fizzbuzz } = require('./fizzbuzz.js')

test('fizzbuzz(3)', (t) => {
  assert.strictEqual(fizzbuzz(3), "Fizz");
});

test('fizzbuzz(6)', (t) => {
    assert.strictEqual(fizzbuzz(6), "Fizz");
});

test('fizzbuzz(5)', (t) => {
    assert.strictEqual(fizzbuzz(5), "Buzz");
});

test('fizzbuzz(20)', (t) => {
    assert.strictEqual(fizzbuzz(20), "Buzz");
});

test('fizzbuzz(7)', (t) => {
    assert.strictEqual(fizzbuzz(7), 7);
});

test('fizzbuzz(15)', (t) => {
    assert.strictEqual(fizzbuzz(15), "Fizzbuzz");
});
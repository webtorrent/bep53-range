const test = require('tape')
const bep53Range = require('..')

test('parse: a number', t => {
  const range = bep53Range.parse(['1'])

  t.deepEqual(range, [1])
  t.end()
})

test('parse: one range', t => {
  const range = bep53Range.parse(['1-3'])

  t.deepEqual(range, [1, 2, 3])
  t.end()
})

test('parse: multiple ranges', t => {
  const range = bep53Range.parse(['1-3', '11-13'])

  t.deepEqual(range, [1, 2, 3, 11, 12, 13])
  t.end()
})

test('parse: multiple ranges between a number', t => {
  const range = bep53Range.parse(['1-3', '6', '11-13'])

  t.deepEqual(range, [1, 2, 3, 6, 11, 12, 13])
  t.end()
})

import sliceNumber from '../../utils/sliceNumber';

test('slices the given number through 2 number to the right of dot', () => expect(sliceNumber(133.781281278)).toStrictEqual(133.78));

test('returns the given number as-is if it does not have a dot', () => expect(sliceNumber(13378)).toStrictEqual(13378));

test('handles strings containing numeric values as well', () => expect(sliceNumber('133.789876')).toStrictEqual(133.78));

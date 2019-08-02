import dotifyNumber from '../../utils/dotifyNumber';

test('adds a dot (.) after every third digit from right to left', () => expect(dotifyNumber(13000000)).toStrictEqual('13.000.000'));

test('does not add a dot to the beginning of number, even if it is a third', () => expect(dotifyNumber(133000000)).toStrictEqual('133.000.000'));

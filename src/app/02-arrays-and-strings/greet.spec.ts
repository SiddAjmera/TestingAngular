import { greet } from './greet';

describe('greet function', () => {

    it('should return a string with the name passed to it as an argument', () => {

        let input = 'Siddharth';

        let result = greet(input);

        expect(result).toContain(input);

    });

});
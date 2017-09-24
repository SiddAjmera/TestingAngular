import { compute } from './compute';

describe('compute function', () => {
    it('should return 0 when input is less than 0', () => {

        let input = -1;

        let result = compute(input);

        expect(result).toEqual(0);

    });

    it('should return 1 if the input is equal to 0', () => {
        
        let input = 0;
        
        let result = compute(input);

        expect(result).toEqual(1);

    });

    it('should return the number incremented by 1 if the number is greater than 0', () => {

        let input = 1;
        
        let result = compute(input);

        expect(result).toEqual(2);

    });

});
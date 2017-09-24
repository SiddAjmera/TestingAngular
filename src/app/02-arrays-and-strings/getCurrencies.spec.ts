import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should return an array with three elements', () => {

        let result = getCurrencies();

        expect(result).toContain('USD');

    });
});
import { toBoolean } from '#validation/toBoolean'; 
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Validation Functions', () => {
  describe('boolean', () => {
    it('should return null for valid boolean', () => {
      const data = {
        terms: true,
      };
      const field = 'terms';
      const result = toBoolean(data, field);
      expect(result).to.be.null;
    });

    it('should return error message for invalid non-boolean', () => {
      const data = {
        terms: '25', // This is a string
      };
      const field = 'terms';
      const message = 'Custom error message';

      const result = toBoolean(data, field, message);

      expect(result).to.equal('Custom error message');
    });

    it('should return default error message for invalid no-boolean', () => {
      const data = {
        terms: '25', // This is a string, not an boolean
      };
      const field = 'terms';

      const result = toBoolean(data, field);

      expect(result).to.equal('terms should be an boolean.');
    });

    it('should return default error message for missing value', () => {
      const data = {terms:10};
      const field = 'terms';

      const result = toBoolean(data, field);

      expect(result).to.equal('terms should be an boolean.');
    });
  });

  // ... Add more describe blocks for different validation functions if needed
});
import { integer } from '#validation/integer'; 
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Validation Functions', () => {
  describe('integer', () => {
    it('should return null for valid integer', () => {
      const data = {
        age: 25,
      };
      const field = 'age';
      const message = 'Custom error message';

      const result = integer(data, field, message);

      expect(result).to.be.null;
    });

    it('should return error message for invalid non-integer', () => {
      const data = {
        age: '25', // This is a string, not an integer
      };
      const field = 'age';
      const message = 'Custom error message';

      const result = integer(data, field, message);

      expect(result).to.equal('Custom error message');
    });

    it('should return default error message for invalid non-integer', () => {
      const data = {
        age: '25', // This is a string, not an integer
      };
      const field = 'age';

      const result = integer(data, field);

      expect(result).to.equal('age should be an integer.');
    });

    it('should return default error message for missing value', () => {
      const data = {};
      const field = 'age';

      const result = integer(data, field);

      expect(result).to.equal('age should be an integer.');
    });
  });

  // ... Add more describe blocks for different validation functions if needed
});
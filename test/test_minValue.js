import { describe, it } from 'mocha';
import { expect } from 'chai';
import { min } from '#validation/minValue';

describe('Validation Functions', () => {
  describe('min', () => {
    it('should return an error message when field value is too short', () => {
      const data = {
        field: 'abc',
      };
      const minLength = 5;
      const message = 'Custom error message';
      
      const result = min(data, 'field', minLength, message);

      expect(result).to.equal('Custom error message');
    });

    it('should return null when field value is long enough', () => {
      const data = {
        field: 'abcdef',
      };
      const minLength = 5;
      const message = 'Custom error message';
      
      const result = min(data, 'field', minLength, message);

      expect(result).to.be.null;
    });

    it('should return the default error message when field value is too short', () => {
      const data = {
        field: 'abc',
      };
      const minLength = 5;
      
      const result = min(data, 'field', minLength);

      expect(result).to.equal('field should have at least 5 characters.');
    });

    it('should return null when field value is long enough', () => {
      const data = {
        field: 'abcdef',
      };
      const minLength = 5;
      
      const result = min(data, 'field', minLength);

      expect(result).to.be.null;
    });
  });

  // ... Add more describe blocks for different validation functions if needed
});

import { required } from '#validation/required';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Validation Functions', () => {
  describe('required', () => {
    it('should return an error message if the field is empty', () => {
      const data = { field: '' };
      const field = 'field';
      const message = 'Custom error message';

      const result = required(data, field, message);

      expect(result).to.equal(message);
    });

    it('should return an error message if the field is undefined', () => {
      const data = { };
      const field = 'field';
      const message = 'Custom error message';

      const result = required(data, field, message);

      expect(result).to.equal(message);
    });

    it('should return an error message if the field is null', () => {
      const data = { field: null };
      const field = 'field';
      const message = 'Custom error message';

      const result = required(data, field, message);

      expect(result).to.equal(message);
    });

    it('should return null if the field has a value', () => {
      const data = { field: 'some value' };
      const field = 'field';
      const message = 'Custom error message';

      const result = required(data, field, message);

      expect(result).to.be.null;
    });

    it('should return default error message if no custom message provided', () => {
      const data = { field: '' };
      const field = 'field';

      const result = required(data, field);

      expect(result).to.equal('field is required.');
    });
  });

  // ... Add more describe blocks for different validation functions if needed
});

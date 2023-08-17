import { email } from '#validation/email'; 
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Validation Functions', () => {
  describe('email', () => {
    it('should return null if the email is valid', () => {
      const data = { email: 'test@example.com' };
      const field = 'email';
      const message = 'Custom error message'; 

      const result = email(data, field, message);

      expect(result).to.be.null;
    });

    it('should return an error message if the email is invalid', () => {
      const data = { email: 'invalid-email' };
      const field = 'email';
      const message = 'Custom error message'; 

      const result = email(data, field, message);

      expect(result).to.equal('Custom error message' || 'email should be a valid email.');
    });

    it('should return a default error message if no custom message is provided', () => {
      const data = { email: 'invalid-email' };
      const field = 'email';

      const result = email(data, field);

      expect(result).to.equal('email should be a valid email.');
    });

    it('should return null if the field is not present in the data', () => {
      const data = { otherField: 'test' };
      const field = 'email';

      const result = email(data, field);

      expect(result).to.be.null;
    });
  });

  // ... Add more describe blocks for other validation functions if needed
});
import { max } from '#validation/maxValue';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('max', () => {
  it('should return null if the field length is within the maximum limit', () => {
    const data = {
      fieldName: '12345',
    };
    const field = 'fieldName';
    const maxLength = 10;

    const result = max(data, field, maxLength, 'Custom error message');

    expect(result).to.be.null;
  });

  it('should return an error message if the field length exceeds the maximum limit', () => {
    const data = {
      fieldName: '12345678901', // Exceeds the maxLength of 10
    };
    const field = 'fieldName';
    const maxLength = 10;

    const result = max(data, field, maxLength);

    expect(result).to.equal('fieldName should have at most 10 characters.');
  });

  it('should return a custom error message if provided and the field length exceeds the maximum limit', () => {
    const data = {
      fieldName: '12345678901', // Exceeds the maxLength of 10
    };
    const field = 'fieldName';
    const maxLength = 10;

    const result = max(data, field, maxLength, 'Custom error message');

    expect(result).to.equal('Custom error message');
  });

  it('should return null if the field value is not a string', () => {
    const data = {
      fieldName: 12345,
    };
    const field = 'fieldName';
    const maxLength = 10;

    const result = max(data, field, maxLength);

    expect(result).to.be.null;
  });
});

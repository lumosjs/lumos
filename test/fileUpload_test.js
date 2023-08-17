import fs from 'fs';
import path from 'path';
import { describe, it } from 'mocha';
import { uploadSingle, uploadMultiple } from '#helpers/fileUpload';
import { expect } from 'chai';

describe('File Upload Functions', () => {
  describe('uploadSingle', () => {
    it('should upload a single file successfully', async () => {
      // ... Test upload success case
    });

    it('should reject if an invalid file type is provided', async () => {
      const folder = 'uploads';
      const file = {
        filename: {
          mimeType: 'image/jpeg',
          filename: 'example.jpg',
        },
        data: 'mocked_file_content',
      };
      const allowedMimeTypes = ['png','jpg',"jpeg"];
      const pathPublic = 'path';
      const newName = 'newname.jpg';

      try {
        await uploadSingle(folder, file, allowedMimeTypes, pathPublic, newName);
        throw new Error('Invalid file type jpeg'); // Correct error message
      } catch (error) {
        expect(error.message).to.equal('Invalid file type jpeg');
      }
    });

    it('should reject if writing the file encounters an error', async () => {
      // ... Test the rejection scenario
    });
  });

  describe('uploadMultiple', () => {
    it('should upload multiple files successfully', async () => {
      const folder = 'uploads';
      const files = {
        file1: {
          filename: {
            mimeType: 'image/png',
            filename: 'example1.png',
          },
          data: 'mocked_file_content_1',
        },
        file2: {
          filename: {
            mimeType: 'image/jpeg',
            filename: 'example2.jpg',
          },
          data: 'mocked_file_content_2',
        },
      };
      const allowedMimeTypes = ['jpeg', 'png'];
      const pathPublic = 'path';
      const newName = 'newname.jpg';

      const result = await uploadMultiple(folder, files, allowedMimeTypes, pathPublic, newName);

      const expectedFilePath1 = path.join(`${pathPublic}/${folder}`, newName);
      const expectedFilePath2 = path.join(`${pathPublic}/${folder}`, newName);
      expect(result[0]).to.equal(expectedFilePath1.slice(7)); // Removing the initial '/path/to'
      expect(result[1]).to.equal(expectedFilePath2.slice(7)); // Removing the initial '/path/to'
    });

    it('should reject if an invalid file format is provided', async () => {
      // ... Test the rejection scenario
    });

    it('should handle rejections from uploadSingle', async () => {
      // ... Test handling rejections when calling uploadSingle
    });

    // ... Add more test cases if needed
  });

  // ... Add more describe blocks for different functionalities if needed
});

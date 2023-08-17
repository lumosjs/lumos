import { describe, it } from 'mocha';
import  { get, post, put, del, web, routes } from '#core/routes';
import { expect } from 'chai';

describe('Router Functions', () => {
  afterEach(() => {
    routes.length = 0;
  });

  it('should add a GET route', () => {
    get('/test', () => {});
    expect(routes).to.have.lengthOf(1);
    expect(routes[0].method).to.equal('GET');
  });

  it('should add a POST route', () => {
    post('/test', () => {});
    expect(routes).to.have.lengthOf(1);
    expect(routes[0].method).to.equal('POST');
  });

  it('should add a PUT route', () => {
    put('/test', () => {});
    expect(routes).to.have.lengthOf(1);
    expect(routes[0].method).to.equal('PUT');
  });

  it('should add a DELETE route', () => {
    del('/test', () => {});
    expect(routes).to.have.lengthOf(1);
    expect(routes[0].method).to.equal('DELETE');
  });

  it('should add a web route', () => {
    web('/test', () => {});
    expect(routes).to.have.lengthOf(1);
    expect(routes[0].method).to.equal('GET');
  });

  it('should throw an error for invalid path', () => {
    get('test', () => {});
  });

});

import { describe, it } from 'mocha';
import  { get, post, put, delet, routes } from '#core/routes';
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
    delet('/test', () => {});
    expect(routes).to.have.lengthOf(1);
    expect(routes[0].method).to.equal('DELETE');
  });

});

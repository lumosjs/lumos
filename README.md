[![Lumosjs Logo](
https://avatars.githubusercontent.com/u/141889927?s=400&u=7ad81f0c3c875eed69386759ea2f1e11f285e9e6&v=4)](https://lumosjs.vercel.com/)

Fast, minimalist web framework for [Node.js](http://nodejs.org).

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

  ```js
export default function apiRoutes(app) {

    //global prefix is /api/*

   app.get("/",function(req,res)=>{
        res.send("Hello world");
    });

}
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the

```console
$ npm install -g lumos-cli
```

Follow [our installing guide](https://lumosjs.vercel.com/installing.html)
for more information.

## Features

* __Data Validation__ : Perform input validation in controllers using specified fields and messages.
* __Routing__ : Easily create routes using controllers, defining APIs and routes for views.
* __Controllers and Services__ : Separate data handling and business logic, facilitating maintenance and scalability.
* __Middlewares__ : Apply intermediate logic to routes with custom middlewares.
* __Data Models__ : Model your data structure using models defined in the 'model' directory.
* __Production Error Logs__ : Have detailed logs to ease debugging in production.
* __File Upload__ : Support for individual and multiple file uploads.
* __Authentication and Authorization__ : Implement authentication and authorization using middlewares and sessions for securely managing user state.
* __CORS Handling__ : Control which domains can access your API.
* __Rate Limiting__ : Safeguard your server against DDoS attacks with rate limiting.

## Docs & Community

  * [GitHub Organization](https://github.com/lumosjs) for Official Middleware & Modules
  * https://github.com/lumosjs/lumos/wiki
  * [Google Group](https://groups.google.com/g/lumosjs) for discussion

 ## Philosophy

  The Lumosjs philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, websites, hybrids, or public
  HTTP APIs.

  Lumosjs does not force you to use any specific ORM.
  you can quickly craft your perfect framework.

  
## Example
  ```js
  //simple upload file

  import  upload   from "#utils/uploadFile"
  
  export default function apiRoutes(app){
  /*
    upload(folder,fileName).type(extensionRequired).single() or use mult to more files.
  */

  app.post("/upload",async (req,res)=>{
		const singleFileUpload = await upload("user/file", req.body.files.file).type('png',"mp3","pdf").single();
	 });
  }
  ```


### Running Tests

To run the test suite, first install the dependencies, then run `npm test`:

```console
$ npm install mocha chai
$ npm test
```


## Contributing

The Lumosjs project welcomes all constructive contributions. Contributions take many forms,
from code for bug fixes and enhancements, to additions and fixes to documentation, additional
tests, triaging incoming pull requests and issues, and more, 
I will soon add typescript to the project, for now I will improve and add some new features!

See the [Contributing Guide](CONTRIBUTING_EN.md) for more technical details on contributing.


## People

The original author of Lumosjs is [Vicente Sombo](https://github.com/sombo20)

## License

  [MIT](LICENSE)

[npm-downloads-image]: https://badgen.net/npm/dm/lumos-cli
[npm-downloads-url]: https://npmcharts.com/compare/lumos-cli?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/lumos-cli
[npm-install-size-url]: https://packagephobia.com/result?p=lumos-cli
[npm-url]: https://npmjs.org/package/lumos-cli
[npm-version-image]: https://badgen.net/npm/v/lumos-cli

# dwnld-attr-polyfill

Will polyfill the functionality of the download attribute:

```html
                          ↓ ↓ ↓
<a href="/somefile.pdf" download>
    Download this (don't navigate to it)
</a>
```

in IE11, [which doesn't support it](https://www.caniuse.com/#feat=download). This polyfill is **small** and works **fast**.

## Usage

Install using [npm](https://docs.npmjs.com/about-npm/):

```sh
npm i -S dwnld-attr-polyfill
```
And include it in your JavaScript somewhere:

```sh
import 'dwnld-attr-polyfill';
```

This polyfill automatically does its work. It will:

1. Detect if polyfilling is needed (and otherwise won't do anything)
2. Detect on click if it's on a link with the `download` attribute
3. Prevent their default behaviour
4. Via an `XMLHttpRequest`, request the resource and create a blob of data
5. Instruct IE11 to download that data using `msSaveBlob`

### Why didn't you just use the world 'download' in the package name?
Because npm doesn't allow that:

```
$ npm publish
npm ERR! 400 Bad Request - PUT https://registry.npmjs.org/download-attr-polyfill - That word is not allowed. Please contact support (support@npmjs.com) if you believe you received this in error.
```

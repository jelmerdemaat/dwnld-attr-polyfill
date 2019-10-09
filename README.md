# download-attribute-polyfill

Will polyfill the functionality of:

```html
                          ↓ ↓ ↓
<a href="/somefile.pdf" download>
    Download this (don't navigate to it)
</a>
```

in [browsers that don't support it](https://www.caniuse.com/#feat=download). At this time, that's mainly IE. This polyfill is **small** and works **fast**.

## Usage

Install using [npm](https://docs.npmjs.com/about-npm/):

```sh
npm i -S download-attribute-polyfill
```
And include it in your JavaScript somewhere:

```sh
import 'download-attribute-polyfill';
```

This polyfill automatically does its work. It will:

1. Detect if polyfilling is needed (and otherwise won't do anything)
2. Detect any links using the `download` attribute
3. Prevent their default behaviour
4. Via an XMLHttpRequest, create a blob of data
5. Instruct the browser to download that data

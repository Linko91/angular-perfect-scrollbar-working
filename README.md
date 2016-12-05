# angular-perfect-scrollbar-working
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Bower version](https://img.shields.io/badge/bower-0.1.0-blue.svg)


This is a small directive to allow the use of [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar) in angular.

## Quick start

### Several quick start options are available:

* [Download the latest release](https://github.com/Linko91/angular-perfect-scrollbar-working/archive/0.1.0.zip).
* Clone the repo: `git clone https://github.com/Linko91/angular-perfect-scrollbar-working.git`.
* Install with [Bower](http://bower.io): `bower install angular-perfect-scrollbar-working --save`.
* Download [minified](https://raw.githubusercontent.com/Linko91/angular-perfect-scrollbar-working/master/angular-perfect-scrollbar.min.js).
* Download [un-minified](https://raw.githubusercontent.com/Linko91/angular-perfect-scrollbar-working/master/angular-perfect-scrollbar.js).
* Standalone: `curl -O https://raw.githubusercontent.com/Linko91/angular-perfect-scrollbar-working/master/angular-perfect-scrollbar.min.js`.



## Usage :
 - Add `angular-perfect-scrollbar.js` to your code:
```html
<link rel="stylesheet" href="bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css" />
<script src="bower_components/perfect-scrollbar/js/perfect-scrollbar.min.js"></script>
<script src="angular.js"></script>
<script src="bower_components/angular-perfect-scrollbar-working/angular-perfect-scrollbar.js"></script>
```
 - Include some css for your scrollable content:
```css
.scroller {
    white-space: pre-line;
    height: 500px;
    overflow-y: hidden;
    position: relative;
}
```
 - Add a dependency to the `perfect_scrollbar` module in your application.
```js
angular.module('MyApp', ['perfect_scrollbar']);
```
Use it wherever you want:

```html 
<div perfect-scrollbar class="scroller">
  // your content
</div>
```

Further installation and usage hints can be found here:

https://github.com/noraesae/perfect-scrollbar

You can find an example in the *examples* folder in this repository.  Much respect to [Hyunje Alex Jun](https://github.com/noraesae) for his great scrollbar library.



## License
angular-perfect-scrollbar-working is released under the [MIT license](https://raw.githubusercontent.com/Linko91/angular-perfect-scrollbar-working/master/LICENSE). Have at it.
* * *

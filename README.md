[![Build Status](https://travis-ci.org/orizens/angular2to1.svg)](https://travis-ci.org/orizens/angular2to1)

# angular2to1 Project
An angular 2 to angular 1 Shim - Write angular 2 components with angular 1.  
As explained in my [blog post: Write Angular 2 Components In Angular 1](http://orizens.com/wp/topics/write-angular-2-components-in-angular-1/).

## Install
via npm:  
```npm i angular2to1 --save-dev```  

## Usage  
in browser, include the ```dist/angular2to1.min.js``` (or ```./index.js```)  

## Why
An angular 2 to angular 1 function.
This function should provide **ES5** syntax of angular v2 to be used with angular 1
reasons:  
1. You want to learn angular 2 syntax  
2. You still want to develop with angular 1  
3. You want to ease migration (when possible) of angular 1 to 2  

## Examples
This code eventually defines an angular.js version 1.x module, directive and controller:  
```javascript
var myApp = ng.core
	.Component({
		selector: 'my-app'
		providers: [ 
			'core.services'
		],
		bindings: {
			title: '@'
		}
	})
	.View({
		template: '<div> {{ myApp.title }} </div>'
	})
	.Class({
		constructor: 'MyAppCtrl'
	})
```  
Consume the new module in your and include it:
```javascript
angular.module('app', [
	'my-app'
])
// or if you're using commonjs
angular.module('app', [
	require('my-app').name
])
```
Simply, use the module in html:  
```html
<my-app title="my-player"></my-app>
```
## API  
1. Component - a component is an element by default  
  1. selector - of element - ```<my-app></my-app>``` - defined as ```'my-app'```  
  1. selector - of attribute - ```<div tooltip></div>``` - defined as ```'[tooltip]'```   
1. "controllerAs" inside the template follows the camel-case module name. i.e. - if **selector: 'my-app'**, then, the controllerAs is: **myApp** (as in angular 2 Beta). You can pass a custom **controllerAs** alias in the Component's options.

## Install
use npm:  
```
npm install angular2to1 --save
```
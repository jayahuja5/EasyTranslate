<h1 align="center">
  <br>
   <img src="https://raw.githubusercontent.com/jayahuja5/EasyTranslate/master/EasyTranslate.svg" alt="EasyTranslate" title="Logo EasyTranslate" />
  <br>
  EasyTranslate
</h1>
<p>
  The EasyTranslate Plugin provides to translate your text into predifined Language it will works on predefined tag which will translate text for your Dynamic or Static websites. It also have an feature which will save your selected language in local storage to retrive selected language any time when you open.
</p>
<br>

## Getting Started
<b>Step 1:</b><br>
Download JQuery file from https://jquery.com/download and add to your project inside <script> tag.<br><br>
<b>Step 2:</b><br>
Download EasyTranslate.js and Language.js from above and add to your project inside <script> tag.<br><br>
<b>Step 3:</b><br>
Include it on your js file or in your html page.<br>
```js
$(document).ready(function(){
  $.fn.EasyTranslate({
    language: "en"              // Default Language
  });
});
```
## Example
<b>HTML File</b><br>
```html
<script src="jquery-2.0.3.min.js"></script>     // JQuery File
<script src="language.js"></script>             // File where store your text in different languages inside array
<script src="EasyTranslate.js"></script>        // EasyTranslate Plugin
<script>
$(document).ready(function(){
  $.fn.EasyTranslate({
    language: "en"                              // Default Language
  });
});
</script>
```
## Defining Languages
>You also have to be insert text in English<br>
  
<b>Step 1:</b><br>
```js
function getLangResources(){
  // Put step 2 here
}
```
<b>Step 2:</b><br>
```js
var en = new Array();         // Defining English as en inside array
  en['hi'] = "Hi";            // 'hi' is caption and "Hi" is text, caption is same for all languages
  en['hello'] = "Hello";      // 'hello' is caption and "Hello" is text, caption is same for all languages
  
var fr = new Array();         // Defining French as fr inside array
  fr['hi'] = "Salut";         // 'hi' is caption and "Salut" is text, caption is same for all languages
  fr['hello'] = "Bonjour";    // 'hello' is caption and "Bonjour" is text, caption is same for all languages
  
// Put step 3 here
```
<b>Step 3:</b><br>
```js
var resources = new Array();    // Defining all the array inside one array as 'resources'
  resources['fr'] = fr;         // Same as above variable
  resources['en'] = en;         // Same as above variable
  
  return resources;             // Sending all the data in EasyTranslate plugin
// Code Ended
```
<b>Final Code</b><br>
```js
function getLangResources(){
 
 var en = new Array();
  en['hi'] = "Hi";
  en['hello'] = "Hello";
  
var fr = new Array();
  fr['hi'] = "Salut";
  fr['hello'] = "Bonjour";

var resources = new Array();
  resources['fr'] = fr;
  resources['en'] = en;
  
  return resources;
}
```

## Attributes
<b>`et-text`</b>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside tags.<br>
<b>`et-placeholder`</b>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside placeholder attr in input box or textarea.<br>
<b>`et-submit`</b>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside value attr in submit button.<br>
<b>`et-value`</b>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside value attr in option inside select tag.<br>
<b>`et-title`</b>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside title attr for showing title.<br>
<i>Something missing feel free to raise issue!</i>
  
## Implementing in HTML File
><b>Note:</b> Blank your 'tag' because it loads text from Language.js

* For putting 'text' inside &nbsp;<b>`div`&nbsp;&nbsp;`span`&nbsp;&nbsp;`label`&nbsp;&nbsp;`button`&nbsp;&nbsp;`a href`</b>&nbsp;&nbsp;&&nbsp;&nbsp;<b>`so on`</b>
```html
<div class="your_class" et-text="hi"></div>   // 'hi' is caption which is same for all languages
<button et-text="button"></button>            // Button
<a href="hi" et-text="hi"></a>                // Anchor
<span et-text="hello"></span>                 // Span
// Also other tag where you can want to insert text inside that 'tag'
```
* For Putting 'text' inside <b>`insert`</b>&nbsp;&nbsp;for&nbsp;&nbsp;<b>`placeholder`</b>&nbsp;&nbsp;or&nbsp;&nbsp;<b>`value`</b>
```html
<input type="text" et-placeholder="placeholder">    // 'et-placeholder' will insert translated text inside placeholder attr for input box
<input type="submit" et-submit="submit">            // 'et-submit' will insert translated text inside value attr for submit button
<input list="browsers">
<datalist id="browsers">
  <option et-value="hi">                            // 'et-value' will insert translated text inside value attr for option tag
  <option et-value="hello">                         // 'et-value' will insert translated text inside value attr for option tag
</datalist>
```
* For Putting 'title' for <b>`img`&nbsp;&nbsp;or&nbsp;&nbsp;`other tag`</b>
```html
<img src="rhino.png" et-title="rhino">              // 'et-title' will insert translated text inside title attr
```
## Demo
  * **Demo&nbsp;&nbsp;-**&nbsp;&nbsp;Comming Soon...
## Report Issues, Errors or Modification
Feel free to raise issues, error or modification related to the EasyTranslate plugin.<br>
<br><br><br>
<p align="center"><b>Thanks for using ❤ from India.</b></p>

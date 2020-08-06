<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/jayahuja5/EasyTranslate/d7b5f65459ba4893b302cbc7ab2b591d3518396c/img/EasyTranslate.svg" alt="EasyTranslate" width="200">
  <br>
  EasyTranslate
  <br>
</h1>
The EasyTranslate Plugin provides to translate your text into predifined Language it will works on predefined tag which will Translate for your Dynamic or Static websites.<br>
## Getting Started<br>
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
## Example<br>
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
## Defining Languages<br>
<b><i>You also have to be insert text in English</i></b><br>
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
## Attributes<br>
<b><code>et-text</code>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside tags.<br>
<b><code>et-placeholder</code>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside placeholder attr in input box or textarea.<br>
<b><code>et-submit</code>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside value attr in submit button.<br>
<b><code>et-value</code>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside value attr in option inside select tag.<br>
<b><code>et-title</code>&nbsp;&nbsp;-&nbsp;&nbsp;For inserting translated text inside title attr for showing title.<br>
<i>Something missing feel free to raise issue!</i>
## Implementing in HTML File<br>
<code><b>Note:</b> Blank your 'tag' because it loads text from Language.js.</code><br><br>
For putting 'text' inside &nbsp;<b><code>div</code>&nbsp;&nbsp;<code>span</code>&nbsp;&nbsp;<code>label</code>&nbsp;&nbsp;<code>button</code>&nbsp;&nbsp;<code>a href</code>&nbsp;&nbsp;&&nbsp;&nbsp;<code>so on</code></b>
```html
<div class="your_class" et-text="hi"></div>   // 'hi' is caption which is same for all languages
<button et-text="button"></button>            // Button
<a href="hi" et-text="hi"></a>                // Anchor
<span et-text="hello"></span>                 // Span
// Also other tag where you can want to insert text inside that 'tag'
```
For Putting 'text' inside <b><code>insert</code>&nbsp;&nbsp;for&nbsp;&nbsp;<code>placeholder</code>&nbsp;&nbsp;or&nbsp;&nbsp;<code>value</code>
```html
<input type="text" et-placeholder="placeholder">    // 'et-placeholder' will insert translated text inside placeholder attr for input box
<input type="submit" et-submit="submit">            // 'et-submit' will insert translated text inside value attr for submit button
<input list="browsers">
<datalist id="browsers">
  <option et-value="hi">                            // 'et-value' will insert translated text inside value attr for option tag
  <option et-value="hello">                         // 'et-value' will insert translated text inside value attr for option tag
</datalist>
```
For Putting 'title' for <b><code>img</code>&nbsp;&nbsp;or&nbsp;&nbsp;<code>other tag</code></b>
```html
<img src="rhino.png" et-title="rhino">              // 'et-title' will insert translated text inside title attr
```
## Report Issues, Errors or Modification<br>
Feel free to raise issues, error or modification related to the EasyTranslate plugin<br>
<b>Thanks for using ❤ from India.</b>


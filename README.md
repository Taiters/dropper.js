# _Dropper.js_

_A super fun happy jQuery drag and drop upload plugin_

## Usage: $('foo').dropper(url [, options])

### url
Type: _String_
The url to send the data to

### options
Type: _PlainObject_
Supports the following options:

#### method
Type: _String_
The method to use when sending the data
_Default: 'POST'_

#### progress
Type: _Function_
Function to set as the listener for the XMLHttpRequest _progress_ event.
_Default: null_

#### start
Type: _Function_
Function to set as the listener for the XMLHttpRequest _loadstart_ event.
_Default: null_

#### success
Type: _Function_
Function to set as the listener for the jQuery.ajax _success_ event.
_Default: null_

### Code Sample

```javascript
$('#dropper').dropper('/url/to/upload',{
	success: function(data) {
		alert("upload complete!");
	},
	progress: function(prcnt) {
		console.log("uploaded "+prcnt+"%");
	}
});
```

## License
_The MIT License (MIT)_ 

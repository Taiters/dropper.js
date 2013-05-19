# _Dropper.js_

_A super fun happy jQuery drag and drop upload plugin_

## Usage

'''javascript

$('#dropper').dropper('/url/to/upload',{
	success: function(data) {
		alert("upload complete!");
	},
	progress: function(prcnt) {
		console.log("uploaded "+prcnt+"%");
	}
});

'''

## License
_The MIT License (MIT)_ 

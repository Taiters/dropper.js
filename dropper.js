/* ===================================================
 * dropper.js v0.1
 * https://github.com/Taiters/dropper.js
 * ===================================================
 * The MIT License (MIT) 
 *
 * Copyright (c) 2013 Daniel Tait
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * ===================================================*/

$(function(){

	jQuery.event.props.push('dataTransfer');

	$.fn.dropper = function(url,options) {

		var settings = $.extend({
			method:   'POST',
			progress: null,
			start:    null,
			success:  null,
		},options);

		var dropper = $(this);

		dropper.bind('drop',function(e){

			e.originalEvent.preventDefault();
			var fileReader = new FileReader();

			fileReader.onload = (function(file) {

				var xhr = $.ajaxSettings.xhr();

				if(typeof(settings.progress) == typeof(Function)) {
					xhr.upload.addEventListener('progress',function(e){
						if(e.lengthComputable) {
							var prcnt = Math.floor((e.loaded / e.total)*100);
							settings.progress(prcnt);
						}
					});
				}
				if(typeof(settings.start) == typeof(Function)) {
					xhrequest.upload.addEventListener("loadstart",function(evt){
						settings.start();
					});
				}

				var provider = function() {
					return xhr;
				}

				$.ajax(url,{
					type:    settings.method,
					data:    {image: this.result},
					xhr:     provider,
					success: settings.success
				});


			});



			var files = e.dataTransfer.files;

			if(files.length > 1){
				return;
			}

			$.each(files, function(index, file){
				fileReader.readAsDataURL(file);
			});
		});
	}


}(jQuery));
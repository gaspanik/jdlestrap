init:
	mkdir -p src/css dist/fonts dist/css src/js dist/js
	cp -r bower/jbootstrap/less/* src/css/
	cp bower/holderjs/holder.js dist/js/
	cp bower/jbootstrap/dist/js/bootstrap.min.js dist/js
	cp bower/jbootstrap/js/*.js src/js
	cp bower/jquery/dist/jquery.min.js dist/js
	cp bower/jbootstrap/fonts/* dist/fonts
	cp bower/bootstrap-accessibility-plugin/plugins/css/bootstrap-accessibility.css dist/css
	cp bower/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.min.js dist/js
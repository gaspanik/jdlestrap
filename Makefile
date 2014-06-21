init:
	mkdir -p src/css dist/fonts dist/css dist/js
	cp -r bower/jbootstrap/less/* src/css/
	cp bower/jbootstrap/dist/js/bootstrap.min.js dist/js
	cp bower/jquery/dist/jquery.min.js dist/js
	cp bower/jbootstrap/fonts/* dist/fonts
	cp bower/bootstrap-accessibility-plugin/plugins/css/bootstrap-accessibility.css dist/css
	cp bower/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.min.js dist/js
init:
	mkdir -p src/css dist/fonts dist/css src/js dist/js
	cp -r bower/bootstrap3-mod/less/* src/css/
	cp bower/holderjs/holder.js dist/js/
	cp bower/bootstrap-autohidingnavbar/dist/jquery.bootstrap-autohidingnavbar.min.js dist/js/
	cp bower/bootstrap3-mod/dist/js/bootstrap.min.js dist/js
	cp bower/bootstrap3-mod/js/*.js src/js
	cp bower/jquery/dist/jquery.min.js dist/js
	cp bower/bootstrap3-mod/fonts/* dist/fonts
	cp bower/bootstrap-accessibility-plugin/plugins/css/bootstrap-accessibility.css dist/css
	cp bower/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.min.js dist/js

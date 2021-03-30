<h1>OptimizedHTML 5</h1>
<p>Lightweight startup HTML5 template, based on Gulp.</p>

<p><strong>OptimizedHTML 5</strong> - lightweight startup HTML5 template with <strong>Gulp 4</strong>, <strong>Sass/Scss/Less/Stylus</strong>, <strong>Browsersync</strong>, <strong>Autoprefixer</strong>, <strong>Uglify-ES</strong>, <strong>Clean-CSS</strong>, <strong>Rsync</strong>, <strong>CSS Reboot</strong> (Bootstrap reboot). It uses best practices for <strong>responsive images</strong> optimizing and contains a <strong>.htaccess</strong> file for resources caching (images, fonts, HTML, CSS, JS and other content types).</p>

<h2>How to use OptimizedHTML 5</h2>

<pre>git clone https://github.com/agragregra/oh5</pre>

<ol>
	<li>Clone or <a href="https://github.com/agragregra/OptimizedHTML-5/archive/master.zip">Download</a> <strong>OptimizedHTML 5</strong> from GitHub</li>
	<li>Install Node Modules: <strong>npm i</strong></li>
	<li>Run: <strong>gulp</strong></li>
</ol>

<h2>Main Gulp tasks:</h2>

<ul>
	<li><strong title="gulp task"><em>gulp</em></strong>: run default gulp task (images, styles, scripts, browsersync, startwatch)</li>
	<li><strong title="cleanimg task"><em>cleanimg</em></strong>: Clean all compressed images</li>
	<li><strong title="styles, scripts, images, assets tasks"><em>styles, scripts, images, assets</em></strong>: build assets (css, js, images or all)</li>
	<li><strong title="rsync task"><em>rsync</em></strong>: project deployment via <strong>RSYNC</strong></li>
</ul>

<h2>Basic rules</h2>

<ol>
	<li>All custom <strong title="scripts task"><em>scripts</em></strong> located in <strong>app/js/app.js</strong></li>
	<li>All custom <strong title="styles task"><em>styles</em></strong> located in <strong>app/{preprocessor}/main.sass|scss|less|styl</strong></li>
	<li>All preprocessor <strong>configs</strong> placed in <strong>app/{preprocessor}/_config.sass|scss|less|styl</strong></li>
	<li>You can <strong>delete folders</strong> of other preprocessors before work.</li>
	<li>All <strong>images</strong> sources placed in <strong>app/images/src/</strong> folder.</li>
</ol>

<ol>
	<li>Long Preprocessor compile: Disable the "safe write" option in PHPStorm settings.</li>
</ol>

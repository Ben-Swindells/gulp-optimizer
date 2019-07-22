# Gulp Optimizer

Description:

Tool to optimise scripts and run scss live to a css file.

<h2>Documentation</h2>

<h3>Github setup</h3>

1: git push --set-upstream origin gulp-branch-1 //Switch to your branch.<br>
2: git add, followed by the file name you want to add etc. git add myfile.txt<br>
3: git commit -m followed by update description "" // git commit -m "Updating this branch"<br>

<h3>How to use Gulp:</h3>


1: Commandline into your choosen folder destination<br>
2: Download the latest files from this Git using a new branch.<br>
3: SASS files can be created an used in the components/css/scss folder.<br>
4: CSS files are located in components/css.<br>

<h3>Current Gulp Functions: </h3>
<p> Important note: Make sure to be in the correct file path location, e.g where your gulp files are stored.

- Gulp Watch(gulp watch): Watches for SCSS changes, write your SCSS in components/css/scss/styles.scss, saving this file will cause it to update the CSS file located here, components/css/styles.css SASS will minify this CSS by default, this can be updated in the Gulp.js file.

- Gulp Image Minified(gulp imageMin): Place any amount of images into the components/image folder, run gulp imageMin to execute the image minfied command.

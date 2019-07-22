# Gulp Optimizer

Description:

Tool to optimise scripts and run scss live to a css file.

<h2>Documentation</h2>

<h3>Github setup</h3>

1: Chose where you want to install this git hub file, etc local desktop or documents. Commandline into this destination and type git clone git@github.com:Ben-Swindells/gulp-optimizer.git<br>
2: git push --set-upstream origin gulp-branch-1 //Switch to your branch.<br>
3: git add, followed by the file name you want to add etc. git add myfile.txt<br>
4: git commit -m followed by update description "" // git commit -m "Updating this branch"<br>

<h3>How to use Gulp:</h3>


1: Commandline into your choosen folder destination<br>
2: Download the latest files from this Git using a new branch.<br>
3: SASS files can be created an used in the components/css/scss folder.<br>
4: CSS files are located in components/css.<br>

<h3>Current Gulp Functions: </h3>
<p> Important note: Make sure to be in the correct file path location, e.g where your gulp files are stored.

-Gulp Cleaner(gulp clean): Uncompresses css files, add in the compressed css into components/scss/styles.scss and run gulp clean, the uncompressed css will then be placed into components/css-cleaned.styles.scss, copy this and place it back into your scss file. 

- Gulp Watch(gulp watch): Watches for SCSS changes, write your SCSS in components/css/scss/styles.scss, saving this file will cause it to update the CSS file located here, components/css/styles.css SASS will minify this CSS by default, this can be updated in the Gulp.js file.

- Gulp Image Minified(gulp imageMin): Place any amount of images into the components/image folder, run gulp imageMin to execute the image minfied command.

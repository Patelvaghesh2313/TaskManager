# TaskManager
This project developed using only HTML,CSS and Java Script

After the anticipated relief of deploying a day’s worth of hard work, the push failed log showed up. So what did we do wrong this time? What is a buildpack? Let me simplify things for you.

Buildpacks are composed of a set of scripts depending on the programming language used. These scripts are responsible for transforming the deployed code before being executed on the dyno manager. (The scripts gather the dependencies, which then outputs generated code. When pushing to Heroku, the code is received by the slug compiler which transforms the repo into a slug and off to a dyno for execution).

Listed on the Heroku reference page, the supported buildpacks offered are: Ruby, Node.js, Clojure, Python, Java, Gradle, Grails, Scala, Play, PHP, Go. These buildpacks are searched within the deployed repo based on the specified language used. However, the buildpacks are not offered for the typical HTML, CSS, Javascript languages. This explains the error you received: “no default language could be detected for this app”.

Don’t worry, it’s an easy fix for your portfolio or personal blog. A small little trick to get Heroku to recognize the files of your static website is to trick it into being a PHP app. Yup, PHP.

This is based on the assumption that your Heroku application is all set up and the final remaining step is the deployment process. Here’s the simple but yet not going to argue with you solution:

1.Head to the root directory of your project that contains index.html (the main HTML page).
2.In this directory, run touch composer.json to create a file: composer.json.
3.Within the file, add the following line: {}
4.In the same directory, run touch index.php to create a file: index.php.
5.Within the file, add the following line: <?php include_once("index.html"); ?>
6.Now, commit and push these two new files to your repository. You can also use the Heroku command git push heroku master . Wait for the automatic deployment to work its magic.


..And tada! Now you have access to your Heroku website up and running on your-website.herokuapp.com

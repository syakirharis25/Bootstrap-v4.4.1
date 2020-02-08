# Bootstrap-v4.4.1
My works related to Bootstrap v4.4.1

## Table of Contents
1. [Introduction.](#introduction)
2. [Official references websites.](#references)
3. [Bootstrap starter index.html page.](#starter)
4. [Using Bootstrap in offline mode.](#offline)
5. [The spacing classes in Bootstrap v4.4.1 .](#spacing)
6. [GitHub notes.](#github)

<a name="introduction"></a>
## 1. Introduction.
<img src="bootstrap.png" height="150"> 
Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery. <br /><br />

Bootstrap, originally named Twitter Blueprint, was developed by Mark Otto and Jacob Thornton at Twitter as a framework to encourage consistency across internal tools. Before Bootstrap, various libraries were used for interface development, which led to inconsistencies and a high maintenance burden.

After a few months of development by a small group, many developers at Twitter began to contribute to the project as a part of Hack Week, a hackathon-style week for the Twitter development team. It was renamed from Twitter Blueprint to Bootstrap, and released as an open source project on August 19, 2011. It has continued to be maintained by Mark Otto, Jacob Thornton, and a small group of core developers, as well as a large community of contributors.

The most prominent components of Bootstrap are its layout components, as they affect an entire web page. The basic layout component is called "Container", as every other element in the page is placed in it. Developers can choose between a fixed-width container and a fluid-width container.

<a name="references"></a>
## 2. Official references websites.
Official Bootstrap website : https://getbootstrap.com <br />
Official Bootstrap documentation : https://getbootstrap.com/docs/4.4/getting-started/introduction/ <br />

**_Bootstrap related online open sources_** <br />
JQuery CDN : https://code.jquery.com <br />
jQuery 3.x minified : https://code.jquery.com/jquery-3.4.1.min.js <br />
lorem ipsum : https://loremipsum.io <br />
Font Awesome : https://fontawesome.com <br />
Google Fonts : https://fonts.google.com <br />

**_Bootstrap text editor_** <br />
Visual Studio Code by Microsoft : https://code.visualstudio.com <br />

W3Schools Online Web Tutorials : https://www.w3schools.com <br />
Stack Overflow is a question and answer site : https://stackoverflow.com <br />

**_Bootstrap documentation by getbootstrap.com_** <br />
Bootstrap Grid system by getbootstrap.com : https://getbootstrap.com/docs/4.4/layout/grid/ <br />
Bootstrap Text by getbootstrap.com : https://getbootstrap.com/docs/4.4/utilities/text/ <br />
Bootstrap Navbar by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/navbar/ <br />
Bootstrap Utilities for layout by getbootstrap.com : https://getbootstrap.com/docs/4.4/layout/utilities-for-layout/#margin-and-padding
<br />
Bootstrap Spacing by getbootstrap.com : https://getbootstrap.com/docs/4.4/utilities/spacing/ <br />
Bootstrap Sizing by getbootstrap.com : https://getbootstrap.com/docs/4.4/utilities/sizing/ <br />
Bootstrap Text by getbootstrap.com : https://getbootstrap.com/docs/4.0/utilities/text/ <br />
Bootstrap Flex by getbootstrap.com : https://getbootstrap.com/docs/4.4/utilities/flex/ <br />
Bootstrap Cards by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/card/ <br />
Bootstrap Shadows by getbootstrap.com : https://getbootstrap.com/docs/4.4/utilities/shadows/ <br />
Bootstrap Colors by getbootstrap.com : https://getbootstrap.com/docs/4.4/utilities/colors/ <br />
Bootstrap Display property by getbootstrap.com : https://getbootstrap.com/docs/4.4/utilities/display/ <br />
Bootstrap Forms property by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/forms/ <br />
Bootstrap Input group property by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/input-group/ <br />
Bootstrap Borders property by getbootstrap.com : https://getbootstrap.com/docs/4.4/utilities/borders/ <br />
Bootstrap Popovers by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/popovers/ <br />
Bootstrap Alerts by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/alerts/ <br />
Bootstrap Theming Bootstrap by getbootstrap.com : https://getbootstrap.com/docs/4.4/getting-started/theming/ <br />
Bootstrap Overview by getbootstrap.com : https://getbootstrap.com/docs/4.4/layout/overview/#containers <br />
Bootstrap Typography by getbootstrap.com : https://getbootstrap.com/docs/4.4/content/typography/ <br />
Bootstrap Migrating to v4 by getbootstrap.com : https://getbootstrap.com/docs/4.4/migration/ <br />
Bootstrap Blockquotes by getbootstrap.com : https://getbootstrap.com/docs/4.4/content/typography/#blockquotes <br />
Bootstrap Jumbotron by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/jumbotron/ <br />
Bootstrap Buttons by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/buttons/ <br />
Bootstrap Images by getbootstrap.com : https://getbootstrap.com/docs/4.4/content/images/ <br />
Bootstrap Collapse by getbootstrap.com : https://getbootstrap.com/docs/4.4/components/collapse/ <br />

**_Bootstrap documentation by w3schools.com_** <br />
Bootstrap Grid System by w3schools.com : https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp <br />

**_Bootstrap questions and answers by Stack Overflow_** <br />
Container-fluid vs .container : https://stackoverflow.com/questions/22262311/container-fluid-vs-container <br />
find/generate npmjs integrity for bootstrap 4.3.1 : https://stackoverflow.com/questions/54994508/find-generate-npmjs-integrity-for-bootstrap-4-3-1 <br />
Automatically add copyright banner in VS Code : https://stackoverflow.com/questions/38823319/automatically-add-copyright-banner-in-vs-code <br />

**_Bootstrap related articles_**
The spacing classes in Bootstrap 4 : https://www.jquery-az.com/bootstrap-margin-padding-classes-spacing-explained-5-examples/ <br />
Sizing Icons by Font Awesome : https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons <br />

**_Bootstrap developers_** <br />
Bootstrap was developed by Mark Otto : https://github.com/mdo, https://twitter.com/mdo, https://markdotto.com <br />
Bootstrap was developed by Jacob Thornton : https://github.com/fat <br />

<a name="starter"></a>
## 3. Bootstrap starter index.html page.
To use Bootstrap, first copy and paste the following codes into `index.html' file.
```
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
```
Use the codes with extension .min.js from official jQuery website to be able to use animations : https://code.jquery.com/jquery-3.4.1.min.js

Refer to the official Bootstrap documentation for better explanation: https://getbootstrap.com/docs/4.4/getting-started/introduction/

Make sure you have internet connection to use the above Bootstrap codes.

<a name="offline"></a>
## 4. Using Bootstrap in offline mode.
To use Bootstrap in offline mode, go to https://getbootstrap.com/docs/4.4/getting-started/download/, under the heading `Compiled CSS and JS` click the **[ Download ]** button with purple line border under the text `This doesn’t include documentation, source files, or any optional JavaScript dependencies (jQuery and Popper.js).`

After downloaded the `bootstrap-4.4.1-dist.zip` file, extract it by right hand click your mouse and then click `Extract All...`, then hit **[ Enter ]** on your keyboard. 

Find the location of the extracted `bootstrap.min.css` file inside the extracted folder under `bootstrap-4.4.1-dist\bootstrap-4.4.1-dist\css`, drag and drop the `bootstrap.min.css` file into your active browser like Google Chrome or Mozilla Firefox browser. Copy and paste address shown on the address bar on your browser into your text file editor like Microsoft Visual Code. 

Find the location of the extracted `bootstrap.min.js` file inside the extracted folder under `bootstrap-4.4.1-dist\bootstrap-4.4.1-dist\js`, drag and drop the `bootstrap.min.js` file into your active browser like Google Chrome or Mozilla Firefox browser. Copy and paste address shown on the address bar on your browser into your text file editor like Microsoft Visual Code.

Example of the project HTML file with working offline mode Bootstrap.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" type="text/css" href="file:///C:/Users/username/Desktop/bootstrap-4.4.1-dist/bootstrap-4.4.1-dist/css/bootstrap.min.css">
    <script type="text/javascript" src="file:///C:/Users/username/Desktop/bootstrap-4.4.1-dist/bootstrap-4.4.1-dist/js/bootstrap.min.js"></script>

    <title>Offline Bootstrap mode</title>
</head>
<body>
    
</body>
</html>
```

Then refresh your bootstrap file on your browser to see whether it is working or not. Refer to `How to Use Bootstrap Offline or Locally - Step By Step` YouTube video made by **_Reecry_**; https://www.youtube.com/watch?v=60F6paVpZCs for better explanation.

<a name="spacing"></a>
## 5. The spacing classes in Bootstrap v4.4.1 .
The Bootstrap 4 has built-in utility responsive classes for margin and padding that you may use easily in various elements to manage the spacing.<br />

The classes are named using the format; <br />

For extra small devices i.e. xs: <br />
`{property}{sides}-{size/length}` <br />

For other devices/viewports [small (sm), medium (md), large (lg), and extra large (xl) ]: <br />
`{property}{sides}-{breakpoint}-{size/length} for sm, md, lg, and xl` <br /><br />

Where property is one of: <br />
```
m - for classes that set margin
p - for classes that set padding
```

Where sides is one of: <br />
```
t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
l - for classes that set margin-left or padding-left
r - for classes that set margin-right or padding-right
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element
```

For example; <br />
**pt-4** means {**p**adding}{**t**op}**-**{size-of-**4**} <br />

**pr-3** means {**p**adding}{**r**ight}**-**{size-of-**3**} <br />

**mb-5** means {**m**argin}{**b**ottom}**-**{size-of-**5**} <br />

<img src="x-y axis.jpg" height="200"> <br />

**px-5** means {**p**adding}{positive(+)**x**-axis}**-**{length-of-**5**} <br />

**py-2** means {**p**adding}{positive(+)**y**-axis}**-**{length-of-**2**} <br />

For better understanding what is x-axis and y-axis, refer to this YouTube video with the title `What are the X and Y axes?` made by **_Don't Memorise_** : https://www.youtube.com/watch?v=Tfm49rgvvDU

The size can be from value 0 to 5 and auto. <br />

<a name="github"></a>
## 6. GitHub notes.
Clone the current GitHub remote repository contents into local machine.
```
$ git clone https://github.com/syakirharis25/Bootstrap-v4.4.1.git
$ cd Bootstrap-v4.4.1/
$ git remote -v
$ git status
```

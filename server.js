var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title: "  Article One | Harsha's IMAD V1 App",
    heading: "Article One",
    date: "April 19th (Night) 2017",
    content: `<p>
                    This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph.This is a sample paragraph.
                </p>
                 <p>
                    This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph.This is a sample paragraph.
                </p>
                 <p>
                    This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph.This is a sample paragraph.
                </p>
                 <p>
                    This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph. This is a sample paragraph.This is a sample paragraph.
                </p>`,
};

function createHtml(data){
    
var title = articleOne.title;
var heading = articleOne.heading;
var date = articleOne.date;
var content = articleOne.content;

var htmlTemplate = `<html>
    <head>
        <title>
          ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="main">
            <div>
                <a href="/">Home</a> 
                <a href="http://achocolatebear.imad.hasura-app.io/article-two">Article Two</a> 
                <a href="http://achocolatebear.imad.hasura-app.io/article-three">Article Three</a>
            </div>
            <hr/>
            <div>
                <h2>
                  ${heading}
                </h2>
            </div>
            <div>
                ${date};
            </div>
            <div>
                ${content};
            </div>
        </div>
    </body>
</html>`;
return createHtml;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res){
    res.send(createHtml(articleOne));
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

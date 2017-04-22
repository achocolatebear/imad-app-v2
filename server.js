var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    articleOne:{
                title: "  Article One | Harsha's IMAD V1 App",
                heading: "Article One",
                date: "April 21st (Night) 2017",
                content: `<p>
                                This is a sample paragraph for the 1st article.This is a sample paragraph for the 1st  article.This is a sample paragraph for the 1st article.This is a sample paragraph for the 1st article.
                            </p>
                            
                            <p>
                                This is a sample paragraph for the 1st article.This is a sample paragraph for the 1st  article.This is a sample paragraph for the 1st article.This is a sample paragraph for the 1st article.
                            </p>
                            
                            <p>
                                This is a sample paragraph for the 1st article.This is a sample paragraph for the 1st  article.This is a sample paragraph for the 1st article.This is a sample paragraph for the 1st article.
                            </p>
                            
                             <p>
                                    This is a sample paragraph for the 1st article.This is a sample paragraph for the 1st  article.This is a sample paragraph for the 1st article.This is a sample paragraph for the 1st article.
                            </p>`,
},
    articleTwo:{
                title: "  Article Two | Harsha's IMAD V1 App",
                heading: "Article Two",
                date: "April 21st (Night) 2017",
                content: `<p>
                                This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd  article.This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.
                            </p>
                            
                            <p>
                                This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.
                            </p>
                            
                            <p>
                                This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.
                            </p>
                            
                             <p>
                                    This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.This is a sample paragraph for the 2nd article.
                            </p>`,
},
    articleThree:{
                    title: "Article Three | Harsha's IMAD V1 App",
                    heading: "Article Three",
                    date: "April 21st (Night) 2017",
                    content: `<p>
                                This is a sample paragraph for the 3rd article.This is a sample paragraph for the 3rd  article.This is a sample paragraph for the 3rd article.This is a sample paragraph for the 3rd article.
                            </p>
                            
                            <p>
                               This is a sample paragraph for the 3rd article.This is a sample paragraph for the 3rd  article.This is a sample paragraph for the 3rd article.This is a sample paragraph for the 3rd article.
                            </p>
                            
                            <p>
                                This is a sample paragraph for the 3rd article.This is a sample paragraph for the 3rd  article.This is a sample paragraph for the 3rd article.This is a sample paragraph for the 3rd article.
                            </p>
                            
                             <p>
                                    This is a sample paragraph for the 3rd article.This is a sample paragraph for the 3rd  article.This is a sample paragraph for the 3rd article.This is a sample paragraph for the 3rd article.
                            </p>`,},
};

function createTemplate (data){
    
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate = `
<html>
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
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res){
    res.send(createTemplate(articles.articleOne));
});

app.get('/article-two', function (req, res){
    res.send(createTemplate(articles.articleTwo));
});

app.get('/article-three', function (req, res){
    res.send(createTemplate(articles.articleThree));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

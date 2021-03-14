

// Patches
const {inject, errorHandler} = require('express-custom-error');
inject(); // Patch express in order to use async / await syntax

// Require Dependencies

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const axios = require('axios').default;

const contacts = require('./coordinates')


const logger = require('./util/logger');

const webscrape = require('./scraper.js')

// Load .env Enviroment Variables to process.env

const  PORT  = 8080;

// Instantiate an Express Application
const app = express();


// Configure Express App Instance
app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));

// Configure custom logger middleware
app.use(logger.dev, logger.combined);

app.use(cookieParser());
app.use(cors());
app.use(helmet());

// news api
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('00027e5c10e346fe9d4e3f9070d8dcfc');

// This middleware adds the json header to every response
app.use('*', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

// Assign Routes
let pageNumb = 1
app.get('/api/news', (req, res, next) => {
    let today = new Date()
    let yesterday = new Date(today)

    yesterday.setDate(yesterday.getDate() - 1)

    today = today.toISOString()
    yesterday = yesterday.toISOString()
    console.log(today)
    console.log(yesterday)

    newsapi.v2.everything({
        q: ['climate', 'climate', 'clima', 'Klima', 'klimat', 'климат'],
        // last 24 hours
        from: yesterday,
        to: today,
        page: pageNumb
    }).then(response => {
        let numbResults = response.totalResults
        let newResponse = response.articles.map(article => {
            // include source information in response

            // try and webscrape
            let location = webscrape(article)
            let sourceInfo = {}
            let coordinates = {}
            if (location === "" || !location) {
                if (article.source.id) {
                    for (let i = 0; i < sources.length; i++) {
                        if (sources[i].id === article.source.id) {
                            sourceInfo = sources[i];
                            break;
                        }
                    }
                } else {
                    for (let i = 0; i < sources.length; i++) {
                        if (sources[i].name === article.source.name) {
                            sourceInfo = sources[i];
                            break;
                        }
                    }
                }

                if (sourceInfo.country) {
                    // console.log(sourceInfo.country)
                    coordinates = contacts.get(sourceInfo.country.toUpperCase().trim())
                }
            } else {
                coordinates = contacts.get(location.toUpperCase().trim())
            }
            
            
            
            return {
                ...article,
                sourceInfo,
                coordinates
            }
        })

        res.json(newResponse)

    })
    // res.json({response:'hi'})
});


// Handle errors
app.use(errorHandler());

// Handle not valid route
app.use('*', (req, res) => {
    res
    .status(404)
    .json( {status: false, message: 'Endpoint Not Found'} );
})

// get info of sources

let sources = {}

for (let i = 0; i < 5; i++) {
    newsapi.v2.sources({
        page: i
    }).then(response => {
        sources = response.sources
    });
}


// Open Server on selected Port
app.listen(
    PORT,
    () => {
        console.info('Server listening on port ', PORT)
    }
);
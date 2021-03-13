// export { default } from './lib';

// export * from './lib';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import axios from 'axios'

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import defaultMarkers from "./markers";

import './index.css'
import FeedItem from './feedItem.js'


function markerTooltipRenderer(marker) {
  return `TITLE: ${marker.title}`;
}

const options = {
  markerTooltipRenderer
};

function App() {
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {

    processResults([{"source":{"id":null,"name":"Entrepreneur"},"author":"Stephanie Cole","title":"With COVID-19 Fears Receding, It's Time to Reclaim Travel Budgets and Reconnect With Customers","description":"After more than a year of quarantine, don't underestimate the pent-up demand for face-to-face contact.","url":"https://www.entrepreneur.com/article/366755","urlToImage":"https://assets.entrepreneur.com/content/3x2/2000/1615323976-GettyImages-200412533-001.jpg","publishedAt":"2021-03-12T20:55:00Z","content":"March\r\n12, 2021\r\n5 min read\r\nOpinions expressed by Entrepreneur contributors are their own.\r\nThe time is right for smart businesses to plan for life after quarantine. COVID-19 vaccination rates are u… [+4695 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"9gag.com"},"author":null,"title":"Climate: oh you're fighting me?","description":"Tags: Shinjir\\u014d Koizumi399 points, 41 comments.","url":"http://9gag.com/gag/aAb34Kp","urlToImage":null,"publishedAt":"2021-03-12T16:00:04Z","content":null,"sourceInfo":{},"coordinates":{}},{"source":{"id":"cbc-news","name":"CBC News"},"author":"CBC News","title":"COVID-19 pandemic adds urgency to fight against climate change: Mark Carney","description":"Former Bank of Canada governor Mark Carney says the world's response to the COVID-19 pandemic could build momentum for a collaborative approach to the other global crisis: climate change.","url":"https://www.cbc.ca/news/politics/mark-carney-pandemic-climate-change-1.5946117","urlToImage":"https://i.cbc.ca/1.5923095.1614016406!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1203645177.jpg","publishedAt":"2021-03-13T02:00:00Z","content":"Former Bank of Canada governor Mark Carney says the world's response to the COVID-19 pandemic could build momentum for a collaborative approach to the other great global crisis: climate change.\r\nIn a… [+3251 chars]","sourceInfo":{"id":"cbc-news","name":"CBC News","description":"CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.","url":"http://www.cbc.ca/news","category":"general","language":"en","country":"ca"},"coordinates":{"coordinates":"56.130366,-106.346771"}},{"source":{"id":"bloomberg","name":"Bloomberg"},"author":"William Horobin, Bryce Baschuk","title":"Australia's Cormann Beats Malmstrom in Race to Lead OECD","description":"","url":"https://www.bloomberg.com/news/articles/2021-03-12/cormann-wins-race-to-lead-oecd-sydney-morning-herald-reports","urlToImage":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iH78EbtWfIQQ/v0/1200x799.jpg","publishedAt":"2021-03-12T16:36:19Z","content":"Australias Mathias Cormann was selected on Friday to head the Organization for Economic Cooperation and Development, defeating Swedens Cecilia Malmstrom in a closely contested race, according to a pe… [+2402 chars]","sourceInfo":{"id":"bloomberg","name":"Bloomberg","description":"Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.","url":"http://www.bloomberg.com","category":"business","language":"en","country":"us"},"coordinates":{"coordinates":"37.09024,-95.712891"}},{"source":{"id":null,"name":"Fitch Ratings"},"author":null,"title":"US Climate Policy May Alter Some US Corporate Business Models - Fitch Ratings","description":"US Climate Policy May Alter Some US Corporate Business Models  Fitch Ratings","url":"https://www.fitchratings.com/research/corporate-finance/us-climate-policy-may-alter-some-us-corporate-business-models-12-03-2021","urlToImage":null,"publishedAt":"2021-03-12T16:56:00Z","content":"","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Scientific American"},"author":"Shannon Dosemagen","title":"Science Needs to Face Up to Its Racist History","description":"Elevating science’s role in policymaking is important; so is reckoning with how science has been used to harm marginalized communities\n\n-- Read more on ScientificAmerican.com","url":"https://www.scientificamerican.com/article/science-needs-to-face-up-to-its-racist-history/","urlToImage":"https://static.scientificamerican.com/sciam/cache/file/6E29CD8E-5389-4C01-BB242A2197D3FCC1.jpg","publishedAt":"2021-03-12T16:00:00Z","content":"An early indication that the Biden administration would seek to elevate the importance of science in decision-making was theannouncement that the director of the White House Office of Science and Tec… [+4850 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Dezeen"},"author":"India Block","title":"Eight homes, suits and kits for surviving an apocalypse","description":"From a wearable survival kit to an underground bunker, here are eight homes, suits and kits that architects and designers have created to prepare for an apocalypse. Read more","url":"http://www.dezeen.com/2021/03/12/apocalypse-architecture-design-roundup/","urlToImage":"https://static.dezeen.com/uploads/2021/03/apocalypse-roundup-end-of-the-world-house-bunker-kit-dezeen-hero-1024x576.jpg","publishedAt":"2021-03-12T18:00:12Z","content":"From a wearable survival kit to an underground bunker, here are eight homes, suits and kits that architects and designers have created to prepare for an apocalypse.\r\nCyberhouse by Modern House Archit… [+4069 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Forbes"},"author":"Robert Kidd, Senior Contributor, \n Robert Kidd, Senior Contributor\n https://www.forbes.com/sites/robertkidd/","title":"Irish Soccer Club Bohemians Partners With Grammy Nominee Fontaines D.C. To Highlight Homelessness","description":"From designing shirts welcoming refugees and celebrating Bob Marley to appointing a climate justice officer, the club has a history of supporting progressive social causes.","url":"https://www.forbes.com/sites/robertkidd/2021/03/13/irish-soccer-club-bohemians-partners-with-grammy-nominee-fontaines-dc-to-highlight-homelessness/","urlToImage":"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F604b367f43add200edb701dd%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1253%26cropY1%3D36%26cropY2%3D741","publishedAt":"2021-03-13T08:00:00Z","content":"Irish soccer club Bohemian FC has teamed up with band Fontaines D.C. and homeless nonprofit Focus ... [+] Ireland for its new jersey.\r\nabutchershook.com/Bohemian FC\r\nBohemian Football Club wears its … [+4947 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Forbes"},"author":"Mindy Lubber, Contributor, \n Mindy Lubber, Contributor\n https://www.forbes.com/sites/mindylubber/","title":"What’s Next For U.S. Banks And Global Investors Following Their Net-Zero Commitments?","description":"If there’s anything I’ve learned from decades of work to build awareness of – and action to tackle – the economic risks posed by climate change, it is this: market signals matter.","url":"https://www.forbes.com/sites/mindylubber/2021/03/12/whats-next-for-us-banks-and-global-investors-following-their-net-zero-commitments/","urlToImage":"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F604b91765645af67d2b701dd%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1920%26cropY1%3D140%26cropY2%3D1040","publishedAt":"2021-03-12T16:08:13Z","content":"Banks and investors must actualize their net-zero commitments by 2030 or sooner\r\nSiarhei - stock.adobe.com\r\nIf theres anything Ive learned from decades of work to build awareness of and action to tac… [+5123 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Telegraph.co.uk"},"author":"Sarah Newey","title":"Backlash as UK cuts funding for global health research in half","description":"The UKRI, which funds research into climate change, superbugs and poverty, will have a £120m hole in its budget in the next financial year","url":"https://www.telegraph.co.uk/global-health/science-and-disease/backlash-uk-cuts-funding-global-health-research-half/","urlToImage":"https://www.telegraph.co.uk/content/dam/global-health/2021/03/12/TELEMMGLPICT000194974296_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg?impolicy=logo-overlay","publishedAt":"2021-03-12T16:55:59Z","content":"The UK is under fire from doctors and academics after slashing funding for global health research in the latest round of aid budget cuts. \r\nOn Thursday, UK Research and Innovation (UKRI), an agency w… [+2378 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":"bbc-news","name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Mathias Cormann set to head OECD despite climate record","description":"However critics say former finance minister Mathias Cormann has an 'atrocious' record on climate change.","url":"https://www.bbc.co.uk/news/business-56381202","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/1550A/production/_117560378_gettyimages-956271916.jpg","publishedAt":"2021-03-12T20:15:07Z","content":"By Jonathan Josephs &amp; Natalie ShermanBusiness reporters, BBC News\r\nimage copyrightGetty Images\r\nimage captionCritics say Mr Cormann has an \"atrocious\" record on climate change\r\nMathias Cormann, A… [+4091 chars]","sourceInfo":{"id":"bbc-news","name":"BBC News","description":"Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.","url":"http://www.bbc.co.uk/news","category":"general","language":"en","country":"gb"},"coordinates":{"coordinates":"55.378051,-3.435973"}},{"source":{"id":null,"name":"Fitch Ratings"},"author":null,"title":"Climate Legislation to Hasten Business Model Changes, Affecting Credit Profiles Over Time (Executive Orders Are Neutral to Auto, Energy and Utility Credit Ratings) - Fitch Ratings","description":"Climate Legislation to Hasten Business Model Changes, Affecting Credit Profiles Over Time (Executive Orders Are Neutral to Auto, Energy and Utility Credit Ratings)  Fitch Ratings","url":"https://www.fitchratings.com/research/corporate-finance/climate-legislation-to-hasten-business-model-changes-affecting-credit-profiles-over-time-executive-orders-are-neutral-to-auto-energy-utility-credit-ratings-12-03-2021","urlToImage":null,"publishedAt":"2021-03-12T16:56:00Z","content":"","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Juancole.com"},"author":"The Conversation","title":"Defeating Climate Denialism by showing People how they will Win by Greening Society","description":"By Sarah Sharma and Matthew Hoffmann | - Canada and the United States are suddenly steeped in policy proposals to aggressively cut carbon emissions. In the face of a climate emergency and on the heels of numerous climate disasters, this is welcome news indeed…","url":"https://www.juancole.com/2021/03/defeating-denialism-greening.html","urlToImage":"https://www.juancole.com/images/2021/03/defeating-climate-denialism-by-s.jpg","publishedAt":"2021-03-13T05:01:30Z","content":"By Sarah Sharma and Matthew Hoffmann | –\r\nCanada and the United States are suddenly steeped in policy proposals to aggressively cut carbon emissions. In the face of a climate emergency and on the hee… [+6750 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":"associated-press","name":"Associated Press"},"author":"Shawn Marsh","title":"Philly to dim lights to make it safer for birds in flight...","description":"The lights of Philadelphia might not shine as bright in the coming weeks as a coalition in the City of Brotherly Love tries to prevent millions of migrating birds that pass through twice a year...","url":"https://apnews.com/article/science-philadelphia-climate-change-birds-ae7b8dc52663edd720596445f76aa105","urlToImage":"https://storage.googleapis.com/afs-prod/media/ad6654e1ae064aab8e4a4c1b2f9f2890/3000.jpeg","publishedAt":"2021-03-12T21:34:38Z","content":"The lights of Philadelphia might not shine as bright in the coming weeks as a coalition in the City of Brotherly Love tries to prevent millions of migrating birds that pass through twice a year from … [+3887 chars]","sourceInfo":{"id":"associated-press","name":"Associated Press","description":"The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.","url":"https://apnews.com/","category":"general","language":"en","country":"us"},"coordinates":{"coordinates":"37.09024,-95.712891"}},{"source":{"id":null,"name":"Rolling Stone"},"author":"Angie Martoccio","title":"Hear Samantha Ronson’s Remix of Toots and the Maytals’ ‘Freedom Train’","description":"Original track is off Grammy-nominated album Got to Be Tough","url":"https://www.rollingstone.com/music/music-news/samantha-ronson-toots-and-maytals-remix-1140621/","urlToImage":"https://www.rollingstone.com/wp-content/uploads/2021/03/SRTOOTS.jpg","publishedAt":"2021-03-12T17:30:17Z","content":"Ahead of the Grammys on Sunday, Samantha Ronson has remixed Toots and the Maytals’ “Freedom Train” from their nominated album Got to be Tough.\r\nRonson enlisted Pete Nappi for the project, releasing t… [+785 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Insightsonindia.com"},"author":"Insights Editor","title":"The governments should upkeep and encourage alternate fuel technologies to aid climate action commitments but should also spur the economy and ensure environmental sustainability at the same time. Comment.","description":"6. The governments should upkeep and encourage alternate fuel technologies to aid climate action commitments but should also spur the economy and ensure environmental sustainability at the same time. Comment. (250 words) Reference: The Hindu\nThe post The gove…","url":"https://www.insightsonindia.com/2021/03/13/the-governments-should-upkeep-and-encourage-alternate-fuel-technologies-to-aid-climate-action-commitments-but-should-also-spur-the-economy-and-ensure-environmental-sustainability-at-the-same-time-com/","urlToImage":null,"publishedAt":"2021-03-13T03:22:22Z","content":null,"sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"The Brown Daily Herald"},"author":"Andrew Reed","title":"Steven Pinker Wants to Repair Campus Culture","description":"In a world seemingly beset by problems, Steven Pinker has made a career out of focusing on the positive. For the past decade, the Harvard professor turned celebrity intellectual has been spreading the good news about human progress.","url":"https://www.browndailyherald.com/2021/03/12/reed-21-steven-pinker-wants-repair-campus-culture/","urlToImage":"https://www.browndailyherald.com/wp-content/uploads/2021/03/1599px-Steven_Pinker.jpg","publishedAt":"2021-03-12T16:21:30Z","content":"In a world seemingly beset by problems, Steven Pinker has made a career out of focusing on the positive. For the past decade, the Harvard professor turned celebrity intellectual has been spreading th… [+10166 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":"the-hindu","name":"The Hindu"},"author":"Ashok Kumar","title":"Allocation for SDGs hiked","description":"The Haryana government in its budget presented on Friday earmarked ₹45,066.16 crore for various welfare and development schemes under 17 Sustainable Development Goals (SDGs). The allocation is 14.07%","url":"https://www.thehindu.com/news/national/other-states/allocation-for-sdgs-hiked/article34056267.ece","urlToImage":"https://www.thehindu.com/static/theme/default/base/img/og-image.jpg","publishedAt":"2021-03-12T19:06:36Z","content":"The Haryana government in its budget presented on Friday earmarked 45,066.16 crore for various welfare and development schemes under 17 Sustainable Development Goals (SDGs). The allocation is 14.07% … [+1104 chars]","sourceInfo":{"id":"the-hindu","name":"The Hindu","description":"The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.","url":"http://www.thehindu.com","category":"general","language":"en","country":"in"},"coordinates":{"coordinates":"20.593684,78.96288"}},{"source":{"id":null,"name":"Yahoo Entertainment"},"author":"BBC","title":"Mathias Cormann set to head OECD despite climate record","description":"However critics say former finance minister Mathias Cormann has an 'atrocious' record on climate change.","url":"https://finance.yahoo.com/news/mathias-cormann-set-head-oecd-201508453.html","urlToImage":"https://s.yimg.com/ny/api/res/1.2/kSrsFwyj5K5PfcnEmy26fg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMTI1/https://s.yimg.com/uu/api/res/1.2/hM6YGd5JcUNLNF39I5Cmnw--~B/aD0xMTUyO3c9MjA0ODthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bbc_us_articles_995/088698adca251c553812494dd4eb8fec","publishedAt":"2021-03-12T20:15:08Z","content":"Critics say Mr Cormann has an \"atrocious\" record on climate change\r\nMathias Cormann, Australia's longtime former finance minister, is set to take over as chief of the Organisation for Economic Co-ope… [+4019 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Yahoo Entertainment"},"author":"Reuters","title":"Australia's Cormann to lead OECD, climate activists dismayed","description":"Australia's former finance minister Mathias Cormann on Friday announced he won the race to lead the Organisation for Economic Co-operation and Development...","url":"https://news.yahoo.com/australias-cormann-lead-oecd-climate-212850118.html","urlToImage":"https://s.yimg.com/uu/api/res/1.2/noTQ.n9OWNkpHcs0RAHpcg--~B/aD01MjM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/79b331523ebcd6327826aa707af5fa6b","publishedAt":"2021-03-12T21:28:50Z","content":"Stephen Maturen/Getty ImagesMyPillow founder and staunch Trump ally Mike Lindell plans to launch a social network of his own in the next few weeks, creating a haven for the kind of pro-Trump conspira… [+5287 chars]","sourceInfo":{},"coordinates":{}}])
    // code here
    axios.get('http://localhost:8080/api/news')
      .then(response => {
        processResults(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []); 
  
  function processResults(results) {
    let mark = results.filter(result => {
      return result.coordinates.coordinates
    })
    let idcount = 0;

    mark = mark.map(result => {
      let parts = result.coordinates.coordinates.split(",");
      let x = parseFloat(parts[0])
      let y = parseFloat(parts[1])
      //add random deviation
      let xdeviation = Math.random() < 0.5 ? Math.random() * -5: Math.random() * 4
      let ydeviation = Math.random() < 0.5 ? Math.random() * -5: Math.random() * 4
      let coordinates = [x + xdeviation+1, y + ydeviation+1]

      return {
        "id": idcount++,
        "title": result.title,
        "color": "red",
        "coordinates": coordinates,
        "value": 1,
        "description": result.description,
        "content": result.content,
        "url": result.url,
        "urlToImage": result.urlToImage,
        "sourceInfo": result.sourceInfo,
        "publishedAt": result.publishedAt
      }
    })

    setMarkers(mark)
  }

  
  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(markerTooltipRenderer(marker));
  }
  function onDefocus(previousFocus) {
    setEvent({
      type: "DEFOCUS",
      previousFocus
    });
    setDetails(null);
  }

  // for each marker create a box object
  let markerFeedObjects = markers.map(marker => {
    return <div><FeedItem marker={marker} /></div>
  })
  
  return (
    <div className="grid-container">
      <div className="item1">
        <img height="250px" src={require('./logo.png')}></img>
        {/* <h1><span>{"{ Honua.io }"}</span></h1> */}
      </div>
      {details && (
        <div
          style={{
            background: "white",
            position: "absolute",
            fontSize: 20,
            bottom: 0,
            right: 0,
            padding: 12
          }}
        >
          <p>{details}</p>
          <p>
            EVENT: type={event.type}, position=
            {JSON.stringify(event.pointerEventPosition)})
          </p>
        </div>
      )}
      <div className="item2">
        <ReactGlobe
          height="80vh"
          markers={markers}
          options={options}
          width="60vw"
          onClickMarker={onClickMarker}
          onDefocus={onDefocus}
        />
      </div>
      <div className="item3">
        {markerFeedObjects}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
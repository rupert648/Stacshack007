// export { default } from './lib';

// export * from './lib';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import axios from 'axios'
import HoverOver from './hover.js'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import defaultMarkers from "./markers";
import mp3 from "./BO2 Theme.mp3";

import './index.css'
import FeedItem from './feedItem.js'


var data = [{"source":{"id":null,"name":"Entrepreneur"},"author":"Stephanie Cole","title":"With COVID-19 Fears Receding, It's Time to Reclaim Travel Budgets and Reconnect With Customers","description":"After more than a year of quarantine, don't underestimate the pent-up demand for face-to-face contact.","url":"https://www.entrepreneur.com/article/366755","urlToImage":"https://assets.entrepreneur.com/content/3x2/2000/1615323976-GettyImages-200412533-001.jpg","publishedAt":"2021-03-12T20:55:00Z","content":"March\r\n12, 2021\r\n5 min read\r\nOpinions expressed by Entrepreneur contributors are their own.\r\nThe time is right for smart businesses to plan for life after quarantine. COVID-19 vaccination rates are u… [+4695 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"9gag.com"},"author":null,"title":"Climate: oh you're fighting me?","description":"Tags: Shinjir\\u014d Koizumi399 points, 41 comments.","url":"http://9gag.com/gag/aAb34Kp","urlToImage":null,"publishedAt":"2021-03-12T16:00:04Z","content":null,"sourceInfo":{},"coordinates":{}},{"source":{"id":"cbc-news","name":"CBC News"},"author":"CBC News","title":"COVID-19 pandemic adds urgency to fight against climate change: Mark Carney","description":"Former Bank of Canada governor Mark Carney says the world's response to the COVID-19 pandemic could build momentum for a collaborative approach to the other global crisis: climate change.","url":"https://www.cbc.ca/news/politics/mark-carney-pandemic-climate-change-1.5946117","urlToImage":"https://i.cbc.ca/1.5923095.1614016406!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1203645177.jpg","publishedAt":"2021-03-13T02:00:00Z","content":"Former Bank of Canada governor Mark Carney says the world's response to the COVID-19 pandemic could build momentum for a collaborative approach to the other great global crisis: climate change.\r\nIn a… [+3251 chars]","sourceInfo":{"id":"cbc-news","name":"CBC News","description":"CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.","url":"http://www.cbc.ca/news","category":"general","language":"en","country":"ca"},"coordinates":{"coordinates":"56.130366,-106.346771"}},{"source":{"id":"bloomberg","name":"Bloomberg"},"author":"William Horobin, Bryce Baschuk","title":"Australia's Cormann Beats Malmstrom in Race to Lead OECD","description":"","url":"https://www.bloomberg.com/news/articles/2021-03-12/cormann-wins-race-to-lead-oecd-sydney-morning-herald-reports","urlToImage":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iH78EbtWfIQQ/v0/1200x799.jpg","publishedAt":"2021-03-12T16:36:19Z","content":"Australias Mathias Cormann was selected on Friday to head the Organization for Economic Cooperation and Development, defeating Swedens Cecilia Malmstrom in a closely contested race, according to a pe… [+2402 chars]","sourceInfo":{"id":"bloomberg","name":"Bloomberg","description":"Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.","url":"http://www.bloomberg.com","category":"business","language":"en","country":"us"},"coordinates":{"coordinates":"37.09024,-95.712891"}},{"source":{"id":null,"name":"Fitch Ratings"},"author":null,"title":"US Climate Policy May Alter Some US Corporate Business Models - Fitch Ratings","description":"US Climate Policy May Alter Some US Corporate Business Models  Fitch Ratings","url":"https://www.fitchratings.com/research/corporate-finance/us-climate-policy-may-alter-some-us-corporate-business-models-12-03-2021","urlToImage":null,"publishedAt":"2021-03-12T16:56:00Z","content":"","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Scientific American"},"author":"Shannon Dosemagen","title":"Science Needs to Face Up to Its Racist History","description":"Elevating science’s role in policymaking is important; so is reckoning with how science has been used to harm marginalized communities\n\n-- Read more on ScientificAmerican.com","url":"https://www.scientificamerican.com/article/science-needs-to-face-up-to-its-racist-history/","urlToImage":"https://static.scientificamerican.com/sciam/cache/file/6E29CD8E-5389-4C01-BB242A2197D3FCC1.jpg","publishedAt":"2021-03-12T16:00:00Z","content":"An early indication that the Biden administration would seek to elevate the importance of science in decision-making was theannouncement that the director of the White House Office of Science and Tec… [+4850 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Dezeen"},"author":"India Block","title":"Eight homes, suits and kits for surviving an apocalypse","description":"From a wearable survival kit to an underground bunker, here are eight homes, suits and kits that architects and designers have created to prepare for an apocalypse. Read more","url":"http://www.dezeen.com/2021/03/12/apocalypse-architecture-design-roundup/","urlToImage":"https://static.dezeen.com/uploads/2021/03/apocalypse-roundup-end-of-the-world-house-bunker-kit-dezeen-hero-1024x576.jpg","publishedAt":"2021-03-12T18:00:12Z","content":"From a wearable survival kit to an underground bunker, here are eight homes, suits and kits that architects and designers have created to prepare for an apocalypse.\r\nCyberhouse by Modern House Archit… [+4069 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Forbes"},"author":"Robert Kidd, Senior Contributor, \n Robert Kidd, Senior Contributor\n https://www.forbes.com/sites/robertkidd/","title":"Irish Soccer Club Bohemians Partners With Grammy Nominee Fontaines D.C. To Highlight Homelessness","description":"From designing shirts welcoming refugees and celebrating Bob Marley to appointing a climate justice officer, the club has a history of supporting progressive social causes.","url":"https://www.forbes.com/sites/robertkidd/2021/03/13/irish-soccer-club-bohemians-partners-with-grammy-nominee-fontaines-dc-to-highlight-homelessness/","urlToImage":"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F604b367f43add200edb701dd%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1253%26cropY1%3D36%26cropY2%3D741","publishedAt":"2021-03-13T08:00:00Z","content":"Irish soccer club Bohemian FC has teamed up with band Fontaines D.C. and homeless nonprofit Focus ... [+] Ireland for its new jersey.\r\nabutchershook.com/Bohemian FC\r\nBohemian Football Club wears its … [+4947 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Forbes"},"author":"Mindy Lubber, Contributor, \n Mindy Lubber, Contributor\n https://www.forbes.com/sites/mindylubber/","title":"What’s Next For U.S. Banks And Global Investors Following Their Net-Zero Commitments?","description":"If there’s anything I’ve learned from decades of work to build awareness of – and action to tackle – the economic risks posed by climate change, it is this: market signals matter.","url":"https://www.forbes.com/sites/mindylubber/2021/03/12/whats-next-for-us-banks-and-global-investors-following-their-net-zero-commitments/","urlToImage":"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F604b91765645af67d2b701dd%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1920%26cropY1%3D140%26cropY2%3D1040","publishedAt":"2021-03-12T16:08:13Z","content":"Banks and investors must actualize their net-zero commitments by 2030 or sooner\r\nSiarhei - stock.adobe.com\r\nIf theres anything Ive learned from decades of work to build awareness of and action to tac… [+5123 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Telegraph.co.uk"},"author":"Sarah Newey","title":"Backlash as UK cuts funding for global health research in half","description":"The UKRI, which funds research into climate change, superbugs and poverty, will have a £120m hole in its budget in the next financial year","url":"https://www.telegraph.co.uk/global-health/science-and-disease/backlash-uk-cuts-funding-global-health-research-half/","urlToImage":"https://www.telegraph.co.uk/content/dam/global-health/2021/03/12/TELEMMGLPICT000194974296_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg?impolicy=logo-overlay","publishedAt":"2021-03-12T16:55:59Z","content":"The UK is under fire from doctors and academics after slashing funding for global health research in the latest round of aid budget cuts. \r\nOn Thursday, UK Research and Innovation (UKRI), an agency w… [+2378 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":"bbc-news","name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Mathias Cormann set to head OECD despite climate record","description":"However critics say former finance minister Mathias Cormann has an 'atrocious' record on climate change.","url":"https://www.bbc.co.uk/news/business-56381202","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/1550A/production/_117560378_gettyimages-956271916.jpg","publishedAt":"2021-03-12T20:15:07Z","content":"By Jonathan Josephs &amp; Natalie ShermanBusiness reporters, BBC News\r\nimage copyrightGetty Images\r\nimage captionCritics say Mr Cormann has an \"atrocious\" record on climate change\r\nMathias Cormann, A… [+4091 chars]","sourceInfo":{"id":"bbc-news","name":"BBC News","description":"Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.","url":"http://www.bbc.co.uk/news","category":"general","language":"en","country":"gb"},"coordinates":{"coordinates":"55.378051,-3.435973"}},{"source":{"id":null,"name":"Fitch Ratings"},"author":null,"title":"Climate Legislation to Hasten Business Model Changes, Affecting Credit Profiles Over Time (Executive Orders Are Neutral to Auto, Energy and Utility Credit Ratings) - Fitch Ratings","description":"Climate Legislation to Hasten Business Model Changes, Affecting Credit Profiles Over Time (Executive Orders Are Neutral to Auto, Energy and Utility Credit Ratings)  Fitch Ratings","url":"https://www.fitchratings.com/research/corporate-finance/climate-legislation-to-hasten-business-model-changes-affecting-credit-profiles-over-time-executive-orders-are-neutral-to-auto-energy-utility-credit-ratings-12-03-2021","urlToImage":null,"publishedAt":"2021-03-12T16:56:00Z","content":"","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Juancole.com"},"author":"The Conversation","title":"Defeating Climate Denialism by showing People how they will Win by Greening Society","description":"By Sarah Sharma and Matthew Hoffmann | - Canada and the United States are suddenly steeped in policy proposals to aggressively cut carbon emissions. In the face of a climate emergency and on the heels of numerous climate disasters, this is welcome news indeed…","url":"https://www.juancole.com/2021/03/defeating-denialism-greening.html","urlToImage":"https://www.juancole.com/images/2021/03/defeating-climate-denialism-by-s.jpg","publishedAt":"2021-03-13T05:01:30Z","content":"By Sarah Sharma and Matthew Hoffmann | –\r\nCanada and the United States are suddenly steeped in policy proposals to aggressively cut carbon emissions. In the face of a climate emergency and on the hee… [+6750 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":"associated-press","name":"Associated Press"},"author":"Shawn Marsh","title":"Philly to dim lights to make it safer for birds in flight...","description":"The lights of Philadelphia might not shine as bright in the coming weeks as a coalition in the City of Brotherly Love tries to prevent millions of migrating birds that pass through twice a year...","url":"https://apnews.com/article/science-philadelphia-climate-change-birds-ae7b8dc52663edd720596445f76aa105","urlToImage":"https://storage.googleapis.com/afs-prod/media/ad6654e1ae064aab8e4a4c1b2f9f2890/3000.jpeg","publishedAt":"2021-03-12T21:34:38Z","content":"The lights of Philadelphia might not shine as bright in the coming weeks as a coalition in the City of Brotherly Love tries to prevent millions of migrating birds that pass through twice a year from … [+3887 chars]","sourceInfo":{"id":"associated-press","name":"Associated Press","description":"The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.","url":"https://apnews.com/","category":"general","language":"en","country":"us"},"coordinates":{"coordinates":"37.09024,-95.712891"}},{"source":{"id":null,"name":"Rolling Stone"},"author":"Angie Martoccio","title":"Hear Samantha Ronson’s Remix of Toots and the Maytals’ ‘Freedom Train’","description":"Original track is off Grammy-nominated album Got to Be Tough","url":"https://www.rollingstone.com/music/music-news/samantha-ronson-toots-and-maytals-remix-1140621/","urlToImage":"https://www.rollingstone.com/wp-content/uploads/2021/03/SRTOOTS.jpg","publishedAt":"2021-03-12T17:30:17Z","content":"Ahead of the Grammys on Sunday, Samantha Ronson has remixed Toots and the Maytals’ “Freedom Train” from their nominated album Got to be Tough.\r\nRonson enlisted Pete Nappi for the project, releasing t… [+785 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Insightsonindia.com"},"author":"Insights Editor","title":"The governments should upkeep and encourage alternate fuel technologies to aid climate action commitments but should also spur the economy and ensure environmental sustainability at the same time. Comment.","description":"6. The governments should upkeep and encourage alternate fuel technologies to aid climate action commitments but should also spur the economy and ensure environmental sustainability at the same time. Comment. (250 words) Reference: The Hindu\nThe post The gove…","url":"https://www.insightsonindia.com/2021/03/13/the-governments-should-upkeep-and-encourage-alternate-fuel-technologies-to-aid-climate-action-commitments-but-should-also-spur-the-economy-and-ensure-environmental-sustainability-at-the-same-time-com/","urlToImage":null,"publishedAt":"2021-03-13T03:22:22Z","content":null,"sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"The Brown Daily Herald"},"author":"Andrew Reed","title":"Steven Pinker Wants to Repair Campus Culture","description":"In a world seemingly beset by problems, Steven Pinker has made a career out of focusing on the positive. For the past decade, the Harvard professor turned celebrity intellectual has been spreading the good news about human progress.","url":"https://www.browndailyherald.com/2021/03/12/reed-21-steven-pinker-wants-repair-campus-culture/","urlToImage":"https://www.browndailyherald.com/wp-content/uploads/2021/03/1599px-Steven_Pinker.jpg","publishedAt":"2021-03-12T16:21:30Z","content":"In a world seemingly beset by problems, Steven Pinker has made a career out of focusing on the positive. For the past decade, the Harvard professor turned celebrity intellectual has been spreading th… [+10166 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":"the-hindu","name":"The Hindu"},"author":"Ashok Kumar","title":"Allocation for SDGs hiked","description":"The Haryana government in its budget presented on Friday earmarked ₹45,066.16 crore for various welfare and development schemes under 17 Sustainable Development Goals (SDGs). The allocation is 14.07%","url":"https://www.thehindu.com/news/national/other-states/allocation-for-sdgs-hiked/article34056267.ece","urlToImage":"https://www.thehindu.com/static/theme/default/base/img/og-image.jpg","publishedAt":"2021-03-12T19:06:36Z","content":"The Haryana government in its budget presented on Friday earmarked 45,066.16 crore for various welfare and development schemes under 17 Sustainable Development Goals (SDGs). The allocation is 14.07% … [+1104 chars]","sourceInfo":{"id":"the-hindu","name":"The Hindu","description":"The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.","url":"http://www.thehindu.com","category":"general","language":"en","country":"in"},"coordinates":{"coordinates":"20.593684,78.96288"}},{"source":{"id":null,"name":"Yahoo Entertainment"},"author":"BBC","title":"Mathias Cormann set to head OECD despite climate record","description":"However critics say former finance minister Mathias Cormann has an 'atrocious' record on climate change.","url":"https://finance.yahoo.com/news/mathias-cormann-set-head-oecd-201508453.html","urlToImage":"https://s.yimg.com/ny/api/res/1.2/kSrsFwyj5K5PfcnEmy26fg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMTI1/https://s.yimg.com/uu/api/res/1.2/hM6YGd5JcUNLNF39I5Cmnw--~B/aD0xMTUyO3c9MjA0ODthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bbc_us_articles_995/088698adca251c553812494dd4eb8fec","publishedAt":"2021-03-12T20:15:08Z","content":"Critics say Mr Cormann has an \"atrocious\" record on climate change\r\nMathias Cormann, Australia's longtime former finance minister, is set to take over as chief of the Organisation for Economic Co-ope… [+4019 chars]","sourceInfo":{},"coordinates":{}},{"source":{"id":null,"name":"Yahoo Entertainment"},"author":"Reuters","title":"Australia's Cormann to lead OECD, climate activists dismayed","description":"Australia's former finance minister Mathias Cormann on Friday announced he won the race to lead the Organisation for Economic Co-operation and Development...","url":"https://news.yahoo.com/australias-cormann-lead-oecd-climate-212850118.html","urlToImage":"https://s.yimg.com/uu/api/res/1.2/noTQ.n9OWNkpHcs0RAHpcg--~B/aD01MjM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/79b331523ebcd6327826aa707af5fa6b","publishedAt":"2021-03-12T21:28:50Z","content":"Stephen Maturen/Getty ImagesMyPillow founder and staunch Trump ally Mike Lindell plans to launch a social network of his own in the next few weeks, creating a haven for the kind of pro-Trump conspira… [+5287 chars]","sourceInfo":{},"coordinates":{}}]

var country_codes = {"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}

// function markerTooltipRenderer(marker) {
//   var mark = {"title": marker.title, 
//               "country": country_codes[marker.sourceInfo.country],
//               "description": marker.description,
//               "name": marker.name,
//               "url": marker.url,
//               "image": marker.urlToImage}
//   return mark;
// }

function markerTooltipRenderer(marker) {
  console.log(marker.sourceInfo.country);
  return `From ${country_codes[(marker.sourceInfo.country).toUpperCase()]} || 
          ${marker.title}`;
}


// const zomb = {
//     ambientLightColor: 'red',
//     cameraMaxPolarAngle: Math.PI,
//     enableCameraAutoRotate: false,
//     cameraAutoRotateSpeed: 0.01,
//     markerRenderer: null,
//     markerTooltipRenderer: markerTooltipRenderer,
//     focusAnimationDuration: 1000,
//     focusDistanceRadiusScale: 3,
//     focusEasingFunction: ['Cubic', 'Out'],
//   }
// const options = {
//     markerTooltipRenderer,
//     cameraRotateSpeed: 0.2,
//     enableCameraAutoRotate: false,
//     enableCameraRotate: true,
// };


function App() {
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  const [zombies, setZombies] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [touring, setTouring] = useState(false);
  const [focus, setFocus] = useState(null);

  const ops = {
    ambientLightColor: zombies ? 'red' : 'white',
    cameraMaxPolarAngle: Math.PI,
    enableCameraAutoRotate: false,
    cameraAutoRotateSpeed: 0.01,
    markerRenderer: null,
    markerTooltipRenderer: markerTooltipRenderer,
    focusAnimationDuration: !touring ? null : 3000,
    focusDistanceRadiusScale: 2,
    focusEasingFunction: ['Cubic', 'Out'],
  }

  useEffect(() => {
    // code here
    axios.get('http://localhost:8080/api/news')
      .then(response => {
        processResults(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    processResults(data);
  }, []); 
  

  function isInside(coordinates, past_coordinates) {
    var i;
    for(i = 0; i < past_coordinates.length; i++) {
      if(past_coordinates[i][0] === coordinates[0] && past_coordinates[i][1] === coordinates[1]) {
        return true;
      }
    }
    return false;
  }

  // u dont need to do this
  function processResults(results) {
    let mark = results.filter(result => {
      return result.coordinates.coordinates
    })
    let idcount = 0;
    let addedCoords = []
    mark = mark.map(result => {
      let parts = result.coordinates.coordinates.split(",");
      let x = parseFloat(parts[0])
      let y = parseFloat(parts[1])
      let coordinates = [x,y];
      //add random deviation
      while(isInside(coordinates, addedCoords)) {
        let xdeviation = Math.random() < 0.5 ? Math.random() * -5: Math.random() * 4
        let ydeviation = Math.random() < 0.5 ? Math.random() * -5: Math.random() * 4
        coordinates = [x + xdeviation+1, y + ydeviation+1]
      }
      addedCoords.push(coordinates);
      let red = (~~(Math.random() * 255)).toString();
      let green = (~~(Math.random() * 255)).toString();
      let blue = (~~(Math.random() * 255)).toString();
      console.log(red, green, blue);

      return {
        "id": idcount++,
        "title": result.title,
        "color": 'rgb(' + red + ',' + green + ',' + blue + ')',
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

    mark.push({
      "id": 1123,
      "title": "kino der toten",
      "color": "black",
      "coordinates": [52.5200, 13.405],
      "value": 1,
      "sourceInfo": {country: 'de'}, 
      "description": "Kino der Toten (German for Cinema of the Dead) is the fifth Zombies map overall, featured in Call of Duty: Black Ops and Call of Duty: Black Ops III",
      "content": "Kino der Toten (German for Cinema of the Dead) is the fifth Zombies map overall, featured in Call of Duty: Black Ops and Call of Duty: Black Ops III. The map takes place in at Group 935's Kino Facility, at an abandoned theater in Germany, and it is the first map available to the player in Call of Duty: Black Ops",
    })

    // append old markers
    mark = mark.concat(markers)

    setMarkers(mark)
  }

  function refresh() {
    console.log("in here")
    console.log(pageCount)
    if (pageCount < 5) {
      
      axios.get('http://localhost:8080/api/news', {
        params: {
          pageCount: pageCount
        }
      })
      .then(response => {
        // processResults(response.data)
        console.log("!")
        setPageCount(pageCount + 1)
      })
      .catch(err => {
        console.log(err)
      })
    }
    
  }

  
  function onClickMarker(marker, markerObject, event) {
    if (marker.id === 1123) {
      setZombies(true)
    }
    else{
      setZombies(false)
    }
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(marker);
  }

  function onDefocus(previousFocus) {
    setEvent({
      type: "DEFOCUS",
      previousFocus
    });
    setDetails(null);
    setZombies(false);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    console.log(touring);
    if(touring) {
      lookaround();
    }
  }, [touring]);

  async function lookaround() {
    var i = 0;
      for(i = 0 ; i < markers.length ; i++) {
        console.log(markers[i].coordinates);
        setFocus(markers[i].coordinates);
        console.log(focus);
        setDetails(markers[i]);
        await sleep(5000);
        console.log(touring);
        if(!touring) {
          setFocus(null);
          setDetails(null);
          break;
        }
      }
      setFocus(null);
      setDetails(null);
  }

  // for each marker create a box object
  let markerFeedObjects = markers.map(marker => {
    if (marker.id !== 1123) {
      return <div><FeedItem marker={marker} /></div>
    }
    return <div></div>
  })

  return (
    <div className="grid-container">
      <div className="item1">
       <img width="250px" display="inline" src={require('./logo.png')}></img>
      </div>
        {details &&
          <HoverOver marker={details} />
        }
      
      <div className="item2">
        <ReactGlobe
          height="80vh"
          markers={markers}
          focus = {focus}
          options = {ops}
          width="60vw"
          onClickMarker={onClickMarker}
          onDefocus={onDefocus}
        />
        {zombies && <AudioPlayer />}
      </div>
      <div className="item3">
        {markerFeedObjects}
      </div>
      <div className="touringButton">
        {!touring 
        ?<button onClick={() => setTouring(true)}>Tour</button>
        :<button onClick={() => setTouring(false)}>Exit Tour</button>
        }
      </div>
      <div className="item4">
          <h3>Cool Charities</h3>
        
          <a href = "https://www.janegoodall.org/"><img height="50px" src={require('./janegoodall.png')}></img></a>
          <a href = "https://www.iucn.org/"><img height="50px" src={require('./iucn.png')}></img></a>
          <a href = "https://www.wwf.org.uk/"><img height="50px" src={require('./wwf.png')}></img></a>
          <a href = "https://www.coolearth.org/?gclid=CjwKCAiA4rGCBhAQEiwAelVti-S649KzWYKlt4lbUUrr7TGsS5JFYCm3uK6PtVfrCIfcRaLAOLW2wxoCW8AQAvD_BwE"><img height="50px"src={require('./coolearth_logo.webp')}></img></a>
      </div>
      <div className="item5">
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="CO2_earth"
            theme="dark"
            options={{
              height: 300,
              }}
        />
      </div>
        <div className="item6"  style={{
    backgroundColor: 'white',
  }}>
        <ReactGlobe
          height="15vh"
          globeTexture= "https://raw.githubusercontent.com/rupert648/Stacshack007/main/src/rupert.jpg"
          width="7vw"
          globeCloudsTexture={null}
          globeBackgroundTexture={null}
        />
        </div>
        <div className="item7"  style={{
    backgroundColor: 'white',
  }}>
        <ReactGlobe
          height="15vh"
          globeTexture= "https://raw.githubusercontent.com/rupert648/Stacshack007/main/IMG_20180716_112222__01.jpg"
          width="7vw"
          globeCloudsTexture={null}
          globeBackgroundTexture={null}
        />
        </div>
        <div className="item8"  style={{
    backgroundColor: 'white',
  }}>
        <ReactGlobe
          height="15vh"
          globeTexture= "https://raw.githubusercontent.com/rupert648/Stacshack007/main/IMG-7444.JPG"
          width="7vw"
          globeCloudsTexture={null}
          globeBackgroundTexture={null}
        />
        </div>
        <div className="item9"  style={{
    backgroundColor: 'white',
  }}>
        <ReactGlobe
          height="15vh"
          globeTexture= "https://raw.githubusercontent.com/rupert648/Stacshack007/main/154714214_258183295805971_6515180868616470305_n.jpg"
          width="7vw"
          globeCloudsTexture={null}
          globeBackgroundTexture={null}
        />
        </div>
      <div>
    </div>
    </div>
  );
}
class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src={mp3} autoPlay />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
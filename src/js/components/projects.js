import React, { Component } from 'react';

import Project from './project';

import rallyRd from '../../img/rallyrd.jpeg';
import jet from '../../img/jet.png';
import cribdilla from '../../img/crib_1.png';
import mixxta from '../../img/mixx.png';
import twizz from '../../img/twizz.png';
import trialtech from '../../img/trialtech3.png';
import mavenrocket from '../../img/mavenrocket.png';
import nearYouNow from '../../img/nearyounow2.png';
import fourFront from '../../img/4front.png';
import bikelane from '../../img/bikelane.png';
import spot from '../../img/spot.png';

class Projects extends Component {
  render() {
    const projectInfo = {
      rally: {
        img: rallyRd,
        title: "Rally Road",
        short_desc: "Platform where collector cars are turned into stocks",
        tech: "Python, Django, REST, caching, Stripe, security, mailchimp, Heroku, leadership",
        long_desc: "As the lead backend engineer in a team of Python and iOS developers, my responsibilities included data model and server architecture, task distribution and feature planning. \n\n The project was validated without additional recommendations after undergoing a third-party security review. ",
      },
      cribdilla: {
        img: cribdilla,
        title: "Cribdilla",
        extraClasses: "needs-border",
        short_desc: "Real time rental listings in NYC dealing with tenants directly",
        tech: "Python, Django, REST, Stripe, security, ntn, Twilio, SMS, emails, mailchimp, facebook auth, caching, postgres, PCI, credit checks, TokBox",
        long_desc: "Cribdilla was a 3 month project working with a team of front end developers, to engineer a solution for NYC rentals. \n\n The web application takes prospective tenatnts all the way through choosing an apartment, getting a credit check, paying a deposit and signing a rental lease.  Including integrations with TokBox, NTN, Stripe, Facebook and Twilio, the Python/Django server is optimised and cached to provide a fast and scalable solution. ",
      },
      trial: {
        img: trialtech,
        title: "Trial Tech",
        extraClasses: "needs-border custom-padding",
        short_desc: "Streamling patients into clinical trials",
        tech: "Python, Django, REST, React, Redux, Bootstrap, postgres, HTML, SCSS, javascript, Formstack, Zendesk, axios, drf, HIPAA compliance",
        long_desc: "Working independently, I’ve developed dashboards for various stakeholders such as Site Coordinators and Trial Sponsors, as well as connecting FormStack and Zendesk integrations into a central database.  \n\n Using React/Redux for the frontend, with a Python/Django backend, the full-stack project is currently undergoing a beta test.",
      },
      mixxta: {
        img: mixxta,
        title: "Mixxta",
        short_desc: "Share a table with others at nearby restaurants",
        long_desc: "Mixxta is a cross platform mobile app that enables people to connect with other users to enjoy shared dining experiences together. \n\n As CTO, I was responsible for: \n\n• Scoping and designing the project specification and requirements \n\n• Leading a team of international developers, designers and QA testers to develop the Android and iOS mobile apps \n\n• Developing an effective and reliable Django backend and PostGIS database for the apps to communicate with \n\n • Configuring a rapidly scalable, secure and monitored infrastructure using Heroku, S3, Redis, New Relic and Papertrail \n\n• Managing the security of all the technology to ensure no data is compromised \n\n• Designing a marketing site and web functionality using HTML, CSS and JavaScript (including Angular) \n\n\n\nThese mobile apps were successfully brought to market ahead of schedule and within budget.",
        extraClasses: "needs-border needs-padding",
        tech: "Python, Django, iOS, Android, postgis, redis, TDD, unit testing, new relic, HTML, CSS, Javascript, Angular, Logging, REST, scalability, analytics, project management",
      },
      twizz: {
        img: twizz,
        title: "Twizz",
        extraClasses: "needs-border",
        short_desc: "New social media app utilizing NFC and location data",
        long_desc: "Along with managing the app development team, the server side of Twizz was developed in parallel. Using Django and Python, hosted on Heroku, the server combines highly optimized messaging and REST API's with a significant amount of background processing using Redis. \n\n The project is built to scale and has built in analytics to provide the management team with a clear visibility of what's going on. \n\n Twizz is fully tested with 100% test coverage and included a significant amount of TDD through the more complicated algorithms.",
        tech: "Python, Django, Team management, iOS, android, API, scalability, TDD, unit testing, postgis, location, redis, new relic, analytics, Heroku",
      },
      jet: {
        img: jet,
        title: "Jet",
        short_desc: "Python based version control system",
        long_desc: "Designed for my final year project at Sussex university, Jet is a distributed version control system that aims to simply version control use for the end user. \n\n Available on the Python Package index, Jet has had thousands of downloads and received fantastic feedback. Jet utilizes a Python command line interface to communicate with a Django web server, and can also be accessed via a web interface, similar to GitHub. \n\n It is available to use at jetvc.co.uk",
        tech: "Python, Version Control, VCS, Git, HTML, CSS, JS, Heroku, TDD",
      },
      maven: {
        img: mavenrocket,
        title: "Maven Rocket",
        short_desc: "Data driven Digital Marketing Agency",
        long_desc: "Working with a front end developer, I developed a web application to assist Maven Rocket's adword specialists in optimizing customers adverts. \n\n Using a variety of mathematical algorithms, the program evaluated the performance of a subset of different adverts and created an optimized solution from the data. \n\n This Django application worked directly with the Google Adwords API and involved both presenting the data in a graphical interface and performing the calculations behind the scenes with RabbitMQ background workers",
        tech: "Google Adwords, Python, Django, RabbitMQ, Maths, REST, MySQL, Algorithms",
      },
      near: {
        img: nearYouNow,
        extraClasses: "needs-border custom-padding",
        title: "NearYouNow",
        short_desc: "Real-time web service enabling media organisations to show local articles",
        long_desc: "Near You Now optimises real time local news stories based on customers location, factoring in the magnitude, or 'newsworthiness', of the story. \n\n The project utilised a number of tools including natural language engineering and geolocation. Specifically, I improved the selection algorithm and developed analytical tools for journalists to evaluate the performance of the news stories. Near You Now is currently being used by national media outlets such as Archant and Trinity Mirror, and is being evaluated by other national news sources. \n\n The project was highly commended in the 2015 Digital Innovation of the Year News Awards.",
        tech: "Python, Analytics, Big data, News, Celery, NLE, Django, Postgis, Locations, Scalability",
      },
      brading: {
        img: fourFront,
        title: "4Front Interiors",
        extraClasses: "needs-border needs-padding",
        short_desc: "Northampton Builders",
        long_desc: "Alongside my undergraduate studies, I undertook an independent project for a nationwide building company, 4Front Interiors. \n \n I managed the client contact, scoping out the project requirements, which included website redevelopment and both android and ios app design. The project was delivered on time, on budget and to the satisfaction of the client. \n\n This novel app idea allows the building company to communicate with clients via instant messaging, upload and manage progress reports and co-ordinate scheduling, ensuring improved customer communications.",
        tech: "Python, Django, iOS, Android, REST, Project management, Design",
      },
      bikelane: {
        img: bikelane,
        title: "Bikelane",
        extraClasses: "",
        short_desc: "NYC based job platform",
        long_desc: "As the lead backend developer for this long term project, I was responsible for maintaining high code quality and reliable infrastructure for the growing business. Integrations with Stipe subscriptions, Mandrill emails, Google Indexing and Geocoding, Indeed, ZipRecruiter and more - the project has lots of moving parts. Recently implemented load testing (using locust.io) for high usage endpoints to allow the business to launch a smooth marketing campaign.",
        tech: "Pythom, Django, Stripe, Mandrill, Google indexing, Load testing"
      },
      spot: {
        img: spot,
        title: "Spot and Tango",
        extraClasses: "",
        short_desc: "Personalised meal plans for dogs",
        long_desc: "As technical lead for the project, I was responsible for overseeing a team of developers as we transformed a simple Shopify store into a customised portal, integrating Shopify's API and Recharge to allow for a more personalised experience.",
        tech: "Python, Django, React, Shopify, Recharge"
      }
    }

    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title">Key Projects</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <Project project={projectInfo.rally} />
            </div>
            <div className="col-sm-4">
              <Project project={projectInfo.bikelane} />
            </div>
            <div className="col-sm-4">
              <Project project={projectInfo.trial} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <Project project={projectInfo.spot} />
            </div>
            <div className="col-sm-4">
              <Project project={projectInfo.twizz} />
            </div>
            <div className="col-sm-4">
              <Project project={projectInfo.cribdilla} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-title">Other Projects</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <Project project={projectInfo.maven} />
            </div>
            <div className="col-sm-4">
              <Project project={projectInfo.near} />
            </div>
            <div className="col-sm-4">
              <Project project={projectInfo.jet } />
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default Projects;

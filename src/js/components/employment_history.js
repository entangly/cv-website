import React, { Component } from 'react';

import Job from './job';

class EmploymentHistory extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const employmentHistory = [
      {
        'title': "Lead Software Engineer at Jakt, June 2016 – Present",
        'description': "Jakt is a full stack product studio that offers design, development and business strategy services. \n\n Working in a small team as the lead backend developer, I’ve delivered multiple successful applications across the finance, healthcare and social media industries. Primarily using Django/Python to produce scalable REST APIs for mobile apps and web applications, my team took start-ups’ ideas and transformed them into industry changing products. \n\n When working on full stack projects, I’ve also collaborated on front end implementation and architecture using React, Redux and SCSS. With experience complying to both PCI and HIPAA regulations, I designed company-wide best practices documentation and templates, focusing on high security, code reusability and simplicity.",
      },
      {
        'title': "Chief Technology Officer at Mixxta, July 2015 – June 2016",
        'description': "Mixxta is a mobile app that enables people to connect with other users to enjoy shared dining experiences together.  \n\n As a director of the business, I was responsible for taking an idea and bringing it to market. After conducting market research, the project was scoped in order to accommodate an offshore development team. Managing this team, I developed the server side technology and integrated it with both the Android and iOS apps. The apps were successfully launched onto the app stores ahead of schedule.",
      },
      {
        'title': "Junior Developer at Singing Horse Studio, Nov 2013 – July 2015",
        'description': "As a Junior Software Engineer, I worked with a front-end developer coding Django applications for clients such as the University of Sussex and NearYouNow. \n\n Projects included: \n\n• Developed an award winning NearYouNow API to provide local and relevant news stories to national media outlets and a dashboard interface for journalists to manage content \n\n• Delivered a distance learning application written in Django and Python \n\n• Optimization of users adverts using custom build algorithms taking mathematical data from the Google Adwords API.",
      },
    ]

    const jobs = employmentHistory.map((jobDetails, index) => {
      return <Job key={index} title={jobDetails.title} description={jobDetails.description} open={index===0} />
    })

    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title">Employment History</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {jobs}

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default EmploymentHistory;

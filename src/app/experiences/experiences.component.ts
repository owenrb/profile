import { Component, OnInit } from '@angular/core';

export interface Project {
  name: string,
  from: string,
  to: string,
  role: string,
  description: string,
  responsibility: string,
  tools: string[]
}

export interface Experience {
  company: string,
  from: string,
  to: string,
  projects: Project[]
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.less']
})
export class ExperiencesComponent implements OnInit {

  dataSource = EXPERIENCES;

  constructor() { }

  ngOnInit(): void {
  }

}

// friartuck

const ft: Project = {
  name: 'WorkforceOptimizer (WFO) / HomeCareOptimizer (HCO)',
  from: '',
  to: '',
  role: 'Technical Lead',
  description: 'WFO product is about predicting staff workload, automating workforce scheduling and providing real-time insights into workforce analytics. HCO is about optimizing route planning to minimize staff travelling times and the risk of delays.',
  responsibility: 'My main focus is to assess product issues to find solutions to them as per requirements. And locating and directing resolutions for critical issues related to hardware and software interface',
  tools: ['Java', 'Spring Framework', 'Jersey JAX-RS', 'MyBatis', 'Mule 3', 'Apache Camel', 'Tomcat', 'IBM WebSphere Application Server', 'IBM HTTP Server',
    'MS SQL', 'MS SQL CDC', 'GIT/Bitbucket', 'Maven', 'Ant', 'JIRA', 'Swagger/OAS', 'SonarQube', 'Jenkins', 'Cordova', 'LoadImpact', 'JUnit', 'Mockito', 'Postman', 'GoogleMap API',
    'Coffee Script', 'Apache Benchmark', 'Java Melody', 'Angular', 'DevExtreme']
}

// logica
const naas: Project = {
  name: 'Network Access Authorisation System & Connection Application Management System, Endeavour Energy Australia',
  from: '',
  to: '',
  role: 'Senior Developer',
  description: '',
  responsibility: 'I am the principal technical consultant for the phase-3 enhancement projects of the Network Access Authorisation System (NAAS) and the Connection Application Management System (CAMS). These are among the core business management tools being used for the Endeavour Energy electrical network.',
  tools: ['GWT', 'Oracle', 'Hibernate', 'Ant', 'Maven', 'WebSphere Application Server', 'OpenOffice', 'Jersey JAX-RS', 'SVN', 'Selenium']
}


const EXPERIENCES : Experience[] = [
  {
    company: 'FRIARTUCK PHILIPPINES - ROHQ',
    from: 'October 2017', to: 'Present',
    projects: [ft]
  },
  {
    company: 'CGI PHILIPPINES - ROHQ (formerly LOGICA Philippines)',
    from: 'August 2019', to: 'September 2017',
    projects: [naas]
  }
] 
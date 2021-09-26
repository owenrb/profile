import { Component, OnInit } from '@angular/core';


export interface Certification {
  code: string;
  title: string;
  summary: string;
  taken: string;
}

const CERTIFICATIONS : Certification[] = [
  {code: 'MCD 4', title: 'MuleSoft Certified Developer', summary: '', taken: 'November 2020'},
  {code: 'OCE JWS 5', title: 'Oracle Certified Expert for Java Web Services 5', summary: '', taken: ''},
  {code: 'SCWCD JEE5', title: 'Sun Certified Web Component Developer 5 ', summary: '', taken: ''},
  {code: 'SCJP 5', title: 'Sun Certified Java Programmer 5 ', summary: '', taken: ''}
]

@Component({
  selector: 'app-certs-edu',
  templateUrl: './certs-edu.component.html',
  styleUrls: ['./certs-edu.component.less']
})
export class CertsEduComponent implements OnInit {

  displayedColumns: string[] = ['code', 'title', 'summary', 'taken'];
  dataSource = CERTIFICATIONS;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../experiences/experiences.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {

  @Input()
  data: Project | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

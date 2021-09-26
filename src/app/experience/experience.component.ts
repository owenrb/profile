import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../experiences/experiences.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  @Input()
  data: Experience | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

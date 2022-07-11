import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Высшее образование'
title1 = 'Казахский педагогический университет имени Абая, Алматы'
text = 'Переводческое дело, Бакалавр гуманитарных знаний.'
}

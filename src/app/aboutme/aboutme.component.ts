import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Обо мне"
 aboutMe = 'Опытный пользователь ПК, ответственный, пунктуальный, порядочный, исполнительный, имею организаторские способности, коммуникабелен, стрессоустойчив, могу работать как один так и в команде.'
}

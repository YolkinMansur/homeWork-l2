import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  citizenship = 'Гражданство: Казахстан'
  placeOfLiving = 'Место проживания: Алматы'
 male = 'Пол: Мужчина'
  dateOfBirth = 'Возраст: 30 лет'
  dateOfBirth2 = 'Родился: 12 сентября 1991'
  contacts = '+7 (702) 228-83-38'
  email = 'yolkinmansur@gmail.com'
  github = 'https://github.com/YolkinMansur'
}

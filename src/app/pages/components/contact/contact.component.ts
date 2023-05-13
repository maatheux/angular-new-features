import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form = this.formBuilder.group({
    email: ['teste@email.com'],
    password: [''],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.form.value.email);

  }

}

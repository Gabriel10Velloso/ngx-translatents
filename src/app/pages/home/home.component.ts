import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email = 'gabriel@teste.com'
  a = 1;
  b = 2;
  constructor(private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }

}

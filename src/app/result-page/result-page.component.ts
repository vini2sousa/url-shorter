
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [],
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private router: Router, private urlService: UrlService) {}

  exibeURL() {
    const urlFinal = this.urlService.getUrl();
    const divOutput = document.getElementById('UserOutput') as HTMLDivElement;
    divOutput.innerHTML = `<a href="${urlFinal}" target="_blank">${urlFinal}</a>`;
    
  }

  ngOnInit() {
    this.exibeURL();
  }

  backHome(){
    this.router.navigate(['/']);
}
}
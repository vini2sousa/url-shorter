import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private router: Router, private urlService: UrlService) {}
  

  async encurtarURL(): Promise<void> {
    const InputUsuario = document.getElementById('UserInput') as HTMLInputElement;
    const usuarioURL = InputUsuario.value;
 

    const headers = {
      'api-key': 'aQc1K1cYZ1BMWCLpr6uaVvSV0p7nzw72HUqdDPOgJJhN6',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const options = {
      url: usuarioURL
    };

    try {
      const response = await fetch("https://shrtlnk.dev/api/v2/link", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(options)
      });
      new URL(usuarioURL);
      const data = await response.json();
      const urlFinal = data.shrtlnk;
  
      this.urlService.setUrl(urlFinal);
        
      this.router.navigate(['/resultPage']);
      
    } catch (error) {
      alert('Erro ao encurtar! URL inválida.');
    }

  }
}

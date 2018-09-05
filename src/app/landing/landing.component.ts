import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})


export class LandingComponent implements OnInit {
  searchTerm = '';
  public data = this.route.snapshot.data.data;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  onChange() {
    this.apiService.getData(environment.apiUrl, this.searchTerm).subscribe((resp) => {
      this.data = resp;
    });
  }

  readBook(url) {
    console.log(url)
    window.open(url, '_blank');
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss']
})
export class OfflineComponent implements OnInit {

  searchTerm = '';
  public data = this.route.snapshot.data.data;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  onChange() {
    if (!this.searchTerm) {
      this.apiService.getData(environment.apiUrl, 'Progressive Web Apps').subscribe((resp) => {
        this.data = resp;
      });
    } else {
      this.apiService.getData(environment.apiUrl, this.searchTerm).subscribe((resp) => {
        this.data = resp;
      });
    }

  }

  readBook(url) {
    window.open(url, '_blank');
  }
}

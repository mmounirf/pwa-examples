import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})


export class LandingComponent implements OnInit {
  private data = this.route.snapshot.data.data;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  onChange(event) {
    console.log(event);
    this.apiService.getData(environment.apiUrl + `&text=${event}`).subscribe((resp) => {
      this.data = resp;
    });
  }

}

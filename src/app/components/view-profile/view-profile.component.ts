import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  id!: number;
  clientmain: Client = {
    id: 0,
    name: '',
    lastname: '',
    email: '',
    numberPhone : '',
    Dni : '',
  };

  constructor(
    private clientService: ClientService,
    private activedrouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getId();
    this.loadClientsesion();
  }
  getId() {
    this.id = Number(localStorage.getItem("client"));
  }
  loadClientsesion() {

    this.clientService.getClient(this.id).subscribe({
      next: (data) => {
        this.clientmain = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

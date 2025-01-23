import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBadge, IonItem, IonLabel } from '@ionic/angular/standalone';
import { IMovie } from 'src/app/interfaces/imovie';
import { MoviesManagerService } from 'src/app/services/movies-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonButtons, CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBadge, IonItem, IonLabel]
})
export class HomePage implements OnInit {
  public peliculas: IMovie[] | undefined;
  public peliculasManager = inject(MoviesManagerService);

  constructor() { }

  ngOnInit() {
    this.peliculas = this.peliculasManager.getMovies();
  }

}

import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { VideoGameService } from '../service/video-game.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
  videoGameArray: IContent[];

  constructor(private videoGameService: VideoGameService) {
    this.videoGameArray = [];
  }

  ngOnInit(): void {
    this.videoGameService.getContent().subscribe((videoGames: IContent[]) => {
      this.videoGameArray = videoGames;
    });
  }
}

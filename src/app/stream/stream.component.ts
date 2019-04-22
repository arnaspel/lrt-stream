import { Component, OnInit } from '@angular/core';
import { StreamService } from './stream.service';



// we declare our global RadiantMP function
declare const RadiantMP: any;

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})

export class StreamComponent implements OnInit {
  title: string = 'Tour of Heroes with Radiant Media Player';
  constructor( public streamService: StreamService) {}

  // rmp variables
  rmp: any;
  globalRmpSettings: any = {
    licenseKey: 'Kl8lb2lnMzA3PWRza2QyeWVpP3JvbTVkYXNpczMwZGIwQSVfKg==',
    delayToFade: 3000,
    autoplay : true,
    autoHeightMode: true,
    pathToRmpFiles: 'assets/radiantmediaplayer-4.3.8',
    poster: 'https://www.lrt.lt/images/logo/LTV1.jpg',
    bitrates: {
      hls: ''
    }
  };
  elementID: string = 'rmpPlayer';

    ngOnInit(): void {
      this.streamService.getStream()
        .subscribe((streamUrl: string) => {
          this.globalRmpSettings.bitrates.hls = streamUrl;
          this.rmp = new RadiantMP(this.elementID);
          this.rmp.init(this.globalRmpSettings);
      });
    }







}

import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit{

  @Input() mediaItems: any = [];
  @Input() title: String = '';

  safeVideoUrl!: SafeResourceUrl;
  safeVideoUrl1!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){
    
  }

  ngOnInit(): void {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mediaItems[5].url);
    this.safeVideoUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.mediaItems[6].url);
  }
}

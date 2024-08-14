import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  playVideo(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.play();
  }

  onMouseEnter(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    if (video.paused) {
      video.play();
    }
  }

  onClick(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    if (video.paused) {
      video.play();
    }
  }

  @ViewChild('videoElement1') videoElement1!: ElementRef<HTMLVideoElement>;
  playVideo1(): void {
    const video: HTMLVideoElement = this.videoElement1.nativeElement;
    video.play();
  }

  onMouseEnter1(): void {
    const video: HTMLVideoElement = this.videoElement1.nativeElement;
    if (video.paused) {
      video.play();
    }
  }

  onClick1(): void {
    const video: HTMLVideoElement = this.videoElement1.nativeElement;
    if (video.paused) {
      video.play();
    }
  }
}

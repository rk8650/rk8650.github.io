import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-thumbnails',
  templateUrl: './picture-thumbnails.component.html',
  styleUrls: ['./picture-thumbnails.component.scss']
})
export class PictureThumbnailsComponent implements OnInit {

  picturesList = [{'src': '', 'h': '', 'w': ''}, {'src': '', 'h': '', 'w': ''}, {'src': '', 'h': '', 'w': ''},
  {'src': '', 'h': '', 'w': ''}, {'src': '', 'h': '', 'w': ''}, {'src': '', 'h': '', 'w': ''},{'src': '', 'h': '', 'w': ''},
  {'src': '', 'h': '', 'w': ''}, {'src': '', 'h': '', 'w': ''}, {'src': '', 'h': '', 'w': ''}, {'src': '', 'h': '', 'w': ''},
  {'src': '', 'h': '', 'w': ''}];
  showPictureInDetail: boolean = false;
  
  constructor() {}
  
  
  ngOnInit(): void {
    // $("#mygallery").justifiedGallery();
    // var geometry = justifiedLayout([0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2, 2.1])
    // var r
  }

  setShowFlag(e: any){
    if(e == 'true'){
      this.showPictureInDetail = false;
    }
    
  }

}

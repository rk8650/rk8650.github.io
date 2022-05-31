import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture-modal',
  templateUrl: './picture-modal.component.html',
  styleUrls: ['./picture-modal.component.scss']
})
export class PictureModalComponent implements OnInit {
  showContent: boolean = true;
  @Output() close = new EventEmitter<string>();
  image_name = 10;

  constructor() { }

  ngOnInit(): void {
    this.image_name = Math.floor(Math.random() * 27);
  }
  closeModal(){
    this.close.emit('true');
  }
}

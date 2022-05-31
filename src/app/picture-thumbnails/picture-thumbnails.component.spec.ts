import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureThumbnailsComponent } from './picture-thumbnails.component';

describe('PictureThumbnailsComponent', () => {
  let component: PictureThumbnailsComponent;
  let fixture: ComponentFixture<PictureThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShellComponent } from './post-shell.component';

describe('PostShellComponent', () => {
  let component: PostShellComponent;
  let fixture: ComponentFixture<PostShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

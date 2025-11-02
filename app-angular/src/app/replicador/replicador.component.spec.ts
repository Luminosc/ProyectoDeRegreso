import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicadorComponent } from './replicador.component';

describe('ReplicadorComponent', () => {
  let component: ReplicadorComponent;
  let fixture: ComponentFixture<ReplicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplicadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

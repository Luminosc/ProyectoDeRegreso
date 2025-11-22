import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteForComponent } from './componente-for.component';

describe('ComponenteForComponent', () => {
  let component: ComponenteForComponent;
  let fixture: ComponentFixture<ComponenteForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

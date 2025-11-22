import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteIfComponent } from './componente-if.component';

describe('ComponenteIfComponent', () => {
  let component: ComponenteIfComponent;
  let fixture: ComponentFixture<ComponenteIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

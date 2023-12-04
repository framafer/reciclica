import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      providers: [Router],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    })

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('Should go to login page after load', () =>{
    
    spyOn(router, 'navigate');
    
    component.ngOnInit();
    
    expect(router.navigate).toHaveBeenCalledOnceWith(['/login'])
});
})
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MenuAnimationSettingsModel, ToolbarComponent, MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopmenuComponent implements OnInit {
  ngOnInit(): void {
  }
  @ViewChild('toolbar')
  public tbObj: ToolbarComponent;

  constructor(private authService:AuthService) {
    setTimeout(() => {
      this.authService.authenticateUser('devadmin','india123');
    }, 5000);
  }

  // Menu items definition 


  public dataSource: { [key: string]: Object }[] = [
    {
      category: 'LCD Buyback'
    },
    {
      category: 'Blog'
    },
    {
      category: 'Support',

    },
    { category: 'My Account' },
    {
      category: 'Login',
      options: [
        {
          id: 'about',
          about: {
            value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
          }
        }
      ]
    }
  ];

  // Menu fields definition
  public menuFields: object = {
    text: ['category', 'value'],
    children: ['options']
  };

  public menuTemplate: any = '#shoppingMenu';

  public onCreated(): void {
    this.tbObj.refreshOverflow();
    //removeClass([this.tbObj.element.querySelector('.e-shopping-cart')], 'e-icons');
  }
}

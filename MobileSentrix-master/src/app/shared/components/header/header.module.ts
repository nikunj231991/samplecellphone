import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TopbarSocialMediaComponent } from './topbar-social-media/topbar-social-media.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { GlobalsearchwithlogoComponent } from './globalsearchwithlogo/globalsearchwithlogo.component';
import { MenuAllModule, ToolbarAllModule } from '@syncfusion/ej2-angular-navigations';
import { CheckBoxModule, RadioButtonModule, SwitchModule,ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    MenuAllModule,
    ToolbarAllModule,
    ButtonModule,
    CheckBoxModule, RadioButtonModule, SwitchModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    TopbarSocialMediaComponent,
    TopmenuComponent,
    GlobalsearchwithlogoComponent
],
exports: [
  HeaderComponent,
  TopbarSocialMediaComponent
]
})
export class HeaderModule { }

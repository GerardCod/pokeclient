import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [FooterComponent, HeaderComponent, SearchComponent]
})
export class SharedModule { }

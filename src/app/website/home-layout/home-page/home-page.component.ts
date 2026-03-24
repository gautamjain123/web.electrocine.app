import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ProductsComponent } from '../../pages/products/products.component';
import { ProductCategoryComponent } from '../../components/product-category/product-category.component';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroSectionComponent,AboutUsComponent,ProductCategoryComponent,ContactUsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}

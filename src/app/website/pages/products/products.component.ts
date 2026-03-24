import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

/* ================= INTERFACES ================= */
interface Product {
  name: string;
  code: string;
  price: number | string;

  lumens?: number;
  size?: string;
  height?: string;
}

interface SubCategory {
  subCategory: string;
  products: Product[];
}

interface Category {
  category: string;
  items: SubCategory[];
}

/* ================= COMPONENT ================= */
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  selectedCategory = 'All';
  selectedSubCategory = 'All';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
      }
    });
  }
  PRODUCTS: Category[] = [
    {
      category: 'Indoor Lighting',
      items: [
        {
          subCategory: 'Slim Recess Panel Lights',
          products: [
            { name: '6W Panel', code: 'EIL RPL 001', lumens: 600, size: '120 Dia', price: 1080 },
            { name: '9W Panel', code: 'EIL RPL 002', lumens: 900, size: '120 Dia', price: 1295 },
            { name: '12W Panel', code: 'EIL RPL 003', lumens: 1200, size: '170 Dia', price: 1390 },
            { name: '15W Panel', code: 'EIL RPL 004', lumens: 1500, size: '170 Dia', price: 1695 },
            { name: '18W Panel', code: 'EIL RPL 005', lumens: 1800, size: '220 Dia', price: 1885 }
          ]
        },
        {
          subCategory: 'Surface Panel Lights',
          products: [
            { name: '6W Surface Panel', code: 'EIL DVA SPL 01', lumens: 600, size: '115x115', price: 1290 },
            { name: '9W Surface Panel', code: 'EIL DVA SPL 02', lumens: 900, size: '115x115', price: 1435 },
            { name: '12W Surface Panel', code: 'EIL DVA SPL 03', lumens: 1200, size: '170x170', price: 1690 }
          ]
        },
        {
          subCategory: 'Tube & Mirror Lights',
          products: [
            { name: '18W T8 Tube', code: 'EIL TB 01', lumens: 1800, size: '1190mm', price: 1762 },
            { name: '24W T8 Tube', code: 'EIL TB 02', lumens: 2400, size: '1190mm', price: 1975 },
            { name: 'Mirror Light 18W', code: 'EIL ML 02', lumens: 1800, size: '600x75', price: 4130 }
          ]
        }
      ]
    },

    {
      category: 'Outdoor Lighting',
      items: [
        {
          subCategory: 'Flood Lights',
          products: [
            { name: '30W Flood Light', code: 'EIL FL 01', lumens: 3000, price: 6600 },
            { name: '50W Flood Light', code: 'EIL FL 02A', lumens: 5000, price: 7180 },
            { name: '100W Flood Light', code: 'EIL FL 003', lumens: 10000, price: 16650 },
            { name: '200W Flood Light', code: 'EIL FL 08', lumens: 20000, price: 34920 },
            { name: '500W Flood Light', code: 'EIL FL 15', lumens: 50000, price: 'P.O.R' }
          ]
        },
        {
          subCategory: 'Street Lights',
          products: [
            { name: '15W Street Light', code: 'EIL SLF 03', lumens: 1500, price: 5915 },
            { name: '30W Street Light', code: 'EIL SLF 04A', lumens: 3000, price: 8120 },
            { name: '60W Street Light', code: 'EIL SLF 07', lumens: 6000, price: 11450 },
            { name: '120W Street Light', code: 'EIL SLF 14', lumens: 12000, price: 17215 },
            { name: '250W Street Light', code: 'EIL SLF 20', lumens: 25000, price: 32975 }
          ]
        },
        {
          subCategory: 'Landscape Lights',
          products: [
            { name: 'Foot Light', code: 'EIL VF-3', price: 1960 },
            { name: 'Spike Light', code: 'EIL VS-3', price: '2625 - 6450' },
            { name: 'Step Light', code: 'EIL ST-L', price: '3800 - 5200' }
          ]
        },
        {
          subCategory: 'Garden Bollards',
          products: [
            { name: '6W Bollard', code: 'EIL BL-01', height: '800mm', price: 6800 },
            { name: '12W Bollard', code: 'EIL BL-03', height: '800mm', price: 7200 }
          ]
        }
      ]
    },

    {
      category: 'Industrial Lighting',
      items: [
        {
          subCategory: 'Highbay Lights',
          products: [
            { name: '60W Highbay', code: 'EIL HBY01', lumens: 6000, price: 17368 },
            { name: '120W Highbay', code: 'EIL HBY03', lumens: 12000, price: 31750 },
            { name: '200W Highbay', code: 'EIL HBY05', lumens: 20000, price: 58800 },
            { name: '250W Highbay', code: 'EIL HBY06', lumens: 25000, price: 69750 }
          ]
        }
      ]
    }
  ];

  get categories(): string[] {
    return ['All', ...this.PRODUCTS.map(c => c.category)];
  }

  /* SUBCATEGORY LIST */
  get subCategories(): string[] {
    let subs: string[] = [];

    this.PRODUCTS.forEach(cat => {
      if (this.selectedCategory === 'All' || cat.category === this.selectedCategory) {
        cat.items.forEach(sub => subs.push(sub.subCategory));
      }
    });

    return ['All', ...subs];
  }

  /* FILTERED DATA */
  get filteredProducts(): Category[] {
    return this.PRODUCTS
      .filter(cat => this.selectedCategory === 'All' || cat.category === this.selectedCategory)
      .map(cat => ({
        ...cat,
        items: cat.items.filter(sub =>
          this.selectedSubCategory === 'All' || sub.subCategory === this.selectedSubCategory
        )
      }));
  }
}
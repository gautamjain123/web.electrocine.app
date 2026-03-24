import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./website/home-layout/home-layout.component').then(m => m.HomeLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./website/home-layout/home-page/home-page.component').then(m => m.HomePageComponent)
            },
            {
                path: 'products',
                loadComponent: () =>
                    import('./website/pages/products/products.component').then(m => m.ProductsComponent)
            }
        ]
    },
];
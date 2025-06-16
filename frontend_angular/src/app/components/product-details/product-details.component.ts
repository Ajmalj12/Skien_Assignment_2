import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      if (productId) {
        this.loadProduct(productId);
      }
    });
  }

  loadProduct(id: number): void {
    this.loading = true;
    this.error = false;
    
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        console.log('Product loaded:', product);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
  
  handleImageError(event: any): void {
    console.error('Image failed to load:', event.target.src);
    // Fallback to a placeholder image
    event.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
  }
}
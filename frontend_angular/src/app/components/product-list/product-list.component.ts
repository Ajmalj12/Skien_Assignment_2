
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;
  Math = Math; // Make Math available in the template

  search = '';
  category = '';
  minPrice = '';
  maxPrice = '';
  page = 1;
  pageSize = 8; // Increased page size for better grid display

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const filters = {
      search: this.search,
      category: this.category,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      page: this.page,
      pageSize: this.pageSize,
    };

    this.productService.getProducts(filters).subscribe((res) => {
      this.products = res.products;
      this.total = res.total;
      console.log('Products loaded:', this.products);
    });
  }
  
  handleImageError(event: any): void {
    console.error('Image failed to load:', event.target.src);
    // Fallback to a placeholder image
    event.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
  }

  nextPage(): void {
    this.page++;
    this.loadProducts();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadProducts();
    }
  }
  
  changePageSize(): void {
    // Reset to first page when changing page size
    this.page = 1;
    this.loadProducts();
  }

  resetFilters(): void {
    this.search = '';
    this.category = '';
    this.minPrice = '';
    this.maxPrice = '';
    this.page = 1;
    this.loadProducts();
  }
}

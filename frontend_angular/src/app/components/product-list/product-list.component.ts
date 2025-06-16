
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;

  search = '';
  category = '';
  minPrice = '';
  maxPrice = '';
  page = 1;
  pageSize = 5;
  
  // Available categories for dropdown
  categories: string[] = ['Electronics', 'Clothing', 'Footwear'];
  
  // Make Math available in the template
  Math = Math;

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
    });
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

  resetFilters(): void {
    this.search = '';
    this.category = '';
    this.minPrice = '';
    this.maxPrice = '';
    this.page = 1;
    this.loadProducts();
  }

  handleImageError(event: any): void {
    // Replace broken image with placeholder
    event.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
  }

  onPageSizeChange(): void {
    // Reset to first page when changing page size
    this.page = 1;
    this.loadProducts();
  }
}

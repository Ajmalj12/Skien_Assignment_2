import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductListComponent,
    ProductDetailsComponent,
    RouterModule
  ],
  template: `
    <header class="main-header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>Skien_Assignment_2</h1>
          </div>
        </div>
      </div>
    </header>
    <main class="main-content">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styles: [`
    .main-header {
      background-color: #ffffff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }

    .logo h1 {
      color: #3498db;
      margin: 0;
      font-size: 1.8rem;
    }

    .main-nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .main-nav li {
      margin: 0 1rem;
    }

    .main-nav a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 0;
      position: relative;
      transition: color 0.3s ease;
    }

    .main-nav a:hover, .main-nav a.active {
      color: #3498db;
    }

    .main-nav a.active:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #3498db;
    }

    .header-actions {
      display: flex;
      gap: 1rem;
    }

    .btn-icon {
      background: none;
      border: none;
      font-size: 1.2rem;
      color: #555;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .btn-icon:hover {
      background-color: #f0f0f0;
      color: #3498db;
    }

    .main-content {
      padding: 2rem 0;
      min-height: calc(100vh - 200px);
    }

    .page-header {
      margin-bottom: 2rem;
      text-align: center;
    }

    .page-header h2 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .page-header p {
      color: #7f8c8d;
      font-size: 1.1rem;
    }

    .main-footer {
      background-color: #2c3e50;
      color: #ecf0f1;
      padding: 3rem 0 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      color: #3498db;
      margin-bottom: 1.2rem;
      font-size: 1.3rem;
    }

    .footer-section p {
      margin-bottom: 0.8rem;
      color: #bdc3c7;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section ul li a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #3498db;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 1.5rem;
      border-top: 1px solid #34495e;
      color: #95a5a6;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        padding: 1rem 0;
      }

      .main-nav {
        margin: 1rem 0;
      }

      .main-nav ul {
        flex-wrap: wrap;
        justify-content: center;
      }

      .main-nav li {
        margin: 0.5rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class App {}

import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  categories: Category[] = [
    { id: 1, name: 'Aventura', description: 'lorem aventura' },
    { id: 2, name: 'Deporte', description: 'lorem deporte' },
    { id: 3, name: 'Gastronomia', description: 'lorem gastronomia' },
    { id: 4, name: 'Hoteles', description: 'lorem hoteles' },
    { id: 5, name: 'Tecnología', description: 'lorem tech' },
    { id: 6, name: 'Viajes', description: 'lorem viajes' },
  ];

  selectedCategory: Category = new Category();

  addOrEdit() {
    if (this.selectedCategory.id === 0) {
      this.selectedCategory.id = this.categories.length + 1;
      this.categories.push(this.selectedCategory);
    }

    this.selectedCategory = new Category();
  }

  delete(categoryId) {
    if (confirm('Estas seguro de eliminar?')) {
      this.categories = this.categories.filter((x) => x.id !== categoryId);
      this.selectedCategory = new Category();
    }
  }

  openForEdit(category: Category) {
    this.selectedCategory = category;
  }

  ngOnInit(): void {}
}

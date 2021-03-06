import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Category } from 'app/models/category.model';
import { environment } from '../../environments/environment';

@Injectable()
export class CategoryService {

    constructor(

        private http: HttpClient

    ) { }

    // Get variable amount of posts...
    getCategory(name: string) {

        let headers = new HttpHeaders();

        headers.append('Content-Type', 'application/json');

        return this.http.get<Category>(

            `${environment.apiUrl}/categories/post`,

            {

                headers: headers,

                params: new HttpParams().set('name', name)

            }

        );

    }

    // Get all posts
    getCategories() {

        let headers = new HttpHeaders();

        headers.append('Content-Type', 'application/json');

        return this.http.get<Category[]>(

            `${environment.apiUrl}/categories/all`,

            { headers: headers }

        );

    }

}
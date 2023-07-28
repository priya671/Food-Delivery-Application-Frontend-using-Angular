import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/class/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurantdata-edit',
  templateUrl: './restaurantdata-edit.component.html',
  styleUrls: ['./restaurantdata-edit.component.css']
})
export class RestaurantdataEditComponent {

  id: number;
  rest: Restaurant;
  selectedImage: File | null = null;
  

  constructor(
    private router: Router,
    private restService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.rest = new Restaurant(this.id, '', '', '', '', '', '', 0, '', '',false);

    if (this.id !== -1) {
      this.restService.getrestById(this.id).subscribe(
        response => this.rest = response
      );
    }
  }

  // async updateRest() {
  //   if (this.selectedImage) {
  //     const base64String = await this.toBase64(this.selectedImage);
  //     // Include the Base64 image data in the request body
  //     this.rest.pic = base64String;
  //     console.log(base64String);
  //   }

  //   this.restService.updaterestById(this.id, this.rest).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // toBase64(file: File): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });
  // }

  // onImageChange(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   if (inputElement.files && inputElement.files.length > 0) {
  //     this.selectedImage = inputElement.files[0];
  //   }
  // }
  
  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedImage = inputElement.files[0];
      this.showImagePreview();
    }
  }
  
  showImagePreview() {
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedImage);
      reader.onload = () => {
        this.rest.pic = reader.result as string;
      };
    } else {
      this.rest.pic = "null";
    }
  }
  
  updateRest() {
    this.restService.updaterestById(this.id, this.rest).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['restaurantadmin']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchProductsService } from 'src/app/services/fetch-products.service';
import { Data } from 'src/app/classes/Data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product:Data;

  constructor(private activatedRoute:ActivatedRoute,
    private fetchProductDetails:FetchProductsService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.fetchProductDetails.getProductDetails(id).subscribe(
      resultantProduct=>{
        console.log(resultantProduct);
        this.product = resultantProduct;
        console.log(this.product);

      }
    );
  }

}

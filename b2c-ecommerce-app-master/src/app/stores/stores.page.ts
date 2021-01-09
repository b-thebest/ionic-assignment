import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/classes/Store';
import { FetchStoresService } from 'src/app/services/fetch-stores.service';
 

@Component({
  selector: 'app-storeslist',
  templateUrl: './storeslist.page.html',
  styleUrls: ['./storeslist.page.scss'],
})
export class StoreslistPage implements OnInit {



  stores:Store;
  constructor(private fetchStoreService:FetchStoresService) { }

  ngOnInit():void {
    this.fetchStoreService.getStores().subscribe(
      data=>{
        console.log(data); 
        this.stores=data;
        console.log(this.stores);
        for(let store of this.stores.data){
          console.log(store.name);
          console.log(store.address);

        }
      }
    );
    
  }
}

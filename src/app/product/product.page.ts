import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  titleName: string;
  productName: string;
  buttonName: string;

  constructor( public alertController: AlertController ) { }

  ngOnInit() {
    this.titleName = 'รายการอาหาร';
    this.productName = 'ข้าวกะเพรา';
    this.buttonName = 'ราคา';
    
  } 
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'ข้าวกะเพรา',
      subHeader: 'ราคาสินค้า',
      message: 'ราคา 50 บาท',
      buttons: ['OK']
    });
    await alert.present();

  }
  async cancelAlert(){
    const alert = await this.alertController.create({
      message: 'ยกเลิกรายการอาหาร',
      buttons: ['OK']

    });
    await alert.present();
  }

}

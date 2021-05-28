import { CasinoItems } from './../../model/CasinoItem';

import {
  AfterContentInit,
  AfterViewInit,
  Input,
  Component,
  ComponentFactoryResolver,
  OnInit,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
// import {}
import * as $ from 'jquery';
import { data } from 'jquery';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnChanges {
  constructor(private dbImage: AngularFireStorage) {
    this.dbImageApi = dbImage;
  }
  dbImageApi: any;
  bgColor = 'red';

  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log('id: ' + this.CasinoItems!.id);
    console.log('location name : ' + this.CasinoItems!.LocationName);
    console.log('web name:' + this.CasinoItems!.WebName);
    console.log('support name : ' + this.CasinoItems!.SupportName);
    console.log('game count :' + this.CasinoItems!.GameCount);
    console.log('payment count :' + this.CasinoItems!.PaymentCount);
    console.log('license count:' + this.CasinoItems!.LicenseCount);
    console.log('vpn : ' + this.CasinoItems!.VpnStatus);
    console.log('prefect point :' + this.CasinoItems!.PerfectPoint);
    console.log('image location path : ' + this.CasinoItems!.ImageLocationPath);
    console.log('status point' + this.CasinoItems!.StatusPoint);
    console.log('casino type ' + this.CasinoItems!.Type);

    console.log('check status area' + this.CasinoItems!.CheckStatusLocation);
    console.log('check status web' + this.CasinoItems!.CheckStatusWeb);
    console.log(
      'check status customer' + this.CasinoItems!.CheckStatusCustomer
    );
    console.log(
      'check status livechat' + this.CasinoItems!.CheckStatusLivechat
    );

    console.log('');
    console.log('');
    console.log('');
    this.getlink(this.dbImageApi, this.CasinoItems.ImageLocationPath!);

    // check location
    if (this.CasinoItems.LocationName == 'VietNam') {
      this.getlinkicon(this.dbImageApi, '1.png');
    }
    if (this.CasinoItems.LocationName == 'English') {
      this.getlinkicon(this.dbImageApi, '2.png');
    }
    if (this.CasinoItems.LocationName == 'EngLish') {
      this.getlinkicon(this.dbImageApi, '3.png');
    }
  }
  detailStatus = true;
  ShowDetailItem() {
    this.detailStatus = !this.detailStatus;
  }

  @Input() CasinoItems!: CasinoItems;

  title = 'casino-project';
  linkimg = '';
  img_url = '';
  link_url: any;
  link_icon: any;

  getlink(dbImage: AngularFireStorage, img_url: string) {
    var link = `gs://testfirebase-dbead.appspot.com/image/${img_url}`;
    this.link_url = dbImage.storage
      .refFromURL(link)
      .getDownloadURL()
      .then((url) => {
        this.linkimg = url;
        console.log('link img :' + img_url);
        console.log(this.linkimg);
        this.getColorWithimg(this.linkimg);
        console.log('');
      });
  }
  getlinkicon(dbImage: AngularFireStorage, img_url: string) {
    var link = `gs://testfirebase-dbead.appspot.com/LocationIcon/${img_url}`;
    this.link_icon = dbImage.storage
      .refFromURL(link)
      .getDownloadURL()
      .then((url) => {
        this.link_icon = url;
        console.log('Binh: ',this.link_icon, this.CasinoItems.Name);
        // this.getColorWithimg(this.link_icon);
        return url;
      });
  }
  getColorWithimg(link: string): void {
    // var canvas = document.getElementById("canvas");
    const canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    var image = new Image();

    image.onload = () => {
      this.bgColor = this.getImageColorView(image, ctx, canvas);
      // console.log('Bg color: ', this.bgColor, this.CasinoItems.Name);
    };
    image.crossOrigin = 'anonymous';
    image.src = link;
    // this.getImageColorView(output);
  }

  getImageColorView(image: any, ctx: any, canvas: any): string {
    let stringImg = '';
    ctx!.drawImage(image, 0, 0);

    // desaturation colors
    var imgData = ctx!.getImageData(10, 10, canvas.width, canvas.height);

    var data = imgData.data;
    // console.log('img color');
    // console.log(data[0]);
    // console.log(data[1]);
    // console.log(data[2]);
    // console.log(data[3]);
    // console.log('--------');

    // for (var i = 0; i < data.length; i += 4) {
    //     var grayscale = 0.33 * data[i] + 0.5 * data[i + 1] + 0.15 * data[i + 2];
    //     data[i] = grayscale;
    //     data[i + 1] = grayscale;
    //     data[i + 2] = grayscale;
    //      rgba(20, 24, 53, 1)
    // }
    stringImg =
      'rgb(' + data[0] + ',' + data[1] + ',' + data[2] +')';
    return stringImg;
  }

}

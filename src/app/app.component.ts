import { CasinoServiceService } from './Service/casino-service.service';
import { CasinoItems } from './model/CasinoItem';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  p: number = 1;
  title = 'Casino2';
  constructor(public CasinoServiceService: CasinoServiceService) {
    console.log("component work !");
    this.CasinoServiceService.getListCasino().subscribe((data) => {
      console.log(data);
      this.Casinodata = data;
      this.LoadData();
      this.itemsPageCount=5;
      this.CountOfAll = this.ListDataCasino.length;
    });
  }
  checkstyle1 = true;
  checkstyle2 = false;
  checkstyle3 = false;
  checkstyle4 = false;

  ToogleClickMenuButton1() {
    this.checkstyle1 = true;
    this.checkstyle2 = false;
    this.checkstyle3 = false;
    this.checkstyle4 = false;
    console.log(this.ListDataCasino);
    this.ListDataCasino = this.CasinodataBasic.filter((obj:any) => obj.Type == 1);

  }
  ToogleClickMenuButton2() {
    this.checkstyle2 = true;
    this.checkstyle1 = false;
    this.checkstyle3 = false;
    this.checkstyle4 = false;
    this.ListDataCasino = this.CasinodataBasic.filter((obj:any) => obj.Type == 2);

    console.log(this.ListDataCasino);
  }
  ToogleClickMenuButton3() {
    this.checkstyle3 = true;
    this.checkstyle2 = false;
    this.checkstyle1 = false;
    this.checkstyle4 = false;
    // this.ListDataCasino= this.ListDataCasino.

    this.ListDataCasino = this.CasinodataBasic.filter((obj:any) => obj.Type == 3);

    console.log(this.ListDataCasino);
  }

  ToogleClickMenuButton4() {
    this.checkstyle4 = true;
    this.checkstyle3 = false;
    this.checkstyle2 = false;
    this.checkstyle1 = false;
    this.ListDataCasino = this.CasinodataBasic;
    console.log(this.ListDataCasino);
  }
  statusParagraph = false;
  isClicked = false;
  itemsPageCount? :number;
  toggleStatus() {
    this.statusParagraph = !this.statusParagraph;
    this.isClicked = !this.isClicked;
    $('.icon-toggle').toggleClass('rotated');
  }

  Casinodata: any;
  CasinodataBasic : any;
  //status hide show item with filter
  StatusFilterItem = true;
  //render json as list
  ListDataCasino: CasinoItems[] = [];
  LoadData() {
    for (let item in this.Casinodata) {
      this.ListDataCasino.push(this.Casinodata[item]);
    }
    this.CasinodataBasic = this.ListDataCasino;
  }
  FilterCount(filter: number) {
    var count1 = 0;
    for (let item in this.CasinodataBasic) {
      if (this.CasinodataBasic[item].Type == filter) {
        count1++;
      }
    }
    return count1;
  }

  CountOfAll = 0;
  StatusSideBar = true;
  ShowMoreItem()
  {
    if(this.itemsPageCount! > this.ListDataCasino.length)
    {
      alert('da hien het so ban ghi !');
    }
    else
    this.itemsPageCount = this.itemsPageCount!+10;
    // if(this.itemsPageCount+10 > this.ListDataCasino.length)
    // {
    //   alert('da hien het so ban ghi !');
    // }
  }
  getIndexRecord(num:string)
  {
    var output = Number.parseInt(num);
    if(output>this.ListDataCasino.length)
    {
      return this.ListDataCasino.length
    }
    else
    {
      return output;
    }
  }
  getIndexStart(num:number)
  {
    if(num> this.ListDataCasino.length)
    {
      return this.ListDataCasino.length;
    }
    else
    {
      return num;
    }
  }
  ngOnInit() {

  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-box-number',
  templateUrl: './box-number.component.html',
  styleUrls:['./box-number.component.css']
})
export class BoxNumberComponent implements OnInit {
  @ViewChild('2svg') icon2!:ElementRef
  @ViewChild('4svg') icon4!:ElementRef
  @ViewChild('6svg') icon6!:ElementRef
  @ViewChild('flower') flow!:ElementRef

  @ViewChild('2rec') rec2!:ElementRef
  @ViewChild('3rec') rec3!:ElementRef
  @ViewChild('4rec') rec4!:ElementRef
  @ViewChild('5rec') rec5!:ElementRef
  @ViewChild('6rec') rec6!:ElementRef

  @ViewChild('twoper') twoperr!:ElementRef


  val:any=''
  var1:number=6
  var2:number=6
  result:number=12
  Data:any[]=[]

  constructor() { }

  ngOnInit(): void {
   
  }

  sum(){
    this.Data=[]
    this.result=this.var1*this.var2;
    localStorage.setItem('resultPrice',JSON.stringify(this.result))
  }

  send(){
    var data = {val1:this.var1,val2:this.var2}
    this.Data.push(data)
    localStorage.setItem('dataUser',JSON.stringify(this.Data))
    console.log(this.Data)
    // this.Data=[]
  }

  display2person(){
    this.icon2.nativeElement.style.display='block'
    this.icon4.nativeElement.style.display='none'
    this.icon6.nativeElement.style.display='none'  
    
  }

  display4person(){
    this.icon2.nativeElement.style.display='none'
    this.icon4.nativeElement.style.display='block'
    this.icon6.nativeElement.style.display='none'
  }

  display6person(){
    this.icon2.nativeElement.style.display='none'
    this.icon4.nativeElement.style.display='none'
    this.icon6.nativeElement.style.display='block'
  }

  display2rec(){
    this.rec2.nativeElement.style.display='block'
    this.rec3.nativeElement.style.display='none'
    this.rec4.nativeElement.style.display='none'
    this.rec5.nativeElement.style.display='none'
    this.rec6.nativeElement.style.display='none'
  }

  display3rec(){
    this.rec2.nativeElement.style.display='none'
    this.rec3.nativeElement.style.display='block'
    this.rec4.nativeElement.style.display='none'
    this.rec5.nativeElement.style.display='none'
    this.rec6.nativeElement.style.display='none'
  }

  display4rec(){
    this.rec2.nativeElement.style.display='none'
    this.rec3.nativeElement.style.display='none'
    this.rec4.nativeElement.style.display='block'
    this.rec5.nativeElement.style.display='none'
    this.rec6.nativeElement.style.display='none'
  }

  display5rec(){
    this.rec2.nativeElement.style.display='none'
    this.rec3.nativeElement.style.display='none'
    this.rec4.nativeElement.style.display='none'
    this.rec5.nativeElement.style.display='block'
    this.rec6.nativeElement.style.display='none'
  }

  display6rec(){
    this.rec2.nativeElement.style.display='none'
    this.rec3.nativeElement.style.display='none'
    this.rec4.nativeElement.style.display='none'
    this.rec5.nativeElement.style.display='none'
    this.rec6.nativeElement.style.display='block'
  }




}

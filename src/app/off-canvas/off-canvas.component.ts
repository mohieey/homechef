import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css']
})
export class OffCanvasComponent implements OnInit {

 
  constructor(private router: Router) { }
  isShown: boolean = true;
  
  ngOnInit(): void {
    
  }
 
 
}

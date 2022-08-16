import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {


  // @Input()
  // _isShown : boolean = false;
  // private isShownChange: any;
  //
  // set isShown(val:boolean){
  //   this.isShownChange.emit(val);
  //   this._isShown = val;
  // }
  //
  // get isShown() {
  //   return this._isShown;
  // }
  // @Output()
  // correctChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  //  console.log(this.isShown);
  }
  // displayComments(){
  //   this.isShown = ! this.isShown;
  // }
}

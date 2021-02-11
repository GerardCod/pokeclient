import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search: EventEmitter<string>;
  group: FormGroup;

  constructor(private builder: FormBuilder) {
    this.search = new EventEmitter<string>();
    this.initForm();
  }
  
  ngOnInit(): void {
  }

  initForm(): void {
    this.group = this.builder.group({
      search: ['', Validators.required]
    });
  }

  emitSearch(): void {
    if (this.group.valid) {
      this.search.emit(this.group.get('search').value);
      this.group.markAsPristine();
    }    
  }
}

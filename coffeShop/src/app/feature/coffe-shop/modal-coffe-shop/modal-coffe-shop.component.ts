import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit, Input } from '@angular/core';
import {
  NgbActiveModal,
  NgbCalendar,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-coffe-shop',
  templateUrl: './modal-coffe-shop.component.html',
  styleUrls: ['./modal-coffe-shop.component.scss'],
})
export class ModalCoffeShopComponent implements OnInit {
  readonly faTimes: IconDefinition = faTimes;

  @Input() name: any;

  itemCoffeForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private calendar: NgbCalendar,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form();
  }

  form() {
    this.itemCoffeForm = this.formBuilder.group({
      nombre_producto: [''],
      referencia: [''],
      precio: [''],
      peso: [''],
      categoria: [''],
      stock: [''],
      fecha_creacion: [''],
    });
  }

  test() {
    console.log(this.itemCoffeForm.value);
  }

  closed() {
    this.activeModal.close();
  }
}

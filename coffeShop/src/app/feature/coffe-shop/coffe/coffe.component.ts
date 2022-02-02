import { PhpService } from './../../../core/services/conect-php/php.service';
import { ModalCoffeShopComponent } from './../modal-coffe-shop/modal-coffe-shop.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';
import {
  faPencilAlt,
  faPlusSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.scss'],
})
export class CoffeComponent implements OnInit {
  readonly faTrash: IconDefinition = faTrash;
  readonly faPencilAlt: IconDefinition = faPencilAlt;
  readonly faPlusSquare: IconDefinition = faPlusSquare;
  constructor(private modalService: NgbModal, public phpService: PhpService) {}

  ngOnInit() {
    this.getPhpService();
  }

  openModal() {
    const modalRef = this.modalService.open(ModalCoffeShopComponent, {
      centered: true,
    });
    modalRef.componentInstance.name = 'World';
  }

  getPhpService() {
    this.phpService.getAllProducts().subscribe((res) => {
      console.log(res);
    });
  }
}

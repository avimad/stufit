import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  constructor(private pdfService: PdfService) { }

  @ViewChild('general', { static: false }) general: ElementRef;
  ngOnInit() {
  }

}

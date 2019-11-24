import { Injectable, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  marginX = 0;
  marginY = 80;
  doc = new jsPDF('p', 'pt', 'a4', true);

  constructor() { }

  makePdf() {
    this.generalPdf();
    this.anthropometryPdf();
    this.doc.save('general.pdf');
  }

  footer() {
    this.doc.setFontStyle('normal');
    this.doc.setFontSize('12');
    this.doc.text(`Date  ................................`, 45, this.marginY + 680);
    this.doc.text(`Place ................................`, 45, this.marginY + 705);

    this.doc.text(`Doctor's Signature  ................................`, 350, this.marginY + 680);
    this.doc.text(`Doctor's Name        ................................`, 350, this.marginY + 705);

    this.doc.text(`© Copyright STUFIT Approach Pvt. Ltd.`, 180, this.marginY + 740);
    // this.doc.page++;
  }
  header() {
    const img = new Image();
    img.src = 'assets/img/logo.PNG';
    this.doc.addImage(img, 'PNG', 30, 20, 140, 90);
    this.doc.addImage(img, 'PNG', 200, this.marginY + 250, 400, 200, '', 'NONE', 35);
  }

  generalPdf() {

    this.header();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('30');
    this.doc.text('Child Record', 200, this.marginY + 40);

    this.doc.setFontSize('16');
    this.doc.text('(Fill In Capital Letters)', 210, this.marginY + 70);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('16');
    this.doc.text('Name', 45, this.marginY + 120);
    this.doc.text('StufitID', 45, this.marginY + 160);
    this.doc.text('Class', 45, this.marginY + 200);
    this.doc.text(`Mother's Name`, 45, this.marginY + 240);
    this.doc.text(`Father's Name`, 45, this.marginY + 280);
    this.doc.text(`Date Of Birth`, 45, this.marginY + 320);
    this.doc.text(`Blood Group`, 45, this.marginY + 360);
    this.doc.text(`Address`, 45, this.marginY + 400);
    this.doc.text(`Email Id`, 45, this.marginY + 460);
    this.doc.text(`Phone No.`, 45, this.marginY + 500);
    this.doc.text(`Name of Sibling(s) Studying in the school.`, 45, this.marginY + 540);

    this.footer();
    this.doc.addPage();

  }
  anthropometryPdf() {
    this.header();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('ANTHROPOMETRY - {17 Parameters}', 120, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Height:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text('5.5 Ft', 105, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Width:', 190, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text('5.5 Kg', 250, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('BMI:', 335, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text('14 Kg/m', 395, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Posture:', 45, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 105, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text('Blood Pressure:', 190, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text('107/70', 300, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text('Pulse Rate:', 45, this.marginY + 150);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 125, this.marginY + 150);

    this.doc.setFontStyle('bold');
    this.doc.text('Shoulder Range of Motion:', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 125, this.marginY + 190);




    this.footer();
  }





}

import { Injectable, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  marginX = 0;
  marginY = 80;
  doc = new jsPDF('p', 'pt', 'a4', true);

  constructor() {}

  makePdf() {
    this.generalPdf();
    this.anthropometryPdf();
    this.eyevisionPdf();
    this.dentaloralPdf();
    this.audiomentryPdf();
    this.nutritionalPdf();
    this.pschycoPdf();
    this.generalasessmentPdf();
    this.doc.save('general.pdf');
  }

  footer() {
    this.doc.setFontStyle('normal');
    this.doc.setFontSize('12');
    this.doc.text(
      `Date  ................................`,
      45,
      this.marginY + 680
    );
    this.doc.text(
      `Place ................................`,
      45,
      this.marginY + 705
    );

    this.doc.text(
      `Doctor's Signature  ................................`,
      350,
      this.marginY + 680
    );
    this.doc.text(
      `Doctor's Name        ................................`,
      350,
      this.marginY + 705
    );

    this.doc.text(
      `© Copyright STUFIT Approach Pvt. Ltd.`,
      180,
      this.marginY + 740
    );
    // this.doc.page++;
  }
  header() {
    const img = new Image();
    img.src = 'assets/img/logo.PNG';

    const watermark = new Image();
    watermark.src = 'assets/img/watermark.PNG';
    this.doc.addImage(img, 'PNG', 30, 20, 140, 90);
    this.doc.addImage(
      watermark,
      'PNG',
      200,
      this.marginY + 250,
      400,
      200,
      '',
      'NONE',
      35
    );
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
    this.doc.text(
      `Name of Sibling(s) Studying in the school.`,
      45,
      this.marginY + 540
    );

    this.footer();
    this.doc.addPage();
  }

  eyevisionPdf() {
    this.doc.addPage();
    this.header();
    this.footer();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text(
      'EYE & VISION ASSESSMENT {16 Parameteres}',
      120,
      this.marginY + 40
    );

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.rect(45, this.marginY + 70, 500, 400);
    this.doc.line(300, 150, 300, 550);
    this.doc.line(45, 150, 545, 150);

    this.doc.line(150, 170, 150, 550);
    this.doc.line(225, 170, 225, 550);
    this.doc.line(45, 170, 545, 170);
    this.doc.line(45, 190, 545, 190);
    this.doc.line(45, 210, 545, 210);

    this.doc.line(45, 230, 545, 230);
    this.doc.line(45, 270, 545, 270);
    this.doc.line(45, 310, 545, 310);

    this.doc.line(45, 350, 545, 350);
    this.doc.line(45, 390, 545, 390);
    this.doc.line(45, 430, 545, 430);

    this.doc.line(45, 470, 545, 470);
    this.doc.line(45, 510, 545, 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 620);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 100, this.marginY + 620);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 650);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 120, this.marginY + 650);

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
    this.doc.text('Normal', 235, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Neck Range of Motion:', 45, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 225, this.marginY + 230);

    this.doc.setFontStyle('bold');
    this.doc.text('Rt. Leg Range of Motion:', 45, this.marginY + 270);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 225, this.marginY + 270);

    this.doc.setFontStyle('bold');
    this.doc.text('Lt. Leg Range of Motion:', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 225, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Dystrophy:', 45, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 150, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Atrophy:', 250, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 310, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Stamina:', 45, this.marginY + 390);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 150, this.marginY + 390);

    this.doc.setFontStyle('bold');
    this.doc.text('Endurance:', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text('Heavy', 150, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text('Pain:', 45, this.marginY + 470);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 90, this.marginY + 470);

    this.doc.setFontStyle('bold');
    this.doc.text('Pain Position:', 250, this.marginY + 470);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 350, this.marginY + 470);

    this.doc.setFontStyle('bold');
    this.doc.text('Spasm:', 45, this.marginY + 510);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 100, this.marginY + 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Spasm Position:', 250, this.marginY + 510);
    this.doc.setFontStyle('normal');
    this.doc.text('Normal', 370, this.marginY + 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 620);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 100, this.marginY + 620);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 650);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 120, this.marginY + 650);

    this.footer();
  }

  dentaloralPdf() {
    this.doc.addPage();
    this.header();
    this.footer();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('Dental & Oral Assesment Module', 120, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Periodontal:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text('Average', 150, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Dental Caries:', 45, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text('Advance', 150, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text('Periodontal :', 45, this.marginY + 150);
    this.doc.setFontStyle('normal');
    this.doc.text('Moderate', 150, this.marginY + 150);

    this.doc.setFontStyle('bold');
    this.doc.text('Orthodontic Correction :', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text('Advised', 235, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Extraction :', 45, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text('Advised', 150, this.marginY + 230);

    this.doc.setFontStyle('bold');
    this.doc.text('Space Maintainer :', 45, this.marginY + 270);
    this.doc.setFontStyle('normal');
    this.doc.text('Not Advised', 200, this.marginY + 270);

    this.doc.setFontStyle('bold');
    this.doc.text('Oral Hygiene Status:', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text('Poor', 200, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Sugar Intake:', 45, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text('Yes', 150, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('No. of time Brushed :', 45, this.marginY + 390);
    this.doc.setFontStyle('normal');
    this.doc.text('Once A Day', 220, this.marginY + 390);

    this.doc.setFontStyle('bold');
    this.doc.text('Thumb Sucking:', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text('Malpositioned Teeth :', 45, this.marginY + 470);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 220, this.marginY + 470);

    this.doc.setFontStyle('bold');
    this.doc.text('Dental Flourosis:', 45, this.marginY + 510);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Missing Teeth :', 45, this.marginY + 550);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 150, this.marginY + 550);

    this.doc.setFontStyle('bold');
    this.doc.text('No. of Teeth :', 45, this.marginY + 590);

    this.doc.setFontStyle('normal');
    this.doc.text('Incisors-', 140, this.marginY + 590);
    this.doc.setFontStyle('normal');
    this.doc.text('8', 190, this.marginY + 590);

    this.doc.setFontStyle('normal');
    this.doc.text('Canines-', 205, this.marginY + 590);
    this.doc.setFontStyle('normal');
    this.doc.text('4', 265, this.marginY + 590);

    this.doc.setFontStyle('normal');
    this.doc.text('Premolars-', 280, this.marginY + 590);
    this.doc.setFontStyle('normal');
    this.doc.text('8', 350, this.marginY + 590);

    this.doc.setFontStyle('Molars');
    this.doc.text('Molars-', 365, this.marginY + 590);
    this.doc.setFontStyle('normal');
    this.doc.text('7', 410, this.marginY + 590);

    this.doc.setFontStyle('normal');
    this.doc.text('Deciduous Teeth-', 425, this.marginY + 590);
    this.doc.setFontStyle('normal');
    this.doc.text('Yes', 530, this.marginY + 590);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 620);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 100, this.marginY + 620);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 650);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 120, this.marginY + 650);
  }

  audiomentryPdf() {
    this.doc.addPage();
    this.header();
    this.footer();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('Audiometry & Speech Therapy Module', 120, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Speech Milestones:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text('Achieved', 200, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Comprehension:', 45, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text('Verbal', 150, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text('Expression :', 45, this.marginY + 150);
    this.doc.setFontStyle('normal');
    this.doc.text('Verbal', 125, this.marginY + 150);

    this.doc.setFontStyle('bold');
    this.doc.text('Mode of Communication:', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text('Verbal', 200, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Auditory Skills:', 45, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text('Achieved', 150, this.marginY + 230);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Parent\'s opinion about hearing loss :',
      45,
      this.marginY + 270
    );
    this.doc.setFontStyle('normal');
    this.doc.text('text', 300, this.marginY + 270);

    this.doc.setFontStyle('bold');
    this.doc.text('Hearing loss:', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 150, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Tinnitus:', 45, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 150, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Lt. Ear Perforation:', 45, this.marginY + 390);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 390);

    this.doc.setFontStyle('bold');
    this.doc.text('Rt. Ear Perforation:', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text('Medical History ( if any):', 45, this.marginY + 470);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 220, this.marginY + 470);

    this.doc.setFontStyle('bold');
    this.doc.text('Respond on Name Call:', 45, this.marginY + 510);
    this.doc.setFontStyle('normal');
    this.doc.text('Yes', 200, this.marginY + 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Hearing Assessment Result:', 45, this.marginY + 550);
    this.doc.setFontStyle('normal');
    this.doc.text('PTA', 230, this.marginY + 550);

    this.doc.setFontStyle('bold');
    this.doc.text('B/L Wa:', 45, this.marginY + 590);
    this.doc.setFontStyle('normal');
    this.doc.text('Yes', 100, this.marginY + 590);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 620);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 100, this.marginY + 620);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 650);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 120, this.marginY + 650);
  }

  nutritionalPdf() {
    this.doc.addPage();
    this.header();
    this.footer();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('Nutritional Assessment Module', 120, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Non Anaemic:', 45, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Vitamin A deficiency:', 45, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text('Vitamin D deficiency :', 45, this.marginY + 150);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 150);

    this.doc.setFontStyle('bold');
    this.doc.text('Obesity:', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 100, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Ideal Body weigh:', 45, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text('61.85 Kg', 180, this.marginY + 230);

    this.doc.setFontStyle('bold');
    this.doc.text('Ideal Calories estimation :', 45, this.marginY + 270);
    this.doc.setFontStyle('normal');
    this.doc.text('1972 k Cal/Day', 200, this.marginY + 270);

    this.doc.setFontStyle('bold');
    this.doc.text('Micro nutrient Distribution :', 45, this.marginY + 310);

    this.doc.setFontStyle('normal');
    this.doc.text('Fats-', 230, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text('65.76', 270, this.marginY + 310);

    this.doc.setFontStyle('normal');
    this.doc.text('Carbohydrates-', 320, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text('246.2', 410, this.marginY + 310);

    this.doc.setFontStyle('normal');
    this.doc.text('Proteins-', 460, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text('31.3', 510, this.marginY + 310);

    this.doc.setFontStyle('normal');
    this.doc.text('Fluid Estimation-', 230, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text('246.2 ml', 330, this.marginY + 350);

    this.doc.setFontStyle('normal');
    this.doc.text('7', 410, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text('glasses-', 430, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 620);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 100, this.marginY + 620);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 650);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 120, this.marginY + 650);
  }

  pschycoPdf() {
    this.doc.addPage();
    this.header();
    this.footer();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('Pschycological Assesment Module', 120, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Behavior Disorder:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 180, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Learning Disorder:', 45, this.marginY + 100);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 180, this.marginY + 100);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Attention Deficit Hyperactivity Disorder (ADHD) :',
      45,
      this.marginY + 130
    );
    this.doc.setFontStyle('normal');
    this.doc.text('No', 350, this.marginY + 130);

    this.doc.setFontStyle('bold');
    this.doc.text('Depression :', 45, this.marginY + 160);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 150, this.marginY + 160);

    this.doc.setFontStyle('bold');
    this.doc.text('Anxiety :', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 100, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Eating Disorde:', 45, this.marginY + 220);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 220);

    this.doc.setFontStyle('bold');
    this.doc.text('Phobia:', 45, this.marginY + 250);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 100, this.marginY + 250);

    this.doc.setFontStyle('bold');
    this.doc.text('Video Game Addiction:', 45, this.marginY + 280);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 250, this.marginY + 280);

    this.doc.setFontStyle('bold');
    this.doc.text('Internet Addiction:', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 220, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Social Anxiety Disorder:', 45, this.marginY + 340);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 250, this.marginY + 340);

    this.doc.setFontStyle('bold');
    this.doc.text('Malpositioned Teeth :', 45, this.marginY + 370);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 220, this.marginY + 370);

    this.doc.setFontStyle('bold');
    this.doc.text('Schizophrenia:', 45, this.marginY + 400);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 120, this.marginY + 400);

    this.doc.setFontStyle('bold');
    this.doc.text('Sleep Disorder :', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 150, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Adolcent Health Issues (Above 12 years):',
      150,
      this.marginY + 470
    );

    this.doc.setFontStyle('bold');
    this.doc.text('Substance Abuse :', 45, this.marginY + 490);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 490);

    this.doc.setFontStyle('bold');
    this.doc.text('Delay in Menstruation Cyclese :', 230, this.marginY + 490);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 400, this.marginY + 490);

    this.doc.setFontStyle('bold');
    this.doc.text('Irregular Periods :', 45, this.marginY + 520);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 520);

    this.doc.setFontStyle('bold');
    this.doc.text('Pain During Menstruation :', 230, this.marginY + 520);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 430, this.marginY + 520);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Pain or Burning Sensation while urinating :',
      45,
      this.marginY + 550
    );
    this.doc.setFontStyle('normal');
    this.doc.text('No', 350, this.marginY + 550);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 620);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 100, this.marginY + 620);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 650);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 120, this.marginY + 650);
  }

  generalasessmentPdf() {
    this.doc.addPage();
    this.header();
    this.footer();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('General Assessment?Module', 120, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Chest Auscultation:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text('Clear', 200, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Abdomen Palpitation:', 45, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text('Soft', 200, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Active infectious Disease (if Any) :',
      45,
      this.marginY + 150
    );
    this.doc.setFontStyle('normal');
    this.doc.text('text', 300, this.marginY + 150);

    this.doc.setFontStyle('bold');
    this.doc.text('Cleft Lip & Palate :', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Club Foot :', 45, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 150, this.marginY + 230);

    this.doc.setFontStyle('bold');
    this.doc.text('Congenital Cataract :', 45, this.marginY + 270);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 220, this.marginY + 270);

    this.doc.setFontStyle('bold');
    this.doc.text('Congenital Deafness :', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 200, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Congenital Heart Disease:', 45, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 250, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Skin Condition (if Any):', 45, this.marginY + 390);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 250, this.marginY + 390);

    this.doc.setFontStyle('bold');
    this.doc.text('Otitis Media:', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 180, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text('Neuro Motor Impairment :', 45, this.marginY + 470);
    this.doc.setFontStyle('normal');
    this.doc.text('No', 220, this.marginY + 470);

    this.doc.setFontStyle('bold');
    this.doc.text('Body Type:', 45, this.marginY + 510);
    this.doc.setFontStyle('normal');
    this.doc.text('Average', 200, this.marginY + 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 620);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 100, this.marginY + 620);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 650);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 120, this.marginY + 650);
  }
}

import { Injectable, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { GeneralInfo, UserRecords, EyeVision, Anthropometry, DentalOral, Audiometry, Nutritional, Pschycological, GeneralAssessment } from 'src/app/models/stufit';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  marginX = 0;
  marginY = 80;
  doc = new jsPDF('p', 'pt', 'a4', true);

  constructor() { }

  makePdf(data: UserRecords) {
    this.doc = new jsPDF('p', 'pt', 'a4', true);
    this.generalPdf(data.generalinfo);
    this.anthropometryPdf(data.anthropometry);
    this.eyevisionPdf(data.eyevision);
    this.dentaloralPdf(data.dentaloral);
    this.audiomentryPdf(data.audiometry);
    this.nutritionalPdf(data.nutritional);
    this.pschycoPdf(data.pschycological);
    this.generalasessmentPdf(data.generalassesment);
    this.doc.save(data.generalinfo.Name ? data.generalinfo.Name : 'general');
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
      `Authorized signatory  ................................`,
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
    this.doc.addImage(img, 'PNG', 210, 15, 140, 80);
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

  generalPdf(data: GeneralInfo) {
    this.header();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('30');
    this.doc.text('Child Record', 200, this.marginY + 40);

    this.doc.setFontSize('16');
    this.doc.text('(Fill In Capital Letters)', 210, this.marginY + 70);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');
    this.doc.text(data.Name ? data.Name : '', 100, this.marginY + 120);
    this.doc.text(data.StufitID ? data.StufitID : '', 110, this.marginY + 160);
    this.doc.text(data.Class ? data.Class : '', 110, this.marginY + 200);
    this.doc.text(data.MotherName ? data.MotherName : '', 180, this.marginY + 240);
    this.doc.text(data.FatherName ? data.FatherName : '', 180, this.marginY + 280);
    this.doc.text(data.DOB ? data.DOB : '', 150, this.marginY + 320);
    this.doc.text(data.BloodGroup ? data.BloodGroup : '', 150, this.marginY + 360);
    this.doc.text(data.Address ? data.Address : '', 120, this.marginY + 400);
    this.doc.text(data.Email ? data.Email : '', 120, this.marginY + 460);
    this.doc.text(data.FatherPhone ? data.FatherPhone : '', 130, this.marginY + 500);
    this.doc.text(data.Siblings[0].class ? data.Siblings[0].class : '', 50, this.marginY + 580);

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('14');
    this.doc.text('Name:', 45, this.marginY + 120);
    this.doc.text('StufitID:', 45, this.marginY + 160);
    this.doc.text('Class:', 45, this.marginY + 200);
    this.doc.text(`Mother's Name:`, 45, this.marginY + 240);
    this.doc.text(`Father's Name:`, 45, this.marginY + 280);
    this.doc.text(`Date Of Birth:`, 45, this.marginY + 320);
    this.doc.text(`Blood Group:`, 45, this.marginY + 360);
    this.doc.text(`Address:`, 45, this.marginY + 400);
    this.doc.text(`Email Id:`, 45, this.marginY + 460);
    this.doc.text(`Phone No.:`, 45, this.marginY + 500);
    this.doc.text('Phone No.2:', 350, this.marginY + 500);
    this.doc.text(
      `Name of Sibling(s) Studying in the school.`,
      45,
      this.marginY + 540
    );

    this.footer();
    this.doc.addPage();
  }

  eyevisionPdf(data: EyeVision) {

    this.header();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text(
      'EYE & VISION ASSESSMENT',
      180,
      this.marginY + 40
    );

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.rect(45, this.marginY + 70, 500, 485);
    this.doc.line(300, 150, 300, 635);//v
    this.doc.line(45, 150, 545, 150);

    this.doc.line(150, 170, 150, 635);//v
    this.doc.line(225, 170, 225, 635);//v

    this.doc.line(45, 170, 545, 170);
    this.doc.line(45, 190, 545, 190);
    this.doc.line(45, 210, 545, 210);

    this.doc.line(98, 170, 98, 230);

    this.doc.line(420, 170, 420, 230);

    this.doc.line(360, 170, 360, 230);
    this.doc.line(480, 170, 480, 230);

    this.doc.line(45, 230, 545, 230);

    // staring vision
    this.doc.line(45, 280, 545, 280);
    this.doc.line(45, 330, 545, 330);

    this.doc.line(45, 380, 545, 380);
    this.doc.line(45, 430, 545, 430);
    this.doc.line(45, 480, 545, 480);

    this.doc.line(45, 530, 545, 530);
    this.doc.line(45, 580, 545, 580);

    //rt eye
    this.doc.line(150, 255, 300, 255);
    this.doc.line(150, 305, 300, 305);
    this.doc.line(150, 355, 300, 355);
    this.doc.line(150, 405, 300, 405);
    this.doc.line(150, 455, 300, 455);
    this.doc.line(150, 505, 300, 505);
    this.doc.line(150, 555, 300, 555);
    this.doc.line(150, 605, 300, 605);

    this.doc.setFontStyle('normal');
    this.doc.text('Rt. Eye', 165, 248);
    this.doc.setFontStyle('normal');
    this.doc.text('Lt. Eye', 240, 248);

    this.doc.setFontStyle('normal');
    this.doc.text('Rt. Eye', 165, 298);
    this.doc.setFontStyle('normal');
    this.doc.text('Lt. Eye', 240, 298);

    this.doc.setFontStyle('normal');
    this.doc.text('Rt. Eye', 165, 348);
    this.doc.setFontStyle('normal');
    this.doc.text('Lt. Eye', 240, 348);

    this.doc.setFontStyle('normal');
    this.doc.text('Rt. Eye', 165, 398);
    this.doc.setFontStyle('normal');
    this.doc.text('Lt. Eye', 240, 398);

    this.doc.setFontStyle('normal');
    this.doc.text('Rt. Eye', 165, 448);
    this.doc.setFontStyle('normal');
    this.doc.text('Lt. Eye', 240, 448);

    this.doc.setFontStyle('normal');
    this.doc.text('Rt. Eye', 165, 498);
    this.doc.setFontStyle('normal');
    this.doc.text('Lt. Eye', 240, 498);

    this.doc.setFontStyle('normal');
    this.doc.text('Rt. Eye', 165, 548);
    this.doc.setFontStyle('normal');
    this.doc.text('Lt. Eye', 240, 548);

    this.doc.setFontStyle('normal');
    this.doc.text('Rt. Eye', 165, 598);
    this.doc.setFontStyle('normal');
    this.doc.text('Lt. Eye', 240, 598);

    //value of rt and lt eye next value plus 50 in y-axis
    this.doc.setFontStyle('normal');
    this.doc.text(data.Visionrteye ? data.Visionrteye : '', 180, 273);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Visionlteye ? data.Visionlteye : '', 255, 273);

    this.doc.setFontStyle('normal');
    this.doc.text(data.Refractionrteye ? data.Refractionrteye : '', 175, 323);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Refractionlteye ? data.Refractionlteye : '', 250, 323);

    this.doc.setFontStyle('normal');
    this.doc.text(data.Colourvisionrteye ? data.Colourvisionrteye : '', 175, 373);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Colourvisionlteye ? data.Colourvisionlteye : '', 250, 373);

    this.doc.setFontStyle('normal');
    this.doc.text(data.Diseaserteye ? data.Diseaserteye : '', 175, 423);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Diseaselteye ? data.Diseaselteye : '', 250, 423);

    this.doc.setFontStyle('normal');
    this.doc.text(data.Squintrteye ? data.Squintrteye : '', 175, 473);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Squintlteye ? data.Squintlteye : '', 250, 473);

    this.doc.setFontStyle('normal');
    this.doc.text(data.Microeyeballrteye ? data.Microeyeballrteye : '', 175, 523);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Microeyeballlteye ? data.Microeyeballlteye : '', 250, 523);

    this.doc.setFontStyle('normal');
    this.doc.text(data.Ptosisrteye ? data.Ptosisrteye : '', 175, 573);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Ptosislteye ? data.Ptosislteye : '', 250, 573);

    this.doc.setFontStyle('normal');
    this.doc.text(data.Nystgmusrteye ? data.Nystgmusrteye : '', 175, 623);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Nystgmuslteye ? data.Nystgmuslteye : '', 250, 623);





    this.doc.setFontStyle('bold');
    this.doc.text('Right', 150, this.marginY + 84);
    this.doc.setFontStyle('bold');
    this.doc.text('Left', 400, this.marginY + 84);

    this.doc.setFontStyle('normal');
    this.doc.text('Sph.', 55, this.marginY + 103);
    this.doc.setFontStyle('normal');
    this.doc.text('Cyl.', 110, this.marginY + 103);
    this.doc.setFontStyle('normal');
    this.doc.text('Axis.', 165, this.marginY + 103);
    this.doc.setFontStyle('normal');
    this.doc.text('V/A.', 235, this.marginY + 103);


    this.doc.setFontStyle('normal');
    this.doc.text('Sph.', 320, this.marginY + 103);
    this.doc.setFontStyle('normal');
    this.doc.text('Cyl.', 380, this.marginY + 103);
    this.doc.setFontStyle('normal');
    this.doc.text('Axis.', 435, this.marginY + 103);
    this.doc.setFontStyle('normal');
    this.doc.text('V/A.', 500, this.marginY + 103);

    this.doc.setFontStyle('normal');
    this.doc.text('Vision', 75, this.marginY + 180);
    this.doc.setFontStyle('normal');
    this.doc.text('Refraction', 65, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text('Colour Vision', 55, this.marginY + 280);
    this.doc.setFontStyle('normal');
    this.doc.text('Disease', 70, this.marginY + 330);
    this.doc.setFontStyle('normal');
    this.doc.text('Squint', 75, this.marginY + 380);
    this.doc.setFontStyle('normal');
    this.doc.text('Micro Eye Ball', 55, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text('Ptosis', 75, this.marginY + 480);
    this.doc.setFontStyle('normal');
    this.doc.text('Nystgmus', 67, this.marginY + 530);


    this.doc.setFontStyle('normal');
    this.doc.text('Remarks', 400, this.marginY + 162);

    this.doc.setFontStyle('normal');
    this.doc.text('Remarks', 400, this.marginY + 212);
    this.doc.setFontStyle('normal');
    this.doc.text('Remarks', 400, this.marginY + 262);
    this.doc.setFontStyle('normal');
    this.doc.text('Remarks', 400, this.marginY + 312);
    this.doc.setFontStyle('normal');
    this.doc.text('Remarks', 400, this.marginY + 362);
    this.doc.setFontStyle('normal');
    this.doc.text('Remarks', 400, this.marginY + 412);
    this.doc.setFontStyle('normal');
    this.doc.text('Remarks', 400, this.marginY + 462);
    this.doc.setFontStyle('normal');
    this.doc.text('Remarks', 400, this.marginY + 512);








    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 590);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 100, this.marginY + 590);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 650);
    this.doc.setFontStyle('normal');
    this.doc.text('text', 120, this.marginY + 650);
    this.footer();
    this.doc.addPage();

  }

  anthropometryPdf(data: Anthropometry) {
    this.header();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('ANTHROPOMETRY', 200, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Height:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Height ? data.Height : '', 105, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Width:', 190, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Weight ? data.Weight : '', 250, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('BMI:', 335, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Bmi ? data.Bmi : '', 395, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Posture:', 45, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Posture ? data.Posture : '', 105, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text('Blood Pressure:', 190, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Bloodpressure ? data.Bloodpressure : '', 300, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text('Pulse Rate:', 45, this.marginY + 150);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Pulserate ? data.Pulserate : '', 125, this.marginY + 150);

    this.doc.setFontStyle('bold');
    this.doc.text('Shoulder Range of Motion:', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Shoulderrange ? data.Shoulderrange : '', 235, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Neck Range of Motion:', 45, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Neckrange ? data.Neckrange : '', 215, this.marginY + 230);

    this.doc.setFontStyle('bold');
    this.doc.text('Rt. Leg Range of Motion:', 45, this.marginY + 270);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Rtlegrange ? data.Rtlegrange : '', 225, this.marginY + 270);

    this.doc.setFontStyle('bold');
    this.doc.text('Lt. Leg Range of Motion:', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Ltlegrange ? data.Ltlegrange : '', 225, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Dystrophy:', 45, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Dystrophy ? data.Dystrophy : '', 130, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Atrophy:', 250, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Atrophy ? data.Atrophy : '', 315, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Stamina:', 45, this.marginY + 390);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Stamina ? data.Stamina : '', 110, this.marginY + 390);

    this.doc.setFontStyle('bold');
    this.doc.text('Endurance:', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Endurance ? data.Endurance : '', 130, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text('Pain:', 45, this.marginY + 470);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Pain ? data.Pain : '', 90, this.marginY + 470);

    this.doc.setFontStyle('bold');
    this.doc.text('Pain Position:', 250, this.marginY + 470);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Painposition ? data.Painposition : '', 350, this.marginY + 470);

    this.doc.setFontStyle('bold');
    this.doc.text('Spasm:', 45, this.marginY + 510);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Spasm ? data.Spasm : '', 100, this.marginY + 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Spasm Position:', 250, this.marginY + 510);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Spasmposition ? data.Spasmposition : '', 370, this.marginY + 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 540);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Advice ? data.Advice : '', 100, this.marginY + 540);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 620);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Remarks ? data.Remarks : '', 120, this.marginY + 620);

    this.footer();
    this.doc.addPage();
  }

  dentaloralPdf(data: DentalOral) {

    this.header();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('Dental & Oral Assesment Module', 140, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Periodontal:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Periodontal ? data.Periodontal : '', 140, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Dental Caries:', 45, this.marginY + 100);
    this.doc.setFontStyle('normal');
    this.doc.text(data.DentalCaries ? data.DentalCaries : '', 150, this.marginY + 100);

    this.doc.setFontStyle('bold');
    this.doc.text('Periodontal :', 45, this.marginY + 130);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Periodontal2 ? data.Periodontal2 : '', 140, this.marginY + 130);

    this.doc.setFontStyle('bold');
    this.doc.text('Orthodontic Correction :', 45, this.marginY + 160);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Orthodontic ? data.Orthodontic : '', 215, this.marginY + 160);

    this.doc.setFontStyle('bold');
    this.doc.text('Extraction :', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Extration ? data.Extration : '', 120, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Space Maintainer :', 45, this.marginY + 220);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Spacemaintainer ? data.Spacemaintainer : '', 170, this.marginY + 220);

    this.doc.setFontStyle('bold');
    this.doc.text('Oral Hygiene Status:', 45, this.marginY + 250);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Oralhygiene ? data.Oralhygiene : '', 190, this.marginY + 250);

    this.doc.setFontStyle('bold');
    this.doc.text('Sugar Intake:', 45, this.marginY + 280);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Sugarintake ? data.Sugarintake : '', 150, this.marginY + 280);

    this.doc.setFontStyle('bold');
    this.doc.text('No. of time Brushed :', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Timebrushed ? data.Timebrushed : '', 190, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Thumb Sucking:', 45, this.marginY + 340);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Thumbsucking ? data.Thumbsucking : '', 170, this.marginY + 340);

    this.doc.setFontStyle('bold');
    this.doc.text('Malpositioned Teeth :', 45, this.marginY + 370);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Malpositioned ? data.Malpositioned : '', 190, this.marginY + 370);

    this.doc.setFontStyle('bold');
    this.doc.text('Dental Flourosis:', 45, this.marginY + 400);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Dentalflourosis ? data.Dentalflourosis : '', 170, this.marginY + 400);

    this.doc.setFontStyle('bold');
    this.doc.text('Missing Teeth :', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Missingteeth ? data.Missingteeth : '', 150, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text('No. of Teeth :', 45, this.marginY + 460);

    this.doc.setFontStyle('normal');
    this.doc.text('Incisors-', 140, this.marginY + 460);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Incisors ? data.Incisors : '', 194, this.marginY + 460);

    this.doc.setFontStyle('normal');
    this.doc.text('Canines-', 225, this.marginY + 460);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Canines ? data.Canines : '', 285, this.marginY + 460);

    this.doc.setFontStyle('normal');
    this.doc.text('Premolars-', 310, this.marginY + 460);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Premolars ? data.Premolars : '', 390, this.marginY + 460);

    this.doc.setFontStyle('Molars');
    this.doc.text('Molars-', 420, this.marginY + 460);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Molars ? data.Molars : '', 470, this.marginY + 460);

    this.doc.setFontStyle('normal');
    this.doc.text('Deciduous Teeth-', 140, this.marginY + 480);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Deciduousteeth ? 'Yes' : 'No', 220, this.marginY + 480);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 500);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Advice ? data.Advice : '', 100, this.marginY + 500);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 560);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Remarks ? data.Remarks : '', 120, this.marginY + 560);
    this.footer();
    this.doc.addPage();
  }

  audiomentryPdf(data: Audiometry) {

    this.header();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('Audiometry & Speech Therapy Module', 120, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Speech Milestones:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Speechmilestones ? data.Speechmilestones : '', 170, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Comprehension:', 45, this.marginY + 100);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Comprehension ? data.Comprehension : '', 150, this.marginY + 100);

    this.doc.setFontStyle('bold');
    this.doc.text('Expression :', 45, this.marginY + 130);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Expression ? data.Expression : '', 125, this.marginY + 130);

    this.doc.setFontStyle('bold');
    this.doc.text('Mode of Communication:', 45, this.marginY + 160);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Modeofcommunication ? data.Modeofcommunication : '', 210, this.marginY + 160);

    this.doc.setFontStyle('bold');
    this.doc.text('Auditory Skills:', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Auditoryskills ? data.Auditoryskills : '', 150, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Parent\'s opinion about hearing loss :',
      45,
      this.marginY + 220
    );
    this.doc.setFontStyle('normal');
    this.doc.text(data.Parentsopinion ? data.Parentsopinion : '', 270, this.marginY + 220);

    this.doc.setFontStyle('bold');
    this.doc.text('Hearing loss:', 45, this.marginY + 250);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Hearingloss ? data.Hearingloss : '', 140, this.marginY + 250);

    this.doc.setFontStyle('bold');
    this.doc.text('Tinnitus:', 45, this.marginY + 280);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Tinnitus ? data.Tinnitus : '', 110, this.marginY + 280);

    this.doc.setFontStyle('bold');
    this.doc.text('Lt. Ear Perforation:', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Lteperiodontal ? data.Lteperiodontal : '', 170, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Rt. Ear Perforation:', 45, this.marginY + 340);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Rteperiodontal ? data.Rteperiodontal : '', 170, this.marginY + 340);

    this.doc.setFontStyle('bold');
    this.doc.text('Medical History ( if any):', 45, this.marginY + 370);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Medicalhistory ? data.Medicalhistory : '', 210, this.marginY + 370);

    this.doc.setFontStyle('bold');
    this.doc.text('Respond on Name Call:', 45, this.marginY + 400);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Respondonname ? data.Respondonname : '', 200, this.marginY + 400);

    this.doc.setFontStyle('bold');
    this.doc.text('Hearing Assessment Result:', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Hearingassessment ? data.Hearingassessment : '', 220, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text('B/L Wax:', 45, this.marginY + 460);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Blwax ? data.Blwax : '', 110, this.marginY + 460);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 500);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Advice ? data.Advice : '', 100, this.marginY + 500);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 570);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Remarks ? data.Remarks : '', 120, this.marginY + 570);

    this.footer();
    this.doc.addPage();
  }

  nutritionalPdf(data: Nutritional) {

    this.header();


    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('Nutritional Assessment Module', 140, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Non Anaemic:', 45, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Vitamin A deficiency:', 45, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Vitamina ? data.Vitamina : '', 180, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text('Vitamin D deficiency :', 45, this.marginY + 150);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Vitamind ? data.Vitamind : '', 180, this.marginY + 150);

    this.doc.setFontStyle('bold');
    this.doc.text('Obesity:', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Obesity ? data.Obesity : '', 105, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Ideal Body weight:', 45, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Idealbodyweight ? data.Idealbodyweight : '' + 'Kg', 160, this.marginY + 230);

    this.doc.setFontStyle('bold');
    this.doc.text('Ideal Calories estimation :', 45, this.marginY + 270);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Idealcaloriesestimation ? data.Idealcaloriesestimation : '', 220, this.marginY + 270);

    this.doc.setFontStyle('bold');
    this.doc.text('Micro nutrient Distribution :', 45, this.marginY + 310);

    this.doc.setFontStyle('normal');
    this.doc.text('Fats-', 230, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Fats ? data.Fats : '', 270, this.marginY + 310);

    this.doc.setFontStyle('normal');
    this.doc.text('Carbohydrates-', 320, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Cabohydrates ? data.Cabohydrates : '', 410, this.marginY + 310);

    this.doc.setFontStyle('normal');
    this.doc.text('Proteins-', 460, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Proteins ? data.Proteins : '', 520, this.marginY + 310);

    this.doc.setFontStyle('normal');
    this.doc.text('Fluid Estimation-', 230, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Fluidestimation ? data.Fluidestimation : '', 340, this.marginY + 350);

    this.doc.setFontStyle('normal');
    this.doc.text('7', 410, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text('glasses-', 430, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 390);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Advice ? data.Advice : '', 100, this.marginY + 390);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 460);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Remarks ? data.Remarks : '', 120, this.marginY + 460);

    this.footer();
    this.doc.addPage();
  }

  pschycoPdf(data: Pschycological) {

    this.header();


    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('Pschycological Assesment Module', 140, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Behavior Disorder:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Behaviordisorder ? data.Behaviordisorder : '', 180, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Learning Disorder:', 45, this.marginY + 100);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Learningdisorder ? data.Learningdisorder : '', 180, this.marginY + 100);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Attention Deficit Hyperactivity Disorder (ADHD) :',
      45,
      this.marginY + 130
    );
    this.doc.setFontStyle('normal');
    this.doc.text(data.Attentiondeficit ? data.Attentiondeficit : '', 350, this.marginY + 130);

    this.doc.setFontStyle('bold');
    this.doc.text('Depression :', 45, this.marginY + 160);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Depression ? data.Depression : '', 150, this.marginY + 160);

    this.doc.setFontStyle('bold');
    this.doc.text('Anxiety :', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Anxiety ? data.Anxiety : '', 100, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Eating Disorde:', 45, this.marginY + 220);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Eatingdisorder ? data.Eatingdisorder : '', 200, this.marginY + 220);

    this.doc.setFontStyle('bold');
    this.doc.text('Phobia:', 45, this.marginY + 250);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Phobia ? data.Phobia : '', 100, this.marginY + 250);

    this.doc.setFontStyle('bold');
    this.doc.text('Video Game Addiction:', 45, this.marginY + 280);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Videogame ? data.Videogame : '', 250, this.marginY + 280);

    this.doc.setFontStyle('bold');
    this.doc.text('Internet Addiction:', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Internetaddiction ? data.Internetaddiction : '', 220, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Social Anxiety Disorder:', 45, this.marginY + 340);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Socialanxiety ? data.Socialanxiety : '', 250, this.marginY + 340);

    // this.doc.setFontStyle('bold');
    // this.doc.text('Malpositioned Teeth :', 45, this.marginY + 370);
    // this.doc.setFontStyle('normal');
    // this.doc.text(data.tee, 220, this.marginY + 370);

    this.doc.setFontStyle('bold');
    this.doc.text('Schizophrenia:', 45, this.marginY + 400);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Schizophrenia ? data.Schizophrenia : '', 120, this.marginY + 400);

    this.doc.setFontStyle('bold');
    this.doc.text('Sleep Disorder :', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Sleepdisorder ? data.Sleepdisorder : '', 150, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Adolcent Health Issues (Above 12 years):',
      150,
      this.marginY + 470
    );

    this.doc.setFontStyle('bold');
    this.doc.text('Substance Abuse :', 45, this.marginY + 490);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Substanceabuse ? data.Substanceabuse : '', 200, this.marginY + 490);

    this.doc.setFontStyle('bold');
    this.doc.text('Delay in Menstruation Cyclese :', 260, this.marginY + 490);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Delayinmenstruation ? data.Delayinmenstruation : '', 450, this.marginY + 490);

    this.doc.setFontStyle('bold');
    this.doc.text('Irregular Periods :', 45, this.marginY + 520);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Irregularperiods ? data.Irregularperiods : '', 200, this.marginY + 520);

    this.doc.setFontStyle('bold');
    this.doc.text('Pain During Menstruation :', 230, this.marginY + 520);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Painduringmenstruation ? data.Painduringmenstruation : '', 430, this.marginY + 520);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Pain or Burning Sensation while urinating :',
      45,
      this.marginY + 550
    );
    this.doc.setFontStyle('normal');
    this.doc.text(data.Painorburning ? data.Painorburning : '', 350, this.marginY + 550);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 580);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Advice ? data.Advice : '', 100, this.marginY + 580);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 645);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Remarks ? data.Remarks : '', 120, this.marginY + 645);

    this.footer();
    this.doc.addPage();
  }

  generalasessmentPdf(data: GeneralAssessment) {

    this.header();

    this.doc.setFontStyle('bold');
    this.doc.setFontSize('18');
    this.doc.text('General Assessment Module', 140, this.marginY + 40);

    this.doc.setFontStyle('normal');
    this.doc.setFontSize('14');

    this.doc.setFontStyle('bold');
    this.doc.text('Chest Auscultation:', 45, this.marginY + 70);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Chestauscultation ? data.Chestauscultation : '', 170, this.marginY + 70);

    this.doc.setFontStyle('bold');
    this.doc.text('Abdomen Palpitation:', 45, this.marginY + 110);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Abdomenpalpitation ? data.Abdomenpalpitation : '', 175, this.marginY + 110);

    this.doc.setFontStyle('bold');
    this.doc.text(
      'Active infectious Disease (if Any) :',
      45,
      this.marginY + 150
    );
    this.doc.setFontStyle('normal');
    this.doc.text(data.Activeinfectious ? data.Activeinfectious : '', 260, this.marginY + 150);

    this.doc.setFontStyle('bold');
    this.doc.text('Cleft Lip & Palate :', 45, this.marginY + 190);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Cleftlip ? data.Cleftlip : '', 165, this.marginY + 190);

    this.doc.setFontStyle('bold');
    this.doc.text('Club Foot :', 45, this.marginY + 230);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Clubfoot ? data.Clubfoot : '', 110, this.marginY + 230);

    this.doc.setFontStyle('bold');
    this.doc.text('Congenital Cataract :', 45, this.marginY + 270);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Congenitalcataract ? data.Congenitalcataract : '', 180, this.marginY + 270);

    this.doc.setFontStyle('bold');
    this.doc.text('Congenital Deafness :', 45, this.marginY + 310);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Congenitaldeafness ? data.Congenitaldeafness : '', 180, this.marginY + 310);

    this.doc.setFontStyle('bold');
    this.doc.text('Congenital Heart Disease:', 45, this.marginY + 350);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Congenitalheart ? data.Congenitalheart : '', 200, this.marginY + 350);

    this.doc.setFontStyle('bold');
    this.doc.text('Skin Condition (if Any):', 45, this.marginY + 390);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Skincondition ? data.Skincondition : '', 195, this.marginY + 390);

    this.doc.setFontStyle('bold');
    this.doc.text('Otitis Media:', 45, this.marginY + 430);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Otitis ? data.Otitis : '', 130, this.marginY + 430);

    this.doc.setFontStyle('bold');
    this.doc.text('Neuro Motor Impairment :', 45, this.marginY + 470);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Neuromotor ? data.Neuromotor : '', 220, this.marginY + 470);

    this.doc.setFontStyle('bold');
    this.doc.text('Body Type:', 45, this.marginY + 510);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Bodytype ? data.Bodytype : '', 130, this.marginY + 510);

    this.doc.setFontStyle('bold');
    this.doc.text('Advice:', 45, this.marginY + 540);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Advice ? data.Advice : '', 100, this.marginY + 540);

    this.doc.setFontStyle('bold');
    this.doc.text('Remarks:', 45, this.marginY + 610);
    this.doc.setFontStyle('normal');
    this.doc.text(data.Remarks ? data.Remarks : '', 115, this.marginY + 610);

    this.footer();

  }
}

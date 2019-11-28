export interface GeneralInfo {
    Name?: string;
    StufitID?: string;
    MotherName?: string;
    FatherName?: string;
    DOB?: string;
    Address?: string;
    Email?: string;
    FatherPhone?: string;
    MotherPhone?: string;
    Siblings?: { class?: string, sec?: string }[];
}
export interface Anthropometry {
    Height?: number;
    Weight?: number;
    Bmi?: number;
    Bloodpressure?: number;
    Pulserate?: number;
    Posture?: number;
    Shoulderrange?: number;
    Neckrange?: number;
    Rtlegrange?: number;
    Ltlegrange?: number;
    Dystrophy?: number;
    Atrophy?: number;
    Stamina?: number;
    Endurance?: number;
    Pain?: number[];
    Painposition?: string;
    Paintype?: string;
    Spasm?: number;
    Spasmposition?: string;
    Advice?: string;
    Remarks?: string;
}
export interface EyeVision {
    Visionlteye?: number;
    Visionrteye?: number;
    Visionremark?: string;
    Refractionlteye?: number;
    Refractionrteye?: number;
    Refractionremark?: string;
    Colourvisionlteye?: number;
    Colourvisionrteye?: number;
    Colourvisionremark?: string;
    Diseaselteye?: number;
    Diseaserteye?: number;
    Diseaseremark?: string;
    Squintlteye?: number;
    Squintrteye?: number;
    Squintremark?: string;
    Microeyeballlteye?: number;
    Microeyeballrteye?: number;
    Microeyeballremark?: string;
    Ptosislteye?: number;
    Ptosisrteye?: number;
    Ptosisremark?: string;
    Nystgmuslteye?: number;
    Nystgmusrteye?: number;
    Nystgmusremark?: string;

    advice?: string;
    remarks?: string;
}
export interface DentalOral {
    Periodontal?: number;
    DentalCaries?: number;
    Periodontal2?: number;
    Orthodontic?: number;
    Extration?: number;
    Spacemaintainer?: number;
    Oralhygiene?: string;
    Sugarintake?: number;
    Timebrushed?: number;
    Thumbsucking?: number;
    Malpositioned?: number;
    Dentalflourosis?: number;
    Missingteeth?: number;
    Incisors?: string;
    Canines?: string;
    Premolars?: string;
    Molars?: string;
    Deciduousteeth?: number;
    Advice?: string;
    Remarks?: string;
}
export interface Audiometry {
    Speechmilestones?: string;
    Comprehension?: number;
    Expression?: number;
    Modeofcommunication?: string;
    Auditoryskills?: string;
    Parentsopinion?: string;
    Hearingloss?: number;
    Tinnitus?: number;
    Lteperiodontal?: number;
    Rteperiodontal?: number;
    Respondonname?: number;
    Hearingassessment?: number;
    Blwax?: number;
    Medicalhistory?: string;
    Advice?: string;
    Remarks?: string;
}
export interface Nutritional {
    Main?: number;
    Vitamina?: number;
    Vitamind?: number;
    Obesity?: number;
    Idealbodyweight?: number;
    Idealcaloriesestimation?: number;
    Fats?: number;
    Cabohydrates?: number;
    Proteins?: number;
    Fluidestimation?: number;
    Glasses?: number;
    Advice?: number;
    Remarks?: number;
}
export interface Pschycological {
    Behaviordisorder?: number;
    Learningdisorder?: number;
    Attentiondeficit?: number;
    Depression?: number;
    Anxiety?: number;
    Eatingdisorder?: number;
    Phobia?: number;
    Videogame?: number;
    Internetaddiction?: number;
    Socialanxiety?: number;
    Schizophrenia?: number;
    Sleepdisorder?: number;
    Substanceabuse?: number;
    Delayinmenstruation?: number;
    Irregularperiods?: number;
    Painduringmenstruation?: number;
    Painorburning?: number;
    Advice?: string;
    Remarks?: string;
    Remark?: string;
}
export interface GeneralAssessment {
    Chestauscultation?: number;
    Abdomenpalpitation?: number;
    Activeinfectious?: string;
    Cleftlip?: number;
    Clubfoot?: number;
    Congenitalcataract?: number;
    Congenitaldeafness?: number;
    Congenitalheart?: number;
    Skincondition?: string;
    Otitis?: number;
    Neuromotor?: number;
    Bodytype?: number;
    Advice?: string;
    Remarks?: string;
}

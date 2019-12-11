import { InjectionToken } from "@angular/core";

export const STUFIT_CONFIG = new InjectionToken<StufitConfig>('stufit.config');

export interface StufitConfig {
    dbenv?: string;
}
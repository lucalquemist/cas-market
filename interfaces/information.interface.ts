

type ValidSection = 'economía' | 'medio ambiente' | 'laboral' | 'bélico' | 'salud pública' | 'ubicación';

export interface SeedInformation {
    description: string;
    name: string;
    value: string;
    section: ValidSection;
}
export type Step = {
    step: number;
    title: string;
    intro: string;
    tooltipClass: string;
    highlightClass: string;
    element: HTMLElement;
    position: string;
    scrollTo: HTMLElement;
    disableInteraction: boolean;
    hintAnimation?: boolean;
    hintPosition?: string;
};
/**
 * Go to specific step of introduction
 *
 * @api private
 */
export declare function goToStep(step: number): Promise<void>;
/**
 * Go to the specific step of introduction with the explicit [data-step] number
 *
 * @api private
 */
export declare function goToStepNumber(step: number): Promise<void>;
/**
 * Go to next step on intro
 *
 * @api private
 */
export declare function nextStep(): Promise<boolean>;
/**
 * Go to previous step on intro
 *
 * @api private
 */
export declare function previousStep(): Promise<boolean>;
/**
 * Returns the current step of the intro
 */
export declare function currentStep(): number | boolean;

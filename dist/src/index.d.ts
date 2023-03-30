import { Step } from "./core/steps";
declare class IntroJs {
    _targetElement: HTMLElement;
    _introItems: Step[];
    _options: Record<string, any>;
    _introBeforeChangeCallback: Function;
    _introChangeCallback: Function;
    _introAfterChangeCallback: Function;
    _introCompleteCallback: Function;
    _hintsAddedCallback: Function;
    _hintClickCallback: Function;
    _hintCloseCallback: Function;
    _introStartCallback: Function;
    _introExitCallback: Function;
    _introSkipCallback: Function;
    _introBeforeExitCallback: Function;
    constructor(targetElement: HTMLElement);
    isActive(): any;
    clone(): IntroJs;
    setOption(option: any, value: any): this;
    setOptions(options: any): this;
    start(): Promise<this>;
    goToStep(step: number): Promise<this>;
    addStep(options: any): this;
    addSteps(steps: Step[]): this;
    goToStepNumber(step: number): Promise<this>;
    nextStep(): Promise<this>;
    previousStep(): Promise<this>;
    currentStep(): any;
    exit(force: boolean): Promise<this>;
    refresh(refreshSteps?: boolean): this;
    setDontShowAgain(dontShowAgain: boolean): this;
    onbeforechange(providedCallback: Function): this;
    onchange(providedCallback: Function): this;
    onafterchange(providedCallback: Function): this;
    oncomplete(providedCallback: Function): this;
    onhintsadded(providedCallback: Function): this;
    onhintclick(providedCallback: Function): this;
    onhintclose(providedCallback: Function): this;
    onstart(providedCallback: Function): this;
    onexit(providedCallback: Function): this;
    onskip(providedCallback: Function): this;
    onbeforeexit(providedCallback: Function): this;
    addHints(): Promise<this>;
    hideHint(stepId: number): Promise<this>;
    hideHints(): Promise<this>;
    showHint(stepId: number): this;
    showHints(): Promise<this>;
    removeHints(): this;
    removeHint(stepId: number): this;
    showHintDialog(stepId: number): Promise<this>;
}
declare const introJs: {
    (targetElm?: string | HTMLElement): IntroJs;
    /**
     * Current IntroJs version
     *
     * @property version
     * @type String
     */
    version: string;
    /**
     * key-val object helper for introJs instances
     *
     * @property instances
     * @type Object
     */
    instances: any;
};
export default introJs;

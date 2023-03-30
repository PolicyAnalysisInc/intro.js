/**
 * Get a queryselector within the hint wrapper
 */
export declare function hintQuerySelectorAll(selector: string): HTMLElement[];
/**
 * Hide a hint
 *
 * @api private
 */
export declare function hideHint(stepId: number): Promise<void>;
/**
 * Hide all hints
 *
 * @api private
 */
export declare function hideHints(): void;
/**
 * Show all hints
 *
 * @api private
 * @method _showHints
 */
export declare function showHints(): Promise<void>;
/**
 * Show a hint
 *
 * @api private
 */
export declare function showHint(stepId: number): void;
/**
 * Removes all hint elements on the page
 * Useful when you want to destroy the elements and add them again (e.g. a modal or popup)
 *
 * @api private
 */
export declare function removeHints(): void;
/**
 * Remove one single hint element from the page
 * Useful when you want to destroy the element and add them again (e.g. a modal or popup)
 * Use removeHints if you want to remove all elements.
 *
 * @api private
 */
export declare function removeHint(stepId: number): void;
/**
 * Add all available hints to the page
 *
 * @api private
 */
export declare function addHints(): Promise<void>;
/**
 * Aligns hint position
 *
 * @api private
 */
export declare function alignHintPosition(position: string, hintElement: HTMLElement, targetElement: HTMLElement): void;
/**
 * Triggers when user clicks on the hint element
 *
 * @api private
 */
export declare function showHintDialog(stepId: number): Promise<void>;
/**
 * Removes open hint (tooltip hint)
 *
 * @api private
 */
export declare function removeHintTooltip(): string | undefined;
/**
 * Start parsing hint items
 *
 * @api private
 */
export declare function populateHints(targetElm: HTMLElement): Promise<boolean>;
/**
 * Re-aligns all hint elements
 *
 * @api private
 */
export declare function reAlignHints(): void;

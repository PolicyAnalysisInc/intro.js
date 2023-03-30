import { Step } from "./steps";
/**
 * Deletes and recreates the bullets layer
 * @private
 */
export declare function _recreateBullets(targetElement: Step): void;
/**
 * Updates an existing progress bar variables
 * @param oldReferenceLayer
 * @private
 */
export declare function _updateProgressBar(oldReferenceLayer: any): void;
/**
 * Show an element on the page
 *
 * @api private
 */
export default function _showElement(targetElement: Step): Promise<void>;

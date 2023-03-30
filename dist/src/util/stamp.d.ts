/**
 * Mark any object with an incrementing number
 * used for keeping track of objects
 *
 * @param Object obj   Any object or DOM Element
 * @param String key
 * @return Object
 */
declare const stamp: (obj: any, key?: string) => any;
export default stamp;

/*
 *  Contains utility functions related user=interface & Tailwind classes.
 *  Created On 21 December 2021
 */

// joins multiple CSS class strings into one while taking
// care such that there's leading & tailing spaces and spaces in between
// the css classes
export const join = (classNames: string[]) => ` ${classNames.filter(className => Boolean(className)).join(' ')} `

// returns a bool depending on if the stencil.js component
// has been rendered or not, should pass this.element as the argument
export const isHydrated = (element: HTMLElement) => element.classList.contains('hydrated')

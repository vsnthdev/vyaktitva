/*
 *  Contains utility functions related user=interface & Tailwind classes.
 *  Created On 21 December 2021
 */


export const join = (classNames: string[]) => ` ${classNames.filter(className => Boolean(className)).join(' ')} `
export const getTheme = (variant: string, variants: Object, identifier: string) => variants[identifier][variant]

// returns a bool depending on if the stencil.js component
// has been rendered or not, should pass this.element as the argument
export const isHydrated = (element: HTMLElement) => element.classList.contains('hydrated')

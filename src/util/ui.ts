/*
 *  Contains utility functions related user=interface & Tailwind classes.
 *  Created On 21 December 2021
 */


export const join = (classNames: string[]) => ` ${classNames.filter(className => Boolean(className)).join(' ')} `
export const getTheme = (variant: string, variants: Object, identifier: string) => variants[identifier][variant]

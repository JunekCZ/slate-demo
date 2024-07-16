import { IModifiers } from "../types";

type IClassNameGenerator = (
  elementOrModifiers?: IModifiers | string,
  modifiers?: IModifiers
) => string;

const ELEMENT_SEPARATOR = "__";
const MODIFIER_SEPARATOR = "--";
const MODIFIER_VALUE_SEPARATOR = "_";

const convertBemToClassName = (
  block: string,
  element?: string,
  modifier?: IModifiers
) => {
  let className = element ? block + ELEMENT_SEPARATOR + element : block;

  if (modifier) {
    const prefix = " " + className + MODIFIER_SEPARATOR;

    for (const key in modifier) {
      if (modifier.hasOwnProperty(key)) {
        const modifierValue = modifier[key];

        if (modifierValue === true) {
          className += prefix + key;
        } else if (modifierValue) {
          className += prefix + key + MODIFIER_VALUE_SEPARATOR + modifierValue;
        }
      }
    }
  }

  return className;
};

/**
 * Function that returns other function that generates class names from
 * available names of element or modifier.
 * @param blockName Name of block
 * @param elementName Name of element in block
 * @returns Function that generates class names
 * and returns string of class names.
 */
export const createClassNames =
  (blockName: string, elementName?: string): IClassNameGenerator =>
  (
    elementOrModifiers?: IModifiers | string,
    modifiers?: IModifiers
  ): string => {
    if (typeof elementOrModifiers === "string") {
      return convertBemToClassName(blockName, elementOrModifiers, modifiers);
    }
    return convertBemToClassName(blockName, elementName, elementOrModifiers);
  };

export const moveArrayItem = <T>(array: T[], from: number, to: number) => {
  const [item] = array.splice(from, 1);
  array.splice(to, 0, item);
};

export const removeArrayItem = <T>(array: T[], index: number) => {
  const arrCopy = [...array];
  if (index >= 0 && index < arrCopy.length) {
    arrCopy.splice(index, 1);
  }

  return arrCopy;
};

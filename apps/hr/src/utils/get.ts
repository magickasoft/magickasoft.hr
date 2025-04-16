/**
 * A function that retrieves a nested property from an object based on a given path.
 *
 * @param {any} obj - The object to retrieve the property from
 * @param {string} path - The path to the nested property
 * @param {any} defaultValue - The default value to return if the property is not found
 * @return {any} The value of the nested property or the default value
 */
export function get(obj: any, path: string, defaultValue: any = undefined): any {
  const pathParts = path.split(/[,[\].]+/);

  let result = obj;
  for (const part of pathParts) {
    if (result === null || result === undefined) {
      return defaultValue;
    }

    result = result[part];
  }

  return result === undefined ? defaultValue : result;
}

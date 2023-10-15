export default class StringUtils {
  generateOTP(length: number): number {
    return Math.random() * 10 ** length;
  }

  generateRandomString(length: number): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }

  slugify(inputString: string): string {
    return inputString.trim().replace(/ /g, "-").toLowerCase();
  }

  toPascalCase(inputString: string) {
    const words = inputString.split(/[\s\-_]+/);
    const pascalCaseString = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    return pascalCaseString;
  }

  toCamelCase(inputString: string) {
    const words = inputString.split(/[\s\-_]+/);
    const camelCaseString = words.reduce((result, word, index) => {
      if (index === 0) {
        return word;
      }
      return result + word.charAt(0).toUpperCase() + word.slice(1);
    }, "");
    return camelCaseString;
  }

  toSnakeCase(inputString: string): string {
    const words = inputString.trim().split(/[\s\-_ ]+/);
    const snakeCaseString = words.reduce((result, word, index) => {
      if (index === 0) {
        return word;
      }
      return result + "_" + word;
    }, "");
    return snakeCaseString;
  }
}

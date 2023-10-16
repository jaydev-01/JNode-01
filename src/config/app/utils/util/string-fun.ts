import { PhoneNumberLengthAndCountryCode } from "../../enums/phone-number-length-and-country-code.enum";

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

  // ---------------------------------- function to manipulate string case ----------------------------
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

  toCapitalize(inputString: string): string {
    return inputString[0].toUpperCase() + inputString.slice(1);
  }
  // ---------------------------------- function to manipulate string case ----------------------------

  // ---------------------------------- function to convert singular && plural --------------------------------
  singularize(inputString: string): string {
    if (inputString.endsWith("s")) {
      return inputString.slice(0, -1);
    } else if (inputString.endsWith("ies")) {
      return inputString.slice(0, -3) + "y";
    } else {
      return inputString;
    }
  }

  pluralize(inputString: string): string {
    if (inputString.endsWith("s")) {
      return inputString;
    } else if (inputString.endsWith("y")) {
      return inputString.slice(0, -1) + "ies";
    } else {
      return inputString + "s";
    }
  }
  // ---------------------------------- function to convert singular && plural --------------------------------

  // ---------------------------------- function to do certain validation --------------------------------------
  isEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  isUrl(url: string): boolean {
    const urlRegex = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    return urlRegex.test(url);
  }

  isPhoneNumber(countryCode: string, phoneNumber: string): boolean {
    const phoneRegex = new RegExp(PhoneNumberLengthAndCountryCode[countryCode]);
    return phoneRegex.test(phoneNumber);
  }
  // ---------------------------------- function to do certain validation --------------------------------------

  // --------------------------------- function to count numeric value of strings--------------------------------
  getWordCount(inputString: string): number {
    const words = inputString.split(/\s+/);
    return words.length;
  }

  getSentenceCount(inputString: string): number {
    const sentences = inputString.split(/[.!?]/);
    const nonEmptySentences = sentences.filter(
      (sentence) => sentence.trim() !== ""
    );
    return nonEmptySentences.length;
  }

  getVowelsCount(inputString: string): number {
    const vowelRegex = /[aeiou]/gi;
    const vowelMatches = inputString.match(vowelRegex);
    return vowelMatches ? vowelMatches.length : 0;
  }

  getConstantsCount(inputString: string): number {
    const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gi;
    const consonantMatches = inputString.match(consonantRegex);
    return consonantMatches ? consonantMatches.length : 0;
  }
  // --------------------------------- function to count numeric value of strings -------------------------------
}

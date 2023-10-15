import dotenv from "dotenv";

export default class Config {
  constructor() {
    dotenv.config();
  }
  get(key: string) {
    return process.env[key];
  }
}

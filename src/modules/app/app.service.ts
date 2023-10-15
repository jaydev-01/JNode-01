export class AppService {
  constructor() {}

  async get(): Promise<string> {
    return "Hello World!";
  }
}

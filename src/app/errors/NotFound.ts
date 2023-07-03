export class NotFound extends Error {
    constructor(name: string) {
      super(`${name} not found`);
      this.name = 'Not Found';
    }
}

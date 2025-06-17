
export class UnauthorizedAccessException extends Error {

  constructor() {
    super("You have no access");
  }

}
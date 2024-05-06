class CustomError extends Error {
  status: number;

  constructor(message: string, name: string, status: number) {
    super(message);
    this.name = name;
    this.status = status;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

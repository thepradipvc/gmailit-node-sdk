import { ErrorResponse, GMAILIT_ERROR_CODE_KEY } from "./interfaces";

export const isGmailitErrorResponse = (
  response: unknown
): response is ErrorResponse => {
  if (typeof response !== "object" || response === null) {
    return false;
  }

  const error = response as ErrorResponse;

  if (typeof error !== "object" || error === null) {
    return false;
  }

  const { message, name } = error;

  return typeof message === "string" && typeof name === "string";
};

export class GmailitError extends Error {
  public readonly name: GMAILIT_ERROR_CODE_KEY;

  public constructor(message: string, name: GMAILIT_ERROR_CODE_KEY) {
    super();
    this.message = message;
    this.name = name;
  }

  public static fromResponse(response: ErrorResponse) {
    const error = response;
    return new GmailitError(error.message, error.name);
  }

  public override toString() {
    return JSON.stringify(
      {
        message: this.message,
        name: this.name,
      },
      null,
      2
    );
  }
}

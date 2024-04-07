export const GMAILIT_ERROR_CODES_BY_KEY = {
  missing_required_field: 422,
  // invalid_access: 422,
  // invalid_parameter: 422,
  rate_limit_exceeded: 429,
  missing_api_key: 401,
  invalid_api_Key: 403,
  invalid_json_payload: 400,
  invalid_from_address: 403,
  validation_error: 422,
  not_found: 404,
  method_not_allowed: 405,
  application_error: 500,
  internal_server_error: 500,
} as const;

export type GMAILIT_ERROR_CODE_KEY = keyof typeof GMAILIT_ERROR_CODES_BY_KEY;

export interface ErrorResponse {
  message: string;
  name: GMAILIT_ERROR_CODE_KEY;
}

export type Tag = { name: string; value: string };

export interface GetOptions {
  query?: Record<string, any>;
}

export interface PostOptions {
  query?: { [key: string]: any };
}

export interface List<T> {
  readonly object: "list";
  data: T[];
}

export type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

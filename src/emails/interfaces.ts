import { ErrorResponse } from "../interfaces";
import * as React from "react";
import { PostOptions } from "../interfaces";
import { RequireAtLeastOne } from "../interfaces";

export interface GetEmailResponseSuccess {
  bcc: string[] | null;
  cc: string[] | null;
  created_at: string;
  from: string;
  html: string | null;
  id: string;
  last_event: string;
  reply_to: string[] | null;
  subject: string;
  text: string | null;
  to: string[];
  object: "email";
}

export interface GetEmailResponse {
  data: GetEmailResponseSuccess | null;
  error: ErrorResponse | null;
}

interface EmailRenderOptions {
  react?: React.ReactElement | React.ReactNode | null;
  html?: string;
  text?: string;
}

interface CreateEmailBaseOptions extends EmailRenderOptions {
  bcc?: string | string[];
  cc?: string | string[];
  from: string;
  reply_to?: string | string[];
  subject: string;
  to: string | string[];
}

export type CreateEmailOptions = RequireAtLeastOne<EmailRenderOptions> &
  CreateEmailBaseOptions;

export interface CreateEmailRequestOptions extends PostOptions {}

export interface CreateEmailResponseSuccess {
  id: string;
}

export interface CreateEmailResponse {
  data: CreateEmailResponseSuccess | null;
  error: ErrorResponse | null;
}

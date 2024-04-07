import { renderAsync } from "@react-email/render";
import * as React from "react";
import { Gmailit } from "../gmailit";
import {
  CreateEmailOptions,
  CreateEmailRequestOptions,
  CreateEmailResponse,
  CreateEmailResponseSuccess,
  GetEmailResponse,
  GetEmailResponseSuccess,
} from "./interfaces";

export class Emails {
  constructor(private readonly gmailit: Gmailit) {}

  async send(
    payload: CreateEmailOptions,
    options: CreateEmailRequestOptions = {}
  ) {
    return this.create(payload, options);
  }

  private async create(
    payload: CreateEmailOptions,
    options: CreateEmailRequestOptions = {}
  ): Promise<CreateEmailResponse> {
    if (payload.react) {
      payload.html = await renderAsync(payload.react as React.ReactElement);
      delete payload.react;
    }

    const data = await this.gmailit.post<CreateEmailResponseSuccess>(
      "/emails",
      payload,
      options
    );

    return data;
  }

  async get(id: string): Promise<GetEmailResponse> {
    const data = await this.gmailit.get<GetEmailResponseSuccess>(
      `/emails/${id}`
    );
    return data;
  }
}

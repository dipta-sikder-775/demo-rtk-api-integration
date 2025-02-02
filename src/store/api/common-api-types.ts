export type TNullish = null | undefined;

export type TApiResponse<
  TData,
  TMethod extends "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
> = {
  data?:
    | {
        statusCode: number | TNullish;
        message: string | TNullish;
        data: TData | TNullish;
      }
    | TNullish;
  isArray: TData extends Array<any> ? true : false;
  path: string;
  duration: string;
  method: TMethod;
};

export type TPaginationApiResponse<TData, TMethod extends "GET" | "POST"> = {
  data?:
    | {
        statusCode: number | TNullish;
        message: string | TNullish;
        data?:
          | {
              data?: TData | TNullish;
              pagination?:
                | {
                    page: number | TNullish;
                    limit: number | TNullish;
                    totalItems: number | TNullish;
                    totalPages: number | TNullish;
                  }
                | TNullish;
            }
          | TNullish;
      }
    | TNullish;
  isArray: false;
  path: string;
  duration: string;
  method: TMethod;
};

export type TUpdateOptionalArgs<T> = {
  id: number | string | TNullish;
  body: Partial<T>;
};

export type TErrorResponse = {
  message?: string[] | TNullish;
  error?: string;
  statusCode?: number;
  timestamp?: string;
  path?: string;
};

export type TApiErrorResponse = {
  message?: string;
  error?: string;
  statusCode?: number;
};

export interface IPaginationArgs {
  page?: number | string;
  limit?: number | string;
}

export type TPaginationResData = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

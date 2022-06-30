export interface APIDataResponse {
  items: object[];
}

export interface APIErrorResponse {
  message: string;
  errors: object[];
}

export interface APIResponse<T = APIDataResponse> {
  data?: T;
  error?: APIErrorResponse;
}

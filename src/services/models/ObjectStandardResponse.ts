/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpStatusCode } from './HttpStatusCode';
export type ObjectStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: any;
  statusCode?: HttpStatusCode;
  errors?: any;
};

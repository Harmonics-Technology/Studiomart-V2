/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceView } from './ServiceView';
import type { StudioView } from './StudioView';
import type { UserView } from './UserView';
export type RecentlyViewedView = {
  userId?: string;
  serviceId?: string | null;
  studioId?: string | null;
  user?: UserView;
  service?: ServiceView;
  studio?: StudioView;
};

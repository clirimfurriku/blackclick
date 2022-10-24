/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum BlankEnum {
  Type = "",
}

export interface Campaign {
  id: number;
  name: string;
  /** @format date-time */
  start_time: string;
  /** @format date-time */
  end_time: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  status?: StatusEnum | BlankEnum;
  created_by: number;
}

export interface CampaignRequest {
  name: string;
  /** @format date-time */
  start_time: string;
  /** @format date-time */
  end_time: string;
  status?: StatusEnum | BlankEnum;
}

export enum DeviceTypeEnum {
  Desktop = "Desktop",
  Mobile = "Mobile",
  Tablet = "Tablet",
  Random = "Random",
}

export interface PaginatedCampaignList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;
  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Campaign[];
}

export interface PaginatedTaskList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;
  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Task[];
}

export interface PaginatedUserList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;
  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: User[];
}

export interface PaginatedVisitScheduleList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;
  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: VisitSchedule[];
}

export interface PatchedCampaignRequest {
  name?: string;
  /** @format date-time */
  start_time?: string;
  /** @format date-time */
  end_time?: string;
  status?: StatusEnum | BlankEnum;
}

export interface PatchedTaskRequest {
  query?: string;
  /** @format date-time */
  start_time?: string;
  /** @format date-time */
  end_time?: string;
  campaign?: number;
}

export interface PatchedUserRequest {
  /**
   * Email address
   * @format email
   */
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
}

export interface PatchedVisitScheduleRequest {
  device_type?: DeviceTypeEnum;
  screen_size?: ScreenSizeEnum;
  periodic?: boolean;
  repeat?: number;
  repeat_every_min_start?: number;
  repeat_every_min_end?: number | null;
  visit_x_nuber_of_first_results?: number;
  /** @format date-time */
  last_run?: string | null;
  /** @format date-time */
  start_time?: string;
  task?: number;
  country?: number | null;
  city?: number | null;
}

export enum ScreenSizeEnum {
  Big = "Big",
  Medium = "Medium",
  Small = "Small",
  Random = "Random",
}

export enum StatusEnum {
  C = "c",
  P = "p",
  F = "f",
  D = "d",
}

export interface Task {
  id: number;
  query: string;
  status: StatusEnum;
  /** @format date-time */
  start_time: string;
  /** @format date-time */
  end_time: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  created_by: number;
  campaign: number;
}

export interface TaskRequest {
  query: string;
  /** @format date-time */
  start_time: string;
  /** @format date-time */
  end_time: string;
  campaign: number;
}

export interface TokenObtainPair {
  access: string;
  refresh: string;
}

export interface TokenObtainPairRequest {
  username: string;
  password: string;
}

export interface TokenRefresh {
  access: string;
  refresh: string;
}

export interface TokenRefreshRequest {
  refresh: string;
}

export interface TokenVerifyRequest {
  token: string;
}

export interface User {
  id: number;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
  /**
   * Email address
   * @format email
   */
  email?: string;
  first_name?: string;
  last_name?: string;
  /** @format date-time */
  date_joined: string;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups: number[];
  /** Specific permissions for this user. */
  user_permissions: number[];
}

export interface UserRequest {
  /**
   * Email address
   * @format email
   */
  email?: string;
  first_name?: string;
  last_name?: string;
  password: string;
}

export interface VisitSchedule {
  id: number;
  status: StatusEnum;
  device_type?: DeviceTypeEnum;
  screen_size?: ScreenSizeEnum;
  periodic?: boolean;
  repeat?: number;
  repeat_every_min_start: number;
  repeat_every_min_end?: number | null;
  visit_x_nuber_of_first_results?: number;
  /** @format date-time */
  last_run?: string | null;
  /** @format date-time */
  start_time: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  task: number;
  country?: number | null;
  city?: number | null;
  created_by: number;
}

export interface VisitScheduleRequest {
  device_type?: DeviceTypeEnum;
  screen_size?: ScreenSizeEnum;
  periodic?: boolean;
  repeat?: number;
  repeat_every_min_start: number;
  repeat_every_min_end?: number | null;
  visit_x_nuber_of_first_results?: number;
  /** @format date-time */
  last_run?: string | null;
  /** @format date-time */
  start_time: string;
  task: number;
  country?: number | null;
  city?: number | null;
}

export interface CampaignCampaignsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** A search term. */
  search?: string;
  status?: "c" | "d" | "f" | "p";
}

export interface JobsTasksListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** A search term. */
  search?: string;
  status?: "c" | "d" | "f" | "p";
}

export interface UsersUsersListParams {
  /** A page number within the paginated result set. */
  page?: number;
}

export interface VisitsSchedulesListParams {
  /** A page number within the paginated result set. */
  page?: number;
}

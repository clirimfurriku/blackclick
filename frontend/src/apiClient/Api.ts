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

import {
  Campaign,
  CampaignCampaignsListParams,
  CampaignRequest,
  JobsTasksListParams,
  PaginatedCampaignList,
  PaginatedTaskList,
  PaginatedUserList,
  PatchedCampaignRequest,
  PatchedTaskRequest,
  PatchedUserRequest,
  Task,
  TaskRequest,
  TokenObtainPair,
  TokenObtainPairRequest,
  TokenRefresh,
  TokenRefreshRequest,
  TokenVerifyRequest,
  User,
  UserRequest,
  UsersUsersListParams,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags campaign
   * @name CampaignCampaignsList
   * @request GET:/api/campaign/campaigns/
   * @secure
   * @response `200` `PaginatedCampaignList`
   */
  campaignCampaignsList = (
    query: CampaignCampaignsListParams,
    params: RequestParams = {}
  ) =>
    this.request<PaginatedCampaignList, any>({
      path: `/api/campaign/campaigns/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags campaign
   * @name CampaignCampaignsCreate
   * @request POST:/api/campaign/campaigns/
   * @secure
   * @response `201` `Campaign`
   */
  campaignCampaignsCreate = (
    data: CampaignRequest,
    params: RequestParams = {}
  ) =>
    this.request<Campaign, any>({
      path: `/api/campaign/campaigns/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags campaign
   * @name CampaignCampaignsRetrieve
   * @request GET:/api/campaign/campaigns/{id}/
   * @secure
   * @response `200` `Campaign`
   */
  campaignCampaignsRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<Campaign, any>({
      path: `/api/campaign/campaigns/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags campaign
   * @name CampaignCampaignsUpdate
   * @request PUT:/api/campaign/campaigns/{id}/
   * @secure
   * @response `200` `Campaign`
   */
  campaignCampaignsUpdate = (
    id: number,
    data: CampaignRequest,
    params: RequestParams = {}
  ) =>
    this.request<Campaign, any>({
      path: `/api/campaign/campaigns/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags campaign
   * @name CampaignCampaignsPartialUpdate
   * @request PATCH:/api/campaign/campaigns/{id}/
   * @secure
   * @response `200` `Campaign`
   */
  campaignCampaignsPartialUpdate = (
    id: number,
    data: PatchedCampaignRequest,
    params: RequestParams = {}
  ) =>
    this.request<Campaign, any>({
      path: `/api/campaign/campaigns/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags campaign
   * @name CampaignCampaignsDestroy
   * @request DELETE:/api/campaign/campaigns/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  campaignCampaignsDestroy = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/campaign/campaigns/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags jobs
   * @name JobsTasksList
   * @request GET:/api/jobs/tasks/
   * @secure
   * @response `200` `PaginatedTaskList`
   */
  jobsTasksList = (query: JobsTasksListParams, params: RequestParams = {}) =>
    this.request<PaginatedTaskList, any>({
      path: `/api/jobs/tasks/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags jobs
   * @name JobsTasksCreate
   * @request POST:/api/jobs/tasks/
   * @secure
   * @response `201` `Task`
   */
  jobsTasksCreate = (data: TaskRequest, params: RequestParams = {}) =>
    this.request<Task, any>({
      path: `/api/jobs/tasks/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags jobs
   * @name JobsTasksRetrieve
   * @request GET:/api/jobs/tasks/{id}/
   * @secure
   * @response `200` `Task`
   */
  jobsTasksRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<Task, any>({
      path: `/api/jobs/tasks/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags jobs
   * @name JobsTasksUpdate
   * @request PUT:/api/jobs/tasks/{id}/
   * @secure
   * @response `200` `Task`
   */
  jobsTasksUpdate = (
    id: number,
    data: TaskRequest,
    params: RequestParams = {}
  ) =>
    this.request<Task, any>({
      path: `/api/jobs/tasks/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags jobs
   * @name JobsTasksPartialUpdate
   * @request PATCH:/api/jobs/tasks/{id}/
   * @secure
   * @response `200` `Task`
   */
  jobsTasksPartialUpdate = (
    id: number,
    data: PatchedTaskRequest,
    params: RequestParams = {}
  ) =>
    this.request<Task, any>({
      path: `/api/jobs/tasks/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags jobs
   * @name JobsTasksDestroy
   * @request DELETE:/api/jobs/tasks/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  jobsTasksDestroy = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/jobs/tasks/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
   *
   * @tags token
   * @name TokenCreate
   * @request POST:/api/token/
   * @response `200` `TokenObtainPair`
   */
  tokenCreate = (data: TokenObtainPairRequest, params: RequestParams = {}) =>
    this.request<TokenObtainPair, any>({
      path: `/api/token/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
   *
   * @tags token
   * @name TokenRefreshCreate
   * @request POST:/api/token/refresh/
   * @response `200` `TokenRefresh`
   */
  tokenRefreshCreate = (
    data: TokenRefreshRequest,
    params: RequestParams = {}
  ) =>
    this.request<TokenRefresh, any>({
      path: `/api/token/refresh/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
   *
   * @tags token
   * @name TokenVerifyCreate
   * @request POST:/api/token/verify/
   * @response `200` `void` No response body
   */
  tokenVerifyCreate = (data: TokenVerifyRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/token/verify/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Retrieve a user's details or update. Only the user himself can access this view.
   *
   * @tags users
   * @name UsersMeRetrieve
   * @request GET:/api/users/me/
   * @secure
   * @response `200` `User`
   */
  usersMeRetrieve = (params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/users/me/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve a user's details or update. Only the user himself can access this view.
   *
   * @tags users
   * @name UsersMeUpdate
   * @request PUT:/api/users/me/
   * @secure
   * @response `200` `User`
   */
  usersMeUpdate = (data: UserRequest, params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/users/me/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve a user's details or update. Only the user himself can access this view.
   *
   * @tags users
   * @name UsersMePartialUpdate
   * @request PATCH:/api/users/me/
   * @secure
   * @response `200` `User`
   */
  usersMePartialUpdate = (
    data: PatchedUserRequest,
    params: RequestParams = {}
  ) =>
    this.request<User, any>({
      path: `/api/users/me/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve all users on the system
   *
   * @tags users
   * @name UsersUsersList
   * @request GET:/api/users/users/
   * @secure
   * @response `200` `PaginatedUserList`
   */
  usersUsersList = (query: UsersUsersListParams, params: RequestParams = {}) =>
    this.request<PaginatedUserList, any>({
      path: `/api/users/users/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve all users on the system
   *
   * @tags users
   * @name UsersUsersCreate
   * @request POST:/api/users/users/
   * @secure
   * @response `201` `User`
   */
  usersUsersCreate = (data: UserRequest, params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/users/users/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve all users on the system
   *
   * @tags users
   * @name UsersUsersRetrieve
   * @request GET:/api/users/users/{id}/
   * @secure
   * @response `200` `User`
   */
  usersUsersRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/users/users/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve all users on the system
   *
   * @tags users
   * @name UsersUsersUpdate
   * @request PUT:/api/users/users/{id}/
   * @secure
   * @response `200` `User`
   */
  usersUsersUpdate = (
    id: number,
    data: UserRequest,
    params: RequestParams = {}
  ) =>
    this.request<User, any>({
      path: `/api/users/users/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve all users on the system
   *
   * @tags users
   * @name UsersUsersPartialUpdate
   * @request PATCH:/api/users/users/{id}/
   * @secure
   * @response `200` `User`
   */
  usersUsersPartialUpdate = (
    id: number,
    data: PatchedUserRequest,
    params: RequestParams = {}
  ) =>
    this.request<User, any>({
      path: `/api/users/users/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve all users on the system
   *
   * @tags users
   * @name UsersUsersDestroy
   * @request DELETE:/api/users/users/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  usersUsersDestroy = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/users/users/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}

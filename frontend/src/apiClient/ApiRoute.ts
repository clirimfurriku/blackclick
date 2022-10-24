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
  CampaignRequest,
  PaginatedCampaignList,
  PaginatedTaskList,
  PaginatedUserList,
  PaginatedVisitScheduleList,
  PatchedCampaignRequest,
  PatchedTaskRequest,
  PatchedUserRequest,
  PatchedVisitScheduleRequest,
  Task,
  TaskRequest,
  TokenObtainPair,
  TokenObtainPairRequest,
  TokenRefresh,
  TokenRefreshRequest,
  TokenVerifyRequest,
  User,
  UserRequest,
  VisitSchedule,
  VisitScheduleRequest,
} from "./data-contracts";

export namespace Api {
  /**
   * No description
   * @tags campaign
   * @name CampaignCampaignsList
   * @request GET:/api/campaign/campaigns/
   * @secure
   * @response `200` `PaginatedCampaignList`
   */
  export namespace CampaignCampaignsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** A page number within the paginated result set. */
      page?: number;
      /** A search term. */
      search?: string;
      status?: "c" | "d" | "f" | "p";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PaginatedCampaignList;
  }

  /**
   * No description
   * @tags campaign
   * @name CampaignCampaignsCreate
   * @request POST:/api/campaign/campaigns/
   * @secure
   * @response `201` `Campaign`
   */
  export namespace CampaignCampaignsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CampaignRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Campaign;
  }

  /**
   * No description
   * @tags campaign
   * @name CampaignCampaignsRetrieve
   * @request GET:/api/campaign/campaigns/{id}/
   * @secure
   * @response `200` `Campaign`
   */
  export namespace CampaignCampaignsRetrieve {
    export type RequestParams = {
      /** A unique integer value identifying this campaign. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Campaign;
  }

  /**
   * No description
   * @tags campaign
   * @name CampaignCampaignsUpdate
   * @request PUT:/api/campaign/campaigns/{id}/
   * @secure
   * @response `200` `Campaign`
   */
  export namespace CampaignCampaignsUpdate {
    export type RequestParams = {
      /** A unique integer value identifying this campaign. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CampaignRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Campaign;
  }

  /**
   * No description
   * @tags campaign
   * @name CampaignCampaignsPartialUpdate
   * @request PATCH:/api/campaign/campaigns/{id}/
   * @secure
   * @response `200` `Campaign`
   */
  export namespace CampaignCampaignsPartialUpdate {
    export type RequestParams = {
      /** A unique integer value identifying this campaign. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchedCampaignRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Campaign;
  }

  /**
   * No description
   * @tags campaign
   * @name CampaignCampaignsDestroy
   * @request DELETE:/api/campaign/campaigns/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace CampaignCampaignsDestroy {
    export type RequestParams = {
      /** A unique integer value identifying this campaign. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags jobs
   * @name JobsTasksList
   * @request GET:/api/jobs/tasks/
   * @secure
   * @response `200` `PaginatedTaskList`
   */
  export namespace JobsTasksList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** A page number within the paginated result set. */
      page?: number;
      /** A search term. */
      search?: string;
      status?: "c" | "d" | "f" | "p";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PaginatedTaskList;
  }

  /**
   * No description
   * @tags jobs
   * @name JobsTasksCreate
   * @request POST:/api/jobs/tasks/
   * @secure
   * @response `201` `Task`
   */
  export namespace JobsTasksCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TaskRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Task;
  }

  /**
   * No description
   * @tags jobs
   * @name JobsTasksRetrieve
   * @request GET:/api/jobs/tasks/{id}/
   * @secure
   * @response `200` `Task`
   */
  export namespace JobsTasksRetrieve {
    export type RequestParams = {
      /** A unique integer value identifying this task. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Task;
  }

  /**
   * No description
   * @tags jobs
   * @name JobsTasksUpdate
   * @request PUT:/api/jobs/tasks/{id}/
   * @secure
   * @response `200` `Task`
   */
  export namespace JobsTasksUpdate {
    export type RequestParams = {
      /** A unique integer value identifying this task. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = TaskRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Task;
  }

  /**
   * No description
   * @tags jobs
   * @name JobsTasksPartialUpdate
   * @request PATCH:/api/jobs/tasks/{id}/
   * @secure
   * @response `200` `Task`
   */
  export namespace JobsTasksPartialUpdate {
    export type RequestParams = {
      /** A unique integer value identifying this task. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchedTaskRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Task;
  }

  /**
   * No description
   * @tags jobs
   * @name JobsTasksDestroy
   * @request DELETE:/api/jobs/tasks/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace JobsTasksDestroy {
    export type RequestParams = {
      /** A unique integer value identifying this task. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
   * @tags token
   * @name TokenCreate
   * @request POST:/api/token/
   * @response `200` `TokenObtainPair`
   */
  export namespace TokenCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenObtainPairRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TokenObtainPair;
  }

  /**
   * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
   * @tags token
   * @name TokenRefreshCreate
   * @request POST:/api/token/refresh/
   * @response `200` `TokenRefresh`
   */
  export namespace TokenRefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenRefreshRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TokenRefresh;
  }

  /**
   * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
   * @tags token
   * @name TokenVerifyCreate
   * @request POST:/api/token/verify/
   * @response `200` `void` No response body
   */
  export namespace TokenVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenVerifyRequest;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description Retrieve a user's details or update. Only the user himself can access this view.
   * @tags users
   * @name UsersMeRetrieve
   * @request GET:/api/users/me/
   * @secure
   * @response `200` `User`
   */
  export namespace UsersMeRetrieve {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }

  /**
   * @description Retrieve a user's details or update. Only the user himself can access this view.
   * @tags users
   * @name UsersMeUpdate
   * @request PUT:/api/users/me/
   * @secure
   * @response `200` `User`
   */
  export namespace UsersMeUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserRequest;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }

  /**
   * @description Retrieve a user's details or update. Only the user himself can access this view.
   * @tags users
   * @name UsersMePartialUpdate
   * @request PATCH:/api/users/me/
   * @secure
   * @response `200` `User`
   */
  export namespace UsersMePartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PatchedUserRequest;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }

  /**
   * @description Retrieve all users on the system
   * @tags users
   * @name UsersUsersList
   * @request GET:/api/users/users/
   * @secure
   * @response `200` `PaginatedUserList`
   */
  export namespace UsersUsersList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** A page number within the paginated result set. */
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PaginatedUserList;
  }

  /**
   * @description Retrieve all users on the system
   * @tags users
   * @name UsersUsersCreate
   * @request POST:/api/users/users/
   * @secure
   * @response `201` `User`
   */
  export namespace UsersUsersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserRequest;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }

  /**
   * @description Retrieve all users on the system
   * @tags users
   * @name UsersUsersRetrieve
   * @request GET:/api/users/users/{id}/
   * @secure
   * @response `200` `User`
   */
  export namespace UsersUsersRetrieve {
    export type RequestParams = {
      /** A unique integer value identifying this user. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }

  /**
   * @description Retrieve all users on the system
   * @tags users
   * @name UsersUsersUpdate
   * @request PUT:/api/users/users/{id}/
   * @secure
   * @response `200` `User`
   */
  export namespace UsersUsersUpdate {
    export type RequestParams = {
      /** A unique integer value identifying this user. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = UserRequest;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }

  /**
   * @description Retrieve all users on the system
   * @tags users
   * @name UsersUsersPartialUpdate
   * @request PATCH:/api/users/users/{id}/
   * @secure
   * @response `200` `User`
   */
  export namespace UsersUsersPartialUpdate {
    export type RequestParams = {
      /** A unique integer value identifying this user. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchedUserRequest;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }

  /**
   * @description Retrieve all users on the system
   * @tags users
   * @name UsersUsersDestroy
   * @request DELETE:/api/users/users/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace UsersUsersDestroy {
    export type RequestParams = {
      /** A unique integer value identifying this user. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags visits
   * @name VisitsSchedulesList
   * @request GET:/api/visits/schedules/
   * @secure
   * @response `200` `PaginatedVisitScheduleList`
   */
  export namespace VisitsSchedulesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** A page number within the paginated result set. */
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PaginatedVisitScheduleList;
  }

  /**
   * No description
   * @tags visits
   * @name VisitsSchedulesCreate
   * @request POST:/api/visits/schedules/
   * @secure
   * @response `201` `VisitSchedule`
   */
  export namespace VisitsSchedulesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VisitScheduleRequest;
    export type RequestHeaders = {};
    export type ResponseBody = VisitSchedule;
  }

  /**
   * No description
   * @tags visits
   * @name VisitsSchedulesRetrieve
   * @request GET:/api/visits/schedules/{id}/
   * @secure
   * @response `200` `VisitSchedule`
   */
  export namespace VisitsSchedulesRetrieve {
    export type RequestParams = {
      /** A unique integer value identifying this visit schedule. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VisitSchedule;
  }

  /**
   * No description
   * @tags visits
   * @name VisitsSchedulesUpdate
   * @request PUT:/api/visits/schedules/{id}/
   * @secure
   * @response `200` `VisitSchedule`
   */
  export namespace VisitsSchedulesUpdate {
    export type RequestParams = {
      /** A unique integer value identifying this visit schedule. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = VisitScheduleRequest;
    export type RequestHeaders = {};
    export type ResponseBody = VisitSchedule;
  }

  /**
   * No description
   * @tags visits
   * @name VisitsSchedulesPartialUpdate
   * @request PATCH:/api/visits/schedules/{id}/
   * @secure
   * @response `200` `VisitSchedule`
   */
  export namespace VisitsSchedulesPartialUpdate {
    export type RequestParams = {
      /** A unique integer value identifying this visit schedule. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchedVisitScheduleRequest;
    export type RequestHeaders = {};
    export type ResponseBody = VisitSchedule;
  }

  /**
   * No description
   * @tags visits
   * @name VisitsSchedulesDestroy
   * @request DELETE:/api/visits/schedules/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace VisitsSchedulesDestroy {
    export type RequestParams = {
      /** A unique integer value identifying this visit schedule. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

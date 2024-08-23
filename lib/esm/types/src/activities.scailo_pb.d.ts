import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the lifecycle status of each activity
 *
 * @generated from enum Scailo.ACTIVITY_LIFECYCLE
 */
export declare enum ACTIVITY_LIFECYCLE {
    /**
     * Used only in filters
     *
     * @generated from enum value: ACTIVITY_LIFECYCLE_ANY_UNSPECIFIED = 0;
     */
    ACTIVITY_LIFECYCLE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the activity is open
     *
     * @generated from enum value: ACTIVITY_LIFECYCLE_OPEN = 1;
     */
    ACTIVITY_LIFECYCLE_OPEN = 1,
    /**
     * Denotes that the activity has completed
     *
     * @generated from enum value: ACTIVITY_LIFECYCLE_COMPLETED = 2;
     */
    ACTIVITY_LIFECYCLE_COMPLETED = 2,
    /**
     * Denotes that the activity has been cancelled
     *
     * @generated from enum value: ACTIVITY_LIFECYCLE_CANCELLED = 3;
     */
    ACTIVITY_LIFECYCLE_CANCELLED = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ACTIVITY_SORT_KEY
 */
export declare enum ACTIVITY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ACTIVITY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ACTIVITY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ACTIVITY_SORT_KEY_CREATED_AT = 1;
     */
    ACTIVITY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ACTIVITY_SORT_KEY_MODIFIED_AT = 2;
     */
    ACTIVITY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ACTIVITY_SORT_KEY_COMPLETED_ON = 6;
     */
    ACTIVITY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: ACTIVITY_SORT_KEY_TITLE = 10;
     */
    ACTIVITY_SORT_KEY_TITLE = 10,
    /**
     * Fetch ordered results by the start time
     *
     * @generated from enum value: ACTIVITY_SORT_KEY_STARTS_AT = 11;
     */
    ACTIVITY_SORT_KEY_STARTS_AT = 11,
    /**
     * Fetch ordered results by the due by time
     *
     * @generated from enum value: ACTIVITY_SORT_KEY_DUE_BY = 12;
     */
    ACTIVITY_SORT_KEY_DUE_BY = 12
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ACTIVITY_ACTION_SORT_KEY
 */
export declare enum ACTIVITY_ACTION_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ACTIVITY_ACTION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ACTIVITY_ACTION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ACTIVITY_ACTION_SORT_KEY_CREATED_AT = 1;
     */
    ACTIVITY_ACTION_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ACTIVITY_ACTION_SORT_KEY_MODIFIED_AT = 2;
     */
    ACTIVITY_ACTION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: ACTIVITY_ACTION_SORT_KEY_TITLE = 10;
     */
    ACTIVITY_ACTION_SORT_KEY_TITLE = 10,
    /**
     * Fetch ordered results by the action code ID
     *
     * @generated from enum value: ACTIVITY_ACTION_SORT_KEY_ACTION_CODE_ID = 11;
     */
    ACTIVITY_ACTION_SORT_KEY_ACTION_CODE_ID = 11,
    /**
     * Fetch ordered results by the number of points
     *
     * @generated from enum value: ACTIVITY_ACTION_SORT_KEY_POINTS = 12;
     */
    ACTIVITY_ACTION_SORT_KEY_POINTS = 12
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ACTIVITY_TIMER_SORT_KEY
 */
export declare enum ACTIVITY_TIMER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ACTIVITY_TIMER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_CREATED_AT = 1;
     */
    ACTIVITY_TIMER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_MODIFIED_AT = 2;
     */
    ACTIVITY_TIMER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the activity ID
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_ACTIVITY_ID = 10;
     */
    ACTIVITY_TIMER_SORT_KEY_ACTIVITY_ID = 10,
    /**
     * Fetch ordered results by the activity action ID
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_ACTIVITY_ACTION_ID = 11;
     */
    ACTIVITY_TIMER_SORT_KEY_ACTIVITY_ACTION_ID = 11,
    /**
     * Fetch ordered results by the employee ID
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_EMPLOYEE_ID = 12;
     */
    ACTIVITY_TIMER_SORT_KEY_EMPLOYEE_ID = 12,
    /**
     * Fetch ordered results by the start timestamp
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_START_AT = 13;
     */
    ACTIVITY_TIMER_SORT_KEY_START_AT = 13,
    /**
     * Fetch ordered results by the end timestamp
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_END_AT = 14;
     */
    ACTIVITY_TIMER_SORT_KEY_END_AT = 14,
    /**
     * Fetch ordered results by the completion percentage
     *
     * @generated from enum value: ACTIVITY_TIMER_SORT_KEY_COMPLETION_PERCENTAGE = 15;
     */
    ACTIVITY_TIMER_SORT_KEY_COMPLETION_PERCENTAGE = 15
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being an activity lifecycle status
 *
 * @generated from message Scailo.LogbookLogActivityLC
 */
export declare class LogbookLogActivityLC extends Message<LogbookLogActivityLC> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * Stores if the resource is active
     *
     * @generated from field: bool is_active = 2;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: Scailo.ACTIVITY_LIFECYCLE operation = 11;
     */
    operation: ACTIVITY_LIFECYCLE;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The name of the person who made this entry
     *
     * @generated from field: string name = 13;
     */
    name: string;
    /**
     * The ID of the user who made this entry
     *
     * @generated from field: uint64 user_id = 14;
     */
    userId: bigint;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 15;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 16;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogActivityLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogActivityLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogActivityLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogActivityLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogActivityLC;
    static equals(a: LogbookLogActivityLC | PlainMessage<LogbookLogActivityLC> | undefined, b: LogbookLogActivityLC | PlainMessage<LogbookLogActivityLC> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ActivitiesServiceCreateRequest
 */
export declare class ActivitiesServiceCreateRequest extends Message<ActivitiesServiceCreateRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 7;
     */
    vaultFolderId: bigint;
    /**
     * The associated activity group ID
     *
     * @generated from field: uint64 activity_group_id = 8;
     */
    activityGroupId: bigint;
    /**
     * The associated activity status ID
     *
     * @generated from field: uint64 activity_status_id = 9;
     */
    activityStatusId: bigint;
    /**
     * The title of the activity
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 11;
     */
    startsAt: bigint;
    /**
     * The UNIX timestamp of when the activity needs to be completed
     *
     * @generated from field: uint64 due_by = 12;
     */
    dueBy: bigint;
    /**
     * The description of the activity
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * Assign self (the user creating the activity) as an owner
     *
     * @generated from field: bool assign_self_as_owner = 80;
     */
    assignSelfAsOwner: boolean;
    /**
     * Assign self (the user creating the activity) as a supervisor
     *
     * @generated from field: bool assign_self_as_supervisor = 81;
     */
    assignSelfAsSupervisor: boolean;
    constructor(data?: PartialMessage<ActivitiesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceCreateRequest;
    static equals(a: ActivitiesServiceCreateRequest | PlainMessage<ActivitiesServiceCreateRequest> | undefined, b: ActivitiesServiceCreateRequest | PlainMessage<ActivitiesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ActivitiesServiceUpdateRequest
 */
export declare class ActivitiesServiceUpdateRequest extends Message<ActivitiesServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 7;
     */
    vaultFolderId: bigint;
    /**
     * The associated activity group ID
     *
     * @generated from field: uint64 activity_group_id = 8;
     */
    activityGroupId: bigint;
    /**
     * The associated activity status ID
     *
     * @generated from field: uint64 activity_status_id = 9;
     */
    activityStatusId: bigint;
    /**
     * The title of the activity
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 11;
     */
    startsAt: bigint;
    /**
     * The UNIX timestamp of when the activity needs to be completed
     *
     * @generated from field: uint64 due_by = 12;
     */
    dueBy: bigint;
    /**
     * The description of the activity
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceUpdateRequest;
    static equals(a: ActivitiesServiceUpdateRequest | PlainMessage<ActivitiesServiceUpdateRequest> | undefined, b: ActivitiesServiceUpdateRequest | PlainMessage<ActivitiesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Activity
 */
export declare class Activity extends Message<Activity> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this activity
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this activity
     *
     * @generated from field: Scailo.ACTIVITY_LIFECYCLE status = 4;
     */
    status: ACTIVITY_LIFECYCLE;
    /**
     * Stores the logs of every operation performed on this activity
     *
     * @generated from field: repeated Scailo.LogbookLogActivityLC logs = 5;
     */
    logs: LogbookLogActivityLC[];
    /**
     * The timestamp of when this activity was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 7;
     */
    vaultFolderId: bigint;
    /**
     * The associated activity group ID
     *
     * @generated from field: uint64 activity_group_id = 8;
     */
    activityGroupId: bigint;
    /**
     * The associated activity status ID
     *
     * @generated from field: uint64 activity_status_id = 9;
     */
    activityStatusId: bigint;
    /**
     * The title of the activity
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 11;
     */
    startsAt: bigint;
    /**
     * The UNIX timestamp of when the activity needs to be completed
     *
     * @generated from field: uint64 due_by = 12;
     */
    dueBy: bigint;
    /**
     * The description of the activity
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * Stores the internal reference that is automatically generated
     *
     * @generated from field: string internal_ref = 50;
     */
    internalRef: string;
    constructor(data?: PartialMessage<Activity>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Activity";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Activity;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Activity;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Activity;
    static equals(a: Activity | PlainMessage<Activity> | undefined, b: Activity | PlainMessage<Activity> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ActivitiesList
 */
export declare class ActivitiesList extends Message<ActivitiesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Activity list = 1;
     */
    list: Activity[];
    constructor(data?: PartialMessage<ActivitiesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesList;
    static equals(a: ActivitiesList | PlainMessage<ActivitiesList> | undefined, b: ActivitiesList | PlainMessage<ActivitiesList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of an activity's statistics payload
 *
 * @generated from message Scailo.ActivityStatistics
 */
export declare class ActivityStatistics extends Message<ActivityStatistics> {
    /**
     * Stores the total amount of time spent on the activity
     *
     * @generated from field: uint64 total_duration = 1;
     */
    totalDuration: bigint;
    /**
     * Stores the cumulative completion percentage of the activity
     *
     * @generated from field: uint64 total_completion_percentage = 2;
     */
    totalCompletionPercentage: bigint;
    /**
     * Stores the total number of points
     *
     * @generated from field: uint64 total_points = 3;
     */
    totalPoints: bigint;
    constructor(data?: PartialMessage<ActivityStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityStatistics;
    static equals(a: ActivityStatistics | PlainMessage<ActivityStatistics> | undefined, b: ActivityStatistics | PlainMessage<ActivityStatistics> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ActivitiesServicePaginationReq
 */
export declare class ActivitiesServicePaginationReq extends Message<ActivitiesServicePaginationReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.ACTIVITY_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_SORT_KEY;
    /**
     * The status of this activity
     *
     * @generated from field: Scailo.ACTIVITY_LIFECYCLE status = 6;
     */
    status: ACTIVITY_LIFECYCLE;
    constructor(data?: PartialMessage<ActivitiesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServicePaginationReq;
    static equals(a: ActivitiesServicePaginationReq | PlainMessage<ActivitiesServicePaginationReq> | undefined, b: ActivitiesServicePaginationReq | PlainMessage<ActivitiesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ActivitiesServicePaginationResponse
 */
export declare class ActivitiesServicePaginationResponse extends Message<ActivitiesServicePaginationResponse> {
    /**
     * The number of records in this payload
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     * The list of records
     *
     * @generated from field: repeated Scailo.Activity payload = 4;
     */
    payload: Activity[];
    constructor(data?: PartialMessage<ActivitiesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServicePaginationResponse;
    static equals(a: ActivitiesServicePaginationResponse | PlainMessage<ActivitiesServicePaginationResponse> | undefined, b: ActivitiesServicePaginationResponse | PlainMessage<ActivitiesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ActivitiesServiceFilterReq
 */
export declare class ActivitiesServiceFilterReq extends Message<ActivitiesServiceFilterReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.ACTIVITY_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_SORT_KEY;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     * The minimum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The status of this activity
     *
     * @generated from field: Scailo.ACTIVITY_LIFECYCLE status = 10;
     */
    status: ACTIVITY_LIFECYCLE;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * Stores the internal reference that is automatically generated
     *
     * @generated from field: string internal_ref = 18;
     */
    internalRef: string;
    /**
     * The title of the activity
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The start range of "starts at"
     *
     * @generated from field: uint64 starts_at_start = 24;
     */
    startsAtStart: bigint;
    /**
     * The end range of "starts at"
     *
     * @generated from field: uint64 starts_at_end = 25;
     */
    startsAtEnd: bigint;
    /**
     * The start range of "due by"
     *
     * @generated from field: uint64 due_by_start = 26;
     */
    dueByStart: bigint;
    /**
     * The end range of "due by"
     *
     * @generated from field: uint64 due_by_end = 27;
     */
    dueByEnd: bigint;
    /**
     * Filter by the associated activity group ID
     *
     * @generated from field: uint64 activity_group_id = 40;
     */
    activityGroupId: bigint;
    /**
     * Filter by the associated activity status ID
     *
     * @generated from field: uint64 activity_status_id = 41;
     */
    activityStatusId: bigint;
    /**
     * ------------------------------------------------
     * Filter by the associated project ID
     *
     * @generated from field: uint64 project_id = 50;
     */
    projectId: bigint;
    /**
     * Filter by the associated owner employee
     *
     * @generated from field: uint64 owner_employee_id = 51;
     */
    ownerEmployeeId: bigint;
    /**
     * Filter by the associated supervisor employee
     *
     * @generated from field: uint64 supervisor_employee_id = 52;
     */
    supervisorEmployeeId: bigint;
    /**
     * Filter by the associated goal
     *
     * @generated from field: uint64 goal_id = 53;
     */
    goalId: bigint;
    /**
     * Filter by the associated action code
     *
     * @generated from field: uint64 action_code_id = 60;
     */
    actionCodeId: bigint;
    /**
     * Filter by the associated activity tag
     *
     * ------------------------------------------------
     *
     * @generated from field: uint64 activity_tag_id = 70;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<ActivitiesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceFilterReq;
    static equals(a: ActivitiesServiceFilterReq | PlainMessage<ActivitiesServiceFilterReq> | undefined, b: ActivitiesServiceFilterReq | PlainMessage<ActivitiesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ActivitiesServiceCountReq
 */
export declare class ActivitiesServiceCountReq extends Message<ActivitiesServiceCountReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     * The minimum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The status of this activity
     *
     * @generated from field: Scailo.ACTIVITY_LIFECYCLE status = 10;
     */
    status: ACTIVITY_LIFECYCLE;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * Stores the internal reference that is automatically generated
     *
     * @generated from field: string internal_ref = 18;
     */
    internalRef: string;
    /**
     * The title of the activity
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The start range of "starts at"
     *
     * @generated from field: uint64 starts_at_start = 24;
     */
    startsAtStart: bigint;
    /**
     * The end range of "starts at"
     *
     * @generated from field: uint64 starts_at_end = 25;
     */
    startsAtEnd: bigint;
    /**
     * The start range of "due by"
     *
     * @generated from field: uint64 due_by_start = 26;
     */
    dueByStart: bigint;
    /**
     * The end range of "due by"
     *
     * @generated from field: uint64 due_by_end = 27;
     */
    dueByEnd: bigint;
    /**
     * Filter by the associated activity group ID
     *
     * @generated from field: uint64 activity_group_id = 40;
     */
    activityGroupId: bigint;
    /**
     * Filter by the associated activity status ID
     *
     * @generated from field: uint64 activity_status_id = 41;
     */
    activityStatusId: bigint;
    /**
     * ------------------------------------------------
     * Filter by the associated project ID
     *
     * @generated from field: uint64 project_id = 50;
     */
    projectId: bigint;
    /**
     * Filter by the associated owner employee
     *
     * @generated from field: uint64 owner_employee_id = 51;
     */
    ownerEmployeeId: bigint;
    /**
     * Filter by the associated supervisor employee
     *
     * @generated from field: uint64 supervisor_employee_id = 52;
     */
    supervisorEmployeeId: bigint;
    /**
     * Filter by the associated goal
     *
     * @generated from field: uint64 goal_id = 53;
     */
    goalId: bigint;
    /**
     * Filter by the associated action code
     *
     * @generated from field: uint64 action_code_id = 60;
     */
    actionCodeId: bigint;
    /**
     * Filter by the associated activity tag
     *
     * ------------------------------------------------
     *
     * @generated from field: uint64 activity_tag_id = 70;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<ActivitiesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceCountReq;
    static equals(a: ActivitiesServiceCountReq | PlainMessage<ActivitiesServiceCountReq> | undefined, b: ActivitiesServiceCountReq | PlainMessage<ActivitiesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ActivitiesServiceSearchAllReq
 */
export declare class ActivitiesServiceSearchAllReq extends Message<ActivitiesServiceSearchAllReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.ACTIVITY_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.ACTIVITY_LIFECYCLE status = 10;
     */
    status: ACTIVITY_LIFECYCLE;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * Filter by the associated activity group ID
     *
     * @generated from field: uint64 activity_group_id = 40;
     */
    activityGroupId: bigint;
    /**
     * Filter by the associated activity status ID
     *
     * @generated from field: uint64 activity_status_id = 41;
     */
    activityStatusId: bigint;
    /**
     * ------------------------------------------------
     * Filter by the associated project ID
     *
     * @generated from field: uint64 project_id = 50;
     */
    projectId: bigint;
    /**
     * Filter by the associated owner employee
     *
     * @generated from field: uint64 owner_employee_id = 51;
     */
    ownerEmployeeId: bigint;
    /**
     * Filter by the associated supervisor employee
     *
     * @generated from field: uint64 supervisor_employee_id = 52;
     */
    supervisorEmployeeId: bigint;
    /**
     * Filter by the associated goal
     *
     * @generated from field: uint64 goal_id = 53;
     */
    goalId: bigint;
    /**
     * Filter by the associated action code
     *
     * @generated from field: uint64 action_code_id = 60;
     */
    actionCodeId: bigint;
    /**
     * Filter by the associated activity tag
     *
     * ------------------------------------------------
     *
     * @generated from field: uint64 activity_tag_id = 70;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<ActivitiesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceSearchAllReq;
    static equals(a: ActivitiesServiceSearchAllReq | PlainMessage<ActivitiesServiceSearchAllReq> | undefined, b: ActivitiesServiceSearchAllReq | PlainMessage<ActivitiesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an action to an activity
 *
 * @generated from message Scailo.ActivitiesServiceActionCreateRequest
 */
export declare class ActivitiesServiceActionCreateRequest extends Message<ActivitiesServiceActionCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the optional employee ID
     *
     * @generated from field: uint64 employee_id = 9;
     */
    employeeId: bigint;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * The title of the action
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * The content of the action
     *
     * @generated from field: string content = 12;
     */
    content: string;
    /**
     * Stores the action code ID
     *
     * @generated from field: uint64 action_code_id = 13;
     */
    actionCodeId: bigint;
    /**
     * Stores the number of points assigned to this action (should be greater than 0)
     *
     * @generated from field: uint64 points = 14;
     */
    points: bigint;
    constructor(data?: PartialMessage<ActivitiesServiceActionCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceActionCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceActionCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceActionCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceActionCreateRequest;
    static equals(a: ActivitiesServiceActionCreateRequest | PlainMessage<ActivitiesServiceActionCreateRequest> | undefined, b: ActivitiesServiceActionCreateRequest | PlainMessage<ActivitiesServiceActionCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an action in an activity
 *
 * @generated from message Scailo.ActivitiesServiceActionUpdateRequest
 */
export declare class ActivitiesServiceActionUpdateRequest extends Message<ActivitiesServiceActionUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * Stores the optional employee ID
     *
     * @generated from field: uint64 employee_id = 9;
     */
    employeeId: bigint;
    /**
     * The title of the action
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * The content of the action
     *
     * @generated from field: string content = 12;
     */
    content: string;
    /**
     * Stores the action code ID
     *
     * @generated from field: uint64 action_code_id = 13;
     */
    actionCodeId: bigint;
    /**
     * Stores the number of points assigned to this action (should be greater than 0)
     *
     * @generated from field: uint64 points = 14;
     */
    points: bigint;
    constructor(data?: PartialMessage<ActivitiesServiceActionUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceActionUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceActionUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceActionUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceActionUpdateRequest;
    static equals(a: ActivitiesServiceActionUpdateRequest | PlainMessage<ActivitiesServiceActionUpdateRequest> | undefined, b: ActivitiesServiceActionUpdateRequest | PlainMessage<ActivitiesServiceActionUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an action associated to an activity
 *
 * @generated from message Scailo.ActivityAction
 */
export declare class ActivityAction extends Message<ActivityAction> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this activity
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the optional employee ID
     *
     * @generated from field: uint64 employee_id = 9;
     */
    employeeId: bigint;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * The title of the action
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * The content of the action
     *
     * @generated from field: string content = 12;
     */
    content: string;
    /**
     * Stores the action code ID
     *
     * @generated from field: uint64 action_code_id = 13;
     */
    actionCodeId: bigint;
    /**
     * Stores the number of points assigned to this action
     *
     * @generated from field: uint64 points = 14;
     */
    points: bigint;
    constructor(data?: PartialMessage<ActivityAction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityAction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityAction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityAction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityAction;
    static equals(a: ActivityAction | PlainMessage<ActivityAction> | undefined, b: ActivityAction | PlainMessage<ActivityAction> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of an activity action's statistics payload
 *
 * @generated from message Scailo.ActivityActionStatistics
 */
export declare class ActivityActionStatistics extends Message<ActivityActionStatistics> {
    /**
     * Stores the total amount of time spent on the activity action
     *
     * @generated from field: uint64 total_duration = 1;
     */
    totalDuration: bigint;
    /**
     * Stores the cumulative completion percentage of the activity action
     *
     * @generated from field: uint64 total_completion_percentage = 2;
     */
    totalCompletionPercentage: bigint;
    constructor(data?: PartialMessage<ActivityActionStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityActionStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityActionStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityActionStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityActionStatistics;
    static equals(a: ActivityActionStatistics | PlainMessage<ActivityActionStatistics> | undefined, b: ActivityActionStatistics | PlainMessage<ActivityActionStatistics> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of activity actions
 *
 * @generated from message Scailo.ActivityActionsList
 */
export declare class ActivityActionsList extends Message<ActivityActionsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ActivityAction list = 1;
     */
    list: ActivityAction[];
    constructor(data?: PartialMessage<ActivityActionsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityActionsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityActionsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityActionsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityActionsList;
    static equals(a: ActivityActionsList | PlainMessage<ActivityActionsList> | undefined, b: ActivityActionsList | PlainMessage<ActivityActionsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.ActivityActionHistoryRequest
 */
export declare class ActivityActionHistoryRequest extends Message<ActivityActionHistoryRequest> {
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the action code ID
     *
     * @generated from field: uint64 action_code_id = 13;
     */
    actionCodeId: bigint;
    constructor(data?: PartialMessage<ActivityActionHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityActionHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityActionHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityActionHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityActionHistoryRequest;
    static equals(a: ActivityActionHistoryRequest | PlainMessage<ActivityActionHistoryRequest> | undefined, b: ActivityActionHistoryRequest | PlainMessage<ActivityActionHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve actions.
 *
 * @generated from message Scailo.ActivityActionsSearchRequest
 */
export declare class ActivityActionsSearchRequest extends Message<ActivityActionsSearchRequest> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.ACTIVITY_ACTION_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_ACTION_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Stores the optional employee ID
     *
     * @generated from field: uint64 employee_id = 9;
     */
    employeeId: bigint;
    /**
     * The ID of the activity
     *
     * @generated from field: uint64 activity_id = 20;
     */
    activityId: bigint;
    /**
     * Stores the action code ID
     *
     * @generated from field: uint64 action_code_id = 23;
     */
    actionCodeId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<ActivityActionsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityActionsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityActionsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityActionsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityActionsSearchRequest;
    static equals(a: ActivityActionsSearchRequest | PlainMessage<ActivityActionsSearchRequest> | undefined, b: ActivityActionsSearchRequest | PlainMessage<ActivityActionsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination actions request
 *
 * @generated from message Scailo.ActivitiesServicePaginatedActionsResponse
 */
export declare class ActivitiesServicePaginatedActionsResponse extends Message<ActivitiesServicePaginatedActionsResponse> {
    /**
     * The number of records in this payload
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     * The list of records
     *
     * @generated from field: repeated Scailo.ActivityAction payload = 4;
     */
    payload: ActivityAction[];
    constructor(data?: PartialMessage<ActivitiesServicePaginatedActionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServicePaginatedActionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServicePaginatedActionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServicePaginatedActionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServicePaginatedActionsResponse;
    static equals(a: ActivitiesServicePaginatedActionsResponse | PlainMessage<ActivitiesServicePaginatedActionsResponse> | undefined, b: ActivitiesServicePaginatedActionsResponse | PlainMessage<ActivitiesServicePaginatedActionsResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an action along with an activity timer
 *
 * @generated from message Scailo.ActivitiesServiceActionWithTimerCreateRequest
 */
export declare class ActivitiesServiceActionWithTimerCreateRequest extends Message<ActivitiesServiceActionWithTimerCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the optional goal ID
     *
     * @generated from field: uint64 goal_id = 11;
     */
    goalId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 12;
     */
    employeeId: bigint;
    /**
     * Stores the number of points assigned to this action (should be greater than 0)
     *
     * @generated from field: uint64 points = 13;
     */
    points: bigint;
    /**
     * Stores the start time
     *
     * @generated from field: uint64 start_at = 14;
     */
    startAt: bigint;
    /**
     * Stores the end time (can be 0)
     *
     * @generated from field: uint64 end_at = 15;
     */
    endAt: bigint;
    /**
     * Stores the cumulative completion percentage (this will be diffed at the API and stored only as a diff. E.g., if this is set to 4000, and the cumulative percentage for the same action has been 3500, then the API would store this as 500)
     *
     * @generated from field: uint64 completion_percentage = 16;
     */
    completionPercentage: bigint;
    /**
     * Stores the action code ID
     *
     * @generated from field: uint64 action_code_id = 17;
     */
    actionCodeId: bigint;
    /**
     * The title of the action
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The content of the action
     *
     * @generated from field: string content = 21;
     */
    content: string;
    constructor(data?: PartialMessage<ActivitiesServiceActionWithTimerCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceActionWithTimerCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceActionWithTimerCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceActionWithTimerCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceActionWithTimerCreateRequest;
    static equals(a: ActivitiesServiceActionWithTimerCreateRequest | PlainMessage<ActivitiesServiceActionWithTimerCreateRequest> | undefined, b: ActivitiesServiceActionWithTimerCreateRequest | PlainMessage<ActivitiesServiceActionWithTimerCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create an activity tag association
 *
 * @generated from message Scailo.ActivitiesServiceActivityTagAssociationCreateRequest
 */
export declare class ActivitiesServiceActivityTagAssociationCreateRequest extends Message<ActivitiesServiceActivityTagAssociationCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the activity tag ID
     *
     * @generated from field: uint64 activity_tag_id = 11;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<ActivitiesServiceActivityTagAssociationCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceActivityTagAssociationCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceActivityTagAssociationCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceActivityTagAssociationCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceActivityTagAssociationCreateRequest;
    static equals(a: ActivitiesServiceActivityTagAssociationCreateRequest | PlainMessage<ActivitiesServiceActivityTagAssociationCreateRequest> | undefined, b: ActivitiesServiceActivityTagAssociationCreateRequest | PlainMessage<ActivitiesServiceActivityTagAssociationCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an activity tag association
 *
 * @generated from message Scailo.ActivityTagAssociation
 */
export declare class ActivityTagAssociation extends Message<ActivityTagAssociation> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this activity
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the activity tag ID
     *
     * @generated from field: uint64 activity_tag_id = 11;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<ActivityTagAssociation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityTagAssociation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityTagAssociation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityTagAssociation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityTagAssociation;
    static equals(a: ActivityTagAssociation | PlainMessage<ActivityTagAssociation> | undefined, b: ActivityTagAssociation | PlainMessage<ActivityTagAssociation> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of activity tag associations
 *
 * @generated from message Scailo.ActivityTagAssociationsList
 */
export declare class ActivityTagAssociationsList extends Message<ActivityTagAssociationsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ActivityTagAssociation list = 1;
     */
    list: ActivityTagAssociation[];
    constructor(data?: PartialMessage<ActivityTagAssociationsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityTagAssociationsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityTagAssociationsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityTagAssociationsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityTagAssociationsList;
    static equals(a: ActivityTagAssociationsList | PlainMessage<ActivityTagAssociationsList> | undefined, b: ActivityTagAssociationsList | PlainMessage<ActivityTagAssociationsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create an activity owner
 *
 * @generated from message Scailo.ActivitiesServiceOwnerCreateRequest
 */
export declare class ActivitiesServiceOwnerCreateRequest extends Message<ActivitiesServiceOwnerCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    constructor(data?: PartialMessage<ActivitiesServiceOwnerCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceOwnerCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceOwnerCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceOwnerCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceOwnerCreateRequest;
    static equals(a: ActivitiesServiceOwnerCreateRequest | PlainMessage<ActivitiesServiceOwnerCreateRequest> | undefined, b: ActivitiesServiceOwnerCreateRequest | PlainMessage<ActivitiesServiceOwnerCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an activity owner
 *
 * @generated from message Scailo.ActivityOwner
 */
export declare class ActivityOwner extends Message<ActivityOwner> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this activity
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    constructor(data?: PartialMessage<ActivityOwner>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityOwner";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityOwner;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityOwner;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityOwner;
    static equals(a: ActivityOwner | PlainMessage<ActivityOwner> | undefined, b: ActivityOwner | PlainMessage<ActivityOwner> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of activity owners
 *
 * @generated from message Scailo.ActivityOwnersList
 */
export declare class ActivityOwnersList extends Message<ActivityOwnersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ActivityOwner list = 1;
     */
    list: ActivityOwner[];
    constructor(data?: PartialMessage<ActivityOwnersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityOwnersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityOwnersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityOwnersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityOwnersList;
    static equals(a: ActivityOwnersList | PlainMessage<ActivityOwnersList> | undefined, b: ActivityOwnersList | PlainMessage<ActivityOwnersList> | undefined): boolean;
}
/**
 *
 * Describes the data model to handle importing of employees from the given identifier representing a team or a department
 *
 * @generated from message Scailo.ActivitiesServiceImportOwnersRequest
 */
export declare class ActivitiesServiceImportOwnersRequest extends Message<ActivitiesServiceImportOwnersRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the activity
     *
     * @generated from field: uint64 activity_id = 2;
     */
    activityId: bigint;
    /**
     * The ID of the team or the department from which employees need to be added to the activity
     *
     * @generated from field: uint64 resource_id = 3;
     */
    resourceId: bigint;
    /**
     * Stores if the existing employees in the activity need to be deleted before adding from the source record
     *
     * @generated from field: bool delete_existing = 4;
     */
    deleteExisting: boolean;
    constructor(data?: PartialMessage<ActivitiesServiceImportOwnersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceImportOwnersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceImportOwnersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceImportOwnersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceImportOwnersRequest;
    static equals(a: ActivitiesServiceImportOwnersRequest | PlainMessage<ActivitiesServiceImportOwnersRequest> | undefined, b: ActivitiesServiceImportOwnersRequest | PlainMessage<ActivitiesServiceImportOwnersRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create an activity supervisor
 *
 * @generated from message Scailo.ActivitiesServiceSupervisorCreateRequest
 */
export declare class ActivitiesServiceSupervisorCreateRequest extends Message<ActivitiesServiceSupervisorCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    constructor(data?: PartialMessage<ActivitiesServiceSupervisorCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceSupervisorCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceSupervisorCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceSupervisorCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceSupervisorCreateRequest;
    static equals(a: ActivitiesServiceSupervisorCreateRequest | PlainMessage<ActivitiesServiceSupervisorCreateRequest> | undefined, b: ActivitiesServiceSupervisorCreateRequest | PlainMessage<ActivitiesServiceSupervisorCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an activity supervisor
 *
 * @generated from message Scailo.ActivitySupervisor
 */
export declare class ActivitySupervisor extends Message<ActivitySupervisor> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this activity
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    constructor(data?: PartialMessage<ActivitySupervisor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitySupervisor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitySupervisor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitySupervisor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitySupervisor;
    static equals(a: ActivitySupervisor | PlainMessage<ActivitySupervisor> | undefined, b: ActivitySupervisor | PlainMessage<ActivitySupervisor> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of activity supervisors
 *
 * @generated from message Scailo.ActivitySupervisorsList
 */
export declare class ActivitySupervisorsList extends Message<ActivitySupervisorsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ActivitySupervisor list = 1;
     */
    list: ActivitySupervisor[];
    constructor(data?: PartialMessage<ActivitySupervisorsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitySupervisorsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitySupervisorsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitySupervisorsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitySupervisorsList;
    static equals(a: ActivitySupervisorsList | PlainMessage<ActivitySupervisorsList> | undefined, b: ActivitySupervisorsList | PlainMessage<ActivitySupervisorsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create an activity timer
 *
 * @generated from message Scailo.ActivitiesServiceTimerCreateRequest
 */
export declare class ActivitiesServiceTimerCreateRequest extends Message<ActivitiesServiceTimerCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the activity action ID
     *
     * @generated from field: uint64 activity_action_id = 11;
     */
    activityActionId: bigint;
    /**
     * Stores the optional goal ID
     *
     * @generated from field: uint64 goal_id = 12;
     */
    goalId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 13;
     */
    employeeId: bigint;
    /**
     * Stores the start time
     *
     * @generated from field: uint64 start_at = 14;
     */
    startAt: bigint;
    /**
     * Stores the end time (can be 0)
     *
     * @generated from field: uint64 end_at = 15;
     */
    endAt: bigint;
    /**
     * Stores the cumulative completion percentage (this will be diffed at the API and stored only as a diff. E.g., if this is set to 4000, and the cumulative percentage for the same action has been 3500, then the API would store this as 500)
     *
     * @generated from field: uint64 completion_percentage = 16;
     */
    completionPercentage: bigint;
    /**
     * The description of the timer
     *
     * @generated from field: string description = 17;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesServiceTimerCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceTimerCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceTimerCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceTimerCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceTimerCreateRequest;
    static equals(a: ActivitiesServiceTimerCreateRequest | PlainMessage<ActivitiesServiceTimerCreateRequest> | undefined, b: ActivitiesServiceTimerCreateRequest | PlainMessage<ActivitiesServiceTimerCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to end an activity timer
 *
 * @generated from message Scailo.ActivitiesServiceTimerEndRequest
 */
export declare class ActivitiesServiceTimerEndRequest extends Message<ActivitiesServiceTimerEndRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * Stores the optional goal ID
     *
     * @generated from field: uint64 goal_id = 12;
     */
    goalId: bigint;
    /**
     * Stores the end time
     *
     * @generated from field: uint64 end_at = 15;
     */
    endAt: bigint;
    /**
     * Stores the cumulative completion percentage (this will be diffed at the API and stored only as a diff. E.g., if this is set to 4000, and the cumulative percentage for the same action has been 3500, then the API would store this as 500)
     *
     * @generated from field: uint64 completion_percentage = 16;
     */
    completionPercentage: bigint;
    /**
     * The description of the timer
     *
     * @generated from field: string description = 17;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesServiceTimerEndRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServiceTimerEndRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServiceTimerEndRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServiceTimerEndRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServiceTimerEndRequest;
    static equals(a: ActivitiesServiceTimerEndRequest | PlainMessage<ActivitiesServiceTimerEndRequest> | undefined, b: ActivitiesServiceTimerEndRequest | PlainMessage<ActivitiesServiceTimerEndRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an activity timer
 *
 * @generated from message Scailo.ActivityTimer
 */
export declare class ActivityTimer extends Message<ActivityTimer> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this activity
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the activity ID
     *
     * @generated from field: uint64 activity_id = 10;
     */
    activityId: bigint;
    /**
     * Stores the activity action ID
     *
     * @generated from field: uint64 activity_action_id = 11;
     */
    activityActionId: bigint;
    /**
     * Stores the optional goal ID
     *
     * @generated from field: uint64 goal_id = 12;
     */
    goalId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 13;
     */
    employeeId: bigint;
    /**
     * Stores the start time
     *
     * @generated from field: uint64 start_at = 14;
     */
    startAt: bigint;
    /**
     * Stores the end time
     *
     * @generated from field: uint64 end_at = 15;
     */
    endAt: bigint;
    /**
     * Stores the cumulative completion percentage (this will be diffed at the API and stored only as a diff. E.g., if this is set to 4000, and the cumulative percentage for the same action has been 3500, then the API would store this as 500)
     *
     * @generated from field: uint64 completion_percentage = 16;
     */
    completionPercentage: bigint;
    /**
     * The description of the timer
     *
     * @generated from field: string description = 17;
     */
    description: string;
    constructor(data?: PartialMessage<ActivityTimer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityTimer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityTimer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityTimer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityTimer;
    static equals(a: ActivityTimer | PlainMessage<ActivityTimer> | undefined, b: ActivityTimer | PlainMessage<ActivityTimer> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of activity timers
 *
 * @generated from message Scailo.ActivityTimersList
 */
export declare class ActivityTimersList extends Message<ActivityTimersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ActivityTimer list = 1;
     */
    list: ActivityTimer[];
    constructor(data?: PartialMessage<ActivityTimersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityTimersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityTimersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityTimersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityTimersList;
    static equals(a: ActivityTimersList | PlainMessage<ActivityTimersList> | undefined, b: ActivityTimersList | PlainMessage<ActivityTimersList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve timers.
 *
 * @generated from message Scailo.ActivityTimersSearchRequest
 */
export declare class ActivityTimersSearchRequest extends Message<ActivityTimersSearchRequest> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.ACTIVITY_TIMER_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_TIMER_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The ID of the activity
     *
     * @generated from field: uint64 activity_id = 20;
     */
    activityId: bigint;
    /**
     * Stores the activity action ID
     *
     * @generated from field: uint64 activity_action_id = 21;
     */
    activityActionId: bigint;
    /**
     * Stores the optional goal ID
     *
     * @generated from field: uint64 goal_id = 22;
     */
    goalId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 23;
     */
    employeeId: bigint;
    /**
     * The start range of "starts at"
     *
     * @generated from field: uint64 starts_at_start = 24;
     */
    startsAtStart: bigint;
    /**
     * The end range of "starts at"
     *
     * @generated from field: uint64 starts_at_end = 25;
     */
    startsAtEnd: bigint;
    /**
     * The start range of "ends at"
     *
     * @generated from field: uint64 ends_at_start = 26;
     */
    endsAtStart: bigint;
    /**
     * The end range of "ends at"
     *
     * @generated from field: uint64 ends_at_end = 27;
     */
    endsAtEnd: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<ActivityTimersSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityTimersSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityTimersSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityTimersSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityTimersSearchRequest;
    static equals(a: ActivityTimersSearchRequest | PlainMessage<ActivityTimersSearchRequest> | undefined, b: ActivityTimersSearchRequest | PlainMessage<ActivityTimersSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination timers request
 *
 * @generated from message Scailo.ActivitiesServicePaginatedTimersResponse
 */
export declare class ActivitiesServicePaginatedTimersResponse extends Message<ActivitiesServicePaginatedTimersResponse> {
    /**
     * The number of records in this payload
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     * The list of records
     *
     * @generated from field: repeated Scailo.ActivityTimer payload = 4;
     */
    payload: ActivityTimer[];
    constructor(data?: PartialMessage<ActivitiesServicePaginatedTimersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesServicePaginatedTimersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesServicePaginatedTimersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesServicePaginatedTimersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesServicePaginatedTimersResponse;
    static equals(a: ActivitiesServicePaginatedTimersResponse | PlainMessage<ActivitiesServicePaginatedTimersResponse> | undefined, b: ActivitiesServicePaginatedTimersResponse | PlainMessage<ActivitiesServicePaginatedTimersResponse> | undefined): boolean;
}
//# sourceMappingURL=activities.scailo_pb.d.ts.map
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ACTIVITY_GROUP_SORT_KEY
 */
export declare enum ACTIVITY_GROUP_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ACTIVITY_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ACTIVITY_GROUP_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ACTIVITY_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    ACTIVITY_GROUP_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ACTIVITY_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    ACTIVITY_GROUP_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ACTIVITY_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    ACTIVITY_GROUP_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ACTIVITY_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    ACTIVITY_GROUP_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ACTIVITY_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ACTIVITY_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: ACTIVITY_GROUP_SORT_KEY_NAME = 10;
     */
    ACTIVITY_GROUP_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: ACTIVITY_GROUP_SORT_KEY_CODE = 11;
     */
    ACTIVITY_GROUP_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ActivitiesGroupsServiceCreateRequest
 */
export declare class ActivitiesGroupsServiceCreateRequest extends Message<ActivitiesGroupsServiceCreateRequest> {
    /**
     * ActivitiesGroups a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * ActivitiesGroups any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 9;
     */
    projectId: bigint;
    /**
     * The name of the activity group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the activity group is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)
     *
     * @generated from field: uint64 parent_activity_group_id = 12;
     */
    parentActivityGroupId: bigint;
    /**
     * The description of the activity group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesGroupsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesGroupsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesGroupsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceCreateRequest;
    static equals(a: ActivitiesGroupsServiceCreateRequest | PlainMessage<ActivitiesGroupsServiceCreateRequest> | undefined, b: ActivitiesGroupsServiceCreateRequest | PlainMessage<ActivitiesGroupsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ActivitiesGroupsServiceUpdateRequest
 */
export declare class ActivitiesGroupsServiceUpdateRequest extends Message<ActivitiesGroupsServiceUpdateRequest> {
    /**
     * ActivitiesGroups any comment that the user might add during this operation
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
     * Optional boolean value that activities groups if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 9;
     */
    projectId: bigint;
    /**
     * The name of the activity group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the activity group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesGroupsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesGroupsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesGroupsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceUpdateRequest;
    static equals(a: ActivitiesGroupsServiceUpdateRequest | PlainMessage<ActivitiesGroupsServiceUpdateRequest> | undefined, b: ActivitiesGroupsServiceUpdateRequest | PlainMessage<ActivitiesGroupsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ActivityGroup
 */
export declare class ActivityGroup extends Message<ActivityGroup> {
    /**
     * ActivitiesGroups a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * ActivitiesGroups the metadata of this activity group
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * ActivitiesGroups the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this activity group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * ActivitiesGroups the logs of every operation performed on this activity group
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 9;
     */
    projectId: bigint;
    /**
     * The name of the activity group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the activity group is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)
     *
     * @generated from field: uint64 parent_activity_group_id = 12;
     */
    parentActivityGroupId: bigint;
    /**
     * The description of the activity group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<ActivityGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityGroup;
    static equals(a: ActivityGroup | PlainMessage<ActivityGroup> | undefined, b: ActivityGroup | PlainMessage<ActivityGroup> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ActivitiesGroupsList
 */
export declare class ActivitiesGroupsList extends Message<ActivitiesGroupsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ActivityGroup list = 1;
     */
    list: ActivityGroup[];
    constructor(data?: PartialMessage<ActivitiesGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesGroupsList;
    static equals(a: ActivitiesGroupsList | PlainMessage<ActivitiesGroupsList> | undefined, b: ActivitiesGroupsList | PlainMessage<ActivitiesGroupsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of an activity group's statistics payload
 *
 * @generated from message Scailo.ActivityGroupStatistics
 */
export declare class ActivityGroupStatistics extends Message<ActivityGroupStatistics> {
    /**
     * Stores the total amount of time spent on the activity group
     *
     * @generated from field: uint64 total_duration = 1;
     */
    totalDuration: bigint;
    /**
     * Stores the cumulative completion percentage of the activity group
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
    constructor(data?: PartialMessage<ActivityGroupStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityGroupStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityGroupStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityGroupStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityGroupStatistics;
    static equals(a: ActivityGroupStatistics | PlainMessage<ActivityGroupStatistics> | undefined, b: ActivityGroupStatistics | PlainMessage<ActivityGroupStatistics> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ActivitiesGroupsServicePaginationReq
 */
export declare class ActivitiesGroupsServicePaginationReq extends Message<ActivitiesGroupsServicePaginationReq> {
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
     * @generated from field: Scailo.ACTIVITY_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_GROUP_SORT_KEY;
    /**
     * The status of this activity group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ActivitiesGroupsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesGroupsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesGroupsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesGroupsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesGroupsServicePaginationReq;
    static equals(a: ActivitiesGroupsServicePaginationReq | PlainMessage<ActivitiesGroupsServicePaginationReq> | undefined, b: ActivitiesGroupsServicePaginationReq | PlainMessage<ActivitiesGroupsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ActivitiesGroupsServicePaginationResponse
 */
export declare class ActivitiesGroupsServicePaginationResponse extends Message<ActivitiesGroupsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ActivityGroup payload = 4;
     */
    payload: ActivityGroup[];
    constructor(data?: PartialMessage<ActivitiesGroupsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesGroupsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesGroupsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesGroupsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesGroupsServicePaginationResponse;
    static equals(a: ActivitiesGroupsServicePaginationResponse | PlainMessage<ActivitiesGroupsServicePaginationResponse> | undefined, b: ActivitiesGroupsServicePaginationResponse | PlainMessage<ActivitiesGroupsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ActivitiesGroupsServiceFilterReq
 */
export declare class ActivitiesGroupsServiceFilterReq extends Message<ActivitiesGroupsServiceFilterReq> {
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
     * @generated from field: Scailo.ACTIVITY_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_GROUP_SORT_KEY;
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
     * The status of this activity group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The name of the activity group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the activity group is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)
     *
     * @generated from field: uint64 parent_activity_group_id = 22;
     */
    parentActivityGroupId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 30;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<ActivitiesGroupsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesGroupsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesGroupsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceFilterReq;
    static equals(a: ActivitiesGroupsServiceFilterReq | PlainMessage<ActivitiesGroupsServiceFilterReq> | undefined, b: ActivitiesGroupsServiceFilterReq | PlainMessage<ActivitiesGroupsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ActivitiesGroupsServiceCountReq
 */
export declare class ActivitiesGroupsServiceCountReq extends Message<ActivitiesGroupsServiceCountReq> {
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
     * The status of this activity group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The name of the activity group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the activity group is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)
     *
     * @generated from field: uint64 parent_activity_group_id = 22;
     */
    parentActivityGroupId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 30;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<ActivitiesGroupsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesGroupsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesGroupsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceCountReq;
    static equals(a: ActivitiesGroupsServiceCountReq | PlainMessage<ActivitiesGroupsServiceCountReq> | undefined, b: ActivitiesGroupsServiceCountReq | PlainMessage<ActivitiesGroupsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ActivitiesGroupsServiceSearchAllReq
 */
export declare class ActivitiesGroupsServiceSearchAllReq extends Message<ActivitiesGroupsServiceSearchAllReq> {
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
     * @generated from field: Scailo.ACTIVITY_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_GROUP_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)
     *
     * @generated from field: uint64 parent_activity_group_id = 22;
     */
    parentActivityGroupId: bigint;
    constructor(data?: PartialMessage<ActivitiesGroupsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesGroupsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesGroupsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesGroupsServiceSearchAllReq;
    static equals(a: ActivitiesGroupsServiceSearchAllReq | PlainMessage<ActivitiesGroupsServiceSearchAllReq> | undefined, b: ActivitiesGroupsServiceSearchAllReq | PlainMessage<ActivitiesGroupsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=activities_groups.scailo_pb.d.ts.map
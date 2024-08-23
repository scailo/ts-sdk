import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ACTIVITY_STATUS_SORT_KEY
 */
export declare enum ACTIVITY_STATUS_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ACTIVITY_STATUS_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ACTIVITY_STATUS_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ACTIVITY_STATUS_SORT_KEY_CREATED_AT = 1;
     */
    ACTIVITY_STATUS_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ACTIVITY_STATUS_SORT_KEY_MODIFIED_AT = 2;
     */
    ACTIVITY_STATUS_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ACTIVITY_STATUS_SORT_KEY_APPROVED_ON = 3;
     */
    ACTIVITY_STATUS_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ACTIVITY_STATUS_SORT_KEY_APPROVED_BY = 4;
     */
    ACTIVITY_STATUS_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ACTIVITY_STATUS_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ACTIVITY_STATUS_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: ACTIVITY_STATUS_SORT_KEY_NAME = 10;
     */
    ACTIVITY_STATUS_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: ACTIVITY_STATUS_SORT_KEY_CODE = 11;
     */
    ACTIVITY_STATUS_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ActivitiesStatusesServiceCreateRequest
 */
export declare class ActivitiesStatusesServiceCreateRequest extends Message<ActivitiesStatusesServiceCreateRequest> {
    /**
     * ActivitiesStatuses a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * ActivitiesStatuses any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the activity status
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the activity status is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     * The description of the activity status
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesStatusesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesStatusesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesStatusesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceCreateRequest;
    static equals(a: ActivitiesStatusesServiceCreateRequest | PlainMessage<ActivitiesStatusesServiceCreateRequest> | undefined, b: ActivitiesStatusesServiceCreateRequest | PlainMessage<ActivitiesStatusesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ActivitiesStatusesServiceUpdateRequest
 */
export declare class ActivitiesStatusesServiceUpdateRequest extends Message<ActivitiesStatusesServiceUpdateRequest> {
    /**
     * ActivitiesStatuses any comment that the user might add during this operation
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
     * Optional boolean value that activities statuses if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the activity status
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     * The description of the activity status
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesStatusesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesStatusesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesStatusesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceUpdateRequest;
    static equals(a: ActivitiesStatusesServiceUpdateRequest | PlainMessage<ActivitiesStatusesServiceUpdateRequest> | undefined, b: ActivitiesStatusesServiceUpdateRequest | PlainMessage<ActivitiesStatusesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ActivityStatus
 */
export declare class ActivityStatus extends Message<ActivityStatus> {
    /**
     * ActivitiesStatuses a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * ActivitiesStatuses the metadata of this activity status
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * ActivitiesStatuses the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this activity status
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * ActivitiesStatuses the logs of every operation performed on this activity status
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the activity status
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the activity status is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     * The description of the activity status
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<ActivityStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityStatus;
    static equals(a: ActivityStatus | PlainMessage<ActivityStatus> | undefined, b: ActivityStatus | PlainMessage<ActivityStatus> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ActivitiesStatusesList
 */
export declare class ActivitiesStatusesList extends Message<ActivitiesStatusesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ActivityStatus list = 1;
     */
    list: ActivityStatus[];
    constructor(data?: PartialMessage<ActivitiesStatusesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesStatusesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesStatusesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesStatusesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesStatusesList;
    static equals(a: ActivitiesStatusesList | PlainMessage<ActivitiesStatusesList> | undefined, b: ActivitiesStatusesList | PlainMessage<ActivitiesStatusesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ActivitiesStatusesServicePaginationReq
 */
export declare class ActivitiesStatusesServicePaginationReq extends Message<ActivitiesStatusesServicePaginationReq> {
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
     * @generated from field: Scailo.ACTIVITY_STATUS_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_STATUS_SORT_KEY;
    /**
     * The status of this activity status
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ActivitiesStatusesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesStatusesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesStatusesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesStatusesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesStatusesServicePaginationReq;
    static equals(a: ActivitiesStatusesServicePaginationReq | PlainMessage<ActivitiesStatusesServicePaginationReq> | undefined, b: ActivitiesStatusesServicePaginationReq | PlainMessage<ActivitiesStatusesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ActivitiesStatusesServicePaginationResponse
 */
export declare class ActivitiesStatusesServicePaginationResponse extends Message<ActivitiesStatusesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ActivityStatus payload = 4;
     */
    payload: ActivityStatus[];
    constructor(data?: PartialMessage<ActivitiesStatusesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesStatusesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesStatusesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesStatusesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesStatusesServicePaginationResponse;
    static equals(a: ActivitiesStatusesServicePaginationResponse | PlainMessage<ActivitiesStatusesServicePaginationResponse> | undefined, b: ActivitiesStatusesServicePaginationResponse | PlainMessage<ActivitiesStatusesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ActivitiesStatusesServiceFilterReq
 */
export declare class ActivitiesStatusesServiceFilterReq extends Message<ActivitiesStatusesServiceFilterReq> {
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
     * @generated from field: Scailo.ACTIVITY_STATUS_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_STATUS_SORT_KEY;
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
     * The status of this activity status
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
     * The name of the activity status
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the activity status is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 22;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 23;
     */
    bgColor: string;
    constructor(data?: PartialMessage<ActivitiesStatusesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesStatusesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesStatusesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceFilterReq;
    static equals(a: ActivitiesStatusesServiceFilterReq | PlainMessage<ActivitiesStatusesServiceFilterReq> | undefined, b: ActivitiesStatusesServiceFilterReq | PlainMessage<ActivitiesStatusesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ActivitiesStatusesServiceCountReq
 */
export declare class ActivitiesStatusesServiceCountReq extends Message<ActivitiesStatusesServiceCountReq> {
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
     * The status of this activity status
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
     * The name of the activity status
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the activity status is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 22;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 23;
     */
    bgColor: string;
    constructor(data?: PartialMessage<ActivitiesStatusesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesStatusesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesStatusesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceCountReq;
    static equals(a: ActivitiesStatusesServiceCountReq | PlainMessage<ActivitiesStatusesServiceCountReq> | undefined, b: ActivitiesStatusesServiceCountReq | PlainMessage<ActivitiesStatusesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ActivitiesStatusesServiceSearchAllReq
 */
export declare class ActivitiesStatusesServiceSearchAllReq extends Message<ActivitiesStatusesServiceSearchAllReq> {
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
     * @generated from field: Scailo.ACTIVITY_STATUS_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_STATUS_SORT_KEY;
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
    constructor(data?: PartialMessage<ActivitiesStatusesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesStatusesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesStatusesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesStatusesServiceSearchAllReq;
    static equals(a: ActivitiesStatusesServiceSearchAllReq | PlainMessage<ActivitiesStatusesServiceSearchAllReq> | undefined, b: ActivitiesStatusesServiceSearchAllReq | PlainMessage<ActivitiesStatusesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=activities_statuses.scailo_pb.d.ts.map
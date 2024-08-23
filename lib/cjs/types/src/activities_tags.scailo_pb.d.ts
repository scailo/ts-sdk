import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ACTIVITY_TAG_SORT_KEY
 */
export declare enum ACTIVITY_TAG_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ACTIVITY_TAG_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ACTIVITY_TAG_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ACTIVITY_TAG_SORT_KEY_CREATED_AT = 1;
     */
    ACTIVITY_TAG_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ACTIVITY_TAG_SORT_KEY_MODIFIED_AT = 2;
     */
    ACTIVITY_TAG_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ACTIVITY_TAG_SORT_KEY_APPROVED_ON = 3;
     */
    ACTIVITY_TAG_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ACTIVITY_TAG_SORT_KEY_APPROVED_BY = 4;
     */
    ACTIVITY_TAG_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ACTIVITY_TAG_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ACTIVITY_TAG_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: ACTIVITY_TAG_SORT_KEY_NAME = 10;
     */
    ACTIVITY_TAG_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: ACTIVITY_TAG_SORT_KEY_CODE = 11;
     */
    ACTIVITY_TAG_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ActivitiesTagsServiceCreateRequest
 */
export declare class ActivitiesTagsServiceCreateRequest extends Message<ActivitiesTagsServiceCreateRequest> {
    /**
     * ActivitiesTags a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * ActivitiesTags any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the activity tag
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the activity tag is classified
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
     * The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)
     *
     * @generated from field: uint64 parent_activity_tag_id = 16;
     */
    parentActivityTagId: bigint;
    /**
     * Stores if this is a leaf activity tag or a non-leaf activity tag
     *
     * @generated from field: bool is_leaf = 17;
     */
    isLeaf: boolean;
    /**
     * The description of the activity tag
     *
     * @generated from field: string description = 18;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesTagsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesTagsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesTagsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceCreateRequest;
    static equals(a: ActivitiesTagsServiceCreateRequest | PlainMessage<ActivitiesTagsServiceCreateRequest> | undefined, b: ActivitiesTagsServiceCreateRequest | PlainMessage<ActivitiesTagsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ActivitiesTagsServiceUpdateRequest
 */
export declare class ActivitiesTagsServiceUpdateRequest extends Message<ActivitiesTagsServiceUpdateRequest> {
    /**
     * ActivitiesTags any comment that the user might add during this operation
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
     * Optional boolean value that activities tags if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the activity tag
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
     * The description of the activity tag
     *
     * @generated from field: string description = 18;
     */
    description: string;
    constructor(data?: PartialMessage<ActivitiesTagsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesTagsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesTagsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceUpdateRequest;
    static equals(a: ActivitiesTagsServiceUpdateRequest | PlainMessage<ActivitiesTagsServiceUpdateRequest> | undefined, b: ActivitiesTagsServiceUpdateRequest | PlainMessage<ActivitiesTagsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ActivityTag
 */
export declare class ActivityTag extends Message<ActivityTag> {
    /**
     * ActivitiesTags a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * ActivitiesTags the metadata of this activity tag
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * ActivitiesTags the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this activity tag
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * ActivitiesTags the logs of every operation performed on this activity tag
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the activity tag
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the activity tag is classified
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
     * The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)
     *
     * @generated from field: uint64 parent_activity_tag_id = 16;
     */
    parentActivityTagId: bigint;
    /**
     * Stores if this is a leaf activity tag or a non-leaf activity tag
     *
     * @generated from field: bool is_leaf = 17;
     */
    isLeaf: boolean;
    /**
     * The description of the activity tag
     *
     * @generated from field: string description = 18;
     */
    description: string;
    constructor(data?: PartialMessage<ActivityTag>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivityTag";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityTag;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityTag;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityTag;
    static equals(a: ActivityTag | PlainMessage<ActivityTag> | undefined, b: ActivityTag | PlainMessage<ActivityTag> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ActivitiesTagsList
 */
export declare class ActivitiesTagsList extends Message<ActivitiesTagsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ActivityTag list = 1;
     */
    list: ActivityTag[];
    constructor(data?: PartialMessage<ActivitiesTagsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesTagsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesTagsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesTagsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesTagsList;
    static equals(a: ActivitiesTagsList | PlainMessage<ActivitiesTagsList> | undefined, b: ActivitiesTagsList | PlainMessage<ActivitiesTagsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ActivitiesTagsServicePaginationReq
 */
export declare class ActivitiesTagsServicePaginationReq extends Message<ActivitiesTagsServicePaginationReq> {
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
     * @generated from field: Scailo.ACTIVITY_TAG_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_TAG_SORT_KEY;
    /**
     * The status of this activity tag
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ActivitiesTagsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesTagsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesTagsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesTagsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesTagsServicePaginationReq;
    static equals(a: ActivitiesTagsServicePaginationReq | PlainMessage<ActivitiesTagsServicePaginationReq> | undefined, b: ActivitiesTagsServicePaginationReq | PlainMessage<ActivitiesTagsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ActivitiesTagsServicePaginationResponse
 */
export declare class ActivitiesTagsServicePaginationResponse extends Message<ActivitiesTagsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ActivityTag payload = 4;
     */
    payload: ActivityTag[];
    constructor(data?: PartialMessage<ActivitiesTagsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesTagsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesTagsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesTagsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesTagsServicePaginationResponse;
    static equals(a: ActivitiesTagsServicePaginationResponse | PlainMessage<ActivitiesTagsServicePaginationResponse> | undefined, b: ActivitiesTagsServicePaginationResponse | PlainMessage<ActivitiesTagsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ActivitiesTagsServiceFilterReq
 */
export declare class ActivitiesTagsServiceFilterReq extends Message<ActivitiesTagsServiceFilterReq> {
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
     * @generated from field: Scailo.ACTIVITY_TAG_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_TAG_SORT_KEY;
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
     * The status of this activity tag
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
     * The name of the activity tag
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the activity tag is classified
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
    /**
     * The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)
     *
     * @generated from field: uint64 parent_activity_tag_id = 26;
     */
    parentActivityTagId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 27;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<ActivitiesTagsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesTagsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesTagsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceFilterReq;
    static equals(a: ActivitiesTagsServiceFilterReq | PlainMessage<ActivitiesTagsServiceFilterReq> | undefined, b: ActivitiesTagsServiceFilterReq | PlainMessage<ActivitiesTagsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ActivitiesTagsServiceCountReq
 */
export declare class ActivitiesTagsServiceCountReq extends Message<ActivitiesTagsServiceCountReq> {
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
     * The status of this activity tag
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
     * The name of the activity tag
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the activity tag is classified
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
    /**
     * The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)
     *
     * @generated from field: uint64 parent_activity_tag_id = 26;
     */
    parentActivityTagId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 27;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<ActivitiesTagsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesTagsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesTagsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceCountReq;
    static equals(a: ActivitiesTagsServiceCountReq | PlainMessage<ActivitiesTagsServiceCountReq> | undefined, b: ActivitiesTagsServiceCountReq | PlainMessage<ActivitiesTagsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ActivitiesTagsServiceSearchAllReq
 */
export declare class ActivitiesTagsServiceSearchAllReq extends Message<ActivitiesTagsServiceSearchAllReq> {
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
     * @generated from field: Scailo.ACTIVITY_TAG_SORT_KEY sort_key = 5;
     */
    sortKey: ACTIVITY_TAG_SORT_KEY;
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
     * The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)
     *
     * @generated from field: uint64 parent_activity_tag_id = 25;
     */
    parentActivityTagId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 26;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<ActivitiesTagsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActivitiesTagsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivitiesTagsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivitiesTagsServiceSearchAllReq;
    static equals(a: ActivitiesTagsServiceSearchAllReq | PlainMessage<ActivitiesTagsServiceSearchAllReq> | undefined, b: ActivitiesTagsServiceSearchAllReq | PlainMessage<ActivitiesTagsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=activities_tags.scailo_pb.d.ts.map
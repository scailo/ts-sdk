import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ANNOUNCEMENT_SORT_KEY
 */
export declare enum ANNOUNCEMENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_CREATED_AT = 1;
     */
    ANNOUNCEMENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    ANNOUNCEMENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVED_ON = 3;
     */
    ANNOUNCEMENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVED_BY = 4;
     */
    ANNOUNCEMENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ANNOUNCEMENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    ANNOUNCEMENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_TITLE = 10;
     */
    ANNOUNCEMENT_SORT_KEY_TITLE = 10,
    /**
     * Fetch ordered results by the description
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_DESCRIPTION = 11;
     */
    ANNOUNCEMENT_SORT_KEY_DESCRIPTION = 11,
    /**
     * Fetch ordered results by the start on timestamp
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_START_ON = 12;
     */
    ANNOUNCEMENT_SORT_KEY_START_ON = 12,
    /**
     * Fetch ordered results by the end on timestamp
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_END_ON = 13;
     */
    ANNOUNCEMENT_SORT_KEY_END_ON = 13
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.AnnouncementsServiceCreateRequest
 */
export declare class AnnouncementsServiceCreateRequest extends Message<AnnouncementsServiceCreateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The title of the announcement
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The description of the announcement
     *
     * @generated from field: string description = 11;
     */
    description: string;
    /**
     * The start timestamp
     *
     * @generated from field: uint64 start_on = 12;
     */
    startOn: bigint;
    /**
     * The end timestamp
     *
     * @generated from field: uint64 end_on = 13;
     */
    endOn: bigint;
    constructor(data?: PartialMessage<AnnouncementsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceCreateRequest;
    static equals(a: AnnouncementsServiceCreateRequest | PlainMessage<AnnouncementsServiceCreateRequest> | undefined, b: AnnouncementsServiceCreateRequest | PlainMessage<AnnouncementsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.AnnouncementsServiceUpdateRequest
 */
export declare class AnnouncementsServiceUpdateRequest extends Message<AnnouncementsServiceUpdateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The title of the announcement
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The description of the announcement
     *
     * @generated from field: string description = 11;
     */
    description: string;
    /**
     * The start timestamp
     *
     * @generated from field: uint64 start_on = 12;
     */
    startOn: bigint;
    /**
     * The end timestamp
     *
     * @generated from field: uint64 end_on = 13;
     */
    endOn: bigint;
    constructor(data?: PartialMessage<AnnouncementsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceUpdateRequest;
    static equals(a: AnnouncementsServiceUpdateRequest | PlainMessage<AnnouncementsServiceUpdateRequest> | undefined, b: AnnouncementsServiceUpdateRequest | PlainMessage<AnnouncementsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Announcement
 */
export declare class Announcement extends Message<Announcement> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this announcement
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this announcement
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this announcement
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this announcement was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The title of the announcement
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The description of the announcement
     *
     * @generated from field: string description = 11;
     */
    description: string;
    /**
     * The start timestamp
     *
     * @generated from field: uint64 start_on = 12;
     */
    startOn: bigint;
    /**
     * The end timestamp
     *
     * @generated from field: uint64 end_on = 13;
     */
    endOn: bigint;
    constructor(data?: PartialMessage<Announcement>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Announcement";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Announcement;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Announcement;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Announcement;
    static equals(a: Announcement | PlainMessage<Announcement> | undefined, b: Announcement | PlainMessage<Announcement> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.AnnouncementsList
 */
export declare class AnnouncementsList extends Message<AnnouncementsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Announcement list = 1;
     */
    list: Announcement[];
    constructor(data?: PartialMessage<AnnouncementsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsList;
    static equals(a: AnnouncementsList | PlainMessage<AnnouncementsList> | undefined, b: AnnouncementsList | PlainMessage<AnnouncementsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.AnnouncementsServicePaginationReq
 */
export declare class AnnouncementsServicePaginationReq extends Message<AnnouncementsServicePaginationReq> {
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
     * @generated from field: Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;
     */
    sortKey: ANNOUNCEMENT_SORT_KEY;
    /**
     * The status of this announcement
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<AnnouncementsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationReq;
    static equals(a: AnnouncementsServicePaginationReq | PlainMessage<AnnouncementsServicePaginationReq> | undefined, b: AnnouncementsServicePaginationReq | PlainMessage<AnnouncementsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.AnnouncementsServicePaginationResponse
 */
export declare class AnnouncementsServicePaginationResponse extends Message<AnnouncementsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Announcement payload = 4;
     */
    payload: Announcement[];
    constructor(data?: PartialMessage<AnnouncementsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationResponse;
    static equals(a: AnnouncementsServicePaginationResponse | PlainMessage<AnnouncementsServicePaginationResponse> | undefined, b: AnnouncementsServicePaginationResponse | PlainMessage<AnnouncementsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.AnnouncementsServiceFilterReq
 */
export declare class AnnouncementsServiceFilterReq extends Message<AnnouncementsServiceFilterReq> {
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
     * @generated from field: Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;
     */
    sortKey: ANNOUNCEMENT_SORT_KEY;
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
     * The status of this announcement
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
     * The title of the announcement
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The description of the announcement
     *
     * @generated from field: string description = 21;
     */
    description: string;
    /**
     * The start range of start timestamp
     *
     * @generated from field: uint64 start_on_start = 22;
     */
    startOnStart: bigint;
    /**
     * The end range of start timestamp
     *
     * @generated from field: uint64 start_on_end = 23;
     */
    startOnEnd: bigint;
    /**
     * The start range of end timestamp
     *
     * @generated from field: uint64 end_on_start = 24;
     */
    endOnStart: bigint;
    /**
     * The end range of end timestamp
     *
     * @generated from field: uint64 end_on_end = 25;
     */
    endOnEnd: bigint;
    constructor(data?: PartialMessage<AnnouncementsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceFilterReq;
    static equals(a: AnnouncementsServiceFilterReq | PlainMessage<AnnouncementsServiceFilterReq> | undefined, b: AnnouncementsServiceFilterReq | PlainMessage<AnnouncementsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.AnnouncementsServiceCountReq
 */
export declare class AnnouncementsServiceCountReq extends Message<AnnouncementsServiceCountReq> {
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
     * The status of this announcement
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
     * The title of the announcement
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The description of the announcement
     *
     * @generated from field: string description = 21;
     */
    description: string;
    /**
     * The start range of start timestamp
     *
     * @generated from field: uint64 start_on_start = 22;
     */
    startOnStart: bigint;
    /**
     * The end range of start timestamp
     *
     * @generated from field: uint64 start_on_end = 23;
     */
    startOnEnd: bigint;
    /**
     * The start range of end timestamp
     *
     * @generated from field: uint64 end_on_start = 24;
     */
    endOnStart: bigint;
    /**
     * The end range of end timestamp
     *
     * @generated from field: uint64 end_on_end = 25;
     */
    endOnEnd: bigint;
    constructor(data?: PartialMessage<AnnouncementsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceCountReq;
    static equals(a: AnnouncementsServiceCountReq | PlainMessage<AnnouncementsServiceCountReq> | undefined, b: AnnouncementsServiceCountReq | PlainMessage<AnnouncementsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.AnnouncementsServiceSearchAllReq
 */
export declare class AnnouncementsServiceSearchAllReq extends Message<AnnouncementsServiceSearchAllReq> {
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
     * @generated from field: Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;
     */
    sortKey: ANNOUNCEMENT_SORT_KEY;
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
    constructor(data?: PartialMessage<AnnouncementsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceSearchAllReq;
    static equals(a: AnnouncementsServiceSearchAllReq | PlainMessage<AnnouncementsServiceSearchAllReq> | undefined, b: AnnouncementsServiceSearchAllReq | PlainMessage<AnnouncementsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=announcements.scailo_pb.d.ts.map
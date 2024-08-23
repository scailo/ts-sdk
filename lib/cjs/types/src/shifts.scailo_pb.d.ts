import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SHIFT_SORT_KEY
 */
export declare enum SHIFT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SHIFT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SHIFT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_CREATED_AT = 1;
     */
    SHIFT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_MODIFIED_AT = 2;
     */
    SHIFT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVED_ON = 3;
     */
    SHIFT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVED_BY = 4;
     */
    SHIFT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SHIFT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_COMPLETED_ON = 6;
     */
    SHIFT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SHIFT_SORT_KEY_NAME = 10;
     */
    SHIFT_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: SHIFT_SORT_KEY_CODE = 11;
     */
    SHIFT_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the start at timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_START_AT = 12;
     */
    SHIFT_SORT_KEY_START_AT = 12,
    /**
     * Fetch ordered results by the end at timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_END_AT = 13;
     */
    SHIFT_SORT_KEY_END_AT = 13
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ShiftsServiceCreateRequest
 */
export declare class ShiftsServiceCreateRequest extends Message<ShiftsServiceCreateRequest> {
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
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: uint64 start_at = 13;
     */
    startAt: bigint;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: uint64 end_at = 14;
     */
    endAt: bigint;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek: string;
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone: string;
    constructor(data?: PartialMessage<ShiftsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ShiftsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceCreateRequest;
    static equals(a: ShiftsServiceCreateRequest | PlainMessage<ShiftsServiceCreateRequest> | undefined, b: ShiftsServiceCreateRequest | PlainMessage<ShiftsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ShiftsServiceUpdateRequest
 */
export declare class ShiftsServiceUpdateRequest extends Message<ShiftsServiceUpdateRequest> {
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
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: uint64 start_at = 13;
     */
    startAt: bigint;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: uint64 end_at = 14;
     */
    endAt: bigint;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek: string;
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone: string;
    constructor(data?: PartialMessage<ShiftsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ShiftsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceUpdateRequest;
    static equals(a: ShiftsServiceUpdateRequest | PlainMessage<ShiftsServiceUpdateRequest> | undefined, b: ShiftsServiceUpdateRequest | PlainMessage<ShiftsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Shift
 */
export declare class Shift extends Message<Shift> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this shift
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
     * The status of this shift
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this shift
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this shift was marked as completed
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
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: uint64 start_at = 13;
     */
    startAt: bigint;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: uint64 end_at = 14;
     */
    endAt: bigint;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek: string;
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone: string;
    constructor(data?: PartialMessage<Shift>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Shift";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Shift;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Shift;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Shift;
    static equals(a: Shift | PlainMessage<Shift> | undefined, b: Shift | PlainMessage<Shift> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ShiftsList
 */
export declare class ShiftsList extends Message<ShiftsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Shift list = 1;
     */
    list: Shift[];
    constructor(data?: PartialMessage<ShiftsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ShiftsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsList;
    static equals(a: ShiftsList | PlainMessage<ShiftsList> | undefined, b: ShiftsList | PlainMessage<ShiftsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ShiftsServicePaginationReq
 */
export declare class ShiftsServicePaginationReq extends Message<ShiftsServicePaginationReq> {
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
     * @generated from field: Scailo.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_SORT_KEY;
    /**
     * The status of this shift
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ShiftsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ShiftsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServicePaginationReq;
    static equals(a: ShiftsServicePaginationReq | PlainMessage<ShiftsServicePaginationReq> | undefined, b: ShiftsServicePaginationReq | PlainMessage<ShiftsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ShiftsServicePaginationResponse
 */
export declare class ShiftsServicePaginationResponse extends Message<ShiftsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Shift payload = 4;
     */
    payload: Shift[];
    constructor(data?: PartialMessage<ShiftsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ShiftsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServicePaginationResponse;
    static equals(a: ShiftsServicePaginationResponse | PlainMessage<ShiftsServicePaginationResponse> | undefined, b: ShiftsServicePaginationResponse | PlainMessage<ShiftsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ShiftsServiceFilterReq
 */
export declare class ShiftsServiceFilterReq extends Message<ShiftsServiceFilterReq> {
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
     * @generated from field: Scailo.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_SORT_KEY;
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
     * The status of this shift
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
     * The name of the shift
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<ShiftsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ShiftsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceFilterReq;
    static equals(a: ShiftsServiceFilterReq | PlainMessage<ShiftsServiceFilterReq> | undefined, b: ShiftsServiceFilterReq | PlainMessage<ShiftsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ShiftsServiceCountReq
 */
export declare class ShiftsServiceCountReq extends Message<ShiftsServiceCountReq> {
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
     * The status of this shift
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
     * The name of the shift
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<ShiftsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ShiftsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceCountReq;
    static equals(a: ShiftsServiceCountReq | PlainMessage<ShiftsServiceCountReq> | undefined, b: ShiftsServiceCountReq | PlainMessage<ShiftsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ShiftsServiceSearchAllReq
 */
export declare class ShiftsServiceSearchAllReq extends Message<ShiftsServiceSearchAllReq> {
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
     * @generated from field: Scailo.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_SORT_KEY;
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
    constructor(data?: PartialMessage<ShiftsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ShiftsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceSearchAllReq;
    static equals(a: ShiftsServiceSearchAllReq | PlainMessage<ShiftsServiceSearchAllReq> | undefined, b: ShiftsServiceSearchAllReq | PlainMessage<ShiftsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=shifts.scailo_pb.d.ts.map
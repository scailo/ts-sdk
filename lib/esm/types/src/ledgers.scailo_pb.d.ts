import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.LEDGER_SORT_KEY
 */
export declare enum LEDGER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LEDGER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEDGER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LEDGER_SORT_KEY_CREATED_AT = 1;
     */
    LEDGER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LEDGER_SORT_KEY_MODIFIED_AT = 2;
     */
    LEDGER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: LEDGER_SORT_KEY_APPROVED_ON = 3;
     */
    LEDGER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: LEDGER_SORT_KEY_APPROVED_BY = 4;
     */
    LEDGER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: LEDGER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LEDGER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: LEDGER_SORT_KEY_NAME = 10;
     */
    LEDGER_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: LEDGER_SORT_KEY_CODE = 11;
     */
    LEDGER_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.LedgersServiceCreateRequest
 */
export declare class LedgersServiceCreateRequest extends Message<LedgersServiceCreateRequest> {
    /**
     * Ledgers a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Ledgers any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the ledger
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the ledger is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)
     *
     * @generated from field: uint64 parent_ledger_id = 12;
     */
    parentLedgerId: bigint;
    /**
     * Stores if this is a leaf ledger or a non-leaf ledger
     *
     * @generated from field: bool is_leaf = 13;
     */
    isLeaf: boolean;
    /**
     * The description of the ledger
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<LedgersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LedgersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgersServiceCreateRequest;
    static equals(a: LedgersServiceCreateRequest | PlainMessage<LedgersServiceCreateRequest> | undefined, b: LedgersServiceCreateRequest | PlainMessage<LedgersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.LedgersServiceUpdateRequest
 */
export declare class LedgersServiceUpdateRequest extends Message<LedgersServiceUpdateRequest> {
    /**
     * Ledgers any comment that the user might add during this operation
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
     * Optional boolean value that ledgers if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the ledger
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the ledger
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<LedgersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LedgersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgersServiceUpdateRequest;
    static equals(a: LedgersServiceUpdateRequest | PlainMessage<LedgersServiceUpdateRequest> | undefined, b: LedgersServiceUpdateRequest | PlainMessage<LedgersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Ledger
 */
export declare class Ledger extends Message<Ledger> {
    /**
     * Ledgers a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Ledgers the metadata of this ledger
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Ledgers the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this ledger
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Ledgers the logs of every operation performed on this ledger
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the ledger
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the ledger is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)
     *
     * @generated from field: uint64 parent_ledger_id = 12;
     */
    parentLedgerId: bigint;
    /**
     * Stores if this is a leaf ledger or a non-leaf ledger
     *
     * @generated from field: bool is_leaf = 13;
     */
    isLeaf: boolean;
    /**
     * The description of the ledger
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<Ledger>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Ledger";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Ledger;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Ledger;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Ledger;
    static equals(a: Ledger | PlainMessage<Ledger> | undefined, b: Ledger | PlainMessage<Ledger> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.LedgersList
 */
export declare class LedgersList extends Message<LedgersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Ledger list = 1;
     */
    list: Ledger[];
    constructor(data?: PartialMessage<LedgersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LedgersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgersList;
    static equals(a: LedgersList | PlainMessage<LedgersList> | undefined, b: LedgersList | PlainMessage<LedgersList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.LedgersServicePaginationReq
 */
export declare class LedgersServicePaginationReq extends Message<LedgersServicePaginationReq> {
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
     * @generated from field: Scailo.LEDGER_SORT_KEY sort_key = 5;
     */
    sortKey: LEDGER_SORT_KEY;
    /**
     * The status of this ledger
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<LedgersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LedgersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgersServicePaginationReq;
    static equals(a: LedgersServicePaginationReq | PlainMessage<LedgersServicePaginationReq> | undefined, b: LedgersServicePaginationReq | PlainMessage<LedgersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.LedgersServicePaginationResponse
 */
export declare class LedgersServicePaginationResponse extends Message<LedgersServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Ledger payload = 4;
     */
    payload: Ledger[];
    constructor(data?: PartialMessage<LedgersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LedgersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgersServicePaginationResponse;
    static equals(a: LedgersServicePaginationResponse | PlainMessage<LedgersServicePaginationResponse> | undefined, b: LedgersServicePaginationResponse | PlainMessage<LedgersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.LedgersServiceFilterReq
 */
export declare class LedgersServiceFilterReq extends Message<LedgersServiceFilterReq> {
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
     * @generated from field: Scailo.LEDGER_SORT_KEY sort_key = 5;
     */
    sortKey: LEDGER_SORT_KEY;
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
     * The status of this ledger
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
     * The name of the ledger
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the ledger is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)
     *
     * @generated from field: uint64 parent_ledger_id = 22;
     */
    parentLedgerId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 23;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<LedgersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LedgersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgersServiceFilterReq;
    static equals(a: LedgersServiceFilterReq | PlainMessage<LedgersServiceFilterReq> | undefined, b: LedgersServiceFilterReq | PlainMessage<LedgersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.LedgersServiceCountReq
 */
export declare class LedgersServiceCountReq extends Message<LedgersServiceCountReq> {
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
     * The status of this ledger
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
     * The name of the ledger
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the ledger is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)
     *
     * @generated from field: uint64 parent_ledger_id = 22;
     */
    parentLedgerId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 23;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<LedgersServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LedgersServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgersServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgersServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgersServiceCountReq;
    static equals(a: LedgersServiceCountReq | PlainMessage<LedgersServiceCountReq> | undefined, b: LedgersServiceCountReq | PlainMessage<LedgersServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.LedgersServiceSearchAllReq
 */
export declare class LedgersServiceSearchAllReq extends Message<LedgersServiceSearchAllReq> {
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
     * @generated from field: Scailo.LEDGER_SORT_KEY sort_key = 5;
     */
    sortKey: LEDGER_SORT_KEY;
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
     * The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)
     *
     * @generated from field: uint64 parent_ledger_id = 22;
     */
    parentLedgerId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 23;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<LedgersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LedgersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgersServiceSearchAllReq;
    static equals(a: LedgersServiceSearchAllReq | PlainMessage<LedgersServiceSearchAllReq> | undefined, b: LedgersServiceSearchAllReq | PlainMessage<LedgersServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=ledgers.scailo_pb.d.ts.map
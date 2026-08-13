import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting ledger search results.
 *
 * @generated from enum Scailo.LEDGER_SORT_KEY
 */
export declare enum LEDGER_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: LEDGER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEDGER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: LEDGER_SORT_KEY_CREATED_AT = 1;
     */
    LEDGER_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: LEDGER_SORT_KEY_MODIFIED_AT = 2;
     */
    LEDGER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: LEDGER_SORT_KEY_APPROVED_ON = 3;
     */
    LEDGER_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: LEDGER_SORT_KEY_APPROVED_BY = 4;
     */
    LEDGER_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: LEDGER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LEDGER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: LEDGER_SORT_KEY_NAME = 10;
     */
    LEDGER_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided code.
     *
     * @generated from enum value: LEDGER_SORT_KEY_CODE = 11;
     */
    LEDGER_SORT_KEY_CODE = 11
}
/**
 *
 * Request message for creating and initializing a new financial or operational Ledger.
 * This record maps accounting node hierarchies, unique account codes, structural types
 * (leaf vs. non-leaf parent nodes), and compliance attributes within a tenant entity.
 *
 * **Note:** This is the primary entry point for Finance teams, Treasury, and Admins to
 * construct or expand the Chart of Accounts and define transactional ledger groups.
 *
 * @generated from message Scailo.LedgersServiceCreateRequest
 */
export declare class LedgersServiceCreateRequest extends Message<LedgersServiceCreateRequest> {
    /**
     *
     * @optional
     *
     * @description The globally unique identifier for the Organization or Business Entity.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 1;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 2;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The official or friendly descriptive name of the ledger account.
     *
     * @example "General Operating Expenses"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @mandatory
     *
     * @description The unique code or alphanumeric token by which the ledger account is classified in the Chart of Accounts.
     *
     * @example "LEDGER-1010-OPEX"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent non-leaf ledger. Defaults to 0 if this is the root or top-level node in the ledger hierarchy.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 parent_ledger_id = 12;
     */
    parentLedgerId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description Flag determining whether this ledger node is a terminal 'leaf' node that can directly hold transactional balances, or a 'non-leaf' grouping node.
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: bool is_leaf = 13;
     */
    isLeaf: boolean;
    /**
     *
     * @optional
     *
     * @description Clarifying details or context regarding the ledger's intended accounting use case, currency parameters, or scope.
     *
     * @example "Tracks day-to-day corporate operating expenses, utilities, and minor regional software licenses."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 14;
     */
    description?: string;
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
 * Request message for updating an existing Ledger record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, and description
 * of an established Ledger.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.LedgersServiceUpdateRequest
 */
export declare class LedgersServiceUpdateRequest extends Message<LedgersServiceUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target record that needs to be updated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     *
     * @optional
     *
     * @description Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.
     *
     * @example true
     *
     * @generated from field: optional bool notify_users = 3;
     */
    notifyUsers?: boolean;
    /**
     *
     * @optional
     *
     * @description The official or friendly descriptive name of the ledger account.
     *
     * @example "General Operating Expenses"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 10;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description Clarifying details or context regarding the ledger's intended accounting use case, currency parameters, or scope.
     *
     * @example "Tracks day-to-day corporate operating expenses, utilities, and minor regional software licenses."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 14;
     */
    description?: string;
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
 * Represents a full Ledger within the system.
 *
 * @generated from message Scailo.Ledger
 */
export declare class Ledger extends Message<Ledger> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     *
     * @description Standard employee and record metadata including timestamps.
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     *
     * @description Detailed approval workflow state (Approver ID, Role, and Timestamps).
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     *
     * @description The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @description Comprehensive audit trail of every operation performed on this record.
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     *
     * @description The official or friendly descriptive name of the ledger account.
     *
     * @example "General Operating Expenses"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique code or alphanumeric token by which the ledger account is classified in the Chart of Accounts.
     *
     * @example "LEDGER-1010-OPEX"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description The unique internal identifier of the parent non-leaf ledger. Defaults to 0 if this is the root or top-level node in the ledger hierarchy.
     *
     * @example 1024
     *
     * @generated from field: uint64 parent_ledger_id = 12;
     */
    parentLedgerId: bigint;
    /**
     *
     * @description Flag determining whether this ledger node is a terminal 'leaf' node that can directly hold transactional balances, or a 'non-leaf' grouping node.
     *
     * @example true
     *
     * @generated from field: bool is_leaf = 13;
     */
    isLeaf: boolean;
    /**
     *
     * @description Clarifying details or context regarding the ledger's intended accounting use case, currency parameters, or scope.
     *
     * @example "Tracks day-to-day corporate operating expenses, utilities, and minor regional software licenses."
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
 * Container message for a collection of Ledger records.
 *
 * @generated from message Scailo.LedgersList
 */
export declare class LedgersList extends Message<LedgersList> {
    /**
     * @description An array of Ledger records.
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
 * Pagination request for retrieving slices of Ledger records.
 *
 * @generated from message Scailo.LedgersServicePaginationReq
 */
export declare class LedgersServicePaginationReq extends Message<LedgersServicePaginationReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to return per page.
     *
     * @example 50
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Must be a strictly positive integer (1 or greater).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: optional Scailo.LEDGER_SORT_KEY sort_key = 5;
     */
    sortKey?: LEDGER_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter results by a specific lifecycle status.
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.LedgersServicePaginationResponse
 */
export declare class LedgersServicePaginationResponse extends Message<LedgersServicePaginationResponse> {
    /**
     *
     * @description Number of records returned in the current response slice.
     *
     * @example 50
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     *
     * @description The offset provided in the request.
     *
     * @example 0
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     *
     * @description The total number of records matching the criteria.
     *
     * @example 1250
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     *
     * @description The array of records for the current page.
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
 * Advanced filter request for searching and paginating ledgers using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.LedgersServiceFilterReq
 */
export declare class LedgersServiceFilterReq extends Message<LedgersServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.LEDGER_SORT_KEY sort_key = 5;
     */
    sortKey?: LEDGER_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The official or friendly descriptive name of the ledger account.
     *
     * @example "General Operating Expenses"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 20;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique code or alphanumeric token by which the ledger account is classified in the Chart of Accounts.
     *
     * @example "LEDGER-1010-OPEX"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent non-leaf ledger. Defaults to 0 if this is the root or top-level node in the ledger hierarchy.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 parent_ledger_id = 22;
     */
    parentLedgerId?: bigint;
    /**
     *
     * @optional
     *
     * @description Flag determining whether this ledger node is a terminal 'leaf' node that can directly hold transactional balances, or a 'non-leaf' grouping node.
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 23;
     */
    isLeaf?: BOOL_FILTER;
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
 * Target filter request for counting ledger records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.LedgersServiceCountReq
 */
export declare class LedgersServiceCountReq extends Message<LedgersServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The official or friendly descriptive name of the ledger account.
     *
     * @example "General Operating Expenses"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 20;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique code or alphanumeric token by which the ledger account is classified in the Chart of Accounts.
     *
     * @example "LEDGER-1010-OPEX"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent non-leaf ledger. Defaults to 0 if this is the root or top-level node in the ledger hierarchy.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 parent_ledger_id = 22;
     */
    parentLedgerId?: bigint;
    /**
     *
     * @optional
     *
     * @description Flag determining whether this ledger node is a terminal 'leaf' node that can directly hold transactional balances, or a 'non-leaf' grouping node.
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 23;
     */
    isLeaf?: BOOL_FILTER;
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
 * Broad-spectrum search and lookup request for locating and paginating ledgers via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.LedgersServiceSearchAllReq
 */
export declare class LedgersServiceSearchAllReq extends Message<LedgersServiceSearchAllReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.LEDGER_SORT_KEY sort_key = 5;
     */
    sortKey?: LEDGER_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 6;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
     *
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent non-leaf ledger. Defaults to 0 if this is the root or top-level node in the ledger hierarchy.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 parent_ledger_id = 22;
     */
    parentLedgerId?: bigint;
    /**
     *
     * @optional
     *
     * @description Flag determining whether this ledger node is a terminal 'leaf' node that can directly hold transactional balances, or a 'non-leaf' grouping node.
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 23;
     */
    isLeaf?: BOOL_FILTER;
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
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting currency search results.
 *
 * @generated from enum Scailo.CURRENCY_SORT_KEY
 */
export declare enum CURRENCY_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: CURRENCY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CURRENCY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: CURRENCY_SORT_KEY_CREATED_AT = 1;
     */
    CURRENCY_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: CURRENCY_SORT_KEY_MODIFIED_AT = 2;
     */
    CURRENCY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: CURRENCY_SORT_KEY_APPROVED_ON = 3;
     */
    CURRENCY_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: CURRENCY_SORT_KEY_APPROVED_BY = 4;
     */
    CURRENCY_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: CURRENCY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    CURRENCY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: CURRENCY_SORT_KEY_NAME = 10;
     */
    CURRENCY_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided symbol.
     *
     * @generated from enum value: CURRENCY_SORT_KEY_SYMBOL = 11;
     */
    CURRENCY_SORT_KEY_SYMBOL = 11
}
/**
 *
 * Request message for creating and registering a new Currency definition.
 * This record tracks international or internal currency metadata, localized
 * sub-unit names (mantissa/exponent), symbols, and tenant isolation parameters.
 *
 * **Note:** This is the primary entry point for Treasury, Finance, and Admins
 * to initialize legal tender configurations or internal credit structures used for financial ledgering.
 *
 * @generated from message Scailo.CurrenciesServiceCreateRequest
 */
export declare class CurrenciesServiceCreateRequest extends Message<CurrenciesServiceCreateRequest> {
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
     * @description The official or canonical name of the currency.
     *
     * @example "US Dollar"
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
     * @description The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.
     *
     * @example "USD"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     *
     * @mandatory
     *
     * @description The technical term or label for the currency's major or primary unit (often mapping conceptually to the whole integer part/mantissa).
     *
     * @example "Dollar"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string mantissa_name = 12;
     */
    mantissaName: string;
    /**
     *
     * @mandatory
     *
     * @description The technical term or label for the currency's fractional sub-unit (often mapping conceptually to the minor unit/exponent).
     *
     * @example "Cent"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string exponent_name = 13;
     */
    exponentName: string;
    /**
     *
     * @optional
     *
     * @description Contextual description or clarifying details outlining the specific use-case or regional scope of this currency record.
     *
     * @example "United States legal tender used for domestic operational accounts."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 14;
     */
    description?: string;
    constructor(data?: PartialMessage<CurrenciesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceCreateRequest;
    static equals(a: CurrenciesServiceCreateRequest | PlainMessage<CurrenciesServiceCreateRequest> | undefined, b: CurrenciesServiceCreateRequest | PlainMessage<CurrenciesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Currency record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, symbol, mantissa name, exponent name, and description
 * of an established Currency.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.CurrenciesServiceUpdateRequest
 */
export declare class CurrenciesServiceUpdateRequest extends Message<CurrenciesServiceUpdateRequest> {
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
     * @description The official or canonical name of the currency.
     *
     * @example "US Dollar"
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
     * @description The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.
     *
     * @example "USD"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string symbol = 11;
     */
    symbol?: string;
    /**
     *
     * @optional
     *
     * @description The technical term or label for the currency's major or primary unit (often mapping conceptually to the whole integer part/mantissa).
     *
     * @example "Dollar"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string mantissa_name = 12;
     */
    mantissaName?: string;
    /**
     *
     * @optional
     *
     * @description The technical term or label for the currency's fractional sub-unit (often mapping conceptually to the minor unit/exponent).
     *
     * @example "Cent"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string exponent_name = 13;
     */
    exponentName?: string;
    /**
     *
     * @optional
     *
     * @description Contextual description or clarifying details outlining the specific use-case or regional scope of this currency record.
     *
     * @example "United States legal tender used for domestic operational accounts."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 14;
     */
    description?: string;
    constructor(data?: PartialMessage<CurrenciesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceUpdateRequest;
    static equals(a: CurrenciesServiceUpdateRequest | PlainMessage<CurrenciesServiceUpdateRequest> | undefined, b: CurrenciesServiceUpdateRequest | PlainMessage<CurrenciesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Currency within the system.
 *
 * @generated from message Scailo.Currency
 */
export declare class Currency extends Message<Currency> {
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
     * @description The official or canonical name of the currency.
     *
     * @example "US Dollar"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.
     *
     * @example "USD"
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     *
     * @description The technical term or label for the currency's major or primary unit (often mapping conceptually to the whole integer part/mantissa).
     *
     * @example "Dollar"
     *
     * @generated from field: string mantissa_name = 12;
     */
    mantissaName: string;
    /**
     *
     * @description The technical term or label for the currency's fractional sub-unit (often mapping conceptually to the minor unit/exponent).
     *
     * @example "Cent"
     *
     * @generated from field: string exponent_name = 13;
     */
    exponentName: string;
    /**
     *
     * @description Contextual description or clarifying details outlining the specific use-case or regional scope of this currency record.
     *
     * @example "United States legal tender used for domestic operational accounts."
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<Currency>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Currency";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Currency;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Currency;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Currency;
    static equals(a: Currency | PlainMessage<Currency> | undefined, b: Currency | PlainMessage<Currency> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Currency records.
 *
 * @generated from message Scailo.CurrenciesList
 */
export declare class CurrenciesList extends Message<CurrenciesList> {
    /**
     * @description An array of Currency records.
     *
     * @generated from field: repeated Scailo.Currency list = 1;
     */
    list: Currency[];
    constructor(data?: PartialMessage<CurrenciesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesList;
    static equals(a: CurrenciesList | PlainMessage<CurrenciesList> | undefined, b: CurrenciesList | PlainMessage<CurrenciesList> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Currency records.
 *
 * @generated from message Scailo.CurrenciesServicePaginationReq
 */
export declare class CurrenciesServicePaginationReq extends Message<CurrenciesServicePaginationReq> {
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
     * @generated from field: optional Scailo.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey?: CURRENCY_SORT_KEY;
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
    constructor(data?: PartialMessage<CurrenciesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationReq;
    static equals(a: CurrenciesServicePaginationReq | PlainMessage<CurrenciesServicePaginationReq> | undefined, b: CurrenciesServicePaginationReq | PlainMessage<CurrenciesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.CurrenciesServicePaginationResponse
 */
export declare class CurrenciesServicePaginationResponse extends Message<CurrenciesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Currency payload = 4;
     */
    payload: Currency[];
    constructor(data?: PartialMessage<CurrenciesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationResponse;
    static equals(a: CurrenciesServicePaginationResponse | PlainMessage<CurrenciesServicePaginationResponse> | undefined, b: CurrenciesServicePaginationResponse | PlainMessage<CurrenciesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating currencies using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.CurrenciesServiceFilterReq
 */
export declare class CurrenciesServiceFilterReq extends Message<CurrenciesServiceFilterReq> {
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
     * @generated from field: optional Scailo.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey?: CURRENCY_SORT_KEY;
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
     * @description The official or canonical name of the currency.
     *
     * @example "US Dollar"
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
     * @description The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.
     *
     * @example "USD"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string symbol = 21;
     */
    symbol?: string;
    constructor(data?: PartialMessage<CurrenciesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceFilterReq;
    static equals(a: CurrenciesServiceFilterReq | PlainMessage<CurrenciesServiceFilterReq> | undefined, b: CurrenciesServiceFilterReq | PlainMessage<CurrenciesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting currency records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.CurrenciesServiceCountReq
 */
export declare class CurrenciesServiceCountReq extends Message<CurrenciesServiceCountReq> {
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
     * @description The official or canonical name of the currency.
     *
     * @example "US Dollar"
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
     * @description The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.
     *
     * @example "USD"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string symbol = 21;
     */
    symbol?: string;
    constructor(data?: PartialMessage<CurrenciesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceCountReq;
    static equals(a: CurrenciesServiceCountReq | PlainMessage<CurrenciesServiceCountReq> | undefined, b: CurrenciesServiceCountReq | PlainMessage<CurrenciesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating currencies via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.CurrenciesServiceSearchAllReq
 */
export declare class CurrenciesServiceSearchAllReq extends Message<CurrenciesServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey?: CURRENCY_SORT_KEY;
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
    constructor(data?: PartialMessage<CurrenciesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceSearchAllReq;
    static equals(a: CurrenciesServiceSearchAllReq | PlainMessage<CurrenciesServiceSearchAllReq> | undefined, b: CurrenciesServiceSearchAllReq | PlainMessage<CurrenciesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=currencies.scailo_pb.d.ts.map
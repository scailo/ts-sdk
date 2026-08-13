import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting store search results.
 *
 * @generated from enum Scailo.STORE_SORT_KEY
 */
export declare enum STORE_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: STORE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STORE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: STORE_SORT_KEY_CREATED_AT = 1;
     */
    STORE_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: STORE_SORT_KEY_MODIFIED_AT = 2;
     */
    STORE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: STORE_SORT_KEY_APPROVED_ON = 3;
     */
    STORE_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: STORE_SORT_KEY_APPROVED_BY = 4;
     */
    STORE_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: STORE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STORE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: STORE_SORT_KEY_NAME = 10;
     */
    STORE_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided code.
     *
     * @generated from enum value: STORE_SORT_KEY_CODE = 11;
     */
    STORE_SORT_KEY_CODE = 11
}
/**
 *
 * Request message for creating and registering a new retail, wholesale, or fulfillment Store facility.
 * This record maps geographic or logical location associations, operational points of contact,
 * internal inventory codes, and multi-tenant security identifiers.
 *
 * **Note:** This is the primary entry point for Operations, Supply Chain, and Admins to
 * initialize major business facilities, retail hubs, or regional warehouse environments.
 *
 * @generated from message Scailo.StoresServiceCreateRequest
 */
export declare class StoresServiceCreateRequest extends Message<StoresServiceCreateRequest> {
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
     * @description The unique internal identifier of the geographic or logical location under which this store is situated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: uint64 location_id = 9;
     */
    locationId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The official, friendly, or legal branding name of the store facility.
     *
     * @example "Downtown Flagship Store"
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
     * @description The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.
     *
     * @example "STR-DT-01"
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
     * @description Clarifying details or operational parameters regarding the store layout, capacity thresholds, or hours of operation.
     *
     * @example "Primary retail outlet serving the metropolitan area. Includes standard fulfillment capabilities."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 12;
     */
    description?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique system username or account identifier of the person-in-charge or facility manager responsible for this store.
     *
     * @example "johndoe_mgr"
     *
     * @regex .+
     *
     * @format Must be a non-empty string representing a valid user identity token.
     *
     * @generated from field: string incharge_username = 13;
     */
    inchargeUsername: string;
    /**
     *
     * @optional
     *
     * @description The primary telephone or hot-line contact number explicitly assigned to the store facility.
     *
     * @example "+1-555-0177"
     *
     * @regex .*
     *
     * @format If provided, should follow valid regional or international telephone formatting specifications.
     *
     * @generated from field: optional string phone = 14;
     */
    phone?: string;
    constructor(data?: PartialMessage<StoresServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoresServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoresServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoresServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoresServiceCreateRequest;
    static equals(a: StoresServiceCreateRequest | PlainMessage<StoresServiceCreateRequest> | undefined, b: StoresServiceCreateRequest | PlainMessage<StoresServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Store record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, code, description, incharge username, and phone
 * of an established Store.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.StoresServiceUpdateRequest
 */
export declare class StoresServiceUpdateRequest extends Message<StoresServiceUpdateRequest> {
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
     * @description The official, friendly, or legal branding name of the store facility.
     *
     * @example "Downtown Flagship Store"
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
     * @description The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.
     *
     * @example "STR-DT-01"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 11;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description Clarifying details or operational parameters regarding the store layout, capacity thresholds, or hours of operation.
     *
     * @example "Primary retail outlet serving the metropolitan area. Includes standard fulfillment capabilities."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 12;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description The unique system username or account identifier of the person-in-charge or facility manager responsible for this store.
     *
     * @example "johndoe_mgr"
     *
     * @regex .*
     *
     * @format Must be a non-empty string representing a valid user identity token.
     *
     * @generated from field: optional string incharge_username = 13;
     */
    inchargeUsername?: string;
    /**
     *
     * @optional
     *
     * @description The primary telephone or hot-line contact number explicitly assigned to the store facility.
     *
     * @example "+1-555-0177"
     *
     * @regex .*
     *
     * @format If provided, should follow valid regional or international telephone formatting specifications.
     *
     * @generated from field: optional string phone = 14;
     */
    phone?: string;
    constructor(data?: PartialMessage<StoresServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoresServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoresServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoresServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoresServiceUpdateRequest;
    static equals(a: StoresServiceUpdateRequest | PlainMessage<StoresServiceUpdateRequest> | undefined, b: StoresServiceUpdateRequest | PlainMessage<StoresServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Store within the system.
 *
 * @generated from message Scailo.Store
 */
export declare class Store extends Message<Store> {
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
     * @description The unique internal identifier of the geographic or logical location under which this store is situated.
     *
     * @example 1024
     *
     * @generated from field: uint64 location_id = 9;
     */
    locationId: bigint;
    /**
     *
     * @description The official, friendly, or legal branding name of the store facility.
     *
     * @example "Downtown Flagship Store"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.
     *
     * @example "STR-DT-01"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description Clarifying details or operational parameters regarding the store layout, capacity thresholds, or hours of operation.
     *
     * @example "Primary retail outlet serving the metropolitan area. Includes standard fulfillment capabilities."
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     *
     * @description The unique system username or account identifier of the person-in-charge or facility manager responsible for this store.
     *
     * @example "johndoe_mgr"
     *
     * @generated from field: string incharge_username = 13;
     */
    inchargeUsername: string;
    /**
     *
     * @description The primary telephone or hot-line contact number explicitly assigned to the store facility.
     *
     * @example "+1-555-0177"
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
    constructor(data?: PartialMessage<Store>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Store";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Store;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Store;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Store;
    static equals(a: Store | PlainMessage<Store> | undefined, b: Store | PlainMessage<Store> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Store records.
 *
 * @generated from message Scailo.StoresList
 */
export declare class StoresList extends Message<StoresList> {
    /**
     * @description An array of Store records.
     *
     * @generated from field: repeated Scailo.Store list = 1;
     */
    list: Store[];
    constructor(data?: PartialMessage<StoresList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoresList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoresList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoresList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoresList;
    static equals(a: StoresList | PlainMessage<StoresList> | undefined, b: StoresList | PlainMessage<StoresList> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Store records.
 *
 * @generated from message Scailo.StoresServicePaginationReq
 */
export declare class StoresServicePaginationReq extends Message<StoresServicePaginationReq> {
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
     * @generated from field: optional Scailo.STORE_SORT_KEY sort_key = 5;
     */
    sortKey?: STORE_SORT_KEY;
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
    constructor(data?: PartialMessage<StoresServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoresServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoresServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoresServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoresServicePaginationReq;
    static equals(a: StoresServicePaginationReq | PlainMessage<StoresServicePaginationReq> | undefined, b: StoresServicePaginationReq | PlainMessage<StoresServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.StoresServicePaginationResponse
 */
export declare class StoresServicePaginationResponse extends Message<StoresServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Store payload = 4;
     */
    payload: Store[];
    constructor(data?: PartialMessage<StoresServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoresServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoresServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoresServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoresServicePaginationResponse;
    static equals(a: StoresServicePaginationResponse | PlainMessage<StoresServicePaginationResponse> | undefined, b: StoresServicePaginationResponse | PlainMessage<StoresServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating stores using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.StoresServiceFilterReq
 */
export declare class StoresServiceFilterReq extends Message<StoresServiceFilterReq> {
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
     * @generated from field: optional Scailo.STORE_SORT_KEY sort_key = 5;
     */
    sortKey?: STORE_SORT_KEY;
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
     * @description The official, friendly, or legal branding name of the store facility.
     *
     * @example "Downtown Flagship Store"
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
     * @description The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.
     *
     * @example "STR-DT-01"
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
     * @description The unique internal identifier of the geographic or logical location under which this store is situated.
     *
     * @example 1024
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: optional uint64 location_id = 22;
     */
    locationId?: bigint;
    constructor(data?: PartialMessage<StoresServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoresServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoresServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoresServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoresServiceFilterReq;
    static equals(a: StoresServiceFilterReq | PlainMessage<StoresServiceFilterReq> | undefined, b: StoresServiceFilterReq | PlainMessage<StoresServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting store records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.StoresServiceCountReq
 */
export declare class StoresServiceCountReq extends Message<StoresServiceCountReq> {
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
     * @description The official, friendly, or legal branding name of the store facility.
     *
     * @example "Downtown Flagship Store"
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
     * @description The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.
     *
     * @example "STR-DT-01"
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
     * @description The unique internal identifier of the geographic or logical location under which this store is situated.
     *
     * @example 1024
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: optional uint64 location_id = 22;
     */
    locationId?: bigint;
    constructor(data?: PartialMessage<StoresServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoresServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoresServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoresServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoresServiceCountReq;
    static equals(a: StoresServiceCountReq | PlainMessage<StoresServiceCountReq> | undefined, b: StoresServiceCountReq | PlainMessage<StoresServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating stores via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.StoresServiceSearchAllReq
 */
export declare class StoresServiceSearchAllReq extends Message<StoresServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.STORE_SORT_KEY sort_key = 5;
     */
    sortKey?: STORE_SORT_KEY;
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
     * @mandatory
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
     * @description The unique internal identifier of the geographic or logical location under which this store is situated.
     *
     * @example 1024
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: optional uint64 location_id = 12;
     */
    locationId?: bigint;
    constructor(data?: PartialMessage<StoresServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoresServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoresServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoresServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoresServiceSearchAllReq;
    static equals(a: StoresServiceSearchAllReq | PlainMessage<StoresServiceSearchAllReq> | undefined, b: StoresServiceSearchAllReq | PlainMessage<StoresServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=stores.scailo_pb.d.ts.map
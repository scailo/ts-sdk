import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting unit of material search results.
 *
 * @generated from enum Scailo.UNIT_OF_MATERIAL_SORT_KEY
 */
export declare enum UNIT_OF_MATERIAL_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    UNIT_OF_MATERIAL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_CREATED_AT = 1;
     */
    UNIT_OF_MATERIAL_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_MODIFIED_AT = 2;
     */
    UNIT_OF_MATERIAL_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_APPROVED_ON = 3;
     */
    UNIT_OF_MATERIAL_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_APPROVED_BY = 4;
     */
    UNIT_OF_MATERIAL_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    UNIT_OF_MATERIAL_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_NAME = 10;
     */
    UNIT_OF_MATERIAL_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided symbol.
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_SYMBOL = 11;
     */
    UNIT_OF_MATERIAL_SORT_KEY_SYMBOL = 11
}
/**
 *
 * Request message for creating and registering a new Unit of Material (UOM) definition.
 * This record tracks standardized measurement units, classification symbols, descriptive metadata,
 * and tenant isolation parameters for physical or logistical item quantities.
 *
 * **Note:** This is the primary entry point for Procurement, Supply Chain, and Admins to
 * initialize systemic units of measure (e.g., kilograms, liters, packs) used for inventory ledgering.
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceCreateRequest
 */
export declare class UnitsOfMaterialsServiceCreateRequest extends Message<UnitsOfMaterialsServiceCreateRequest> {
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
     * @description The official or canonical name of the unit of material.
     *
     * @example "Kilogram"
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
     * @description The unique shorthand symbol, abbreviation, or metric token by which the unit of material is structurally classified.
     *
     * @example "kg"
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
     * @optional
     *
     * @description Contextual description or clarifying details outlining the operational bounds, conversions, or standard applications of this unit.
     *
     * @example "Standard SI unit for mass, utilized across all raw bulk compound inventory tables."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 12;
     */
    description?: string;
    constructor(data?: PartialMessage<UnitsOfMaterialsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitsOfMaterialsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsOfMaterialsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceCreateRequest;
    static equals(a: UnitsOfMaterialsServiceCreateRequest | PlainMessage<UnitsOfMaterialsServiceCreateRequest> | undefined, b: UnitsOfMaterialsServiceCreateRequest | PlainMessage<UnitsOfMaterialsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing UnitOfMaterial record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, symbol, mantissa name, exponent name, and description
 * of an established UnitOfMaterial.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceUpdateRequest
 */
export declare class UnitsOfMaterialsServiceUpdateRequest extends Message<UnitsOfMaterialsServiceUpdateRequest> {
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
     * @description The official or canonical name of the unit of material.
     *
     * @example "Kilogram"
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
     * @description The unique shorthand symbol, abbreviation, or metric token by which the unit of material is structurally classified.
     *
     * @example "kg"
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
     * @description Contextual description or clarifying details outlining the operational bounds, conversions, or standard applications of this unit.
     *
     * @example "Standard SI unit for mass, utilized across all raw bulk compound inventory tables."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 12;
     */
    description?: string;
    constructor(data?: PartialMessage<UnitsOfMaterialsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitsOfMaterialsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsOfMaterialsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceUpdateRequest;
    static equals(a: UnitsOfMaterialsServiceUpdateRequest | PlainMessage<UnitsOfMaterialsServiceUpdateRequest> | undefined, b: UnitsOfMaterialsServiceUpdateRequest | PlainMessage<UnitsOfMaterialsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full UnitOfMaterial within the system.
 *
 * @generated from message Scailo.UnitOfMaterial
 */
export declare class UnitOfMaterial extends Message<UnitOfMaterial> {
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
     * @description The official or canonical name of the unit of material.
     *
     * @example "Kilogram"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique shorthand symbol, abbreviation, or metric token by which the unit of material is structurally classified.
     *
     * @example "kg"
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     *
     * @description Contextual description or clarifying details outlining the operational bounds, conversions, or standard applications of this unit.
     *
     * @example "Standard SI unit for mass, utilized across all raw bulk compound inventory tables."
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<UnitOfMaterial>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitOfMaterial";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitOfMaterial;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitOfMaterial;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitOfMaterial;
    static equals(a: UnitOfMaterial | PlainMessage<UnitOfMaterial> | undefined, b: UnitOfMaterial | PlainMessage<UnitOfMaterial> | undefined): boolean;
}
/**
 *
 * Container message for a collection of UnitOfMaterial records.
 *
 * @generated from message Scailo.UnitsOfMaterialsList
 */
export declare class UnitsOfMaterialsList extends Message<UnitsOfMaterialsList> {
    /**
     * @description An array of UnitOfMaterial records.
     *
     * @generated from field: repeated Scailo.UnitOfMaterial list = 1;
     */
    list: UnitOfMaterial[];
    constructor(data?: PartialMessage<UnitsOfMaterialsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitsOfMaterialsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsOfMaterialsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsOfMaterialsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsOfMaterialsList;
    static equals(a: UnitsOfMaterialsList | PlainMessage<UnitsOfMaterialsList> | undefined, b: UnitsOfMaterialsList | PlainMessage<UnitsOfMaterialsList> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of UnitOfMaterial records.
 *
 * @generated from message Scailo.UnitsOfMaterialsServicePaginationReq
 */
export declare class UnitsOfMaterialsServicePaginationReq extends Message<UnitsOfMaterialsServicePaginationReq> {
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
     * @generated from field: optional Scailo.UNIT_OF_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey?: UNIT_OF_MATERIAL_SORT_KEY;
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
    constructor(data?: PartialMessage<UnitsOfMaterialsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitsOfMaterialsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsOfMaterialsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServicePaginationReq;
    static equals(a: UnitsOfMaterialsServicePaginationReq | PlainMessage<UnitsOfMaterialsServicePaginationReq> | undefined, b: UnitsOfMaterialsServicePaginationReq | PlainMessage<UnitsOfMaterialsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.UnitsOfMaterialsServicePaginationResponse
 */
export declare class UnitsOfMaterialsServicePaginationResponse extends Message<UnitsOfMaterialsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.UnitOfMaterial payload = 4;
     */
    payload: UnitOfMaterial[];
    constructor(data?: PartialMessage<UnitsOfMaterialsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitsOfMaterialsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsOfMaterialsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServicePaginationResponse;
    static equals(a: UnitsOfMaterialsServicePaginationResponse | PlainMessage<UnitsOfMaterialsServicePaginationResponse> | undefined, b: UnitsOfMaterialsServicePaginationResponse | PlainMessage<UnitsOfMaterialsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating unit of materials using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceFilterReq
 */
export declare class UnitsOfMaterialsServiceFilterReq extends Message<UnitsOfMaterialsServiceFilterReq> {
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
     * @generated from field: optional Scailo.UNIT_OF_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey?: UNIT_OF_MATERIAL_SORT_KEY;
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
     * @description The official or canonical name of the unit of material.
     *
     * @example "Kilogram"
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
     * @description The unique shorthand symbol, abbreviation, or metric token by which the unit of material is structurally classified.
     *
     * @example "kg"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string symbol = 21;
     */
    symbol?: string;
    constructor(data?: PartialMessage<UnitsOfMaterialsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitsOfMaterialsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsOfMaterialsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceFilterReq;
    static equals(a: UnitsOfMaterialsServiceFilterReq | PlainMessage<UnitsOfMaterialsServiceFilterReq> | undefined, b: UnitsOfMaterialsServiceFilterReq | PlainMessage<UnitsOfMaterialsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting unit of material records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceCountReq
 */
export declare class UnitsOfMaterialsServiceCountReq extends Message<UnitsOfMaterialsServiceCountReq> {
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
     * @description The official or canonical name of the unit of material.
     *
     * @example "Kilogram"
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
     * @description The unique shorthand symbol, abbreviation, or metric token by which the unit of material is structurally classified.
     *
     * @example "kg"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string symbol = 21;
     */
    symbol?: string;
    constructor(data?: PartialMessage<UnitsOfMaterialsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitsOfMaterialsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsOfMaterialsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceCountReq;
    static equals(a: UnitsOfMaterialsServiceCountReq | PlainMessage<UnitsOfMaterialsServiceCountReq> | undefined, b: UnitsOfMaterialsServiceCountReq | PlainMessage<UnitsOfMaterialsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating unit of materials via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceSearchAllReq
 */
export declare class UnitsOfMaterialsServiceSearchAllReq extends Message<UnitsOfMaterialsServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.UNIT_OF_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey?: UNIT_OF_MATERIAL_SORT_KEY;
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
    constructor(data?: PartialMessage<UnitsOfMaterialsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UnitsOfMaterialsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsOfMaterialsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsOfMaterialsServiceSearchAllReq;
    static equals(a: UnitsOfMaterialsServiceSearchAllReq | PlainMessage<UnitsOfMaterialsServiceSearchAllReq> | undefined, b: UnitsOfMaterialsServiceSearchAllReq | PlainMessage<UnitsOfMaterialsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=units_of_materials.scailo_pb.d.ts.map
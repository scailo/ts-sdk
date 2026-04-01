import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.LEAVE_LOG_SORT_KEY
 */
export declare enum LEAVE_LOG_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEAVE_LOG_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_CREATED_AT = 1;
     */
    LEAVE_LOG_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_MODIFIED_AT = 2;
     */
    LEAVE_LOG_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_USER_ID = 10;
     */
    LEAVE_LOG_SORT_KEY_USER_ID = 10,
    /**
     * Fetch ordered results by the uom ID
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_UOM_ID = 11;
     */
    LEAVE_LOG_SORT_KEY_UOM_ID = 11,
    /**
     * Fetch ordered results by the leave type ID
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_LEAVE_TYPE_ID = 12;
     */
    LEAVE_LOG_SORT_KEY_LEAVE_TYPE_ID = 12,
    /**
     * Fetch ordered results by the quantity
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_QUANTITY = 13;
     */
    LEAVE_LOG_SORT_KEY_QUANTITY = 13,
    /**
     * Fetch ordered results by the reference from attribute
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_REF_FROM = 14;
     */
    LEAVE_LOG_SORT_KEY_REF_FROM = 14
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.LeavesLogsServiceCreateRequest
 */
export declare class LeavesLogsServiceCreateRequest extends Message<LeavesLogsServiceCreateRequest> {
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
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: uint64 user_id = 10;
     */
    userId: bigint;
    /**
     * The ID of the uom
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * The reference on the basis of which this record is created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The corresponding reference ID
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: uint64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    /**
     * The quantity of leaves (in cents)
     *
     * @generated from field: uint64 quantity = 15;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<LeavesLogsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesLogsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsServiceCreateRequest;
    static equals(a: LeavesLogsServiceCreateRequest | PlainMessage<LeavesLogsServiceCreateRequest> | undefined, b: LeavesLogsServiceCreateRequest | PlainMessage<LeavesLogsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.LeaveLog
 */
export declare class LeaveLog extends Message<LeaveLog> {
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
     * Stores the metadata of this record
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: uint64 user_id = 10;
     */
    userId: bigint;
    /**
     * The ID of the uom
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * The reference on the basis of which this record is created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The corresponding reference ID
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: uint64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    /**
     * The quantity of leaves (in cents)
     *
     * @generated from field: uint64 quantity = 15;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<LeaveLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeaveLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveLog;
    static equals(a: LeaveLog | PlainMessage<LeaveLog> | undefined, b: LeaveLog | PlainMessage<LeaveLog> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to fetch the number of leaves available for an employee
 *
 * @generated from message Scailo.LeavesLogsCountEmployeeLeavesRequest
 */
export declare class LeavesLogsCountEmployeeLeavesRequest extends Message<LeavesLogsCountEmployeeLeavesRequest> {
    /**
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: uint64 user_id = 10;
     */
    userId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: uint64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    constructor(data?: PartialMessage<LeavesLogsCountEmployeeLeavesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesLogsCountEmployeeLeavesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsCountEmployeeLeavesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsCountEmployeeLeavesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsCountEmployeeLeavesRequest;
    static equals(a: LeavesLogsCountEmployeeLeavesRequest | PlainMessage<LeavesLogsCountEmployeeLeavesRequest> | undefined, b: LeavesLogsCountEmployeeLeavesRequest | PlainMessage<LeavesLogsCountEmployeeLeavesRequest> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.LeavesLogsList
 */
export declare class LeavesLogsList extends Message<LeavesLogsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.LeaveLog list = 1;
     */
    list: LeaveLog[];
    constructor(data?: PartialMessage<LeavesLogsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesLogsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsList;
    static equals(a: LeavesLogsList | PlainMessage<LeavesLogsList> | undefined, b: LeavesLogsList | PlainMessage<LeavesLogsList> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.LeavesLogsServiceFilterReq
 */
export declare class LeavesLogsServiceFilterReq extends Message<LeavesLogsServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
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
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.LEAVE_LOG_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_LOG_SORT_KEY;
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
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
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
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
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
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
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
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
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
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: uint64 user_id = 10;
     */
    userId: bigint;
    /**
     * The ID of the uom
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * The reference on the basis of which this record is created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The corresponding reference ID
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: uint64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    /**
     * The minimum quantity of leaves (in cents)
     *
     * @generated from field: uint64 quantity_min = 15;
     */
    quantityMin: bigint;
    /**
     * The maximum quantity of leaves (in cents)
     *
     * @generated from field: uint64 quantity_max = 16;
     */
    quantityMax: bigint;
    constructor(data?: PartialMessage<LeavesLogsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesLogsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsServiceFilterReq;
    static equals(a: LeavesLogsServiceFilterReq | PlainMessage<LeavesLogsServiceFilterReq> | undefined, b: LeavesLogsServiceFilterReq | PlainMessage<LeavesLogsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.LeavesLogsServiceCountReq
 */
export declare class LeavesLogsServiceCountReq extends Message<LeavesLogsServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
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
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
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
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
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
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
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
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
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
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: uint64 user_id = 10;
     */
    userId: bigint;
    /**
     * The ID of the uom
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * The reference on the basis of which this record is created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The corresponding reference ID
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: uint64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    /**
     * The minimum quantity of leaves (in cents)
     *
     * @generated from field: uint64 quantity_min = 15;
     */
    quantityMin: bigint;
    /**
     * The maximum quantity of leaves (in cents)
     *
     * @generated from field: uint64 quantity_max = 16;
     */
    quantityMax: bigint;
    constructor(data?: PartialMessage<LeavesLogsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesLogsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsServiceCountReq;
    static equals(a: LeavesLogsServiceCountReq | PlainMessage<LeavesLogsServiceCountReq> | undefined, b: LeavesLogsServiceCountReq | PlainMessage<LeavesLogsServiceCountReq> | undefined): boolean;
}
//# sourceMappingURL=leaves_logs.scailo_pb.d.ts.map
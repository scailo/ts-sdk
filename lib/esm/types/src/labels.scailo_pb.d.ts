import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys for retrieving labels
 *
 * @generated from enum Scailo.LABEL_SORT_KEY
 */
export declare enum LABEL_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LABEL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LABEL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LABEL_SORT_KEY_CREATED_AT = 1;
     */
    LABEL_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LABEL_SORT_KEY_MODIFIED_AT = 2;
     */
    LABEL_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: LABEL_SORT_KEY_NAME = 10;
     */
    LABEL_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: LABEL_SORT_KEY_CODE = 11;
     */
    LABEL_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the data structure of each label on the platform
 *
 * @generated from message Scailo.Label
 */
export declare class Label extends Message<Label> {
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
     * Stores the metadata of this resource
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The name of the label
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the label is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * A short description of the label
     *
     * @generated from field: string description = 11;
     */
    description: string;
    constructor(data?: PartialMessage<Label>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Label";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Label;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Label;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Label;
    static equals(a: Label | PlainMessage<Label> | undefined, b: Label | PlainMessage<Label> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of labels
 *
 * @generated from message Scailo.LabelsList
 */
export declare class LabelsList extends Message<LabelsList> {
    /**
     * List of labels
     *
     * @generated from field: repeated Scailo.Label list = 1;
     */
    list: Label[];
    constructor(data?: PartialMessage<LabelsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LabelsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelsList;
    static equals(a: LabelsList | PlainMessage<LabelsList> | undefined, b: LabelsList | PlainMessage<LabelsList> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message Scailo.LabelPaginationResp
 */
export declare class LabelPaginationResp extends Message<LabelPaginationResp> {
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
     * @generated from field: repeated Scailo.Label payload = 4;
     */
    payload: Label[];
    constructor(data?: PartialMessage<LabelPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LabelPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelPaginationResp;
    static equals(a: LabelPaginationResp | PlainMessage<LabelPaginationResp> | undefined, b: LabelPaginationResp | PlainMessage<LabelPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation of a label
 *
 * @generated from message Scailo.LabelsServiceCreateRequest
 */
export declare class LabelsServiceCreateRequest extends Message<LabelsServiceCreateRequest> {
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
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the label
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the label is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * A short description of the label
     *
     * @generated from field: string description = 11;
     */
    description: string;
    constructor(data?: PartialMessage<LabelsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LabelsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelsServiceCreateRequest;
    static equals(a: LabelsServiceCreateRequest | PlainMessage<LabelsServiceCreateRequest> | undefined, b: LabelsServiceCreateRequest | PlainMessage<LabelsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a label
 *
 * @generated from message Scailo.LabelsServiceUpdateRequest
 */
export declare class LabelsServiceUpdateRequest extends Message<LabelsServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the label that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * The name of the label
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the label is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * A short description of the label
     *
     * @generated from field: string description = 11;
     */
    description: string;
    constructor(data?: PartialMessage<LabelsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LabelsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelsServiceUpdateRequest;
    static equals(a: LabelsServiceUpdateRequest | PlainMessage<LabelsServiceUpdateRequest> | undefined, b: LabelsServiceUpdateRequest | PlainMessage<LabelsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.LabelsServicePaginationReq
 */
export declare class LabelsServicePaginationReq extends Message<LabelsServicePaginationReq> {
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
     * @description The specific field key to sort the results by.
     *
     * @generated from field: Scailo.LABEL_SORT_KEY sort_key = 5;
     */
    sortKey: LABEL_SORT_KEY;
    constructor(data?: PartialMessage<LabelsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LabelsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelsServicePaginationReq;
    static equals(a: LabelsServicePaginationReq | PlainMessage<LabelsServicePaginationReq> | undefined, b: LabelsServicePaginationReq | PlainMessage<LabelsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.LabelsServiceFilterReq
 */
export declare class LabelsServiceFilterReq extends Message<LabelsServiceFilterReq> {
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
     * @generated from field: Scailo.LABEL_SORT_KEY sort_key = 5;
     */
    sortKey: LABEL_SORT_KEY;
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
     * The name of the label
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the label is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<LabelsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LabelsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelsServiceFilterReq;
    static equals(a: LabelsServiceFilterReq | PlainMessage<LabelsServiceFilterReq> | undefined, b: LabelsServiceFilterReq | PlainMessage<LabelsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.LabelsServiceCountReq
 */
export declare class LabelsServiceCountReq extends Message<LabelsServiceCountReq> {
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
     * The name of the label
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the label is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<LabelsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LabelsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelsServiceCountReq;
    static equals(a: LabelsServiceCountReq | PlainMessage<LabelsServiceCountReq> | undefined, b: LabelsServiceCountReq | PlainMessage<LabelsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on labels
 *
 * @generated from message Scailo.LabelsServiceSearchAllReq
 */
export declare class LabelsServiceSearchAllReq extends Message<LabelsServiceSearchAllReq> {
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
     * The sort key that is to be used to fetch the response
     *
     * @generated from field: Scailo.LABEL_SORT_KEY sort_key = 5;
     */
    sortKey: LABEL_SORT_KEY;
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
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 10;
     */
    searchKey: string;
    constructor(data?: PartialMessage<LabelsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LabelsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelsServiceSearchAllReq;
    static equals(a: LabelsServiceSearchAllReq | PlainMessage<LabelsServiceSearchAllReq> | undefined, b: LabelsServiceSearchAllReq | PlainMessage<LabelsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=labels.scailo_pb.d.ts.map
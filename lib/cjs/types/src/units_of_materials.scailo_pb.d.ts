import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.UNIT_OF_MATERIAL_SORT_KEY
 */
export declare enum UNIT_OF_MATERIAL_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    UNIT_OF_MATERIAL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_CREATED_AT = 1;
     */
    UNIT_OF_MATERIAL_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_MODIFIED_AT = 2;
     */
    UNIT_OF_MATERIAL_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_APPROVED_ON = 3;
     */
    UNIT_OF_MATERIAL_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_APPROVED_BY = 4;
     */
    UNIT_OF_MATERIAL_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    UNIT_OF_MATERIAL_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_NAME = 10;
     */
    UNIT_OF_MATERIAL_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the symbol
     *
     * @generated from enum value: UNIT_OF_MATERIAL_SORT_KEY_SYMBOL = 11;
     */
    UNIT_OF_MATERIAL_SORT_KEY_SYMBOL = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceCreateRequest
 */
export declare class UnitsOfMaterialsServiceCreateRequest extends Message<UnitsOfMaterialsServiceCreateRequest> {
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
     * The name of the unit of material
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique symbol by which the unit of material is classified
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     * The description of the unit of material
     *
     * @generated from field: string description = 12;
     */
    description: string;
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
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceUpdateRequest
 */
export declare class UnitsOfMaterialsServiceUpdateRequest extends Message<UnitsOfMaterialsServiceUpdateRequest> {
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
     * Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the unit of material
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique symbol by which the unit of material is classified
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     * The description of the unit of material
     *
     * @generated from field: string description = 12;
     */
    description: string;
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
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.UnitOfMaterial
 */
export declare class UnitOfMaterial extends Message<UnitOfMaterial> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this unit of material
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
     * The status of this unit of material
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this unit of material
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the unit of material
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique symbol by which the unit of material is classified
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     * The description of the unit of material
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
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.UnitsOfMaterialsList
 */
export declare class UnitsOfMaterialsList extends Message<UnitsOfMaterialsList> {
    /**
     * List of records
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
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.UnitsOfMaterialsServicePaginationReq
 */
export declare class UnitsOfMaterialsServicePaginationReq extends Message<UnitsOfMaterialsServicePaginationReq> {
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
     * @generated from field: Scailo.UNIT_OF_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: UNIT_OF_MATERIAL_SORT_KEY;
    /**
     * The status of this unit of material
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
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
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.UnitsOfMaterialsServicePaginationResponse
 */
export declare class UnitsOfMaterialsServicePaginationResponse extends Message<UnitsOfMaterialsServicePaginationResponse> {
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
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceFilterReq
 */
export declare class UnitsOfMaterialsServiceFilterReq extends Message<UnitsOfMaterialsServiceFilterReq> {
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
     * @generated from field: Scailo.UNIT_OF_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: UNIT_OF_MATERIAL_SORT_KEY;
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
     * The status of this unit of material
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
     * The name of the unit of material
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique symbol by which the unit of material is classified
     *
     * @generated from field: string symbol = 21;
     */
    symbol: string;
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
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceCountReq
 */
export declare class UnitsOfMaterialsServiceCountReq extends Message<UnitsOfMaterialsServiceCountReq> {
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
     * The status of this unit of material
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
     * The name of the unit of material
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique symbol by which the unit of material is classified
     *
     * @generated from field: string symbol = 21;
     */
    symbol: string;
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
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.UnitsOfMaterialsServiceSearchAllReq
 */
export declare class UnitsOfMaterialsServiceSearchAllReq extends Message<UnitsOfMaterialsServiceSearchAllReq> {
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
     * @generated from field: Scailo.UNIT_OF_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: UNIT_OF_MATERIAL_SORT_KEY;
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
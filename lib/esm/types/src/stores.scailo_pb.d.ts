import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.STORE_SORT_KEY
 */
export declare enum STORE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: STORE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STORE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: STORE_SORT_KEY_CREATED_AT = 1;
     */
    STORE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: STORE_SORT_KEY_MODIFIED_AT = 2;
     */
    STORE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: STORE_SORT_KEY_APPROVED_ON = 3;
     */
    STORE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: STORE_SORT_KEY_APPROVED_BY = 4;
     */
    STORE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: STORE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STORE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: STORE_SORT_KEY_NAME = 10;
     */
    STORE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: STORE_SORT_KEY_CODE = 11;
     */
    STORE_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.StoresServiceCreateRequest
 */
export declare class StoresServiceCreateRequest extends Message<StoresServiceCreateRequest> {
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
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 9;
     */
    locationId: bigint;
    /**
     * The name of the store
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the store is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the store
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The username of the incharge
     *
     * @generated from field: string incharge_username = 13;
     */
    inchargeUsername: string;
    /**
     * The contact number of the store
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
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
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.StoresServiceUpdateRequest
 */
export declare class StoresServiceUpdateRequest extends Message<StoresServiceUpdateRequest> {
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
     * The name of the store
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the store is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the store
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The username of the incharge
     *
     * @generated from field: string incharge_username = 13;
     */
    inchargeUsername: string;
    /**
     * The contact number of the store
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
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
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Store
 */
export declare class Store extends Message<Store> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this store
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
     * The status of this store
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this store
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 9;
     */
    locationId: bigint;
    /**
     * The name of the store
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the store is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the store
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The username of the incharge
     *
     * @generated from field: string incharge_username = 13;
     */
    inchargeUsername: string;
    /**
     * The contact number of the store
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
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.StoresList
 */
export declare class StoresList extends Message<StoresList> {
    /**
     * List of records
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
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.StoresServicePaginationReq
 */
export declare class StoresServicePaginationReq extends Message<StoresServicePaginationReq> {
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
     * @generated from field: Scailo.STORE_SORT_KEY sort_key = 5;
     */
    sortKey: STORE_SORT_KEY;
    /**
     * The status of this store
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
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
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.StoresServicePaginationResponse
 */
export declare class StoresServicePaginationResponse extends Message<StoresServicePaginationResponse> {
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
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.StoresServiceFilterReq
 */
export declare class StoresServiceFilterReq extends Message<StoresServiceFilterReq> {
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
     * @generated from field: Scailo.STORE_SORT_KEY sort_key = 5;
     */
    sortKey: STORE_SORT_KEY;
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
     * The status of this store
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
     * The name of the store
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the store is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 22;
     */
    locationId: bigint;
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
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.StoresServiceCountReq
 */
export declare class StoresServiceCountReq extends Message<StoresServiceCountReq> {
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
     * The status of this store
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
     * The name of the store
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the store is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 22;
     */
    locationId: bigint;
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
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.StoresServiceSearchAllReq
 */
export declare class StoresServiceSearchAllReq extends Message<StoresServiceSearchAllReq> {
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
     * @generated from field: Scailo.STORE_SORT_KEY sort_key = 5;
     */
    sortKey: STORE_SORT_KEY;
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
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 12;
     */
    locationId: bigint;
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
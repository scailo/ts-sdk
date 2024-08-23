import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.STORAGE_SORT_KEY
 */
export declare enum STORAGE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: STORAGE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STORAGE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: STORAGE_SORT_KEY_CREATED_AT = 1;
     */
    STORAGE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: STORAGE_SORT_KEY_MODIFIED_AT = 2;
     */
    STORAGE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: STORAGE_SORT_KEY_APPROVED_ON = 3;
     */
    STORAGE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: STORAGE_SORT_KEY_APPROVED_BY = 4;
     */
    STORAGE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: STORAGE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STORAGE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: STORAGE_SORT_KEY_NAME = 10;
     */
    STORAGE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: STORAGE_SORT_KEY_CODE = 11;
     */
    STORAGE_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.StoragesServiceCreateRequest
 */
export declare class StoragesServiceCreateRequest extends Message<StoragesServiceCreateRequest> {
    /**
     * Storages a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Storages any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the storage
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the storage is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the associated store
     *
     * @generated from field: uint64 store_id = 12;
     */
    storeId: bigint;
    /**
     * The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)
     *
     * @generated from field: uint64 parent_storage_id = 13;
     */
    parentStorageId: bigint;
    /**
     * Stores if this is a leaf storage or a non-leaf storage
     *
     * @generated from field: bool is_leaf = 14;
     */
    isLeaf: boolean;
    /**
     * The description of the storage
     *
     * @generated from field: string description = 15;
     */
    description: string;
    constructor(data?: PartialMessage<StoragesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoragesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoragesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoragesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoragesServiceCreateRequest;
    static equals(a: StoragesServiceCreateRequest | PlainMessage<StoragesServiceCreateRequest> | undefined, b: StoragesServiceCreateRequest | PlainMessage<StoragesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.StoragesServiceUpdateRequest
 */
export declare class StoragesServiceUpdateRequest extends Message<StoragesServiceUpdateRequest> {
    /**
     * Storages any comment that the user might add during this operation
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
     * Optional boolean value that storages if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the storage
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the storage
     *
     * @generated from field: string description = 15;
     */
    description: string;
    constructor(data?: PartialMessage<StoragesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoragesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoragesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoragesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoragesServiceUpdateRequest;
    static equals(a: StoragesServiceUpdateRequest | PlainMessage<StoragesServiceUpdateRequest> | undefined, b: StoragesServiceUpdateRequest | PlainMessage<StoragesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Storage
 */
export declare class Storage extends Message<Storage> {
    /**
     * Storages a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Storages the metadata of this storage
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Storages the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this storage
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Storages the logs of every operation performed on this storage
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the storage
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the storage is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the associated store
     *
     * @generated from field: uint64 store_id = 12;
     */
    storeId: bigint;
    /**
     * The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)
     *
     * @generated from field: uint64 parent_storage_id = 13;
     */
    parentStorageId: bigint;
    /**
     * Stores if this is a leaf storage or a non-leaf storage
     *
     * @generated from field: bool is_leaf = 14;
     */
    isLeaf: boolean;
    /**
     * The description of the storage
     *
     * @generated from field: string description = 15;
     */
    description: string;
    constructor(data?: PartialMessage<Storage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Storage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Storage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Storage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Storage;
    static equals(a: Storage | PlainMessage<Storage> | undefined, b: Storage | PlainMessage<Storage> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.StoragesList
 */
export declare class StoragesList extends Message<StoragesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Storage list = 1;
     */
    list: Storage[];
    constructor(data?: PartialMessage<StoragesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoragesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoragesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoragesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoragesList;
    static equals(a: StoragesList | PlainMessage<StoragesList> | undefined, b: StoragesList | PlainMessage<StoragesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.StoragesServicePaginationReq
 */
export declare class StoragesServicePaginationReq extends Message<StoragesServicePaginationReq> {
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
     * @generated from field: Scailo.STORAGE_SORT_KEY sort_key = 5;
     */
    sortKey: STORAGE_SORT_KEY;
    /**
     * The status of this storage
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<StoragesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoragesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoragesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoragesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoragesServicePaginationReq;
    static equals(a: StoragesServicePaginationReq | PlainMessage<StoragesServicePaginationReq> | undefined, b: StoragesServicePaginationReq | PlainMessage<StoragesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.StoragesServicePaginationResponse
 */
export declare class StoragesServicePaginationResponse extends Message<StoragesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Storage payload = 4;
     */
    payload: Storage[];
    constructor(data?: PartialMessage<StoragesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoragesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoragesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoragesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoragesServicePaginationResponse;
    static equals(a: StoragesServicePaginationResponse | PlainMessage<StoragesServicePaginationResponse> | undefined, b: StoragesServicePaginationResponse | PlainMessage<StoragesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.StoragesServiceFilterReq
 */
export declare class StoragesServiceFilterReq extends Message<StoragesServiceFilterReq> {
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
     * @generated from field: Scailo.STORAGE_SORT_KEY sort_key = 5;
     */
    sortKey: STORAGE_SORT_KEY;
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
     * The status of this storage
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
     * The name of the storage
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the storage is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated store
     *
     * @generated from field: uint64 store_id = 22;
     */
    storeId: bigint;
    /**
     * The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)
     *
     * @generated from field: uint64 parent_storage_id = 23;
     */
    parentStorageId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 24;
     */
    isLeaf: BOOL_FILTER;
    /**
     * Retrieve storages that are assigned to the given family ID
     *
     * @generated from field: uint64 family_id = 30;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StoragesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoragesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoragesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoragesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoragesServiceFilterReq;
    static equals(a: StoragesServiceFilterReq | PlainMessage<StoragesServiceFilterReq> | undefined, b: StoragesServiceFilterReq | PlainMessage<StoragesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.StoragesServiceCountReq
 */
export declare class StoragesServiceCountReq extends Message<StoragesServiceCountReq> {
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
     * The status of this storage
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
     * The name of the storage
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the storage is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated store
     *
     * @generated from field: uint64 store_id = 22;
     */
    storeId: bigint;
    /**
     * The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)
     *
     * @generated from field: uint64 parent_storage_id = 23;
     */
    parentStorageId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 24;
     */
    isLeaf: BOOL_FILTER;
    /**
     * Retrieve storages that are assigned to the given family ID
     *
     * @generated from field: uint64 family_id = 30;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StoragesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoragesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoragesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoragesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoragesServiceCountReq;
    static equals(a: StoragesServiceCountReq | PlainMessage<StoragesServiceCountReq> | undefined, b: StoragesServiceCountReq | PlainMessage<StoragesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.StoragesServiceSearchAllReq
 */
export declare class StoragesServiceSearchAllReq extends Message<StoragesServiceSearchAllReq> {
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
     * @generated from field: Scailo.STORAGE_SORT_KEY sort_key = 5;
     */
    sortKey: STORAGE_SORT_KEY;
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
     * The ID of the associated store
     *
     * @generated from field: uint64 store_id = 22;
     */
    storeId: bigint;
    /**
     * The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)
     *
     * @generated from field: uint64 parent_storage_id = 23;
     */
    parentStorageId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 24;
     */
    isLeaf: BOOL_FILTER;
    /**
     * Retrieve storages that are assigned to the given family ID
     *
     * @generated from field: uint64 family_id = 30;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StoragesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StoragesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoragesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoragesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoragesServiceSearchAllReq;
    static equals(a: StoragesServiceSearchAllReq | PlainMessage<StoragesServiceSearchAllReq> | undefined, b: StoragesServiceSearchAllReq | PlainMessage<StoragesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=storages.scailo_pb.d.ts.map
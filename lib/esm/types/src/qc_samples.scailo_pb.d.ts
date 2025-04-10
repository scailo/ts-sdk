import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
import { Family, FAMILY_TYPE } from "./families.scailo_pb.js";
import { QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE, QCGroup } from "./qc_groups.scailo_pb.js";
import { GenericInventory } from "./inventory.scailo_pb.js";
/**
 *
 * Describes the lifecycle status of each qc sample
 *
 * @generated from enum Scailo.QC_SAMPLE_LIFECYCLE
 */
export declare enum QC_SAMPLE_LIFECYCLE {
    /**
     * Used only in filters
     *
     * @generated from enum value: QC_SAMPLE_LIFECYCLE_ANY_UNSPECIFIED = 0;
     */
    QC_SAMPLE_LIFECYCLE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the qc sample is open
     *
     * @generated from enum value: QC_SAMPLE_LIFECYCLE_OPEN = 1;
     */
    QC_SAMPLE_LIFECYCLE_OPEN = 1,
    /**
     * Denotes that the qc sample has been finished and waiting for approval
     *
     * @generated from enum value: QC_SAMPLE_LIFECYCLE_FINISHED = 2;
     */
    QC_SAMPLE_LIFECYCLE_FINISHED = 2,
    /**
     * Denotes that the qc sample has been accepted
     *
     * @generated from enum value: QC_SAMPLE_LIFECYCLE_ACCEPTED = 3;
     */
    QC_SAMPLE_LIFECYCLE_ACCEPTED = 3,
    /**
     * Denotes that the qc sample has been accepted with deviation
     *
     * @generated from enum value: QC_SAMPLE_LIFECYCLE_ACCEPTED_WITH_DEVIATION = 4;
     */
    QC_SAMPLE_LIFECYCLE_ACCEPTED_WITH_DEVIATION = 4,
    /**
     * Denotes that the qc sample has been rejected
     *
     * @generated from enum value: QC_SAMPLE_LIFECYCLE_REJECTED = 5;
     */
    QC_SAMPLE_LIFECYCLE_REJECTED = 5,
    /**
     * Denotes that the qc sample has been cancelled
     *
     * @generated from enum value: QC_SAMPLE_LIFECYCLE_CANCELLED = 6;
     */
    QC_SAMPLE_LIFECYCLE_CANCELLED = 6
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.QC_SAMPLE_SORT_KEY
 */
export declare enum QC_SAMPLE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QC_SAMPLE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_CREATED_AT = 1;
     */
    QC_SAMPLE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_MODIFIED_AT = 2;
     */
    QC_SAMPLE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_APPROVED_ON = 3;
     */
    QC_SAMPLE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_APPROVED_BY = 4;
     */
    QC_SAMPLE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QC_SAMPLE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's finished on timestamp
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_FINISHED_ON = 6;
     */
    QC_SAMPLE_SORT_KEY_FINISHED_ON = 6,
    /**
     * Fetch ordered results by the qc group ID
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_QC_GROUP_ID = 7;
     */
    QC_SAMPLE_SORT_KEY_QC_GROUP_ID = 7,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: QC_SAMPLE_SORT_KEY_NAME = 10;
     */
    QC_SAMPLE_SORT_KEY_NAME = 10
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.QC_SAMPLE_PARAMETER_SORT_KEY
 */
export declare enum QC_SAMPLE_PARAMETER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QC_SAMPLE_PARAMETER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QC_SAMPLE_PARAMETER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QC_SAMPLE_PARAMETER_SORT_KEY_CREATED_AT = 1;
     */
    QC_SAMPLE_PARAMETER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QC_SAMPLE_PARAMETER_SORT_KEY_MODIFIED_AT = 2;
     */
    QC_SAMPLE_PARAMETER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by username that checked
     *
     * @generated from enum value: QC_SAMPLE_PARAMETER_SORT_KEY_CHECKED_BY = 10;
     */
    QC_SAMPLE_PARAMETER_SORT_KEY_CHECKED_BY = 10,
    /**
     * Fetch ordered results by the checked at timestamp
     *
     * @generated from enum value: QC_SAMPLE_PARAMETER_SORT_KEY_CHECKED_AT = 11;
     */
    QC_SAMPLE_PARAMETER_SORT_KEY_CHECKED_AT = 11,
    /**
     * Fetch ordered results by the qc sample ID
     *
     * @generated from enum value: QC_SAMPLE_PARAMETER_SORT_KEY_QC_SAMPLE_ID = 12;
     */
    QC_SAMPLE_PARAMETER_SORT_KEY_QC_SAMPLE_ID = 12,
    /**
     * Fetch ordered results by the qc param ID
     *
     * @generated from enum value: QC_SAMPLE_PARAMETER_SORT_KEY_QC_PARAM_ID = 13;
     */
    QC_SAMPLE_PARAMETER_SORT_KEY_QC_PARAM_ID = 13,
    /**
     * Fetch ordered results by the uom ID
     *
     * @generated from enum value: QC_SAMPLE_PARAMETER_SORT_KEY_UOM_ID = 14;
     */
    QC_SAMPLE_PARAMETER_SORT_KEY_UOM_ID = 14
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being a qc sample lifecycle status
 *
 * @generated from message Scailo.LogbookLogQCSampleLC
 */
export declare class LogbookLogQCSampleLC extends Message<LogbookLogQCSampleLC> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * Stores if the resource is active
     *
     * @generated from field: bool is_active = 2;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: Scailo.QC_SAMPLE_LIFECYCLE operation = 11;
     */
    operation: QC_SAMPLE_LIFECYCLE;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The name of the person who made this entry
     *
     * @generated from field: string name = 13;
     */
    name: string;
    /**
     * The ID of the user who made this entry
     *
     * @generated from field: uint64 user_id = 14;
     */
    userId: bigint;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 15;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 16;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogQCSampleLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogQCSampleLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogQCSampleLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogQCSampleLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogQCSampleLC;
    static equals(a: LogbookLogQCSampleLC | PlainMessage<LogbookLogQCSampleLC> | undefined, b: LogbookLogQCSampleLC | PlainMessage<LogbookLogQCSampleLC> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.QCSamplesServiceCreateRequest
 */
export declare class QCSamplesServiceCreateRequest extends Message<QCSamplesServiceCreateRequest> {
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
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 8;
     */
    vaultFolderId: bigint;
    /**
     * The associated family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * The UUID of the inventory item
     *
     * @generated from field: string inventory_item_uuid = 11;
     */
    inventoryItemUuid: string;
    /**
     * The ID of the qc group
     *
     * @generated from field: uint64 qc_group_id = 12;
     */
    qcGroupId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 13;
     */
    locationId: bigint;
    /**
     * The name that will be used as a prefix
     *
     * @generated from field: string name_prefix = 20;
     */
    namePrefix: string;
    /**
     * The description of the qc sample
     *
     * @generated from field: string description = 21;
     */
    description: string;
    /**
     * The number of samples that need to be created
     *
     * @generated from field: uint64 sample_count = 30;
     */
    sampleCount: bigint;
    constructor(data?: PartialMessage<QCSamplesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServiceCreateRequest;
    static equals(a: QCSamplesServiceCreateRequest | PlainMessage<QCSamplesServiceCreateRequest> | undefined, b: QCSamplesServiceCreateRequest | PlainMessage<QCSamplesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.QCSamplesServiceUpdateRequest
 */
export declare class QCSamplesServiceUpdateRequest extends Message<QCSamplesServiceUpdateRequest> {
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
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 8;
     */
    vaultFolderId: bigint;
    /**
     * The name of the qc sample
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The description of the qc sample
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<QCSamplesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServiceUpdateRequest;
    static equals(a: QCSamplesServiceUpdateRequest | PlainMessage<QCSamplesServiceUpdateRequest> | undefined, b: QCSamplesServiceUpdateRequest | PlainMessage<QCSamplesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.QCSampleAncillaryParameters
 */
export declare class QCSampleAncillaryParameters extends Message<QCSampleAncillaryParameters> {
    /**
     * The UUID of the family
     *
     * @generated from field: string family_uuid = 100;
     */
    familyUuid: string;
    /**
     * The UUID of the inventory item
     *
     * @generated from field: string inventory_item_uuid = 111;
     */
    inventoryItemUuid: string;
    /**
     * The UUID of the qc group
     *
     * @generated from field: string qc_group_uuid = 112;
     */
    qcGroupUuid: string;
    /**
     * The UUID of the location
     *
     * @generated from field: string location_uuid = 113;
     */
    locationUuid: string;
    constructor(data?: PartialMessage<QCSampleAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSampleAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSampleAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSampleAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSampleAncillaryParameters;
    static equals(a: QCSampleAncillaryParameters | PlainMessage<QCSampleAncillaryParameters> | undefined, b: QCSampleAncillaryParameters | PlainMessage<QCSampleAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.QCSample
 */
export declare class QCSample extends Message<QCSample> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this qc sample
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
     * The status of this qc sample
     *
     * @generated from field: Scailo.QC_SAMPLE_LIFECYCLE status = 4;
     */
    status: QC_SAMPLE_LIFECYCLE;
    /**
     * Stores the logs of every operation performed on this qc sample
     *
     * @generated from field: repeated Scailo.LogbookLogQCSampleLC logs = 5;
     */
    logs: LogbookLogQCSampleLC[];
    /**
     * The timestamp of when this qc sample was marked as finished
     *
     * @generated from field: uint64 finished_on = 6;
     */
    finishedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 8;
     */
    vaultFolderId: bigint;
    /**
     * The associated family type
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 9;
     */
    familyType: FAMILY_TYPE;
    /**
     * The associated family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * The UUID of the inventory item
     *
     * @generated from field: string inventory_item_uuid = 11;
     */
    inventoryItemUuid: string;
    /**
     * The ID of the qc group
     *
     * @generated from field: uint64 qc_group_id = 12;
     */
    qcGroupId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 13;
     */
    locationId: bigint;
    /**
     * The name of the qc sample (will be autogenerated if not provided)
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The description of the qc sample
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<QCSample>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSample";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSample;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSample;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSample;
    static equals(a: QCSample | PlainMessage<QCSample> | undefined, b: QCSample | PlainMessage<QCSample> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.QCSampleWithMetadata
 */
export declare class QCSampleWithMetadata extends Message<QCSampleWithMetadata> {
    /**
     * Stores the QC Sample
     *
     * @generated from field: Scailo.QCSample qc_sample = 1;
     */
    qcSample?: QCSample;
    /**
     * Stores the family information
     *
     * @generated from field: Scailo.Family family = 10;
     */
    family?: Family;
    /**
     * Stores the associated qc group
     *
     * @generated from field: Scailo.QCGroup qc_group = 20;
     */
    qcGroup?: QCGroup;
    /**
     * Stores the generic inventory information
     *
     * @generated from field: Scailo.GenericInventory inventory_item = 30;
     */
    inventoryItem?: GenericInventory;
    constructor(data?: PartialMessage<QCSampleWithMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSampleWithMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSampleWithMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSampleWithMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSampleWithMetadata;
    static equals(a: QCSampleWithMetadata | PlainMessage<QCSampleWithMetadata> | undefined, b: QCSampleWithMetadata | PlainMessage<QCSampleWithMetadata> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.QCSamplesList
 */
export declare class QCSamplesList extends Message<QCSamplesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.QCSample list = 1;
     */
    list: QCSample[];
    constructor(data?: PartialMessage<QCSamplesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesList;
    static equals(a: QCSamplesList | PlainMessage<QCSamplesList> | undefined, b: QCSamplesList | PlainMessage<QCSamplesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of QC samples with metadata
 *
 * @generated from message Scailo.QCSamplesWithMetadataList
 */
export declare class QCSamplesWithMetadataList extends Message<QCSamplesWithMetadataList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.QCSampleWithMetadata list = 1;
     */
    list: QCSampleWithMetadata[];
    constructor(data?: PartialMessage<QCSamplesWithMetadataList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesWithMetadataList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesWithMetadataList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesWithMetadataList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesWithMetadataList;
    static equals(a: QCSamplesWithMetadataList | PlainMessage<QCSamplesWithMetadataList> | undefined, b: QCSamplesWithMetadataList | PlainMessage<QCSamplesWithMetadataList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.QCSamplesServicePaginationReq
 */
export declare class QCSamplesServicePaginationReq extends Message<QCSamplesServicePaginationReq> {
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
     * @generated from field: Scailo.QC_SAMPLE_SORT_KEY sort_key = 5;
     */
    sortKey: QC_SAMPLE_SORT_KEY;
    /**
     * The status of this qc sample
     *
     * @generated from field: Scailo.QC_SAMPLE_LIFECYCLE status = 6;
     */
    status: QC_SAMPLE_LIFECYCLE;
    constructor(data?: PartialMessage<QCSamplesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServicePaginationReq;
    static equals(a: QCSamplesServicePaginationReq | PlainMessage<QCSamplesServicePaginationReq> | undefined, b: QCSamplesServicePaginationReq | PlainMessage<QCSamplesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.QCSamplesServicePaginationResponse
 */
export declare class QCSamplesServicePaginationResponse extends Message<QCSamplesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.QCSample payload = 4;
     */
    payload: QCSample[];
    constructor(data?: PartialMessage<QCSamplesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServicePaginationResponse;
    static equals(a: QCSamplesServicePaginationResponse | PlainMessage<QCSamplesServicePaginationResponse> | undefined, b: QCSamplesServicePaginationResponse | PlainMessage<QCSamplesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.QCSamplesServiceFilterReq
 */
export declare class QCSamplesServiceFilterReq extends Message<QCSamplesServiceFilterReq> {
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
     * @generated from field: Scailo.QC_SAMPLE_SORT_KEY sort_key = 5;
     */
    sortKey: QC_SAMPLE_SORT_KEY;
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
     * The status of this qc sample
     *
     * @generated from field: Scailo.QC_SAMPLE_LIFECYCLE status = 10;
     */
    status: QC_SAMPLE_LIFECYCLE;
    /**
     * The start range of finished timestamp
     *
     * @generated from field: uint64 finished_on_start = 15;
     */
    finishedOnStart: bigint;
    /**
     * The end range of finished timestamp
     *
     * @generated from field: uint64 finished_on_end = 16;
     */
    finishedOnEnd: bigint;
    /**
     * The associated family type
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 17;
     */
    familyType: FAMILY_TYPE;
    /**
     * The associated family ID
     *
     * @generated from field: uint64 family_id = 18;
     */
    familyId: bigint;
    /**
     * The ID of the qc group
     *
     * @generated from field: uint64 qc_group_id = 19;
     */
    qcGroupId: bigint;
    /**
     * The UUID of the inventory item
     *
     * @generated from field: string inventory_item_uuid = 20;
     */
    inventoryItemUuid: string;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 21;
     */
    locationId: bigint;
    /**
     * ------------------------------------------------------------
     * Higher order filters
     * ------------------------------------------------------------
     * The associated production plan ID
     *
     * @generated from field: uint64 production_plan_id = 50;
     */
    productionPlanId: bigint;
    /**
     * The associated goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 51;
     */
    goodsReceiptId: bigint;
    /**
     * The associated inward job free issue material ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_id = 52;
     */
    inwardJobFreeIssueMaterialId: bigint;
    /**
     * The associated vendor ID
     *
     * @generated from field: uint64 vendor_id = 55;
     */
    vendorId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * ------------------------------------------------------------
     *
     * @generated from field: uint64 buyer_client_id = 70;
     */
    buyerClientId: bigint;
    constructor(data?: PartialMessage<QCSamplesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServiceFilterReq;
    static equals(a: QCSamplesServiceFilterReq | PlainMessage<QCSamplesServiceFilterReq> | undefined, b: QCSamplesServiceFilterReq | PlainMessage<QCSamplesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.QCSamplesServiceCountReq
 */
export declare class QCSamplesServiceCountReq extends Message<QCSamplesServiceCountReq> {
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
     * The status of this qc sample
     *
     * @generated from field: Scailo.QC_SAMPLE_LIFECYCLE status = 10;
     */
    status: QC_SAMPLE_LIFECYCLE;
    /**
     * The start range of finished timestamp
     *
     * @generated from field: uint64 finished_on_start = 15;
     */
    finishedOnStart: bigint;
    /**
     * The end range of finished timestamp
     *
     * @generated from field: uint64 finished_on_end = 16;
     */
    finishedOnEnd: bigint;
    /**
     * The associated family type
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 17;
     */
    familyType: FAMILY_TYPE;
    /**
     * The associated family ID
     *
     * @generated from field: uint64 family_id = 18;
     */
    familyId: bigint;
    /**
     * The ID of the qc group
     *
     * @generated from field: uint64 qc_group_id = 19;
     */
    qcGroupId: bigint;
    /**
     * The UUID of the inventory item
     *
     * @generated from field: string inventory_item_uuid = 20;
     */
    inventoryItemUuid: string;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 21;
     */
    locationId: bigint;
    /**
     * ------------------------------------------------------------
     * Higher order filters
     * ------------------------------------------------------------
     * The associated production plan ID
     *
     * @generated from field: uint64 production_plan_id = 50;
     */
    productionPlanId: bigint;
    /**
     * The associated goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 51;
     */
    goodsReceiptId: bigint;
    /**
     * The associated inward job free issue material ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_id = 52;
     */
    inwardJobFreeIssueMaterialId: bigint;
    /**
     * The associated vendor ID
     *
     * @generated from field: uint64 vendor_id = 55;
     */
    vendorId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * ------------------------------------------------------------
     *
     * @generated from field: uint64 buyer_client_id = 70;
     */
    buyerClientId: bigint;
    constructor(data?: PartialMessage<QCSamplesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServiceCountReq;
    static equals(a: QCSamplesServiceCountReq | PlainMessage<QCSamplesServiceCountReq> | undefined, b: QCSamplesServiceCountReq | PlainMessage<QCSamplesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.QCSamplesServiceSearchAllReq
 */
export declare class QCSamplesServiceSearchAllReq extends Message<QCSamplesServiceSearchAllReq> {
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
     * @generated from field: Scailo.QC_SAMPLE_SORT_KEY sort_key = 5;
     */
    sortKey: QC_SAMPLE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.QC_SAMPLE_LIFECYCLE status = 10;
     */
    status: QC_SAMPLE_LIFECYCLE;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The associated family type
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 17;
     */
    familyType: FAMILY_TYPE;
    /**
     * The associated family ID
     *
     * @generated from field: uint64 family_id = 18;
     */
    familyId: bigint;
    /**
     * The ID of the qc group
     *
     * @generated from field: uint64 qc_group_id = 19;
     */
    qcGroupId: bigint;
    /**
     * The UUID of the inventory item
     *
     * @generated from field: string inventory_item_uuid = 20;
     */
    inventoryItemUuid: string;
    constructor(data?: PartialMessage<QCSamplesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServiceSearchAllReq;
    static equals(a: QCSamplesServiceSearchAllReq | PlainMessage<QCSamplesServiceSearchAllReq> | undefined, b: QCSamplesServiceSearchAllReq | PlainMessage<QCSamplesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an parameter in a qc sample
 *
 * @generated from message Scailo.QCSamplesServiceParameterUpdateRequest
 */
export declare class QCSamplesServiceParameterUpdateRequest extends Message<QCSamplesServiceParameterUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * Stores the observed value when it is a number
     *
     * @generated from field: int64 number_observed_value = 13;
     */
    numberObservedValue: bigint;
    /**
     * Stores the observed value when it is a string
     *
     * @generated from field: string text_observed_value = 14;
     */
    textObservedValue: string;
    /**
     * An optional description
     *
     * @generated from field: string description = 20;
     */
    description: string;
    constructor(data?: PartialMessage<QCSamplesServiceParameterUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServiceParameterUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServiceParameterUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServiceParameterUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServiceParameterUpdateRequest;
    static equals(a: QCSamplesServiceParameterUpdateRequest | PlainMessage<QCSamplesServiceParameterUpdateRequest> | undefined, b: QCSamplesServiceParameterUpdateRequest | PlainMessage<QCSamplesServiceParameterUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an parameter associated to a qc sample
 *
 * @generated from message Scailo.QCSampleParameter
 */
export declare class QCSampleParameter extends Message<QCSampleParameter> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this qc sample
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the username of the employee who performed the check
     *
     * @generated from field: string checked_by = 8;
     */
    checkedBy: string;
    /**
     * Stores the timestamp of when this check was performed
     *
     * @generated from field: uint64 checked_at = 9;
     */
    checkedAt: bigint;
    /**
     * Stores the ID of the qc sample
     *
     * @generated from field: uint64 qc_sample_id = 10;
     */
    qcSampleId: bigint;
    /**
     * The ID of the qc param that is a part of the qc sample
     *
     * @generated from field: uint64 qc_param_id = 11;
     */
    qcParamId: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 12;
     */
    uomId: bigint;
    /**
     * Stores the observed value when it is a number
     *
     * @generated from field: int64 number_observed_value = 13;
     */
    numberObservedValue: bigint;
    /**
     * Stores the observed value when it is a string
     *
     * @generated from field: string text_observed_value = 14;
     */
    textObservedValue: string;
    /**
     * Denotes if this parameter is internal or not (if set to true, then this value will be hidden. If set to false, then this value will be printed)
     *
     * @generated from field: bool is_internal = 19;
     */
    isInternal: boolean;
    /**
     * The acceptable value type of the item
     *
     * @generated from field: Scailo.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE acceptable_value_type = 20;
     */
    acceptableValueType: QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE;
    /**
     * The acceptable value (in cents) in case the acceptable value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_acceptable_value = 21;
     */
    numberAcceptableValue: bigint;
    /**
     * The relative lower bound (in cents) of the number_acceptable_value that serves as a reference point for the test
     *
     * @generated from field: int64 number_relative_lower_bound = 22;
     */
    numberRelativeLowerBound: bigint;
    /**
     * The relative upper bound (in cents) of the number_acceptable_value that serves as a reference point for the test
     *
     * @generated from field: int64 number_relative_upper_bound = 23;
     */
    numberRelativeUpperBound: bigint;
    /**
     * The list of values that are acceptable in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_acceptable_values = 30;
     */
    textAcceptableValues: string[];
    /**
     * The list of values that are acceptable (but with deviation) in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_acceptable_values_with_deviation = 31;
     */
    textAcceptableValuesWithDeviation: string[];
    /**
     * The list of unacceptable values in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_unacceptable_values = 32;
     */
    textUnacceptableValues: string[];
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<QCSampleParameter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSampleParameter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSampleParameter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSampleParameter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSampleParameter;
    static equals(a: QCSampleParameter | PlainMessage<QCSampleParameter> | undefined, b: QCSampleParameter | PlainMessage<QCSampleParameter> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of qc sample parameters
 *
 * @generated from message Scailo.QCSampleParametersList
 */
export declare class QCSampleParametersList extends Message<QCSampleParametersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.QCSampleParameter list = 1;
     */
    list: QCSampleParameter[];
    constructor(data?: PartialMessage<QCSampleParametersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSampleParametersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSampleParametersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSampleParametersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSampleParametersList;
    static equals(a: QCSampleParametersList | PlainMessage<QCSampleParametersList> | undefined, b: QCSampleParametersList | PlainMessage<QCSampleParametersList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.QCSampleParameterHistoryRequest
 */
export declare class QCSampleParameterHistoryRequest extends Message<QCSampleParameterHistoryRequest> {
    /**
     * Stores the qc sample parameter ID
     *
     * @generated from field: uint64 qc_sample_parameter_id = 10;
     */
    qcSampleParameterId: bigint;
    constructor(data?: PartialMessage<QCSampleParameterHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSampleParameterHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSampleParameterHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSampleParameterHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSampleParameterHistoryRequest;
    static equals(a: QCSampleParameterHistoryRequest | PlainMessage<QCSampleParameterHistoryRequest> | undefined, b: QCSampleParameterHistoryRequest | PlainMessage<QCSampleParameterHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are present in a history response
 *
 * @generated from message Scailo.QCSampleParameterHistory
 */
export declare class QCSampleParameterHistory extends Message<QCSampleParameterHistory> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this qc sample
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the username of the employee who performed the check
     *
     * @generated from field: string checked_by = 8;
     */
    checkedBy: string;
    /**
     * Stores the timestamp of when this check was performed
     *
     * @generated from field: uint64 checked_at = 9;
     */
    checkedAt: bigint;
    /**
     * Stores the ID of the qc sample parameter
     *
     * @generated from field: uint64 qc_sample_parameter_id = 10;
     */
    qcSampleParameterId: bigint;
    /**
     * Stores the observed value when it is a number
     *
     * @generated from field: int64 number_observed_value = 13;
     */
    numberObservedValue: bigint;
    /**
     * Stores the observed value when it is a string
     *
     * @generated from field: string text_observed_value = 14;
     */
    textObservedValue: string;
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<QCSampleParameterHistory>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSampleParameterHistory";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSampleParameterHistory;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSampleParameterHistory;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSampleParameterHistory;
    static equals(a: QCSampleParameterHistory | PlainMessage<QCSampleParameterHistory> | undefined, b: QCSampleParameterHistory | PlainMessage<QCSampleParameterHistory> | undefined): boolean;
}
/**
 *
 * Describes the list of history parameters
 *
 * @generated from message Scailo.QCSampleParameterHistoryList
 */
export declare class QCSampleParameterHistoryList extends Message<QCSampleParameterHistoryList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.QCSampleParameterHistory list = 1;
     */
    list: QCSampleParameterHistory[];
    constructor(data?: PartialMessage<QCSampleParameterHistoryList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSampleParameterHistoryList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSampleParameterHistoryList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSampleParameterHistoryList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSampleParameterHistoryList;
    static equals(a: QCSampleParameterHistoryList | PlainMessage<QCSampleParameterHistoryList> | undefined, b: QCSampleParameterHistoryList | PlainMessage<QCSampleParameterHistoryList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve parameters.
 *
 * @generated from message Scailo.QCSampleParametersSearchRequest
 */
export declare class QCSampleParametersSearchRequest extends Message<QCSampleParametersSearchRequest> {
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
     * @generated from field: Scailo.QC_SAMPLE_PARAMETER_SORT_KEY sort_key = 5;
     */
    sortKey: QC_SAMPLE_PARAMETER_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Stores the username of the employee who performed the check
     *
     * @generated from field: string checked_by = 10;
     */
    checkedBy: string;
    /**
     * The start range of checked timestamp
     *
     * @generated from field: uint64 checked_at_start = 11;
     */
    checkedAtStart: bigint;
    /**
     * The end range of checked timestamp
     *
     * @generated from field: uint64 checked_at_end = 12;
     */
    checkedAtEnd: bigint;
    /**
     * The ID of the qc sample
     *
     * @generated from field: uint64 qc_sample_id = 13;
     */
    qcSampleId: bigint;
    /**
     * The ID of the qc param that is a part of the qc sample
     *
     * @generated from field: uint64 qc_param_id = 14;
     */
    qcParamId: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * The start range of number observed value
     *
     * @generated from field: int64 number_observed_value_start = 20;
     */
    numberObservedValueStart: bigint;
    /**
     * The end range of number observed value
     *
     * @generated from field: int64 number_observed_value_end = 21;
     */
    numberObservedValueEnd: bigint;
    /**
     * The text observed value
     *
     * @generated from field: string text_observed_value = 22;
     */
    textObservedValue: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    /**
     * ------------------------------------------------------------
     * Higher order filters
     * ------------------------------------------------------------
     * The associated production plan ID
     *
     * @generated from field: uint64 production_plan_id = 50;
     */
    productionPlanId: bigint;
    /**
     * The associated goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 51;
     */
    goodsReceiptId: bigint;
    /**
     * The associated inward job free issue material ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_id = 52;
     */
    inwardJobFreeIssueMaterialId: bigint;
    /**
     * The associated vendor ID
     *
     * @generated from field: uint64 vendor_id = 55;
     */
    vendorId: bigint;
    /**
     * The associated family ID
     *
     * ------------------------------------------------------------
     *
     * @generated from field: uint64 family_id = 60;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<QCSampleParametersSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSampleParametersSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSampleParametersSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSampleParametersSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSampleParametersSearchRequest;
    static equals(a: QCSampleParametersSearchRequest | PlainMessage<QCSampleParametersSearchRequest> | undefined, b: QCSampleParametersSearchRequest | PlainMessage<QCSampleParametersSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination parameters request
 *
 * @generated from message Scailo.QCSamplesServicePaginatedParametersResponse
 */
export declare class QCSamplesServicePaginatedParametersResponse extends Message<QCSamplesServicePaginatedParametersResponse> {
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
     * @generated from field: repeated Scailo.QCSampleParameter payload = 4;
     */
    payload: QCSampleParameter[];
    constructor(data?: PartialMessage<QCSamplesServicePaginatedParametersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesServicePaginatedParametersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesServicePaginatedParametersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesServicePaginatedParametersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesServicePaginatedParametersResponse;
    static equals(a: QCSamplesServicePaginatedParametersResponse | PlainMessage<QCSamplesServicePaginatedParametersResponse> | undefined, b: QCSamplesServicePaginatedParametersResponse | PlainMessage<QCSamplesServicePaginatedParametersResponse> | undefined): boolean;
}
/**
 *
 * Describes the payload that has the counts of all the QC samples for an inventory item
 *
 * @generated from message Scailo.QCSamplesCountStatistics
 */
export declare class QCSamplesCountStatistics extends Message<QCSamplesCountStatistics> {
    /**
     * The number of open samples
     *
     * @generated from field: uint64 open = 1;
     */
    open: bigint;
    /**
     * The number of finished samples
     *
     * @generated from field: uint64 finished = 2;
     */
    finished: bigint;
    /**
     * The number of samples that were accepted
     *
     * @generated from field: uint64 accepted = 3;
     */
    accepted: bigint;
    /**
     * The number of samples that were accepted with deviation
     *
     * @generated from field: uint64 accepted_with_deviation = 4;
     */
    acceptedWithDeviation: bigint;
    /**
     * The number of samples that were rejected
     *
     * @generated from field: uint64 rejected = 5;
     */
    rejected: bigint;
    /**
     * The number of samples that were cancelled
     *
     * @generated from field: uint64 cancelled = 6;
     */
    cancelled: bigint;
    constructor(data?: PartialMessage<QCSamplesCountStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCSamplesCountStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCSamplesCountStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCSamplesCountStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCSamplesCountStatistics;
    static equals(a: QCSamplesCountStatistics | PlainMessage<QCSamplesCountStatistics> | undefined, b: QCSamplesCountStatistics | PlainMessage<QCSamplesCountStatistics> | undefined): boolean;
}
//# sourceMappingURL=qc_samples.scailo_pb.d.ts.map
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, INVENTORY_LIFECYCLE, INVENTORY_SORT_KEY, LogbookLogInventoryLC, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a infrastructure can be added
 *
 * @generated from enum Scailo.INFRASTRUCTURE_REF_FROM
 */
export declare enum INFRASTRUCTURE_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: INFRASTRUCTURE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    INFRASTRUCTURE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the infrastructure originated from initial stock
     *
     * @generated from enum value: INFRASTRUCTURE_REF_FROM_INITIAL_STOCK = 1;
     */
    INFRASTRUCTURE_REF_FROM_INITIAL_STOCK = 1,
    /**
     * Denotes that the infrastructure originated from a goods receipt
     *
     * @generated from enum value: INFRASTRUCTURE_REF_FROM_GOODS_RECEIPT = 2;
     */
    INFRASTRUCTURE_REF_FROM_GOODS_RECEIPT = 2,
    /**
     * Denotes that the infrastructure originated from an inward job free issue material
     *
     * @generated from enum value: INFRASTRUCTURE_REF_FROM_INWARD_JOB_FREE_ISSUE_MATERIAL = 3;
     */
    INFRASTRUCTURE_REF_FROM_INWARD_JOB_FREE_ISSUE_MATERIAL = 3
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.InfrastructuresServiceCreateRequest
 */
export declare class InfrastructuresServiceCreateRequest extends Message<InfrastructuresServiceCreateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 18;
     */
    vaultFolderId: bigint;
    /**
     * Stores the reference from
     *
     * @generated from field: Scailo.INFRASTRUCTURE_REF_FROM ref_from = 31;
     */
    refFrom: INFRASTRUCTURE_REF_FROM;
    /**
     * Stores the ID of the reference
     *
     * @generated from field: uint64 ref_id = 32;
     */
    refId: bigint;
    /**
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 33;
     */
    familyId: bigint;
    /**
     * Stores the internal code (as given by user)
     *
     * @generated from field: string internal_item_code = 35;
     */
    internalItemCode: string;
    /**
     * Stores the quantity (in cents)
     *
     * @generated from field: uint64 quantity = 37;
     */
    quantity: bigint;
    /**
     * Stores an optional secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_uom_id = 39;
     */
    secondaryUomId: bigint;
    /**
     * Stores an optional quantity in the secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_quantity = 40;
     */
    secondaryQuantity: bigint;
    /**
     * Stores an optional shelf life as a timestamp
     *
     * @generated from field: uint64 shelf_life_timestamp = 41;
     */
    shelfLifeTimestamp: bigint;
    /**
     * Stores an optional warranty as a timestamp
     *
     * @generated from field: uint64 warranty_timestamp = 42;
     */
    warrantyTimestamp: bigint;
    /**
     * The location ID of where the item needs to be stored
     *
     * @generated from field: uint64 location_id = 54;
     */
    locationId: bigint;
    /**
     * The description of the infrastructure
     *
     * @generated from field: string description = 60;
     */
    description: string;
    constructor(data?: PartialMessage<InfrastructuresServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresServiceCreateRequest;
    static equals(a: InfrastructuresServiceCreateRequest | PlainMessage<InfrastructuresServiceCreateRequest> | undefined, b: InfrastructuresServiceCreateRequest | PlainMessage<InfrastructuresServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.InfrastructuresServiceUpdateRequest
 */
export declare class InfrastructuresServiceUpdateRequest extends Message<InfrastructuresServiceUpdateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 18;
     */
    vaultFolderId: bigint;
    /**
     * Stores the internal code (as given by user)
     *
     * @generated from field: string internal_item_code = 35;
     */
    internalItemCode: string;
    /**
     * Stores an optional secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_uom_id = 38;
     */
    secondaryUomId: bigint;
    /**
     * Stores an optional quantity in the secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_quantity = 39;
     */
    secondaryQuantity: bigint;
    /**
     * Stores an optional shelf life as a timestamp
     *
     * @generated from field: uint64 shelf_life_timestamp = 40;
     */
    shelfLifeTimestamp: bigint;
    /**
     * Stores an optional warranty as a timestamp
     *
     * @generated from field: uint64 warranty_timestamp = 41;
     */
    warrantyTimestamp: bigint;
    /**
     * Stores an optional ID of the associated storage that the infrastructure is stored in
     *
     * @generated from field: uint64 storage_id = 51;
     */
    storageId: bigint;
    /**
     * Stores if the associated QC report should be public
     *
     * @generated from field: bool is_qc_report_public = 52;
     */
    isQcReportPublic: boolean;
    /**
     * Stores any applicable remaining dimensions as a string
     *
     * @generated from field: string remaining_dimensions = 55;
     */
    remainingDimensions: string;
    /**
     * The description of the infrastructure
     *
     * @generated from field: string description = 60;
     */
    description: string;
    constructor(data?: PartialMessage<InfrastructuresServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresServiceUpdateRequest;
    static equals(a: InfrastructuresServiceUpdateRequest | PlainMessage<InfrastructuresServiceUpdateRequest> | undefined, b: InfrastructuresServiceUpdateRequest | PlainMessage<InfrastructuresServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to send a infrastructure to store
 *
 * @generated from message Scailo.InfrastructuresServiceSendToStoreRequest
 */
export declare class InfrastructuresServiceSendToStoreRequest extends Message<InfrastructuresServiceSendToStoreRequest> {
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
     * Stores an optional shelf life as a timestamp
     *
     * @generated from field: uint64 shelf_life_timestamp = 40;
     */
    shelfLifeTimestamp: bigint;
    /**
     * Stores an optional warranty as a timestamp
     *
     * @generated from field: uint64 warranty_timestamp = 41;
     */
    warrantyTimestamp: bigint;
    /**
     * Stores the store to which the infrastructure is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the infrastructure is stored in
     *
     * @generated from field: uint64 storage_id = 51;
     */
    storageId: bigint;
    /**
     * Stores if the associated QC report should be public
     *
     * @generated from field: bool is_qc_report_public = 52;
     */
    isQcReportPublic: boolean;
    /**
     * Stores any applicable remaining dimensions as a string
     *
     * @generated from field: string remaining_dimensions = 55;
     */
    remainingDimensions: string;
    /**
     * The description of the infrastructure
     *
     * @generated from field: string description = 60;
     */
    description: string;
    constructor(data?: PartialMessage<InfrastructuresServiceSendToStoreRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresServiceSendToStoreRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresServiceSendToStoreRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresServiceSendToStoreRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresServiceSendToStoreRequest;
    static equals(a: InfrastructuresServiceSendToStoreRequest | PlainMessage<InfrastructuresServiceSendToStoreRequest> | undefined, b: InfrastructuresServiceSendToStoreRequest | PlainMessage<InfrastructuresServiceSendToStoreRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Infrastructure
 */
export declare class Infrastructure extends Message<Infrastructure> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this infrastructure
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this infrastructure
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 4;
     */
    status: INVENTORY_LIFECYCLE;
    /**
     * Stores the logs of every operation performed on this infrastructure
     *
     * @generated from field: repeated Scailo.LogbookLogInventoryLC logs = 5;
     */
    logs: LogbookLogInventoryLC[];
    /**
     * The timestamp of when the item was admitted into store
     *
     * @generated from field: uint64 store_intake_at = 10;
     */
    storeIntakeAt: bigint;
    /**
     * The timestamp of when the item was either consumed or rejected
     *
     * @generated from field: uint64 consumed_or_rejected_at = 11;
     */
    consumedOrRejectedAt: bigint;
    /**
     * The timestamp of when the rework process began
     *
     * @generated from field: uint64 rework_start_at = 12;
     */
    reworkStartAt: bigint;
    /**
     * The timestamp of when the rework process ended
     *
     * @generated from field: uint64 rework_end_at = 13;
     */
    reworkEndAt: bigint;
    /**
     * The timestamp of when the item was either returned or scrapped
     *
     * @generated from field: uint64 returned_or_scrapped_at = 14;
     */
    returnedOrScrappedAt: bigint;
    /**
     * The timestamp of when the item was discarded
     *
     * @generated from field: uint64 discarded_at = 15;
     */
    discardedAt: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 18;
     */
    vaultFolderId: bigint;
    /**
     * The ID of the parent inventory item (if applicable)
     *
     * @generated from field: uint64 parent_ref_id = 30;
     */
    parentRefId: bigint;
    /**
     * Stores the reference from
     *
     * @generated from field: Scailo.INFRASTRUCTURE_REF_FROM ref_from = 31;
     */
    refFrom: INFRASTRUCTURE_REF_FROM;
    /**
     * Stores the ID of the reference
     *
     * @generated from field: uint64 ref_id = 32;
     */
    refId: bigint;
    /**
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 33;
     */
    familyId: bigint;
    /**
     * The auto generated code of the infrastructure
     *
     * @generated from field: string code = 34;
     */
    code: string;
    /**
     * Stores the internal code (as given by user)
     *
     * @generated from field: string internal_item_code = 35;
     */
    internalItemCode: string;
    /**
     * The computed hash of the infrastructure
     *
     * @generated from field: string hash = 36;
     */
    hash: string;
    /**
     * Stores the quantity (in cents)
     *
     * @generated from field: uint64 quantity = 37;
     */
    quantity: bigint;
    /**
     * Stores the remaining quantity (in cents)
     *
     * @generated from field: uint64 quantity_remaining = 38;
     */
    quantityRemaining: bigint;
    /**
     * Stores an optional secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_uom_id = 39;
     */
    secondaryUomId: bigint;
    /**
     * Stores an optional quantity in the secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_quantity = 40;
     */
    secondaryQuantity: bigint;
    /**
     * Stores an optional shelf life as a timestamp
     *
     * @generated from field: uint64 shelf_life_timestamp = 41;
     */
    shelfLifeTimestamp: bigint;
    /**
     * Stores an optional warranty as a timestamp
     *
     * @generated from field: uint64 warranty_timestamp = 42;
     */
    warrantyTimestamp: bigint;
    /**
     * Stores the store to which the infrastructure is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the infrastructure is stored in
     *
     * @generated from field: uint64 storage_id = 51;
     */
    storageId: bigint;
    /**
     * Stores if the associated QC report should be public
     *
     * @generated from field: bool is_qc_report_public = 52;
     */
    isQcReportPublic: boolean;
    /**
     * The location ID of where the item needs to be stored
     *
     * @generated from field: uint64 location_id = 54;
     */
    locationId: bigint;
    /**
     * Stores any applicable remaining dimensions as a string
     *
     * @generated from field: string remaining_dimensions = 55;
     */
    remainingDimensions: string;
    /**
     * The description of the infrastructure
     *
     * @generated from field: string description = 60;
     */
    description: string;
    /**
     * The short URL of the item
     *
     * @generated from field: string short_url = 70;
     */
    shortUrl: string;
    constructor(data?: PartialMessage<Infrastructure>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Infrastructure";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Infrastructure;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Infrastructure;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Infrastructure;
    static equals(a: Infrastructure | PlainMessage<Infrastructure> | undefined, b: Infrastructure | PlainMessage<Infrastructure> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.InfrastructuresList
 */
export declare class InfrastructuresList extends Message<InfrastructuresList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Infrastructure list = 1;
     */
    list: Infrastructure[];
    constructor(data?: PartialMessage<InfrastructuresList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresList;
    static equals(a: InfrastructuresList | PlainMessage<InfrastructuresList> | undefined, b: InfrastructuresList | PlainMessage<InfrastructuresList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.InfrastructuresServicePaginationReq
 */
export declare class InfrastructuresServicePaginationReq extends Message<InfrastructuresServicePaginationReq> {
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
     * @generated from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;
     */
    sortKey: INVENTORY_SORT_KEY;
    /**
     * The status of this infrastructure
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 6;
     */
    status: INVENTORY_LIFECYCLE;
    constructor(data?: PartialMessage<InfrastructuresServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresServicePaginationReq;
    static equals(a: InfrastructuresServicePaginationReq | PlainMessage<InfrastructuresServicePaginationReq> | undefined, b: InfrastructuresServicePaginationReq | PlainMessage<InfrastructuresServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.InfrastructuresServicePaginationResponse
 */
export declare class InfrastructuresServicePaginationResponse extends Message<InfrastructuresServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Infrastructure payload = 4;
     */
    payload: Infrastructure[];
    constructor(data?: PartialMessage<InfrastructuresServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresServicePaginationResponse;
    static equals(a: InfrastructuresServicePaginationResponse | PlainMessage<InfrastructuresServicePaginationResponse> | undefined, b: InfrastructuresServicePaginationResponse | PlainMessage<InfrastructuresServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.InfrastructuresServiceFilterReq
 */
export declare class InfrastructuresServiceFilterReq extends Message<InfrastructuresServiceFilterReq> {
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
     * @generated from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;
     */
    sortKey: INVENTORY_SORT_KEY;
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
     * The status of this infrastructure
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 10;
     */
    status: INVENTORY_LIFECYCLE;
    /**
     * The start range of store intake timestamp
     *
     * @generated from field: uint64 store_intake_at_start = 20;
     */
    storeIntakeAtStart: bigint;
    /**
     * The end range of store intake timestamp
     *
     * @generated from field: uint64 store_intake_at_end = 21;
     */
    storeIntakeAtEnd: bigint;
    /**
     * The start range of discarded timestamp
     *
     * @generated from field: uint64 discarded_at_start = 22;
     */
    discardedAtStart: bigint;
    /**
     * The end range of discarded timestamp
     *
     * @generated from field: uint64 discarded_at_end = 23;
     */
    discardedAtEnd: bigint;
    /**
     * The ID of the parent inventory item
     *
     * @generated from field: uint64 parent_ref_id = 30;
     */
    parentRefId: bigint;
    /**
     * Stores the reference from
     *
     * @generated from field: Scailo.INFRASTRUCTURE_REF_FROM ref_from = 31;
     */
    refFrom: INFRASTRUCTURE_REF_FROM;
    /**
     * Stores the ID of the reference
     *
     * @generated from field: uint64 ref_id = 32;
     */
    refId: bigint;
    /**
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 33;
     */
    familyId: bigint;
    /**
     * The auto generated code of the infrastructure
     *
     * @generated from field: string code = 34;
     */
    code: string;
    /**
     * Stores the internal code (as given by user)
     *
     * @generated from field: string internal_item_code = 35;
     */
    internalItemCode: string;
    /**
     * The computed hash of the infrastructure
     *
     * @generated from field: string hash = 36;
     */
    hash: string;
    /**
     * The minimum remaining quantity (in cents)
     *
     * @generated from field: uint64 quantity_remaining_min = 37;
     */
    quantityRemainingMin: bigint;
    /**
     * The maximum remaining quantity (in cents)
     *
     * @generated from field: uint64 quantity_remaining_max = 38;
     */
    quantityRemainingMax: bigint;
    /**
     * Stores an optional secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_uom_id = 39;
     */
    secondaryUomId: bigint;
    /**
     * The start range of shelf life timestamp
     *
     * @generated from field: uint64 shelf_life_timestamp_start = 40;
     */
    shelfLifeTimestampStart: bigint;
    /**
     * The end range of shelf life timestamp
     *
     * @generated from field: uint64 shelf_life_timestamp_end = 41;
     */
    shelfLifeTimestampEnd: bigint;
    /**
     * The start range of the warranty timestamp
     *
     * @generated from field: uint64 warranty_timestamp_start = 42;
     */
    warrantyTimestampStart: bigint;
    /**
     * The end range of the warranty timestamp
     *
     * @generated from field: uint64 warranty_timestamp_end = 43;
     */
    warrantyTimestampEnd: bigint;
    /**
     * Stores the store to which the infrastructure is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the infrastructure is stored in
     *
     * @generated from field: uint64 storage_id = 51;
     */
    storageId: bigint;
    /**
     * Stores if the associated QC report should be public
     *
     * @generated from field: Scailo.BOOL_FILTER is_qc_report_public = 52;
     */
    isQcReportPublic: BOOL_FILTER;
    /**
     * Filter by the location ID
     *
     * @generated from field: uint64 location_id = 54;
     */
    locationId: bigint;
    /**
     * Filter by the given vendor ID
     *
     * --------------------------------------------------
     *
     * @generated from field: uint64 vendor_id = 81;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<InfrastructuresServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresServiceFilterReq;
    static equals(a: InfrastructuresServiceFilterReq | PlainMessage<InfrastructuresServiceFilterReq> | undefined, b: InfrastructuresServiceFilterReq | PlainMessage<InfrastructuresServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.InfrastructuresServiceCountReq
 */
export declare class InfrastructuresServiceCountReq extends Message<InfrastructuresServiceCountReq> {
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
     * The status of this infrastructure
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 10;
     */
    status: INVENTORY_LIFECYCLE;
    /**
     * The start range of store intake timestamp
     *
     * @generated from field: uint64 store_intake_at_start = 20;
     */
    storeIntakeAtStart: bigint;
    /**
     * The end range of store intake timestamp
     *
     * @generated from field: uint64 store_intake_at_end = 21;
     */
    storeIntakeAtEnd: bigint;
    /**
     * The start range of discarded timestamp
     *
     * @generated from field: uint64 discarded_at_start = 22;
     */
    discardedAtStart: bigint;
    /**
     * The end range of discarded timestamp
     *
     * @generated from field: uint64 discarded_at_end = 23;
     */
    discardedAtEnd: bigint;
    /**
     * The ID of the parent inventory item
     *
     * @generated from field: uint64 parent_ref_id = 30;
     */
    parentRefId: bigint;
    /**
     * Stores the reference from
     *
     * @generated from field: Scailo.INFRASTRUCTURE_REF_FROM ref_from = 31;
     */
    refFrom: INFRASTRUCTURE_REF_FROM;
    /**
     * Stores the ID of the reference
     *
     * @generated from field: uint64 ref_id = 32;
     */
    refId: bigint;
    /**
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 33;
     */
    familyId: bigint;
    /**
     * The auto generated code of the infrastructure
     *
     * @generated from field: string code = 34;
     */
    code: string;
    /**
     * Stores the internal code (as given by user)
     *
     * @generated from field: string internal_item_code = 35;
     */
    internalItemCode: string;
    /**
     * The computed hash of the infrastructure
     *
     * @generated from field: string hash = 36;
     */
    hash: string;
    /**
     * The minimum remaining quantity (in cents)
     *
     * @generated from field: uint64 quantity_remaining_min = 37;
     */
    quantityRemainingMin: bigint;
    /**
     * The maximum remaining quantity (in cents)
     *
     * @generated from field: uint64 quantity_remaining_max = 38;
     */
    quantityRemainingMax: bigint;
    /**
     * Stores an optional secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_uom_id = 39;
     */
    secondaryUomId: bigint;
    /**
     * The start range of shelf life timestamp
     *
     * @generated from field: uint64 shelf_life_timestamp_start = 40;
     */
    shelfLifeTimestampStart: bigint;
    /**
     * The end range of shelf life timestamp
     *
     * @generated from field: uint64 shelf_life_timestamp_end = 41;
     */
    shelfLifeTimestampEnd: bigint;
    /**
     * The start range of the warranty timestamp
     *
     * @generated from field: uint64 warranty_timestamp_start = 42;
     */
    warrantyTimestampStart: bigint;
    /**
     * The end range of the warranty timestamp
     *
     * @generated from field: uint64 warranty_timestamp_end = 43;
     */
    warrantyTimestampEnd: bigint;
    /**
     * Stores the store to which the infrastructure is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the infrastructure is stored in
     *
     * @generated from field: uint64 storage_id = 51;
     */
    storageId: bigint;
    /**
     * Stores if the associated QC report should be public
     *
     * @generated from field: Scailo.BOOL_FILTER is_qc_report_public = 52;
     */
    isQcReportPublic: BOOL_FILTER;
    /**
     * Filter by the location ID
     *
     * @generated from field: uint64 location_id = 54;
     */
    locationId: bigint;
    /**
     * Filter by the given vendor ID
     *
     * --------------------------------------------------
     *
     * @generated from field: uint64 vendor_id = 81;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<InfrastructuresServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresServiceCountReq;
    static equals(a: InfrastructuresServiceCountReq | PlainMessage<InfrastructuresServiceCountReq> | undefined, b: InfrastructuresServiceCountReq | PlainMessage<InfrastructuresServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.InfrastructuresServiceSearchAllReq
 */
export declare class InfrastructuresServiceSearchAllReq extends Message<InfrastructuresServiceSearchAllReq> {
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
     * @generated from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;
     */
    sortKey: INVENTORY_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 10;
     */
    status: INVENTORY_LIFECYCLE;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The ID of the parent inventory item
     *
     * @generated from field: uint64 parent_ref_id = 30;
     */
    parentRefId: bigint;
    /**
     * Stores the reference from
     *
     * @generated from field: Scailo.INFRASTRUCTURE_REF_FROM ref_from = 31;
     */
    refFrom: INFRASTRUCTURE_REF_FROM;
    /**
     * Stores the ID of the reference
     *
     * @generated from field: uint64 ref_id = 32;
     */
    refId: bigint;
    /**
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 33;
     */
    familyId: bigint;
    /**
     * Stores an optional secondary unit of infrastructure
     *
     * @generated from field: uint64 secondary_uom_id = 38;
     */
    secondaryUomId: bigint;
    /**
     * Stores the store to which the infrastructure is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the infrastructure is stored in
     *
     * @generated from field: uint64 storage_id = 51;
     */
    storageId: bigint;
    /**
     * Stores if the associated QC report should be public
     *
     * @generated from field: Scailo.BOOL_FILTER is_qc_report_public = 52;
     */
    isQcReportPublic: BOOL_FILTER;
    /**
     * Filter by the location ID
     *
     * @generated from field: uint64 location_id = 54;
     */
    locationId: bigint;
    constructor(data?: PartialMessage<InfrastructuresServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InfrastructuresServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfrastructuresServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfrastructuresServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfrastructuresServiceSearchAllReq;
    static equals(a: InfrastructuresServiceSearchAllReq | PlainMessage<InfrastructuresServiceSearchAllReq> | undefined, b: InfrastructuresServiceSearchAllReq | PlainMessage<InfrastructuresServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=infrastructures.scailo_pb.d.ts.map
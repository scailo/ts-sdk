import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, INVENTORY_LIFECYCLE, INVENTORY_SORT_KEY, LogbookLogInventoryLC, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a feedstock can be added
 *
 * @generated from enum Scailo.FEEDSTOCK_REF_FROM
 */
export declare enum FEEDSTOCK_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: FEEDSTOCK_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    FEEDSTOCK_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the feedstock originated from initial stock
     *
     * @generated from enum value: FEEDSTOCK_REF_FROM_INITIAL_STOCK = 1;
     */
    FEEDSTOCK_REF_FROM_INITIAL_STOCK = 1,
    /**
     * Denotes that the feedstock originated from a goods receipt
     *
     * @generated from enum value: FEEDSTOCK_REF_FROM_GOODS_RECEIPT = 2;
     */
    FEEDSTOCK_REF_FROM_GOODS_RECEIPT = 2,
    /**
     * Denotes that the feedstock originated from an inward job free issue material
     *
     * @generated from enum value: FEEDSTOCK_REF_FROM_INWARD_JOB_FREE_ISSUE_MATERIAL = 3;
     */
    FEEDSTOCK_REF_FROM_INWARD_JOB_FREE_ISSUE_MATERIAL = 3
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.FeedstocksServiceCreateRequest
 */
export declare class FeedstocksServiceCreateRequest extends Message<FeedstocksServiceCreateRequest> {
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
     * @generated from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;
     */
    refFrom: FEEDSTOCK_REF_FROM;
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
     * Stores an optional secondary unit of feedstock
     *
     * @generated from field: uint64 secondary_uom_id = 39;
     */
    secondaryUomId: bigint;
    /**
     * Stores an optional quantity in the secondary unit of feedstock
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
     * The description of the feedstock
     *
     * @generated from field: string description = 60;
     */
    description: string;
    constructor(data?: PartialMessage<FeedstocksServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksServiceCreateRequest;
    static equals(a: FeedstocksServiceCreateRequest | PlainMessage<FeedstocksServiceCreateRequest> | undefined, b: FeedstocksServiceCreateRequest | PlainMessage<FeedstocksServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.FeedstocksServiceUpdateRequest
 */
export declare class FeedstocksServiceUpdateRequest extends Message<FeedstocksServiceUpdateRequest> {
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
     * Stores an optional secondary unit of feedstock
     *
     * @generated from field: uint64 secondary_uom_id = 38;
     */
    secondaryUomId: bigint;
    /**
     * Stores an optional quantity in the secondary unit of feedstock
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
     * Stores an optional ID of the associated storage that the feedstock is stored in
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
     * The description of the feedstock
     *
     * @generated from field: string description = 60;
     */
    description: string;
    constructor(data?: PartialMessage<FeedstocksServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksServiceUpdateRequest;
    static equals(a: FeedstocksServiceUpdateRequest | PlainMessage<FeedstocksServiceUpdateRequest> | undefined, b: FeedstocksServiceUpdateRequest | PlainMessage<FeedstocksServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to send a feedstock to store
 *
 * @generated from message Scailo.FeedstocksServiceSendToStoreRequest
 */
export declare class FeedstocksServiceSendToStoreRequest extends Message<FeedstocksServiceSendToStoreRequest> {
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
     * Stores the store to which the feedstock is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the feedstock is stored in
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
     * The description of the feedstock
     *
     * @generated from field: string description = 60;
     */
    description: string;
    constructor(data?: PartialMessage<FeedstocksServiceSendToStoreRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksServiceSendToStoreRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksServiceSendToStoreRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksServiceSendToStoreRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksServiceSendToStoreRequest;
    static equals(a: FeedstocksServiceSendToStoreRequest | PlainMessage<FeedstocksServiceSendToStoreRequest> | undefined, b: FeedstocksServiceSendToStoreRequest | PlainMessage<FeedstocksServiceSendToStoreRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Feedstock
 */
export declare class Feedstock extends Message<Feedstock> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this feedstock
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this feedstock
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 4;
     */
    status: INVENTORY_LIFECYCLE;
    /**
     * Stores the logs of every operation performed on this feedstock
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
     * @generated from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;
     */
    refFrom: FEEDSTOCK_REF_FROM;
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
     * The auto generated code of the feedstock
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
     * The computed hash of the feedstock
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
     * Stores an optional secondary unit of feedstock
     *
     * @generated from field: uint64 secondary_uom_id = 39;
     */
    secondaryUomId: bigint;
    /**
     * Stores an optional quantity in the secondary unit of feedstock
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
     * Stores the store to which the feedstock is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the feedstock is stored in
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
     * The description of the feedstock
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
    constructor(data?: PartialMessage<Feedstock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Feedstock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Feedstock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Feedstock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Feedstock;
    static equals(a: Feedstock | PlainMessage<Feedstock> | undefined, b: Feedstock | PlainMessage<Feedstock> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.FeedstocksList
 */
export declare class FeedstocksList extends Message<FeedstocksList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Feedstock list = 1;
     */
    list: Feedstock[];
    constructor(data?: PartialMessage<FeedstocksList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksList;
    static equals(a: FeedstocksList | PlainMessage<FeedstocksList> | undefined, b: FeedstocksList | PlainMessage<FeedstocksList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.FeedstocksServicePaginationReq
 */
export declare class FeedstocksServicePaginationReq extends Message<FeedstocksServicePaginationReq> {
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
     * The status of this feedstock
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 6;
     */
    status: INVENTORY_LIFECYCLE;
    constructor(data?: PartialMessage<FeedstocksServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksServicePaginationReq;
    static equals(a: FeedstocksServicePaginationReq | PlainMessage<FeedstocksServicePaginationReq> | undefined, b: FeedstocksServicePaginationReq | PlainMessage<FeedstocksServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.FeedstocksServicePaginationResponse
 */
export declare class FeedstocksServicePaginationResponse extends Message<FeedstocksServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Feedstock payload = 4;
     */
    payload: Feedstock[];
    constructor(data?: PartialMessage<FeedstocksServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksServicePaginationResponse;
    static equals(a: FeedstocksServicePaginationResponse | PlainMessage<FeedstocksServicePaginationResponse> | undefined, b: FeedstocksServicePaginationResponse | PlainMessage<FeedstocksServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.FeedstocksServiceFilterReq
 */
export declare class FeedstocksServiceFilterReq extends Message<FeedstocksServiceFilterReq> {
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
     * The status of this feedstock
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
     * @generated from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;
     */
    refFrom: FEEDSTOCK_REF_FROM;
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
     * The auto generated code of the feedstock
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
     * The computed hash of the feedstock
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
     * Stores an optional secondary unit of feedstock
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
     * Stores the store to which the feedstock is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the feedstock is stored in
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
    constructor(data?: PartialMessage<FeedstocksServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksServiceFilterReq;
    static equals(a: FeedstocksServiceFilterReq | PlainMessage<FeedstocksServiceFilterReq> | undefined, b: FeedstocksServiceFilterReq | PlainMessage<FeedstocksServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.FeedstocksServiceCountReq
 */
export declare class FeedstocksServiceCountReq extends Message<FeedstocksServiceCountReq> {
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
     * The status of this feedstock
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
     * @generated from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;
     */
    refFrom: FEEDSTOCK_REF_FROM;
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
     * The auto generated code of the feedstock
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
     * The computed hash of the feedstock
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
     * Stores an optional secondary unit of feedstock
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
     * Stores the store to which the feedstock is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the feedstock is stored in
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
    constructor(data?: PartialMessage<FeedstocksServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksServiceCountReq;
    static equals(a: FeedstocksServiceCountReq | PlainMessage<FeedstocksServiceCountReq> | undefined, b: FeedstocksServiceCountReq | PlainMessage<FeedstocksServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.FeedstocksServiceSearchAllReq
 */
export declare class FeedstocksServiceSearchAllReq extends Message<FeedstocksServiceSearchAllReq> {
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
     * @generated from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;
     */
    refFrom: FEEDSTOCK_REF_FROM;
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
     * Stores an optional secondary unit of feedstock
     *
     * @generated from field: uint64 secondary_uom_id = 38;
     */
    secondaryUomId: bigint;
    /**
     * Stores the store to which the feedstock is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the feedstock is stored in
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
    constructor(data?: PartialMessage<FeedstocksServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FeedstocksServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedstocksServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedstocksServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedstocksServiceSearchAllReq;
    static equals(a: FeedstocksServiceSearchAllReq | PlainMessage<FeedstocksServiceSearchAllReq> | undefined, b: FeedstocksServiceSearchAllReq | PlainMessage<FeedstocksServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=feedstocks.scailo_pb.d.ts.map
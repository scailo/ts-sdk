import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, INVENTORY_LIFECYCLE, INVENTORY_SORT_KEY, SORT_ORDER } from "./base.scailo_pb.js";
import { FAMILY_TYPE } from "./families.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a generic inventory can be added
 *
 * @generated from enum Scailo.GENERIC_INVENTORY_REF_FROM
 */
export declare enum GENERIC_INVENTORY_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: GENERIC_INVENTORY_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    GENERIC_INVENTORY_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the component originated from initial stock
     *
     * @generated from enum value: GENERIC_INVENTORY_REF_FROM_INITIAL_STOCK = 1;
     */
    GENERIC_INVENTORY_REF_FROM_INITIAL_STOCK = 1,
    /**
     * Denotes that the component originated from a goods receipt
     *
     * @generated from enum value: GENERIC_INVENTORY_REF_FROM_GOODS_RECEIPT = 2;
     */
    GENERIC_INVENTORY_REF_FROM_GOODS_RECEIPT = 2,
    /**
     * Denotes that the component originated from an inward job free issue material
     *
     * @generated from enum value: GENERIC_INVENTORY_REF_FROM_INWARD_JOB_FREE_ISSUE_MATERIAL = 3;
     */
    GENERIC_INVENTORY_REF_FROM_INWARD_JOB_FREE_ISSUE_MATERIAL = 3,
    /**
     * Denotes that the component originated from an outward job free issue material
     *
     * @generated from enum value: GENERIC_INVENTORY_REF_FROM_OUTWARD_JOB_FREE_ISSUE_MATERIAL = 4;
     */
    GENERIC_INVENTORY_REF_FROM_OUTWARD_JOB_FREE_ISSUE_MATERIAL = 4,
    /**
     * Denotes that the component originated from a production plan
     *
     * @generated from enum value: GENERIC_INVENTORY_REF_FROM_PRODUCTION_PLAN = 5;
     */
    GENERIC_INVENTORY_REF_FROM_PRODUCTION_PLAN = 5
}
/**
 *
 * Describes the available types of inventory node origins
 *
 * @generated from enum Scailo.INVENTORY_NODE_ORIGIN_TYPE
 */
export declare enum INVENTORY_NODE_ORIGIN_TYPE {
    /**
     * Use this only in filter and search queries
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_ANY_UNSPECIFIED = 0;
     */
    INVENTORY_NODE_ORIGIN_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the origin is from a sales order
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_SALES_ORDER = 10;
     */
    INVENTORY_NODE_ORIGIN_TYPE_SALES_ORDER = 10,
    /**
     * Denotes that the origin is from a sales return
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_SALES_RETURN = 20;
     */
    INVENTORY_NODE_ORIGIN_TYPE_SALES_RETURN = 20,
    /**
     * Denotes that the origin is from a production plan
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_PRODUCTION_PLAN = 30;
     */
    INVENTORY_NODE_ORIGIN_TYPE_PRODUCTION_PLAN = 30,
    /**
     * Denotes that the origin is from a work order equation
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_WORK_ORDER_EQUATION = 40;
     */
    INVENTORY_NODE_ORIGIN_TYPE_WORK_ORDER_EQUATION = 40,
    /**
     * Denotes that the origin from minimum stock
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_MIN_STOCK = 50;
     */
    INVENTORY_NODE_ORIGIN_TYPE_MIN_STOCK = 50,
    /**
     * Denotes that the origin is from a goods dispatch
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_GOODS_DISPATCH = 60;
     */
    INVENTORY_NODE_ORIGIN_TYPE_GOODS_DISPATCH = 60,
    /**
     * Denotes that the origin is from a stock issuance
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_STOCK_ISSUANCE = 70;
     */
    INVENTORY_NODE_ORIGIN_TYPE_STOCK_ISSUANCE = 70,
    /**
     * Denotes that the origin is from a family equation
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_FAMILY_EQUATION = 80;
     */
    INVENTORY_NODE_ORIGIN_TYPE_FAMILY_EQUATION = 80,
    /**
     * Denotes that the origin is from work in progress
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_WORK_IN_PROGRESS = 90;
     */
    INVENTORY_NODE_ORIGIN_TYPE_WORK_IN_PROGRESS = 90,
    /**
     * Denotes that the origin is from net indented
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_NET_INDENTED = 100;
     */
    INVENTORY_NODE_ORIGIN_TYPE_NET_INDENTED = 100,
    /**
     * Dentoes that the origin is from net ordered
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_NET_ORDERED = 110;
     */
    INVENTORY_NODE_ORIGIN_TYPE_NET_ORDERED = 110,
    /**
     * Denotes that the origin is from iqc
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_QC = 120;
     */
    INVENTORY_NODE_ORIGIN_TYPE_QC = 120,
    /**
     * Denotes that the origin is from rejected
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_REJECTED = 130;
     */
    INVENTORY_NODE_ORIGIN_TYPE_REJECTED = 130,
    /**
     * Denotes that the origin is from returnable
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_RETURNABLE = 140;
     */
    INVENTORY_NODE_ORIGIN_TYPE_RETURNABLE = 140,
    /**
     * Denotes that the origin is from rework
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_REWORK = 150;
     */
    INVENTORY_NODE_ORIGIN_TYPE_REWORK = 150,
    /**
     * Denotes that the origin is from scrap
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_SCRAP = 160;
     */
    INVENTORY_NODE_ORIGIN_TYPE_SCRAP = 160,
    /**
     * Denotes that the origin is from store
     *
     * @generated from enum value: INVENTORY_NODE_ORIGIN_TYPE_STORE = 170;
     */
    INVENTORY_NODE_ORIGIN_TYPE_STORE = 170
}
/**
 *
 * Describes the parameters that are present in a generic inventory payload, which is an abstraction over every inventory item that consists of the common parameters
 *
 * @generated from message Scailo.GenericInventory
 */
export declare class GenericInventory extends Message<GenericInventory> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this inventory item
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this inventory item
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 4;
     */
    status: INVENTORY_LIFECYCLE;
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
     * @generated from field: Scailo.GENERIC_INVENTORY_REF_FROM ref_from = 31;
     */
    refFrom: GENERIC_INVENTORY_REF_FROM;
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
     * The auto generated code of the inventory item
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
     * The computed hash of the inventory item
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
     * Stores an optional secondary unit of inventory item
     *
     * @generated from field: uint64 secondary_uom_id = 39;
     */
    secondaryUomId: bigint;
    /**
     * Stores an optional quantity in the secondary unit of inventory item
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
     * Stores the store to which the inventory item is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the inventory item is stored in
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
     * The description of the inventory item
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
    constructor(data?: PartialMessage<GenericInventory>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GenericInventory";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericInventory;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericInventory;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericInventory;
    static equals(a: GenericInventory | PlainMessage<GenericInventory> | undefined, b: GenericInventory | PlainMessage<GenericInventory> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of generic inventory
 *
 * @generated from message Scailo.GenericInventoryList
 */
export declare class GenericInventoryList extends Message<GenericInventoryList> {
    /**
     * List of generic inventory
     *
     * @generated from field: repeated Scailo.GenericInventory list = 1;
     */
    list: GenericInventory[];
    constructor(data?: PartialMessage<GenericInventoryList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GenericInventoryList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericInventoryList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericInventoryList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericInventoryList;
    static equals(a: GenericInventoryList | PlainMessage<GenericInventoryList> | undefined, b: GenericInventoryList | PlainMessage<GenericInventoryList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are present in an inventory code map
 *
 * @generated from message Scailo.InventoryCodeMap
 */
export declare class InventoryCodeMap extends Message<InventoryCodeMap> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this inventory item
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the purpose
     *
     * @generated from field: string purpose = 10;
     */
    purpose: string;
    /**
     * The type of the family
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 11;
     */
    familyType: FAMILY_TYPE;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     * Stores the inventory item's code
     *
     * @generated from field: string code = 20;
     */
    code: string;
    /**
     * The hash of the item
     *
     * @generated from field: string hash = 21;
     */
    hash: string;
    /**
     * The short URL of the item
     *
     * @generated from field: string short_url = 30;
     */
    shortUrl: string;
    constructor(data?: PartialMessage<InventoryCodeMap>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryCodeMap";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryCodeMap;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryCodeMap;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryCodeMap;
    static equals(a: InventoryCodeMap | PlainMessage<InventoryCodeMap> | undefined, b: InventoryCodeMap | PlainMessage<InventoryCodeMap> | undefined): boolean;
}
/**
 *
 * Describes the message that consists of parameters that are required to retrieve issuable inventory
 *
 * @generated from message Scailo.IssuableInventorySearchReq
 */
export declare class IssuableInventorySearchReq extends Message<IssuableInventorySearchReq> {
    /**
     * Stores the status of the inventory
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 1;
     */
    status: INVENTORY_LIFECYCLE;
    /**
     * Stores the search key
     *
     * @generated from field: string search_key = 5;
     */
    searchKey: string;
    /**
     * Stores the ID of the family that needs to be retrieved
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the ID of the location from where the inventory needs to be retrieved
     *
     * @generated from field: uint64 location_id = 15;
     */
    locationId: bigint;
    constructor(data?: PartialMessage<IssuableInventorySearchReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IssuableInventorySearchReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IssuableInventorySearchReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IssuableInventorySearchReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IssuableInventorySearchReq;
    static equals(a: IssuableInventorySearchReq | PlainMessage<IssuableInventorySearchReq> | undefined, b: IssuableInventorySearchReq | PlainMessage<IssuableInventorySearchReq> | undefined): boolean;
}
/**
 *
 * Describes the request to search for an inventory item using the item's hash
 *
 * @generated from message Scailo.InventoryHashSearchReq
 */
export declare class InventoryHashSearchReq extends Message<InventoryHashSearchReq> {
    /**
     * The hash of the item
     *
     * @generated from field: string hash = 1;
     */
    hash: string;
    constructor(data?: PartialMessage<InventoryHashSearchReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryHashSearchReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryHashSearchReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryHashSearchReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryHashSearchReq;
    static equals(a: InventoryHashSearchReq | PlainMessage<InventoryHashSearchReq> | undefined, b: InventoryHashSearchReq | PlainMessage<InventoryHashSearchReq> | undefined): boolean;
}
/**
 *
 * Describes the request to calculate the quantity remaining for the given family in a particular status
 *
 * @generated from message Scailo.InventoryServiceFamilyQuantityReq
 */
export declare class InventoryServiceFamilyQuantityReq extends Message<InventoryServiceFamilyQuantityReq> {
    /**
     * The status of this inventory item
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE status = 10;
     */
    status: INVENTORY_LIFECYCLE;
    /**
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 20;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<InventoryServiceFamilyQuantityReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryServiceFamilyQuantityReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryServiceFamilyQuantityReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryServiceFamilyQuantityReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryServiceFamilyQuantityReq;
    static equals(a: InventoryServiceFamilyQuantityReq | PlainMessage<InventoryServiceFamilyQuantityReq> | undefined, b: InventoryServiceFamilyQuantityReq | PlainMessage<InventoryServiceFamilyQuantityReq> | undefined): boolean;
}
/**
 *
 * Describes the message that consists of parameters that are required to retrieve returnable inventory
 *
 * @generated from message Scailo.ReturnableInventorySearchReq
 */
export declare class ReturnableInventorySearchReq extends Message<ReturnableInventorySearchReq> {
    /**
     * Stores the ID of the reference (such as purchase order, sales order, inward job, outward job, stock issuance)
     *
     * @generated from field: uint64 ref_id = 1;
     */
    refId: bigint;
    /**
     * Stores the search key
     *
     * @generated from field: string search_key = 5;
     */
    searchKey: string;
    /**
     * Stores the ID of the family that needs to be retrieved
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the ID of the location from where the inventory needs to be retrieved
     *
     * @generated from field: uint64 location_id = 15;
     */
    locationId: bigint;
    constructor(data?: PartialMessage<ReturnableInventorySearchReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReturnableInventorySearchReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReturnableInventorySearchReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReturnableInventorySearchReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReturnableInventorySearchReq;
    static equals(a: ReturnableInventorySearchReq | PlainMessage<ReturnableInventorySearchReq> | undefined, b: ReturnableInventorySearchReq | PlainMessage<ReturnableInventorySearchReq> | undefined): boolean;
}
/**
 *
 * Describes the message that consists of parameters that are required to search for returnable inventory
 *
 * @generated from message Scailo.SearchReturnableInventoryReq
 */
export declare class SearchReturnableInventoryReq extends Message<SearchReturnableInventoryReq> {
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
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 33;
     */
    familyId: bigint;
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
     * Stores an optional secondary unit of inventory item
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
    constructor(data?: PartialMessage<SearchReturnableInventoryReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SearchReturnableInventoryReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchReturnableInventoryReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchReturnableInventoryReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchReturnableInventoryReq;
    static equals(a: SearchReturnableInventoryReq | PlainMessage<SearchReturnableInventoryReq> | undefined, b: SearchReturnableInventoryReq | PlainMessage<SearchReturnableInventoryReq> | undefined): boolean;
}
/**
 *
 * Describes the message that consists of parameters that are required to search for returnable inventory for a record with the given identifier
 *
 * @generated from message Scailo.SearchReturnableInventoryForIdentifierUUID
 */
export declare class SearchReturnableInventoryForIdentifierUUID extends Message<SearchReturnableInventoryForIdentifierUUID> {
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The search filter to apply
     *
     * @generated from field: Scailo.SearchReturnableInventoryReq filter = 10;
     */
    filter?: SearchReturnableInventoryReq;
    constructor(data?: PartialMessage<SearchReturnableInventoryForIdentifierUUID>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SearchReturnableInventoryForIdentifierUUID";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchReturnableInventoryForIdentifierUUID;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchReturnableInventoryForIdentifierUUID;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchReturnableInventoryForIdentifierUUID;
    static equals(a: SearchReturnableInventoryForIdentifierUUID | PlainMessage<SearchReturnableInventoryForIdentifierUUID> | undefined, b: SearchReturnableInventoryForIdentifierUUID | PlainMessage<SearchReturnableInventoryForIdentifierUUID> | undefined): boolean;
}
/**
 *
 * Describes the message that consists of parameters that are required to filter for returnable inventory
 *
 * @generated from message Scailo.FilterReturnableInventoryReq
 */
export declare class FilterReturnableInventoryReq extends Message<FilterReturnableInventoryReq> {
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
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 33;
     */
    familyId: bigint;
    /**
     * The auto generated code of the inventory item
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
     * The computed hash of the inventory item
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
     * Stores an optional secondary unit of inventory item
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
    constructor(data?: PartialMessage<FilterReturnableInventoryReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FilterReturnableInventoryReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FilterReturnableInventoryReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FilterReturnableInventoryReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FilterReturnableInventoryReq;
    static equals(a: FilterReturnableInventoryReq | PlainMessage<FilterReturnableInventoryReq> | undefined, b: FilterReturnableInventoryReq | PlainMessage<FilterReturnableInventoryReq> | undefined): boolean;
}
/**
 *
 * Describes the message that consists of parameters that are required to filter returnable inventory for a record with the given identifier
 *
 * @generated from message Scailo.FilterReturnableInventoryForIdentifierUUID
 */
export declare class FilterReturnableInventoryForIdentifierUUID extends Message<FilterReturnableInventoryForIdentifierUUID> {
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The returnable inventory filter to apply
     *
     * @generated from field: Scailo.FilterReturnableInventoryReq filter = 10;
     */
    filter?: FilterReturnableInventoryReq;
    constructor(data?: PartialMessage<FilterReturnableInventoryForIdentifierUUID>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FilterReturnableInventoryForIdentifierUUID";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FilterReturnableInventoryForIdentifierUUID;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FilterReturnableInventoryForIdentifierUUID;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FilterReturnableInventoryForIdentifierUUID;
    static equals(a: FilterReturnableInventoryForIdentifierUUID | PlainMessage<FilterReturnableInventoryForIdentifierUUID> | undefined, b: FilterReturnableInventoryForIdentifierUUID | PlainMessage<FilterReturnableInventoryForIdentifierUUID> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of all the inventory statistics for the given family ID
 *
 * @generated from message Scailo.ConsolidatedInventoryStatistics
 */
export declare class ConsolidatedInventoryStatistics extends Message<ConsolidatedInventoryStatistics> {
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     * The base demand quantity
     *
     * @generated from field: int64 base_demand_count = 10;
     */
    baseDemandCount: bigint;
    /**
     * The work in progress quantity
     *
     * @generated from field: int64 work_in_progress_count = 20;
     */
    workInProgressCount: bigint;
    /**
     * The indented quantity
     *
     * @generated from field: int64 indented_count = 30;
     */
    indentedCount: bigint;
    /**
     * The ordered quantity
     *
     * @generated from field: int64 ordered_count = 40;
     */
    orderedCount: bigint;
    /**
     * The quantity in QC
     *
     * @generated from field: int64 qc_count = 100;
     */
    qcCount: bigint;
    /**
     * The quantity that has been rejected
     *
     * @generated from field: int64 rejected_count = 110;
     */
    rejectedCount: bigint;
    /**
     * The quantity that has been marked for return
     *
     * @generated from field: int64 returnable_count = 120;
     */
    returnableCount: bigint;
    /**
     * The quantity in rework
     *
     * @generated from field: int64 rework_count = 130;
     */
    reworkCount: bigint;
    /**
     * The quantity that has been scrapped
     *
     * @generated from field: int64 scrap_count = 140;
     */
    scrapCount: bigint;
    /**
     * The quantity in store
     *
     * @generated from field: int64 store_count = 150;
     */
    storeCount: bigint;
    /**
     * The quantity that is required
     *
     * @generated from field: int64 required_count = 200;
     */
    requiredCount: bigint;
    constructor(data?: PartialMessage<ConsolidatedInventoryStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ConsolidatedInventoryStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsolidatedInventoryStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsolidatedInventoryStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsolidatedInventoryStatistics;
    static equals(a: ConsolidatedInventoryStatistics | PlainMessage<ConsolidatedInventoryStatistics> | undefined, b: ConsolidatedInventoryStatistics | PlainMessage<ConsolidatedInventoryStatistics> | undefined): boolean;
}
/**
 *
 * Describes the abridged version of each production plan item
 *
 * @generated from message Scailo.AbridgedProductionPlanItem
 */
export declare class AbridgedProductionPlanItem extends Message<AbridgedProductionPlanItem> {
    /**
     * Stores the production plan ID
     *
     * @generated from field: uint64 production_plan_id = 10;
     */
    productionPlanId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 20;
     */
    familyId: bigint;
    /**
     * The quantity being manufactured (in cents)
     *
     * @generated from field: int64 quantity = 30;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AbridgedProductionPlanItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbridgedProductionPlanItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbridgedProductionPlanItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbridgedProductionPlanItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbridgedProductionPlanItem;
    static equals(a: AbridgedProductionPlanItem | PlainMessage<AbridgedProductionPlanItem> | undefined, b: AbridgedProductionPlanItem | PlainMessage<AbridgedProductionPlanItem> | undefined): boolean;
}
/**
 *
 * Describes the abridged version of each inventory item
 *
 * @generated from message Scailo.AbridgedInventoryItem
 */
export declare class AbridgedInventoryItem extends Message<AbridgedInventoryItem> {
    /**
     * Stores the ID of the associated family
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * The computed hash of the inventory item
     *
     * @generated from field: string hash = 20;
     */
    hash: string;
    /**
     * Stores the quantity (in cents)
     *
     * @generated from field: int64 quantity = 30;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AbridgedInventoryItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbridgedInventoryItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbridgedInventoryItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbridgedInventoryItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbridgedInventoryItem;
    static equals(a: AbridgedInventoryItem | PlainMessage<AbridgedInventoryItem> | undefined, b: AbridgedInventoryItem | PlainMessage<AbridgedInventoryItem> | undefined): boolean;
}
/**
 *
 * Describes the abridged version of each purchase indent item
 *
 * @generated from message Scailo.AbridgedPurchaseIndentItem
 */
export declare class AbridgedPurchaseIndentItem extends Message<AbridgedPurchaseIndentItem> {
    /**
     * Stores the purchase indent ID
     *
     * @generated from field: uint64 purchase_indent_id = 10;
     */
    purchaseIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 20;
     */
    familyId: bigint;
    /**
     * The quantity of the item (in cents)
     *
     * @generated from field: int64 quantity = 30;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AbridgedPurchaseIndentItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbridgedPurchaseIndentItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbridgedPurchaseIndentItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbridgedPurchaseIndentItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbridgedPurchaseIndentItem;
    static equals(a: AbridgedPurchaseIndentItem | PlainMessage<AbridgedPurchaseIndentItem> | undefined, b: AbridgedPurchaseIndentItem | PlainMessage<AbridgedPurchaseIndentItem> | undefined): boolean;
}
/**
 *
 * Describes the abridged version of each purchase order item
 *
 * @generated from message Scailo.AbridgedPurchaseOrderItem
 */
export declare class AbridgedPurchaseOrderItem extends Message<AbridgedPurchaseOrderItem> {
    /**
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 20;
     */
    familyId: bigint;
    /**
     * The quantity of the item (in cents)
     *
     * @generated from field: int64 quantity = 30;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AbridgedPurchaseOrderItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbridgedPurchaseOrderItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbridgedPurchaseOrderItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbridgedPurchaseOrderItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbridgedPurchaseOrderItem;
    static equals(a: AbridgedPurchaseOrderItem | PlainMessage<AbridgedPurchaseOrderItem> | undefined, b: AbridgedPurchaseOrderItem | PlainMessage<AbridgedPurchaseOrderItem> | undefined): boolean;
}
/**
 *
 * Describes the abridged version of each goods receipt item
 *
 * @generated from message Scailo.AbridgedGoodsReceiptItem
 */
export declare class AbridgedGoodsReceiptItem extends Message<AbridgedGoodsReceiptItem> {
    /**
     * Stores the goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 20;
     */
    familyId: bigint;
    /**
     * The quantity of the item (in cents)
     *
     * @generated from field: int64 quantity = 30;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AbridgedGoodsReceiptItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbridgedGoodsReceiptItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbridgedGoodsReceiptItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbridgedGoodsReceiptItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbridgedGoodsReceiptItem;
    static equals(a: AbridgedGoodsReceiptItem | PlainMessage<AbridgedGoodsReceiptItem> | undefined, b: AbridgedGoodsReceiptItem | PlainMessage<AbridgedGoodsReceiptItem> | undefined): boolean;
}
/**
 *
 * Describes the abridged version of each purchase return item
 *
 * @generated from message Scailo.AbridgedPurchaseReturnItem
 */
export declare class AbridgedPurchaseReturnItem extends Message<AbridgedPurchaseReturnItem> {
    /**
     * Stores the purchase return ID
     *
     * @generated from field: uint64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 20;
     */
    familyId: bigint;
    /**
     * The quantity of the item (in cents)
     *
     * @generated from field: int64 quantity = 30;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AbridgedPurchaseReturnItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbridgedPurchaseReturnItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbridgedPurchaseReturnItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbridgedPurchaseReturnItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbridgedPurchaseReturnItem;
    static equals(a: AbridgedPurchaseReturnItem | PlainMessage<AbridgedPurchaseReturnItem> | undefined, b: AbridgedPurchaseReturnItem | PlainMessage<AbridgedPurchaseReturnItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the work in progress inventory statistics for the given family ID
 *
 * @generated from message Scailo.InventoryWorkInProgressStatistics
 */
export declare class InventoryWorkInProgressStatistics extends Message<InventoryWorkInProgressStatistics> {
    /**
     * List of abridged production plan items
     *
     * @generated from field: repeated Scailo.AbridgedProductionPlanItem production_plans = 10;
     */
    productionPlans: AbridgedProductionPlanItem[];
    /**
     * List of abridged inventory items
     *
     * @generated from field: repeated Scailo.AbridgedInventoryItem inventory_items = 20;
     */
    inventoryItems: AbridgedInventoryItem[];
    constructor(data?: PartialMessage<InventoryWorkInProgressStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryWorkInProgressStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryWorkInProgressStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryWorkInProgressStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryWorkInProgressStatistics;
    static equals(a: InventoryWorkInProgressStatistics | PlainMessage<InventoryWorkInProgressStatistics> | undefined, b: InventoryWorkInProgressStatistics | PlainMessage<InventoryWorkInProgressStatistics> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the indented inventory statistics for the given family ID
 *
 * @generated from message Scailo.InventoryIndentedStatistics
 */
export declare class InventoryIndentedStatistics extends Message<InventoryIndentedStatistics> {
    /**
     * List of abridged purchase indent items
     *
     * @generated from field: repeated Scailo.AbridgedPurchaseIndentItem purchase_indents = 10;
     */
    purchaseIndents: AbridgedPurchaseIndentItem[];
    /**
     * List of abridged purchase order items
     *
     * @generated from field: repeated Scailo.AbridgedPurchaseOrderItem purchase_orders = 20;
     */
    purchaseOrders: AbridgedPurchaseOrderItem[];
    constructor(data?: PartialMessage<InventoryIndentedStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryIndentedStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryIndentedStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryIndentedStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryIndentedStatistics;
    static equals(a: InventoryIndentedStatistics | PlainMessage<InventoryIndentedStatistics> | undefined, b: InventoryIndentedStatistics | PlainMessage<InventoryIndentedStatistics> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the ordered inventory statistics for the given family ID
 *
 * @generated from message Scailo.InventoryOrderedStatistics
 */
export declare class InventoryOrderedStatistics extends Message<InventoryOrderedStatistics> {
    /**
     * List of abridged purchase order items
     *
     * @generated from field: repeated Scailo.AbridgedPurchaseOrderItem purchase_orders = 10;
     */
    purchaseOrders: AbridgedPurchaseOrderItem[];
    /**
     * List of abridged goods receipt items
     *
     * @generated from field: repeated Scailo.AbridgedGoodsReceiptItem goods_receipts = 20;
     */
    goodsReceipts: AbridgedGoodsReceiptItem[];
    /**
     * List of abridged purchase return items
     *
     * @generated from field: repeated Scailo.AbridgedPurchaseReturnItem purchase_returns = 30;
     */
    purchaseReturns: AbridgedPurchaseReturnItem[];
    constructor(data?: PartialMessage<InventoryOrderedStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryOrderedStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryOrderedStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryOrderedStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryOrderedStatistics;
    static equals(a: InventoryOrderedStatistics | PlainMessage<InventoryOrderedStatistics> | undefined, b: InventoryOrderedStatistics | PlainMessage<InventoryOrderedStatistics> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the detailed demand statistics for the given family ID
 *
 * @generated from message Scailo.InventoryDetailedDemand
 */
export declare class InventoryDetailedDemand extends Message<InventoryDetailedDemand> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * The base demand quantity of the item (in cents)
     *
     * @generated from field: int64 base_demand_quantity = 20;
     */
    baseDemandQuantity: bigint;
    /**
     * The adjusted demand quantity of the item (in cents)
     *
     * @generated from field: int64 adjusted_demand_quantity = 30;
     */
    adjustedDemandQuantity: bigint;
    /**
     * The required quantity of the item (in cents)
     *
     * @generated from field: int64 required_quantity = 40;
     */
    requiredQuantity: bigint;
    /**
     * The map of the demand
     *
     * @generated from field: Scailo.InventoryDemandMap demand_map = 50;
     */
    demandMap?: InventoryDemandMap;
    /**
     * Represents if the resource is active
     *
     * @generated from field: bool is_active = 60;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when the resource was created
     *
     * @generated from field: uint64 created_at = 70;
     */
    createdAt: bigint;
    constructor(data?: PartialMessage<InventoryDetailedDemand>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryDetailedDemand";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryDetailedDemand;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryDetailedDemand;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryDetailedDemand;
    static equals(a: InventoryDetailedDemand | PlainMessage<InventoryDetailedDemand> | undefined, b: InventoryDetailedDemand | PlainMessage<InventoryDetailedDemand> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the demand map
 *
 * @generated from message Scailo.InventoryDemandMap
 */
export declare class InventoryDemandMap extends Message<InventoryDemandMap> {
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * The base demand list
     *
     * @generated from field: repeated Scailo.InventoryDemand base_demand_list = 20;
     */
    baseDemandList: InventoryDemand[];
    /**
     * The adjusted demand list
     *
     * @generated from field: repeated Scailo.InventoryDemand adjusted_demand_list = 30;
     */
    adjustedDemandList: InventoryDemand[];
    /**
     * The quantity of the base demand (in cents)
     *
     * @generated from field: int64 base_demand_quantity = 40;
     */
    baseDemandQuantity: bigint;
    /**
     * The quantity of the adjusted demand (in cents)
     *
     * @generated from field: int64 adjusted_demand_quantity = 50;
     */
    adjustedDemandQuantity: bigint;
    /**
     * The required quantity of the item (in cents)
     *
     * @generated from field: int64 required_quantity = 60;
     */
    requiredQuantity: bigint;
    /**
     * Stores if the item has been evaluated
     *
     * @generated from field: bool is_evaluated = 70;
     */
    isEvaluated: boolean;
    constructor(data?: PartialMessage<InventoryDemandMap>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryDemandMap";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryDemandMap;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryDemandMap;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryDemandMap;
    static equals(a: InventoryDemandMap | PlainMessage<InventoryDemandMap> | undefined, b: InventoryDemandMap | PlainMessage<InventoryDemandMap> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the demand
 *
 * @generated from message Scailo.InventoryDemand
 */
export declare class InventoryDemand extends Message<InventoryDemand> {
    /**
     * The type of the origin
     *
     * @generated from field: Scailo.INVENTORY_NODE_ORIGIN_TYPE origin_type = 10;
     */
    originType: INVENTORY_NODE_ORIGIN_TYPE;
    /**
     * The ID of the origin
     *
     * @generated from field: int64 origin_id = 20;
     */
    originId: bigint;
    /**
     * The quantity in the origin
     *
     * @generated from field: int64 quantity = 30;
     */
    quantity: bigint;
    /**
     * The multiplier that needs to be applied
     *
     * @generated from field: int64 multiplier = 40;
     */
    multiplier: bigint;
    /**
     * The computed total
     *
     * @generated from field: int64 total = 50;
     */
    total: bigint;
    /**
     * Stores if the quantity is positive
     *
     * @generated from field: bool is_positive_quantity = 60;
     */
    isPositiveQuantity: boolean;
    constructor(data?: PartialMessage<InventoryDemand>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryDemand";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryDemand;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryDemand;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryDemand;
    static equals(a: InventoryDemand | PlainMessage<InventoryDemand> | undefined, b: InventoryDemand | PlainMessage<InventoryDemand> | undefined): boolean;
}
//# sourceMappingURL=inventory.scailo_pb.d.ts.map
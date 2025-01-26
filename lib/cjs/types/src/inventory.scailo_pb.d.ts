import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EmployeeMetadata, INVENTORY_LIFECYCLE } from "./base.scailo_pb.js";
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
     * Stores the metadata of this product
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this product
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
     * The auto generated code of the product
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
     * The computed hash of the product
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
     * Stores an optional secondary unit of product
     *
     * @generated from field: uint64 secondary_uom_id = 39;
     */
    secondaryUomId: bigint;
    /**
     * Stores an optional quantity in the secondary unit of product
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
     * Stores the store to which the product is sent to
     *
     * @generated from field: uint64 store_id = 50;
     */
    storeId: bigint;
    /**
     * Stores an optional ID of the associated storage that the product is stored in
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
     * The description of the product
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
     * Stores the metadata of this product
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
//# sourceMappingURL=inventory.scailo_pb.d.ts.map
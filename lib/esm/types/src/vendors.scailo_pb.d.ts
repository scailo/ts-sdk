import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the price deviation limit type for an item associated to a vendor
 *
 * @generated from enum Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE
 */
export declare enum VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE {
    /**
     * Denotes that price limit type be disregarded. This is used only within search/filter APIs
     *
     * @generated from enum value: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED = 0;
     */
    VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the price limit type is a percentage
     *
     * @generated from enum value: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_PERCENTAGE = 1;
     */
    VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_PERCENTAGE = 1,
    /**
     * Denotes that the price limit type is an absolute value
     *
     * @generated from enum value: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ABSOLUTE = 2;
     */
    VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ABSOLUTE = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.VENDOR_SORT_KEY
 */
export declare enum VENDOR_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: VENDOR_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    VENDOR_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: VENDOR_SORT_KEY_CREATED_AT = 1;
     */
    VENDOR_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: VENDOR_SORT_KEY_MODIFIED_AT = 2;
     */
    VENDOR_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: VENDOR_SORT_KEY_APPROVED_ON = 3;
     */
    VENDOR_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: VENDOR_SORT_KEY_APPROVED_BY = 4;
     */
    VENDOR_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: VENDOR_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    VENDOR_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: VENDOR_SORT_KEY_NAME = 10;
     */
    VENDOR_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: VENDOR_SORT_KEY_CODE = 11;
     */
    VENDOR_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the email address
     *
     * @generated from enum value: VENDOR_SORT_KEY_EMAIL = 12;
     */
    VENDOR_SORT_KEY_EMAIL = 12,
    /**
     * Fetch ordered results by the phone number
     *
     * @generated from enum value: VENDOR_SORT_KEY_PHONE = 13;
     */
    VENDOR_SORT_KEY_PHONE = 13
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.VENDOR_ITEM_SORT_KEY
 */
export declare enum VENDOR_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    VENDOR_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    VENDOR_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    VENDOR_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    VENDOR_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    VENDOR_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    VENDOR_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    VENDOR_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the vendor family code
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_VENDOR_FAMILY_CODE = 11;
     */
    VENDOR_ITEM_SORT_KEY_VENDOR_FAMILY_CODE = 11,
    /**
     * Fetch ordered results by the unit of material ID
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_UOM_ID = 12;
     */
    VENDOR_ITEM_SORT_KEY_UOM_ID = 12,
    /**
     * Fetch ordered results by the tax group ID
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_TAX_GROUP_ID = 13;
     */
    VENDOR_ITEM_SORT_KEY_TAX_GROUP_ID = 13,
    /**
     * Fetch ordered results by the price
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_PRICE = 14;
     */
    VENDOR_ITEM_SORT_KEY_PRICE = 14,
    /**
     * Fetch ordered results by the minimum order quantity
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_MIN_ORDER_QTY = 15;
     */
    VENDOR_ITEM_SORT_KEY_MIN_ORDER_QTY = 15,
    /**
     * Fetch ordered results by the maximum order quantity
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_MAX_ORDER_QTY = 16;
     */
    VENDOR_ITEM_SORT_KEY_MAX_ORDER_QTY = 16,
    /**
     * Fetch ordered results by the step interval
     *
     * @generated from enum value: VENDOR_ITEM_SORT_KEY_STEP_INTERVAL = 17;
     */
    VENDOR_ITEM_SORT_KEY_STEP_INTERVAL = 17
}
/**
 *
 * Describes the applicable statuses of vendor items
 *
 * @generated from enum Scailo.VENDOR_ITEM_STATUS
 */
export declare enum VENDOR_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: VENDOR_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    VENDOR_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the vendor items must have been approved
     *
     * @generated from enum value: VENDOR_ITEM_STATUS_APPROVED = 1;
     */
    VENDOR_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the vendor items must be waiting for approval
     *
     * @generated from enum value: VENDOR_ITEM_STATUS_UNAPPROVED = 2;
     */
    VENDOR_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the applicable statuses of vendor users
 *
 * @generated from enum Scailo.VENDOR_USER_STATUS
 */
export declare enum VENDOR_USER_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: VENDOR_USER_STATUS_ANY_UNSPECIFIED = 0;
     */
    VENDOR_USER_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the vendor items must have been approved
     *
     * @generated from enum value: VENDOR_USER_STATUS_APPROVED = 1;
     */
    VENDOR_USER_STATUS_APPROVED = 1,
    /**
     * Denotes that the vendor items must be waiting for approval
     *
     * @generated from enum value: VENDOR_USER_STATUS_UNAPPROVED = 2;
     */
    VENDOR_USER_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.VendorsServiceCreateRequest
 */
export declare class VendorsServiceCreateRequest extends Message<VendorsServiceCreateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The name of the vendor
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the vendor is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the vendor
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the vendor
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<VendorsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServiceCreateRequest;
    static equals(a: VendorsServiceCreateRequest | PlainMessage<VendorsServiceCreateRequest> | undefined, b: VendorsServiceCreateRequest | PlainMessage<VendorsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.VendorsServiceUpdateRequest
 */
export declare class VendorsServiceUpdateRequest extends Message<VendorsServiceUpdateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The name of the vendor
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the vendor is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the vendor
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the vendor
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<VendorsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServiceUpdateRequest;
    static equals(a: VendorsServiceUpdateRequest | PlainMessage<VendorsServiceUpdateRequest> | undefined, b: VendorsServiceUpdateRequest | PlainMessage<VendorsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Vendor
 */
export declare class Vendor extends Message<Vendor> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor
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
     * The status of this vendor
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this vendor
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The name of the vendor
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the vendor is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the vendor
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the vendor
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Vendor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Vendor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vendor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vendor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vendor;
    static equals(a: Vendor | PlainMessage<Vendor> | undefined, b: Vendor | PlainMessage<Vendor> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a vendor
 *
 * @generated from message Scailo.VendorsServiceItemCreateRequest
 */
export declare class VendorsServiceItemCreateRequest extends Message<VendorsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the vendor ID
     *
     * @generated from field: uint64 vendor_id = 10;
     */
    vendorId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the optional family code as represented by the vendor
     *
     * @generated from field: string vendor_family_code = 12;
     */
    vendorFamilyCode: string;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 14;
     */
    taxGroupId: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 price = 15;
     */
    price: bigint;
    /**
     * The relative lower limit type on the price deviation of the item
     *
     * @generated from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_lower_limit_type = 46;
     */
    priceDeviationRelLowerLimitType: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE;
    /**
     * The relative lower limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final lower limit of the item is computed as (price - price_deviation_rel_lower_limit_value)
     *
     * @generated from field: int64 price_deviation_rel_lower_limit_value = 47;
     */
    priceDeviationRelLowerLimitValue: bigint;
    /**
     * The relative upper limit type on the price deviation of the item
     *
     * @generated from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_upper_limit_type = 48;
     */
    priceDeviationRelUpperLimitType: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE;
    /**
     * The relative upper limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final upper limit of the item is computed as (price + price_deviation_rel_upper_limit_value)
     *
     * @generated from field: int64 price_deviation_rel_upper_limit_value = 49;
     */
    priceDeviationRelUpperLimitValue: bigint;
    /**
     * The minimum order quantity that needs to be placed (in cents) (0.01 is the minimum)
     *
     * @generated from field: uint64 min_order_qty = 20;
     */
    minOrderQty: bigint;
    /**
     * The maximum order quantity that can be placed (in cents) (0 represents unlimited max quantity)
     *
     * @generated from field: uint64 max_order_qty = 21;
     */
    maxOrderQty: bigint;
    /**
     * The incremental count by which the order quantity can be increased (in cents)
     *
     * @generated from field: uint64 step_interval = 22;
     */
    stepInterval: bigint;
    constructor(data?: PartialMessage<VendorsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServiceItemCreateRequest;
    static equals(a: VendorsServiceItemCreateRequest | PlainMessage<VendorsServiceItemCreateRequest> | undefined, b: VendorsServiceItemCreateRequest | PlainMessage<VendorsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a vendor
 *
 * @generated from message Scailo.VendorsServiceItemUpdateRequest
 */
export declare class VendorsServiceItemUpdateRequest extends Message<VendorsServiceItemUpdateRequest> {
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
     * Stores the optional family code as represented by the vendor
     *
     * @generated from field: string vendor_family_code = 12;
     */
    vendorFamilyCode: string;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 14;
     */
    taxGroupId: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 price = 15;
     */
    price: bigint;
    /**
     * The relative lower limit type on the price deviation of the item
     *
     * @generated from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_lower_limit_type = 46;
     */
    priceDeviationRelLowerLimitType: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE;
    /**
     * The relative lower limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final lower limit of the item is computed as (price - price_deviation_rel_lower_limit_value)
     *
     * @generated from field: int64 price_deviation_rel_lower_limit_value = 47;
     */
    priceDeviationRelLowerLimitValue: bigint;
    /**
     * The relative upper limit type on the price deviation of the item
     *
     * @generated from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_upper_limit_type = 48;
     */
    priceDeviationRelUpperLimitType: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE;
    /**
     * The relative upper limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final upper limit of the item is computed as (price + price_deviation_rel_upper_limit_value)
     *
     * @generated from field: int64 price_deviation_rel_upper_limit_value = 49;
     */
    priceDeviationRelUpperLimitValue: bigint;
    /**
     * The minimum order quantity that needs to be placed (in cents) (0.01 is the minimum)
     *
     * @generated from field: uint64 min_order_qty = 20;
     */
    minOrderQty: bigint;
    /**
     * The maximum order quantity that can be placed (in cents) (0 represents unlimited max quantity)
     *
     * @generated from field: uint64 max_order_qty = 21;
     */
    maxOrderQty: bigint;
    /**
     * The incremental count by which the order quantity can be increased (in cents)
     *
     * @generated from field: uint64 step_interval = 22;
     */
    stepInterval: bigint;
    constructor(data?: PartialMessage<VendorsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServiceItemUpdateRequest;
    static equals(a: VendorsServiceItemUpdateRequest | PlainMessage<VendorsServiceItemUpdateRequest> | undefined, b: VendorsServiceItemUpdateRequest | PlainMessage<VendorsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a vendor
 *
 * @generated from message Scailo.VendorItem
 */
export declare class VendorItem extends Message<VendorItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor
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
     * Denotes if this record requires approval (or has been approved)
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval: boolean;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the vendor ID
     *
     * @generated from field: uint64 vendor_id = 10;
     */
    vendorId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the optional family code as represented by the vendor
     *
     * @generated from field: string vendor_family_code = 12;
     */
    vendorFamilyCode: string;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 14;
     */
    taxGroupId: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 price = 15;
     */
    price: bigint;
    /**
     * The relative lower limit type on the price deviation of the item
     *
     * @generated from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_lower_limit_type = 46;
     */
    priceDeviationRelLowerLimitType: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE;
    /**
     * The relative lower limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final lower limit of the item is computed as (price - price_deviation_rel_lower_limit_value)
     *
     * @generated from field: int64 price_deviation_rel_lower_limit_value = 47;
     */
    priceDeviationRelLowerLimitValue: bigint;
    /**
     * The relative upper limit type on the price deviation of the item
     *
     * @generated from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_upper_limit_type = 48;
     */
    priceDeviationRelUpperLimitType: VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE;
    /**
     * The relative upper limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final upper limit of the item is computed as (price + price_deviation_rel_upper_limit_value)
     *
     * @generated from field: int64 price_deviation_rel_upper_limit_value = 49;
     */
    priceDeviationRelUpperLimitValue: bigint;
    /**
     * The minimum order quantity that needs to be placed (in cents) (0.01 is the minimum)
     *
     * @generated from field: uint64 min_order_qty = 20;
     */
    minOrderQty: bigint;
    /**
     * The maximum order quantity that can be placed (in cents) (0 represents unlimited max quantity)
     *
     * @generated from field: uint64 max_order_qty = 21;
     */
    maxOrderQty: bigint;
    /**
     * The incremental count by which the order quantity can be increased (in cents)
     *
     * @generated from field: uint64 step_interval = 22;
     */
    stepInterval: bigint;
    constructor(data?: PartialMessage<VendorItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorItem;
    static equals(a: VendorItem | PlainMessage<VendorItem> | undefined, b: VendorItem | PlainMessage<VendorItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendors
 *
 * @generated from message Scailo.VendorsList
 */
export declare class VendorsList extends Message<VendorsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Vendor list = 1;
     */
    list: Vendor[];
    constructor(data?: PartialMessage<VendorsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsList;
    static equals(a: VendorsList | PlainMessage<VendorsList> | undefined, b: VendorsList | PlainMessage<VendorsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendor items
 *
 * @generated from message Scailo.VendorItemsList
 */
export declare class VendorItemsList extends Message<VendorItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorItem list = 1;
     */
    list: VendorItem[];
    constructor(data?: PartialMessage<VendorItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorItemsList;
    static equals(a: VendorItemsList | PlainMessage<VendorItemsList> | undefined, b: VendorItemsList | PlainMessage<VendorItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.VendorItemHistoryRequest
 */
export declare class VendorItemHistoryRequest extends Message<VendorItemHistoryRequest> {
    /**
     * Stores the vendor ID
     *
     * @generated from field: uint64 vendor_id = 10;
     */
    vendorId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    constructor(data?: PartialMessage<VendorItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorItemHistoryRequest;
    static equals(a: VendorItemHistoryRequest | PlainMessage<VendorItemHistoryRequest> | undefined, b: VendorItemHistoryRequest | PlainMessage<VendorItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.VendorsServicePaginationReq
 */
export declare class VendorsServicePaginationReq extends Message<VendorsServicePaginationReq> {
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
     * @generated from field: Scailo.VENDOR_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_SORT_KEY;
    /**
     * The status of this vendor
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<VendorsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServicePaginationReq;
    static equals(a: VendorsServicePaginationReq | PlainMessage<VendorsServicePaginationReq> | undefined, b: VendorsServicePaginationReq | PlainMessage<VendorsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.VendorsServicePaginationResponse
 */
export declare class VendorsServicePaginationResponse extends Message<VendorsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Vendor payload = 4;
     */
    payload: Vendor[];
    constructor(data?: PartialMessage<VendorsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServicePaginationResponse;
    static equals(a: VendorsServicePaginationResponse | PlainMessage<VendorsServicePaginationResponse> | undefined, b: VendorsServicePaginationResponse | PlainMessage<VendorsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.VendorsServiceFilterReq
 */
export declare class VendorsServiceFilterReq extends Message<VendorsServiceFilterReq> {
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
     * @generated from field: Scailo.VENDOR_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_SORT_KEY;
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
     * The status of this vendor
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
     * The name of the vendor
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the vendor is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The primary email of the vendor
     *
     * @generated from field: string email = 22;
     */
    email: string;
    /**
     * The primary contact number of the vendor
     *
     * @generated from field: string phone = 23;
     */
    phone: string;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<VendorsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServiceFilterReq;
    static equals(a: VendorsServiceFilterReq | PlainMessage<VendorsServiceFilterReq> | undefined, b: VendorsServiceFilterReq | PlainMessage<VendorsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.VendorsServiceCountReq
 */
export declare class VendorsServiceCountReq extends Message<VendorsServiceCountReq> {
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
     * The status of this vendor
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
     * The name of the vendor
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the vendor is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The primary email of the vendor
     *
     * @generated from field: string email = 22;
     */
    email: string;
    /**
     * The primary contact number of the vendor
     *
     * @generated from field: string phone = 23;
     */
    phone: string;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<VendorsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServiceCountReq;
    static equals(a: VendorsServiceCountReq | PlainMessage<VendorsServiceCountReq> | undefined, b: VendorsServiceCountReq | PlainMessage<VendorsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.VendorsServiceSearchAllReq
 */
export declare class VendorsServiceSearchAllReq extends Message<VendorsServiceSearchAllReq> {
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
     * @generated from field: Scailo.VENDOR_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_SORT_KEY;
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
    constructor(data?: PartialMessage<VendorsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServiceSearchAllReq;
    static equals(a: VendorsServiceSearchAllReq | PlainMessage<VendorsServiceSearchAllReq> | undefined, b: VendorsServiceSearchAllReq | PlainMessage<VendorsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.VendorItemsSearchRequest
 */
export declare class VendorItemsSearchRequest extends Message<VendorItemsSearchRequest> {
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
     * @generated from field: Scailo.VENDOR_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.VENDOR_ITEM_STATUS status = 7;
     */
    status: VENDOR_ITEM_STATUS;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 10;
     */
    vendorId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The vendor's family code
     *
     * @generated from field: string vendor_family_code = 12;
     */
    vendorFamilyCode: string;
    /**
     * The ID of the unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 14;
     */
    taxGroupId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 20;
     */
    searchKey: string;
    constructor(data?: PartialMessage<VendorItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorItemsSearchRequest;
    static equals(a: VendorItemsSearchRequest | PlainMessage<VendorItemsSearchRequest> | undefined, b: VendorItemsSearchRequest | PlainMessage<VendorItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.VendorsServicePaginatedItemsResponse
 */
export declare class VendorsServicePaginatedItemsResponse extends Message<VendorsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.VendorItem payload = 4;
     */
    payload: VendorItem[];
    constructor(data?: PartialMessage<VendorsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServicePaginatedItemsResponse;
    static equals(a: VendorsServicePaginatedItemsResponse | PlainMessage<VendorsServicePaginatedItemsResponse> | undefined, b: VendorsServicePaginatedItemsResponse | PlainMessage<VendorsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the vendor item that also stores the quantity that is required
 *
 * @generated from message Scailo.VendorItemRequired
 */
export declare class VendorItemRequired extends Message<VendorItemRequired> {
    /**
     * The applicable vendor item
     *
     * @generated from field: Scailo.VendorItem item = 1;
     */
    item?: VendorItem;
    /**
     * The quantity that is required
     *
     * @generated from field: uint64 required_qty = 10;
     */
    requiredQty: bigint;
    constructor(data?: PartialMessage<VendorItemRequired>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorItemRequired";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorItemRequired;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorItemRequired;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorItemRequired;
    static equals(a: VendorItemRequired | PlainMessage<VendorItemRequired> | undefined, b: VendorItemRequired | PlainMessage<VendorItemRequired> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request for items with applicable required quantities
 *
 * @generated from message Scailo.VendorsServicePaginatedRequiredItemsResponse
 */
export declare class VendorsServicePaginatedRequiredItemsResponse extends Message<VendorsServicePaginatedRequiredItemsResponse> {
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
     * @generated from field: repeated Scailo.VendorItemRequired payload = 4;
     */
    payload: VendorItemRequired[];
    constructor(data?: PartialMessage<VendorsServicePaginatedRequiredItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServicePaginatedRequiredItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServicePaginatedRequiredItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServicePaginatedRequiredItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServicePaginatedRequiredItemsResponse;
    static equals(a: VendorsServicePaginatedRequiredItemsResponse | PlainMessage<VendorsServicePaginatedRequiredItemsResponse> | undefined, b: VendorsServicePaginatedRequiredItemsResponse | PlainMessage<VendorsServicePaginatedRequiredItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a vendor user
 *
 * @generated from message Scailo.VendorsServiceUserCreateRequest
 */
export declare class VendorsServiceUserCreateRequest extends Message<VendorsServiceUserCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the vendor ID
     *
     * @generated from field: uint64 vendor_id = 10;
     */
    vendorId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores an optional associate ID
     *
     * @generated from field: uint64 associate_id = 12;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<VendorsServiceUserCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServiceUserCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServiceUserCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServiceUserCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServiceUserCreateRequest;
    static equals(a: VendorsServiceUserCreateRequest | PlainMessage<VendorsServiceUserCreateRequest> | undefined, b: VendorsServiceUserCreateRequest | PlainMessage<VendorsServiceUserCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a vendor user
 *
 * @generated from message Scailo.VendorUser
 */
export declare class VendorUser extends Message<VendorUser> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor
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
     * Denotes if this record requires approval (or has been approved)
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval: boolean;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the vendor ID
     *
     * @generated from field: uint64 vendor_id = 10;
     */
    vendorId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores an optional associate ID
     *
     * @generated from field: uint64 associate_id = 12;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<VendorUser>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorUser";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorUser;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorUser;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorUser;
    static equals(a: VendorUser | PlainMessage<VendorUser> | undefined, b: VendorUser | PlainMessage<VendorUser> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendor users
 *
 * @generated from message Scailo.VendorUsersList
 */
export declare class VendorUsersList extends Message<VendorUsersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorUser list = 1;
     */
    list: VendorUser[];
    constructor(data?: PartialMessage<VendorUsersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorUsersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorUsersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorUsersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorUsersList;
    static equals(a: VendorUsersList | PlainMessage<VendorUsersList> | undefined, b: VendorUsersList | PlainMessage<VendorUsersList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to search vendor users
 *
 * @generated from message Scailo.VendorUsersSearchRequest
 */
export declare class VendorUsersSearchRequest extends Message<VendorUsersSearchRequest> {
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
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the users
     *
     * @generated from field: Scailo.VENDOR_USER_STATUS status = 7;
     */
    status: VENDOR_USER_STATUS;
    /**
     * Stores the vendor ID
     *
     * @generated from field: uint64 vendor_id = 10;
     */
    vendorId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores an optional associate ID
     *
     * @generated from field: uint64 associate_id = 12;
     */
    associateId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 20;
     */
    searchKey: string;
    constructor(data?: PartialMessage<VendorUsersSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorUsersSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorUsersSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorUsersSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorUsersSearchRequest;
    static equals(a: VendorUsersSearchRequest | PlainMessage<VendorUsersSearchRequest> | undefined, b: VendorUsersSearchRequest | PlainMessage<VendorUsersSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.VendorsServicePaginatedUsersResponse
 */
export declare class VendorsServicePaginatedUsersResponse extends Message<VendorsServicePaginatedUsersResponse> {
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
     * @generated from field: repeated Scailo.VendorUser payload = 4;
     */
    payload: VendorUser[];
    constructor(data?: PartialMessage<VendorsServicePaginatedUsersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorsServicePaginatedUsersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorsServicePaginatedUsersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorsServicePaginatedUsersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorsServicePaginatedUsersResponse;
    static equals(a: VendorsServicePaginatedUsersResponse | PlainMessage<VendorsServicePaginatedUsersResponse> | undefined, b: VendorsServicePaginatedUsersResponse | PlainMessage<VendorsServicePaginatedUsersResponse> | undefined): boolean;
}
//# sourceMappingURL=vendors.scailo_pb.d.ts.map
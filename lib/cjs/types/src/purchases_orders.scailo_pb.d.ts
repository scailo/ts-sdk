import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_ORDER_SORT_KEY
 */
export declare enum PURCHASE_ORDER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_ORDER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_ORDER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_ORDER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_ORDER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_ORDER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_COMPLETED_ON = 6;
     */
    PURCHASE_ORDER_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_REFERENCE_ID = 10;
     */
    PURCHASE_ORDER_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PURCHASE_ORDER_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the consignee location ID
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_CONSIGNEE_LOCATION_ID = 12;
     */
    PURCHASE_ORDER_SORT_KEY_CONSIGNEE_LOCATION_ID = 12,
    /**
     * Fetch ordered results by the buyer location ID
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_BUYER_LOCATION_ID = 13;
     */
    PURCHASE_ORDER_SORT_KEY_BUYER_LOCATION_ID = 13,
    /**
     * Fetch ordered results by the vendor ID
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_VENDOR_ID = 14;
     */
    PURCHASE_ORDER_SORT_KEY_VENDOR_ID = 14,
    /**
     * Fetch ordered results by the currency ID
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_CURRENCY_ID = 15;
     */
    PURCHASE_ORDER_SORT_KEY_CURRENCY_ID = 15,
    /**
     * Fetch ordered results by the project ID
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_PROJECT_ID = 16;
     */
    PURCHASE_ORDER_SORT_KEY_PROJECT_ID = 16,
    /**
     * Fetch ordered results by the advance payment
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_PAYMENT_ADVANCE = 17;
     */
    PURCHASE_ORDER_SORT_KEY_PAYMENT_ADVANCE = 17,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    PURCHASE_ORDER_SORT_KEY_AMENDMENT_COUNT = 18,
    /**
     * Fetch ordered results by the total value
     *
     * @generated from enum value: PURCHASE_ORDER_SORT_KEY_TOTAL_VALUE = 30;
     */
    PURCHASE_ORDER_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Describes the purchase order reference context
 *
 * @generated from enum Scailo.PURCHASE_ORDER_REFERENCE_CONTEXT
 */
export declare enum PURCHASE_ORDER_REFERENCE_CONTEXT {
    /**
     * Denotes that context be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0,
    /**
     * Denotes buying context
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_CONTEXT_BUYING = 1;
     */
    PURCHASE_ORDER_REFERENCE_CONTEXT_BUYING = 1,
    /**
     * Denotes billing context
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_CONTEXT_BILLING = 2;
     */
    PURCHASE_ORDER_REFERENCE_CONTEXT_BILLING = 2
}
/**
 *
 * Describes the possible options for ref_from field for a purchase order reference
 *
 * @generated from enum Scailo.PURCHASE_ORDER_REFERENCE_REF_FROM
 */
export declare enum PURCHASE_ORDER_REFERENCE_REF_FROM {
    /**
     * Denotes that the ref from be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_ORDER_REFERENCE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes purchase indent
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_REF_FROM_PURCHASE_INDENT = 1;
     */
    PURCHASE_ORDER_REFERENCE_REF_FROM_PURCHASE_INDENT = 1,
    /**
     * Denotes outward job
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_REF_FROM_OUTWARD_JOB = 2;
     */
    PURCHASE_ORDER_REFERENCE_REF_FROM_OUTWARD_JOB = 2,
    /**
     * Denotes quotation response
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_REF_FROM_QUOTATION_RESPONSE = 3;
     */
    PURCHASE_ORDER_REFERENCE_REF_FROM_QUOTATION_RESPONSE = 3,
    /**
     * Denotes sales order
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_REF_FROM_SALES_ORDER = 4;
     */
    PURCHASE_ORDER_REFERENCE_REF_FROM_SALES_ORDER = 4,
    /**
     * Denotes work order
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_REF_FROM_WORK_ORDER = 5;
     */
    PURCHASE_ORDER_REFERENCE_REF_FROM_WORK_ORDER = 5,
    /**
     * Denotes purchase order
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_REF_FROM_PURCHASE_ORDER = 6;
     */
    PURCHASE_ORDER_REFERENCE_REF_FROM_PURCHASE_ORDER = 6,
    /**
     * Denotes sales invoice
     *
     * @generated from enum value: PURCHASE_ORDER_REFERENCE_REF_FROM_SALES_INVOICE = 7;
     */
    PURCHASE_ORDER_REFERENCE_REF_FROM_SALES_INVOICE = 7
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_ORDER_ITEM_SORT_KEY
 */
export declare enum PURCHASE_ORDER_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the vendor unit of material ID
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_VENDOR_UOM_ID = 12;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_VENDOR_UOM_ID = 12,
    /**
     * Fetch ordered results by the vendor quantity
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_VENDOR_QUANTITY = 13;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_VENDOR_QUANTITY = 13,
    /**
     * Fetch ordered results by the vendor unit price
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_VENDOR_UNIT_PRICE = 14;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_VENDOR_UNIT_PRICE = 14,
    /**
     * Fetch ordered results by the tax group ID
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_TAX_GROUP_ID = 15;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_TAX_GROUP_ID = 15,
    /**
     * Fetch ordered results by the discount
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_DISCOUNT = 16;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_DISCOUNT = 16,
    /**
     * Fetch ordered results by the delivery date
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_SORT_KEY_DELIVERY_DATE = 17;
     */
    PURCHASE_ORDER_ITEM_SORT_KEY_DELIVERY_DATE = 17
}
/**
 *
 * Describes the applicable statuses of purchase order items
 *
 * @generated from enum Scailo.PURCHASE_ORDER_ITEM_STATUS
 */
export declare enum PURCHASE_ORDER_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_ORDER_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the purchase order items must have been approved
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_STATUS_APPROVED = 1;
     */
    PURCHASE_ORDER_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the purchase order items must be waiting for approval
     *
     * @generated from enum value: PURCHASE_ORDER_ITEM_STATUS_UNAPPROVED = 2;
     */
    PURCHASE_ORDER_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.PurchasesOrdersServiceCreateRequest
 */
export declare class PurchasesOrdersServiceCreateRequest extends Message<PurchasesOrdersServiceCreateRequest> {
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
     * The reference ID of the purchase order
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The location ID of the consignee
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The location ID of the buyer
     *
     * @generated from field: uint64 buyer_location_id = 13;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 14;
     */
    vendorId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The amount paid in advance
     *
     * @generated from field: uint64 payment_advance = 20;
     */
    paymentAdvance: bigint;
    /**
     * The payment cycle in days
     *
     * @generated from field: uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<PurchasesOrdersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceCreateRequest;
    static equals(a: PurchasesOrdersServiceCreateRequest | PlainMessage<PurchasesOrdersServiceCreateRequest> | undefined, b: PurchasesOrdersServiceCreateRequest | PlainMessage<PurchasesOrdersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.PurchasesOrdersServiceUpdateRequest
 */
export declare class PurchasesOrdersServiceUpdateRequest extends Message<PurchasesOrdersServiceUpdateRequest> {
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
     * The reference ID of the purchase order
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The location ID of the consignee
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The location ID of the buyer
     *
     * @generated from field: uint64 buyer_location_id = 13;
     */
    buyerLocationId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The amount paid in advance
     *
     * @generated from field: uint64 payment_advance = 20;
     */
    paymentAdvance: bigint;
    /**
     * The payment cycle in days
     *
     * @generated from field: uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<PurchasesOrdersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceUpdateRequest;
    static equals(a: PurchasesOrdersServiceUpdateRequest | PlainMessage<PurchasesOrdersServiceUpdateRequest> | undefined, b: PurchasesOrdersServiceUpdateRequest | PlainMessage<PurchasesOrdersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.PurchasesOrdersServiceAutofillRequest
 */
export declare class PurchasesOrdersServiceAutofillRequest extends Message<PurchasesOrdersServiceAutofillRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The UUID of the record that needs to be updated
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * Stores if referenced items should be consolidated
     *
     * @generated from field: bool consolidate_referenced_items = 10;
     */
    consolidateReferencedItems: boolean;
    constructor(data?: PartialMessage<PurchasesOrdersServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceAutofillRequest;
    static equals(a: PurchasesOrdersServiceAutofillRequest | PlainMessage<PurchasesOrdersServiceAutofillRequest> | undefined, b: PurchasesOrdersServiceAutofillRequest | PlainMessage<PurchasesOrdersServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.PurchaseOrderAncillaryParameters
 */
export declare class PurchaseOrderAncillaryParameters extends Message<PurchaseOrderAncillaryParameters> {
    /**
     * The UUID of the consignee location (the UUID of the associated consignee_location_id)
     *
     * @generated from field: string consignee_location_uuid = 212;
     */
    consigneeLocationUuid: string;
    /**
     * The UUID of the buyer location (the UUID of the associated buyer_location_id)
     *
     * @generated from field: string buyer_location_uuid = 213;
     */
    buyerLocationUuid: string;
    /**
     * The UUID of the vendor (the UUID of the associated vendor_id)
     *
     * @generated from field: string vendor_uuid = 214;
     */
    vendorUuid: string;
    /**
     * The UUID of the currency (the UUID of the associated currency)
     *
     * @generated from field: string currency_uuid = 215;
     */
    currencyUuid: string;
    constructor(data?: PartialMessage<PurchaseOrderAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderAncillaryParameters;
    static equals(a: PurchaseOrderAncillaryParameters | PlainMessage<PurchaseOrderAncillaryParameters> | undefined, b: PurchaseOrderAncillaryParameters | PlainMessage<PurchaseOrderAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.PurchaseOrder
 */
export declare class PurchaseOrder extends Message<PurchaseOrder> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase order
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
     * The status of this purchase order
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this purchase order
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this purchase order was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the purchase order
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     * The location ID of the consignee
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The location ID of the buyer
     *
     * @generated from field: uint64 buyer_location_id = 13;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 14;
     */
    vendorId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The amount paid in advance
     *
     * @generated from field: uint64 payment_advance = 20;
     */
    paymentAdvance: bigint;
    /**
     * The payment cycle in days
     *
     * @generated from field: uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays: bigint;
    /**
     * The number of times that the purchase order has been amended
     *
     * @generated from field: uint64 amendment_count = 22;
     */
    amendmentCount: bigint;
    /**
     * Stores the total value of the purchase order (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 30;
     */
    totalValue: number;
    /**
     * The list of associated purchase order items
     *
     * @generated from field: repeated Scailo.PurchaseOrderItem list = 40;
     */
    list: PurchaseOrderItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 50;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<PurchaseOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrder;
    static equals(a: PurchaseOrder | PlainMessage<PurchaseOrder> | undefined, b: PurchaseOrder | PlainMessage<PurchaseOrder> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a purchase order
 *
 * @generated from message Scailo.PurchasesOrdersServiceItemCreateRequest
 */
export declare class PurchasesOrdersServiceItemCreateRequest extends Message<PurchasesOrdersServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being ordered in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 vendor_unit_price = 15;
     */
    vendorUnitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 17;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<PurchasesOrdersServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceItemCreateRequest;
    static equals(a: PurchasesOrdersServiceItemCreateRequest | PlainMessage<PurchasesOrdersServiceItemCreateRequest> | undefined, b: PurchasesOrdersServiceItemCreateRequest | PlainMessage<PurchasesOrdersServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a purchase order
 *
 * @generated from message Scailo.PurchasesOrdersServiceItemUpdateRequest
 */
export declare class PurchasesOrdersServiceItemUpdateRequest extends Message<PurchasesOrdersServiceItemUpdateRequest> {
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
     * The quantity (in cents) being ordered in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 vendor_unit_price = 15;
     */
    vendorUnitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 17;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<PurchasesOrdersServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceItemUpdateRequest;
    static equals(a: PurchasesOrdersServiceItemUpdateRequest | PlainMessage<PurchasesOrdersServiceItemUpdateRequest> | undefined, b: PurchasesOrdersServiceItemUpdateRequest | PlainMessage<PurchasesOrdersServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a purchase order
 *
 * @generated from message Scailo.PurchaseOrderItem
 */
export declare class PurchaseOrderItem extends Message<PurchaseOrderItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase order
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
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being ordered in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 vendor_unit_price = 15;
     */
    vendorUnitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 17;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    /**
     * Stores the vendor unit price after factoring in the discount
     *
     * @generated from field: uint64 discounted_vendor_unit_price = 30;
     */
    discountedVendorUnitPrice: bigint;
    /**
     * ----------------------------------------
     * The UUID of the associated purchase order
     *
     * @generated from field: string purchase_order_uuid = 110;
     */
    purchaseOrderUuid: string;
    /**
     * The UUID of the associated family
     *
     * ----------------------------------------
     *
     * @generated from field: string family_uuid = 111;
     */
    familyUuid: string;
    constructor(data?: PartialMessage<PurchaseOrderItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderItem;
    static equals(a: PurchaseOrderItem | PlainMessage<PurchaseOrderItem> | undefined, b: PurchaseOrderItem | PlainMessage<PurchaseOrderItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchase orders
 *
 * @generated from message Scailo.PurchasesOrdersList
 */
export declare class PurchasesOrdersList extends Message<PurchasesOrdersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseOrder list = 1;
     */
    list: PurchaseOrder[];
    constructor(data?: PartialMessage<PurchasesOrdersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersList;
    static equals(a: PurchasesOrdersList | PlainMessage<PurchasesOrdersList> | undefined, b: PurchasesOrdersList | PlainMessage<PurchasesOrdersList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchase order items
 *
 * @generated from message Scailo.PurchaseOrderItemsList
 */
export declare class PurchaseOrderItemsList extends Message<PurchaseOrderItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseOrderItem list = 1;
     */
    list: PurchaseOrderItem[];
    constructor(data?: PartialMessage<PurchaseOrderItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderItemsList;
    static equals(a: PurchaseOrderItemsList | PlainMessage<PurchaseOrderItemsList> | undefined, b: PurchaseOrderItemsList | PlainMessage<PurchaseOrderItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.PurchaseOrderItemHistoryRequest
 */
export declare class PurchaseOrderItemHistoryRequest extends Message<PurchaseOrderItemHistoryRequest> {
    /**
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<PurchaseOrderItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderItemHistoryRequest;
    static equals(a: PurchaseOrderItemHistoryRequest | PlainMessage<PurchaseOrderItemHistoryRequest> | undefined, b: PurchaseOrderItemHistoryRequest | PlainMessage<PurchaseOrderItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective purchase order item
 *
 * @generated from message Scailo.PurchaseOrderItemProspectiveInfoRequest
 */
export declare class PurchaseOrderItemProspectiveInfoRequest extends Message<PurchaseOrderItemProspectiveInfoRequest> {
    /**
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the ID of the vendor's unit of material (if 0, the value is ignored while retrieving records)
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    constructor(data?: PartialMessage<PurchaseOrderItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderItemProspectiveInfoRequest;
    static equals(a: PurchaseOrderItemProspectiveInfoRequest | PlainMessage<PurchaseOrderItemProspectiveInfoRequest> | undefined, b: PurchaseOrderItemProspectiveInfoRequest | PlainMessage<PurchaseOrderItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.PurchasesOrdersServicePaginationReq
 */
export declare class PurchasesOrdersServicePaginationReq extends Message<PurchasesOrdersServicePaginationReq> {
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
     * @generated from field: Scailo.PURCHASE_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_ORDER_SORT_KEY;
    /**
     * The status of this purchase order
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<PurchasesOrdersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServicePaginationReq;
    static equals(a: PurchasesOrdersServicePaginationReq | PlainMessage<PurchasesOrdersServicePaginationReq> | undefined, b: PurchasesOrdersServicePaginationReq | PlainMessage<PurchasesOrdersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.PurchasesOrdersServicePaginationResponse
 */
export declare class PurchasesOrdersServicePaginationResponse extends Message<PurchasesOrdersServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.PurchaseOrder payload = 4;
     */
    payload: PurchaseOrder[];
    constructor(data?: PartialMessage<PurchasesOrdersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServicePaginationResponse;
    static equals(a: PurchasesOrdersServicePaginationResponse | PlainMessage<PurchasesOrdersServicePaginationResponse> | undefined, b: PurchasesOrdersServicePaginationResponse | PlainMessage<PurchasesOrdersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.PurchasesOrdersServiceFilterReq
 */
export declare class PurchasesOrdersServiceFilterReq extends Message<PurchasesOrdersServiceFilterReq> {
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
     * @generated from field: Scailo.PURCHASE_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_ORDER_SORT_KEY;
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
     * The status of this purchase order
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
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The reference ID of the purchase order
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated consignee location ID
     *
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
    /**
     * The associated buyer location ID
     *
     * @generated from field: uint64 buyer_location_id = 23;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 24;
     */
    vendorId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 25;
     */
    currencyId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The exact delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    /**
     * Stores the minimum value of the purchase order (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 50;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the purchase order (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 51;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<PurchasesOrdersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceFilterReq;
    static equals(a: PurchasesOrdersServiceFilterReq | PlainMessage<PurchasesOrdersServiceFilterReq> | undefined, b: PurchasesOrdersServiceFilterReq | PlainMessage<PurchasesOrdersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.PurchasesOrdersServiceCountReq
 */
export declare class PurchasesOrdersServiceCountReq extends Message<PurchasesOrdersServiceCountReq> {
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
     * The status of this purchase order
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
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The reference ID of the purchase order
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated consignee location ID
     *
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
    /**
     * The associated buyer location ID
     *
     * @generated from field: uint64 buyer_location_id = 23;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 24;
     */
    vendorId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 25;
     */
    currencyId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The exact delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    /**
     * Stores the minimum value of the purchase order (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 50;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the purchase order (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 51;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<PurchasesOrdersServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceCountReq;
    static equals(a: PurchasesOrdersServiceCountReq | PlainMessage<PurchasesOrdersServiceCountReq> | undefined, b: PurchasesOrdersServiceCountReq | PlainMessage<PurchasesOrdersServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.PurchasesOrdersServiceSearchAllReq
 */
export declare class PurchasesOrdersServiceSearchAllReq extends Message<PurchasesOrdersServiceSearchAllReq> {
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
     * @generated from field: Scailo.PURCHASE_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_ORDER_SORT_KEY;
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
     * The associated consignee location ID
     *
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
    /**
     * The associated buyer location ID
     *
     * @generated from field: uint64 buyer_location_id = 23;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 24;
     */
    vendorId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 25;
     */
    currencyId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<PurchasesOrdersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceSearchAllReq;
    static equals(a: PurchasesOrdersServiceSearchAllReq | PlainMessage<PurchasesOrdersServiceSearchAllReq> | undefined, b: PurchasesOrdersServiceSearchAllReq | PlainMessage<PurchasesOrdersServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a purchase order reference
 *
 * @generated from message Scailo.PurchasesOrdersServiceReferenceCreateRequest
 */
export declare class PurchasesOrdersServiceReferenceCreateRequest extends Message<PurchasesOrdersServiceReferenceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * The reference context, could be billing or buying
     *
     * @generated from field: Scailo.PURCHASE_ORDER_REFERENCE_CONTEXT context = 11;
     */
    context: PURCHASE_ORDER_REFERENCE_CONTEXT;
    /**
     * The associated ref from
     *
     * @generated from field: Scailo.PURCHASE_ORDER_REFERENCE_REF_FROM ref_from = 12;
     */
    refFrom: PURCHASE_ORDER_REFERENCE_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    constructor(data?: PartialMessage<PurchasesOrdersServiceReferenceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceReferenceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceReferenceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceReferenceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceReferenceCreateRequest;
    static equals(a: PurchasesOrdersServiceReferenceCreateRequest | PlainMessage<PurchasesOrdersServiceReferenceCreateRequest> | undefined, b: PurchasesOrdersServiceReferenceCreateRequest | PlainMessage<PurchasesOrdersServiceReferenceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a purchase order reference
 *
 * @generated from message Scailo.PurchaseOrderReference
 */
export declare class PurchaseOrderReference extends Message<PurchaseOrderReference> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase order
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
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * The reference context, could be billing or buying
     *
     * @generated from field: Scailo.PURCHASE_ORDER_REFERENCE_CONTEXT context = 11;
     */
    context: PURCHASE_ORDER_REFERENCE_CONTEXT;
    /**
     * The associated ref from
     *
     * @generated from field: Scailo.PURCHASE_ORDER_REFERENCE_REF_FROM ref_from = 12;
     */
    refFrom: PURCHASE_ORDER_REFERENCE_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    constructor(data?: PartialMessage<PurchaseOrderReference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderReference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderReference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderReference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderReference;
    static equals(a: PurchaseOrderReference | PlainMessage<PurchaseOrderReference> | undefined, b: PurchaseOrderReference | PlainMessage<PurchaseOrderReference> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchase order references
 *
 * @generated from message Scailo.PurchaseOrderReferencesList
 */
export declare class PurchaseOrderReferencesList extends Message<PurchaseOrderReferencesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseOrderReference list = 1;
     */
    list: PurchaseOrderReference[];
    constructor(data?: PartialMessage<PurchaseOrderReferencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderReferencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderReferencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderReferencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderReferencesList;
    static equals(a: PurchaseOrderReferencesList | PlainMessage<PurchaseOrderReferencesList> | undefined, b: PurchaseOrderReferencesList | PlainMessage<PurchaseOrderReferencesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.PurchaseOrderItemsSearchRequest
 */
export declare class PurchaseOrderItemsSearchRequest extends Message<PurchaseOrderItemsSearchRequest> {
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
     * @generated from field: Scailo.PURCHASE_ORDER_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_ORDER_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.PURCHASE_ORDER_ITEM_STATUS status = 7;
     */
    status: PURCHASE_ORDER_ITEM_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 10;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 11;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 12;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 13;
     */
    approverRoleId: bigint;
    /**
     * The ID of the purchase order
     *
     * @generated from field: uint64 purchase_order_id = 20;
     */
    purchaseOrderId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 22;
     */
    vendorUomId: bigint;
    /**
     * The ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 23;
     */
    taxGroupId: bigint;
    /**
     * The exact delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_end = 30;
     */
    deliveryDateEnd: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    /**
     * ------------------------------------------
     * Extra filters
     * The ID of the associated vendor
     *
     * ------------------------------------------
     *
     * @generated from field: uint64 vendor_id = 200;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<PurchaseOrderItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderItemsSearchRequest;
    static equals(a: PurchaseOrderItemsSearchRequest | PlainMessage<PurchaseOrderItemsSearchRequest> | undefined, b: PurchaseOrderItemsSearchRequest | PlainMessage<PurchaseOrderItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.PurchasesOrdersServicePaginatedItemsResponse
 */
export declare class PurchasesOrdersServicePaginatedItemsResponse extends Message<PurchasesOrdersServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.PurchaseOrderItem payload = 4;
     */
    payload: PurchaseOrderItem[];
    constructor(data?: PartialMessage<PurchasesOrdersServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServicePaginatedItemsResponse;
    static equals(a: PurchasesOrdersServicePaginatedItemsResponse | PlainMessage<PurchasesOrdersServicePaginatedItemsResponse> | undefined, b: PurchasesOrdersServicePaginatedItemsResponse | PlainMessage<PurchasesOrdersServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a purchase order contact
 *
 * @generated from message Scailo.PurchasesOrdersServiceContactCreateRequest
 */
export declare class PurchasesOrdersServiceContactCreateRequest extends Message<PurchasesOrdersServiceContactCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<PurchasesOrdersServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesOrdersServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesOrdersServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesOrdersServiceContactCreateRequest;
    static equals(a: PurchasesOrdersServiceContactCreateRequest | PlainMessage<PurchasesOrdersServiceContactCreateRequest> | undefined, b: PurchasesOrdersServiceContactCreateRequest | PlainMessage<PurchasesOrdersServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a purchase order contact
 *
 * @generated from message Scailo.PurchaseOrderContact
 */
export declare class PurchaseOrderContact extends Message<PurchaseOrderContact> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase order
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
     * Stores the purchase order ID
     *
     * @generated from field: uint64 purchase_order_id = 10;
     */
    purchaseOrderId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    /**
     * Stores the UUID of the associate
     *
     * @generated from field: string associate_uuid = 211;
     */
    associateUuid: string;
    constructor(data?: PartialMessage<PurchaseOrderContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderContact;
    static equals(a: PurchaseOrderContact | PlainMessage<PurchaseOrderContact> | undefined, b: PurchaseOrderContact | PlainMessage<PurchaseOrderContact> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchase order contacts
 *
 * @generated from message Scailo.PurchaseOrderContactsList
 */
export declare class PurchaseOrderContactsList extends Message<PurchaseOrderContactsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseOrderContact list = 1;
     */
    list: PurchaseOrderContact[];
    constructor(data?: PartialMessage<PurchaseOrderContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderContactsList;
    static equals(a: PurchaseOrderContactsList | PlainMessage<PurchaseOrderContactsList> | undefined, b: PurchaseOrderContactsList | PlainMessage<PurchaseOrderContactsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a purchase order's inventory statistics payload
 *
 * @generated from message Scailo.PurchaseOrderInventoryStatistics
 */
export declare class PurchaseOrderInventoryStatistics extends Message<PurchaseOrderInventoryStatistics> {
    /**
     * Stores the cumulative quantity of the ordered inventory
     *
     * @generated from field: uint64 ordered = 1;
     */
    ordered: bigint;
    /**
     * Stores the cumulative quantity of the received inventory
     *
     * @generated from field: uint64 received = 2;
     */
    received: bigint;
    /**
     * Stores the cumulative quantity of the returned inventory
     *
     * @generated from field: uint64 returned = 3;
     */
    returned: bigint;
    constructor(data?: PartialMessage<PurchaseOrderInventoryStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderInventoryStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderInventoryStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderInventoryStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderInventoryStatistics;
    static equals(a: PurchaseOrderInventoryStatistics | PlainMessage<PurchaseOrderInventoryStatistics> | undefined, b: PurchaseOrderInventoryStatistics | PlainMessage<PurchaseOrderInventoryStatistics> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a purchase order's billing statistics payload
 *
 * @generated from message Scailo.PurchaseOrderBillingStatistics
 */
export declare class PurchaseOrderBillingStatistics extends Message<PurchaseOrderBillingStatistics> {
    /**
     * Stores the cumulative quantity of the ordered inventory
     *
     * @generated from field: uint64 ordered = 1;
     */
    ordered: bigint;
    /**
     * Stores the cumulative quantity of the billed inventory
     *
     * @generated from field: uint64 billed = 2;
     */
    billed: bigint;
    /**
     * Stores the cumulative quantity of the debited inventory
     *
     * @generated from field: uint64 debited = 3;
     */
    debited: bigint;
    constructor(data?: PartialMessage<PurchaseOrderBillingStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderBillingStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderBillingStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderBillingStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderBillingStatistics;
    static equals(a: PurchaseOrderBillingStatistics | PlainMessage<PurchaseOrderBillingStatistics> | undefined, b: PurchaseOrderBillingStatistics | PlainMessage<PurchaseOrderBillingStatistics> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a purchase order's inventory match
 *
 * @generated from message Scailo.PurchaseOrderInventoryMatch
 */
export declare class PurchaseOrderInventoryMatch extends Message<PurchaseOrderInventoryMatch> {
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     * Stores the vendor unit of material ID
     *
     * @generated from field: uint64 vendor_uom_id = 2;
     */
    vendorUomId: bigint;
    /**
     * Stores the ordered quantity in primary unit of material
     *
     * @generated from field: uint64 ordered_primary = 10;
     */
    orderedPrimary: bigint;
    /**
     * Stores the ordered quantity in secondary unit of material
     *
     * @generated from field: uint64 ordered_secondary = 20;
     */
    orderedSecondary: bigint;
    /**
     * Stores the received quantity in primary unit of material
     *
     * @generated from field: uint64 received_primary = 11;
     */
    receivedPrimary: bigint;
    /**
     * Stores the received quantity in secondary unit of material
     *
     * @generated from field: uint64 received_secondary = 21;
     */
    receivedSecondary: bigint;
    /**
     * Stores the invoiced quantity in primary unit of material
     *
     * @generated from field: uint64 invoiced_primary = 12;
     */
    invoicedPrimary: bigint;
    /**
     * Stores the invoiced quantity in secondary unit of material
     *
     * @generated from field: uint64 invoiced_secondary = 22;
     */
    invoicedSecondary: bigint;
    /**
     * Stores the returned quantity in primary unit of material
     *
     * @generated from field: uint64 returned_primary = 13;
     */
    returnedPrimary: bigint;
    /**
     * Stores the returned quantity in secondary unit of material
     *
     * @generated from field: uint64 returned_secondary = 23;
     */
    returnedSecondary: bigint;
    /**
     * Stores the debited quantity in primary unit of material
     *
     * @generated from field: uint64 debited_primary = 14;
     */
    debitedPrimary: bigint;
    /**
     * Stores the debited quantity in secondary unit of material
     *
     * @generated from field: uint64 debited_secondary = 24;
     */
    debitedSecondary: bigint;
    constructor(data?: PartialMessage<PurchaseOrderInventoryMatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderInventoryMatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderInventoryMatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderInventoryMatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderInventoryMatch;
    static equals(a: PurchaseOrderInventoryMatch | PlainMessage<PurchaseOrderInventoryMatch> | undefined, b: PurchaseOrderInventoryMatch | PlainMessage<PurchaseOrderInventoryMatch> | undefined): boolean;
}
/**
 *
 * Describes the list of inventory match families
 *
 * @generated from message Scailo.PurchaseOrderInventoryMatchList
 */
export declare class PurchaseOrderInventoryMatchList extends Message<PurchaseOrderInventoryMatchList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseOrderInventoryMatch list = 1;
     */
    list: PurchaseOrderInventoryMatch[];
    constructor(data?: PartialMessage<PurchaseOrderInventoryMatchList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseOrderInventoryMatchList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseOrderInventoryMatchList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseOrderInventoryMatchList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseOrderInventoryMatchList;
    static equals(a: PurchaseOrderInventoryMatchList | PlainMessage<PurchaseOrderInventoryMatchList> | undefined, b: PurchaseOrderInventoryMatchList | PlainMessage<PurchaseOrderInventoryMatchList> | undefined): boolean;
}
//# sourceMappingURL=purchases_orders.scailo_pb.d.ts.map
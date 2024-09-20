import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.VENDOR_INVOICE_SORT_KEY
 */
export declare enum VENDOR_INVOICE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    VENDOR_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_CREATED_AT = 1;
     */
    VENDOR_INVOICE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_MODIFIED_AT = 2;
     */
    VENDOR_INVOICE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_APPROVED_ON = 3;
     */
    VENDOR_INVOICE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_APPROVED_BY = 4;
     */
    VENDOR_INVOICE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    VENDOR_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_COMPLETED_ON = 6;
     */
    VENDOR_INVOICE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_REFERENCE_ID = 10;
     */
    VENDOR_INVOICE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    VENDOR_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the total value
     *
     * @generated from enum value: VENDOR_INVOICE_SORT_KEY_TOTAL_VALUE = 30;
     */
    VENDOR_INVOICE_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.VENDOR_INVOICE_ITEM_SORT_KEY
 */
export declare enum VENDOR_INVOICE_ITEM_SORT_KEY {
    /**
     * Fetch invoiced results by id
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch invoiced results by the creation timestamp
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch invoiced results by the modified timestamp
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch invoiced results by the approved on timestamp
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch invoiced results by the approved by field
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch invoiced results by the approver's role ID
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch invoiced results by the family ID
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch invoiced results by the internal quantity
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch invoiced results by the vendor unit of material ID
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_VENDOR_UOM_ID = 12;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_VENDOR_UOM_ID = 12,
    /**
     * Fetch invoiced results by the vendor quantity
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_VENDOR_QUANTITY = 13;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_VENDOR_QUANTITY = 13,
    /**
     * Fetch invoiced results by the unit price
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_VENDOR_UNIT_PRICE = 14;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_VENDOR_UNIT_PRICE = 14,
    /**
     * Fetch invoiced results by the tax group ID
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 15;
     */
    VENDOR_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 15
}
/**
 *
 * Describes the applicable statuses of vendor invoice items
 *
 * @generated from enum Scailo.VENDOR_INVOICE_ITEM_STATUS
 */
export declare enum VENDOR_INVOICE_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    VENDOR_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the vendor invoice items must have been approved
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_STATUS_APPROVED = 1;
     */
    VENDOR_INVOICE_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the vendor invoice items must be waiting for approval
     *
     * @generated from enum value: VENDOR_INVOICE_ITEM_STATUS_UNAPPROVED = 2;
     */
    VENDOR_INVOICE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.VendorInvoicesServiceCreateRequest
 */
export declare class VendorInvoicesServiceCreateRequest extends Message<VendorInvoicesServiceCreateRequest> {
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
     * The reference ID of the vendor invoice
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 15;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 16;
     */
    vendorBillDate: string;
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
     * The excess tax group
     *
     * @generated from field: uint64 cumulative_excess_tax_group_id = 20;
     */
    cumulativeExcessTaxGroupId: bigint;
    /**
     * The excess tax amount
     *
     * @generated from field: uint64 cumulative_excess_tax_amount = 21;
     */
    cumulativeExcessTaxAmount: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<VendorInvoicesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceCreateRequest;
    static equals(a: VendorInvoicesServiceCreateRequest | PlainMessage<VendorInvoicesServiceCreateRequest> | undefined, b: VendorInvoicesServiceCreateRequest | PlainMessage<VendorInvoicesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.VendorInvoicesServiceUpdateRequest
 */
export declare class VendorInvoicesServiceUpdateRequest extends Message<VendorInvoicesServiceUpdateRequest> {
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
     * The reference ID of the vendor invoice
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 15;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 16;
     */
    vendorBillDate: string;
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
     * The excess tax group
     *
     * @generated from field: uint64 cumulative_excess_tax_group_id = 20;
     */
    cumulativeExcessTaxGroupId: bigint;
    /**
     * The excess tax amount
     *
     * @generated from field: uint64 cumulative_excess_tax_amount = 21;
     */
    cumulativeExcessTaxAmount: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<VendorInvoicesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceUpdateRequest;
    static equals(a: VendorInvoicesServiceUpdateRequest | PlainMessage<VendorInvoicesServiceUpdateRequest> | undefined, b: VendorInvoicesServiceUpdateRequest | PlainMessage<VendorInvoicesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.VendorInvoicesServiceAutofillRequest
 */
export declare class VendorInvoicesServiceAutofillRequest extends Message<VendorInvoicesServiceAutofillRequest> {
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
     * Stores if services should also be autofilled
     *
     * @generated from field: bool include_services = 10;
     */
    includeServices: boolean;
    constructor(data?: PartialMessage<VendorInvoicesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceAutofillRequest;
    static equals(a: VendorInvoicesServiceAutofillRequest | PlainMessage<VendorInvoicesServiceAutofillRequest> | undefined, b: VendorInvoicesServiceAutofillRequest | PlainMessage<VendorInvoicesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.VendorInvoiceAncillaryParameters
 */
export declare class VendorInvoiceAncillaryParameters extends Message<VendorInvoiceAncillaryParameters> {
    /**
     * The UUID of the ref_id (the UUID of the associated ref_id)
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    /**
     * The UUID of the currency (the UUID of the associated currency)
     *
     * @generated from field: string currency_uuid = 214;
     */
    currencyUuid: string;
    constructor(data?: PartialMessage<VendorInvoiceAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceAncillaryParameters;
    static equals(a: VendorInvoiceAncillaryParameters | PlainMessage<VendorInvoiceAncillaryParameters> | undefined, b: VendorInvoiceAncillaryParameters | PlainMessage<VendorInvoiceAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.VendorInvoice
 */
export declare class VendorInvoice extends Message<VendorInvoice> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor invoice
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
     * The status of this vendor invoice
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this vendor invoice
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this vendor invoice was marked as completed
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
     * The reference ID of the vendor invoice
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
     * The associated reference
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 15;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 16;
     */
    vendorBillDate: string;
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
     * The excess tax group
     *
     * @generated from field: uint64 cumulative_excess_tax_group_id = 20;
     */
    cumulativeExcessTaxGroupId: bigint;
    /**
     * The excess tax amount
     *
     * @generated from field: uint64 cumulative_excess_tax_amount = 21;
     */
    cumulativeExcessTaxAmount: bigint;
    /**
     * Stores the total value of the vendor invoice (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 30;
     */
    totalValue: number;
    /**
     * The list of associated vendor invoice items
     *
     * @generated from field: repeated Scailo.VendorInvoiceItem list = 40;
     */
    list: VendorInvoiceItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 50;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<VendorInvoice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoice;
    static equals(a: VendorInvoice | PlainMessage<VendorInvoice> | undefined, b: VendorInvoice | PlainMessage<VendorInvoice> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a vendor invoice
 *
 * @generated from message Scailo.VendorInvoicesServiceItemCreateRequest
 */
export declare class VendorInvoicesServiceItemCreateRequest extends Message<VendorInvoicesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the vendor invoice ID
     *
     * @generated from field: uint64 vendor_invoice_id = 10;
     */
    vendorInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being admitted in internal unit of material
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
     * Stores the quantity (in cents) being admitted in vendor's unit of material
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
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<VendorInvoicesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceItemCreateRequest;
    static equals(a: VendorInvoicesServiceItemCreateRequest | PlainMessage<VendorInvoicesServiceItemCreateRequest> | undefined, b: VendorInvoicesServiceItemCreateRequest | PlainMessage<VendorInvoicesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a vendor invoice
 *
 * @generated from message Scailo.VendorInvoicesServiceItemUpdateRequest
 */
export declare class VendorInvoicesServiceItemUpdateRequest extends Message<VendorInvoicesServiceItemUpdateRequest> {
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
     * The quantity (in cents) being admitted in internal unit of material
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
     * Stores the quantity (in cents) being admitted in vendor's unit of material
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
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<VendorInvoicesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceItemUpdateRequest;
    static equals(a: VendorInvoicesServiceItemUpdateRequest | PlainMessage<VendorInvoicesServiceItemUpdateRequest> | undefined, b: VendorInvoicesServiceItemUpdateRequest | PlainMessage<VendorInvoicesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a vendor invoice
 *
 * @generated from message Scailo.VendorInvoiceItem
 */
export declare class VendorInvoiceItem extends Message<VendorInvoiceItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor invoice
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
     * Stores the vendor invoice ID
     *
     * @generated from field: uint64 vendor_invoice_id = 10;
     */
    vendorInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being admitted in internal unit of material
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
     * Stores the quantity (in cents) being admitted in vendor's unit of material
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
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<VendorInvoiceItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceItem;
    static equals(a: VendorInvoiceItem | PlainMessage<VendorInvoiceItem> | undefined, b: VendorInvoiceItem | PlainMessage<VendorInvoiceItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendor invoices
 *
 * @generated from message Scailo.VendorInvoicesList
 */
export declare class VendorInvoicesList extends Message<VendorInvoicesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorInvoice list = 1;
     */
    list: VendorInvoice[];
    constructor(data?: PartialMessage<VendorInvoicesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesList;
    static equals(a: VendorInvoicesList | PlainMessage<VendorInvoicesList> | undefined, b: VendorInvoicesList | PlainMessage<VendorInvoicesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendor invoice items
 *
 * @generated from message Scailo.VendorInvoiceItemsList
 */
export declare class VendorInvoiceItemsList extends Message<VendorInvoiceItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorInvoiceItem list = 1;
     */
    list: VendorInvoiceItem[];
    constructor(data?: PartialMessage<VendorInvoiceItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceItemsList;
    static equals(a: VendorInvoiceItemsList | PlainMessage<VendorInvoiceItemsList> | undefined, b: VendorInvoiceItemsList | PlainMessage<VendorInvoiceItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.VendorInvoiceItemHistoryRequest
 */
export declare class VendorInvoiceItemHistoryRequest extends Message<VendorInvoiceItemHistoryRequest> {
    /**
     * Stores the vendor invoice ID
     *
     * @generated from field: uint64 vendor_invoice_id = 10;
     */
    vendorInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<VendorInvoiceItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceItemHistoryRequest;
    static equals(a: VendorInvoiceItemHistoryRequest | PlainMessage<VendorInvoiceItemHistoryRequest> | undefined, b: VendorInvoiceItemHistoryRequest | PlainMessage<VendorInvoiceItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective vendor invoice item
 *
 * @generated from message Scailo.VendorInvoiceItemProspectiveInfoRequest
 */
export declare class VendorInvoiceItemProspectiveInfoRequest extends Message<VendorInvoiceItemProspectiveInfoRequest> {
    /**
     * Stores the vendor invoice ID
     *
     * @generated from field: uint64 vendor_invoice_id = 10;
     */
    vendorInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<VendorInvoiceItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceItemProspectiveInfoRequest;
    static equals(a: VendorInvoiceItemProspectiveInfoRequest | PlainMessage<VendorInvoiceItemProspectiveInfoRequest> | undefined, b: VendorInvoiceItemProspectiveInfoRequest | PlainMessage<VendorInvoiceItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest extends Message<VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 1;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 2;
     */
    refId: bigint;
    /**
     * The associated family ID
     *
     * @generated from field: uint64 family_id = 3;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.VendorInvoicesServicePaginationReq
 */
export declare class VendorInvoicesServicePaginationReq extends Message<VendorInvoicesServicePaginationReq> {
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
     * @generated from field: Scailo.VENDOR_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_INVOICE_SORT_KEY;
    /**
     * The status of this vendor invoice
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<VendorInvoicesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServicePaginationReq;
    static equals(a: VendorInvoicesServicePaginationReq | PlainMessage<VendorInvoicesServicePaginationReq> | undefined, b: VendorInvoicesServicePaginationReq | PlainMessage<VendorInvoicesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.VendorInvoicesServicePaginationResponse
 */
export declare class VendorInvoicesServicePaginationResponse extends Message<VendorInvoicesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.VendorInvoice payload = 4;
     */
    payload: VendorInvoice[];
    constructor(data?: PartialMessage<VendorInvoicesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServicePaginationResponse;
    static equals(a: VendorInvoicesServicePaginationResponse | PlainMessage<VendorInvoicesServicePaginationResponse> | undefined, b: VendorInvoicesServicePaginationResponse | PlainMessage<VendorInvoicesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.VendorInvoicesServiceFilterReq
 */
export declare class VendorInvoicesServiceFilterReq extends Message<VendorInvoicesServiceFilterReq> {
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
     * @generated from field: Scailo.VENDOR_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_INVOICE_SORT_KEY;
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
     * The status of this vendor invoice
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
     * The reference ID of the vendor invoice
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
     * The associated reference
     *
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 24;
     */
    vendorBillNo: string;
    /**
     * The minimum vendor bill date which should be considered
     *
     * @generated from field: string vendor_bill_date_start = 25;
     */
    vendorBillDateStart: string;
    /**
     * The maximum vendor bill date which should be considered
     *
     * @generated from field: string vendor_bill_date_end = 26;
     */
    vendorBillDateEnd: string;
    /**
     * The exact vendor bill date which should be considered
     *
     * @generated from field: string vendor_bill_date_exact = 27;
     */
    vendorBillDateExact: string;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 30;
     */
    currencyId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 31;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 32;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * Stores the minimum value of the vendor invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 50;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the vendor invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 51;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<VendorInvoicesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceFilterReq;
    static equals(a: VendorInvoicesServiceFilterReq | PlainMessage<VendorInvoicesServiceFilterReq> | undefined, b: VendorInvoicesServiceFilterReq | PlainMessage<VendorInvoicesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.VendorInvoicesServiceCountReq
 */
export declare class VendorInvoicesServiceCountReq extends Message<VendorInvoicesServiceCountReq> {
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
     * The status of this vendor invoice
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
     * The reference ID of the vendor invoice
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
     * The associated reference
     *
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 24;
     */
    vendorBillNo: string;
    /**
     * The minimum vendor bill date which should be considered
     *
     * @generated from field: string vendor_bill_date_start = 25;
     */
    vendorBillDateStart: string;
    /**
     * The maximum vendor bill date which should be considered
     *
     * @generated from field: string vendor_bill_date_end = 26;
     */
    vendorBillDateEnd: string;
    /**
     * The exact vendor bill date which should be considered
     *
     * @generated from field: string vendor_bill_date_exact = 27;
     */
    vendorBillDateExact: string;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 30;
     */
    currencyId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 31;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 32;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * Stores the minimum value of the vendor invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 50;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the vendor invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 51;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<VendorInvoicesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceCountReq;
    static equals(a: VendorInvoicesServiceCountReq | PlainMessage<VendorInvoicesServiceCountReq> | undefined, b: VendorInvoicesServiceCountReq | PlainMessage<VendorInvoicesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.VendorInvoicesServiceSearchAllReq
 */
export declare class VendorInvoicesServiceSearchAllReq extends Message<VendorInvoicesServiceSearchAllReq> {
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
     * @generated from field: Scailo.VENDOR_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_INVOICE_SORT_KEY;
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
     * The associated reference
     *
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 25;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<VendorInvoicesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceSearchAllReq;
    static equals(a: VendorInvoicesServiceSearchAllReq | PlainMessage<VendorInvoicesServiceSearchAllReq> | undefined, b: VendorInvoicesServiceSearchAllReq | PlainMessage<VendorInvoicesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a vendor invoice reference
 *
 * @generated from message Scailo.VendorInvoicesServiceReferenceCreateRequest
 */
export declare class VendorInvoicesServiceReferenceCreateRequest extends Message<VendorInvoicesServiceReferenceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the vendor invoice ID
     *
     * @generated from field: uint64 vendor_invoice_id = 10;
     */
    vendorInvoiceId: bigint;
    /**
     * Stores the goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 11;
     */
    goodsReceiptId: bigint;
    constructor(data?: PartialMessage<VendorInvoicesServiceReferenceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServiceReferenceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServiceReferenceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServiceReferenceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServiceReferenceCreateRequest;
    static equals(a: VendorInvoicesServiceReferenceCreateRequest | PlainMessage<VendorInvoicesServiceReferenceCreateRequest> | undefined, b: VendorInvoicesServiceReferenceCreateRequest | PlainMessage<VendorInvoicesServiceReferenceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a vendor invoice reference
 *
 * @generated from message Scailo.VendorInvoiceReference
 */
export declare class VendorInvoiceReference extends Message<VendorInvoiceReference> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor invoice
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
     * Stores the vendor invoice ID
     *
     * @generated from field: uint64 vendor_invoice_id = 10;
     */
    vendorInvoiceId: bigint;
    /**
     * Stores the goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 11;
     */
    goodsReceiptId: bigint;
    constructor(data?: PartialMessage<VendorInvoiceReference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceReference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceReference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceReference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceReference;
    static equals(a: VendorInvoiceReference | PlainMessage<VendorInvoiceReference> | undefined, b: VendorInvoiceReference | PlainMessage<VendorInvoiceReference> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendor invoice references
 *
 * @generated from message Scailo.VendorInvoiceReferencesList
 */
export declare class VendorInvoiceReferencesList extends Message<VendorInvoiceReferencesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorInvoiceReference list = 1;
     */
    list: VendorInvoiceReference[];
    constructor(data?: PartialMessage<VendorInvoiceReferencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceReferencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceReferencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceReferencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceReferencesList;
    static equals(a: VendorInvoiceReferencesList | PlainMessage<VendorInvoiceReferencesList> | undefined, b: VendorInvoiceReferencesList | PlainMessage<VendorInvoiceReferencesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.VendorInvoiceItemsSearchRequest
 */
export declare class VendorInvoiceItemsSearchRequest extends Message<VendorInvoiceItemsSearchRequest> {
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
     * @generated from field: Scailo.VENDOR_INVOICE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_INVOICE_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.VENDOR_INVOICE_ITEM_STATUS status = 7;
     */
    status: VENDOR_INVOICE_ITEM_STATUS;
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
     * The ID of the vendor invoice
     *
     * @generated from field: uint64 vendor_invoice_id = 20;
     */
    vendorInvoiceId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 23;
     */
    vendorUomId: bigint;
    /**
     * The ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 26;
     */
    taxGroupId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<VendorInvoiceItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceItemsSearchRequest;
    static equals(a: VendorInvoiceItemsSearchRequest | PlainMessage<VendorInvoiceItemsSearchRequest> | undefined, b: VendorInvoiceItemsSearchRequest | PlainMessage<VendorInvoiceItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.VendorInvoicesServicePaginatedItemsResponse
 */
export declare class VendorInvoicesServicePaginatedItemsResponse extends Message<VendorInvoicesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.VendorInvoiceItem payload = 4;
     */
    payload: VendorInvoiceItem[];
    constructor(data?: PartialMessage<VendorInvoicesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoicesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoicesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoicesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoicesServicePaginatedItemsResponse;
    static equals(a: VendorInvoicesServicePaginatedItemsResponse | PlainMessage<VendorInvoicesServicePaginatedItemsResponse> | undefined, b: VendorInvoicesServicePaginatedItemsResponse | PlainMessage<VendorInvoicesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the receipt statistics of the vendor invoice
 *
 * @generated from message Scailo.VendorInvoiceReceiptStatistics
 */
export declare class VendorInvoiceReceiptStatistics extends Message<VendorInvoiceReceiptStatistics> {
    /**
     * Stores the ID of the family
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     * Stores the invoiced quantity
     *
     * @generated from field: uint64 invoiced_quantity = 2;
     */
    invoicedQuantity: bigint;
    /**
     * Stores the receipt quantity
     *
     * @generated from field: uint64 receipt_quantity = 3;
     */
    receiptQuantity: bigint;
    constructor(data?: PartialMessage<VendorInvoiceReceiptStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceReceiptStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceReceiptStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceReceiptStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceReceiptStatistics;
    static equals(a: VendorInvoiceReceiptStatistics | PlainMessage<VendorInvoiceReceiptStatistics> | undefined, b: VendorInvoiceReceiptStatistics | PlainMessage<VendorInvoiceReceiptStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of receipt statistics of the vendor invoice
 *
 * @generated from message Scailo.VendorInvoiceReceiptStatisticsList
 */
export declare class VendorInvoiceReceiptStatisticsList extends Message<VendorInvoiceReceiptStatisticsList> {
    /**
     * @generated from field: repeated Scailo.VendorInvoiceReceiptStatistics list = 1;
     */
    list: VendorInvoiceReceiptStatistics[];
    constructor(data?: PartialMessage<VendorInvoiceReceiptStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorInvoiceReceiptStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorInvoiceReceiptStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorInvoiceReceiptStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorInvoiceReceiptStatisticsList;
    static equals(a: VendorInvoiceReceiptStatisticsList | PlainMessage<VendorInvoiceReceiptStatisticsList> | undefined, b: VendorInvoiceReceiptStatisticsList | PlainMessage<VendorInvoiceReceiptStatisticsList> | undefined): boolean;
}
//# sourceMappingURL=vendor_invoices.scailo_pb.d.ts.map
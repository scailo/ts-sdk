import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a proforma invoice can be added
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_REF_FROM
 */
export declare enum PROFORMA_INVOICE_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the proforma invoice originated from a sales order
     *
     * @generated from enum value: PROFORMA_INVOICE_REF_FROM_SALES_ORDER = 1;
     */
    PROFORMA_INVOICE_REF_FROM_SALES_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_SORT_KEY
 */
export declare enum PROFORMA_INVOICE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_CREATED_AT = 1;
     */
    PROFORMA_INVOICE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_MODIFIED_AT = 2;
     */
    PROFORMA_INVOICE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVED_ON = 3;
     */
    PROFORMA_INVOICE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVED_BY = 4;
     */
    PROFORMA_INVOICE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PROFORMA_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_COMPLETED_ON = 6;
     */
    PROFORMA_INVOICE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_REFERENCE_ID = 10;
     */
    PROFORMA_INVOICE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PROFORMA_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    PROFORMA_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18,
    /**
     * Fetch ordered results by the total value
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_TOTAL_VALUE = 30;
     */
    PROFORMA_INVOICE_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_BILLING_STATUS
 */
export declare enum PROFORMA_INVOICE_BILLING_STATUS {
    /**
     * Any billing status
     *
     * @generated from enum value: PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Goods dispatch is billed
     *
     * @generated from enum value: PROFORMA_INVOICE_BILLING_STATUS_BILLED = 1;
     */
    PROFORMA_INVOICE_BILLING_STATUS_BILLED = 1,
    /**
     * Goods dispatch is unbilled
     *
     * @generated from enum value: PROFORMA_INVOICE_BILLING_STATUS_UNBILLED = 2;
     */
    PROFORMA_INVOICE_BILLING_STATUS_UNBILLED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_ITEM_SORT_KEY
 */
export declare enum PROFORMA_INVOICE_ITEM_SORT_KEY {
    /**
     * Fetch invoiced results by id
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch invoiced results by the creation timestamp
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch invoiced results by the modified timestamp
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch invoiced results by the approved on timestamp
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch invoiced results by the approved by field
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch invoiced results by the approver's role ID
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch invoiced results by the family ID
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch invoiced results by the internal quantity
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch invoiced results by the client unit of material ID
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch invoiced results by the client quantity
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * Fetch invoiced results by the client family code
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * Fetch invoiced results by the unit price
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15,
    /**
     * Fetch invoiced results by the tax group ID
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16
}
/**
 *
 * Describes the applicable statuses of proforma invoice items
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_ITEM_STATUS
 */
export declare enum PROFORMA_INVOICE_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the proforma invoice items must have been approved
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_STATUS_APPROVED = 1;
     */
    PROFORMA_INVOICE_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the proforma invoice items must be waiting for approval
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_STATUS_UNAPPROVED = 2;
     */
    PROFORMA_INVOICE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ProformaInvoicesServiceCreateRequest
 */
export declare class ProformaInvoicesServiceCreateRequest extends Message<ProformaInvoicesServiceCreateRequest> {
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
     * The reference ID of the proforma invoice
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 12;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
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
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 17;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * The excess tax group
     *
     * @generated from field: uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId: bigint;
    /**
     * The excess tax amount
     *
     * @generated from field: uint64 cumulative_excess_tax_amount = 20;
     */
    cumulativeExcessTaxAmount: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProformaInvoicesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceCreateRequest;
    static equals(a: ProformaInvoicesServiceCreateRequest | PlainMessage<ProformaInvoicesServiceCreateRequest> | undefined, b: ProformaInvoicesServiceCreateRequest | PlainMessage<ProformaInvoicesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ProformaInvoicesServiceUpdateRequest
 */
export declare class ProformaInvoicesServiceUpdateRequest extends Message<ProformaInvoicesServiceUpdateRequest> {
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
     * The reference ID of the proforma invoice
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
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 17;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * The excess tax group
     *
     * @generated from field: uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId: bigint;
    /**
     * The excess tax amount
     *
     * @generated from field: uint64 cumulative_excess_tax_amount = 20;
     */
    cumulativeExcessTaxAmount: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProformaInvoicesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceUpdateRequest;
    static equals(a: ProformaInvoicesServiceUpdateRequest | PlainMessage<ProformaInvoicesServiceUpdateRequest> | undefined, b: ProformaInvoicesServiceUpdateRequest | PlainMessage<ProformaInvoicesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.ProformaInvoicesServiceAutofillRequest
 */
export declare class ProformaInvoicesServiceAutofillRequest extends Message<ProformaInvoicesServiceAutofillRequest> {
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
     * Stores if services should also be autofilled
     *
     * @generated from field: bool include_services = 10;
     */
    includeServices: boolean;
    constructor(data?: PartialMessage<ProformaInvoicesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceAutofillRequest;
    static equals(a: ProformaInvoicesServiceAutofillRequest | PlainMessage<ProformaInvoicesServiceAutofillRequest> | undefined, b: ProformaInvoicesServiceAutofillRequest | PlainMessage<ProformaInvoicesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.ProformaInvoiceAncillaryParameters
 */
export declare class ProformaInvoiceAncillaryParameters extends Message<ProformaInvoiceAncillaryParameters> {
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
    constructor(data?: PartialMessage<ProformaInvoiceAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoiceAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoiceAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoiceAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoiceAncillaryParameters;
    static equals(a: ProformaInvoiceAncillaryParameters | PlainMessage<ProformaInvoiceAncillaryParameters> | undefined, b: ProformaInvoiceAncillaryParameters | PlainMessage<ProformaInvoiceAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ProformaInvoice
 */
export declare class ProformaInvoice extends Message<ProformaInvoice> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this proforma invoice
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
     * The status of this proforma invoice
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this proforma invoice
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this proforma invoice was marked as completed
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
     * The reference ID of the proforma invoice
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
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 12;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
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
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 17;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * The excess tax group
     *
     * @generated from field: uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId: bigint;
    /**
     * The excess tax amount
     *
     * @generated from field: uint64 cumulative_excess_tax_amount = 20;
     */
    cumulativeExcessTaxAmount: bigint;
    /**
     * Stores the total value of the proforma invoice (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 21;
     */
    totalValue: number;
    /**
     * The number of times that the proforma invoice has been amended
     *
     * @generated from field: uint64 amendment_count = 22;
     */
    amendmentCount: bigint;
    /**
     * The list of associated proforma invoice items
     *
     * @generated from field: repeated Scailo.ProformaInvoiceItem list = 30;
     */
    list: ProformaInvoiceItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<ProformaInvoice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoice;
    static equals(a: ProformaInvoice | PlainMessage<ProformaInvoice> | undefined, b: ProformaInvoice | PlainMessage<ProformaInvoice> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a proforma invoice
 *
 * @generated from message Scailo.ProformaInvoicesServiceItemCreateRequest
 */
export declare class ProformaInvoicesServiceItemCreateRequest extends Message<ProformaInvoicesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the proforma invoice ID
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being supplied in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     * The family code as represented by the client
     *
     * @generated from field: string client_family_code = 15;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item (as supplied to the client)
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<ProformaInvoicesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceItemCreateRequest;
    static equals(a: ProformaInvoicesServiceItemCreateRequest | PlainMessage<ProformaInvoicesServiceItemCreateRequest> | undefined, b: ProformaInvoicesServiceItemCreateRequest | PlainMessage<ProformaInvoicesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a proforma invoice
 *
 * @generated from message Scailo.ProformaInvoicesServiceItemUpdateRequest
 */
export declare class ProformaInvoicesServiceItemUpdateRequest extends Message<ProformaInvoicesServiceItemUpdateRequest> {
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
     * The quantity (in cents) being supplied in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     * The family code as represented by the client
     *
     * @generated from field: string client_family_code = 15;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item (as supplied to the client)
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<ProformaInvoicesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceItemUpdateRequest;
    static equals(a: ProformaInvoicesServiceItemUpdateRequest | PlainMessage<ProformaInvoicesServiceItemUpdateRequest> | undefined, b: ProformaInvoicesServiceItemUpdateRequest | PlainMessage<ProformaInvoicesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a proforma invoice
 *
 * @generated from message Scailo.ProformaInvoiceItem
 */
export declare class ProformaInvoiceItem extends Message<ProformaInvoiceItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this proforma invoice
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
     * Stores the proforma invoice ID
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being supplied in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     * The family code as represented by the client
     *
     * @generated from field: string client_family_code = 15;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item (as supplied to the client)
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<ProformaInvoiceItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoiceItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoiceItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoiceItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoiceItem;
    static equals(a: ProformaInvoiceItem | PlainMessage<ProformaInvoiceItem> | undefined, b: ProformaInvoiceItem | PlainMessage<ProformaInvoiceItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of proforma invoices
 *
 * @generated from message Scailo.ProformaInvoicesList
 */
export declare class ProformaInvoicesList extends Message<ProformaInvoicesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ProformaInvoice list = 1;
     */
    list: ProformaInvoice[];
    constructor(data?: PartialMessage<ProformaInvoicesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesList;
    static equals(a: ProformaInvoicesList | PlainMessage<ProformaInvoicesList> | undefined, b: ProformaInvoicesList | PlainMessage<ProformaInvoicesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of proforma invoice items
 *
 * @generated from message Scailo.ProformaInvoiceItemsList
 */
export declare class ProformaInvoiceItemsList extends Message<ProformaInvoiceItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ProformaInvoiceItem list = 1;
     */
    list: ProformaInvoiceItem[];
    constructor(data?: PartialMessage<ProformaInvoiceItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoiceItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoiceItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoiceItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoiceItemsList;
    static equals(a: ProformaInvoiceItemsList | PlainMessage<ProformaInvoiceItemsList> | undefined, b: ProformaInvoiceItemsList | PlainMessage<ProformaInvoiceItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.ProformaInvoiceItemHistoryRequest
 */
export declare class ProformaInvoiceItemHistoryRequest extends Message<ProformaInvoiceItemHistoryRequest> {
    /**
     * Stores the proforma invoice ID
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ProformaInvoiceItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoiceItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoiceItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoiceItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoiceItemHistoryRequest;
    static equals(a: ProformaInvoiceItemHistoryRequest | PlainMessage<ProformaInvoiceItemHistoryRequest> | undefined, b: ProformaInvoiceItemHistoryRequest | PlainMessage<ProformaInvoiceItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective proforma invoice item
 *
 * @generated from message Scailo.ProformaInvoiceItemProspectiveInfoRequest
 */
export declare class ProformaInvoiceItemProspectiveInfoRequest extends Message<ProformaInvoiceItemProspectiveInfoRequest> {
    /**
     * Stores the proforma invoice ID
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ProformaInvoiceItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoiceItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoiceItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoiceItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoiceItemProspectiveInfoRequest;
    static equals(a: ProformaInvoiceItemProspectiveInfoRequest | PlainMessage<ProformaInvoiceItemProspectiveInfoRequest> | undefined, b: ProformaInvoiceItemProspectiveInfoRequest | PlainMessage<ProformaInvoiceItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest extends Message<ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 1;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
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
    constructor(data?: PartialMessage<ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ProformaInvoicesServicePaginationReq
 */
export declare class ProformaInvoicesServicePaginationReq extends Message<ProformaInvoicesServicePaginationReq> {
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
     * @generated from field: Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: PROFORMA_INVOICE_SORT_KEY;
    /**
     * The status of this proforma invoice
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ProformaInvoicesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServicePaginationReq;
    static equals(a: ProformaInvoicesServicePaginationReq | PlainMessage<ProformaInvoicesServicePaginationReq> | undefined, b: ProformaInvoicesServicePaginationReq | PlainMessage<ProformaInvoicesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ProformaInvoicesServicePaginationResponse
 */
export declare class ProformaInvoicesServicePaginationResponse extends Message<ProformaInvoicesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ProformaInvoice payload = 4;
     */
    payload: ProformaInvoice[];
    constructor(data?: PartialMessage<ProformaInvoicesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServicePaginationResponse;
    static equals(a: ProformaInvoicesServicePaginationResponse | PlainMessage<ProformaInvoicesServicePaginationResponse> | undefined, b: ProformaInvoicesServicePaginationResponse | PlainMessage<ProformaInvoicesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ProformaInvoicesServiceFilterReq
 */
export declare class ProformaInvoicesServiceFilterReq extends Message<ProformaInvoicesServiceFilterReq> {
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
     * @generated from field: Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: PROFORMA_INVOICE_SORT_KEY;
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
     * The status of this proforma invoice
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
     * The reference ID of the proforma invoice
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
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 24;
     */
    currencyId: bigint;
    /**
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 25;
     */
    bankAccountId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The status of the proforma invoice bill
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 50;
     */
    billingStatus: PROFORMA_INVOICE_BILLING_STATUS;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 60;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 61;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated project of the linked sales order
     *
     * @generated from field: uint64 project_id = 62;
     */
    projectId: bigint;
    /**
     * Stores the minimum value of the proforma invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 80;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the proforma invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 81;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<ProformaInvoicesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceFilterReq;
    static equals(a: ProformaInvoicesServiceFilterReq | PlainMessage<ProformaInvoicesServiceFilterReq> | undefined, b: ProformaInvoicesServiceFilterReq | PlainMessage<ProformaInvoicesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ProformaInvoicesServiceCountReq
 */
export declare class ProformaInvoicesServiceCountReq extends Message<ProformaInvoicesServiceCountReq> {
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
     * The status of this proforma invoice
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
     * The reference ID of the proforma invoice
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
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 24;
     */
    currencyId: bigint;
    /**
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 25;
     */
    bankAccountId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The status of the proforma invoice bill
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 50;
     */
    billingStatus: PROFORMA_INVOICE_BILLING_STATUS;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 60;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 61;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated project of the linked sales order
     *
     * @generated from field: uint64 project_id = 62;
     */
    projectId: bigint;
    /**
     * Stores the minimum value of the proforma invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 80;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the proforma invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 81;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<ProformaInvoicesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceCountReq;
    static equals(a: ProformaInvoicesServiceCountReq | PlainMessage<ProformaInvoicesServiceCountReq> | undefined, b: ProformaInvoicesServiceCountReq | PlainMessage<ProformaInvoicesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ProformaInvoicesServiceSearchAllReq
 */
export declare class ProformaInvoicesServiceSearchAllReq extends Message<ProformaInvoicesServiceSearchAllReq> {
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
     * @generated from field: Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: PROFORMA_INVOICE_SORT_KEY;
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
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The status of the proforma invoice bill
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 40;
     */
    billingStatus: PROFORMA_INVOICE_BILLING_STATUS;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    constructor(data?: PartialMessage<ProformaInvoicesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceSearchAllReq;
    static equals(a: ProformaInvoicesServiceSearchAllReq | PlainMessage<ProformaInvoicesServiceSearchAllReq> | undefined, b: ProformaInvoicesServiceSearchAllReq | PlainMessage<ProformaInvoicesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.ProformaInvoiceItemsSearchRequest
 */
export declare class ProformaInvoiceItemsSearchRequest extends Message<ProformaInvoiceItemsSearchRequest> {
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
     * @generated from field: Scailo.PROFORMA_INVOICE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: PROFORMA_INVOICE_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_ITEM_STATUS status = 7;
     */
    status: PROFORMA_INVOICE_ITEM_STATUS;
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
     * The ID of the proforma invoice
     *
     * @generated from field: uint64 proforma_invoice_id = 20;
     */
    proformaInvoiceId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 23;
     */
    clientUomId: bigint;
    /**
     * Stores the family code as given by the client
     *
     * @generated from field: string client_family_code = 25;
     */
    clientFamilyCode: string;
    /**
     * The ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 27;
     */
    taxGroupId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<ProformaInvoiceItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoiceItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoiceItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoiceItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoiceItemsSearchRequest;
    static equals(a: ProformaInvoiceItemsSearchRequest | PlainMessage<ProformaInvoiceItemsSearchRequest> | undefined, b: ProformaInvoiceItemsSearchRequest | PlainMessage<ProformaInvoiceItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.ProformaInvoicesServicePaginatedItemsResponse
 */
export declare class ProformaInvoicesServicePaginatedItemsResponse extends Message<ProformaInvoicesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.ProformaInvoiceItem payload = 4;
     */
    payload: ProformaInvoiceItem[];
    constructor(data?: PartialMessage<ProformaInvoicesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServicePaginatedItemsResponse;
    static equals(a: ProformaInvoicesServicePaginatedItemsResponse | PlainMessage<ProformaInvoicesServicePaginatedItemsResponse> | undefined, b: ProformaInvoicesServicePaginatedItemsResponse | PlainMessage<ProformaInvoicesServicePaginatedItemsResponse> | undefined): boolean;
}
//# sourceMappingURL=proforma_invoices.scailo_pb.d.ts.map
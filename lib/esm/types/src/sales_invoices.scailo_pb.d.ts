import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a sales invoice can be added
 *
 * @generated from enum Scailo.SALES_INVOICE_REF_FROM
 */
export declare enum SALES_INVOICE_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the sales invoice originated from a sales order
     *
     * @generated from enum value: SALES_INVOICE_REF_FROM_SALES_ORDER = 1;
     */
    SALES_INVOICE_REF_FROM_SALES_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_INVOICE_SORT_KEY
 */
export declare enum SALES_INVOICE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_CREATED_AT = 1;
     */
    SALES_INVOICE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_INVOICE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_INVOICE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_INVOICE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_INVOICE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_INVOICE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    SALES_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18,
    /**
     * Fetch ordered results by the total value
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_TOTAL_VALUE = 30;
     */
    SALES_INVOICE_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_INVOICE_ITEM_SORT_KEY
 */
export declare enum SALES_INVOICE_ITEM_SORT_KEY {
    /**
     * Fetch invoiced results by id
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch invoiced results by the creation timestamp
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SALES_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch invoiced results by the modified timestamp
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch invoiced results by the approved on timestamp
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch invoiced results by the approved by field
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch invoiced results by the approver's role ID
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch invoiced results by the family ID
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    SALES_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch invoiced results by the internal quantity
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SALES_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch invoiced results by the client unit of material ID
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    SALES_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch invoiced results by the client quantity
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    SALES_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * Fetch invoiced results by the client family code
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    SALES_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * Fetch invoiced results by the unit price
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15;
     */
    SALES_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15,
    /**
     * Fetch invoiced results by the tax group ID
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    SALES_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16
}
/**
 *
 * Describes the applicable statuses of sales invoice items
 *
 * @generated from enum Scailo.SALES_INVOICE_ITEM_STATUS
 */
export declare enum SALES_INVOICE_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the sales invoice items must have been approved
     *
     * @generated from enum value: SALES_INVOICE_ITEM_STATUS_APPROVED = 1;
     */
    SALES_INVOICE_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the sales invoice items must be waiting for approval
     *
     * @generated from enum value: SALES_INVOICE_ITEM_STATUS_UNAPPROVED = 2;
     */
    SALES_INVOICE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SalesInvoicesServiceCreateRequest
 */
export declare class SalesInvoicesServiceCreateRequest extends Message<SalesInvoicesServiceCreateRequest> {
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
     * The reference ID of the sales invoice
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_INVOICE_REF_FROM;
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
    constructor(data?: PartialMessage<SalesInvoicesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceCreateRequest;
    static equals(a: SalesInvoicesServiceCreateRequest | PlainMessage<SalesInvoicesServiceCreateRequest> | undefined, b: SalesInvoicesServiceCreateRequest | PlainMessage<SalesInvoicesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SalesInvoicesServiceUpdateRequest
 */
export declare class SalesInvoicesServiceUpdateRequest extends Message<SalesInvoicesServiceUpdateRequest> {
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
     * The reference ID of the sales invoice
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
    constructor(data?: PartialMessage<SalesInvoicesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceUpdateRequest;
    static equals(a: SalesInvoicesServiceUpdateRequest | PlainMessage<SalesInvoicesServiceUpdateRequest> | undefined, b: SalesInvoicesServiceUpdateRequest | PlainMessage<SalesInvoicesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.SalesInvoicesServiceAutofillRequest
 */
export declare class SalesInvoicesServiceAutofillRequest extends Message<SalesInvoicesServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<SalesInvoicesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceAutofillRequest;
    static equals(a: SalesInvoicesServiceAutofillRequest | PlainMessage<SalesInvoicesServiceAutofillRequest> | undefined, b: SalesInvoicesServiceAutofillRequest | PlainMessage<SalesInvoicesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.SalesInvoiceAncillaryParameters
 */
export declare class SalesInvoiceAncillaryParameters extends Message<SalesInvoiceAncillaryParameters> {
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
    constructor(data?: PartialMessage<SalesInvoiceAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceAncillaryParameters;
    static equals(a: SalesInvoiceAncillaryParameters | PlainMessage<SalesInvoiceAncillaryParameters> | undefined, b: SalesInvoiceAncillaryParameters | PlainMessage<SalesInvoiceAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SalesInvoice
 */
export declare class SalesInvoice extends Message<SalesInvoice> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales invoice
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
     * The status of this sales invoice
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this sales invoice
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this sales invoice was marked as completed
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
     * The reference ID of the sales invoice
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
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_INVOICE_REF_FROM;
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
     * Stores the total value of the sales invoice (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 21;
     */
    totalValue: number;
    /**
     * The number of times that the sales invoice has been amended
     *
     * @generated from field: uint64 amendment_count = 22;
     */
    amendmentCount: bigint;
    /**
     * The list of associated sales invoice items
     *
     * @generated from field: repeated Scailo.SalesInvoiceItem list = 30;
     */
    list: SalesInvoiceItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SalesInvoice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoice;
    static equals(a: SalesInvoice | PlainMessage<SalesInvoice> | undefined, b: SalesInvoice | PlainMessage<SalesInvoice> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a sales invoice
 *
 * @generated from message Scailo.SalesInvoicesServiceItemCreateRequest
 */
export declare class SalesInvoicesServiceItemCreateRequest extends Message<SalesInvoicesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales invoice ID
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
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
    constructor(data?: PartialMessage<SalesInvoicesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceItemCreateRequest;
    static equals(a: SalesInvoicesServiceItemCreateRequest | PlainMessage<SalesInvoicesServiceItemCreateRequest> | undefined, b: SalesInvoicesServiceItemCreateRequest | PlainMessage<SalesInvoicesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a sales invoice
 *
 * @generated from message Scailo.SalesInvoicesServiceItemUpdateRequest
 */
export declare class SalesInvoicesServiceItemUpdateRequest extends Message<SalesInvoicesServiceItemUpdateRequest> {
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
    constructor(data?: PartialMessage<SalesInvoicesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceItemUpdateRequest;
    static equals(a: SalesInvoicesServiceItemUpdateRequest | PlainMessage<SalesInvoicesServiceItemUpdateRequest> | undefined, b: SalesInvoicesServiceItemUpdateRequest | PlainMessage<SalesInvoicesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a sales invoice
 *
 * @generated from message Scailo.SalesInvoiceItem
 */
export declare class SalesInvoiceItem extends Message<SalesInvoiceItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales invoice
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
     * Stores the sales invoice ID
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
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
    constructor(data?: PartialMessage<SalesInvoiceItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceItem;
    static equals(a: SalesInvoiceItem | PlainMessage<SalesInvoiceItem> | undefined, b: SalesInvoiceItem | PlainMessage<SalesInvoiceItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales invoices
 *
 * @generated from message Scailo.SalesInvoicesList
 */
export declare class SalesInvoicesList extends Message<SalesInvoicesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesInvoice list = 1;
     */
    list: SalesInvoice[];
    constructor(data?: PartialMessage<SalesInvoicesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesList;
    static equals(a: SalesInvoicesList | PlainMessage<SalesInvoicesList> | undefined, b: SalesInvoicesList | PlainMessage<SalesInvoicesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales invoice items
 *
 * @generated from message Scailo.SalesInvoiceItemsList
 */
export declare class SalesInvoiceItemsList extends Message<SalesInvoiceItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesInvoiceItem list = 1;
     */
    list: SalesInvoiceItem[];
    constructor(data?: PartialMessage<SalesInvoiceItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceItemsList;
    static equals(a: SalesInvoiceItemsList | PlainMessage<SalesInvoiceItemsList> | undefined, b: SalesInvoiceItemsList | PlainMessage<SalesInvoiceItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.SalesInvoiceItemHistoryRequest
 */
export declare class SalesInvoiceItemHistoryRequest extends Message<SalesInvoiceItemHistoryRequest> {
    /**
     * Stores the sales invoice ID
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesInvoiceItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceItemHistoryRequest;
    static equals(a: SalesInvoiceItemHistoryRequest | PlainMessage<SalesInvoiceItemHistoryRequest> | undefined, b: SalesInvoiceItemHistoryRequest | PlainMessage<SalesInvoiceItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective sales invoice item
 *
 * @generated from message Scailo.SalesInvoiceItemProspectiveInfoRequest
 */
export declare class SalesInvoiceItemProspectiveInfoRequest extends Message<SalesInvoiceItemProspectiveInfoRequest> {
    /**
     * Stores the sales invoice ID
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesInvoiceItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceItemProspectiveInfoRequest;
    static equals(a: SalesInvoiceItemProspectiveInfoRequest | PlainMessage<SalesInvoiceItemProspectiveInfoRequest> | undefined, b: SalesInvoiceItemProspectiveInfoRequest | PlainMessage<SalesInvoiceItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest extends Message<SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 1;
     */
    refFrom: SALES_INVOICE_REF_FROM;
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
    constructor(data?: PartialMessage<SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SalesInvoicesServicePaginationReq
 */
export declare class SalesInvoicesServicePaginationReq extends Message<SalesInvoicesServicePaginationReq> {
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
     * @generated from field: Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_INVOICE_SORT_KEY;
    /**
     * The status of this sales invoice
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesInvoicesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServicePaginationReq;
    static equals(a: SalesInvoicesServicePaginationReq | PlainMessage<SalesInvoicesServicePaginationReq> | undefined, b: SalesInvoicesServicePaginationReq | PlainMessage<SalesInvoicesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SalesInvoicesServicePaginationResponse
 */
export declare class SalesInvoicesServicePaginationResponse extends Message<SalesInvoicesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SalesInvoice payload = 4;
     */
    payload: SalesInvoice[];
    constructor(data?: PartialMessage<SalesInvoicesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServicePaginationResponse;
    static equals(a: SalesInvoicesServicePaginationResponse | PlainMessage<SalesInvoicesServicePaginationResponse> | undefined, b: SalesInvoicesServicePaginationResponse | PlainMessage<SalesInvoicesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SalesInvoicesServiceFilterReq
 */
export declare class SalesInvoicesServiceFilterReq extends Message<SalesInvoicesServiceFilterReq> {
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
     * @generated from field: Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_INVOICE_SORT_KEY;
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
     * The status of this sales invoice
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
     * The reference ID of the sales invoice
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
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom: SALES_INVOICE_REF_FROM;
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
    /**
     * The ID of the associated project of the linked sales order
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    /**
     * Stores the minimum value of the sales invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 70;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the sales invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 71;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<SalesInvoicesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceFilterReq;
    static equals(a: SalesInvoicesServiceFilterReq | PlainMessage<SalesInvoicesServiceFilterReq> | undefined, b: SalesInvoicesServiceFilterReq | PlainMessage<SalesInvoicesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SalesInvoicesServiceCountReq
 */
export declare class SalesInvoicesServiceCountReq extends Message<SalesInvoicesServiceCountReq> {
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
     * The status of this sales invoice
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
     * The reference ID of the sales invoice
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
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom: SALES_INVOICE_REF_FROM;
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
    /**
     * The ID of the associated project of the linked sales order
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    /**
     * Stores the minimum value of the sales invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 70;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the sales invoice (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 71;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<SalesInvoicesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceCountReq;
    static equals(a: SalesInvoicesServiceCountReq | PlainMessage<SalesInvoicesServiceCountReq> | undefined, b: SalesInvoicesServiceCountReq | PlainMessage<SalesInvoicesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SalesInvoicesServiceSearchAllReq
 */
export declare class SalesInvoicesServiceSearchAllReq extends Message<SalesInvoicesServiceSearchAllReq> {
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
     * @generated from field: Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_INVOICE_SORT_KEY;
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
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom: SALES_INVOICE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
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
    constructor(data?: PartialMessage<SalesInvoicesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceSearchAllReq;
    static equals(a: SalesInvoicesServiceSearchAllReq | PlainMessage<SalesInvoicesServiceSearchAllReq> | undefined, b: SalesInvoicesServiceSearchAllReq | PlainMessage<SalesInvoicesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a sales invoice reference
 *
 * @generated from message Scailo.SalesInvoicesServiceReferenceCreateRequest
 */
export declare class SalesInvoicesServiceReferenceCreateRequest extends Message<SalesInvoicesServiceReferenceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales invoice ID
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: uint64 goods_dispatch_id = 11;
     */
    goodsDispatchId: bigint;
    constructor(data?: PartialMessage<SalesInvoicesServiceReferenceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceReferenceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceReferenceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceReferenceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceReferenceCreateRequest;
    static equals(a: SalesInvoicesServiceReferenceCreateRequest | PlainMessage<SalesInvoicesServiceReferenceCreateRequest> | undefined, b: SalesInvoicesServiceReferenceCreateRequest | PlainMessage<SalesInvoicesServiceReferenceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a sales invoice reference
 *
 * @generated from message Scailo.SalesInvoiceReference
 */
export declare class SalesInvoiceReference extends Message<SalesInvoiceReference> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales invoice
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
     * Stores the sales invoice ID
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: uint64 goods_dispatch_id = 11;
     */
    goodsDispatchId: bigint;
    constructor(data?: PartialMessage<SalesInvoiceReference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceReference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceReference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceReference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceReference;
    static equals(a: SalesInvoiceReference | PlainMessage<SalesInvoiceReference> | undefined, b: SalesInvoiceReference | PlainMessage<SalesInvoiceReference> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales invoice references
 *
 * @generated from message Scailo.SalesInvoiceReferencesList
 */
export declare class SalesInvoiceReferencesList extends Message<SalesInvoiceReferencesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesInvoiceReference list = 1;
     */
    list: SalesInvoiceReference[];
    constructor(data?: PartialMessage<SalesInvoiceReferencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceReferencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceReferencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceReferencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceReferencesList;
    static equals(a: SalesInvoiceReferencesList | PlainMessage<SalesInvoiceReferencesList> | undefined, b: SalesInvoiceReferencesList | PlainMessage<SalesInvoiceReferencesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.SalesInvoiceItemsSearchRequest
 */
export declare class SalesInvoiceItemsSearchRequest extends Message<SalesInvoiceItemsSearchRequest> {
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
     * @generated from field: Scailo.SALES_INVOICE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_INVOICE_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.SALES_INVOICE_ITEM_STATUS status = 7;
     */
    status: SALES_INVOICE_ITEM_STATUS;
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
     * The ID of the sales invoice
     *
     * @generated from field: uint64 sales_invoice_id = 20;
     */
    salesInvoiceId: bigint;
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
    constructor(data?: PartialMessage<SalesInvoiceItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceItemsSearchRequest;
    static equals(a: SalesInvoiceItemsSearchRequest | PlainMessage<SalesInvoiceItemsSearchRequest> | undefined, b: SalesInvoiceItemsSearchRequest | PlainMessage<SalesInvoiceItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.SalesInvoicesServicePaginatedItemsResponse
 */
export declare class SalesInvoicesServicePaginatedItemsResponse extends Message<SalesInvoicesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.SalesInvoiceItem payload = 4;
     */
    payload: SalesInvoiceItem[];
    constructor(data?: PartialMessage<SalesInvoicesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServicePaginatedItemsResponse;
    static equals(a: SalesInvoicesServicePaginatedItemsResponse | PlainMessage<SalesInvoicesServicePaginatedItemsResponse> | undefined, b: SalesInvoicesServicePaginatedItemsResponse | PlainMessage<SalesInvoicesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the dispatched statistics of the sales invoice
 *
 * @generated from message Scailo.SalesInvoiceDispatchedStatistics
 */
export declare class SalesInvoiceDispatchedStatistics extends Message<SalesInvoiceDispatchedStatistics> {
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
     * Stores the dispatched quantity
     *
     * @generated from field: uint64 dispatched_quantity = 3;
     */
    dispatchedQuantity: bigint;
    constructor(data?: PartialMessage<SalesInvoiceDispatchedStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceDispatchedStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceDispatchedStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceDispatchedStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceDispatchedStatistics;
    static equals(a: SalesInvoiceDispatchedStatistics | PlainMessage<SalesInvoiceDispatchedStatistics> | undefined, b: SalesInvoiceDispatchedStatistics | PlainMessage<SalesInvoiceDispatchedStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of dispatched statistics of the sales invoice
 *
 * @generated from message Scailo.SalesInvoiceDispatchedStatisticsList
 */
export declare class SalesInvoiceDispatchedStatisticsList extends Message<SalesInvoiceDispatchedStatisticsList> {
    /**
     * @generated from field: repeated Scailo.SalesInvoiceDispatchedStatistics list = 1;
     */
    list: SalesInvoiceDispatchedStatistics[];
    constructor(data?: PartialMessage<SalesInvoiceDispatchedStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoiceDispatchedStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoiceDispatchedStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoiceDispatchedStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoiceDispatchedStatisticsList;
    static equals(a: SalesInvoiceDispatchedStatisticsList | PlainMessage<SalesInvoiceDispatchedStatisticsList> | undefined, b: SalesInvoiceDispatchedStatisticsList | PlainMessage<SalesInvoiceDispatchedStatisticsList> | undefined): boolean;
}
//# sourceMappingURL=sales_invoices.scailo_pb.d.ts.map
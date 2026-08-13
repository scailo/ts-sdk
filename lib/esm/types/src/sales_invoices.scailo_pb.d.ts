import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of the supported source record types from which a Sales Invoice can be generated.
 * This determines the operational linkage and financial inheritance of the billing document.
 *
 * @generated from enum Scailo.SALES_INVOICE_REF_FROM
 */
export declare enum SALES_INVOICE_REF_FROM {
    /**
     * @description Default behavior, ignoring the source record type. Utilized primarily within search and listing APIs.
     *
     * @generated from enum value: SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the sales invoice was generated directly from a fulfilled or approved Sales Order.
     *
     * @generated from enum value: SALES_INVOICE_REF_FROM_SALES_ORDER = 1;
     */
    SALES_INVOICE_REF_FROM_SALES_ORDER = 1
}
/**
 *
 * Enumeration of fields available for sorting sales invoice search results.
 *
 * @generated from enum Scailo.SALES_INVOICE_SORT_KEY
 */
export declare enum SALES_INVOICE_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_CREATED_AT = 1;
     */
    SALES_INVOICE_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_INVOICE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_INVOICE_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_INVOICE_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_INVOICE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided reference ID.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_INVOICE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * @description Sort alphabetically by the system-generated reference number.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * @description Sort by the total number of times the sales invoice has been amended.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    SALES_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18,
    /**
     * @description Sort by the calculated grand total value of the sales invoice.
     *
     * @generated from enum value: SALES_INVOICE_SORT_KEY_TOTAL_VALUE = 30;
     */
    SALES_INVOICE_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Enumeration of fields available for sorting sales invoice item search results.
 *
 * @generated from enum Scailo.SALES_INVOICE_ITEM_SORT_KEY
 */
export declare enum SALES_INVOICE_ITEM_SORT_KEY {
    /**
     * @description Default sort behavior (by internal item sequence ID).
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the item record was initially created.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SALES_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the item record was last modified.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp of the item.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the internal ID of the family.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    SALES_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * @description Sort by the invoiced quantity evaluated in the internal unit of measure.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SALES_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * @description Sort by the internal ID of the client's requested unit of measure.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    SALES_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * @description Sort by the invoiced quantity evaluated in the client's unit of measure.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    SALES_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * @description Sort alphabetically by the client's specific family code or SKU.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    SALES_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * @description Sort by the invoiced base unit price.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15;
     */
    SALES_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15,
    /**
     * @description Sort by the internal ID of the assigned tax group.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    SALES_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16
}
/**
 *
 * Enum defining the applicable lifecycle and verification statuses for sales invoice items.
 *
 * @generated from enum Scailo.SALES_INVOICE_ITEM_STATUS
 */
export declare enum SALES_INVOICE_ITEM_STATUS {
    /**
     * @description Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the sales invoice item association has passed verification and is actively approved.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_STATUS_APPROVED = 1;
     */
    SALES_INVOICE_ITEM_STATUS_APPROVED = 1,
    /**
     * @description Denotes that the sales invoice item association is pending review and waiting for administrative approval.
     *
     * @generated from enum value: SALES_INVOICE_ITEM_STATUS_UNAPPROVED = 2;
     */
    SALES_INVOICE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Request message for defining and creating a new Sales Invoice within the system.
 * This record serves as the formal billing document issued to a buyer, encapsulating
 * the financial demands for goods or services rendered based on a source operational record
 * (like a Sales Order). It establishes the currency, payment destination (bank account),
 * and overarching financial adjustments applied at the invoice level.
 *
 * @generated from message Scailo.SalesInvoicesServiceCreateRequest
 */
export declare class SalesInvoicesServiceCreateRequest extends Message<SalesInvoicesServiceCreateRequest> {
    /**
     *
     * @optional
     *
     * @description The globally unique identifier for the Organization or Business Entity.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 1;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 2;
     */
    userComment?: string;
    /**
     *
     * @optional
     *
     * @description The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.
     *
     * @example 15234
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 vault_folder_id = 9;
     */
    vaultFolderId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.
     *
     * @example "ABS-2023-001"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     *
     * @mandatory
     *
     * @description The specific module or record type from which this invoice originates (e.g., Sales Order).
     *
     * @example "SALES_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid SALES_INVOICE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_INVOICE_REF_FROM;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the currency used for all financial calculations and billing within this invoice.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the organization's bank account designated to receive the payment for this invoice.
     *
     * @example 15
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     *
     * @optional
     *
     * @description Any additional miscellaneous costs (e.g., late fees, freight charges) applied to the invoice, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost?: bigint;
    /**
     *
     * @optional
     *
     * @description A flat discount amount applied across the entire invoice total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 overall_discount = 17;
     */
    overallDiscount?: bigint;
    /**
     *
     * @optional
     *
     * @description The applicable rounding adjustment amount to align the final invoice total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer.
     *
     * @generated from field: optional int64 round_off = 18;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an excess tax group applied at the cumulative/invoice level (e.g., for specialized regional surcharges or cumulative tax brackets).
     *
     * @example 6
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The monetary amount of the cumulative excess tax applied to the invoice, represented in the base currency subunit.
     *
     * @example 1250
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 cumulative_excess_tax_amount = 20;
     */
    cumulativeExcessTaxAmount?: bigint;
    /**
     *
     * @optional
     *
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
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
 * Request message for updating an existing Sales Invoice record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the references, consignee & buyer, currency, project linkage, costs & discounts, payment terms, and other custom form fields
 * of an established Sales Invoice.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.SalesInvoicesServiceUpdateRequest
 */
export declare class SalesInvoicesServiceUpdateRequest extends Message<SalesInvoicesServiceUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target record that needs to be updated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     *
     * @optional
     *
     * @description Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.
     *
     * @example true
     *
     * @generated from field: optional bool notify_users = 3;
     */
    notifyUsers?: boolean;
    /**
     *
     * @optional
     *
     * @description Updated vault folder ID for documentation storage.
     *
     * @example 15235
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 vault_folder_id = 9;
     */
    vaultFolderId?: bigint;
    /**
     *
     * @optional
     *
     * @description A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.
     *
     * @example "ABS-2023-001"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: optional string reference_id = 10;
     */
    referenceId?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the currency used for all financial calculations and billing within this invoice.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 currency_id = 14;
     */
    currencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the organization's bank account designated to receive the payment for this invoice.
     *
     * @example 15
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 bank_account_id = 15;
     */
    bankAccountId?: bigint;
    /**
     *
     * @optional
     *
     * @description Any additional miscellaneous costs (e.g., late fees, freight charges) applied to the invoice, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost?: bigint;
    /**
     *
     * @optional
     *
     * @description A flat discount amount applied across the entire invoice total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 overall_discount = 17;
     */
    overallDiscount?: bigint;
    /**
     *
     * @optional
     *
     * @description The applicable rounding adjustment amount to align the final invoice total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer.
     *
     * @generated from field: optional int64 round_off = 18;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an excess tax group applied at the cumulative/invoice level (e.g., for specialized regional surcharges or cumulative tax brackets).
     *
     * @example 6
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The monetary amount of the cumulative excess tax applied to the invoice, represented in the base currency subunit.
     *
     * @example 1250
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 cumulative_excess_tax_amount = 20;
     */
    cumulativeExcessTaxAmount?: bigint;
    /**
     *
     * @optional
     *
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
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
 * Request message for triggering an autofill operation on an existing Sales Invoice.
 * This operation automatically populates the invoice with relevant line items (and optionally services)
 * by pulling them directly from the associated source document (e.g., the parent Sales Order).
 *
 * **Note:** The invoice must already be created and explicitly linked to a source reference
 * before this operation can be invoked.
 *
 * @generated from message Scailo.SalesInvoicesServiceAutofillRequest
 */
export declare class SalesInvoicesServiceAutofillRequest extends Message<SalesInvoicesServiceAutofillRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The globally unique identifier (UUID) of the target sales invoice that needs to be autofilled.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format Must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     *
     * @optional
     *
     * @description A boolean flag indicating whether service-type line items should also be pulled from the source document during the autofill operation (in addition to standard physical inventory goods).
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: optional bool include_services = 10;
     */
    includeServices?: boolean;
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
 * Represents a read-only container for universally unique identifiers (UUIDs) of related external entities.
 * This message securely exposes the downstream linkages (like the source order or currency) to external
 * clients or frontend interfaces without revealing internal sequential IDs.
 *
 * @generated from message Scailo.SalesInvoiceAncillaryParameters
 */
export declare class SalesInvoiceAncillaryParameters extends Message<SalesInvoiceAncillaryParameters> {
    /**
     *
     * @mandatory
     *
     * @description The globally unique identifier (UUID) of the associated source document (e.g., the parent Sales Order).
     *
     * @example "661f9511-f39c-42d5-b827-557766551111"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format Valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    /**
     *
     * @mandatory
     *
     * @description The globally unique identifier (UUID) of the currency used for financial calculations within this invoice.
     *
     * @example "772a8422-e18b-42d4-a815-446655442222"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format Valid v4 UUID in canonical hyphenated form.
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
 * Represents a complete, finalized Sales Invoice entity within the system.
 * This message encapsulates the comprehensive state of a formal billing document issued to a buyer,
 * including its identity metadata, strict linkage to the originating operational record (e.g., Sales Order),
 * designated payment destination (bank account), financial aggregates (taxes, discounts, and round-offs),
 * approval lifecycle, audit history, and the complete collection of billed line items.
 *
 * **Note:** This payload is typically utilized in read operations (e.g., View, Search)
 * and provides frontend clients, financial dashboards, and external accounting systems with the
 * entire context needed to render, process, collect payment, and reconcile the invoice.
 *
 * @generated from message Scailo.SalesInvoice
 */
export declare class SalesInvoice extends Message<SalesInvoice> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     *
     * @description Standard employee and record metadata including timestamps.
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     *
     * @description Detailed approval workflow state (Approver ID, Role, and Timestamps).
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     *
     * @description The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @description Comprehensive audit trail of every operation performed on this record.
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     *
     * @description UNIX timestamp of when the record transitioned to the COMPLETED state.
     *
     * @example 1698400000
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     *
     * @description Link to the document storage folder.
     *
     * @example 15234
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @description The user-provided reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     *
     * @description The system-generated immutable reference number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     *
     * @description The specific module or record type from which this invoice originates (e.g., Sales Order).
     *
     * @example "SALES_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_INVOICE_REF_FROM;
    /**
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).
     *
     * @example 1024
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     *
     * @description The unique internal identifier of the currency used for all financial calculations and billing within this invoice.
     *
     * @example 3
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     *
     * @description The unique internal identifier of the organization's bank account designated to receive the payment for this invoice.
     *
     * @example 15
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     *
     * @description Any additional miscellaneous costs (e.g., late fees, freight charges) applied to the invoice, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @generated from field: uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost: bigint;
    /**
     *
     * @description A flat discount amount applied across the entire invoice total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @generated from field: uint64 overall_discount = 17;
     */
    overallDiscount: bigint;
    /**
     *
     * @description The applicable rounding adjustment amount to align the final invoice total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     *
     * @description The unique internal identifier of an excess tax group applied at the cumulative/invoice level (e.g., for specialized regional surcharges or cumulative tax brackets).
     *
     * @example 6
     *
     * @generated from field: uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId: bigint;
    /**
     *
     * @description The monetary amount of the cumulative excess tax applied to the invoice, represented in the base currency subunit.
     *
     * @example 1250
     *
     * @generated from field: uint64 cumulative_excess_tax_amount = 20;
     */
    cumulativeExcessTaxAmount: bigint;
    /**
     *
     * @description The calculated grand total value of the sales invoice, including all items, discounts, costs, and round-offs. Represented as a standard decimal value.
     *
     * @example 15250.75
     *
     * @format Double-precision floating-point number.
     *
     * @generated from field: double total_value = 21;
     */
    totalValue: number;
    /**
     *
     * @description The number of times that this record has been amended after approval.
     *
     * @example 5
     *
     * @generated from field: uint64 amendment_count = 22;
     */
    amendmentCount: bigint;
    /**
     *
     * @description The complete, aggregated list of individual line items, products, or services that constitute this sales invoice.
     *
     * @example []
     *
     * @format Repeated array of SalesOrderItem message blocks.
     *
     * @generated from field: repeated Scailo.SalesInvoiceItem list = 30;
     */
    list: SalesInvoiceItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
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
 * Request message for appending a billable line item to an existing Sales Invoice.
 * This payload defines the specific family, quantities mapped between internal
 * and client-specific units of measure, and the final commercial terms (price, tax, round-offs)
 * for which the buyer is being formally billed.
 *
 * @generated from message Scailo.SalesInvoicesServiceItemCreateRequest
 */
export declare class SalesInvoicesServiceItemCreateRequest extends Message<SalesInvoicesServiceItemCreateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the parent sales invoice to which this item will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being invoiced.
     *
     * @example 505
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The invoiced quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The invoiced quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     *
     * @optional
     *
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 15;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The invoiced price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the tax group or tax bracket applicable to this specific line item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     *
     * @optional
     *
     * @description The applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer.
     *
     * @generated from field: optional int64 round_off = 18;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description Additional custom textual requirements, notes, or specifications associated with this billed item.
     *
     * @example "Billed per expedited shipping agreement."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 19;
     */
    specifications?: string;
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
 * Represents a single line item payload within a bulk creation request.
 * Contains the exact same transactional parameters as a standard item creation request,
 * omitting the parent invoice ID which is declared once at the batch level.
 *
 * @generated from message Scailo.SalesInvoicesServiceMultipleItemsSingleton
 */
export declare class SalesInvoicesServiceMultipleItemsSingleton extends Message<SalesInvoicesServiceMultipleItemsSingleton> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being invoiced.
     *
     * @example 505
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The invoiced quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The invoiced quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     *
     * @optional
     *
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 15;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The invoiced price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the tax group or tax bracket applicable to this specific line item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     *
     * @optional
     *
     * @description The applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer.
     *
     * @generated from field: optional int64 round_off = 18;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description Additional custom textual requirements, notes, or specifications associated with this billed item.
     *
     * @example "Billed per expedited shipping agreement."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 19;
     */
    specifications?: string;
    constructor(data?: PartialMessage<SalesInvoicesServiceMultipleItemsSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceMultipleItemsSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceMultipleItemsSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceMultipleItemsSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceMultipleItemsSingleton;
    static equals(a: SalesInvoicesServiceMultipleItemsSingleton | PlainMessage<SalesInvoicesServiceMultipleItemsSingleton> | undefined, b: SalesInvoicesServiceMultipleItemsSingleton | PlainMessage<SalesInvoicesServiceMultipleItemsSingleton> | undefined): boolean;
}
/**
 *
 * Request message for appending multiple line items to a Sales Invoice in a single batch transaction.
 * Optimized for scenarios like invoice imports or autofill operations where dozens of items
 * are attached simultaneously to a parent record.
 *
 * @generated from message Scailo.SalesInvoicesServiceMultipleItemsCreateRequest
 */
export declare class SalesInvoicesServiceMultipleItemsCreateRequest extends Message<SalesInvoicesServiceMultipleItemsCreateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the parent sales invoice to which this batch of items will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     *
     * @mandatory
     *
     * @description An array containing the individual line item payloads to be appended to the invoice.
     *
     * @example []
     *
     * @format Repeated array of SalesInvoicesServiceMultipleItemsSingleton message blocks.
     *
     * @generated from field: repeated Scailo.SalesInvoicesServiceMultipleItemsSingleton list = 11;
     */
    list: SalesInvoicesServiceMultipleItemsSingleton[];
    constructor(data?: PartialMessage<SalesInvoicesServiceMultipleItemsCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceMultipleItemsCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceMultipleItemsCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceMultipleItemsCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceMultipleItemsCreateRequest;
    static equals(a: SalesInvoicesServiceMultipleItemsCreateRequest | PlainMessage<SalesInvoicesServiceMultipleItemsCreateRequest> | undefined, b: SalesInvoicesServiceMultipleItemsCreateRequest | PlainMessage<SalesInvoicesServiceMultipleItemsCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for modifying the core transactional parameters of an existing billable line item within a Sales Invoice.
 * This payload supports updating billed quantities (across both internal and client-specific units of measure),
 * commercial terms (unit price, tax group, round-offs), and custom specifications.
 *
 * **Note:** These modifications are typically utilized during the draft or revision phases
 * of the billing lifecycle, ensuring the invoice accurately reflects the final financial obligations
 * before being officially approved and issued to the buyer.
 *
 * @generated from message Scailo.SalesInvoicesServiceItemUpdateRequest
 */
export declare class SalesInvoicesServiceItemUpdateRequest extends Message<SalesInvoicesServiceItemUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target record that needs to be updated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated invoiced quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated invoiced quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     *
     * @optional
     *
     * @description The updated client's specific alphanumeric part number, SKU, or family code used for their internal referencing.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 15;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The updated invoiced price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated unique internal identifier of the tax group or tax bracket applicable to this specific line item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     *
     * @optional
     *
     * @description The updated applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer.
     *
     * @generated from field: optional int64 round_off = 18;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description Updated additional custom textual requirements, notes, or specifications associated with this billed item.
     *
     * @example "Billed per expedited shipping agreement."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 19;
     */
    specifications?: string;
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
 * Request message for isolating updates strictly to the textual specifications or notes
 * of a Sales Invoice line item.
 * Designed for scenarios where operational instructions change without impacting any
 * commercial terms, pricing, or quantities.
 *
 * @generated from message Scailo.SalesInvoicesServiceItemSpecificationsUpdateRequest
 */
export declare class SalesInvoicesServiceItemSpecificationsUpdateRequest extends Message<SalesInvoicesServiceItemSpecificationsUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The globally unique identifier (UUID) of the target record that needs to be updated.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format Must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     *
     * @mandatory
     *
     * @description The completely overwritten textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Expedite handling required. Use pallet configuration A."
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    constructor(data?: PartialMessage<SalesInvoicesServiceItemSpecificationsUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesInvoicesServiceItemSpecificationsUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesInvoicesServiceItemSpecificationsUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesInvoicesServiceItemSpecificationsUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesInvoicesServiceItemSpecificationsUpdateRequest;
    static equals(a: SalesInvoicesServiceItemSpecificationsUpdateRequest | PlainMessage<SalesInvoicesServiceItemSpecificationsUpdateRequest> | undefined, b: SalesInvoicesServiceItemSpecificationsUpdateRequest | PlainMessage<SalesInvoicesServiceItemSpecificationsUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a complete, finalized Sales Invoice Item entity within the system.
 * This message encapsulates the comprehensive state of a single product or service being formally billed to a buyer,
 * including its relationship to the parent invoice, mapped quantities across internal and client units,
 * commercial terms (pricing, taxes, round-offs), and custom billing specifications.
 *
 * **Note:** This payload is utilized in read operations to provide frontend clients, downstream financial systems,
 * and accounting workflows with the exact, immutable state of an individual billed line item.
 *
 * @generated from message Scailo.SalesInvoiceItem
 */
export declare class SalesInvoiceItem extends Message<SalesInvoiceItem> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     *
     * @description Standard employee and record metadata including timestamps.
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     *
     * @description Detailed approval workflow state (Approver ID, Role, and Timestamps).
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     *
     * @description A boolean flag indicating whether this specific record requires further administrative approval.
     *
     * @example false
     *
     * @format Boolean true or false.
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval: boolean;
    /**
     *
     * @description Audit log comment or justification captured during the last modification or transactional operation.
     *
     * @example "This is a comment for audit purposes."
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     *
     * @description The unique internal identifier of the parent sales invoice to which this billed line item belongs.
     *
     * @example 1024
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     *
     * @description The unique internal identifier of the family or catalog item being formally billed.
     *
     * @example 505
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     *
     * @description The invoiced quantity supplied, represented in the system's internal base unit of measure. Stored in subunits (cents).
     *
     * @example 10000
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.
     *
     * @example 12
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     *
     * @description The invoiced quantity admitted and billed, represented in the client's specific unit of measure. Stored in subunits (cents).
     *
     * @example 5000
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     *
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing on the invoice.
     *
     * @example "CLI-SKU-992"
     *
     * @generated from field: string client_family_code = 15;
     */
    clientFamilyCode: string;
    /**
     *
     * @description The agreed-upon billed price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     *
     * @description The unique internal identifier of the tax group or tax bracket applicable to this specific billed line item.
     *
     * @example 4
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     *
     * @description The applicable rounding adjustment amount for this specific billed item's financial total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     *
     * @description Additional custom textual requirements, notes, or specifications associated with this billed item.
     *
     * @example "Billed per expedited shipping agreement."
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
 * Container message for a collection of Sales Invoice records.
 *
 * @generated from message Scailo.SalesInvoicesList
 */
export declare class SalesInvoicesList extends Message<SalesInvoicesList> {
    /**
     * @description An array of Sales Invoice records.
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
 * Container message for a collection of Sales Invoice Item records.
 *
 * @generated from message Scailo.SalesInvoiceItemsList
 */
export declare class SalesInvoiceItemsList extends Message<SalesInvoiceItemsList> {
    /**
     * @description An array of Sales Invoice Item records.
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
 * Represents the request payload containing the parameter constraints required to
 * retrieve the historical audit trail and lifecycle changes of a specific sales invoice item record.
 *
 * @generated from message Scailo.SalesInvoiceItemHistoryRequest
 */
export declare class SalesInvoiceItemHistoryRequest extends Message<SalesInvoiceItemHistoryRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target sales invoice associated with the historical record.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer greater than zero.
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target family associated with the historical record.
     *
     * @example 582
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer greater than zero.
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
 * Request message for retrieving preliminary contextual information about a prospective line item.
 * This payload is typically utilized by frontend interfaces to dynamically fetch default pricing,
 * historical terms, or tax configurations for a specific family prior to officially
 * adding it to a Sales Invoice. This ensures accurate data pre-filling during the invoice creation workflow.
 *
 * @generated from message Scailo.SalesInvoiceItemProspectiveInfoRequest
 */
export declare class SalesInvoiceItemProspectiveInfoRequest extends Message<SalesInvoiceItemProspectiveInfoRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the parent sales invoice that is currently being evaluated or constructed.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being evaluated for addition to the invoice.
     *
     * @example 505
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
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
 * Represents the request payload utilized to retrieve the cumulative quantity of a specific family
 * that has already been billed (invoiced) against a given source document.
 *
 * **Note:** This query is a critical reconciliation tool used during the billing lifecycle to evaluate
 * historical fulfillment and prevent over-billing against the original constraints of a Sales Order.
 *
 * @generated from message Scailo.SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest extends Message<SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     *
     * @mandatory
     *
     * @description The specific module or record type from which the invoice originates and against which the billed quantity is being checked (e.g., Sales Order).
     *
     * @example "SALES_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid SALES_INVOICE_REF_FROM enum value.
     *
     * @generated from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 1;
     */
    refFrom: SALES_INVOICE_REF_FROM;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 ref_id = 2;
     */
    refId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being queried to determine its cumulative billed quantity.
     *
     * @example 505
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
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
 * Pagination request for retrieving slices of Sales Invoice records.
 *
 * @generated from message Scailo.SalesInvoicesServicePaginationReq
 */
export declare class SalesInvoicesServicePaginationReq extends Message<SalesInvoicesServicePaginationReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to return per page.
     *
     * @example 50
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Must be a strictly positive integer (1 or greater).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: optional Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_INVOICE_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter results by a specific lifecycle status.
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.SalesInvoicesServicePaginationResponse
 */
export declare class SalesInvoicesServicePaginationResponse extends Message<SalesInvoicesServicePaginationResponse> {
    /**
     *
     * @description Number of records returned in the current response slice.
     *
     * @example 50
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     *
     * @description The offset provided in the request.
     *
     * @example 0
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     *
     * @description The total number of records matching the criteria.
     *
     * @example 1250
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     *
     * @description The array of records for the current page.
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
 * Advanced filter request for searching and paginating sales invoices using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.SalesInvoicesServiceFilterReq
 */
export declare class SalesInvoicesServiceFilterReq extends Message<SalesInvoicesServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_INVOICE_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 completed_on_start = 15;
     */
    completedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 completed_on_end = 16;
     */
    completedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string reference_id = 20;
     */
    referenceId?: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the system-generated ref number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string final_ref_number = 21;
     */
    finalRefNumber?: string;
    /**
     *
     * @optional
     *
     * @description The specific module or record type from which this invoice originates (e.g., Sales Order).
     *
     * @example "SALES_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid SALES_INVOICE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: optional Scailo.SALES_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom?: SALES_INVOICE_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 ref_id = 23;
     */
    refId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the currency used for all financial calculations and billing within this invoice.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 currency_id = 24;
     */
    currencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the organization's bank account designated to receive the payment for this invoice.
     *
     * @example 15
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 bank_account_id = 25;
     */
    bankAccountId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices that contain at least one line item belonging to this specific family ID.
     *
     * @example 505
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 family_id = 40;
     */
    familyId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).
     *
     * @example 1050
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 consignee_client_id = 50;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).
     *
     * @example 1051
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 buyer_client_id = 51;
     */
    buyerClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices by the unique internal identifier of the project associated with the linked source document (e.g., Sales Order).
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 52;
     */
    projectId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices where the grand total value is greater than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.
     *
     * @example 500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 total_value_min = 70;
     */
    totalValueMin?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices where the grand total value is less than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.
     *
     * @example 1500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 total_value_max = 71;
     */
    totalValueMax?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    /**
     *
     * @optional
     *
     * @description If `true`, the response will include the associated custom form field values for each record.
     * Set to `false` to improve performance when form data is not needed.
     *
     * @example true
     *
     * @generated from field: optional bool include_form_data = 501;
     */
    includeFormData?: boolean;
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
 * Target filter request for counting sales invoice records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.SalesInvoicesServiceCountReq
 */
export declare class SalesInvoicesServiceCountReq extends Message<SalesInvoicesServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 completed_on_start = 15;
     */
    completedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 completed_on_end = 16;
     */
    completedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string reference_id = 20;
     */
    referenceId?: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the system-generated ref number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string final_ref_number = 21;
     */
    finalRefNumber?: string;
    /**
     *
     * @optional
     *
     * @description The specific module or record type from which this invoice originates (e.g., Sales Order).
     *
     * @example "SALES_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid SALES_INVOICE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: optional Scailo.SALES_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom?: SALES_INVOICE_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 ref_id = 23;
     */
    refId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the currency used for all financial calculations and billing within this invoice.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 currency_id = 24;
     */
    currencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the organization's bank account designated to receive the payment for this invoice.
     *
     * @example 15
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 bank_account_id = 25;
     */
    bankAccountId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices that contain at least one line item belonging to this specific family ID.
     *
     * @example 505
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 family_id = 40;
     */
    familyId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).
     *
     * @example 1050
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 consignee_client_id = 50;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).
     *
     * @example 1051
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 buyer_client_id = 51;
     */
    buyerClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices by the unique internal identifier of the project associated with the linked source document (e.g., Sales Order).
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 52;
     */
    projectId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices where the grand total value is greater than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.
     *
     * @example 500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 total_value_min = 70;
     */
    totalValueMin?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices where the grand total value is less than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.
     *
     * @example 1500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 total_value_max = 71;
     */
    totalValueMax?: bigint;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
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
 * Broad-spectrum search and lookup request for locating and paginating sales invoices via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.SalesInvoicesServiceSearchAllReq
 */
export declare class SalesInvoicesServiceSearchAllReq extends Message<SalesInvoicesServiceSearchAllReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_INVOICE_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 6;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @mandatory
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
     *
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
    /**
     *
     * @optional
     *
     * @description The specific module or record type from which this invoice originates (e.g., Sales Order).
     *
     * @example "SALES_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid SALES_INVOICE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: optional Scailo.SALES_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom?: SALES_INVOICE_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 ref_id = 23;
     */
    refId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).
     *
     * @example 1050
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 consignee_client_id = 50;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).
     *
     * @example 1051
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 buyer_client_id = 51;
     */
    buyerClientId?: bigint;
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
 * Request message for creating and linking a Goods Dispatch reference to a Sales Invoice.
 * This operation establishes a verifiable, structural relationship between the financial billing document (Invoice)
 * and the physical fulfillment document (Goods Dispatch) that lists the physical goods dispatched from a warehouse or store.
 *
 * **Note:** Attaching this reference ensures strict traceability, proving that physical inventory has left
 * the facility to justify the financial charges being levied against the buyer.
 *
 * @generated from message Scailo.SalesInvoicesServiceReferenceCreateRequest
 */
export declare class SalesInvoicesServiceReferenceCreateRequest extends Message<SalesInvoicesServiceReferenceCreateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the parent sales invoice to which this goods dispatch reference is being attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the corresponding Goods Dispatch document, verifying the physical fulfillment of goods associated with this invoice.
     *
     * @example 450
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
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
 * Represents the finalized state of a reference mapping between a Sales Invoice and a Goods Dispatch.
 * This entity securely binds the physical outbound fulfillment record to the billing document,
 * maintaining an explicit audit trail that supports accounting reconciliation and resolves proof-of-delivery disputes.
 *
 * @generated from message Scailo.SalesInvoiceReference
 */
export declare class SalesInvoiceReference extends Message<SalesInvoiceReference> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     *
     * @description Standard employee and record metadata including timestamps.
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     *
     * @description Detailed approval workflow state (Approver ID, Role, and Timestamps).
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     *
     * @description A boolean flag indicating whether this specific record requires further administrative approval.
     *
     * @example false
     *
     * @format Boolean true or false.
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval: boolean;
    /**
     *
     * @description Audit log comment or justification captured during the last modification or transactional operation.
     *
     * @example "Attached dispatch #450 as proof of physical fulfillment."
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     *
     * @description The unique internal identifier of the parent sales invoice to which this reference belongs.
     *
     * @example 1024
     *
     * @generated from field: uint64 sales_invoice_id = 10;
     */
    salesInvoiceId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the mapped Goods Dispatch document that proves physical fulfillment.
     *
     * @example 450
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
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
 * Container message for a collection of Sales Invoice Reference records.
 *
 * @generated from message Scailo.SalesInvoiceReferencesList
 */
export declare class SalesInvoiceReferencesList extends Message<SalesInvoiceReferencesList> {
    /**
     * @description An array of Sales Invoice Reference records.
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
 * Request payload structure used to search and filter Sales Invoice Item records.
 * Supports pagination controls, tenancy isolation, status grouping, and text-based matching.
 *
 * @generated from message Scailo.SalesInvoiceItemsSearchRequest
 */
export declare class SalesInvoiceItemsSearchRequest extends Message<SalesInvoiceItemsSearchRequest> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.SALES_INVOICE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_INVOICE_ITEM_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: optional string entity_uuid = 6;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.SALES_INVOICE_ITEM_STATUS status = 7;
     */
    status?: SALES_INVOICE_ITEM_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_start = 10;
     */
    approvedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_end = 11;
     */
    approvedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_by_user_id = 12;
     */
    approvedByUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approver_role_id = 13;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items belonging to a specific parent sales invoice.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 sales_invoice_id = 20;
     */
    salesInvoiceId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items belonging to a specific family.
     *
     * @example 505
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 family_id = 21;
     */
    familyId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items requesting a specific client Unit of Measure (UOM).
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 client_uom_id = 23;
     */
    clientUomId?: bigint;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the client's specific alphanumeric part number, SKU, or family code.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 25;
     */
    clientFamilyCode?: string;
    /**
     *
     * @optional
     *
     * @description Filter line items mapped to a specific tax group.
     *
     * @example 4
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 tax_group_id = 27;
     */
    taxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
     *
     * @generated from field: optional string search_key = 40;
     */
    searchKey?: string;
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
 * Paginated response packet containing a subset of Sales Invoice Item records.
 * Includes complete operational state parameters for rendering frontend data grids and tables.
 *
 * @generated from message Scailo.SalesInvoicesServicePaginatedItemsResponse
 */
export declare class SalesInvoicesServicePaginatedItemsResponse extends Message<SalesInvoicesServicePaginatedItemsResponse> {
    /**
     *
     * @description Number of records returned in the current response slice.
     *
     * @example 50
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     *
     * @description The offset provided in the request.
     *
     * @example 0
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     *
     * @description The total number of records matching the criteria.
     *
     * @example 1250
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     *
     * @description The array of records for the current page.
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
 * Represents the reconciliation metrics for a specific family within a Sales Invoice.
 * This message tracks the variance between the financial obligation (what the buyer is being billed for)
 * and the physical fulfillment (what has actually been shipped via linked Goods Dispatches).
 *
 * **Note:** This statistical comparison is crucial for identifying partial shipments, backorders,
 * or potential billing discrepancies before finalizing an invoice.
 *
 * @generated from message Scailo.SalesInvoiceDispatchedStatistics
 */
export declare class SalesInvoiceDispatchedStatistics extends Message<SalesInvoiceDispatchedStatistics> {
    /**
     *
     * @description The unique internal identifier of the specific family or catalog item being analyzed.
     *
     * @example 505
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The total quantity of this family that has been formally billed on the invoice. Represented in the system's internal base unit of measure (stored in subunits/cents).
     *
     * @example 10000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 invoiced_quantity = 2;
     */
    invoicedQuantity: bigint;
    /**
     *
     * @mandatory
     *
     * @description The cumulative physical quantity of this family that has been successfully shipped or issued from the warehouse (aggregated across all linked Goods Dispatches). Represented in the system's internal base unit of measure (stored in subunits/cents).
     *
     * @example 10000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
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
 * Represents the complete collection of reconciliation metrics for a Sales Invoice.
 * This container provides a holistic, item-by-item comparison of billed quantities versus
 * physically dispatched quantities across the entire invoice payload.
 *
 * @generated from message Scailo.SalesInvoiceDispatchedStatisticsList
 */
export declare class SalesInvoiceDispatchedStatisticsList extends Message<SalesInvoiceDispatchedStatisticsList> {
    /**
     *
     * @description The aggregated list of fulfillment versus billing metrics, grouped by individual families.
     *
     * @format Repeated array of SalesInvoiceDispatchedStatistics message blocks. Can be empty if no items or dispatches exist.
     *
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
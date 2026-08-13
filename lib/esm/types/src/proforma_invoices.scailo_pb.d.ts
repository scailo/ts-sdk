import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of the supported source record types from which a Proforma Invoice can be generated.
 * This determines the operational linkage and financial inheritance of the preliminary billing document.
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_REF_FROM
 */
export declare enum PROFORMA_INVOICE_REF_FROM {
    /**
     * @description Default behavior, ignoring the source record type. Utilized primarily within search and listing APIs.
     *
     * @generated from enum value: PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the proforma invoice was generated directly from a fulfilled or approved Sales Order.
     *
     * @generated from enum value: PROFORMA_INVOICE_REF_FROM_SALES_ORDER = 1;
     */
    PROFORMA_INVOICE_REF_FROM_SALES_ORDER = 1
}
/**
 *
 * Enumeration of fields available for sorting proforma invoice search results.
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_SORT_KEY
 */
export declare enum PROFORMA_INVOICE_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_CREATED_AT = 1;
     */
    PROFORMA_INVOICE_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_MODIFIED_AT = 2;
     */
    PROFORMA_INVOICE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVED_ON = 3;
     */
    PROFORMA_INVOICE_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVED_BY = 4;
     */
    PROFORMA_INVOICE_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PROFORMA_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_COMPLETED_ON = 6;
     */
    PROFORMA_INVOICE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided reference ID.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_REFERENCE_ID = 10;
     */
    PROFORMA_INVOICE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * @description Sort alphabetically by the system-generated reference number.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PROFORMA_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * @description Sort by the total number of times the sales invoice has been amended.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    PROFORMA_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18,
    /**
     * @description Sort by the calculated grand total value of the sales invoice.
     *
     * @generated from enum value: PROFORMA_INVOICE_SORT_KEY_TOTAL_VALUE = 30;
     */
    PROFORMA_INVOICE_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Enumeration of the supported financial conversion statuses for a Proforma Invoice.
 * This tracks the lifecycle progression of a preliminary billing document, identifying
 * whether its estimated charges have been formally realized and converted into a final, legally binding Sales Invoice.
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_BILLING_STATUS
 */
export declare enum PROFORMA_INVOICE_BILLING_STATUS {
    /**
     * @description Default behavior, ignoring the billing status criteria. Utilized primarily within search and filtering payloads to return all records regardless of their conversion state.
     *
     * @generated from enum value: PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * @description Indicates that the proforma invoice has been formally converted into a finalized, legally binding Sales Invoice (typically after physical fulfillment is complete).
     *
     * @generated from enum value: PROFORMA_INVOICE_BILLING_STATUS_BILLED = 1;
     */
    PROFORMA_INVOICE_BILLING_STATUS_BILLED = 1,
    /**
     * @description Indicates that the proforma invoice remains in a preliminary state (e.g., acting as an estimate or awaiting advance payment) and has not yet been converted into a formal Sales Invoice.
     *
     * @generated from enum value: PROFORMA_INVOICE_BILLING_STATUS_UNBILLED = 2;
     */
    PROFORMA_INVOICE_BILLING_STATUS_UNBILLED = 2
}
/**
 *
 * Enumeration of fields available for sorting proforma invoice item search results.
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_ITEM_SORT_KEY
 */
export declare enum PROFORMA_INVOICE_ITEM_SORT_KEY {
    /**
     * @description Default sort behavior (by internal item sequence ID).
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the item record was initially created.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the item record was last modified.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp of the item.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the internal ID of the family.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * @description Sort by the invoiced quantity evaluated in the internal unit of measure.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * @description Sort by the internal ID of the client's requested unit of measure.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * @description Sort by the invoiced quantity evaluated in the client's unit of measure.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * @description Sort alphabetically by the client's specific family code or SKU.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * @description Sort by the invoiced base unit price.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15,
    /**
     * @description Sort by the internal ID of the assigned tax group.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    PROFORMA_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16
}
/**
 *
 * Enum defining the applicable lifecycle and verification statuses for proforma invoice items.
 *
 * @generated from enum Scailo.PROFORMA_INVOICE_ITEM_STATUS
 */
export declare enum PROFORMA_INVOICE_ITEM_STATUS {
    /**
     * @description Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    PROFORMA_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the proforma invoice item association has passed verification and is actively approved.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_STATUS_APPROVED = 1;
     */
    PROFORMA_INVOICE_ITEM_STATUS_APPROVED = 1,
    /**
     * @description Denotes that the proforma invoice item association is pending review and waiting for administrative approval.
     *
     * @generated from enum value: PROFORMA_INVOICE_ITEM_STATUS_UNAPPROVED = 2;
     */
    PROFORMA_INVOICE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Request message for defining and creating a new Proforma Invoice within the system.
 * This record serves as a preliminary bill of sale or estimated invoice sent to a buyer in advance
 * of a shipment or final delivery. It encapsulates the anticipated financial demands for goods or services
 * (based on a source document like a Sales Order) and is frequently used to secure advance payments,
 * facilitate customs declarations, or secure internal purchasing approvals on the buyer's end.
 *
 * @generated from message Scailo.ProformaInvoicesServiceCreateRequest
 */
export declare class ProformaInvoicesServiceCreateRequest extends Message<ProformaInvoicesServiceCreateRequest> {
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
     * @description The specific module or record type from which this preliminary invoice originates (e.g., Sales Order).
     *
     * @example "PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid PROFORMA_INVOICE_REF_FROM enum value.
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 12;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being estimated).
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
     * @description The unique internal identifier of the currency used for all financial estimations within this proforma invoice.
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
     * @description The unique internal identifier of the organization's bank account designated to receive advance payments based on this proforma invoice.
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
     * @description Any estimated additional miscellaneous costs (e.g., anticipated freight charges) applied to the proforma invoice, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Defaults to 0.
     *
     * @generated from field: optional uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost?: bigint;
    /**
     *
     * @optional
     *
     * @description A flat estimated discount amount applied across the entire proforma invoice total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Defaults to 0.
     *
     * @generated from field: optional uint64 overall_discount = 17;
     */
    overallDiscount?: bigint;
    /**
     *
     * @optional
     *
     * @description The estimated rounding adjustment amount to align the anticipated final invoice total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer. Defaults to 0.
     *
     * @generated from field: optional int64 round_off = 18;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an excess tax group anticipated at the cumulative/invoice level (e.g., for specialized regional surcharges).
     *
     * @example 6
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Defaults to 0.
     *
     * @generated from field: optional uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The anticipated monetary amount of the cumulative excess tax applied to the proforma invoice, represented in the base currency subunit.
     *
     * @example 1250
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Defaults to 0.
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
 * Request message for updating an existing Proforma Invoice record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the references, consignee & buyer, currency, project linkage, costs & discounts, payment terms, and other custom form fields
 * of an established Proforma Invoice.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.ProformaInvoicesServiceUpdateRequest
 */
export declare class ProformaInvoicesServiceUpdateRequest extends Message<ProformaInvoicesServiceUpdateRequest> {
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
     * @description Updated alphanumeric reference ID. Must contain at least 1 character.
     *
     * @example "ABS-2023-001-REV"
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
     * @description The unique internal identifier of the currency used for all financial estimations within this proforma invoice.
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
     * @description The unique internal identifier of the organization's bank account designated to receive advance payments based on this proforma invoice.
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
     * @description Any estimated additional miscellaneous costs (e.g., anticipated freight charges) applied to the proforma invoice, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Defaults to 0.
     *
     * @generated from field: optional uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost?: bigint;
    /**
     *
     * @optional
     *
     * @description A flat estimated discount amount applied across the entire proforma invoice total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Defaults to 0.
     *
     * @generated from field: optional uint64 overall_discount = 17;
     */
    overallDiscount?: bigint;
    /**
     *
     * @optional
     *
     * @description The estimated rounding adjustment amount to align the anticipated final invoice total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer. Defaults to 0.
     *
     * @generated from field: optional int64 round_off = 18;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an excess tax group anticipated at the cumulative/invoice level (e.g., for specialized regional surcharges).
     *
     * @example 6
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Defaults to 0.
     *
     * @generated from field: optional uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The anticipated monetary amount of the cumulative excess tax applied to the proforma invoice, represented in the base currency subunit.
     *
     * @example 1250
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Defaults to 0.
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
 * Request message for triggering an autofill operation on an existing Proforma Invoice.
 * This operation automatically populates the invoice with relevant line items (and optionally services)
 * by pulling them directly from the associated source document (e.g., the parent Sales Order).
 *
 * **Note:** The invoice must already be created and explicitly linked to a source reference
 * before this operation can be invoked.
 *
 * @generated from message Scailo.ProformaInvoicesServiceAutofillRequest
 */
export declare class ProformaInvoicesServiceAutofillRequest extends Message<ProformaInvoicesServiceAutofillRequest> {
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
     * @description The globally unique identifier (UUID) of the target proforma invoice that needs to be autofilled.
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
 * Represents a read-only container for universally unique identifiers (UUIDs) of related external entities.
 * This message securely exposes the downstream linkages (like the source order or currency) to external
 * clients or frontend interfaces without revealing internal sequential IDs.
 *
 * @generated from message Scailo.ProformaInvoiceAncillaryParameters
 */
export declare class ProformaInvoiceAncillaryParameters extends Message<ProformaInvoiceAncillaryParameters> {
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
 * Represents a complete, finalized Proforma Invoice entity within the system.
 * This message encapsulates the comprehensive state of a preliminary billing document
 * issued to a buyer prior to physical fulfillment or final delivery. It includes the
 * document's identity metadata, operational linkages to a source record (e.g., Sales Order),
 * designated bank accounts for advance payments, financial estimations (taxes, discounts, and round-offs),
 * approval lifecycle, audit history, and the complete collection of estimated line items.
 *
 * **Note:** This payload is typically utilized in read operations (e.g., View, Search)
 * and provides frontend clients, financial dashboards, and external systems with the
 * entire context needed to render the proforma document for customs declarations,
 * secure advance payments, or facilitate internal purchasing approvals on the buyer's end.
 *
 * @generated from message Scailo.ProformaInvoice
 */
export declare class ProformaInvoice extends Message<ProformaInvoice> {
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
     * @description The specific module or record type from which this preliminary invoice originates (e.g., Sales Order).
     *
     * @example "PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 12;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
    /**
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being estimated).
     *
     * @example 1024
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     *
     * @description The unique internal identifier of the currency used for all financial estimations within this proforma invoice.
     *
     * @example 3
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     *
     * @description The unique internal identifier of the organization's bank account designated to receive advance payments based on this proforma invoice.
     *
     * @example 15
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     *
     * @description Any estimated additional miscellaneous costs (e.g., anticipated freight charges) applied to the proforma invoice, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @generated from field: uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost: bigint;
    /**
     *
     * @description A flat estimated discount amount applied across the entire proforma invoice total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @generated from field: uint64 overall_discount = 17;
     */
    overallDiscount: bigint;
    /**
     *
     * @description The estimated rounding adjustment amount to align the anticipated final invoice total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     *
     * @description The unique internal identifier of an excess tax group anticipated at the cumulative/invoice level (e.g., for specialized regional surcharges).
     *
     * @example 6
     *
     * @generated from field: uint64 cumulative_excess_tax_group_id = 19;
     */
    cumulativeExcessTaxGroupId: bigint;
    /**
     *
     * @description The anticipated monetary amount of the cumulative excess tax applied to the proforma invoice, represented in the base currency subunit.
     *
     * @example 1250
     *
     * @generated from field: uint64 cumulative_excess_tax_amount = 20;
     */
    cumulativeExcessTaxAmount: bigint;
    /**
     *
     * @description The calculated grand total value of the proforma invoice, including all items, discounts, costs, and round-offs. Represented as a standard decimal value.
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
     * @description The complete, aggregated list of individual line items, products, or services that constitute this proforma invoice.
     *
     * @example []
     *
     * @format Repeated array of ProformaInvoiceItem message blocks.
     *
     * @generated from field: repeated Scailo.ProformaInvoiceItem list = 30;
     */
    list: ProformaInvoiceItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
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
 * Request message for appending a preliminary line item to an existing Proforma Invoice.
 * This payload defines the specific family, estimated quantities mapped between internal
 * and client-specific units of measure, and the anticipated commercial terms (price, tax, round-offs)
 * presented to the buyer in advance of actual fulfillment or final billing.
 *
 * @generated from message Scailo.ProformaInvoicesServiceItemCreateRequest
 */
export declare class ProformaInvoicesServiceItemCreateRequest extends Message<ProformaInvoicesServiceItemCreateRequest> {
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
     * @description The unique internal identifier of the parent proforma invoice to which this preliminary item will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being estimated in this proforma invoice.
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
     * @description The estimated quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
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
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this estimated item.
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
     * @description The estimated quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
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
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing of this item.
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
     * @description The estimated price per unit for this item, represented in the base currency subunit (e.g., cents).
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
     * @description The unique internal identifier of the tax group or tax bracket anticipated for this specific line item.
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
     * @description The applicable rounding adjustment amount for this specific item's estimated financial total. Can be positive or negative, represented in the base currency subunit.
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
     * @description Additional custom textual requirements, notes, or specifications associated with this preliminary item.
     *
     * @example "Estimated based on current freight rates."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 19;
     */
    specifications?: string;
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
 * Represents a single line item payload within a bulk creation request.
 * Contains the exact same transactional parameters as a standard item creation request,
 * omitting the parent invoice ID which is declared once at the batch level.
 *
 * @generated from message Scailo.ProformaInvoicesServiceMultipleItemsSingleton
 */
export declare class ProformaInvoicesServiceMultipleItemsSingleton extends Message<ProformaInvoicesServiceMultipleItemsSingleton> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being estimated in this proforma invoice.
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
     * @description The estimated quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
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
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this estimated item.
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
     * @description The estimated quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
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
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing of this item.
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
     * @description The estimated price per unit for this item, represented in the base currency subunit (e.g., cents).
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
     * @description The unique internal identifier of the tax group or tax bracket anticipated for this specific line item.
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
     * @description The applicable rounding adjustment amount for this specific item's estimated financial total. Can be positive or negative, represented in the base currency subunit.
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
     * @description Additional custom textual requirements, notes, or specifications associated with this preliminary item.
     *
     * @example "Estimated based on current freight rates."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 19;
     */
    specifications?: string;
    constructor(data?: PartialMessage<ProformaInvoicesServiceMultipleItemsSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceMultipleItemsSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceMultipleItemsSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceMultipleItemsSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceMultipleItemsSingleton;
    static equals(a: ProformaInvoicesServiceMultipleItemsSingleton | PlainMessage<ProformaInvoicesServiceMultipleItemsSingleton> | undefined, b: ProformaInvoicesServiceMultipleItemsSingleton | PlainMessage<ProformaInvoicesServiceMultipleItemsSingleton> | undefined): boolean;
}
/**
 *
 * Request message for appending multiple line items to a Proforma Invoice in a single batch transaction.
 * Optimized for scenarios like invoice imports or autofill operations where dozens of items
 * are attached simultaneously to a parent record.
 *
 * @generated from message Scailo.ProformaInvoicesServiceMultipleItemsCreateRequest
 */
export declare class ProformaInvoicesServiceMultipleItemsCreateRequest extends Message<ProformaInvoicesServiceMultipleItemsCreateRequest> {
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
     * @description The unique internal identifier of the parent proforma invoice to which this batch of items will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
    /**
     *
     * @mandatory
     *
     * @description An array containing the individual line item payloads to be appended to the invoice.
     *
     * @example []
     *
     * @format Repeated array of ProformaInvoicesServiceMultipleItemsSingleton message blocks.
     *
     * @generated from field: repeated Scailo.ProformaInvoicesServiceMultipleItemsSingleton list = 11;
     */
    list: ProformaInvoicesServiceMultipleItemsSingleton[];
    constructor(data?: PartialMessage<ProformaInvoicesServiceMultipleItemsCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceMultipleItemsCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceMultipleItemsCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceMultipleItemsCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceMultipleItemsCreateRequest;
    static equals(a: ProformaInvoicesServiceMultipleItemsCreateRequest | PlainMessage<ProformaInvoicesServiceMultipleItemsCreateRequest> | undefined, b: ProformaInvoicesServiceMultipleItemsCreateRequest | PlainMessage<ProformaInvoicesServiceMultipleItemsCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for modifying the core transactional parameters of an existing preliminary line item within a Proforma Invoice.
 * This payload supports updating estimated quantities (across both internal and client-specific units of measure),
 * anticipated commercial terms (unit price, tax group, round-offs), and custom specifications.
 *
 * **Note:** These modifications are typically utilized during the negotiation or internal approval phases
 * of the pre-billing lifecycle, ensuring the proforma document accurately reflects the expected financial
 * obligations before advance payments are requested or final shipments occur.
 *
 * @generated from message Scailo.ProformaInvoicesServiceItemUpdateRequest
 */
export declare class ProformaInvoicesServiceItemUpdateRequest extends Message<ProformaInvoicesServiceItemUpdateRequest> {
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
     * @description The updated estimated quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
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
     * @description The updated unique internal identifier of the Unit of Measure (UOM) requested by the client for this estimated item.
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
     * @description The updated estimated quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
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
     * @description The updated anticipated price per unit for this item, represented in the base currency subunit (e.g., cents).
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
     * @description The updated unique internal identifier of the tax group or tax bracket anticipated for this specific line item.
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
     * @description The updated applicable rounding adjustment amount for this specific item's anticipated financial total. Can be positive or negative, represented in the base currency subunit.
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
     * @description Updated additional custom textual requirements, notes, or specifications associated with this preliminary item.
     *
     * @example "Estimated based on current freight rates."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 19;
     */
    specifications?: string;
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
 * Request message for isolating updates strictly to the textual specifications or notes
 * of a Proforma Invoice line item.
 * Designed for scenarios where operational instructions change without impacting any
 * commercial terms, pricing, or quantities.
 *
 * @generated from message Scailo.ProformaInvoicesServiceItemSpecificationsUpdateRequest
 */
export declare class ProformaInvoicesServiceItemSpecificationsUpdateRequest extends Message<ProformaInvoicesServiceItemSpecificationsUpdateRequest> {
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
     * @description Additional custom textual requirements, notes, or specifications associated with this preliminary item.
     *
     * @example "Estimated based on current freight rates."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    constructor(data?: PartialMessage<ProformaInvoicesServiceItemSpecificationsUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProformaInvoicesServiceItemSpecificationsUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProformaInvoicesServiceItemSpecificationsUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceItemSpecificationsUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProformaInvoicesServiceItemSpecificationsUpdateRequest;
    static equals(a: ProformaInvoicesServiceItemSpecificationsUpdateRequest | PlainMessage<ProformaInvoicesServiceItemSpecificationsUpdateRequest> | undefined, b: ProformaInvoicesServiceItemSpecificationsUpdateRequest | PlainMessage<ProformaInvoicesServiceItemSpecificationsUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a complete Proforma Invoice Item entity within the system.
 * This message encapsulates the comprehensive state of a single product or service being preliminarily estimated
 * for a buyer. It includes its relationship to the parent proforma invoice, mapped estimated quantities across
 * internal and client units, anticipated commercial terms (pricing, taxes, round-offs), and custom specifications.
 *
 * **Note:** This payload is utilized in read operations to provide frontend clients, downstream financial systems,
 * and approval workflows with the exact state of an individual estimated line item during the pre-billing,
 * customs declaration, negotiation, or advance payment phases.
 *
 * @generated from message Scailo.ProformaInvoiceItem
 */
export declare class ProformaInvoiceItem extends Message<ProformaInvoiceItem> {
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
     * @description The unique internal identifier of the parent proforma invoice to which this preliminary item will be attached.
     *
     * @example 1024
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
    /**
     *
     * @description The unique internal identifier of the family or catalog item being estimated in this proforma invoice.
     *
     * @example 505
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     *
     * @description The estimated quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this estimated item.
     *
     * @example 12
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     *
     * @description The estimated quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 5000
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     *
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing of this item.
     *
     * @example "CLI-SKU-992"
     *
     * @generated from field: string client_family_code = 15;
     */
    clientFamilyCode: string;
    /**
     *
     * @description The estimated price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     *
     * @description The unique internal identifier of the tax group or tax bracket anticipated for this specific line item.
     *
     * @example 4
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     *
     * @description The applicable rounding adjustment amount for this specific item's estimated financial total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     *
     * @description Additional custom textual requirements, notes, or specifications associated with this preliminary item.
     *
     * @example "Estimated based on current freight rates."
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
 * Container message for a collection of Proforma Invoice records.
 *
 * @generated from message Scailo.ProformaInvoicesList
 */
export declare class ProformaInvoicesList extends Message<ProformaInvoicesList> {
    /**
     * @description An array of Proforma Invoice records.
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
 * Container message for a collection of Proforma Invoice Item records.
 *
 * @generated from message Scailo.ProformaInvoiceItemsList
 */
export declare class ProformaInvoiceItemsList extends Message<ProformaInvoiceItemsList> {
    /**
     * @description An array of Proforma Invoice Item records.
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
 * Represents the request payload containing the parameter constraints required to
 * retrieve the historical audit trail and lifecycle changes of a specific proforma invoice item record.
 *
 * @generated from message Scailo.ProformaInvoiceItemHistoryRequest
 */
export declare class ProformaInvoiceItemHistoryRequest extends Message<ProformaInvoiceItemHistoryRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target proforma invoice associated with the historical record.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer greater than zero.
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
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
 * Represents the request payload utilized to fetch the default, auto-populated configuration for a potential line item
 * before it is formally added to a Proforma Invoice.
 *
 * **Note:** This is a critical templating operation utilized by frontend interfaces during the drafting phase.
 * By evaluating the provided invoice ID and family, the system cross-references the originating source
 * document (e.g., a Sales Order) to automatically determine the negotiated unit price, remaining unbilled quantities,
 * and applicable tax brackets, thereby minimizing manual data entry and ensuring financial consistency.
 *
 * @generated from message Scailo.ProformaInvoiceItemProspectiveInfoRequest
 */
export declare class ProformaInvoiceItemProspectiveInfoRequest extends Message<ProformaInvoiceItemProspectiveInfoRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the parent proforma invoice that is currently being evaluated or constructed.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 proforma_invoice_id = 10;
     */
    proformaInvoiceId: bigint;
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
 * Represents the request payload utilized to retrieve the cumulative quantity of a specific family
 * that has already been included in preliminary or proforma invoices against a given source document.
 *
 * **Note:** This query acts as a critical safeguard during the pre-billing phase. It evaluates
 * historical estimations to prevent frontend clients and downstream APIs from estimating or
 * requesting advance payment for more items than were originally constrained in the parent document (e.g., a Sales Order).
 *
 * @generated from message Scailo.ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest extends Message<ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     *
     * @mandatory
     *
     * @description The specific module or record type from which the preliminary invoice originates and against which the estimated quantity is being checked (e.g., Sales Order).
     *
     * @example "PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid PROFORMA_INVOICE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 1;
     */
    refFrom: PROFORMA_INVOICE_REF_FROM;
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
 * Pagination request for retrieving slices of Proforma Invoice records.
 *
 * @generated from message Scailo.ProformaInvoicesServicePaginationReq
 */
export declare class ProformaInvoicesServicePaginationReq extends Message<ProformaInvoicesServicePaginationReq> {
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
     * @generated from field: optional Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey?: PROFORMA_INVOICE_SORT_KEY;
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
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.ProformaInvoicesServicePaginationResponse
 */
export declare class ProformaInvoicesServicePaginationResponse extends Message<ProformaInvoicesServicePaginationResponse> {
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
 * Advanced filter request for searching and paginating proforma invoices using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.ProformaInvoicesServiceFilterReq
 */
export declare class ProformaInvoicesServiceFilterReq extends Message<ProformaInvoicesServiceFilterReq> {
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
     * @generated from field: optional Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey?: PROFORMA_INVOICE_SORT_KEY;
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
     * @description The specific module or record type from which the preliminary invoice originates and against which the estimated quantity is being checked (e.g., Sales Order).
     *
     * @example "PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid PROFORMA_INVOICE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: optional Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom?: PROFORMA_INVOICE_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).
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
     * @description The unique internal identifier of the currency used for all financial estimations within this proforma invoice.
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
     * @description The unique internal identifier of the organization's bank account designated to receive advance payments based on this proforma invoice.
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
     * @description Filter proforma invoices that contain at least one line item belonging to this specific family ID.
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
     * @description Filter proforma invoices based on their financial conversion lifecycle state—specifically, whether they remain as preliminary estimates (unbilled) or have been formally converted into finalized Sales Invoices (billed).
     *
     * @example PROFORMA_INVOICE_BILLING_STATUS_UNBILLED
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid PROFORMA_INVOICE_BILLING_STATUS enum value.
     *
     * @generated from field: optional Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 50;
     */
    billingStatus?: PROFORMA_INVOICE_BILLING_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).
     *
     * @example 1050
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 consignee_client_id = 60;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).
     *
     * @example 1051
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 buyer_client_id = 61;
     */
    buyerClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices by the unique internal identifier of the project associated with the linked source document (e.g., Sales Order).
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 62;
     */
    projectId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices where the grand total value is greater than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.
     *
     * @example 500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 total_value_min = 80;
     */
    totalValueMin?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices where the grand total value is less than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.
     *
     * @example 1500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 total_value_max = 81;
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
 * Target filter request for counting proforma invoice records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.ProformaInvoicesServiceCountReq
 */
export declare class ProformaInvoicesServiceCountReq extends Message<ProformaInvoicesServiceCountReq> {
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
     * @description The specific module or record type from which the preliminary invoice originates and against which the estimated quantity is being checked (e.g., Sales Order).
     *
     * @example "PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid PROFORMA_INVOICE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: optional Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom?: PROFORMA_INVOICE_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).
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
     * @description The unique internal identifier of the currency used for all financial estimations within this proforma invoice.
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
     * @description The unique internal identifier of the organization's bank account designated to receive advance payments based on this proforma invoice.
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
     * @description Filter proforma invoices that contain at least one line item belonging to this specific family ID.
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
     * @description Filter proforma invoices based on their financial conversion lifecycle state—specifically, whether they remain as preliminary estimates (unbilled) or have been formally converted into finalized Sales Invoices (billed).
     *
     * @example PROFORMA_INVOICE_BILLING_STATUS_UNBILLED
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid PROFORMA_INVOICE_BILLING_STATUS enum value.
     *
     * @generated from field: optional Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 50;
     */
    billingStatus?: PROFORMA_INVOICE_BILLING_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).
     *
     * @example 1050
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 consignee_client_id = 60;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).
     *
     * @example 1051
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 buyer_client_id = 61;
     */
    buyerClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices by the unique internal identifier of the project associated with the linked source document (e.g., Sales Order).
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 62;
     */
    projectId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices where the grand total value is greater than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.
     *
     * @example 500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 total_value_min = 80;
     */
    totalValueMin?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices where the grand total value is less than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.
     *
     * @example 1500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 total_value_max = 81;
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
 * Broad-spectrum search and lookup request for locating and paginating proforma invoices via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.ProformaInvoicesServiceSearchAllReq
 */
export declare class ProformaInvoicesServiceSearchAllReq extends Message<ProformaInvoicesServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey?: PROFORMA_INVOICE_SORT_KEY;
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
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
    /**
     *
     * @optional
     *
     * @description The specific module or record type from which the preliminary invoice originates and against which the estimated quantity is being checked (e.g., Sales Order).
     *
     * @example "PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid PROFORMA_INVOICE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: optional Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;
     */
    refFrom?: PROFORMA_INVOICE_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).
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
     * @description Filter proforma invoices based on their financial conversion lifecycle state—specifically, whether they remain as preliminary estimates (unbilled) or have been formally converted into finalized Sales Invoices (billed).
     *
     * @example PROFORMA_INVOICE_BILLING_STATUS_UNBILLED
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid PROFORMA_INVOICE_BILLING_STATUS enum value.
     *
     * @generated from field: optional Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 40;
     */
    billingStatus?: PROFORMA_INVOICE_BILLING_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter proforma invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).
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
     * @description Filter proforma invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).
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
 * Request payload structure used to search and filter Proforma Invoice Item records.
 * Supports pagination controls, tenancy isolation, status grouping, and text-based matching.
 *
 * @generated from message Scailo.ProformaInvoiceItemsSearchRequest
 */
export declare class ProformaInvoiceItemsSearchRequest extends Message<ProformaInvoiceItemsSearchRequest> {
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
     * @generated from field: optional Scailo.PROFORMA_INVOICE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey?: PROFORMA_INVOICE_ITEM_SORT_KEY;
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
     * @generated from field: optional Scailo.PROFORMA_INVOICE_ITEM_STATUS status = 7;
     */
    status?: PROFORMA_INVOICE_ITEM_STATUS;
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
     * @description Filter line items belonging to a specific parent proforma invoice.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 proforma_invoice_id = 20;
     */
    proformaInvoiceId?: bigint;
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
 * Paginated response packet containing a subset of Proforma Invoice Item records.
 * Includes complete operational state parameters for rendering frontend data grids and tables.
 *
 * @generated from message Scailo.ProformaInvoicesServicePaginatedItemsResponse
 */
export declare class ProformaInvoicesServicePaginatedItemsResponse extends Message<ProformaInvoicesServicePaginatedItemsResponse> {
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
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting sales quotation search results.
 *
 * @generated from enum Scailo.SALES_QUOTATION_SORT_KEY
 */
export declare enum SALES_QUOTATION_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_CREATED_AT = 1;
     */
    SALES_QUOTATION_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_QUOTATION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_QUOTATION_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_QUOTATION_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_QUOTATION_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_QUOTATION_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided reference ID.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_QUOTATION_SORT_KEY_REFERENCE_ID = 10,
    /**
     * @description Sort alphabetically by the system-generated reference number.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_QUOTATION_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * @description Sort by the internal ID of the consignee client.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_CONSIGNEE_CLIENT_ID = 12;
     */
    SALES_QUOTATION_SORT_KEY_CONSIGNEE_CLIENT_ID = 12,
    /**
     * @description Sort by the internal ID of the buyer client.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_BUYER_CLIENT_ID = 13;
     */
    SALES_QUOTATION_SORT_KEY_BUYER_CLIENT_ID = 13,
    /**
     * @description Sort by the internal ID of the proposed fulfillment location.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_LOCATION_ID = 14;
     */
    SALES_QUOTATION_SORT_KEY_LOCATION_ID = 14,
    /**
     * @description Sort by the internal ID of the assigned currency.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_CURRENCY_ID = 15;
     */
    SALES_QUOTATION_SORT_KEY_CURRENCY_ID = 15,
    /**
     * @description Sort by the internal ID of the associated project.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_PROJECT_ID = 16;
     */
    SALES_QUOTATION_SORT_KEY_PROJECT_ID = 16,
    /**
     * @description Sort by the monetary amount proposed to be paid in advance prior to fulfillment.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_PAYMENT_ADVANCE = 17;
     */
    SALES_QUOTATION_SORT_KEY_PAYMENT_ADVANCE = 17,
    /**
     * @description Sort by the total number of times the sales quotation has been amended.
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    SALES_QUOTATION_SORT_KEY_AMENDMENT_COUNT = 18
}
/**
 *
 * Enumeration of the operational contexts in which a referenced document is applied to a Sales Quotation.
 *
 * @generated from enum Scailo.SALES_QUOTATION_REFERENCE_CONTEXT
 */
export declare enum SALES_QUOTATION_REFERENCE_CONTEXT {
    /**
     * @description Default behavior, ignoring the context filter. Utilized primarily within search and listing APIs.
     *
     * @generated from enum value: SALES_QUOTATION_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the referenced document is used specifically to dictate billing or invoicing constraints.
     *
     * @generated from enum value: SALES_QUOTATION_REFERENCE_CONTEXT_BILLING = 1;
     */
    SALES_QUOTATION_REFERENCE_CONTEXT_BILLING = 1
}
/**
 *
 * Enumeration of the supported source record types that can be linked to a Sales Quotation.
 *
 * @generated from enum Scailo.SALES_QUOTATION_REFERENCE_REF_FROM
 */
export declare enum SALES_QUOTATION_REFERENCE_REF_FROM {
    /**
     * @description Default behavior, ignoring the source record type. Utilized primarily within search and listing APIs.
     *
     * @generated from enum value: SALES_QUOTATION_REFERENCE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_REFERENCE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the reference originates from a Sales Enquiry.
     *
     * @generated from enum value: SALES_QUOTATION_REFERENCE_REF_FROM_SALES_ENQUIRY = 2;
     */
    SALES_QUOTATION_REFERENCE_REF_FROM_SALES_ENQUIRY = 2
}
/**
 *
 * Enumeration of fields available for sorting sales quotation item search results.
 *
 * @generated from enum Scailo.SALES_QUOTATION_ITEM_SORT_KEY
 */
export declare enum SALES_QUOTATION_ITEM_SORT_KEY {
    /**
     * @description Default sort behavior (by internal item sequence ID).
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the item record was initially created.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the item record was last modified.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp of the item.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the internal ID of the family.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * @description Sort by the quoted quantity evaluated in the internal unit of measure.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * @description Sort by the internal ID of the client's requested unit of measure.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * @description Sort by the quoted quantity evaluated in the client's unit of measure.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * @description Sort alphabetically by the client's specific family code or SKU.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * @description Sort by the proposed base unit price.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_UNIT_PRICE = 15;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_UNIT_PRICE = 15,
    /**
     * @description Sort by the internal ID of the assigned tax group.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_TAX_GROUP_ID = 16,
    /**
     * @description Sort by the percentage discount applied to the item.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_DISCOUNT = 17;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_DISCOUNT = 17,
    /**
     * @description Sort chronologically by the target delivery date for the item.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_DELIVERY_DATE = 18;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_DELIVERY_DATE = 18
}
/**
 *
 * Enum defining the applicable lifecycle and verification statuses for sales quotation items.
 *
 * @generated from enum Scailo.SALES_QUOTATION_ITEM_STATUS
 */
export declare enum SALES_QUOTATION_ITEM_STATUS {
    /**
     * @description Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the sales quotation item association has passed verification and is actively approved.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_STATUS_APPROVED = 1;
     */
    SALES_QUOTATION_ITEM_STATUS_APPROVED = 1,
    /**
     * @description Denotes that the sales quotation item association is pending review and waiting for administrative approval.
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_STATUS_UNAPPROVED = 2;
     */
    SALES_QUOTATION_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Request message for defining and creating a new Sales Quotation within the system.
 * This record acts as the foundational pre-sales document for proposing terms to a prospective buyer,
 * encapsulating proposed buyer and consignee relationships, estimated billing and shipping parameters,
 * financial adjustments (such as discounts, round-offs, and advance payments),
 * and project associations.
 *
 * **Note:** This payload is typically utilized by Sales Representatives to initiate
 * the quotation and negotiation lifecycle before it is approved and presented to the client.
 *
 * @generated from message Scailo.SalesQuotationsServiceCreateRequest
 */
export declare class SalesQuotationsServiceCreateRequest extends Message<SalesQuotationsServiceCreateRequest> {
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
     * @regex ^[0-9A-Za-z ]+$
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
     * @description The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).
     *
     * @example 1050
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).
     *
     * @example 1051
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) proposed to fulfill this quotation if converted.
     *
     * @example 42
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 16;
     */
    projectId?: bigint;
    /**
     *
     * @optional
     *
     * @description Any additional miscellaneous costs (e.g., handling fees, freight charges) proposed for the quotation, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost?: bigint;
    /**
     *
     * @optional
     *
     * @description A flat discount amount applied across the entire quotation total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 overall_discount = 18;
     */
    overallDiscount?: bigint;
    /**
     *
     * @optional
     *
     * @description The applicable rounding adjustment amount to align the final proposed total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer.
     *
     * @generated from field: optional int64 round_off = 19;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description The monetary amount proposed to be paid in advance by the buyer upon conversion, represented in the base currency subunit (e.g., cents).
     *
     * @example 10000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 payment_advance = 20;
     */
    paymentAdvance?: bigint;
    /**
     *
     * @optional
     *
     * @description The proposed payment term or credit cycle duration, measured in days from the invoice date.
     *
     * @example 30
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays?: bigint;
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
    constructor(data?: PartialMessage<SalesQuotationsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceCreateRequest;
    static equals(a: SalesQuotationsServiceCreateRequest | PlainMessage<SalesQuotationsServiceCreateRequest> | undefined, b: SalesQuotationsServiceCreateRequest | PlainMessage<SalesQuotationsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Sales Quotation record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the references, consignee & buyer, currency, project linkage, costs & discounts, payment terms, and other custom form fields
 * of an established Sales Quotation.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.SalesQuotationsServiceUpdateRequest
 */
export declare class SalesQuotationsServiceUpdateRequest extends Message<SalesQuotationsServiceUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for modifying this record. This is stored in the record's history for compliance purposes.
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
     * @regex ^[0-9A-Za-z ]+$
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
     * @description The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).
     *
     * @example 1050
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 consignee_client_id = 12;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).
     *
     * @example 1051
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 buyer_client_id = 13;
     */
    buyerClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 currency_id = 15;
     */
    currencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 16;
     */
    projectId?: bigint;
    /**
     *
     * @optional
     *
     * @description Any additional miscellaneous costs (e.g., handling fees, freight charges) proposed for the quotation, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost?: bigint;
    /**
     *
     * @optional
     *
     * @description A flat discount amount applied across the entire quotation total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 overall_discount = 18;
     */
    overallDiscount?: bigint;
    /**
     *
     * @optional
     *
     * @description The applicable rounding adjustment amount to align the final proposed total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @regex ^-?[0-9]+$
     *
     * @format Signed 64-bit integer.
     *
     * @generated from field: optional int64 round_off = 19;
     */
    roundOff?: bigint;
    /**
     *
     * @optional
     *
     * @description The monetary amount proposed to be paid in advance by the buyer upon conversion, represented in the base currency subunit (e.g., cents).
     *
     * @example 10000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 payment_advance = 20;
     */
    paymentAdvance?: bigint;
    /**
     *
     * @optional
     *
     * @description The proposed payment term or credit cycle duration, measured in days from the invoice date.
     *
     * @example 30
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays?: bigint;
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
    constructor(data?: PartialMessage<SalesQuotationsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceUpdateRequest;
    static equals(a: SalesQuotationsServiceUpdateRequest | PlainMessage<SalesQuotationsServiceUpdateRequest> | undefined, b: SalesQuotationsServiceUpdateRequest | PlainMessage<SalesQuotationsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Request message for triggering an autofill operation on an existing Sales Quotation.
 * This operation automatically populates the sales quotation with relevant line items based
 * on previously attached constraints and source references (e.g., linked Sales Enquiries).
 *
 * **Note:** The typical workflow requires the parent sales quotation to be created and
 * its reference links established first. Once invoked, this payload signals the system
 * to pull the corresponding line items from those references to automatically build out the quotation.
 *
 * @generated from message Scailo.SalesQuotationsServiceAutofillRequest
 */
export declare class SalesQuotationsServiceAutofillRequest extends Message<SalesQuotationsServiceAutofillRequest> {
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
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     *
     * @mandatory
     *
     * @description The globally unique identifier (UUID) of the target sales quotation that needs to be autofilled.
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
    constructor(data?: PartialMessage<SalesQuotationsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceAutofillRequest;
    static equals(a: SalesQuotationsServiceAutofillRequest | PlainMessage<SalesQuotationsServiceAutofillRequest> | undefined, b: SalesQuotationsServiceAutofillRequest | PlainMessage<SalesQuotationsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Represents a complete Sales Quotation entity within the system.
 * This message encapsulates the state of a sales proposal,
 * including its identity metadata, financial aggregates, proposed constraints,
 * approval lifecycle, audit history, and the complete collection of associated line items.
 *
 * **Note:** This payload is typically returned in read operations (e.g., View, Search)
 * and provides the frontend or external clients with the entire context needed to render,
 * review, or convert the quotation into an order.
 *
 * @generated from message Scailo.SalesQuotation
 */
export declare class SalesQuotation extends Message<SalesQuotation> {
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
     * @description UNIX timestamp of when the record transitioned to the COMPLETED state (e.g. converted to an order).
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
     * @description The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).
     *
     * @example 1050
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     *
     * @description The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).
     *
     * @example 1051
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     *
     * @description The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) proposed to fulfill this quotation if converted.
     *
     * @example 42
     *
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     *
     * @description The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.
     *
     * @example 3
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     *
     * @description The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.
     *
     * @example 88
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     *
     * @description Any additional miscellaneous costs (e.g., handling fees, freight charges) proposed for the quotation, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     *
     * @description A flat discount amount applied across the entire quotation total, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     *
     * @description The applicable rounding adjustment amount to align the final proposed total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     *
     * @description The monetary amount proposed to be paid in advance by the buyer prior to fulfillment, represented in the base currency subunit (e.g., cents).
     *
     * @example 10000
     *
     * @generated from field: uint64 payment_advance = 20;
     */
    paymentAdvance: bigint;
    /**
     *
     * @description The proposed payment term or credit cycle duration, measured in days from the invoice date.
     *
     * @example 30
     *
     * @generated from field: uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays: bigint;
    /**
     *
     * @description The number of times that this record has been amended after initial approval.
     *
     * @example 5
     *
     * @generated from field: uint64 amendment_count = 22;
     */
    amendmentCount: bigint;
    /**
     *
     * @description The calculated grand total value of the sales quotation, including all items, discounts, costs, and round-offs. Represented as a standard decimal value.
     *
     * @example 15250.75
     *
     * @format Double-precision floating-point number.
     *
     * @generated from field: double total_value = 30;
     */
    totalValue: number;
    /**
     *
     * @description The complete, aggregated list of individual line items, products, or services proposed in this sales quotation.
     *
     * @example []
     *
     * @format Repeated array of SalesQuotationItem message blocks.
     *
     * @generated from field: repeated Scailo.SalesQuotationItem list = 40;
     */
    list: SalesQuotationItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 50;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SalesQuotation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotation;
    static equals(a: SalesQuotation | PlainMessage<SalesQuotation> | undefined, b: SalesQuotation | PlainMessage<SalesQuotation> | undefined): boolean;
}
/**
 *
 * Request message for appending a new individual line item to an existing Sales Quotation.
 * This payload defines the specific family, quantities mapped between internal
 * and client-specific units of measure, commercial terms (price, tax, discount),
 * and proposed delivery expectations for the item.
 *
 * @generated from message Scailo.SalesQuotationsServiceItemCreateRequest
 */
export declare class SalesQuotationsServiceItemCreateRequest extends Message<SalesQuotationsServiceItemCreateRequest> {
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
     * @description The unique internal identifier of the parent sales quotation to which this item will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being quoted.
     *
     * @example 505
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The quoted quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 13;
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
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The quoted quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 15;
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
     * @generated from field: optional string client_family_code = 16;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The proposed price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 17;
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
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     *
     * @mandatory
     *
     * @description The specific proposed target delivery date for this line item, which may differ from the overall quotation's delivery schedule.
     *
     * @example "2023-11-15"
     *
     * @regex .+
     *
     * @format Must be a non-empty string. Expected to follow the standard date format designated by the client (e.g., YYYY-MM-DD).
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     *
     * @optional
     *
     * @description Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 21;
     */
    specifications?: string;
    constructor(data?: PartialMessage<SalesQuotationsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemCreateRequest;
    static equals(a: SalesQuotationsServiceItemCreateRequest | PlainMessage<SalesQuotationsServiceItemCreateRequest> | undefined, b: SalesQuotationsServiceItemCreateRequest | PlainMessage<SalesQuotationsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents a single line item payload within a bulk creation request.
 * Contains the exact same transactional parameters as a standard item creation request,
 * omitting the parent quotation ID which is declared once at the batch level.
 *
 * @generated from message Scailo.SalesQuotationsServiceMultipleItemsSingleton
 */
export declare class SalesQuotationsServiceMultipleItemsSingleton extends Message<SalesQuotationsServiceMultipleItemsSingleton> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being quoted.
     *
     * @example 505
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The quoted quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 13;
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
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The quoted quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 15;
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
     * @generated from field: optional string client_family_code = 16;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The proposed price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 17;
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
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     *
     * @mandatory
     *
     * @description The specific proposed target delivery date for this line item, which may differ from the overall quotation's delivery schedule.
     *
     * @example "2023-11-15"
     *
     * @regex .+
     *
     * @format Must be a non-empty string. Expected to follow the standard date format designated by the client (e.g., YYYY-MM-DD).
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     *
     * @optional
     *
     * @description Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 21;
     */
    specifications?: string;
    constructor(data?: PartialMessage<SalesQuotationsServiceMultipleItemsSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceMultipleItemsSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceMultipleItemsSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceMultipleItemsSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceMultipleItemsSingleton;
    static equals(a: SalesQuotationsServiceMultipleItemsSingleton | PlainMessage<SalesQuotationsServiceMultipleItemsSingleton> | undefined, b: SalesQuotationsServiceMultipleItemsSingleton | PlainMessage<SalesQuotationsServiceMultipleItemsSingleton> | undefined): boolean;
}
/**
 *
 * Request message for appending multiple line items to a Sales Quotation in a single batch transaction.
 * Optimized for scenarios like quotation imports or autofill operations where dozens of items
 * are attached simultaneously to a parent record.
 *
 * @generated from message Scailo.SalesQuotationsServiceMultipleItemsCreateRequest
 */
export declare class SalesQuotationsServiceMultipleItemsCreateRequest extends Message<SalesQuotationsServiceMultipleItemsCreateRequest> {
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
     * @description The unique internal identifier of the parent sales quotation to which this batch of items will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     *
     * @mandatory
     *
     * @description An array containing the individual line item payloads to be appended to the quotation.
     *
     * @example []
     *
     * @format Repeated array of SalesQuotationsServiceMultipleItemsSingleton message blocks.
     *
     * @generated from field: repeated Scailo.SalesQuotationsServiceMultipleItemsSingleton list = 11;
     */
    list: SalesQuotationsServiceMultipleItemsSingleton[];
    constructor(data?: PartialMessage<SalesQuotationsServiceMultipleItemsCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceMultipleItemsCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceMultipleItemsCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceMultipleItemsCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceMultipleItemsCreateRequest;
    static equals(a: SalesQuotationsServiceMultipleItemsCreateRequest | PlainMessage<SalesQuotationsServiceMultipleItemsCreateRequest> | undefined, b: SalesQuotationsServiceMultipleItemsCreateRequest | PlainMessage<SalesQuotationsServiceMultipleItemsCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for modifying the core transactional parameters of an existing Sales Quotation line item.
 * Supports updating quantities, commercial terms, delivery dates, and specifications,
 * typically utilized during quotation negotiation or amendment phases.
 *
 * @generated from message Scailo.SalesQuotationsServiceItemUpdateRequest
 */
export declare class SalesQuotationsServiceItemUpdateRequest extends Message<SalesQuotationsServiceItemUpdateRequest> {
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
     * @description The updated quoted quantity represented in the system's internal base unit of measure. Stored in subunits (cents).
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated unique internal identifier of the Unit of Measure (UOM) requested by the client.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated quoted quantity represented in the client's specific unit of measure. Stored in subunits (cents).
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     *
     * @optional
     *
     * @description The updated client's specific alphanumeric part number, SKU, or family code.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 16;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The updated proposed price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated unique internal identifier of the tax group or tax bracket applicable to this item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated specific target delivery date for this line item.
     *
     * @example "2023-11-15"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     *
     * @optional
     *
     * @description Updated custom textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 21;
     */
    specifications?: string;
    constructor(data?: PartialMessage<SalesQuotationsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemUpdateRequest;
    static equals(a: SalesQuotationsServiceItemUpdateRequest | PlainMessage<SalesQuotationsServiceItemUpdateRequest> | undefined, b: SalesQuotationsServiceItemUpdateRequest | PlainMessage<SalesQuotationsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Request message for isolating updates strictly to the textual specifications or notes
 * of a Sales Quotation line item.
 * Designed for scenarios where operational instructions change without impacting any
 * commercial terms, pricing, or quantities.
 *
 * @generated from message Scailo.SalesQuotationsServiceItemSpecificationsUpdateRequest
 */
export declare class SalesQuotationsServiceItemSpecificationsUpdateRequest extends Message<SalesQuotationsServiceItemSpecificationsUpdateRequest> {
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
    constructor(data?: PartialMessage<SalesQuotationsServiceItemSpecificationsUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceItemSpecificationsUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceItemSpecificationsUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemSpecificationsUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemSpecificationsUpdateRequest;
    static equals(a: SalesQuotationsServiceItemSpecificationsUpdateRequest | PlainMessage<SalesQuotationsServiceItemSpecificationsUpdateRequest> | undefined, b: SalesQuotationsServiceItemSpecificationsUpdateRequest | PlainMessage<SalesQuotationsServiceItemSpecificationsUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a complete, finalized Sales Quotation Item entity within the system.
 * This message encapsulates the comprehensive state of a single proposed product or service,
 * including its relationship to the parent quotation, mapped quantities across internal and client units,
 * commercial terms (pricing, taxes, discounts), delivery schedules, and derived financial calculations.
 *
 * **Note:** This payload is utilized in read operations to provide clients and downstream systems
 * with the exact, immutable state of an individual line item prior to conversion to a formal order.
 *
 * @generated from message Scailo.SalesQuotationItem
 */
export declare class SalesQuotationItem extends Message<SalesQuotationItem> {
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
     * @description The unique internal identifier of the parent sales quotation to which this line item belongs.
     *
     * @example 1024
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     *
     * @description The unique internal sequence identifier of another sales quotation line item that this item is bundled or packaged with.
     *
     * @example 1025
     *
     * @generated from field: uint64 bundled_with_id = 11;
     */
    bundledWithId: bigint;
    /**
     *
     * @description The unique internal identifier of the family or catalog item being quoted.
     *
     * @example 505
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     *
     * @description The quoted quantity represented in the system's internal base unit of measure. Stored in subunits (cents).
     *
     * @example 10000
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.
     *
     * @example 12
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     *
     * @description The quoted quantity represented in the client's specific unit of measure. Stored in subunits (cents).
     *
     * @example 5000
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     *
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.
     *
     * @example "CLI-SKU-992"
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    /**
     *
     * @description The proposed price per unit for this item before discounts, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     *
     * @description The unique internal identifier of the tax group or tax bracket applicable to this specific line item.
     *
     * @example 4
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     *
     * @description The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     *
     * @description The specific proposed target delivery date for this line item.
     *
     * @example "2023-11-15"
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     *
     * @description Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    /**
     *
     * @description The system-calculated net proposed price per unit after the applied discount has been subtracted from the base unit price. Represented in the base currency subunit (e.g., cents).
     *
     * @example 2125
     *
     * @generated from field: uint64 discounted_unit_price = 30;
     */
    discountedUnitPrice: bigint;
    constructor(data?: PartialMessage<SalesQuotationItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItem;
    static equals(a: SalesQuotationItem | PlainMessage<SalesQuotationItem> | undefined, b: SalesQuotationItem | PlainMessage<SalesQuotationItem> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Sales Quotation records.
 *
 * @generated from message Scailo.SalesQuotationsList
 */
export declare class SalesQuotationsList extends Message<SalesQuotationsList> {
    /**
     * @description An array of Sales Quotation records.
     *
     * @generated from field: repeated Scailo.SalesQuotation list = 1;
     */
    list: SalesQuotation[];
    constructor(data?: PartialMessage<SalesQuotationsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsList;
    static equals(a: SalesQuotationsList | PlainMessage<SalesQuotationsList> | undefined, b: SalesQuotationsList | PlainMessage<SalesQuotationsList> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Sales Quotation Item records.
 *
 * @generated from message Scailo.SalesQuotationItemsList
 */
export declare class SalesQuotationItemsList extends Message<SalesQuotationItemsList> {
    /**
     * @description An array of Sales Quotation Item records.
     *
     * @generated from field: repeated Scailo.SalesQuotationItem list = 1;
     */
    list: SalesQuotationItem[];
    constructor(data?: PartialMessage<SalesQuotationItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItemsList;
    static equals(a: SalesQuotationItemsList | PlainMessage<SalesQuotationItemsList> | undefined, b: SalesQuotationItemsList | PlainMessage<SalesQuotationItemsList> | undefined): boolean;
}
/**
 *
 * Represents the request payload containing the parameter constraints required to
 * retrieve the historical audit trail and lifecycle changes of a specific sales quotation item record.
 *
 * @generated from message Scailo.SalesQuotationItemHistoryRequest
 */
export declare class SalesQuotationItemHistoryRequest extends Message<SalesQuotationItemHistoryRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target sales quotation associated with the historical record.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer greater than zero.
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
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
    constructor(data?: PartialMessage<SalesQuotationItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItemHistoryRequest;
    static equals(a: SalesQuotationItemHistoryRequest | PlainMessage<SalesQuotationItemHistoryRequest> | undefined, b: SalesQuotationItemHistoryRequest | PlainMessage<SalesQuotationItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Request message for retrieving preliminary contextual information about a prospective line item.
 * This payload is typically utilized by frontend interfaces to dynamically fetch default pricing,
 * historical terms, or tax configurations for a specific family prior to officially
 * adding it to a Sales Quotation. This ensures accurate data pre-filling during the quotation creation workflow.
 *
 * @generated from message Scailo.SalesQuotationItemProspectiveInfoRequest
 */
export declare class SalesQuotationItemProspectiveInfoRequest extends Message<SalesQuotationItemProspectiveInfoRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the parent sales quotation that is currently being evaluated or constructed.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being evaluated for addition to the quotation.
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
     * @optional
     *
     * @description The unique internal identifier of the specific Unit of Measure (UOM) requested by the client. If set to `0`, this filter is ignored, and standard product default parameters are returned instead.
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 client_uom_id = 13;
     */
    clientUomId?: bigint;
    constructor(data?: PartialMessage<SalesQuotationItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItemProspectiveInfoRequest;
    static equals(a: SalesQuotationItemProspectiveInfoRequest | PlainMessage<SalesQuotationItemProspectiveInfoRequest> | undefined, b: SalesQuotationItemProspectiveInfoRequest | PlainMessage<SalesQuotationItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Sales Quotation records.
 *
 * @generated from message Scailo.SalesQuotationsServicePaginationReq
 */
export declare class SalesQuotationsServicePaginationReq extends Message<SalesQuotationsServicePaginationReq> {
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
     * @generated from field: optional Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_QUOTATION_SORT_KEY;
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
    constructor(data?: PartialMessage<SalesQuotationsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginationReq;
    static equals(a: SalesQuotationsServicePaginationReq | PlainMessage<SalesQuotationsServicePaginationReq> | undefined, b: SalesQuotationsServicePaginationReq | PlainMessage<SalesQuotationsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.SalesQuotationsServicePaginationResponse
 */
export declare class SalesQuotationsServicePaginationResponse extends Message<SalesQuotationsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SalesQuotation payload = 4;
     */
    payload: SalesQuotation[];
    constructor(data?: PartialMessage<SalesQuotationsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginationResponse;
    static equals(a: SalesQuotationsServicePaginationResponse | PlainMessage<SalesQuotationsServicePaginationResponse> | undefined, b: SalesQuotationsServicePaginationResponse | PlainMessage<SalesQuotationsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating sales quotations using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.SalesQuotationsServiceFilterReq
 */
export declare class SalesQuotationsServiceFilterReq extends Message<SalesQuotationsServiceFilterReq> {
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
     * @generated from field: optional Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_QUOTATION_SORT_KEY;
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
     * @description The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).
     *
     * @example 1050
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 consignee_client_id = 22;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).
     *
     * @example 1051
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 buyer_client_id = 23;
     */
    buyerClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) proposed to fulfill this quotation if converted.
     *
     * @example 42
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 location_id = 24;
     */
    locationId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 currency_id = 25;
     */
    currencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 26;
     */
    projectId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter sales quotations that contain at least one line item belonging to this specific family ID.
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
     * @description Filter sales quotations containing line items scheduled for exact delivery on this specific proposed date.
     *
     * @example "2023-11-15"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_exact = 41;
     */
    deliveryDateExact?: string;
    /**
     *
     * @optional
     *
     * @description Filter sales quotations containing line items scheduled for delivery ON or AFTER this specific proposed date.
     *
     * @example "2023-11-01"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_start = 42;
     */
    deliveryDateStart?: string;
    /**
     *
     * @optional
     *
     * @description Filter sales quotations containing line items scheduled for delivery ON or BEFORE this specific proposed date.
     *
     * @example "2023-11-30"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_end = 43;
     */
    deliveryDateEnd?: string;
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
    constructor(data?: PartialMessage<SalesQuotationsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceFilterReq;
    static equals(a: SalesQuotationsServiceFilterReq | PlainMessage<SalesQuotationsServiceFilterReq> | undefined, b: SalesQuotationsServiceFilterReq | PlainMessage<SalesQuotationsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting sales quotation records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.SalesQuotationsServiceCountReq
 */
export declare class SalesQuotationsServiceCountReq extends Message<SalesQuotationsServiceCountReq> {
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
     * @description The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).
     *
     * @example 1050
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 consignee_client_id = 22;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).
     *
     * @example 1051
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 buyer_client_id = 23;
     */
    buyerClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) proposed to fulfill this quotation if converted.
     *
     * @example 42
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 location_id = 24;
     */
    locationId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 currency_id = 25;
     */
    currencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 26;
     */
    projectId?: bigint;
    /**
     *
     * @optional
     *
     * @description Count sales quotations that contain at least one line item belonging to this specific family ID.
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
     * @description Count sales quotations containing line items scheduled for exact delivery on this specific proposed date.
     *
     * @example "2023-11-15"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_exact = 41;
     */
    deliveryDateExact?: string;
    /**
     *
     * @optional
     *
     * @description Count sales quotations containing line items scheduled for delivery ON or AFTER this specific proposed date.
     *
     * @example "2023-11-01"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_start = 42;
     */
    deliveryDateStart?: string;
    /**
     *
     * @optional
     *
     * @description Count sales quotations containing line items scheduled for delivery ON or BEFORE this specific proposed date.
     *
     * @example "2023-11-30"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_end = 43;
     */
    deliveryDateEnd?: string;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<SalesQuotationsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceCountReq;
    static equals(a: SalesQuotationsServiceCountReq | PlainMessage<SalesQuotationsServiceCountReq> | undefined, b: SalesQuotationsServiceCountReq | PlainMessage<SalesQuotationsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating sales quotations via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.SalesQuotationsServiceSearchAllReq
 */
export declare class SalesQuotationsServiceSearchAllReq extends Message<SalesQuotationsServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_QUOTATION_SORT_KEY;
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
     * @description The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).
     *
     * @example 1050
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 consignee_client_id = 22;
     */
    consigneeClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).
     *
     * @example 1051
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 buyer_client_id = 23;
     */
    buyerClientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) proposed to fulfill this quotation if converted.
     *
     * @example 42
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 location_id = 24;
     */
    locationId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.
     *
     * @example 3
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 currency_id = 25;
     */
    currencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 project_id = 26;
     */
    projectId?: bigint;
    constructor(data?: PartialMessage<SalesQuotationsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceSearchAllReq;
    static equals(a: SalesQuotationsServiceSearchAllReq | PlainMessage<SalesQuotationsServiceSearchAllReq> | undefined, b: SalesQuotationsServiceSearchAllReq | PlainMessage<SalesQuotationsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Request message for creating and linking an external or internal document reference to a Sales Quotation.
 * These references (e.g., tying a Sales Enquiry to a Sales Quotation) serve as the operational constraints
 * that drive downstream automation, such as Autofill operations that pull line items directly from the referenced document.
 *
 * @generated from message Scailo.SalesQuotationsServiceReferenceCreateRequest
 */
export declare class SalesQuotationsServiceReferenceCreateRequest extends Message<SalesQuotationsServiceReferenceCreateRequest> {
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
     * @description The unique internal identifier of the parent sales quotation to which this reference is being attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The operational context in which this reference is being applied (e.g., Billing).
     *
     * @example "SALES_QUOTATION_REFERENCE_CONTEXT_BILLING"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid SALES_QUOTATION_REFERENCE_CONTEXT enum value. Cannot be unspecified (0).
     *
     * @generated from field: Scailo.SALES_QUOTATION_REFERENCE_CONTEXT context = 11;
     */
    context: SALES_QUOTATION_REFERENCE_CONTEXT;
    /**
     *
     * @mandatory
     *
     * @description The specific module or record type from which this reference originates.
     *
     * @example "SALES_QUOTATION_REFERENCE_REF_FROM_SALES_ENQUIRY"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid SALES_QUOTATION_REFERENCE_REF_FROM enum value. Cannot be unspecified (0).
     *
     * @generated from field: Scailo.SALES_QUOTATION_REFERENCE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_QUOTATION_REFERENCE_REF_FROM;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the specific referenced document (e.g., the ID of the actual Sales Enquiry).
     *
     * @example 450
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalesQuotationsServiceReferenceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceReferenceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceReferenceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceReferenceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceReferenceCreateRequest;
    static equals(a: SalesQuotationsServiceReferenceCreateRequest | PlainMessage<SalesQuotationsServiceReferenceCreateRequest> | undefined, b: SalesQuotationsServiceReferenceCreateRequest | PlainMessage<SalesQuotationsServiceReferenceCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents the finalized state of a constraint or reference linked to a Sales Quotation.
 * This entity securely binds source documents (like Enquiries) to the parent quotation,
 * maintaining an explicit audit trail of exactly where the quotation's requirements or line items originated.
 *
 * @generated from message Scailo.SalesQuotationReference
 */
export declare class SalesQuotationReference extends Message<SalesQuotationReference> {
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
     * @description The unique internal identifier of the parent sales quotation to which this reference is being attached.
     *
     * @example 1024
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     *
     * @description The operational context in which this reference is being applied (e.g., Billing).
     *
     * @example "SALES_QUOTATION_REFERENCE_CONTEXT_BILLING"
     *
     * @generated from field: Scailo.SALES_QUOTATION_REFERENCE_CONTEXT context = 11;
     */
    context: SALES_QUOTATION_REFERENCE_CONTEXT;
    /**
     *
     * @description The specific module or record type from which this reference originates.
     *
     * @example "SALES_QUOTATION_REFERENCE_REF_FROM_SALES_ENQUIRY"
     *
     * @generated from field: Scailo.SALES_QUOTATION_REFERENCE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_QUOTATION_REFERENCE_REF_FROM;
    /**
     *
     * @description The unique internal identifier of the specific referenced document (e.g., the ID of the actual Sales Enquiry).
     *
     * @example 450
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalesQuotationReference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationReference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationReference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationReference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationReference;
    static equals(a: SalesQuotationReference | PlainMessage<SalesQuotationReference> | undefined, b: SalesQuotationReference | PlainMessage<SalesQuotationReference> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Sales Quotation Reference records.
 *
 * @generated from message Scailo.SalesQuotationReferencesList
 */
export declare class SalesQuotationReferencesList extends Message<SalesQuotationReferencesList> {
    /**
     * @description An array of Sales Quotation Reference records.
     *
     * @generated from field: repeated Scailo.SalesQuotationReference list = 1;
     */
    list: SalesQuotationReference[];
    constructor(data?: PartialMessage<SalesQuotationReferencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationReferencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationReferencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationReferencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationReferencesList;
    static equals(a: SalesQuotationReferencesList | PlainMessage<SalesQuotationReferencesList> | undefined, b: SalesQuotationReferencesList | PlainMessage<SalesQuotationReferencesList> | undefined): boolean;
}
/**
 *
 * Request payload structure used to search and filter Sales Quotation Item records.
 * Supports pagination controls, tenancy isolation, status grouping, and text-based matching.
 *
 * @generated from message Scailo.SalesQuotationItemsSearchRequest
 */
export declare class SalesQuotationItemsSearchRequest extends Message<SalesQuotationItemsSearchRequest> {
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
     * @generated from field: optional Scailo.SALES_QUOTATION_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_QUOTATION_ITEM_SORT_KEY;
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
     * @generated from field: optional Scailo.SALES_QUOTATION_ITEM_STATUS status = 7;
     */
    status?: SALES_QUOTATION_ITEM_STATUS;
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
     * @description Filter line items belonging to a specific parent sales quotation.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 sales_quotation_id = 20;
     */
    salesQuotationId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the internal identifier of the primary sales quotation line item that this item is bundled with.
     *
     * @example 1025
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 bundled_with_id = 21;
     */
    bundledWithId?: bigint;
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
     * @generated from field: optional uint64 family_id = 22;
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
     * @generated from field: optional string client_family_code = 26;
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
     * @description Filter line items scheduled for exact delivery on this specific proposed date.
     *
     * @example "2023-11-15"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_exact = 28;
     */
    deliveryDateExact?: string;
    /**
     *
     * @optional
     *
     * @description Filter line items scheduled for delivery ON or AFTER this specific proposed date.
     *
     * @example "2023-11-01"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_start = 29;
     */
    deliveryDateStart?: string;
    /**
     *
     * @optional
     *
     * @description Filter line items scheduled for delivery ON or BEFORE this specific proposed date.
     *
     * @example "2023-11-30"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_end = 30;
     */
    deliveryDateEnd?: string;
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
    constructor(data?: PartialMessage<SalesQuotationItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItemsSearchRequest;
    static equals(a: SalesQuotationItemsSearchRequest | PlainMessage<SalesQuotationItemsSearchRequest> | undefined, b: SalesQuotationItemsSearchRequest | PlainMessage<SalesQuotationItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Paginated response packet containing a subset of Sales Quotation Item records.
 * Includes complete operational state parameters for rendering frontend data grids and tables.
 *
 * @generated from message Scailo.SalesQuotationsServicePaginatedItemsResponse
 */
export declare class SalesQuotationsServicePaginatedItemsResponse extends Message<SalesQuotationsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.SalesQuotationItem payload = 4;
     */
    payload: SalesQuotationItem[];
    constructor(data?: PartialMessage<SalesQuotationsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginatedItemsResponse;
    static equals(a: SalesQuotationsServicePaginatedItemsResponse | PlainMessage<SalesQuotationsServicePaginatedItemsResponse> | undefined, b: SalesQuotationsServicePaginatedItemsResponse | PlainMessage<SalesQuotationsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Request message for assigning a specific contact person (associate) to a Sales Quotation.
 * This operation creates a linkage between the quotation and a designated individual belonging
 * to the customer, explicitly identifying who is in charge of or accountable for the sales quotation from the client's side.
 *
 * @generated from message Scailo.SalesQuotationsServiceContactCreateRequest
 */
export declare class SalesQuotationsServiceContactCreateRequest extends Message<SalesQuotationsServiceContactCreateRequest> {
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
     * @description The unique internal identifier of the parent sales quotation to which this contact is being assigned.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the associate being assigned to the quotation.
     *
     * @example 55
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<SalesQuotationsServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceContactCreateRequest;
    static equals(a: SalesQuotationsServiceContactCreateRequest | PlainMessage<SalesQuotationsServiceContactCreateRequest> | undefined, b: SalesQuotationsServiceContactCreateRequest | PlainMessage<SalesQuotationsServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents the finalized state of a Sales Quotation Contact mapping.
 * This entity securely binds a designated associate (the client's point of contact)
 * to the parent quotation, tracking accountability, approval workflows, and providing
 * both internal IDs and unpredictable UUIDs for secure downstream referencing.
 *
 * @generated from message Scailo.SalesQuotationContact
 */
export declare class SalesQuotationContact extends Message<SalesQuotationContact> {
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
     * @example "Assigned primary warehouse manager as the main contact."
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     *
     * @description The unique internal identifier of the parent sales quotation to which this contact belongs.
     *
     * @example 1024
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     *
     * @description The unique internal identifier of the associate acting as the point of contact.
     *
     * @example 55
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    /**
     *
     * @description The globally unique identifier (UUID) of the associate, used for secure external referencing without exposing sequential internal IDs.
     *
     * @example "661f9511-f39c-42d5-b827-557766551111"
     *
     * @format Valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string associate_uuid = 211;
     */
    associateUuid: string;
    constructor(data?: PartialMessage<SalesQuotationContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationContact;
    static equals(a: SalesQuotationContact | PlainMessage<SalesQuotationContact> | undefined, b: SalesQuotationContact | PlainMessage<SalesQuotationContact> | undefined): boolean;
}
/**
 *
 * Represents a consolidated collection of designated contacts mapped to a Sales Quotation.
 *
 * @generated from message Scailo.SalesQuotationContactsList
 */
export declare class SalesQuotationContactsList extends Message<SalesQuotationContactsList> {
    /**
     *
     * @description An array containing the individual associate contact records linked to the quotation.
     *
     * @example []
     *
     * @format Repeated array of SalesQuotationContact message blocks.
     *
     * @generated from field: repeated Scailo.SalesQuotationContact list = 1;
     */
    list: SalesQuotationContact[];
    constructor(data?: PartialMessage<SalesQuotationContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationContactsList;
    static equals(a: SalesQuotationContactsList | PlainMessage<SalesQuotationContactsList> | undefined, b: SalesQuotationContactsList | PlainMessage<SalesQuotationContactsList> | undefined): boolean;
}
//# sourceMappingURL=sales_quotations.scailo_pb.d.ts.map
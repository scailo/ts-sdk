import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting sales enquiry item search results.
 *
 * @generated from enum Scailo.SALES_ENQUIRY_ITEM_SORT_KEY
 */
export declare enum SALES_ENQUIRY_ITEM_SORT_KEY {
    /**
     * @description Default sort behavior (by internal item sequence ID).
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the item record was initially created.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the item record was last modified.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp of the item.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user provided item name.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_NAME = 10;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_NAME = 10,
    /**
     * @description Sort by the ordered quantity evaluated in the internal unit of measure.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * @description Sort by the base unit price.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_UNIT_PRICE = 12;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_UNIT_PRICE = 12,
    /**
     * @description Sort by the percentage discount applied to the item.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_DISCOUNT = 13;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_DISCOUNT = 13,
    /**
     * @description Sort chronologically by the target delivery date for the item.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_DELIVERY_DATE = 14;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_DELIVERY_DATE = 14
}
/**
 *
 * Enum defining the applicable lifecycle and verification statuses for sales enquiry items.
 *
 * @generated from enum Scailo.SALES_ENQUIRY_ITEM_STATUS
 */
export declare enum SALES_ENQUIRY_ITEM_STATUS {
    /**
     * @description Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the sales enquiry item association has passed verification and is actively approved.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_STATUS_APPROVED = 1;
     */
    SALES_ENQUIRY_ITEM_STATUS_APPROVED = 1,
    /**
     * @description Denotes that the sales enquiry item association is pending review and waiting for administrative approval.
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_STATUS_UNAPPROVED = 2;
     */
    SALES_ENQUIRY_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Enumeration of fields available for sorting sales enquiry search results.
 *
 * @generated from enum Scailo.SALES_ENQUIRY_SORT_KEY
 */
export declare enum SALES_ENQUIRY_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_CREATED_AT = 1;
     */
    SALES_ENQUIRY_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_ENQUIRY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_ENQUIRY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided reference ID.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_ENQUIRY_SORT_KEY_REFERENCE_ID = 10,
    /**
     * @description Sort alphabetically by the system-generated reference number.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_ENQUIRY_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * @description Sort by the internal ID of the consignee client.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_CONSIGNEE_CLIENT_ID = 12;
     */
    SALES_ENQUIRY_SORT_KEY_CONSIGNEE_CLIENT_ID = 12,
    /**
     * @description Sort by the internal ID of the buyer client.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_BUYER_CLIENT_ID = 13;
     */
    SALES_ENQUIRY_SORT_KEY_BUYER_CLIENT_ID = 13,
    /**
     * @description Sort by the total number of times the sales enquiry has been amended.
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_AMENDMENT_COUNT = 15;
     */
    SALES_ENQUIRY_SORT_KEY_AMENDMENT_COUNT = 15
}
/**
 *
 * Request message for defining and creating a new Sales Enquiry within the system.
 * A Sales Enquiry represents an inbound request or lead from a prospective or existing customer
 * (e.g., submitted via a website contact form or direct communication). It captures the initial
 * interest in products or services, allowing sales teams to track, analyze, and subsequently respond
 * to the prospect.
 *
 * **Note:** This record serves as the earliest stage in the outbound sales pipeline, often acting
 * as the precursor to a formal Sales Quotation or Sales Order.
 *
 * @generated from message Scailo.SalesEnquiriesServiceCreateRequest
 */
export declare class SalesEnquiriesServiceCreateRequest extends Message<SalesEnquiriesServiceCreateRequest> {
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
     * @description The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).
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
     * @description The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).
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
     * @description The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.
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
     * @description A textual summary detailing the specific products, services, or information the lead is requesting.
     *
     * @example "Looking for bulk pricing on industrial copper wiring"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string description = 16;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description Any additional miscellaneous costs (e.g., estimated handling or freight charges) tentatively associated with the enquiry, represented in the base currency subunit (e.g., cents).
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
     * @description A flat target discount amount associated with the enquiry, represented in the base currency subunit (e.g., cents).
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
     * @description The applicable rounding adjustment amount for prospective financial totals. Can be positive or negative, represented in the base currency subunit.
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
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesEnquiriesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCreateRequest;
    static equals(a: SalesEnquiriesServiceCreateRequest | PlainMessage<SalesEnquiriesServiceCreateRequest> | undefined, b: SalesEnquiriesServiceCreateRequest | PlainMessage<SalesEnquiriesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Sales Enquiry record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the references, consignee & buyer, currency, costs & discounts, and other custom form fields
 * of an established Sales Enquiry.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.SalesEnquiriesServiceUpdateRequest
 */
export declare class SalesEnquiriesServiceUpdateRequest extends Message<SalesEnquiriesServiceUpdateRequest> {
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
     * @description The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).
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
     * @description The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).
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
     * @description The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.
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
     * @description A textual summary detailing the specific products, services, or information the lead is requesting.
     *
     * @example "Looking for bulk pricing on industrial copper wiring"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string description = 16;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description Any additional miscellaneous costs (e.g., estimated handling or freight charges) tentatively associated with the enquiry, represented in the base currency subunit (e.g., cents).
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
     * @description A flat target discount amount associated with the enquiry, represented in the base currency subunit (e.g., cents).
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
     * @description The applicable rounding adjustment amount for prospective financial totals. Can be positive or negative, represented in the base currency subunit.
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
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesEnquiriesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static equals(a: SalesEnquiriesServiceUpdateRequest | PlainMessage<SalesEnquiriesServiceUpdateRequest> | undefined, b: SalesEnquiriesServiceUpdateRequest | PlainMessage<SalesEnquiriesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents the external-facing, unique identifiers (UUIDs) of a Sales Enquiry's core dependencies.
 * By exposing UUIDs instead of internal sequential integer IDs, this message allows
 * external clients and frontend applications to securely reference underlying entities
 * (such as clients, locations, and currencies) without risking data enumeration or leaking system architecture.
 *
 * @generated from message Scailo.SalesEnquiryAncillaryParameters
 */
export declare class SalesEnquiryAncillaryParameters extends Message<SalesEnquiryAncillaryParameters> {
    /**
     *
     * @description The globally unique identifier (UUID) of the consignee client, correlating to the internal `consignee_client_id`.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @format Valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string consignee_client_uuid = 212;
     */
    consigneeClientUuid: string;
    /**
     *
     * @description The globally unique identifier (UUID) of the buyer client, correlating to the internal `buyer_client_id`.
     *
     * @example "661f9511-f39c-42d5-b827-557766551111"
     *
     * @format Valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string buyer_client_uuid = 213;
     */
    buyerClientUuid: string;
    /**
     *
     * @description The globally unique identifier (UUID) of the associated currency, correlating to the internal `currency_id`.
     *
     * @example "883b1733-b51e-64f7-d049-779988773333"
     *
     * @format Valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string currency_uuid = 215;
     */
    currencyUuid: string;
    constructor(data?: PartialMessage<SalesEnquiryAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryAncillaryParameters;
    static equals(a: SalesEnquiryAncillaryParameters | PlainMessage<SalesEnquiryAncillaryParameters> | undefined, b: SalesEnquiryAncillaryParameters | PlainMessage<SalesEnquiryAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Represents a complete Sales Enquiry entity within the system.
 * This message encapsulates the comprehensive state of an inbound lead or prospective customer request,
 * including identity metadata, prospective client mapping, preliminary financial aggregates,
 * approval lifecycle, audit history, and the complete collection of requested line items.
 *
 * **Note:** This payload is typically returned in read operations (e.g., View, Search)
 * and provides frontend clients or external CRMs with the entire context needed to review,
 * analyze, and ultimately convert the lead into a formal Sales Quotation or Sales Order.
 *
 * @generated from message Scailo.SalesEnquiry
 */
export declare class SalesEnquiry extends Message<SalesEnquiry> {
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
     * @description The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).
     *
     * @example 1050
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     *
     * @description The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).
     *
     * @example 1051
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     *
     * @description The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.
     *
     * @example 3
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     *
     * @description A textual summary detailing the specific products, services, or information the lead is requesting.
     *
     * @example "Looking for bulk pricing on industrial copper wiring"
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     *
     * @description Any additional miscellaneous costs (e.g., estimated handling or freight charges) tentatively associated with the enquiry, represented in the base currency subunit (e.g., cents).
     *
     * @example 1500
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     *
     * @description A flat target discount amount associated with the enquiry, represented in the base currency subunit (e.g., cents).
     *
     * @example 500
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     *
     * @description The applicable rounding adjustment amount for prospective financial totals. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     *
     * @description The number of times that this record has been amended after approval.
     *
     * @example 5
     *
     * @generated from field: uint64 amendment_count = 20;
     */
    amendmentCount: bigint;
    /**
     *
     * @description The complete, aggregated list of individual line items, products, or services that constitute this sales enquiry.
     *
     * @example []
     *
     * @format Repeated array of SalesEnquiryItem message blocks.
     *
     * @generated from field: repeated Scailo.SalesEnquiryItem list = 30;
     */
    list: SalesEnquiryItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    /**
     *
     * @description The calculated grand total value of the sales enquiry, including all items, discounts, costs, and round-offs. Represented as a standard decimal value.
     *
     * @example 15250.75
     *
     * @format Double-precision floating-point number.
     *
     * @generated from field: double total_price = 50;
     */
    totalPrice: number;
    constructor(data?: PartialMessage<SalesEnquiry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiry;
    static equals(a: SalesEnquiry | PlainMessage<SalesEnquiry> | undefined, b: SalesEnquiry | PlainMessage<SalesEnquiry> | undefined): boolean;
}
/**
 *
 * Request message for appending a requested product or service line item to a Sales Enquiry.
 * This payload captures the prospect's preliminary interest, requested quantities, proposed pricing,
 * and delivery expectations before a formal quotation is generated.
 *
 * **Note:** During the initial enquiry phase, exact catalog matches might not be known;
 * therefore, the item is primarily identified by a free-text `name` rather than a strict product family ID.
 *
 * @generated from message Scailo.SalesEnquiriesServiceItemCreateRequest
 */
export declare class SalesEnquiriesServiceItemCreateRequest extends Message<SalesEnquiriesServiceItemCreateRequest> {
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
     * @description The unique internal identifier of the parent sales enquiry to which this requested item will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The descriptive name of the requested product or service. Free-text is used here as the exact catalog item may not be definitively identified during the initial lead phase.
     *
     * @example "Industrial Copper Wiring - 12 AWG"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     *
     * @mandatory
     *
     * @description The prospective quantity requested, represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
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
     * @description The unique internal identifier of the Unit of Measure (UOM) applicable to this requested item.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The proposed or target price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The proposed discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 discount = 15;
     */
    discount: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the tax group or tax bracket tentatively applicable to this specific line item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 16;
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
     * @generated from field: optional int64 round_off = 17;
     */
    roundOff?: bigint;
    /**
     *
     * @mandatory
     *
     * @description The specific prospective target delivery date requested or proposed for this line item.
     *
     * @example "2023-11-15"
     *
     * @regex .*
     *
     * @format Must be a non-empty string. Expected to follow the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     *
     * @optional
     *
     * @description Additional custom textual requirements, notes, or specifications requested by the prospect for this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 19;
     */
    specifications?: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static equals(a: SalesEnquiriesServiceItemCreateRequest | PlainMessage<SalesEnquiriesServiceItemCreateRequest> | undefined, b: SalesEnquiriesServiceItemCreateRequest | PlainMessage<SalesEnquiriesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for modifying the core parameters of an existing Sales Enquiry line item.
 * Supports updating requested quantities, proposed commercial terms, delivery dates, and specifications
 * as the lead is qualified and requirements become clearer.
 *
 * @generated from message Scailo.SalesEnquiriesServiceItemUpdateRequest
 */
export declare class SalesEnquiriesServiceItemUpdateRequest extends Message<SalesEnquiriesServiceItemUpdateRequest> {
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
     * @description The descriptive name of the requested product or service. Free-text is used here as the exact catalog item may not be definitively identified during the initial lead phase.
     *
     * @example "Industrial Copper Wiring - 12 AWG"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     *
     * @mandatory
     *
     * @description The prospective quantity requested, represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
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
     * @description The unique internal identifier of the Unit of Measure (UOM) applicable to this requested item.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The proposed or target price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The proposed discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 discount = 15;
     */
    discount: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the tax group or tax bracket tentatively applicable to this specific line item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 16;
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
     * @generated from field: optional int64 round_off = 17;
     */
    roundOff?: bigint;
    /**
     *
     * @mandatory
     *
     * @description The specific prospective target delivery date requested or proposed for this line item.
     *
     * @example "2023-11-15"
     *
     * @regex .*
     *
     * @format Must be a non-empty string. Expected to follow the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     *
     * @optional
     *
     * @description Additional custom textual requirements, notes, or specifications requested by the prospect for this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 19;
     */
    specifications?: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static equals(a: SalesEnquiriesServiceItemUpdateRequest | PlainMessage<SalesEnquiriesServiceItemUpdateRequest> | undefined, b: SalesEnquiriesServiceItemUpdateRequest | PlainMessage<SalesEnquiriesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a complete, finalized Sales Enquiry Item entity within the system.
 * This message encapsulates the comprehensive state of a single product or service requested by a prospect,
 * including its relationship to the parent enquiry, requested quantities, proposed commercial terms (pricing, taxes, discounts),
 * delivery expectations, and derived financial calculations.
 *
 * **Note:** This payload is utilized in read operations to provide clients and downstream systems
 * with the exact, immutable state of an individual line item during the lead qualification phase,
 * prior to its formal conversion into a quotation or order.
 *
 * @generated from message Scailo.SalesEnquiryItem
 */
export declare class SalesEnquiryItem extends Message<SalesEnquiryItem> {
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
     * @description The unique internal identifier of the parent sales enquiry to which this requested item will be attached.
     *
     * @example 1024
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     *
     * @description The descriptive name of the requested product or service. Free-text is used here as the exact catalog item may not be definitively identified during the initial lead phase.
     *
     * @example "Industrial Copper Wiring - 12 AWG"
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     *
     * @description The prospective quantity requested, represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) applicable to this requested item.
     *
     * @example 12
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     *
     * @description The proposed or target price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @generated from field: uint64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     *
     * @description The proposed discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @generated from field: uint64 discount = 15;
     */
    discount: bigint;
    /**
     *
     * @description The unique internal identifier of the tax group or tax bracket tentatively applicable to this specific line item.
     *
     * @example 4
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     *
     * @description The applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.
     *
     * @example -15
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     *
     * @description The specific prospective target delivery date requested or proposed for this line item.
     *
     * @example "2023-11-15"
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     *
     * @description Additional custom textual requirements, notes, or specifications requested by the prospect for this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @generated from field: string specifications = 19;
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
    constructor(data?: PartialMessage<SalesEnquiryItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryItem;
    static equals(a: SalesEnquiryItem | PlainMessage<SalesEnquiryItem> | undefined, b: SalesEnquiryItem | PlainMessage<SalesEnquiryItem> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Sales Enquiry records.
 *
 * @generated from message Scailo.SalesEnquiriesList
 */
export declare class SalesEnquiriesList extends Message<SalesEnquiriesList> {
    /**
     * @description An array of Sales Enquiry records.
     *
     * @generated from field: repeated Scailo.SalesEnquiry list = 1;
     */
    list: SalesEnquiry[];
    constructor(data?: PartialMessage<SalesEnquiriesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesList;
    static equals(a: SalesEnquiriesList | PlainMessage<SalesEnquiriesList> | undefined, b: SalesEnquiriesList | PlainMessage<SalesEnquiriesList> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Sales Enquiry Item records.
 *
 * @generated from message Scailo.SalesEnquiriesItemsList
 */
export declare class SalesEnquiriesItemsList extends Message<SalesEnquiriesItemsList> {
    /**
     * @description An array of Sales Enquiry Item records.
     *
     * @generated from field: repeated Scailo.SalesEnquiryItem list = 1;
     */
    list: SalesEnquiryItem[];
    constructor(data?: PartialMessage<SalesEnquiriesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesItemsList;
    static equals(a: SalesEnquiriesItemsList | PlainMessage<SalesEnquiriesItemsList> | undefined, b: SalesEnquiriesItemsList | PlainMessage<SalesEnquiriesItemsList> | undefined): boolean;
}
/**
 *
 * Represents the request payload containing the parameter constraints required to
 * retrieve the historical audit trail and lifecycle changes of a specific sales enquiry item record.
 *
 * @generated from message Scailo.SalesEnquiryItemHistoryRequest
 */
export declare class SalesEnquiryItemHistoryRequest extends Message<SalesEnquiryItemHistoryRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target sales enquiry associated with the historical record.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer greater than zero.
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The exact descriptive name of the requested product or service. Because enquiry items are tracked via free-text names instead of strict catalog IDs, this string acts as the secondary identifier for fetching the specific item's historical audit trail.
     *
     * @example "Industrial Copper Wiring - 12 AWG"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<SalesEnquiryItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryItemHistoryRequest;
    static equals(a: SalesEnquiryItemHistoryRequest | PlainMessage<SalesEnquiryItemHistoryRequest> | undefined, b: SalesEnquiryItemHistoryRequest | PlainMessage<SalesEnquiryItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Request payload structure used to search and filter Sales Enquiry Item records.
 * Supports pagination controls, tenancy isolation, status grouping, and text-based matching.
 *
 * @generated from message Scailo.SalesEnquiryItemsSearchRequest
 */
export declare class SalesEnquiryItemsSearchRequest extends Message<SalesEnquiryItemsSearchRequest> {
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
     * @generated from field: optional Scailo.SALES_ENQUIRY_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_ENQUIRY_ITEM_SORT_KEY;
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
     * @generated from field: optional Scailo.SALES_ENQUIRY_ITEM_STATUS status = 7;
     */
    status?: SALES_ENQUIRY_ITEM_STATUS;
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
     * @description Filter line items belonging to a specific parent sales enquiry.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 sales_enquiry_id = 20;
     */
    salesEnquiryId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items requesting a specific Unit of Measure (UOM).
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 uom_id = 21;
     */
    uomId?: bigint;
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
     * @generated from field: optional uint64 tax_group_id = 22;
     */
    taxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items scheduled for exact delivery on this specific date.
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
     * @description Filter line items scheduled for delivery ON or AFTER this specific date.
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
     * @description Filter line items scheduled for delivery ON or BEFORE this specific date.
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
    constructor(data?: PartialMessage<SalesEnquiryItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryItemsSearchRequest;
    static equals(a: SalesEnquiryItemsSearchRequest | PlainMessage<SalesEnquiryItemsSearchRequest> | undefined, b: SalesEnquiryItemsSearchRequest | PlainMessage<SalesEnquiryItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Paginated response packet containing a subset of Sales Enquiry Item records.
 * Includes complete operational state parameters for rendering frontend data grids and tables.
 *
 * @generated from message Scailo.SalesEnquiriesServicePaginatedItemsResponse
 */
export declare class SalesEnquiriesServicePaginatedItemsResponse extends Message<SalesEnquiriesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.SalesEnquiryItem payload = 4;
     */
    payload: SalesEnquiryItem[];
    constructor(data?: PartialMessage<SalesEnquiriesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginatedItemsResponse;
    static equals(a: SalesEnquiriesServicePaginatedItemsResponse | PlainMessage<SalesEnquiriesServicePaginatedItemsResponse> | undefined, b: SalesEnquiriesServicePaginatedItemsResponse | PlainMessage<SalesEnquiriesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Sales Enquiry records.
 *
 * @generated from message Scailo.SalesEnquiriesServicePaginationReq
 */
export declare class SalesEnquiriesServicePaginationReq extends Message<SalesEnquiriesServicePaginationReq> {
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
     * @generated from field: optional Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_ENQUIRY_SORT_KEY;
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
    constructor(data?: PartialMessage<SalesEnquiriesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationReq;
    static equals(a: SalesEnquiriesServicePaginationReq | PlainMessage<SalesEnquiriesServicePaginationReq> | undefined, b: SalesEnquiriesServicePaginationReq | PlainMessage<SalesEnquiriesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.SalesEnquiriesServicePaginationResponse
 */
export declare class SalesEnquiriesServicePaginationResponse extends Message<SalesEnquiriesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SalesEnquiry payload = 4;
     */
    payload: SalesEnquiry[];
    constructor(data?: PartialMessage<SalesEnquiriesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationResponse;
    static equals(a: SalesEnquiriesServicePaginationResponse | PlainMessage<SalesEnquiriesServicePaginationResponse> | undefined, b: SalesEnquiriesServicePaginationResponse | PlainMessage<SalesEnquiriesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating sales enquiries using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.SalesEnquiriesServiceFilterReq
 */
export declare class SalesEnquiriesServiceFilterReq extends Message<SalesEnquiriesServiceFilterReq> {
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
     * @generated from field: optional Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_ENQUIRY_SORT_KEY;
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
     * @description The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).
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
     * @description The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).
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
     * @description The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.
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
     * @description Filter sales enquiries containing line items scheduled for exact delivery on this specific date.
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
     * @description Filter sales enquiries containing line items scheduled for delivery ON or AFTER this specific date.
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
     * @description Filter sales enquiries containing line items scheduled for delivery ON or BEFORE this specific date.
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
    constructor(data?: PartialMessage<SalesEnquiriesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceFilterReq;
    static equals(a: SalesEnquiriesServiceFilterReq | PlainMessage<SalesEnquiriesServiceFilterReq> | undefined, b: SalesEnquiriesServiceFilterReq | PlainMessage<SalesEnquiriesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting sales enquiry records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.SalesEnquiriesServiceCountReq
 */
export declare class SalesEnquiriesServiceCountReq extends Message<SalesEnquiriesServiceCountReq> {
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
     * @description The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).
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
     * @description The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).
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
     * @description The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.
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
     * @description Filter sales enquiries containing line items scheduled for exact delivery on this specific date.
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
     * @description Filter sales enquiries containing line items scheduled for delivery ON or AFTER this specific date.
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
     * @description Filter sales enquiries containing line items scheduled for delivery ON or BEFORE this specific date.
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
    constructor(data?: PartialMessage<SalesEnquiriesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCountReq;
    static equals(a: SalesEnquiriesServiceCountReq | PlainMessage<SalesEnquiriesServiceCountReq> | undefined, b: SalesEnquiriesServiceCountReq | PlainMessage<SalesEnquiriesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating sales enquiries via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.SalesEnquiriesServiceSearchAllReq
 */
export declare class SalesEnquiriesServiceSearchAllReq extends Message<SalesEnquiriesServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey?: SALES_ENQUIRY_SORT_KEY;
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
     * @description The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).
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
     * @description The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).
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
    constructor(data?: PartialMessage<SalesEnquiriesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static equals(a: SalesEnquiriesServiceSearchAllReq | PlainMessage<SalesEnquiriesServiceSearchAllReq> | undefined, b: SalesEnquiriesServiceSearchAllReq | PlainMessage<SalesEnquiriesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Request message for assigning a specific contact person (associate) to a Sales Enquiry.
 * This operation creates a linkage between the enquiry and a designated individual belonging
 * to the customer, explicitly identifying who is in charge of or accountable for the sales enquiry from the client's side.
 *
 * @generated from message Scailo.SalesEnquiriesServiceContactCreateRequest
 */
export declare class SalesEnquiriesServiceContactCreateRequest extends Message<SalesEnquiriesServiceContactCreateRequest> {
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
     * @description The unique internal identifier of the parent sales enquiry to which this contact is being assigned.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the associate being assigned to the enquiry.
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
    constructor(data?: PartialMessage<SalesEnquiriesServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceContactCreateRequest;
    static equals(a: SalesEnquiriesServiceContactCreateRequest | PlainMessage<SalesEnquiriesServiceContactCreateRequest> | undefined, b: SalesEnquiriesServiceContactCreateRequest | PlainMessage<SalesEnquiriesServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents the finalized state of a Sales Enquiry Contact mapping.
 * This entity securely binds a designated associate (the client's point of contact)
 * to the parent enquiry, tracking accountability, approval workflows, and providing
 * both internal IDs and unpredictable UUIDs for secure downstream referencing.
 *
 * @generated from message Scailo.SalesEnquiryContact
 */
export declare class SalesEnquiryContact extends Message<SalesEnquiryContact> {
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
     * @description The unique internal identifier of the parent sales enquiry to which this contact belongs.
     *
     * @example 1024
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
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
    constructor(data?: PartialMessage<SalesEnquiryContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryContact;
    static equals(a: SalesEnquiryContact | PlainMessage<SalesEnquiryContact> | undefined, b: SalesEnquiryContact | PlainMessage<SalesEnquiryContact> | undefined): boolean;
}
/**
 *
 * Represents a consolidated collection of designated contacts mapped to a Sales Enquiry.
 *
 * @generated from message Scailo.SalesEnquiryContactsList
 */
export declare class SalesEnquiryContactsList extends Message<SalesEnquiryContactsList> {
    /**
     *
     * @description An array containing the individual associate contact records linked to the enquiry.
     *
     * @example []
     *
     * @format Repeated array of SalesEnquiryContact message blocks.
     *
     * @generated from field: repeated Scailo.SalesEnquiryContact list = 1;
     */
    list: SalesEnquiryContact[];
    constructor(data?: PartialMessage<SalesEnquiryContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryContactsList;
    static equals(a: SalesEnquiryContactsList | PlainMessage<SalesEnquiryContactsList> | undefined, b: SalesEnquiryContactsList | PlainMessage<SalesEnquiryContactsList> | undefined): boolean;
}
//# sourceMappingURL=sales_enquiries.scailo_pb.d.ts.map
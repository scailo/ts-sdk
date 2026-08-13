import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.QUOTATION_REQUEST_ITEM_SORT_KEY
 */
export declare enum QUOTATION_REQUEST_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_NAME = 10;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the baseline price
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_BASELINE_PRICE = 11;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_BASELINE_PRICE = 11,
    /**
     * Fetch ordered results by the quantity
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_QUANTITY = 12;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_QUANTITY = 12,
    /**
     * Fetch ordered results by the delivery date
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_SORT_KEY_DELIVERY_DATE = 13;
     */
    QUOTATION_REQUEST_ITEM_SORT_KEY_DELIVERY_DATE = 13
}
/**
 *
 * Describes the applicable statuses of quotation request items
 *
 * @generated from enum Scailo.QUOTATION_REQUEST_ITEM_STATUS
 */
export declare enum QUOTATION_REQUEST_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    QUOTATION_REQUEST_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the quotation request items must have been approved
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_STATUS_APPROVED = 1;
     */
    QUOTATION_REQUEST_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the quotation request items must be waiting for approval
     *
     * @generated from enum value: QUOTATION_REQUEST_ITEM_STATUS_UNAPPROVED = 2;
     */
    QUOTATION_REQUEST_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.QUOTATION_REQUEST_SORT_KEY
 */
export declare enum QUOTATION_REQUEST_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_CREATED_AT = 1;
     */
    QUOTATION_REQUEST_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_MODIFIED_AT = 2;
     */
    QUOTATION_REQUEST_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_APPROVED_ON = 3;
     */
    QUOTATION_REQUEST_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_APPROVED_BY = 4;
     */
    QUOTATION_REQUEST_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUOTATION_REQUEST_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_COMPLETED_ON = 6;
     */
    QUOTATION_REQUEST_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_REFERENCE_ID = 10;
     */
    QUOTATION_REQUEST_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    QUOTATION_REQUEST_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the priority
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_PRIORITY = 14;
     */
    QUOTATION_REQUEST_SORT_KEY_PRIORITY = 14
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.QuotationsRequestsServiceCreateRequest
 */
export declare class QuotationsRequestsServiceCreateRequest extends Message<QuotationsRequestsServiceCreateRequest> {
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
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
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
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
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
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
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
     * The associated purchase enquiry
     *
     * @generated from field: uint64 purchase_enquiry_id = 12;
     */
    purchaseEnquiryId: bigint;
    /**
     * The date until which quotations responses can be sent
     *
     * @generated from field: string last_date = 13;
     */
    lastDate: string;
    /**
     * The associated currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The number of days until which the quotation request is valid
     *
     * @generated from field: uint64 renewal_period = 15;
     */
    renewalPeriod: bigint;
    /**
     * The priority of the quotation request. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 16;
     */
    priority: string;
    /**
     * The description of the quotation request
     *
     * @generated from field: string description = 17;
     */
    description: string;
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
    constructor(data?: PartialMessage<QuotationsRequestsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceCreateRequest;
    static equals(a: QuotationsRequestsServiceCreateRequest | PlainMessage<QuotationsRequestsServiceCreateRequest> | undefined, b: QuotationsRequestsServiceCreateRequest | PlainMessage<QuotationsRequestsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.QuotationsRequestsServiceUpdateRequest
 */
export declare class QuotationsRequestsServiceUpdateRequest extends Message<QuotationsRequestsServiceUpdateRequest> {
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
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
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
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @mandatory
     *
     * @description Updated alphanumeric reference ID. Must contain at least 1 character.
     *
     * @example "ABS-2023-001-REV"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The date until which quotations responses can be sent
     *
     * @generated from field: string last_date = 13;
     */
    lastDate: string;
    /**
     * The associated currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The number of days until which the quotation request is valid
     *
     * @generated from field: uint64 renewal_period = 15;
     */
    renewalPeriod: bigint;
    /**
     * The priority of the quotation request. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 16;
     */
    priority: string;
    /**
     * The description of the quotation request
     *
     * @generated from field: string description = 17;
     */
    description: string;
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
    constructor(data?: PartialMessage<QuotationsRequestsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceUpdateRequest;
    static equals(a: QuotationsRequestsServiceUpdateRequest | PlainMessage<QuotationsRequestsServiceUpdateRequest> | undefined, b: QuotationsRequestsServiceUpdateRequest | PlainMessage<QuotationsRequestsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.QuotationsRequestsServiceAutofillRequest
 */
export declare class QuotationsRequestsServiceAutofillRequest extends Message<QuotationsRequestsServiceAutofillRequest> {
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
     * The UUID of the record that needs to be updated
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    constructor(data?: PartialMessage<QuotationsRequestsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceAutofillRequest;
    static equals(a: QuotationsRequestsServiceAutofillRequest | PlainMessage<QuotationsRequestsServiceAutofillRequest> | undefined, b: QuotationsRequestsServiceAutofillRequest | PlainMessage<QuotationsRequestsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.QuotationRequestAncillaryParameters
 */
export declare class QuotationRequestAncillaryParameters extends Message<QuotationRequestAncillaryParameters> {
    /**
     * The UUID of the purchase_enquiry_id (the UUID of the associated purchase_enquiry_id)
     *
     * @generated from field: string purchase_enquiry_uuid = 212;
     */
    purchaseEnquiryUuid: string;
    /**
     * The UUID of the currency (the UUID of the associated currency_id)
     *
     * @generated from field: string currency_uuid = 214;
     */
    currencyUuid: string;
    constructor(data?: PartialMessage<QuotationRequestAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationRequestAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationRequestAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationRequestAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationRequestAncillaryParameters;
    static equals(a: QuotationRequestAncillaryParameters | PlainMessage<QuotationRequestAncillaryParameters> | undefined, b: QuotationRequestAncillaryParameters | PlainMessage<QuotationRequestAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.QuotationRequest
 */
export declare class QuotationRequest extends Message<QuotationRequest> {
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
     * The associated purchase enquiry
     *
     * @generated from field: uint64 purchase_enquiry_id = 12;
     */
    purchaseEnquiryId: bigint;
    /**
     * The date until which quotations responses can be sent
     *
     * @generated from field: string last_date = 13;
     */
    lastDate: string;
    /**
     * The associated currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The number of days until which the quotation request is valid
     *
     * @generated from field: uint64 renewal_period = 15;
     */
    renewalPeriod: bigint;
    /**
     * The priority of the quotation request. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 16;
     */
    priority: string;
    /**
     * The description of the quotation request
     *
     * @generated from field: string description = 17;
     */
    description: string;
    /**
     * The list of associated quotation request items
     *
     * @generated from field: repeated Scailo.QuotationRequestItem list = 20;
     */
    list: QuotationRequestItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    /**
     * Stores the total value of the quotation request (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 50;
     */
    totalValue: number;
    constructor(data?: PartialMessage<QuotationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationRequest;
    static equals(a: QuotationRequest | PlainMessage<QuotationRequest> | undefined, b: QuotationRequest | PlainMessage<QuotationRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a quotation request
 *
 * @generated from message Scailo.QuotationsRequestsServiceItemCreateRequest
 */
export declare class QuotationsRequestsServiceItemCreateRequest extends Message<QuotationsRequestsServiceItemCreateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * Stores the quotation request ID
     *
     * @generated from field: uint64 quotation_request_id = 10;
     */
    quotationRequestId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 12;
     */
    hsnSacCode: string;
    /**
     * The min price (in cents)
     *
     * @generated from field: uint64 baseline_price = 13;
     */
    baselinePrice: bigint;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: uint64 quantity = 14;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 16;
     */
    deliveryDate: string;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 17;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationsRequestsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceItemCreateRequest;
    static equals(a: QuotationsRequestsServiceItemCreateRequest | PlainMessage<QuotationsRequestsServiceItemCreateRequest> | undefined, b: QuotationsRequestsServiceItemCreateRequest | PlainMessage<QuotationsRequestsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a quotation request
 *
 * @generated from message Scailo.QuotationsRequestsServiceItemUpdateRequest
 */
export declare class QuotationsRequestsServiceItemUpdateRequest extends Message<QuotationsRequestsServiceItemUpdateRequest> {
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
     * The ID of the record
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
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
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 12;
     */
    hsnSacCode: string;
    /**
     * The min price (in cents)
     *
     * @generated from field: uint64 baseline_price = 13;
     */
    baselinePrice: bigint;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: uint64 quantity = 14;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 16;
     */
    deliveryDate: string;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 17;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationsRequestsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceItemUpdateRequest;
    static equals(a: QuotationsRequestsServiceItemUpdateRequest | PlainMessage<QuotationsRequestsServiceItemUpdateRequest> | undefined, b: QuotationsRequestsServiceItemUpdateRequest | PlainMessage<QuotationsRequestsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a quotation request
 *
 * @generated from message Scailo.QuotationRequestItem
 */
export declare class QuotationRequestItem extends Message<QuotationRequestItem> {
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
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
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
     * Stores the quotation request ID
     *
     * @generated from field: uint64 quotation_request_id = 10;
     */
    quotationRequestId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 12;
     */
    hsnSacCode: string;
    /**
     * The min price (in cents)
     *
     * @generated from field: uint64 baseline_price = 13;
     */
    baselinePrice: bigint;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: uint64 quantity = 14;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 16;
     */
    deliveryDate: string;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 17;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationRequestItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationRequestItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationRequestItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationRequestItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationRequestItem;
    static equals(a: QuotationRequestItem | PlainMessage<QuotationRequestItem> | undefined, b: QuotationRequestItem | PlainMessage<QuotationRequestItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of quotations requests
 *
 * @generated from message Scailo.QuotationsRequestsList
 */
export declare class QuotationsRequestsList extends Message<QuotationsRequestsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.QuotationRequest list = 1;
     */
    list: QuotationRequest[];
    constructor(data?: PartialMessage<QuotationsRequestsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsList;
    static equals(a: QuotationsRequestsList | PlainMessage<QuotationsRequestsList> | undefined, b: QuotationsRequestsList | PlainMessage<QuotationsRequestsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of quotation request items
 *
 * @generated from message Scailo.QuotationsRequestsItemsList
 */
export declare class QuotationsRequestsItemsList extends Message<QuotationsRequestsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.QuotationRequestItem list = 1;
     */
    list: QuotationRequestItem[];
    constructor(data?: PartialMessage<QuotationsRequestsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsItemsList;
    static equals(a: QuotationsRequestsItemsList | PlainMessage<QuotationsRequestsItemsList> | undefined, b: QuotationsRequestsItemsList | PlainMessage<QuotationsRequestsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.QuotationRequestItemHistoryRequest
 */
export declare class QuotationRequestItemHistoryRequest extends Message<QuotationRequestItemHistoryRequest> {
    /**
     * Stores the quotation request ID
     *
     * @generated from field: uint64 quotation_request_id = 10;
     */
    quotationRequestId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<QuotationRequestItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationRequestItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationRequestItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationRequestItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationRequestItemHistoryRequest;
    static equals(a: QuotationRequestItemHistoryRequest | PlainMessage<QuotationRequestItemHistoryRequest> | undefined, b: QuotationRequestItemHistoryRequest | PlainMessage<QuotationRequestItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.QuotationRequestItemsSearchRequest
 */
export declare class QuotationRequestItemsSearchRequest extends Message<QuotationRequestItemsSearchRequest> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
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
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.QUOTATION_REQUEST_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_REQUEST_ITEM_SORT_KEY;
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
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.QUOTATION_REQUEST_ITEM_STATUS status = 7;
     */
    status: QUOTATION_REQUEST_ITEM_STATUS;
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
     * Stores the quotation request ID
     *
     * @generated from field: uint64 quotation_request_id = 20;
     */
    quotationRequestId: bigint;
    /**
     * Stores an optional unit of material
     *
     * @generated from field: uint64 uom_id = 21;
     */
    uomId: bigint;
    /**
     * The exact delivery date of the item in the purchase indent
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the purchase indent
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the purchase indent
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
    constructor(data?: PartialMessage<QuotationRequestItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationRequestItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationRequestItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationRequestItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationRequestItemsSearchRequest;
    static equals(a: QuotationRequestItemsSearchRequest | PlainMessage<QuotationRequestItemsSearchRequest> | undefined, b: QuotationRequestItemsSearchRequest | PlainMessage<QuotationRequestItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.QuotationsRequestsServicePaginatedItemsResponse
 */
export declare class QuotationsRequestsServicePaginatedItemsResponse extends Message<QuotationsRequestsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.QuotationRequestItem payload = 4;
     */
    payload: QuotationRequestItem[];
    constructor(data?: PartialMessage<QuotationsRequestsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginatedItemsResponse;
    static equals(a: QuotationsRequestsServicePaginatedItemsResponse | PlainMessage<QuotationsRequestsServicePaginatedItemsResponse> | undefined, b: QuotationsRequestsServicePaginatedItemsResponse | PlainMessage<QuotationsRequestsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.QuotationsRequestsServicePaginationReq
 */
export declare class QuotationsRequestsServicePaginationReq extends Message<QuotationsRequestsServicePaginationReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
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
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: Scailo.QUOTATION_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_REQUEST_SORT_KEY;
    /**
     * The status of this quotation request
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<QuotationsRequestsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginationReq;
    static equals(a: QuotationsRequestsServicePaginationReq | PlainMessage<QuotationsRequestsServicePaginationReq> | undefined, b: QuotationsRequestsServicePaginationReq | PlainMessage<QuotationsRequestsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.QuotationsRequestsServicePaginationResponse
 */
export declare class QuotationsRequestsServicePaginationResponse extends Message<QuotationsRequestsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.QuotationRequest payload = 4;
     */
    payload: QuotationRequest[];
    constructor(data?: PartialMessage<QuotationsRequestsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginationResponse;
    static equals(a: QuotationsRequestsServicePaginationResponse | PlainMessage<QuotationsRequestsServicePaginationResponse> | undefined, b: QuotationsRequestsServicePaginationResponse | PlainMessage<QuotationsRequestsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.QuotationsRequestsServiceFilterReq
 */
export declare class QuotationsRequestsServiceFilterReq extends Message<QuotationsRequestsServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
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
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.QUOTATION_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_REQUEST_SORT_KEY;
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
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
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
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
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
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
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
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
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
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
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
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
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
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
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
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
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
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
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
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
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
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
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
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated purchase enquiry
     *
     * @generated from field: uint64 purchase_enquiry_id = 22;
     */
    purchaseEnquiryId: bigint;
    /**
     * The associated currency
     *
     * @generated from field: uint64 currency_id = 24;
     */
    currencyId: bigint;
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
     * @generated from field: bool include_form_data = 501;
     */
    includeFormData: boolean;
    constructor(data?: PartialMessage<QuotationsRequestsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceFilterReq;
    static equals(a: QuotationsRequestsServiceFilterReq | PlainMessage<QuotationsRequestsServiceFilterReq> | undefined, b: QuotationsRequestsServiceFilterReq | PlainMessage<QuotationsRequestsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.QuotationsRequestsServiceCountReq
 */
export declare class QuotationsRequestsServiceCountReq extends Message<QuotationsRequestsServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
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
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
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
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
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
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
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
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
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
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
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
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
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
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
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
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
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
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
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
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
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
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
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
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated purchase enquiry
     *
     * @generated from field: uint64 purchase_enquiry_id = 22;
     */
    purchaseEnquiryId: bigint;
    /**
     * The associated currency
     *
     * @generated from field: uint64 currency_id = 24;
     */
    currencyId: bigint;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<QuotationsRequestsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceCountReq;
    static equals(a: QuotationsRequestsServiceCountReq | PlainMessage<QuotationsRequestsServiceCountReq> | undefined, b: QuotationsRequestsServiceCountReq | PlainMessage<QuotationsRequestsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.QuotationsRequestsServiceSearchAllReq
 */
export declare class QuotationsRequestsServiceSearchAllReq extends Message<QuotationsRequestsServiceSearchAllReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
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
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.QUOTATION_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_REQUEST_SORT_KEY;
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
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<QuotationsRequestsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuotationsRequestsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceSearchAllReq;
    static equals(a: QuotationsRequestsServiceSearchAllReq | PlainMessage<QuotationsRequestsServiceSearchAllReq> | undefined, b: QuotationsRequestsServiceSearchAllReq | PlainMessage<QuotationsRequestsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=quotations_requests.scailo_pb.d.ts.map
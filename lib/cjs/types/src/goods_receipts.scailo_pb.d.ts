import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a goods receipt can be added
 *
 * @generated from enum Scailo.GOODS_RECEIPT_REF_FROM
 */
export declare enum GOODS_RECEIPT_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: GOODS_RECEIPT_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    GOODS_RECEIPT_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the goods receipt originated from a purchase order
     *
     * @generated from enum value: GOODS_RECEIPT_REF_FROM_PURCHASE_ORDER = 1;
     */
    GOODS_RECEIPT_REF_FROM_PURCHASE_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.GOODS_RECEIPT_ITEM_SORT_KEY
 */
export declare enum GOODS_RECEIPT_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the vendor unit of material ID
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_VENDOR_UOM_ID = 12;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_VENDOR_UOM_ID = 12,
    /**
     * Fetch ordered results by the vendor quantity
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_SORT_KEY_VENDOR_QUANTITY = 13;
     */
    GOODS_RECEIPT_ITEM_SORT_KEY_VENDOR_QUANTITY = 13
}
/**
 *
 * Describes the applicable statuses of goods receipt items
 *
 * @generated from enum Scailo.GOODS_RECEIPT_ITEM_STATUS
 */
export declare enum GOODS_RECEIPT_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    GOODS_RECEIPT_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the goods receipt items must have been approved
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_STATUS_APPROVED = 1;
     */
    GOODS_RECEIPT_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the goods receipt items must be waiting for approval
     *
     * @generated from enum value: GOODS_RECEIPT_ITEM_STATUS_UNAPPROVED = 2;
     */
    GOODS_RECEIPT_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.GOODS_RECEIPT_SORT_KEY
 */
export declare enum GOODS_RECEIPT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_CREATED_AT = 1;
     */
    GOODS_RECEIPT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_MODIFIED_AT = 2;
     */
    GOODS_RECEIPT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_APPROVED_ON = 3;
     */
    GOODS_RECEIPT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_APPROVED_BY = 4;
     */
    GOODS_RECEIPT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOODS_RECEIPT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_COMPLETED_ON = 6;
     */
    GOODS_RECEIPT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_REFERENCE_ID = 10;
     */
    GOODS_RECEIPT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    GOODS_RECEIPT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the vendor bill no
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_VENDOR_BILL_NO = 12;
     */
    GOODS_RECEIPT_SORT_KEY_VENDOR_BILL_NO = 12,
    /**
     * Fetch ordered results by the vendor bill date
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_VENDOR_BILL_DATE = 13;
     */
    GOODS_RECEIPT_SORT_KEY_VENDOR_BILL_DATE = 13
}
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Scailo.GOODS_RECEIPT_BILLING_STATUS
 */
export declare enum GOODS_RECEIPT_BILLING_STATUS {
    /**
     * Any billing status
     *
     * @generated from enum value: GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Goods Receipt is billed
     *
     * @generated from enum value: GOODS_RECEIPT_BILLING_STATUS_BILLED = 1;
     */
    GOODS_RECEIPT_BILLING_STATUS_BILLED = 1,
    /**
     * Goods Receipt is unbilled
     *
     * @generated from enum value: GOODS_RECEIPT_BILLING_STATUS_UNBILLED = 2;
     */
    GOODS_RECEIPT_BILLING_STATUS_UNBILLED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.GoodsReceiptsServiceCreateRequest
 */
export declare class GoodsReceiptsServiceCreateRequest extends Message<GoodsReceiptsServiceCreateRequest> {
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
     * The associated reference
     *
     * @generated from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 12;
     */
    refFrom: GOODS_RECEIPT_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 14;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 15;
     */
    vendorBillDate: string;
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
    constructor(data?: PartialMessage<GoodsReceiptsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceCreateRequest;
    static equals(a: GoodsReceiptsServiceCreateRequest | PlainMessage<GoodsReceiptsServiceCreateRequest> | undefined, b: GoodsReceiptsServiceCreateRequest | PlainMessage<GoodsReceiptsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.GoodsReceiptsServiceUpdateRequest
 */
export declare class GoodsReceiptsServiceUpdateRequest extends Message<GoodsReceiptsServiceUpdateRequest> {
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
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 14;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 15;
     */
    vendorBillDate: string;
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
    constructor(data?: PartialMessage<GoodsReceiptsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceUpdateRequest;
    static equals(a: GoodsReceiptsServiceUpdateRequest | PlainMessage<GoodsReceiptsServiceUpdateRequest> | undefined, b: GoodsReceiptsServiceUpdateRequest | PlainMessage<GoodsReceiptsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.GoodsReceiptsServiceAutofillRequest
 */
export declare class GoodsReceiptsServiceAutofillRequest extends Message<GoodsReceiptsServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<GoodsReceiptsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceAutofillRequest;
    static equals(a: GoodsReceiptsServiceAutofillRequest | PlainMessage<GoodsReceiptsServiceAutofillRequest> | undefined, b: GoodsReceiptsServiceAutofillRequest | PlainMessage<GoodsReceiptsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.GoodsReceiptAncillaryParameters
 */
export declare class GoodsReceiptAncillaryParameters extends Message<GoodsReceiptAncillaryParameters> {
    /**
     * The UUID of the ref_id (the UUID of the associated ref_id)
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    constructor(data?: PartialMessage<GoodsReceiptAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptAncillaryParameters;
    static equals(a: GoodsReceiptAncillaryParameters | PlainMessage<GoodsReceiptAncillaryParameters> | undefined, b: GoodsReceiptAncillaryParameters | PlainMessage<GoodsReceiptAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.GoodsReceipt
 */
export declare class GoodsReceipt extends Message<GoodsReceipt> {
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
     * The associated reference
     *
     * @generated from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 12;
     */
    refFrom: GOODS_RECEIPT_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 14;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 15;
     */
    vendorBillDate: string;
    /**
     * The list of associated goods receipt items
     *
     * @generated from field: repeated Scailo.GoodsReceiptItem list = 20;
     */
    list: GoodsReceiptItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<GoodsReceipt>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceipt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceipt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceipt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceipt;
    static equals(a: GoodsReceipt | PlainMessage<GoodsReceipt> | undefined, b: GoodsReceipt | PlainMessage<GoodsReceipt> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a goods receipt
 *
 * @generated from message Scailo.GoodsReceiptsServiceItemCreateRequest
 */
export declare class GoodsReceiptsServiceItemCreateRequest extends Message<GoodsReceiptsServiceItemCreateRequest> {
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
     * Stores the goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
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
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<GoodsReceiptsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceItemCreateRequest;
    static equals(a: GoodsReceiptsServiceItemCreateRequest | PlainMessage<GoodsReceiptsServiceItemCreateRequest> | undefined, b: GoodsReceiptsServiceItemCreateRequest | PlainMessage<GoodsReceiptsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an individual item as part of multiple item addition to a goods receipt
 *
 * @generated from message Scailo.GoodsReceiptsServiceMultipleItemsSingleton
 */
export declare class GoodsReceiptsServiceMultipleItemsSingleton extends Message<GoodsReceiptsServiceMultipleItemsSingleton> {
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
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<GoodsReceiptsServiceMultipleItemsSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceMultipleItemsSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceMultipleItemsSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceMultipleItemsSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceMultipleItemsSingleton;
    static equals(a: GoodsReceiptsServiceMultipleItemsSingleton | PlainMessage<GoodsReceiptsServiceMultipleItemsSingleton> | undefined, b: GoodsReceiptsServiceMultipleItemsSingleton | PlainMessage<GoodsReceiptsServiceMultipleItemsSingleton> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add multiple items to a goods receipt
 *
 * @generated from message Scailo.GoodsReceiptsServiceMultipleItemsCreateRequest
 */
export declare class GoodsReceiptsServiceMultipleItemsCreateRequest extends Message<GoodsReceiptsServiceMultipleItemsCreateRequest> {
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
     * Stores the goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
    /**
     * List of items
     *
     * @generated from field: repeated Scailo.GoodsReceiptsServiceMultipleItemsSingleton list = 11;
     */
    list: GoodsReceiptsServiceMultipleItemsSingleton[];
    constructor(data?: PartialMessage<GoodsReceiptsServiceMultipleItemsCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceMultipleItemsCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceMultipleItemsCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceMultipleItemsCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceMultipleItemsCreateRequest;
    static equals(a: GoodsReceiptsServiceMultipleItemsCreateRequest | PlainMessage<GoodsReceiptsServiceMultipleItemsCreateRequest> | undefined, b: GoodsReceiptsServiceMultipleItemsCreateRequest | PlainMessage<GoodsReceiptsServiceMultipleItemsCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a goods receipt
 *
 * @generated from message Scailo.GoodsReceiptsServiceItemUpdateRequest
 */
export declare class GoodsReceiptsServiceItemUpdateRequest extends Message<GoodsReceiptsServiceItemUpdateRequest> {
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
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<GoodsReceiptsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceItemUpdateRequest;
    static equals(a: GoodsReceiptsServiceItemUpdateRequest | PlainMessage<GoodsReceiptsServiceItemUpdateRequest> | undefined, b: GoodsReceiptsServiceItemUpdateRequest | PlainMessage<GoodsReceiptsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a goods receipt
 *
 * @generated from message Scailo.GoodsReceiptItem
 */
export declare class GoodsReceiptItem extends Message<GoodsReceiptItem> {
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
     * Stores the goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
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
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    /**
     * ----------------------------------------
     * The UUID of the associated goods receipt
     *
     * @generated from field: string goods_receipt_uuid = 110;
     */
    goodsReceiptUuid: string;
    /**
     * The UUID of the associated family
     *
     * ----------------------------------------
     *
     * @generated from field: string family_uuid = 111;
     */
    familyUuid: string;
    constructor(data?: PartialMessage<GoodsReceiptItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptItem;
    static equals(a: GoodsReceiptItem | PlainMessage<GoodsReceiptItem> | undefined, b: GoodsReceiptItem | PlainMessage<GoodsReceiptItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goods receipts
 *
 * @generated from message Scailo.GoodsReceiptsList
 */
export declare class GoodsReceiptsList extends Message<GoodsReceiptsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GoodsReceipt list = 1;
     */
    list: GoodsReceipt[];
    constructor(data?: PartialMessage<GoodsReceiptsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsList;
    static equals(a: GoodsReceiptsList | PlainMessage<GoodsReceiptsList> | undefined, b: GoodsReceiptsList | PlainMessage<GoodsReceiptsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goods receipt items
 *
 * @generated from message Scailo.GoodsReceiptsItemsList
 */
export declare class GoodsReceiptsItemsList extends Message<GoodsReceiptsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GoodsReceiptItem list = 1;
     */
    list: GoodsReceiptItem[];
    constructor(data?: PartialMessage<GoodsReceiptsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsItemsList;
    static equals(a: GoodsReceiptsItemsList | PlainMessage<GoodsReceiptsItemsList> | undefined, b: GoodsReceiptsItemsList | PlainMessage<GoodsReceiptsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.GoodsReceiptItemHistoryRequest
 */
export declare class GoodsReceiptItemHistoryRequest extends Message<GoodsReceiptItemHistoryRequest> {
    /**
     * Stores the goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<GoodsReceiptItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptItemHistoryRequest;
    static equals(a: GoodsReceiptItemHistoryRequest | PlainMessage<GoodsReceiptItemHistoryRequest> | undefined, b: GoodsReceiptItemHistoryRequest | PlainMessage<GoodsReceiptItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective goods receipt item
 *
 * @generated from message Scailo.GoodsReceiptItemProspectiveInfoRequest
 */
export declare class GoodsReceiptItemProspectiveInfoRequest extends Message<GoodsReceiptItemProspectiveInfoRequest> {
    /**
     * Stores the goods receipt ID
     *
     * @generated from field: uint64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<GoodsReceiptItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptItemProspectiveInfoRequest;
    static equals(a: GoodsReceiptItemProspectiveInfoRequest | PlainMessage<GoodsReceiptItemProspectiveInfoRequest> | undefined, b: GoodsReceiptItemProspectiveInfoRequest | PlainMessage<GoodsReceiptItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.GoodsReceiptItemsSearchRequest
 */
export declare class GoodsReceiptItemsSearchRequest extends Message<GoodsReceiptItemsSearchRequest> {
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
     * @generated from field: Scailo.GOODS_RECEIPT_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_RECEIPT_ITEM_SORT_KEY;
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
     * @generated from field: Scailo.GOODS_RECEIPT_ITEM_STATUS status = 7;
     */
    status: GOODS_RECEIPT_ITEM_STATUS;
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
     * The ID of the goods receipt
     *
     * @generated from field: uint64 goods_receipt_id = 20;
     */
    goodsReceiptId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 22;
     */
    familyId: bigint;
    /**
     * The ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 24;
     */
    vendorUomId: bigint;
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
     * @generated from field: uint64 vendor_id = 200;
     */
    vendorId: bigint;
    /**
     * The ID of the associated purchase order
     *
     * ------------------------------------------
     *
     * @generated from field: uint64 purchase_order_id = 210;
     */
    purchaseOrderId: bigint;
    constructor(data?: PartialMessage<GoodsReceiptItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptItemsSearchRequest;
    static equals(a: GoodsReceiptItemsSearchRequest | PlainMessage<GoodsReceiptItemsSearchRequest> | undefined, b: GoodsReceiptItemsSearchRequest | PlainMessage<GoodsReceiptItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.GoodsReceiptsServicePaginatedItemsResponse
 */
export declare class GoodsReceiptsServicePaginatedItemsResponse extends Message<GoodsReceiptsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.GoodsReceiptItem payload = 4;
     */
    payload: GoodsReceiptItem[];
    constructor(data?: PartialMessage<GoodsReceiptsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginatedItemsResponse;
    static equals(a: GoodsReceiptsServicePaginatedItemsResponse | PlainMessage<GoodsReceiptsServicePaginatedItemsResponse> | undefined, b: GoodsReceiptsServicePaginatedItemsResponse | PlainMessage<GoodsReceiptsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest extends Message<GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 1;
     */
    refFrom: GOODS_RECEIPT_REF_FROM;
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
    constructor(data?: PartialMessage<GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.GoodsReceiptsServicePaginationReq
 */
export declare class GoodsReceiptsServicePaginationReq extends Message<GoodsReceiptsServicePaginationReq> {
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
     * @generated from field: Scailo.GOODS_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_RECEIPT_SORT_KEY;
    /**
     * The status of this goods receipt
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<GoodsReceiptsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginationReq;
    static equals(a: GoodsReceiptsServicePaginationReq | PlainMessage<GoodsReceiptsServicePaginationReq> | undefined, b: GoodsReceiptsServicePaginationReq | PlainMessage<GoodsReceiptsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.GoodsReceiptsServicePaginationResponse
 */
export declare class GoodsReceiptsServicePaginationResponse extends Message<GoodsReceiptsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.GoodsReceipt payload = 4;
     */
    payload: GoodsReceipt[];
    constructor(data?: PartialMessage<GoodsReceiptsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginationResponse;
    static equals(a: GoodsReceiptsServicePaginationResponse | PlainMessage<GoodsReceiptsServicePaginationResponse> | undefined, b: GoodsReceiptsServicePaginationResponse | PlainMessage<GoodsReceiptsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.GoodsReceiptsServiceFilterReq
 */
export declare class GoodsReceiptsServiceFilterReq extends Message<GoodsReceiptsServiceFilterReq> {
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
     * @generated from field: Scailo.GOODS_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_RECEIPT_SORT_KEY;
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
     * The associated reference
     *
     * @generated from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 22;
     */
    refFrom: GOODS_RECEIPT_REF_FROM;
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
     * The start date of vendor bills
     *
     * @generated from field: string vendor_bill_date_start = 25;
     */
    vendorBillDateStart: string;
    /**
     * The end date of vendor bills
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
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 30;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 31;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The status of the goods receipt bill
     *
     * @generated from field: Scailo.GOODS_RECEIPT_BILLING_STATUS billing_status = 50;
     */
    billingStatus: GOODS_RECEIPT_BILLING_STATUS;
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
    constructor(data?: PartialMessage<GoodsReceiptsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceFilterReq;
    static equals(a: GoodsReceiptsServiceFilterReq | PlainMessage<GoodsReceiptsServiceFilterReq> | undefined, b: GoodsReceiptsServiceFilterReq | PlainMessage<GoodsReceiptsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.GoodsReceiptsServiceCountReq
 */
export declare class GoodsReceiptsServiceCountReq extends Message<GoodsReceiptsServiceCountReq> {
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
     * The associated reference
     *
     * @generated from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 22;
     */
    refFrom: GOODS_RECEIPT_REF_FROM;
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
     * The start date of vendor bills
     *
     * @generated from field: string vendor_bill_date_start = 25;
     */
    vendorBillDateStart: string;
    /**
     * The end date of vendor bills
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
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 30;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 31;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The status of the goods receipt bill
     *
     * @generated from field: Scailo.GOODS_RECEIPT_BILLING_STATUS billing_status = 50;
     */
    billingStatus: GOODS_RECEIPT_BILLING_STATUS;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<GoodsReceiptsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceCountReq;
    static equals(a: GoodsReceiptsServiceCountReq | PlainMessage<GoodsReceiptsServiceCountReq> | undefined, b: GoodsReceiptsServiceCountReq | PlainMessage<GoodsReceiptsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.GoodsReceiptsServiceSearchAllReq
 */
export declare class GoodsReceiptsServiceSearchAllReq extends Message<GoodsReceiptsServiceSearchAllReq> {
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
     * @generated from field: Scailo.GOODS_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_RECEIPT_SORT_KEY;
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
    /**
     * The associated reference
     *
     * @generated from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 22;
     */
    refFrom: GOODS_RECEIPT_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The status of the goods receipt bill
     *
     * @generated from field: Scailo.GOODS_RECEIPT_BILLING_STATUS billing_status = 40;
     */
    billingStatus: GOODS_RECEIPT_BILLING_STATUS;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 50;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<GoodsReceiptsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsReceiptsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceSearchAllReq;
    static equals(a: GoodsReceiptsServiceSearchAllReq | PlainMessage<GoodsReceiptsServiceSearchAllReq> | undefined, b: GoodsReceiptsServiceSearchAllReq | PlainMessage<GoodsReceiptsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=goods_receipts.scailo_pb.d.ts.map
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a purchase return can be added
 *
 * @generated from enum Scailo.PURCHASE_RETURN_REF_FROM
 */
export declare enum PURCHASE_RETURN_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: PURCHASE_RETURN_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_RETURN_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the purchase return originated from a purchase order
     *
     * @generated from enum value: PURCHASE_RETURN_REF_FROM_PURCHASE_ORDER = 1;
     */
    PURCHASE_RETURN_REF_FROM_PURCHASE_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_RETURN_ITEM_SORT_KEY
 */
export declare enum PURCHASE_RETURN_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the vendor unit of material ID
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_VENDOR_UOM_ID = 12;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_VENDOR_UOM_ID = 12,
    /**
     * Fetch ordered results by the vendor quantity
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_SORT_KEY_VENDOR_QUANTITY = 13;
     */
    PURCHASE_RETURN_ITEM_SORT_KEY_VENDOR_QUANTITY = 13
}
/**
 *
 * Describes the applicable statuses of purchase return items
 *
 * @generated from enum Scailo.PURCHASE_RETURN_ITEM_STATUS
 */
export declare enum PURCHASE_RETURN_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the purchase return items must have been approved
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_STATUS_APPROVED = 1;
     */
    PURCHASE_RETURN_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the purchase return items must be waiting for approval
     *
     * @generated from enum value: PURCHASE_RETURN_ITEM_STATUS_UNAPPROVED = 2;
     */
    PURCHASE_RETURN_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_RETURN_SORT_KEY
 */
export declare enum PURCHASE_RETURN_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_RETURN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_RETURN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_RETURN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_RETURN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_COMPLETED_ON = 6;
     */
    PURCHASE_RETURN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_REFERENCE_ID = 10;
     */
    PURCHASE_RETURN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PURCHASE_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Scailo.PURCHASE_RETURN_BILLING_STATUS
 */
export declare enum PURCHASE_RETURN_BILLING_STATUS {
    /**
     * Any billing status
     *
     * @generated from enum value: PURCHASE_RETURN_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_RETURN_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Purchase return is billed
     *
     * @generated from enum value: PURCHASE_RETURN_BILLING_STATUS_BILLED = 1;
     */
    PURCHASE_RETURN_BILLING_STATUS_BILLED = 1,
    /**
     * Purchase return is unbilled
     *
     * @generated from enum value: PURCHASE_RETURN_BILLING_STATUS_UNBILLED = 2;
     */
    PURCHASE_RETURN_BILLING_STATUS_UNBILLED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.PurchasesReturnsServiceCreateRequest
 */
export declare class PurchasesReturnsServiceCreateRequest extends Message<PurchasesReturnsServiceCreateRequest> {
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
     * @generated from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: PURCHASE_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 15;
     */
    locationId: bigint;
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
    constructor(data?: PartialMessage<PurchasesReturnsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceCreateRequest;
    static equals(a: PurchasesReturnsServiceCreateRequest | PlainMessage<PurchasesReturnsServiceCreateRequest> | undefined, b: PurchasesReturnsServiceCreateRequest | PlainMessage<PurchasesReturnsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.PurchasesReturnsServiceUpdateRequest
 */
export declare class PurchasesReturnsServiceUpdateRequest extends Message<PurchasesReturnsServiceUpdateRequest> {
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
    constructor(data?: PartialMessage<PurchasesReturnsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceUpdateRequest;
    static equals(a: PurchasesReturnsServiceUpdateRequest | PlainMessage<PurchasesReturnsServiceUpdateRequest> | undefined, b: PurchasesReturnsServiceUpdateRequest | PlainMessage<PurchasesReturnsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.PurchaseReturnAncillaryParameters
 */
export declare class PurchaseReturnAncillaryParameters extends Message<PurchaseReturnAncillaryParameters> {
    /**
     * The UUID of the ref_id (the UUID of the associated ref_id)
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    /**
     * The UUID of the location (the UUID of the associated location_id)
     *
     * @generated from field: string location_uuid = 215;
     */
    locationUuid: string;
    constructor(data?: PartialMessage<PurchaseReturnAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseReturnAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturnAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturnAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturnAncillaryParameters;
    static equals(a: PurchaseReturnAncillaryParameters | PlainMessage<PurchaseReturnAncillaryParameters> | undefined, b: PurchaseReturnAncillaryParameters | PlainMessage<PurchaseReturnAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.PurchaseReturn
 */
export declare class PurchaseReturn extends Message<PurchaseReturn> {
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
     * @generated from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: PURCHASE_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 15;
     */
    locationId: bigint;
    /**
     * The list of associated purchase return items
     *
     * @generated from field: repeated Scailo.PurchaseReturnItem list = 20;
     */
    list: PurchaseReturnItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<PurchaseReturn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseReturn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturn;
    static equals(a: PurchaseReturn | PlainMessage<PurchaseReturn> | undefined, b: PurchaseReturn | PlainMessage<PurchaseReturn> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a purchase return
 *
 * @generated from message Scailo.PurchasesReturnsServiceItemCreateRequest
 */
export declare class PurchasesReturnsServiceItemCreateRequest extends Message<PurchasesReturnsServiceItemCreateRequest> {
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
     * Stores the purchase return ID
     *
     * @generated from field: uint64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<PurchasesReturnsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceItemCreateRequest;
    static equals(a: PurchasesReturnsServiceItemCreateRequest | PlainMessage<PurchasesReturnsServiceItemCreateRequest> | undefined, b: PurchasesReturnsServiceItemCreateRequest | PlainMessage<PurchasesReturnsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a purchase return
 *
 * @generated from message Scailo.PurchasesReturnsServiceItemUpdateRequest
 */
export declare class PurchasesReturnsServiceItemUpdateRequest extends Message<PurchasesReturnsServiceItemUpdateRequest> {
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
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<PurchasesReturnsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceItemUpdateRequest;
    static equals(a: PurchasesReturnsServiceItemUpdateRequest | PlainMessage<PurchasesReturnsServiceItemUpdateRequest> | undefined, b: PurchasesReturnsServiceItemUpdateRequest | PlainMessage<PurchasesReturnsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a purchase return
 *
 * @generated from message Scailo.PurchaseReturnItem
 */
export declare class PurchaseReturnItem extends Message<PurchaseReturnItem> {
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
     * Stores the purchase return ID
     *
     * @generated from field: uint64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<PurchaseReturnItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseReturnItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturnItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturnItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturnItem;
    static equals(a: PurchaseReturnItem | PlainMessage<PurchaseReturnItem> | undefined, b: PurchaseReturnItem | PlainMessage<PurchaseReturnItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchases returns
 *
 * @generated from message Scailo.PurchasesReturnsList
 */
export declare class PurchasesReturnsList extends Message<PurchasesReturnsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseReturn list = 1;
     */
    list: PurchaseReturn[];
    constructor(data?: PartialMessage<PurchasesReturnsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsList;
    static equals(a: PurchasesReturnsList | PlainMessage<PurchasesReturnsList> | undefined, b: PurchasesReturnsList | PlainMessage<PurchasesReturnsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchase return items
 *
 * @generated from message Scailo.PurchasesReturnsItemsList
 */
export declare class PurchasesReturnsItemsList extends Message<PurchasesReturnsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseReturnItem list = 1;
     */
    list: PurchaseReturnItem[];
    constructor(data?: PartialMessage<PurchasesReturnsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsItemsList;
    static equals(a: PurchasesReturnsItemsList | PlainMessage<PurchasesReturnsItemsList> | undefined, b: PurchasesReturnsItemsList | PlainMessage<PurchasesReturnsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.PurchaseReturnItemHistoryRequest
 */
export declare class PurchaseReturnItemHistoryRequest extends Message<PurchaseReturnItemHistoryRequest> {
    /**
     * Stores the purchase return ID
     *
     * @generated from field: uint64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<PurchaseReturnItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseReturnItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturnItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturnItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturnItemHistoryRequest;
    static equals(a: PurchaseReturnItemHistoryRequest | PlainMessage<PurchaseReturnItemHistoryRequest> | undefined, b: PurchaseReturnItemHistoryRequest | PlainMessage<PurchaseReturnItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective purchase return item
 *
 * @generated from message Scailo.PurchaseReturnItemProspectiveInfoRequest
 */
export declare class PurchaseReturnItemProspectiveInfoRequest extends Message<PurchaseReturnItemProspectiveInfoRequest> {
    /**
     * Stores the purchase return ID
     *
     * @generated from field: uint64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<PurchaseReturnItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseReturnItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturnItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturnItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturnItemProspectiveInfoRequest;
    static equals(a: PurchaseReturnItemProspectiveInfoRequest | PlainMessage<PurchaseReturnItemProspectiveInfoRequest> | undefined, b: PurchaseReturnItemProspectiveInfoRequest | PlainMessage<PurchaseReturnItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.PurchaseReturnItemsSearchRequest
 */
export declare class PurchaseReturnItemsSearchRequest extends Message<PurchaseReturnItemsSearchRequest> {
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
     * @generated from field: Scailo.PURCHASE_RETURN_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_RETURN_ITEM_SORT_KEY;
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
     * @generated from field: Scailo.PURCHASE_RETURN_ITEM_STATUS status = 7;
     */
    status: PURCHASE_RETURN_ITEM_STATUS;
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
     * The ID of the purchase return
     *
     * @generated from field: uint64 purchase_return_id = 20;
     */
    purchaseReturnId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 22;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 23;
     */
    itemHash: string;
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
    constructor(data?: PartialMessage<PurchaseReturnItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseReturnItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturnItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturnItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturnItemsSearchRequest;
    static equals(a: PurchaseReturnItemsSearchRequest | PlainMessage<PurchaseReturnItemsSearchRequest> | undefined, b: PurchaseReturnItemsSearchRequest | PlainMessage<PurchaseReturnItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.PurchasesReturnsServicePaginatedItemsResponse
 */
export declare class PurchasesReturnsServicePaginatedItemsResponse extends Message<PurchasesReturnsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.PurchaseReturnItem payload = 4;
     */
    payload: PurchaseReturnItem[];
    constructor(data?: PartialMessage<PurchasesReturnsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginatedItemsResponse;
    static equals(a: PurchasesReturnsServicePaginatedItemsResponse | PlainMessage<PurchasesReturnsServicePaginatedItemsResponse> | undefined, b: PurchasesReturnsServicePaginatedItemsResponse | PlainMessage<PurchasesReturnsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest extends Message<PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 1;
     */
    refFrom: PURCHASE_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.PurchasesReturnsServicePaginationReq
 */
export declare class PurchasesReturnsServicePaginationReq extends Message<PurchasesReturnsServicePaginationReq> {
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
     * @generated from field: Scailo.PURCHASE_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_RETURN_SORT_KEY;
    /**
     * The status of this purchase return
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<PurchasesReturnsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginationReq;
    static equals(a: PurchasesReturnsServicePaginationReq | PlainMessage<PurchasesReturnsServicePaginationReq> | undefined, b: PurchasesReturnsServicePaginationReq | PlainMessage<PurchasesReturnsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.PurchasesReturnsServicePaginationResponse
 */
export declare class PurchasesReturnsServicePaginationResponse extends Message<PurchasesReturnsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.PurchaseReturn payload = 4;
     */
    payload: PurchaseReturn[];
    constructor(data?: PartialMessage<PurchasesReturnsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginationResponse;
    static equals(a: PurchasesReturnsServicePaginationResponse | PlainMessage<PurchasesReturnsServicePaginationResponse> | undefined, b: PurchasesReturnsServicePaginationResponse | PlainMessage<PurchasesReturnsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.PurchasesReturnsServiceFilterReq
 */
export declare class PurchasesReturnsServiceFilterReq extends Message<PurchasesReturnsServiceFilterReq> {
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
     * @generated from field: Scailo.PURCHASE_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_RETURN_SORT_KEY;
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
     * @generated from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: PURCHASE_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 25;
     */
    locationId: bigint;
    /**
     * The status of the purchase return bill
     *
     * @generated from field: Scailo.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: PURCHASE_RETURN_BILLING_STATUS;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 50;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 51;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 60;
     */
    familyId: bigint;
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
    constructor(data?: PartialMessage<PurchasesReturnsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceFilterReq;
    static equals(a: PurchasesReturnsServiceFilterReq | PlainMessage<PurchasesReturnsServiceFilterReq> | undefined, b: PurchasesReturnsServiceFilterReq | PlainMessage<PurchasesReturnsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.PurchasesReturnsServiceCountReq
 */
export declare class PurchasesReturnsServiceCountReq extends Message<PurchasesReturnsServiceCountReq> {
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
     * @generated from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: PURCHASE_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 25;
     */
    locationId: bigint;
    /**
     * The status of the purchase return bill
     *
     * @generated from field: Scailo.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: PURCHASE_RETURN_BILLING_STATUS;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 50;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 51;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 60;
     */
    familyId: bigint;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<PurchasesReturnsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceCountReq;
    static equals(a: PurchasesReturnsServiceCountReq | PlainMessage<PurchasesReturnsServiceCountReq> | undefined, b: PurchasesReturnsServiceCountReq | PlainMessage<PurchasesReturnsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.PurchasesReturnsServiceSearchAllReq
 */
export declare class PurchasesReturnsServiceSearchAllReq extends Message<PurchasesReturnsServiceSearchAllReq> {
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
     * @generated from field: Scailo.PURCHASE_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_RETURN_SORT_KEY;
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
     * @generated from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: PURCHASE_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The status of the purchase return bill
     *
     * @generated from field: Scailo.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: PURCHASE_RETURN_BILLING_STATUS;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 50;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<PurchasesReturnsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesReturnsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceSearchAllReq;
    static equals(a: PurchasesReturnsServiceSearchAllReq | PlainMessage<PurchasesReturnsServiceSearchAllReq> | undefined, b: PurchasesReturnsServiceSearchAllReq | PlainMessage<PurchasesReturnsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=purchases_returns.scailo_pb.d.ts.map
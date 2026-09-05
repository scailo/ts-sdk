import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a sales return can be added
 *
 * @generated from enum Scailo.SALES_RETURN_REF_FROM
 */
export declare enum SALES_RETURN_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: SALES_RETURN_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    SALES_RETURN_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the sales return originated from a sales order
     *
     * @generated from enum value: SALES_RETURN_REF_FROM_SALES_ORDER = 1;
     */
    SALES_RETURN_REF_FROM_SALES_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_RETURN_ITEM_SORT_KEY
 */
export declare enum SALES_RETURN_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SALES_RETURN_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    SALES_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SALES_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the client unit of material ID
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    SALES_RETURN_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch ordered results by the client quantity
     *
     * @generated from enum value: SALES_RETURN_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    SALES_RETURN_ITEM_SORT_KEY_CLIENT_QUANTITY = 13
}
/**
 *
 * Describes the applicable statuses of sales return items
 *
 * @generated from enum Scailo.SALES_RETURN_ITEM_STATUS
 */
export declare enum SALES_RETURN_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the sales return items must have been approved
     *
     * @generated from enum value: SALES_RETURN_ITEM_STATUS_APPROVED = 1;
     */
    SALES_RETURN_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the sales return items must be waiting for approval
     *
     * @generated from enum value: SALES_RETURN_ITEM_STATUS_UNAPPROVED = 2;
     */
    SALES_RETURN_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_RETURN_SORT_KEY
 */
export declare enum SALES_RETURN_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_RETURN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_CREATED_AT = 1;
     */
    SALES_RETURN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_RETURN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_RETURN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_RETURN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_RETURN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_RETURN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Scailo.SALES_RETURN_BILLING_STATUS
 */
export declare enum SALES_RETURN_BILLING_STATUS {
    /**
     * Any billing status
     *
     * @generated from enum value: SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Sales return is billed
     *
     * @generated from enum value: SALES_RETURN_BILLING_STATUS_BILLED = 1;
     */
    SALES_RETURN_BILLING_STATUS_BILLED = 1,
    /**
     * Sales return is unbilled
     *
     * @generated from enum value: SALES_RETURN_BILLING_STATUS_UNBILLED = 2;
     */
    SALES_RETURN_BILLING_STATUS_UNBILLED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SalesReturnsServiceCreateRequest
 */
export declare class SalesReturnsServiceCreateRequest extends Message<SalesReturnsServiceCreateRequest> {
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
     * @generated from field: Scailo.SALES_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: SALES_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<SalesReturnsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceCreateRequest;
    static equals(a: SalesReturnsServiceCreateRequest | PlainMessage<SalesReturnsServiceCreateRequest> | undefined, b: SalesReturnsServiceCreateRequest | PlainMessage<SalesReturnsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SalesReturnsServiceUpdateRequest
 */
export declare class SalesReturnsServiceUpdateRequest extends Message<SalesReturnsServiceUpdateRequest> {
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
    constructor(data?: PartialMessage<SalesReturnsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceUpdateRequest;
    static equals(a: SalesReturnsServiceUpdateRequest | PlainMessage<SalesReturnsServiceUpdateRequest> | undefined, b: SalesReturnsServiceUpdateRequest | PlainMessage<SalesReturnsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.SalesReturnAncillaryParameters
 */
export declare class SalesReturnAncillaryParameters extends Message<SalesReturnAncillaryParameters> {
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
    constructor(data?: PartialMessage<SalesReturnAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnAncillaryParameters;
    static equals(a: SalesReturnAncillaryParameters | PlainMessage<SalesReturnAncillaryParameters> | undefined, b: SalesReturnAncillaryParameters | PlainMessage<SalesReturnAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SalesReturn
 */
export declare class SalesReturn extends Message<SalesReturn> {
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
     * @generated from field: Scailo.SALES_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: SALES_RETURN_REF_FROM;
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
     * The list of associated sales return items
     *
     * @generated from field: repeated Scailo.SalesReturnItem list = 20;
     */
    list: SalesReturnItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SalesReturn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturn;
    static equals(a: SalesReturn | PlainMessage<SalesReturn> | undefined, b: SalesReturn | PlainMessage<SalesReturn> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a sales return
 *
 * @generated from message Scailo.SalesReturnsServiceItemCreateRequest
 */
export declare class SalesReturnsServiceItemCreateRequest extends Message<SalesReturnsServiceItemCreateRequest> {
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
     * Stores the sales return ID
     *
     * @generated from field: uint64 sales_return_id = 10;
     */
    salesReturnId: bigint;
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
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    constructor(data?: PartialMessage<SalesReturnsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceItemCreateRequest;
    static equals(a: SalesReturnsServiceItemCreateRequest | PlainMessage<SalesReturnsServiceItemCreateRequest> | undefined, b: SalesReturnsServiceItemCreateRequest | PlainMessage<SalesReturnsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a sales return
 *
 * @generated from message Scailo.SalesReturnsServiceItemUpdateRequest
 */
export declare class SalesReturnsServiceItemUpdateRequest extends Message<SalesReturnsServiceItemUpdateRequest> {
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
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    constructor(data?: PartialMessage<SalesReturnsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceItemUpdateRequest;
    static equals(a: SalesReturnsServiceItemUpdateRequest | PlainMessage<SalesReturnsServiceItemUpdateRequest> | undefined, b: SalesReturnsServiceItemUpdateRequest | PlainMessage<SalesReturnsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a sales return
 *
 * @generated from message Scailo.SalesReturnItem
 */
export declare class SalesReturnItem extends Message<SalesReturnItem> {
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
     * Stores the sales return ID
     *
     * @generated from field: uint64 sales_return_id = 10;
     */
    salesReturnId: bigint;
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
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    constructor(data?: PartialMessage<SalesReturnItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnItem;
    static equals(a: SalesReturnItem | PlainMessage<SalesReturnItem> | undefined, b: SalesReturnItem | PlainMessage<SalesReturnItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales returns
 *
 * @generated from message Scailo.SalesReturnsList
 */
export declare class SalesReturnsList extends Message<SalesReturnsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesReturn list = 1;
     */
    list: SalesReturn[];
    constructor(data?: PartialMessage<SalesReturnsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsList;
    static equals(a: SalesReturnsList | PlainMessage<SalesReturnsList> | undefined, b: SalesReturnsList | PlainMessage<SalesReturnsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales return items
 *
 * @generated from message Scailo.SalesReturnsItemsList
 */
export declare class SalesReturnsItemsList extends Message<SalesReturnsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesReturnItem list = 1;
     */
    list: SalesReturnItem[];
    constructor(data?: PartialMessage<SalesReturnsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsItemsList;
    static equals(a: SalesReturnsItemsList | PlainMessage<SalesReturnsItemsList> | undefined, b: SalesReturnsItemsList | PlainMessage<SalesReturnsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.SalesReturnItemHistoryRequest
 */
export declare class SalesReturnItemHistoryRequest extends Message<SalesReturnItemHistoryRequest> {
    /**
     * Stores the sales return ID
     *
     * @generated from field: uint64 sales_return_id = 10;
     */
    salesReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesReturnItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnItemHistoryRequest;
    static equals(a: SalesReturnItemHistoryRequest | PlainMessage<SalesReturnItemHistoryRequest> | undefined, b: SalesReturnItemHistoryRequest | PlainMessage<SalesReturnItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective sales return item
 *
 * @generated from message Scailo.SalesReturnItemProspectiveInfoRequest
 */
export declare class SalesReturnItemProspectiveInfoRequest extends Message<SalesReturnItemProspectiveInfoRequest> {
    /**
     * Stores the sales return ID
     *
     * @generated from field: uint64 sales_return_id = 10;
     */
    salesReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesReturnItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnItemProspectiveInfoRequest;
    static equals(a: SalesReturnItemProspectiveInfoRequest | PlainMessage<SalesReturnItemProspectiveInfoRequest> | undefined, b: SalesReturnItemProspectiveInfoRequest | PlainMessage<SalesReturnItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.SalesReturnItemsSearchRequest
 */
export declare class SalesReturnItemsSearchRequest extends Message<SalesReturnItemsSearchRequest> {
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
     * @generated from field: Scailo.SALES_RETURN_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RETURN_ITEM_SORT_KEY;
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
     * @generated from field: Scailo.SALES_RETURN_ITEM_STATUS status = 7;
     */
    status: SALES_RETURN_ITEM_STATUS;
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
     * The ID of the sales return
     *
     * @generated from field: uint64 sales_return_id = 20;
     */
    salesReturnId: bigint;
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
     * The ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 24;
     */
    clientUomId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    /**
     *
     * @optional
     *
     * @description Filter line items by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).
     *
     * @example 1051
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 buyer_client_id = 200;
     */
    buyerClientId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items by the unique internal identifier of the sales order.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_order_id = 210;
     */
    salesOrderId: bigint;
    constructor(data?: PartialMessage<SalesReturnItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnItemsSearchRequest;
    static equals(a: SalesReturnItemsSearchRequest | PlainMessage<SalesReturnItemsSearchRequest> | undefined, b: SalesReturnItemsSearchRequest | PlainMessage<SalesReturnItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.SalesReturnsServicePaginatedItemsResponse
 */
export declare class SalesReturnsServicePaginatedItemsResponse extends Message<SalesReturnsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.SalesReturnItem payload = 4;
     */
    payload: SalesReturnItem[];
    constructor(data?: PartialMessage<SalesReturnsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginatedItemsResponse;
    static equals(a: SalesReturnsServicePaginatedItemsResponse | PlainMessage<SalesReturnsServicePaginatedItemsResponse> | undefined, b: SalesReturnsServicePaginatedItemsResponse | PlainMessage<SalesReturnsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.SalesReturnsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class SalesReturnsServiceAlreadyAddedQuantityForSourceRequest extends Message<SalesReturnsServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.SALES_RETURN_REF_FROM ref_from = 1;
     */
    refFrom: SALES_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<SalesReturnsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: SalesReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<SalesReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: SalesReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<SalesReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SalesReturnsServicePaginationReq
 */
export declare class SalesReturnsServicePaginationReq extends Message<SalesReturnsServicePaginationReq> {
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
     * @generated from field: Scailo.SALES_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RETURN_SORT_KEY;
    /**
     * The status of this sales return
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesReturnsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginationReq;
    static equals(a: SalesReturnsServicePaginationReq | PlainMessage<SalesReturnsServicePaginationReq> | undefined, b: SalesReturnsServicePaginationReq | PlainMessage<SalesReturnsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SalesReturnsServicePaginationResponse
 */
export declare class SalesReturnsServicePaginationResponse extends Message<SalesReturnsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SalesReturn payload = 4;
     */
    payload: SalesReturn[];
    constructor(data?: PartialMessage<SalesReturnsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginationResponse;
    static equals(a: SalesReturnsServicePaginationResponse | PlainMessage<SalesReturnsServicePaginationResponse> | undefined, b: SalesReturnsServicePaginationResponse | PlainMessage<SalesReturnsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SalesReturnsServiceFilterReq
 */
export declare class SalesReturnsServiceFilterReq extends Message<SalesReturnsServiceFilterReq> {
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
     * @generated from field: Scailo.SALES_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RETURN_SORT_KEY;
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
     * @generated from field: Scailo.SALES_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: SALES_RETURN_REF_FROM;
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
     * The status of the sales return bill
     *
     * @generated from field: Scailo.SALES_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: SALES_RETURN_BILLING_STATUS;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 50;
     */
    familyId: bigint;
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
    constructor(data?: PartialMessage<SalesReturnsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceFilterReq;
    static equals(a: SalesReturnsServiceFilterReq | PlainMessage<SalesReturnsServiceFilterReq> | undefined, b: SalesReturnsServiceFilterReq | PlainMessage<SalesReturnsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SalesReturnsServiceCountReq
 */
export declare class SalesReturnsServiceCountReq extends Message<SalesReturnsServiceCountReq> {
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
     * @generated from field: Scailo.SALES_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: SALES_RETURN_REF_FROM;
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
     * The status of the sales return bill
     *
     * @generated from field: Scailo.SALES_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: SALES_RETURN_BILLING_STATUS;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 50;
     */
    familyId: bigint;
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
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<SalesReturnsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceCountReq;
    static equals(a: SalesReturnsServiceCountReq | PlainMessage<SalesReturnsServiceCountReq> | undefined, b: SalesReturnsServiceCountReq | PlainMessage<SalesReturnsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SalesReturnsServiceSearchAllReq
 */
export declare class SalesReturnsServiceSearchAllReq extends Message<SalesReturnsServiceSearchAllReq> {
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
     * @generated from field: Scailo.SALES_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RETURN_SORT_KEY;
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
     * @generated from field: Scailo.SALES_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: SALES_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The status of the sales return bill
     *
     * @generated from field: Scailo.SALES_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: SALES_RETURN_BILLING_STATUS;
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
    constructor(data?: PartialMessage<SalesReturnsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReturnsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceSearchAllReq;
    static equals(a: SalesReturnsServiceSearchAllReq | PlainMessage<SalesReturnsServiceSearchAllReq> | undefined, b: SalesReturnsServiceSearchAllReq | PlainMessage<SalesReturnsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=sales_returns.scailo_pb.d.ts.map
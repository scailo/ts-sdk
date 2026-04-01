import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a goods dispatch can be added
 *
 * @generated from enum Scailo.GOODS_DISPATCH_REF_FROM
 */
export declare enum GOODS_DISPATCH_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: GOODS_DISPATCH_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    GOODS_DISPATCH_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the goods dispatch originated from a sales order
     *
     * @generated from enum value: GOODS_DISPATCH_REF_FROM_SALES_ORDER = 1;
     */
    GOODS_DISPATCH_REF_FROM_SALES_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.GOODS_DISPATCH_ITEM_SORT_KEY
 */
export declare enum GOODS_DISPATCH_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the client unit of material ID
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch ordered results by the client quantity
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * Fetch ordered results by the client family code
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14
}
/**
 *
 * Describes the applicable statuses of goods dispatch items
 *
 * @generated from enum Scailo.GOODS_DISPATCH_ITEM_STATUS
 */
export declare enum GOODS_DISPATCH_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    GOODS_DISPATCH_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the goods dispatch items must have been approved
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_STATUS_APPROVED = 1;
     */
    GOODS_DISPATCH_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the goods dispatch items must be waiting for approval
     *
     * @generated from enum value: GOODS_DISPATCH_ITEM_STATUS_UNAPPROVED = 2;
     */
    GOODS_DISPATCH_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.GOODS_DISPATCH_SORT_KEY
 */
export declare enum GOODS_DISPATCH_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_CREATED_AT = 1;
     */
    GOODS_DISPATCH_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_MODIFIED_AT = 2;
     */
    GOODS_DISPATCH_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_APPROVED_ON = 3;
     */
    GOODS_DISPATCH_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_APPROVED_BY = 4;
     */
    GOODS_DISPATCH_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOODS_DISPATCH_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_COMPLETED_ON = 6;
     */
    GOODS_DISPATCH_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_REFERENCE_ID = 10;
     */
    GOODS_DISPATCH_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    GOODS_DISPATCH_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Scailo.GOODS_DISPATCH_BILLING_STATUS
 */
export declare enum GOODS_DISPATCH_BILLING_STATUS {
    /**
     * Any billing status
     *
     * @generated from enum value: GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Goods dispatch is billed
     *
     * @generated from enum value: GOODS_DISPATCH_BILLING_STATUS_BILLED = 1;
     */
    GOODS_DISPATCH_BILLING_STATUS_BILLED = 1,
    /**
     * Goods dispatch is unbilled
     *
     * @generated from enum value: GOODS_DISPATCH_BILLING_STATUS_UNBILLED = 2;
     */
    GOODS_DISPATCH_BILLING_STATUS_UNBILLED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.GoodsDispatchesServiceCreateRequest
 */
export declare class GoodsDispatchesServiceCreateRequest extends Message<GoodsDispatchesServiceCreateRequest> {
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
     * Stores any comment that the user might add during this operation
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
     * @generated from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 12;
     */
    refFrom: GOODS_DISPATCH_REF_FROM;
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
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GoodsDispatchesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceCreateRequest;
    static equals(a: GoodsDispatchesServiceCreateRequest | PlainMessage<GoodsDispatchesServiceCreateRequest> | undefined, b: GoodsDispatchesServiceCreateRequest | PlainMessage<GoodsDispatchesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.GoodsDispatchesServiceUpdateRequest
 */
export declare class GoodsDispatchesServiceUpdateRequest extends Message<GoodsDispatchesServiceUpdateRequest> {
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
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GoodsDispatchesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceUpdateRequest;
    static equals(a: GoodsDispatchesServiceUpdateRequest | PlainMessage<GoodsDispatchesServiceUpdateRequest> | undefined, b: GoodsDispatchesServiceUpdateRequest | PlainMessage<GoodsDispatchesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.GoodsDispatchesServiceAutofillRequest
 */
export declare class GoodsDispatchesServiceAutofillRequest extends Message<GoodsDispatchesServiceAutofillRequest> {
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
     * Stores if the inventory needs to be split into unit quantities
     *
     * @generated from field: bool split_into_unit_quantity = 10;
     */
    splitIntoUnitQuantity: boolean;
    constructor(data?: PartialMessage<GoodsDispatchesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceAutofillRequest;
    static equals(a: GoodsDispatchesServiceAutofillRequest | PlainMessage<GoodsDispatchesServiceAutofillRequest> | undefined, b: GoodsDispatchesServiceAutofillRequest | PlainMessage<GoodsDispatchesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.GoodsDispatchAncillaryParameters
 */
export declare class GoodsDispatchAncillaryParameters extends Message<GoodsDispatchAncillaryParameters> {
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
    constructor(data?: PartialMessage<GoodsDispatchAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchAncillaryParameters;
    static equals(a: GoodsDispatchAncillaryParameters | PlainMessage<GoodsDispatchAncillaryParameters> | undefined, b: GoodsDispatchAncillaryParameters | PlainMessage<GoodsDispatchAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.GoodsDispatch
 */
export declare class GoodsDispatch extends Message<GoodsDispatch> {
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
     * @generated from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 12;
     */
    refFrom: GOODS_DISPATCH_REF_FROM;
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
     * The list of associated goods dispatch items
     *
     * @generated from field: repeated Scailo.GoodsDispatchItem list = 20;
     */
    list: GoodsDispatchItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<GoodsDispatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatch;
    static equals(a: GoodsDispatch | PlainMessage<GoodsDispatch> | undefined, b: GoodsDispatch | PlainMessage<GoodsDispatch> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a goods dispatch
 *
 * @generated from message Scailo.GoodsDispatchesServiceItemCreateRequest
 */
export declare class GoodsDispatchesServiceItemCreateRequest extends Message<GoodsDispatchesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: uint64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
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
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<GoodsDispatchesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceItemCreateRequest;
    static equals(a: GoodsDispatchesServiceItemCreateRequest | PlainMessage<GoodsDispatchesServiceItemCreateRequest> | undefined, b: GoodsDispatchesServiceItemCreateRequest | PlainMessage<GoodsDispatchesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an individual item as part of multiple item addition to a goods dispatch
 *
 * @generated from message Scailo.GoodsDispatchesServiceMultipleItemsSingleton
 */
export declare class GoodsDispatchesServiceMultipleItemsSingleton extends Message<GoodsDispatchesServiceMultipleItemsSingleton> {
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
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<GoodsDispatchesServiceMultipleItemsSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceMultipleItemsSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceMultipleItemsSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceMultipleItemsSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceMultipleItemsSingleton;
    static equals(a: GoodsDispatchesServiceMultipleItemsSingleton | PlainMessage<GoodsDispatchesServiceMultipleItemsSingleton> | undefined, b: GoodsDispatchesServiceMultipleItemsSingleton | PlainMessage<GoodsDispatchesServiceMultipleItemsSingleton> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add multiple items to a goods dispatch
 *
 * @generated from message Scailo.GoodsDispatchesServiceMultipleItemsCreateRequest
 */
export declare class GoodsDispatchesServiceMultipleItemsCreateRequest extends Message<GoodsDispatchesServiceMultipleItemsCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: uint64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
    /**
     * List of items
     *
     * @generated from field: repeated Scailo.GoodsDispatchesServiceMultipleItemsSingleton list = 11;
     */
    list: GoodsDispatchesServiceMultipleItemsSingleton[];
    constructor(data?: PartialMessage<GoodsDispatchesServiceMultipleItemsCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceMultipleItemsCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceMultipleItemsCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceMultipleItemsCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceMultipleItemsCreateRequest;
    static equals(a: GoodsDispatchesServiceMultipleItemsCreateRequest | PlainMessage<GoodsDispatchesServiceMultipleItemsCreateRequest> | undefined, b: GoodsDispatchesServiceMultipleItemsCreateRequest | PlainMessage<GoodsDispatchesServiceMultipleItemsCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a goods dispatch
 *
 * @generated from message Scailo.GoodsDispatchesServiceItemUpdateRequest
 */
export declare class GoodsDispatchesServiceItemUpdateRequest extends Message<GoodsDispatchesServiceItemUpdateRequest> {
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
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<GoodsDispatchesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceItemUpdateRequest;
    static equals(a: GoodsDispatchesServiceItemUpdateRequest | PlainMessage<GoodsDispatchesServiceItemUpdateRequest> | undefined, b: GoodsDispatchesServiceItemUpdateRequest | PlainMessage<GoodsDispatchesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a goods dispatch
 *
 * @generated from message Scailo.GoodsDispatchItem
 */
export declare class GoodsDispatchItem extends Message<GoodsDispatchItem> {
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
     * @description The approval state of the record
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
     * Stores the goods dispatch ID
     *
     * @generated from field: uint64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
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
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<GoodsDispatchItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchItem;
    static equals(a: GoodsDispatchItem | PlainMessage<GoodsDispatchItem> | undefined, b: GoodsDispatchItem | PlainMessage<GoodsDispatchItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goods dispatches
 *
 * @generated from message Scailo.GoodsDispatchesList
 */
export declare class GoodsDispatchesList extends Message<GoodsDispatchesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GoodsDispatch list = 1;
     */
    list: GoodsDispatch[];
    constructor(data?: PartialMessage<GoodsDispatchesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesList;
    static equals(a: GoodsDispatchesList | PlainMessage<GoodsDispatchesList> | undefined, b: GoodsDispatchesList | PlainMessage<GoodsDispatchesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goods dispatch items
 *
 * @generated from message Scailo.GoodsDispatchesItemsList
 */
export declare class GoodsDispatchesItemsList extends Message<GoodsDispatchesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GoodsDispatchItem list = 1;
     */
    list: GoodsDispatchItem[];
    constructor(data?: PartialMessage<GoodsDispatchesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesItemsList;
    static equals(a: GoodsDispatchesItemsList | PlainMessage<GoodsDispatchesItemsList> | undefined, b: GoodsDispatchesItemsList | PlainMessage<GoodsDispatchesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.GoodsDispatchItemHistoryRequest
 */
export declare class GoodsDispatchItemHistoryRequest extends Message<GoodsDispatchItemHistoryRequest> {
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: uint64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<GoodsDispatchItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchItemHistoryRequest;
    static equals(a: GoodsDispatchItemHistoryRequest | PlainMessage<GoodsDispatchItemHistoryRequest> | undefined, b: GoodsDispatchItemHistoryRequest | PlainMessage<GoodsDispatchItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective goods dispatch item
 *
 * @generated from message Scailo.GoodsDispatchItemProspectiveInfoRequest
 */
export declare class GoodsDispatchItemProspectiveInfoRequest extends Message<GoodsDispatchItemProspectiveInfoRequest> {
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: uint64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<GoodsDispatchItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchItemProspectiveInfoRequest;
    static equals(a: GoodsDispatchItemProspectiveInfoRequest | PlainMessage<GoodsDispatchItemProspectiveInfoRequest> | undefined, b: GoodsDispatchItemProspectiveInfoRequest | PlainMessage<GoodsDispatchItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.GoodsDispatchItemsSearchRequest
 */
export declare class GoodsDispatchItemsSearchRequest extends Message<GoodsDispatchItemsSearchRequest> {
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
     * @generated from field: Scailo.GOODS_DISPATCH_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_DISPATCH_ITEM_SORT_KEY;
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
     * @generated from field: Scailo.GOODS_DISPATCH_ITEM_STATUS status = 7;
     */
    status: GOODS_DISPATCH_ITEM_STATUS;
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
     * The ID of the goods dispatch
     *
     * @generated from field: uint64 goods_dispatch_id = 20;
     */
    goodsDispatchId: bigint;
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
     * Stores the family code as given by the client
     *
     * @generated from field: string client_family_code = 26;
     */
    clientFamilyCode: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<GoodsDispatchItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchItemsSearchRequest;
    static equals(a: GoodsDispatchItemsSearchRequest | PlainMessage<GoodsDispatchItemsSearchRequest> | undefined, b: GoodsDispatchItemsSearchRequest | PlainMessage<GoodsDispatchItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.GoodsDispatchesServicePaginatedItemsResponse
 */
export declare class GoodsDispatchesServicePaginatedItemsResponse extends Message<GoodsDispatchesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.GoodsDispatchItem payload = 4;
     */
    payload: GoodsDispatchItem[];
    constructor(data?: PartialMessage<GoodsDispatchesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginatedItemsResponse;
    static equals(a: GoodsDispatchesServicePaginatedItemsResponse | PlainMessage<GoodsDispatchesServicePaginatedItemsResponse> | undefined, b: GoodsDispatchesServicePaginatedItemsResponse | PlainMessage<GoodsDispatchesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest extends Message<GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 1;
     */
    refFrom: GOODS_DISPATCH_REF_FROM;
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
    constructor(data?: PartialMessage<GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.GoodsDispatchesServicePaginationReq
 */
export declare class GoodsDispatchesServicePaginationReq extends Message<GoodsDispatchesServicePaginationReq> {
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
     * @generated from field: Scailo.GOODS_DISPATCH_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_DISPATCH_SORT_KEY;
    /**
     * The status of this goods dispatch
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<GoodsDispatchesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginationReq;
    static equals(a: GoodsDispatchesServicePaginationReq | PlainMessage<GoodsDispatchesServicePaginationReq> | undefined, b: GoodsDispatchesServicePaginationReq | PlainMessage<GoodsDispatchesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.GoodsDispatchesServicePaginationResponse
 */
export declare class GoodsDispatchesServicePaginationResponse extends Message<GoodsDispatchesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.GoodsDispatch payload = 4;
     */
    payload: GoodsDispatch[];
    constructor(data?: PartialMessage<GoodsDispatchesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginationResponse;
    static equals(a: GoodsDispatchesServicePaginationResponse | PlainMessage<GoodsDispatchesServicePaginationResponse> | undefined, b: GoodsDispatchesServicePaginationResponse | PlainMessage<GoodsDispatchesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.GoodsDispatchesServiceFilterReq
 */
export declare class GoodsDispatchesServiceFilterReq extends Message<GoodsDispatchesServiceFilterReq> {
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
     * @generated from field: Scailo.GOODS_DISPATCH_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_DISPATCH_SORT_KEY;
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
     * @generated from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;
     */
    refFrom: GOODS_DISPATCH_REF_FROM;
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
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 30;
     */
    familyId: bigint;
    /**
     * The status of the goods dispatch bill
     *
     * @generated from field: Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;
     */
    billingStatus: GOODS_DISPATCH_BILLING_STATUS;
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
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<GoodsDispatchesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceFilterReq;
    static equals(a: GoodsDispatchesServiceFilterReq | PlainMessage<GoodsDispatchesServiceFilterReq> | undefined, b: GoodsDispatchesServiceFilterReq | PlainMessage<GoodsDispatchesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.GoodsDispatchesServiceCountReq
 */
export declare class GoodsDispatchesServiceCountReq extends Message<GoodsDispatchesServiceCountReq> {
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
     * @generated from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;
     */
    refFrom: GOODS_DISPATCH_REF_FROM;
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
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 30;
     */
    familyId: bigint;
    /**
     * The status of the goods dispatch bill
     *
     * @generated from field: Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;
     */
    billingStatus: GOODS_DISPATCH_BILLING_STATUS;
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
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<GoodsDispatchesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceCountReq;
    static equals(a: GoodsDispatchesServiceCountReq | PlainMessage<GoodsDispatchesServiceCountReq> | undefined, b: GoodsDispatchesServiceCountReq | PlainMessage<GoodsDispatchesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.GoodsDispatchesServiceSearchAllReq
 */
export declare class GoodsDispatchesServiceSearchAllReq extends Message<GoodsDispatchesServiceSearchAllReq> {
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
     * @generated from field: Scailo.GOODS_DISPATCH_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_DISPATCH_SORT_KEY;
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
     * @generated from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;
     */
    refFrom: GOODS_DISPATCH_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The status of the goods dispatch bill
     *
     * @generated from field: Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;
     */
    billingStatus: GOODS_DISPATCH_BILLING_STATUS;
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
    constructor(data?: PartialMessage<GoodsDispatchesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoodsDispatchesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceSearchAllReq;
    static equals(a: GoodsDispatchesServiceSearchAllReq | PlainMessage<GoodsDispatchesServiceSearchAllReq> | undefined, b: GoodsDispatchesServiceSearchAllReq | PlainMessage<GoodsDispatchesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=goods_dispatches.scailo_pb.d.ts.map
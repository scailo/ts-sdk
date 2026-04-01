import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.REPLACEABLE_INDENT_SORT_KEY
 */
export declare enum REPLACEABLE_INDENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_CREATED_AT = 1;
     */
    REPLACEABLE_INDENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_MODIFIED_AT = 2;
     */
    REPLACEABLE_INDENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_APPROVED_ON = 3;
     */
    REPLACEABLE_INDENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_APPROVED_BY = 4;
     */
    REPLACEABLE_INDENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    REPLACEABLE_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_COMPLETED_ON = 6;
     */
    REPLACEABLE_INDENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_REFERENCE_ID = 10;
     */
    REPLACEABLE_INDENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    REPLACEABLE_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_LOCATION_ID = 12;
     */
    REPLACEABLE_INDENT_SORT_KEY_LOCATION_ID = 12
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.REPLACEABLE_INDENT_ITEM_SORT_KEY
 */
export declare enum REPLACEABLE_INDENT_ITEM_SORT_KEY {
    /**
     * Fetch invoiced results by id
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    REPLACEABLE_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch invoiced results by the creation timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    REPLACEABLE_INDENT_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch invoiced results by the modified timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    REPLACEABLE_INDENT_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch invoiced results by the approved on timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    REPLACEABLE_INDENT_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch invoiced results by the approved by field
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    REPLACEABLE_INDENT_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch invoiced results by the approver's role ID
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    REPLACEABLE_INDENT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch invoiced results by the family ID
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    REPLACEABLE_INDENT_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch invoiced results by the internal quantity
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    REPLACEABLE_INDENT_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11
}
/**
 *
 * Describes the applicable statuses of replaceable indent items
 *
 * @generated from enum Scailo.REPLACEABLE_INDENT_ITEM_STATUS
 */
export declare enum REPLACEABLE_INDENT_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    REPLACEABLE_INDENT_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the replaceable indent items must have been approved
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_STATUS_APPROVED = 1;
     */
    REPLACEABLE_INDENT_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the replaceable indent items must be waiting for approval
     *
     * @generated from enum value: REPLACEABLE_INDENT_ITEM_STATUS_UNAPPROVED = 2;
     */
    REPLACEABLE_INDENT_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ReplaceableIndentsServiceCreateRequest
 */
export declare class ReplaceableIndentsServiceCreateRequest extends Message<ReplaceableIndentsServiceCreateRequest> {
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
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 12;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 13;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 14;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 15;
     */
    itemHash: string;
    /**
     * The description of the replaceable indent
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ReplaceableIndentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceCreateRequest;
    static equals(a: ReplaceableIndentsServiceCreateRequest | PlainMessage<ReplaceableIndentsServiceCreateRequest> | undefined, b: ReplaceableIndentsServiceCreateRequest | PlainMessage<ReplaceableIndentsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ReplaceableIndentsServiceUpdateRequest
 */
export declare class ReplaceableIndentsServiceUpdateRequest extends Message<ReplaceableIndentsServiceUpdateRequest> {
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
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 13;
     */
    supervisor: string;
    /**
     * The description of the replaceable indent
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ReplaceableIndentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceUpdateRequest;
    static equals(a: ReplaceableIndentsServiceUpdateRequest | PlainMessage<ReplaceableIndentsServiceUpdateRequest> | undefined, b: ReplaceableIndentsServiceUpdateRequest | PlainMessage<ReplaceableIndentsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.ReplaceableIndentsServiceAutofillRequest
 */
export declare class ReplaceableIndentsServiceAutofillRequest extends Message<ReplaceableIndentsServiceAutofillRequest> {
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
     * Denotes if all the equation dependencies (if applicable) should also be automatically added to the replaceable indent
     *
     * @generated from field: bool populate_using_equation_dependencies = 3;
     */
    populateUsingEquationDependencies: boolean;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceAutofillRequest;
    static equals(a: ReplaceableIndentsServiceAutofillRequest | PlainMessage<ReplaceableIndentsServiceAutofillRequest> | undefined, b: ReplaceableIndentsServiceAutofillRequest | PlainMessage<ReplaceableIndentsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ReplaceableIndent
 */
export declare class ReplaceableIndent extends Message<ReplaceableIndent> {
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
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 12;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 13;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 14;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 15;
     */
    itemHash: string;
    /**
     * The description of the replaceable indent
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of associated replaceable indent items
     *
     * @generated from field: repeated Scailo.ReplaceableIndentItem list = 30;
     */
    list: ReplaceableIndentItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<ReplaceableIndent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndent;
    static equals(a: ReplaceableIndent | PlainMessage<ReplaceableIndent> | undefined, b: ReplaceableIndent | PlainMessage<ReplaceableIndent> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a replaceable indent
 *
 * @generated from message Scailo.ReplaceableIndentsServiceItemCreateRequest
 */
export declare class ReplaceableIndentsServiceItemCreateRequest extends Message<ReplaceableIndentsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the replaceable indent ID
     *
     * @generated from field: uint64 replaceable_indent_id = 10;
     */
    replaceableIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity required
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceItemCreateRequest;
    static equals(a: ReplaceableIndentsServiceItemCreateRequest | PlainMessage<ReplaceableIndentsServiceItemCreateRequest> | undefined, b: ReplaceableIndentsServiceItemCreateRequest | PlainMessage<ReplaceableIndentsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a replaceable indent
 *
 * @generated from message Scailo.ReplaceableIndentsServiceItemUpdateRequest
 */
export declare class ReplaceableIndentsServiceItemUpdateRequest extends Message<ReplaceableIndentsServiceItemUpdateRequest> {
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
     * The quantity required
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceItemUpdateRequest;
    static equals(a: ReplaceableIndentsServiceItemUpdateRequest | PlainMessage<ReplaceableIndentsServiceItemUpdateRequest> | undefined, b: ReplaceableIndentsServiceItemUpdateRequest | PlainMessage<ReplaceableIndentsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a replaceable indent
 *
 * @generated from message Scailo.ReplaceableIndentItem
 */
export declare class ReplaceableIndentItem extends Message<ReplaceableIndentItem> {
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
     * Stores the replaceable indent ID
     *
     * @generated from field: uint64 replaceable_indent_id = 10;
     */
    replaceableIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity required
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentItem;
    static equals(a: ReplaceableIndentItem | PlainMessage<ReplaceableIndentItem> | undefined, b: ReplaceableIndentItem | PlainMessage<ReplaceableIndentItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of replaceable indents
 *
 * @generated from message Scailo.ReplaceableIndentsList
 */
export declare class ReplaceableIndentsList extends Message<ReplaceableIndentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ReplaceableIndent list = 1;
     */
    list: ReplaceableIndent[];
    constructor(data?: PartialMessage<ReplaceableIndentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsList;
    static equals(a: ReplaceableIndentsList | PlainMessage<ReplaceableIndentsList> | undefined, b: ReplaceableIndentsList | PlainMessage<ReplaceableIndentsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of replaceable indent items
 *
 * @generated from message Scailo.ReplaceableIndentsItemsList
 */
export declare class ReplaceableIndentsItemsList extends Message<ReplaceableIndentsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ReplaceableIndentItem list = 1;
     */
    list: ReplaceableIndentItem[];
    constructor(data?: PartialMessage<ReplaceableIndentsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsItemsList;
    static equals(a: ReplaceableIndentsItemsList | PlainMessage<ReplaceableIndentsItemsList> | undefined, b: ReplaceableIndentsItemsList | PlainMessage<ReplaceableIndentsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.ReplaceableIndentItemHistoryRequest
 */
export declare class ReplaceableIndentItemHistoryRequest extends Message<ReplaceableIndentItemHistoryRequest> {
    /**
     * Stores the replaceable indent ID
     *
     * @generated from field: uint64 replaceable_indent_id = 10;
     */
    replaceableIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentItemHistoryRequest;
    static equals(a: ReplaceableIndentItemHistoryRequest | PlainMessage<ReplaceableIndentItemHistoryRequest> | undefined, b: ReplaceableIndentItemHistoryRequest | PlainMessage<ReplaceableIndentItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective replaceable indent item
 *
 * @generated from message Scailo.ReplaceableIndentItemProspectiveInfoRequest
 */
export declare class ReplaceableIndentItemProspectiveInfoRequest extends Message<ReplaceableIndentItemProspectiveInfoRequest> {
    /**
     * Stores the replaceable indent ID
     *
     * @generated from field: uint64 replaceable_indent_id = 10;
     */
    replaceableIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentItemProspectiveInfoRequest;
    static equals(a: ReplaceableIndentItemProspectiveInfoRequest | PlainMessage<ReplaceableIndentItemProspectiveInfoRequest> | undefined, b: ReplaceableIndentItemProspectiveInfoRequest | PlainMessage<ReplaceableIndentItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ReplaceableIndentsServicePaginationReq
 */
export declare class ReplaceableIndentsServicePaginationReq extends Message<ReplaceableIndentsServicePaginationReq> {
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
     * @generated from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
    /**
     * The status of this replaceable indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ReplaceableIndentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginationReq;
    static equals(a: ReplaceableIndentsServicePaginationReq | PlainMessage<ReplaceableIndentsServicePaginationReq> | undefined, b: ReplaceableIndentsServicePaginationReq | PlainMessage<ReplaceableIndentsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ReplaceableIndentsServicePaginationResponse
 */
export declare class ReplaceableIndentsServicePaginationResponse extends Message<ReplaceableIndentsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ReplaceableIndent payload = 4;
     */
    payload: ReplaceableIndent[];
    constructor(data?: PartialMessage<ReplaceableIndentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginationResponse;
    static equals(a: ReplaceableIndentsServicePaginationResponse | PlainMessage<ReplaceableIndentsServicePaginationResponse> | undefined, b: ReplaceableIndentsServicePaginationResponse | PlainMessage<ReplaceableIndentsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ReplaceableIndentsServiceFilterReq
 */
export declare class ReplaceableIndentsServiceFilterReq extends Message<ReplaceableIndentsServiceFilterReq> {
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
     * @generated from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
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
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 23;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 24;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 25;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 26;
     */
    itemHash: string;
    /**
     * The ID of the constituent family that is part of a replaceable indent
     *
     * @generated from field: uint64 constituent_family_id = 40;
     */
    constituentFamilyId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ReplaceableIndentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceFilterReq;
    static equals(a: ReplaceableIndentsServiceFilterReq | PlainMessage<ReplaceableIndentsServiceFilterReq> | undefined, b: ReplaceableIndentsServiceFilterReq | PlainMessage<ReplaceableIndentsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ReplaceableIndentsServiceCountReq
 */
export declare class ReplaceableIndentsServiceCountReq extends Message<ReplaceableIndentsServiceCountReq> {
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
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 23;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 24;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 25;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 26;
     */
    itemHash: string;
    /**
     * The ID of the constituent family that is part of a replaceable indent
     *
     * @generated from field: uint64 constituent_family_id = 40;
     */
    constituentFamilyId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ReplaceableIndentsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceCountReq;
    static equals(a: ReplaceableIndentsServiceCountReq | PlainMessage<ReplaceableIndentsServiceCountReq> | undefined, b: ReplaceableIndentsServiceCountReq | PlainMessage<ReplaceableIndentsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ReplaceableIndentsServiceSearchAllReq
 */
export declare class ReplaceableIndentsServiceSearchAllReq extends Message<ReplaceableIndentsServiceSearchAllReq> {
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
     * @generated from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
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
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 23;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 24;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 25;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 26;
     */
    itemHash: string;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceSearchAllReq;
    static equals(a: ReplaceableIndentsServiceSearchAllReq | PlainMessage<ReplaceableIndentsServiceSearchAllReq> | undefined, b: ReplaceableIndentsServiceSearchAllReq | PlainMessage<ReplaceableIndentsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.ReplaceableIndentItemsSearchRequest
 */
export declare class ReplaceableIndentItemsSearchRequest extends Message<ReplaceableIndentItemsSearchRequest> {
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
     * @generated from field: Scailo.REPLACEABLE_INDENT_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_ITEM_SORT_KEY;
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
     * @generated from field: Scailo.REPLACEABLE_INDENT_ITEM_STATUS status = 7;
     */
    status: REPLACEABLE_INDENT_ITEM_STATUS;
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
     * The ID of the replaceable indent
     *
     * @generated from field: uint64 replaceable_indent_id = 20;
     */
    replaceableIndentId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<ReplaceableIndentItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentItemsSearchRequest;
    static equals(a: ReplaceableIndentItemsSearchRequest | PlainMessage<ReplaceableIndentItemsSearchRequest> | undefined, b: ReplaceableIndentItemsSearchRequest | PlainMessage<ReplaceableIndentItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.ReplaceableIndentsServicePaginatedItemsResponse
 */
export declare class ReplaceableIndentsServicePaginatedItemsResponse extends Message<ReplaceableIndentsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.ReplaceableIndentItem payload = 4;
     */
    payload: ReplaceableIndentItem[];
    constructor(data?: PartialMessage<ReplaceableIndentsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginatedItemsResponse;
    static equals(a: ReplaceableIndentsServicePaginatedItemsResponse | PlainMessage<ReplaceableIndentsServicePaginatedItemsResponse> | undefined, b: ReplaceableIndentsServicePaginatedItemsResponse | PlainMessage<ReplaceableIndentsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the issued statistics of the replaceable indent
 *
 * @generated from message Scailo.ReplaceableIndentIssuedStatistics
 */
export declare class ReplaceableIndentIssuedStatistics extends Message<ReplaceableIndentIssuedStatistics> {
    /**
     * Stores the ID of the family
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     * Stores the indented quantity
     *
     * @generated from field: uint64 indented_quantity = 2;
     */
    indentedQuantity: bigint;
    /**
     * Stores the unapproved issued quantity
     *
     * @generated from field: uint64 unapproved_issued_quantity = 3;
     */
    unapprovedIssuedQuantity: bigint;
    /**
     * Stores the approved issued quantity
     *
     * @generated from field: uint64 approved_issued_quantity = 4;
     */
    approvedIssuedQuantity: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentIssuedStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentIssuedStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentIssuedStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentIssuedStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentIssuedStatistics;
    static equals(a: ReplaceableIndentIssuedStatistics | PlainMessage<ReplaceableIndentIssuedStatistics> | undefined, b: ReplaceableIndentIssuedStatistics | PlainMessage<ReplaceableIndentIssuedStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of issued statistics of the replaceable indent
 *
 * @generated from message Scailo.ReplaceableIndentIssuedStatisticsList
 */
export declare class ReplaceableIndentIssuedStatisticsList extends Message<ReplaceableIndentIssuedStatisticsList> {
    /**
     * @generated from field: repeated Scailo.ReplaceableIndentIssuedStatistics list = 1;
     */
    list: ReplaceableIndentIssuedStatistics[];
    constructor(data?: PartialMessage<ReplaceableIndentIssuedStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReplaceableIndentIssuedStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentIssuedStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentIssuedStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentIssuedStatisticsList;
    static equals(a: ReplaceableIndentIssuedStatisticsList | PlainMessage<ReplaceableIndentIssuedStatisticsList> | undefined, b: ReplaceableIndentIssuedStatisticsList | PlainMessage<ReplaceableIndentIssuedStatisticsList> | undefined): boolean;
}
//# sourceMappingURL=replaceable_indents.scailo_pb.d.ts.map
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible production references from which a production indent can be added
 *
 * @generated from enum Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR
 */
export declare enum PRODUCTION_INDENT_PRODUCTION_REF_FOR {
    /**
     * Used only in filters
     *
     * @generated from enum value: PRODUCTION_INDENT_PRODUCTION_REF_FOR_ANY_UNSPECIFIED = 0;
     */
    PRODUCTION_INDENT_PRODUCTION_REF_FOR_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the production indent is not associated to any production plan
     *
     * @generated from enum value: PRODUCTION_INDENT_PRODUCTION_REF_FOR_NONE = 1;
     */
    PRODUCTION_INDENT_PRODUCTION_REF_FOR_NONE = 1,
    /**
     * Denotes that the production indent is associated to a production plan
     *
     * @generated from enum value: PRODUCTION_INDENT_PRODUCTION_REF_FOR_PRODUCTION_PLAN = 2;
     */
    PRODUCTION_INDENT_PRODUCTION_REF_FOR_PRODUCTION_PLAN = 2
}
/**
 *
 * Stores all the possible indent references from which a production indent can be added
 *
 * @generated from enum Scailo.PRODUCTION_INDENT_INDENT_REF_FOR
 */
export declare enum PRODUCTION_INDENT_INDENT_REF_FOR {
    /**
     * Used only in filters
     *
     * @generated from enum value: PRODUCTION_INDENT_INDENT_REF_FOR_ANY_UNSPECIFIED = 0;
     */
    PRODUCTION_INDENT_INDENT_REF_FOR_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the production indent is not associated to any indent
     *
     * @generated from enum value: PRODUCTION_INDENT_INDENT_REF_FOR_NONE = 1;
     */
    PRODUCTION_INDENT_INDENT_REF_FOR_NONE = 1,
    /**
     * Denotes that the indent is created on the basis of a family
     *
     * @generated from enum value: PRODUCTION_INDENT_INDENT_REF_FOR_FAMILY = 2;
     */
    PRODUCTION_INDENT_INDENT_REF_FOR_FAMILY = 2,
    /**
     * Denotes that the indent is created on the basis of a work order
     *
     * @generated from enum value: PRODUCTION_INDENT_INDENT_REF_FOR_WORK_ORDER = 3;
     */
    PRODUCTION_INDENT_INDENT_REF_FOR_WORK_ORDER = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PRODUCTION_INDENT_SORT_KEY
 */
export declare enum PRODUCTION_INDENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_CREATED_AT = 1;
     */
    PRODUCTION_INDENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_MODIFIED_AT = 2;
     */
    PRODUCTION_INDENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_APPROVED_ON = 3;
     */
    PRODUCTION_INDENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_APPROVED_BY = 4;
     */
    PRODUCTION_INDENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PRODUCTION_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_COMPLETED_ON = 6;
     */
    PRODUCTION_INDENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_REFERENCE_ID = 10;
     */
    PRODUCTION_INDENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PRODUCTION_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: PRODUCTION_INDENT_SORT_KEY_LOCATION_ID = 12;
     */
    PRODUCTION_INDENT_SORT_KEY_LOCATION_ID = 12
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PRODUCTION_INDENT_ITEM_SORT_KEY
 */
export declare enum PRODUCTION_INDENT_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PRODUCTION_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    PRODUCTION_INDENT_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    PRODUCTION_INDENT_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    PRODUCTION_INDENT_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    PRODUCTION_INDENT_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PRODUCTION_INDENT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    PRODUCTION_INDENT_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the internal quantity
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    PRODUCTION_INDENT_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11
}
/**
 *
 * Describes the applicable statuses of production indent items
 *
 * @generated from enum Scailo.PRODUCTION_INDENT_ITEM_STATUS
 */
export declare enum PRODUCTION_INDENT_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    PRODUCTION_INDENT_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the production indent items must have been approved
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_STATUS_APPROVED = 1;
     */
    PRODUCTION_INDENT_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the production indent items must be waiting for approval
     *
     * @generated from enum value: PRODUCTION_INDENT_ITEM_STATUS_UNAPPROVED = 2;
     */
    PRODUCTION_INDENT_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ProductionIndentsServiceCreateRequest
 */
export declare class ProductionIndentsServiceCreateRequest extends Message<ProductionIndentsServiceCreateRequest> {
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
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * Stores if the indent is associated to a production plan
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR production_ref_for = 16;
     */
    productionRefFor: PRODUCTION_INDENT_PRODUCTION_REF_FOR;
    /**
     * Stores the production plan ID if production_ref_for is production-plan
     *
     * @generated from field: uint64 production_ref_id = 17;
     */
    productionRefId: bigint;
    /**
     * Stores if the indent should be created on the basis of a work order or a family
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_INDENT_REF_FOR indent_ref_for = 18;
     */
    indentRefFor: PRODUCTION_INDENT_INDENT_REF_FOR;
    /**
     * Stores the ID of the associated family or work order
     *
     * @generated from field: uint64 indent_ref_id = 19;
     */
    indentRefId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProductionIndentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServiceCreateRequest;
    static equals(a: ProductionIndentsServiceCreateRequest | PlainMessage<ProductionIndentsServiceCreateRequest> | undefined, b: ProductionIndentsServiceCreateRequest | PlainMessage<ProductionIndentsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ProductionIndentsServiceUpdateRequest
 */
export declare class ProductionIndentsServiceUpdateRequest extends Message<ProductionIndentsServiceUpdateRequest> {
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
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProductionIndentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServiceUpdateRequest;
    static equals(a: ProductionIndentsServiceUpdateRequest | PlainMessage<ProductionIndentsServiceUpdateRequest> | undefined, b: ProductionIndentsServiceUpdateRequest | PlainMessage<ProductionIndentsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.ProductionIndentsServiceAutofillRequest
 */
export declare class ProductionIndentsServiceAutofillRequest extends Message<ProductionIndentsServiceAutofillRequest> {
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
     * Denotes if all the equation dependencies (if applicable) should also be automatically added to the production indent
     *
     * @generated from field: bool populate_using_equation_dependencies = 3;
     */
    populateUsingEquationDependencies: boolean;
    constructor(data?: PartialMessage<ProductionIndentsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServiceAutofillRequest;
    static equals(a: ProductionIndentsServiceAutofillRequest | PlainMessage<ProductionIndentsServiceAutofillRequest> | undefined, b: ProductionIndentsServiceAutofillRequest | PlainMessage<ProductionIndentsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ProductionIndent
 */
export declare class ProductionIndent extends Message<ProductionIndent> {
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
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * Stores if the indent is associated to a production plan
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR production_ref_for = 16;
     */
    productionRefFor: PRODUCTION_INDENT_PRODUCTION_REF_FOR;
    /**
     * Stores the production plan ID if production_ref_for is production-plan
     *
     * @generated from field: uint64 production_ref_id = 17;
     */
    productionRefId: bigint;
    /**
     * Stores if the indent should be created on the basis of a work order or a family
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_INDENT_REF_FOR indent_ref_for = 18;
     */
    indentRefFor: PRODUCTION_INDENT_INDENT_REF_FOR;
    /**
     * Stores the ID of the associated family or work order
     *
     * @generated from field: uint64 indent_ref_id = 19;
     */
    indentRefId: bigint;
    /**
     * The list of associated production indent items
     *
     * @generated from field: repeated Scailo.ProductionIndentItem list = 30;
     */
    list: ProductionIndentItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<ProductionIndent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndent;
    static equals(a: ProductionIndent | PlainMessage<ProductionIndent> | undefined, b: ProductionIndent | PlainMessage<ProductionIndent> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a production indent
 *
 * @generated from message Scailo.ProductionIndentsServiceItemCreateRequest
 */
export declare class ProductionIndentsServiceItemCreateRequest extends Message<ProductionIndentsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the production indent ID
     *
     * @generated from field: uint64 production_indent_id = 10;
     */
    productionIndentId: bigint;
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
    constructor(data?: PartialMessage<ProductionIndentsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServiceItemCreateRequest;
    static equals(a: ProductionIndentsServiceItemCreateRequest | PlainMessage<ProductionIndentsServiceItemCreateRequest> | undefined, b: ProductionIndentsServiceItemCreateRequest | PlainMessage<ProductionIndentsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a production indent
 *
 * @generated from message Scailo.ProductionIndentsServiceItemUpdateRequest
 */
export declare class ProductionIndentsServiceItemUpdateRequest extends Message<ProductionIndentsServiceItemUpdateRequest> {
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
    constructor(data?: PartialMessage<ProductionIndentsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServiceItemUpdateRequest;
    static equals(a: ProductionIndentsServiceItemUpdateRequest | PlainMessage<ProductionIndentsServiceItemUpdateRequest> | undefined, b: ProductionIndentsServiceItemUpdateRequest | PlainMessage<ProductionIndentsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a production indent
 *
 * @generated from message Scailo.ProductionIndentItem
 */
export declare class ProductionIndentItem extends Message<ProductionIndentItem> {
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
     * Stores the production indent ID
     *
     * @generated from field: uint64 production_indent_id = 10;
     */
    productionIndentId: bigint;
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
    constructor(data?: PartialMessage<ProductionIndentItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentItem;
    static equals(a: ProductionIndentItem | PlainMessage<ProductionIndentItem> | undefined, b: ProductionIndentItem | PlainMessage<ProductionIndentItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of production indents
 *
 * @generated from message Scailo.ProductionIndentsList
 */
export declare class ProductionIndentsList extends Message<ProductionIndentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ProductionIndent list = 1;
     */
    list: ProductionIndent[];
    constructor(data?: PartialMessage<ProductionIndentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsList;
    static equals(a: ProductionIndentsList | PlainMessage<ProductionIndentsList> | undefined, b: ProductionIndentsList | PlainMessage<ProductionIndentsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of production indent items
 *
 * @generated from message Scailo.ProductionIndentsItemsList
 */
export declare class ProductionIndentsItemsList extends Message<ProductionIndentsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ProductionIndentItem list = 1;
     */
    list: ProductionIndentItem[];
    constructor(data?: PartialMessage<ProductionIndentsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsItemsList;
    static equals(a: ProductionIndentsItemsList | PlainMessage<ProductionIndentsItemsList> | undefined, b: ProductionIndentsItemsList | PlainMessage<ProductionIndentsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.ProductionIndentItemHistoryRequest
 */
export declare class ProductionIndentItemHistoryRequest extends Message<ProductionIndentItemHistoryRequest> {
    /**
     * Stores the production indent ID
     *
     * @generated from field: uint64 production_indent_id = 10;
     */
    productionIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ProductionIndentItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentItemHistoryRequest;
    static equals(a: ProductionIndentItemHistoryRequest | PlainMessage<ProductionIndentItemHistoryRequest> | undefined, b: ProductionIndentItemHistoryRequest | PlainMessage<ProductionIndentItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective production indent item
 *
 * @generated from message Scailo.ProductionIndentItemProspectiveInfoRequest
 */
export declare class ProductionIndentItemProspectiveInfoRequest extends Message<ProductionIndentItemProspectiveInfoRequest> {
    /**
     * Stores the production indent ID
     *
     * @generated from field: uint64 production_indent_id = 10;
     */
    productionIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ProductionIndentItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentItemProspectiveInfoRequest;
    static equals(a: ProductionIndentItemProspectiveInfoRequest | PlainMessage<ProductionIndentItemProspectiveInfoRequest> | undefined, b: ProductionIndentItemProspectiveInfoRequest | PlainMessage<ProductionIndentItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ProductionIndentsServicePaginationReq
 */
export declare class ProductionIndentsServicePaginationReq extends Message<ProductionIndentsServicePaginationReq> {
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
     * @generated from field: Scailo.PRODUCTION_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_INDENT_SORT_KEY;
    /**
     * The status of this production indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ProductionIndentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServicePaginationReq;
    static equals(a: ProductionIndentsServicePaginationReq | PlainMessage<ProductionIndentsServicePaginationReq> | undefined, b: ProductionIndentsServicePaginationReq | PlainMessage<ProductionIndentsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ProductionIndentsServicePaginationResponse
 */
export declare class ProductionIndentsServicePaginationResponse extends Message<ProductionIndentsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ProductionIndent payload = 4;
     */
    payload: ProductionIndent[];
    constructor(data?: PartialMessage<ProductionIndentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServicePaginationResponse;
    static equals(a: ProductionIndentsServicePaginationResponse | PlainMessage<ProductionIndentsServicePaginationResponse> | undefined, b: ProductionIndentsServicePaginationResponse | PlainMessage<ProductionIndentsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ProductionIndentsServiceFilterReq
 */
export declare class ProductionIndentsServiceFilterReq extends Message<ProductionIndentsServiceFilterReq> {
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
     * @generated from field: Scailo.PRODUCTION_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_INDENT_SORT_KEY;
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
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 25;
     */
    supervisor: string;
    /**
     * Stores if the indent is associated to a production plan
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR production_ref_for = 26;
     */
    productionRefFor: PRODUCTION_INDENT_PRODUCTION_REF_FOR;
    /**
     * Stores the production plan ID if production_ref_for is production-plan
     *
     * @generated from field: uint64 production_ref_id = 27;
     */
    productionRefId: bigint;
    /**
     * Stores if the indent should be created on the basis of a work order or a family
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_INDENT_REF_FOR indent_ref_for = 28;
     */
    indentRefFor: PRODUCTION_INDENT_INDENT_REF_FOR;
    /**
     * Stores the ID of the associated family or work order
     *
     * @generated from field: uint64 indent_ref_id = 29;
     */
    indentRefId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ProductionIndentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServiceFilterReq;
    static equals(a: ProductionIndentsServiceFilterReq | PlainMessage<ProductionIndentsServiceFilterReq> | undefined, b: ProductionIndentsServiceFilterReq | PlainMessage<ProductionIndentsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ProductionIndentsServiceCountReq
 */
export declare class ProductionIndentsServiceCountReq extends Message<ProductionIndentsServiceCountReq> {
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
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 25;
     */
    supervisor: string;
    /**
     * Stores if the indent is associated to a production plan
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR production_ref_for = 26;
     */
    productionRefFor: PRODUCTION_INDENT_PRODUCTION_REF_FOR;
    /**
     * Stores the production plan ID if production_ref_for is production-plan
     *
     * @generated from field: uint64 production_ref_id = 27;
     */
    productionRefId: bigint;
    /**
     * Stores if the indent should be created on the basis of a work order or a family
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_INDENT_REF_FOR indent_ref_for = 28;
     */
    indentRefFor: PRODUCTION_INDENT_INDENT_REF_FOR;
    /**
     * Stores the ID of the associated family or work order
     *
     * @generated from field: uint64 indent_ref_id = 29;
     */
    indentRefId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ProductionIndentsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServiceCountReq;
    static equals(a: ProductionIndentsServiceCountReq | PlainMessage<ProductionIndentsServiceCountReq> | undefined, b: ProductionIndentsServiceCountReq | PlainMessage<ProductionIndentsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ProductionIndentsServiceSearchAllReq
 */
export declare class ProductionIndentsServiceSearchAllReq extends Message<ProductionIndentsServiceSearchAllReq> {
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
     * @generated from field: Scailo.PRODUCTION_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_INDENT_SORT_KEY;
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
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 25;
     */
    supervisor: string;
    /**
     * Stores if the indent is associated to a production plan
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR production_ref_for = 26;
     */
    productionRefFor: PRODUCTION_INDENT_PRODUCTION_REF_FOR;
    /**
     * Stores the production plan ID if production_ref_for is production-plan
     *
     * @generated from field: uint64 production_ref_id = 27;
     */
    productionRefId: bigint;
    /**
     * Stores if the indent should be created on the basis of a work order or a family
     *
     * @generated from field: Scailo.PRODUCTION_INDENT_INDENT_REF_FOR indent_ref_for = 28;
     */
    indentRefFor: PRODUCTION_INDENT_INDENT_REF_FOR;
    /**
     * Stores the ID of the associated family or work order
     *
     * @generated from field: uint64 indent_ref_id = 29;
     */
    indentRefId: bigint;
    constructor(data?: PartialMessage<ProductionIndentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServiceSearchAllReq;
    static equals(a: ProductionIndentsServiceSearchAllReq | PlainMessage<ProductionIndentsServiceSearchAllReq> | undefined, b: ProductionIndentsServiceSearchAllReq | PlainMessage<ProductionIndentsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.ProductionIndentItemsSearchRequest
 */
export declare class ProductionIndentItemsSearchRequest extends Message<ProductionIndentItemsSearchRequest> {
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
     * @generated from field: Scailo.PRODUCTION_INDENT_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_INDENT_ITEM_SORT_KEY;
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
     * @generated from field: Scailo.PRODUCTION_INDENT_ITEM_STATUS status = 7;
     */
    status: PRODUCTION_INDENT_ITEM_STATUS;
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
     * The ID of the production indent
     *
     * @generated from field: uint64 production_indent_id = 20;
     */
    productionIndentId: bigint;
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
    constructor(data?: PartialMessage<ProductionIndentItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentItemsSearchRequest;
    static equals(a: ProductionIndentItemsSearchRequest | PlainMessage<ProductionIndentItemsSearchRequest> | undefined, b: ProductionIndentItemsSearchRequest | PlainMessage<ProductionIndentItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.ProductionIndentsServicePaginatedItemsResponse
 */
export declare class ProductionIndentsServicePaginatedItemsResponse extends Message<ProductionIndentsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.ProductionIndentItem payload = 4;
     */
    payload: ProductionIndentItem[];
    constructor(data?: PartialMessage<ProductionIndentsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentsServicePaginatedItemsResponse;
    static equals(a: ProductionIndentsServicePaginatedItemsResponse | PlainMessage<ProductionIndentsServicePaginatedItemsResponse> | undefined, b: ProductionIndentsServicePaginatedItemsResponse | PlainMessage<ProductionIndentsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the issued statistics of the production indent
 *
 * @generated from message Scailo.ProductionIndentIssuedStatistics
 */
export declare class ProductionIndentIssuedStatistics extends Message<ProductionIndentIssuedStatistics> {
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
    constructor(data?: PartialMessage<ProductionIndentIssuedStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentIssuedStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentIssuedStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentIssuedStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentIssuedStatistics;
    static equals(a: ProductionIndentIssuedStatistics | PlainMessage<ProductionIndentIssuedStatistics> | undefined, b: ProductionIndentIssuedStatistics | PlainMessage<ProductionIndentIssuedStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of issued statistics of the production indent
 *
 * @generated from message Scailo.ProductionIndentIssuedStatisticsList
 */
export declare class ProductionIndentIssuedStatisticsList extends Message<ProductionIndentIssuedStatisticsList> {
    /**
     * @generated from field: repeated Scailo.ProductionIndentIssuedStatistics list = 1;
     */
    list: ProductionIndentIssuedStatistics[];
    constructor(data?: PartialMessage<ProductionIndentIssuedStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionIndentIssuedStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionIndentIssuedStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionIndentIssuedStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionIndentIssuedStatisticsList;
    static equals(a: ProductionIndentIssuedStatisticsList | PlainMessage<ProductionIndentIssuedStatisticsList> | undefined, b: ProductionIndentIssuedStatisticsList | PlainMessage<ProductionIndentIssuedStatisticsList> | undefined): boolean;
}
//# sourceMappingURL=production_indents.scailo_pb.d.ts.map
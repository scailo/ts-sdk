import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
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
     * Stores a globally unique entity UUID. This will be set at the organization level
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
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the replaceable indent
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
     * Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the replaceable indent
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
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this replaceable indent
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this replaceable indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this replaceable indent
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this replaceable indent was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the replaceable indent
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
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
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this replaceable indent
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * Denotes if this record requires approval (or has been approved)
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
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
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
     * The number of records in this payload
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     * The list of records
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
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     * The minimum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The status of this replaceable indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The reference ID of the replaceable indent
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
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
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     * The minimum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The status of this replaceable indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The reference ID of the replaceable indent
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
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
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Describes the key with which the search operation needs to be performed
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
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.REPLACEABLE_INDENT_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
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
     * The number of records in this payload
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     * The list of records
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
//# sourceMappingURL=replaceable_indents.scailo_pb.d.ts.map
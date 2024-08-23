import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ASSET_INDENT_ITEM_SORT_KEY
 */
export declare enum ASSET_INDENT_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: ASSET_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ASSET_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: ASSET_INDENT_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    ASSET_INDENT_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: ASSET_INDENT_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    ASSET_INDENT_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: ASSET_INDENT_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    ASSET_INDENT_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: ASSET_INDENT_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    ASSET_INDENT_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: ASSET_INDENT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ASSET_INDENT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: ASSET_INDENT_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    ASSET_INDENT_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the quantity
     *
     * @generated from enum value: ASSET_INDENT_ITEM_SORT_KEY_QUANTITY = 11;
     */
    ASSET_INDENT_ITEM_SORT_KEY_QUANTITY = 11
}
/**
 *
 * Describes the applicable statuses of asset indent items
 *
 * @generated from enum Scailo.ASSET_INDENT_ITEM_STATUS
 */
export declare enum ASSET_INDENT_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: ASSET_INDENT_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    ASSET_INDENT_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the asset indent items must have been approved
     *
     * @generated from enum value: ASSET_INDENT_ITEM_STATUS_APPROVED = 1;
     */
    ASSET_INDENT_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the asset indent items must be waiting for approval
     *
     * @generated from enum value: ASSET_INDENT_ITEM_STATUS_UNAPPROVED = 2;
     */
    ASSET_INDENT_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ASSET_INDENT_SORT_KEY
 */
export declare enum ASSET_INDENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_CREATED_AT = 1;
     */
    ASSET_INDENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_MODIFIED_AT = 2;
     */
    ASSET_INDENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_APPROVED_ON = 3;
     */
    ASSET_INDENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_APPROVED_BY = 4;
     */
    ASSET_INDENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ASSET_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_COMPLETED_ON = 6;
     */
    ASSET_INDENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_REFERENCE_ID = 10;
     */
    ASSET_INDENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    ASSET_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_LOCATION_ID = 12;
     */
    ASSET_INDENT_SORT_KEY_LOCATION_ID = 12
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.AssetIndentsServiceCreateRequest
 */
export declare class AssetIndentsServiceCreateRequest extends Message<AssetIndentsServiceCreateRequest> {
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
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the asset indent
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
     * The ID of the associated user
     *
     * @generated from field: uint64 user_id = 15;
     */
    userId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<AssetIndentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceCreateRequest;
    static equals(a: AssetIndentsServiceCreateRequest | PlainMessage<AssetIndentsServiceCreateRequest> | undefined, b: AssetIndentsServiceCreateRequest | PlainMessage<AssetIndentsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.AssetIndentsServiceUpdateRequest
 */
export declare class AssetIndentsServiceUpdateRequest extends Message<AssetIndentsServiceUpdateRequest> {
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
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the asset indent
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the associated user
     *
     * @generated from field: uint64 user_id = 15;
     */
    userId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<AssetIndentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceUpdateRequest;
    static equals(a: AssetIndentsServiceUpdateRequest | PlainMessage<AssetIndentsServiceUpdateRequest> | undefined, b: AssetIndentsServiceUpdateRequest | PlainMessage<AssetIndentsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.AssetIndent
 */
export declare class AssetIndent extends Message<AssetIndent> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this asset indent
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
     * The status of this asset indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this asset indent
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this asset indent was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the asset indent
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
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The ID of the associated user
     *
     * @generated from field: uint64 user_id = 15;
     */
    userId: bigint;
    /**
     * The list of associated asset indent items
     *
     * @generated from field: repeated Scailo.AssetIndentItem list = 20;
     */
    list: AssetIndentItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<AssetIndent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndent;
    static equals(a: AssetIndent | PlainMessage<AssetIndent> | undefined, b: AssetIndent | PlainMessage<AssetIndent> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a asset indent
 *
 * @generated from message Scailo.AssetIndentsServiceItemCreateRequest
 */
export declare class AssetIndentsServiceItemCreateRequest extends Message<AssetIndentsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the asset indent ID
     *
     * @generated from field: uint64 asset_indent_id = 10;
     */
    assetIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity being manufactured
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceItemCreateRequest;
    static equals(a: AssetIndentsServiceItemCreateRequest | PlainMessage<AssetIndentsServiceItemCreateRequest> | undefined, b: AssetIndentsServiceItemCreateRequest | PlainMessage<AssetIndentsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a asset indent
 *
 * @generated from message Scailo.AssetIndentsServiceItemUpdateRequest
 */
export declare class AssetIndentsServiceItemUpdateRequest extends Message<AssetIndentsServiceItemUpdateRequest> {
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
     * The quantity being manufactured
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceItemUpdateRequest;
    static equals(a: AssetIndentsServiceItemUpdateRequest | PlainMessage<AssetIndentsServiceItemUpdateRequest> | undefined, b: AssetIndentsServiceItemUpdateRequest | PlainMessage<AssetIndentsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a asset indent
 *
 * @generated from message Scailo.AssetIndentItem
 */
export declare class AssetIndentItem extends Message<AssetIndentItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this asset indent
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
     * Stores the asset indent ID
     *
     * @generated from field: uint64 asset_indent_id = 10;
     */
    assetIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity being manufactured
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AssetIndentItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentItem;
    static equals(a: AssetIndentItem | PlainMessage<AssetIndentItem> | undefined, b: AssetIndentItem | PlainMessage<AssetIndentItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of asset indents
 *
 * @generated from message Scailo.AssetIndentsList
 */
export declare class AssetIndentsList extends Message<AssetIndentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.AssetIndent list = 1;
     */
    list: AssetIndent[];
    constructor(data?: PartialMessage<AssetIndentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsList;
    static equals(a: AssetIndentsList | PlainMessage<AssetIndentsList> | undefined, b: AssetIndentsList | PlainMessage<AssetIndentsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of asset indent items
 *
 * @generated from message Scailo.AssetIndentsItemsList
 */
export declare class AssetIndentsItemsList extends Message<AssetIndentsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.AssetIndentItem list = 1;
     */
    list: AssetIndentItem[];
    constructor(data?: PartialMessage<AssetIndentsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsItemsList;
    static equals(a: AssetIndentsItemsList | PlainMessage<AssetIndentsItemsList> | undefined, b: AssetIndentsItemsList | PlainMessage<AssetIndentsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.AssetIndentItemHistoryRequest
 */
export declare class AssetIndentItemHistoryRequest extends Message<AssetIndentItemHistoryRequest> {
    /**
     * Stores the asset indent ID
     *
     * @generated from field: uint64 asset_indent_id = 10;
     */
    assetIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<AssetIndentItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentItemHistoryRequest;
    static equals(a: AssetIndentItemHistoryRequest | PlainMessage<AssetIndentItemHistoryRequest> | undefined, b: AssetIndentItemHistoryRequest | PlainMessage<AssetIndentItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.AssetIndentItemsSearchRequest
 */
export declare class AssetIndentItemsSearchRequest extends Message<AssetIndentItemsSearchRequest> {
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
     * @generated from field: Scailo.ASSET_INDENT_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: ASSET_INDENT_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.ASSET_INDENT_ITEM_STATUS status = 7;
     */
    status: ASSET_INDENT_ITEM_STATUS;
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
     * The ID of the asset indent
     *
     * @generated from field: uint64 asset_indent_id = 20;
     */
    assetIndentId: bigint;
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
    constructor(data?: PartialMessage<AssetIndentItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentItemsSearchRequest;
    static equals(a: AssetIndentItemsSearchRequest | PlainMessage<AssetIndentItemsSearchRequest> | undefined, b: AssetIndentItemsSearchRequest | PlainMessage<AssetIndentItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.AssetIndentsServicePaginatedItemsResponse
 */
export declare class AssetIndentsServicePaginatedItemsResponse extends Message<AssetIndentsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.AssetIndentItem payload = 4;
     */
    payload: AssetIndentItem[];
    constructor(data?: PartialMessage<AssetIndentsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginatedItemsResponse;
    static equals(a: AssetIndentsServicePaginatedItemsResponse | PlainMessage<AssetIndentsServicePaginatedItemsResponse> | undefined, b: AssetIndentsServicePaginatedItemsResponse | PlainMessage<AssetIndentsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective asset indent item
 *
 * @generated from message Scailo.AssetIndentItemProspectiveInfoRequest
 */
export declare class AssetIndentItemProspectiveInfoRequest extends Message<AssetIndentItemProspectiveInfoRequest> {
    /**
     * Stores the asset indent ID
     *
     * @generated from field: uint64 asset_indent_id = 10;
     */
    assetIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<AssetIndentItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentItemProspectiveInfoRequest;
    static equals(a: AssetIndentItemProspectiveInfoRequest | PlainMessage<AssetIndentItemProspectiveInfoRequest> | undefined, b: AssetIndentItemProspectiveInfoRequest | PlainMessage<AssetIndentItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.AssetIndentsServicePaginationReq
 */
export declare class AssetIndentsServicePaginationReq extends Message<AssetIndentsServicePaginationReq> {
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
     * @generated from field: Scailo.ASSET_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: ASSET_INDENT_SORT_KEY;
    /**
     * The status of this asset indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<AssetIndentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginationReq;
    static equals(a: AssetIndentsServicePaginationReq | PlainMessage<AssetIndentsServicePaginationReq> | undefined, b: AssetIndentsServicePaginationReq | PlainMessage<AssetIndentsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.AssetIndentsServicePaginationResponse
 */
export declare class AssetIndentsServicePaginationResponse extends Message<AssetIndentsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.AssetIndent payload = 4;
     */
    payload: AssetIndent[];
    constructor(data?: PartialMessage<AssetIndentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginationResponse;
    static equals(a: AssetIndentsServicePaginationResponse | PlainMessage<AssetIndentsServicePaginationResponse> | undefined, b: AssetIndentsServicePaginationResponse | PlainMessage<AssetIndentsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.AssetIndentsServiceFilterReq
 */
export declare class AssetIndentsServiceFilterReq extends Message<AssetIndentsServiceFilterReq> {
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
     * @generated from field: Scailo.ASSET_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: ASSET_INDENT_SORT_KEY;
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
     * The status of this asset indent
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
     * The reference ID of the asset indent
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
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the associated user
     *
     * @generated from field: uint64 user_id = 25;
     */
    userId: bigint;
    /**
     * The ID of the constituent family that is part of an asset indent
     *
     * @generated from field: uint64 constituent_family_id = 40;
     */
    constituentFamilyId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 50;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceFilterReq;
    static equals(a: AssetIndentsServiceFilterReq | PlainMessage<AssetIndentsServiceFilterReq> | undefined, b: AssetIndentsServiceFilterReq | PlainMessage<AssetIndentsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.AssetIndentsServiceCountReq
 */
export declare class AssetIndentsServiceCountReq extends Message<AssetIndentsServiceCountReq> {
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
     * The status of this asset indent
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
     * The reference ID of the asset indent
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
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the associated user
     *
     * @generated from field: uint64 user_id = 25;
     */
    userId: bigint;
    /**
     * The ID of the constituent family that is part of an asset indent
     *
     * @generated from field: uint64 constituent_family_id = 40;
     */
    constituentFamilyId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 50;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceCountReq;
    static equals(a: AssetIndentsServiceCountReq | PlainMessage<AssetIndentsServiceCountReq> | undefined, b: AssetIndentsServiceCountReq | PlainMessage<AssetIndentsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.AssetIndentsServiceSearchAllReq
 */
export declare class AssetIndentsServiceSearchAllReq extends Message<AssetIndentsServiceSearchAllReq> {
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
     * @generated from field: Scailo.ASSET_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: ASSET_INDENT_SORT_KEY;
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
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the associated user
     *
     * @generated from field: uint64 user_id = 25;
     */
    userId: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssetIndentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceSearchAllReq;
    static equals(a: AssetIndentsServiceSearchAllReq | PlainMessage<AssetIndentsServiceSearchAllReq> | undefined, b: AssetIndentsServiceSearchAllReq | PlainMessage<AssetIndentsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=asset_indents.scailo_pb.d.ts.map
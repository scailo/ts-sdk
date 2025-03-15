import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.EQUATION_FAMILY_ITEM_SORT_KEY
 */
export declare enum EQUATION_FAMILY_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the quantity
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_QUANTITY = 11;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_QUANTITY = 11,
    /**
     * Fetch ordered results by the unit price
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_SORT_KEY_UNIT_PRICE = 12;
     */
    EQUATION_FAMILY_ITEM_SORT_KEY_UNIT_PRICE = 12
}
/**
 *
 * Describes the applicable statuses of equation family items
 *
 * @generated from enum Scailo.EQUATION_FAMILY_ITEM_STATUS
 */
export declare enum EQUATION_FAMILY_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    EQUATION_FAMILY_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the equation family items must have been approved
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_STATUS_APPROVED = 1;
     */
    EQUATION_FAMILY_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the equation family items must be waiting for approval
     *
     * @generated from enum value: EQUATION_FAMILY_ITEM_STATUS_UNAPPROVED = 2;
     */
    EQUATION_FAMILY_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.EQUATION_FAMILY_SORT_KEY
 */
export declare enum EQUATION_FAMILY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EQUATION_FAMILY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_CREATED_AT = 1;
     */
    EQUATION_FAMILY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_MODIFIED_AT = 2;
     */
    EQUATION_FAMILY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_APPROVED_ON = 3;
     */
    EQUATION_FAMILY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_APPROVED_BY = 4;
     */
    EQUATION_FAMILY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EQUATION_FAMILY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_COMPLETED_ON = 6;
     */
    EQUATION_FAMILY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_NAME = 10;
     */
    EQUATION_FAMILY_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: EQUATION_FAMILY_SORT_KEY_FAMILY_ID = 11;
     */
    EQUATION_FAMILY_SORT_KEY_FAMILY_ID = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.EquationsFamiliesServiceCreateRequest
 */
export declare class EquationsFamiliesServiceCreateRequest extends Message<EquationsFamiliesServiceCreateRequest> {
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
     * The name of the equation family
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the family that this equation belongs to
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     * The description of the equation family
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsFamiliesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceCreateRequest;
    static equals(a: EquationsFamiliesServiceCreateRequest | PlainMessage<EquationsFamiliesServiceCreateRequest> | undefined, b: EquationsFamiliesServiceCreateRequest | PlainMessage<EquationsFamiliesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.EquationsFamiliesServiceUpdateRequest
 */
export declare class EquationsFamiliesServiceUpdateRequest extends Message<EquationsFamiliesServiceUpdateRequest> {
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
     * The name of the equation family
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the equation family
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsFamiliesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceUpdateRequest;
    static equals(a: EquationsFamiliesServiceUpdateRequest | PlainMessage<EquationsFamiliesServiceUpdateRequest> | undefined, b: EquationsFamiliesServiceUpdateRequest | PlainMessage<EquationsFamiliesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.EquationFamily
 */
export declare class EquationFamily extends Message<EquationFamily> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation family
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
     * The status of this equation family
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this equation family
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this equation family was marked as completed
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
     * The name of the equation family
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the family that this equation belongs to
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     * The description of the equation family
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated equation family items
     *
     * @generated from field: repeated Scailo.EquationFamilyItem list = 20;
     */
    list: EquationFamilyItem[];
    /**
     * The total price of the equation family
     *
     * @generated from field: double total_price = 40;
     */
    totalPrice: number;
    constructor(data?: PartialMessage<EquationFamily>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationFamily";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationFamily;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationFamily;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationFamily;
    static equals(a: EquationFamily | PlainMessage<EquationFamily> | undefined, b: EquationFamily | PlainMessage<EquationFamily> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a equation family
 *
 * @generated from message Scailo.EquationsFamiliesServiceItemCreateRequest
 */
export declare class EquationsFamiliesServiceItemCreateRequest extends Message<EquationsFamiliesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the equation family
     *
     * @generated from field: uint64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the associated family to be used as the multiplier
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The optional unit price of this family
     *
     * @generated from field: uint64 unit_price = 13;
     */
    unitPrice: bigint;
    /**
     * The optional specifications
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<EquationsFamiliesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceItemCreateRequest;
    static equals(a: EquationsFamiliesServiceItemCreateRequest | PlainMessage<EquationsFamiliesServiceItemCreateRequest> | undefined, b: EquationsFamiliesServiceItemCreateRequest | PlainMessage<EquationsFamiliesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a equation family
 *
 * @generated from message Scailo.EquationsFamiliesServiceItemUpdateRequest
 */
export declare class EquationsFamiliesServiceItemUpdateRequest extends Message<EquationsFamiliesServiceItemUpdateRequest> {
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
     * The quantity of the associated family to be used as the multiplier
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The optional unit price of this family
     *
     * @generated from field: uint64 unit_price = 13;
     */
    unitPrice: bigint;
    /**
     * The optional specifications
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<EquationsFamiliesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceItemUpdateRequest;
    static equals(a: EquationsFamiliesServiceItemUpdateRequest | PlainMessage<EquationsFamiliesServiceItemUpdateRequest> | undefined, b: EquationsFamiliesServiceItemUpdateRequest | PlainMessage<EquationsFamiliesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a equation family
 *
 * @generated from message Scailo.EquationFamilyItem
 */
export declare class EquationFamilyItem extends Message<EquationFamilyItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation family
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
     * Stores the ID of the equation family
     *
     * @generated from field: uint64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the associated family to be used as the multiplier
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The optional unit price of this family
     *
     * @generated from field: uint64 unit_price = 13;
     */
    unitPrice: bigint;
    /**
     * The optional specifications
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<EquationFamilyItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationFamilyItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationFamilyItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationFamilyItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationFamilyItem;
    static equals(a: EquationFamilyItem | PlainMessage<EquationFamilyItem> | undefined, b: EquationFamilyItem | PlainMessage<EquationFamilyItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of equations families
 *
 * @generated from message Scailo.EquationsFamiliesList
 */
export declare class EquationsFamiliesList extends Message<EquationsFamiliesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.EquationFamily list = 1;
     */
    list: EquationFamily[];
    constructor(data?: PartialMessage<EquationsFamiliesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesList;
    static equals(a: EquationsFamiliesList | PlainMessage<EquationsFamiliesList> | undefined, b: EquationsFamiliesList | PlainMessage<EquationsFamiliesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of equation family items
 *
 * @generated from message Scailo.EquationsFamiliesItemsList
 */
export declare class EquationsFamiliesItemsList extends Message<EquationsFamiliesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.EquationFamilyItem list = 1;
     */
    list: EquationFamilyItem[];
    constructor(data?: PartialMessage<EquationsFamiliesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesItemsList;
    static equals(a: EquationsFamiliesItemsList | PlainMessage<EquationsFamiliesItemsList> | undefined, b: EquationsFamiliesItemsList | PlainMessage<EquationsFamiliesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.EquationFamilyItemHistoryRequest
 */
export declare class EquationFamilyItemHistoryRequest extends Message<EquationFamilyItemHistoryRequest> {
    /**
     * Stores the ID of the equation family
     *
     * @generated from field: uint64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<EquationFamilyItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationFamilyItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationFamilyItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationFamilyItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationFamilyItemHistoryRequest;
    static equals(a: EquationFamilyItemHistoryRequest | PlainMessage<EquationFamilyItemHistoryRequest> | undefined, b: EquationFamilyItemHistoryRequest | PlainMessage<EquationFamilyItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.EquationFamilyItemsSearchRequest
 */
export declare class EquationFamilyItemsSearchRequest extends Message<EquationFamilyItemsSearchRequest> {
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
     * @generated from field: Scailo.EQUATION_FAMILY_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_FAMILY_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.EQUATION_FAMILY_ITEM_STATUS status = 7;
     */
    status: EQUATION_FAMILY_ITEM_STATUS;
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
     * The ID of the equation family
     *
     * @generated from field: uint64 equation_id = 20;
     */
    equationId: bigint;
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
    constructor(data?: PartialMessage<EquationFamilyItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationFamilyItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationFamilyItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationFamilyItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationFamilyItemsSearchRequest;
    static equals(a: EquationFamilyItemsSearchRequest | PlainMessage<EquationFamilyItemsSearchRequest> | undefined, b: EquationFamilyItemsSearchRequest | PlainMessage<EquationFamilyItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.EquationsFamiliesServicePaginatedItemsResponse
 */
export declare class EquationsFamiliesServicePaginatedItemsResponse extends Message<EquationsFamiliesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.EquationFamilyItem payload = 4;
     */
    payload: EquationFamilyItem[];
    constructor(data?: PartialMessage<EquationsFamiliesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServicePaginatedItemsResponse;
    static equals(a: EquationsFamiliesServicePaginatedItemsResponse | PlainMessage<EquationsFamiliesServicePaginatedItemsResponse> | undefined, b: EquationsFamiliesServicePaginatedItemsResponse | PlainMessage<EquationsFamiliesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.EquationsFamiliesServicePaginationReq
 */
export declare class EquationsFamiliesServicePaginationReq extends Message<EquationsFamiliesServicePaginationReq> {
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
     * @generated from field: Scailo.EQUATION_FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_FAMILY_SORT_KEY;
    /**
     * The status of this equation family
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<EquationsFamiliesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServicePaginationReq;
    static equals(a: EquationsFamiliesServicePaginationReq | PlainMessage<EquationsFamiliesServicePaginationReq> | undefined, b: EquationsFamiliesServicePaginationReq | PlainMessage<EquationsFamiliesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.EquationsFamiliesServicePaginationResponse
 */
export declare class EquationsFamiliesServicePaginationResponse extends Message<EquationsFamiliesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.EquationFamily payload = 4;
     */
    payload: EquationFamily[];
    constructor(data?: PartialMessage<EquationsFamiliesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServicePaginationResponse;
    static equals(a: EquationsFamiliesServicePaginationResponse | PlainMessage<EquationsFamiliesServicePaginationResponse> | undefined, b: EquationsFamiliesServicePaginationResponse | PlainMessage<EquationsFamiliesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.EquationsFamiliesServiceFilterReq
 */
export declare class EquationsFamiliesServiceFilterReq extends Message<EquationsFamiliesServiceFilterReq> {
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
     * @generated from field: Scailo.EQUATION_FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_FAMILY_SORT_KEY;
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
     * The status of this equation family
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
     * The name of the equation family
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The ID of the family that this equation belongs to
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The ID of the constituent family that is part of an equation
     *
     * @generated from field: uint64 constituent_family_id = 30;
     */
    constituentFamilyId: bigint;
    constructor(data?: PartialMessage<EquationsFamiliesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceFilterReq;
    static equals(a: EquationsFamiliesServiceFilterReq | PlainMessage<EquationsFamiliesServiceFilterReq> | undefined, b: EquationsFamiliesServiceFilterReq | PlainMessage<EquationsFamiliesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.EquationsFamiliesServiceCountReq
 */
export declare class EquationsFamiliesServiceCountReq extends Message<EquationsFamiliesServiceCountReq> {
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
     * The status of this equation family
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
     * The name of the equation family
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The ID of the family that this equation belongs to
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The ID of the constituent family that is part of an equation
     *
     * @generated from field: uint64 constituent_family_id = 30;
     */
    constituentFamilyId: bigint;
    constructor(data?: PartialMessage<EquationsFamiliesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceCountReq;
    static equals(a: EquationsFamiliesServiceCountReq | PlainMessage<EquationsFamiliesServiceCountReq> | undefined, b: EquationsFamiliesServiceCountReq | PlainMessage<EquationsFamiliesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.EquationsFamiliesServiceSearchAllReq
 */
export declare class EquationsFamiliesServiceSearchAllReq extends Message<EquationsFamiliesServiceSearchAllReq> {
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
     * @generated from field: Scailo.EQUATION_FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_FAMILY_SORT_KEY;
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
    constructor(data?: PartialMessage<EquationsFamiliesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsFamiliesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsFamiliesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsFamiliesServiceSearchAllReq;
    static equals(a: EquationsFamiliesServiceSearchAllReq | PlainMessage<EquationsFamiliesServiceSearchAllReq> | undefined, b: EquationsFamiliesServiceSearchAllReq | PlainMessage<EquationsFamiliesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=equations_families.scailo_pb.d.ts.map
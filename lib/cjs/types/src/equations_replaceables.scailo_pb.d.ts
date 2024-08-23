import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.EQUATION_REPLACEABLE_ITEM_SORT_KEY
 */
export declare enum EQUATION_REPLACEABLE_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EQUATION_REPLACEABLE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    EQUATION_REPLACEABLE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    EQUATION_REPLACEABLE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    EQUATION_REPLACEABLE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    EQUATION_REPLACEABLE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EQUATION_REPLACEABLE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the replaceable family ID
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_SORT_KEY_REPLACEABLE_FAMILY_ID = 10;
     */
    EQUATION_REPLACEABLE_ITEM_SORT_KEY_REPLACEABLE_FAMILY_ID = 10,
    /**
     * // Fetch ordered results by the quantity
     * EQUATION_REPLACEABLE_ITEM_SORT_KEY_QUANTITY = 11;
     * Fetch ordered results by the unit price
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_SORT_KEY_UNIT_PRICE = 12;
     */
    EQUATION_REPLACEABLE_ITEM_SORT_KEY_UNIT_PRICE = 12
}
/**
 *
 * Describes the applicable statuses of equation replaceable items
 *
 * @generated from enum Scailo.EQUATION_REPLACEABLE_ITEM_STATUS
 */
export declare enum EQUATION_REPLACEABLE_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    EQUATION_REPLACEABLE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the equation replaceable items must have been approved
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_STATUS_APPROVED = 1;
     */
    EQUATION_REPLACEABLE_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the equation replaceable items must be waiting for approval
     *
     * @generated from enum value: EQUATION_REPLACEABLE_ITEM_STATUS_UNAPPROVED = 2;
     */
    EQUATION_REPLACEABLE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.EQUATION_REPLACEABLE_SORT_KEY
 */
export declare enum EQUATION_REPLACEABLE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EQUATION_REPLACEABLE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_CREATED_AT = 1;
     */
    EQUATION_REPLACEABLE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_MODIFIED_AT = 2;
     */
    EQUATION_REPLACEABLE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_APPROVED_ON = 3;
     */
    EQUATION_REPLACEABLE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_APPROVED_BY = 4;
     */
    EQUATION_REPLACEABLE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EQUATION_REPLACEABLE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_COMPLETED_ON = 6;
     */
    EQUATION_REPLACEABLE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_NAME = 10;
     */
    EQUATION_REPLACEABLE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: EQUATION_REPLACEABLE_SORT_KEY_FAMILY_ID = 11;
     */
    EQUATION_REPLACEABLE_SORT_KEY_FAMILY_ID = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.EquationsReplaceablesServiceCreateRequest
 */
export declare class EquationsReplaceablesServiceCreateRequest extends Message<EquationsReplaceablesServiceCreateRequest> {
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
     * The name of the equation replaceable
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
     * The description of the equation replaceable
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsReplaceablesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceCreateRequest;
    static equals(a: EquationsReplaceablesServiceCreateRequest | PlainMessage<EquationsReplaceablesServiceCreateRequest> | undefined, b: EquationsReplaceablesServiceCreateRequest | PlainMessage<EquationsReplaceablesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.EquationsReplaceablesServiceUpdateRequest
 */
export declare class EquationsReplaceablesServiceUpdateRequest extends Message<EquationsReplaceablesServiceUpdateRequest> {
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
     * The name of the equation replaceable
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the equation replaceable
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsReplaceablesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceUpdateRequest;
    static equals(a: EquationsReplaceablesServiceUpdateRequest | PlainMessage<EquationsReplaceablesServiceUpdateRequest> | undefined, b: EquationsReplaceablesServiceUpdateRequest | PlainMessage<EquationsReplaceablesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.EquationReplaceable
 */
export declare class EquationReplaceable extends Message<EquationReplaceable> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation replaceable
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
     * The status of this equation replaceable
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this equation replaceable
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this equation replaceable was marked as completed
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
     * The name of the equation replaceable
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
     * The description of the equation replaceable
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated equation replaceable items
     *
     * @generated from field: repeated Scailo.EquationReplaceableItem list = 20;
     */
    list: EquationReplaceableItem[];
    /**
     * The total price of the equation replaceable
     *
     * @generated from field: double total_price = 40;
     */
    totalPrice: number;
    constructor(data?: PartialMessage<EquationReplaceable>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationReplaceable";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationReplaceable;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationReplaceable;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationReplaceable;
    static equals(a: EquationReplaceable | PlainMessage<EquationReplaceable> | undefined, b: EquationReplaceable | PlainMessage<EquationReplaceable> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a equation replaceable
 *
 * @generated from message Scailo.EquationsReplaceablesServiceItemCreateRequest
 */
export declare class EquationsReplaceablesServiceItemCreateRequest extends Message<EquationsReplaceablesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the equation replaceable
     *
     * @generated from field: uint64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * Stores the type of the item (whether it is a consumable, or a spare)
     *
     * @generated from field: string replaceable_type = 11;
     */
    replaceableType: string;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: uint64 replaceable_family_id = 12;
     */
    replaceableFamilyId: bigint;
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
    constructor(data?: PartialMessage<EquationsReplaceablesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceItemCreateRequest;
    static equals(a: EquationsReplaceablesServiceItemCreateRequest | PlainMessage<EquationsReplaceablesServiceItemCreateRequest> | undefined, b: EquationsReplaceablesServiceItemCreateRequest | PlainMessage<EquationsReplaceablesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a equation replaceable
 *
 * @generated from message Scailo.EquationsReplaceablesServiceItemUpdateRequest
 */
export declare class EquationsReplaceablesServiceItemUpdateRequest extends Message<EquationsReplaceablesServiceItemUpdateRequest> {
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
     * Stores the type of the item (whether it is a consumable, or a spare)
     *
     * @generated from field: string replaceable_type = 11;
     */
    replaceableType: string;
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
    constructor(data?: PartialMessage<EquationsReplaceablesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceItemUpdateRequest;
    static equals(a: EquationsReplaceablesServiceItemUpdateRequest | PlainMessage<EquationsReplaceablesServiceItemUpdateRequest> | undefined, b: EquationsReplaceablesServiceItemUpdateRequest | PlainMessage<EquationsReplaceablesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a equation replaceable
 *
 * @generated from message Scailo.EquationReplaceableItem
 */
export declare class EquationReplaceableItem extends Message<EquationReplaceableItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation replaceable
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
     * Stores the ID of the equation replaceable
     *
     * @generated from field: uint64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * Stores the type of the item (whether it is a consumable, or a spare)
     *
     * @generated from field: string replaceable_type = 11;
     */
    replaceableType: string;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: uint64 replaceable_family_id = 12;
     */
    replaceableFamilyId: bigint;
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
    constructor(data?: PartialMessage<EquationReplaceableItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationReplaceableItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationReplaceableItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationReplaceableItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationReplaceableItem;
    static equals(a: EquationReplaceableItem | PlainMessage<EquationReplaceableItem> | undefined, b: EquationReplaceableItem | PlainMessage<EquationReplaceableItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of equations replaceables
 *
 * @generated from message Scailo.EquationsReplaceablesList
 */
export declare class EquationsReplaceablesList extends Message<EquationsReplaceablesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.EquationReplaceable list = 1;
     */
    list: EquationReplaceable[];
    constructor(data?: PartialMessage<EquationsReplaceablesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesList;
    static equals(a: EquationsReplaceablesList | PlainMessage<EquationsReplaceablesList> | undefined, b: EquationsReplaceablesList | PlainMessage<EquationsReplaceablesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of equation replaceable items
 *
 * @generated from message Scailo.EquationsReplaceablesItemsList
 */
export declare class EquationsReplaceablesItemsList extends Message<EquationsReplaceablesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.EquationReplaceableItem list = 1;
     */
    list: EquationReplaceableItem[];
    constructor(data?: PartialMessage<EquationsReplaceablesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesItemsList;
    static equals(a: EquationsReplaceablesItemsList | PlainMessage<EquationsReplaceablesItemsList> | undefined, b: EquationsReplaceablesItemsList | PlainMessage<EquationsReplaceablesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.EquationReplaceableItemHistoryRequest
 */
export declare class EquationReplaceableItemHistoryRequest extends Message<EquationReplaceableItemHistoryRequest> {
    /**
     * Stores the ID of the equation replaceable
     *
     * @generated from field: uint64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: uint64 replaceable_family_id = 11;
     */
    replaceableFamilyId: bigint;
    constructor(data?: PartialMessage<EquationReplaceableItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationReplaceableItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationReplaceableItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationReplaceableItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationReplaceableItemHistoryRequest;
    static equals(a: EquationReplaceableItemHistoryRequest | PlainMessage<EquationReplaceableItemHistoryRequest> | undefined, b: EquationReplaceableItemHistoryRequest | PlainMessage<EquationReplaceableItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.EquationReplaceableItemsSearchRequest
 */
export declare class EquationReplaceableItemsSearchRequest extends Message<EquationReplaceableItemsSearchRequest> {
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
     * @generated from field: Scailo.EQUATION_REPLACEABLE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_REPLACEABLE_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.EQUATION_REPLACEABLE_ITEM_STATUS status = 7;
     */
    status: EQUATION_REPLACEABLE_ITEM_STATUS;
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
     * The ID of the equation replaceable
     *
     * @generated from field: uint64 equation_id = 20;
     */
    equationId: bigint;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: uint64 replaceable_family_id = 21;
     */
    replaceableFamilyId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<EquationReplaceableItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationReplaceableItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationReplaceableItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationReplaceableItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationReplaceableItemsSearchRequest;
    static equals(a: EquationReplaceableItemsSearchRequest | PlainMessage<EquationReplaceableItemsSearchRequest> | undefined, b: EquationReplaceableItemsSearchRequest | PlainMessage<EquationReplaceableItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.EquationsReplaceablesServicePaginatedItemsResponse
 */
export declare class EquationsReplaceablesServicePaginatedItemsResponse extends Message<EquationsReplaceablesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.EquationReplaceableItem payload = 4;
     */
    payload: EquationReplaceableItem[];
    constructor(data?: PartialMessage<EquationsReplaceablesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServicePaginatedItemsResponse;
    static equals(a: EquationsReplaceablesServicePaginatedItemsResponse | PlainMessage<EquationsReplaceablesServicePaginatedItemsResponse> | undefined, b: EquationsReplaceablesServicePaginatedItemsResponse | PlainMessage<EquationsReplaceablesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.EquationsReplaceablesServicePaginationReq
 */
export declare class EquationsReplaceablesServicePaginationReq extends Message<EquationsReplaceablesServicePaginationReq> {
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
     * @generated from field: Scailo.EQUATION_REPLACEABLE_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_REPLACEABLE_SORT_KEY;
    /**
     * The status of this equation replaceable
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<EquationsReplaceablesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServicePaginationReq;
    static equals(a: EquationsReplaceablesServicePaginationReq | PlainMessage<EquationsReplaceablesServicePaginationReq> | undefined, b: EquationsReplaceablesServicePaginationReq | PlainMessage<EquationsReplaceablesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.EquationsReplaceablesServicePaginationResponse
 */
export declare class EquationsReplaceablesServicePaginationResponse extends Message<EquationsReplaceablesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.EquationReplaceable payload = 4;
     */
    payload: EquationReplaceable[];
    constructor(data?: PartialMessage<EquationsReplaceablesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServicePaginationResponse;
    static equals(a: EquationsReplaceablesServicePaginationResponse | PlainMessage<EquationsReplaceablesServicePaginationResponse> | undefined, b: EquationsReplaceablesServicePaginationResponse | PlainMessage<EquationsReplaceablesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.EquationsReplaceablesServiceFilterReq
 */
export declare class EquationsReplaceablesServiceFilterReq extends Message<EquationsReplaceablesServiceFilterReq> {
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
     * @generated from field: Scailo.EQUATION_REPLACEABLE_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_REPLACEABLE_SORT_KEY;
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
     * The status of this equation replaceable
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
     * The name of the equation replaceable
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
    constructor(data?: PartialMessage<EquationsReplaceablesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceFilterReq;
    static equals(a: EquationsReplaceablesServiceFilterReq | PlainMessage<EquationsReplaceablesServiceFilterReq> | undefined, b: EquationsReplaceablesServiceFilterReq | PlainMessage<EquationsReplaceablesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.EquationsReplaceablesServiceCountReq
 */
export declare class EquationsReplaceablesServiceCountReq extends Message<EquationsReplaceablesServiceCountReq> {
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
     * The status of this equation replaceable
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
     * The name of the equation replaceable
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
    constructor(data?: PartialMessage<EquationsReplaceablesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceCountReq;
    static equals(a: EquationsReplaceablesServiceCountReq | PlainMessage<EquationsReplaceablesServiceCountReq> | undefined, b: EquationsReplaceablesServiceCountReq | PlainMessage<EquationsReplaceablesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.EquationsReplaceablesServiceSearchAllReq
 */
export declare class EquationsReplaceablesServiceSearchAllReq extends Message<EquationsReplaceablesServiceSearchAllReq> {
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
     * @generated from field: Scailo.EQUATION_REPLACEABLE_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_REPLACEABLE_SORT_KEY;
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
    constructor(data?: PartialMessage<EquationsReplaceablesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsReplaceablesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsReplaceablesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsReplaceablesServiceSearchAllReq;
    static equals(a: EquationsReplaceablesServiceSearchAllReq | PlainMessage<EquationsReplaceablesServiceSearchAllReq> | undefined, b: EquationsReplaceablesServiceSearchAllReq | PlainMessage<EquationsReplaceablesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=equations_replaceables.scailo_pb.d.ts.map
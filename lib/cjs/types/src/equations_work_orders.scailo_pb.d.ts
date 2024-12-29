import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.EQUATION_WORK_ORDER_ITEM_SORT_KEY
 */
export declare enum EQUATION_WORK_ORDER_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the quantity
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_QUANTITY = 11;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_QUANTITY = 11,
    /**
     * Fetch ordered results by the unit price
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_SORT_KEY_UNIT_PRICE = 12;
     */
    EQUATION_WORK_ORDER_ITEM_SORT_KEY_UNIT_PRICE = 12
}
/**
 *
 * Describes the applicable statuses of equation work order items
 *
 * @generated from enum Scailo.EQUATION_WORK_ORDER_ITEM_STATUS
 */
export declare enum EQUATION_WORK_ORDER_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    EQUATION_WORK_ORDER_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the equation work order items must have been approved
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_STATUS_APPROVED = 1;
     */
    EQUATION_WORK_ORDER_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the equation work order items must be waiting for approval
     *
     * @generated from enum value: EQUATION_WORK_ORDER_ITEM_STATUS_UNAPPROVED = 2;
     */
    EQUATION_WORK_ORDER_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.EQUATION_WORK_ORDER_SORT_KEY
 */
export declare enum EQUATION_WORK_ORDER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_CREATED_AT = 1;
     */
    EQUATION_WORK_ORDER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_MODIFIED_AT = 2;
     */
    EQUATION_WORK_ORDER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_APPROVED_ON = 3;
     */
    EQUATION_WORK_ORDER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_APPROVED_BY = 4;
     */
    EQUATION_WORK_ORDER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EQUATION_WORK_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_COMPLETED_ON = 6;
     */
    EQUATION_WORK_ORDER_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_NAME = 10;
     */
    EQUATION_WORK_ORDER_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the work order ID
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_WORK_ORDER_ID = 11;
     */
    EQUATION_WORK_ORDER_SORT_KEY_WORK_ORDER_ID = 11,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_AMENDMENT_COUNT = 15;
     */
    EQUATION_WORK_ORDER_SORT_KEY_AMENDMENT_COUNT = 15
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.EquationsWorkOrdersServiceCreateRequest
 */
export declare class EquationsWorkOrdersServiceCreateRequest extends Message<EquationsWorkOrdersServiceCreateRequest> {
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
     * The name of the equation work order
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the work order that this equation belongs to
     *
     * @generated from field: uint64 work_order_id = 12;
     */
    workOrderId: bigint;
    /**
     * The description of the equation work order
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceCreateRequest;
    static equals(a: EquationsWorkOrdersServiceCreateRequest | PlainMessage<EquationsWorkOrdersServiceCreateRequest> | undefined, b: EquationsWorkOrdersServiceCreateRequest | PlainMessage<EquationsWorkOrdersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.EquationsWorkOrdersServiceUpdateRequest
 */
export declare class EquationsWorkOrdersServiceUpdateRequest extends Message<EquationsWorkOrdersServiceUpdateRequest> {
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
     * The name of the equation work order
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the equation work order
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceUpdateRequest;
    static equals(a: EquationsWorkOrdersServiceUpdateRequest | PlainMessage<EquationsWorkOrdersServiceUpdateRequest> | undefined, b: EquationsWorkOrdersServiceUpdateRequest | PlainMessage<EquationsWorkOrdersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.EquationWorkOrder
 */
export declare class EquationWorkOrder extends Message<EquationWorkOrder> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation work order
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
     * The status of this equation work order
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this equation work order
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this equation work order was marked as completed
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
     * The name of the equation work order
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the work order that this equation belongs to
     *
     * @generated from field: uint64 work_order_id = 12;
     */
    workOrderId: bigint;
    /**
     * The description of the equation work order
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated equation work order items
     *
     * @generated from field: repeated Scailo.EquationWorkOrderItem list = 20;
     */
    list: EquationWorkOrderItem[];
    /**
     * The total price of the equation work order
     *
     * @generated from field: double total_price = 40;
     */
    totalPrice: number;
    /**
     * The number of times that the equation work order has been amended
     *
     * @generated from field: uint64 amendment_count = 70;
     */
    amendmentCount: bigint;
    constructor(data?: PartialMessage<EquationWorkOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationWorkOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationWorkOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationWorkOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationWorkOrder;
    static equals(a: EquationWorkOrder | PlainMessage<EquationWorkOrder> | undefined, b: EquationWorkOrder | PlainMessage<EquationWorkOrder> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a equation work order
 *
 * @generated from message Scailo.EquationsWorkOrdersServiceItemCreateRequest
 */
export declare class EquationsWorkOrdersServiceItemCreateRequest extends Message<EquationsWorkOrdersServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the equation work order
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
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceItemCreateRequest;
    static equals(a: EquationsWorkOrdersServiceItemCreateRequest | PlainMessage<EquationsWorkOrdersServiceItemCreateRequest> | undefined, b: EquationsWorkOrdersServiceItemCreateRequest | PlainMessage<EquationsWorkOrdersServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a equation work order
 *
 * @generated from message Scailo.EquationsWorkOrdersServiceItemUpdateRequest
 */
export declare class EquationsWorkOrdersServiceItemUpdateRequest extends Message<EquationsWorkOrdersServiceItemUpdateRequest> {
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
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceItemUpdateRequest;
    static equals(a: EquationsWorkOrdersServiceItemUpdateRequest | PlainMessage<EquationsWorkOrdersServiceItemUpdateRequest> | undefined, b: EquationsWorkOrdersServiceItemUpdateRequest | PlainMessage<EquationsWorkOrdersServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a equation work order
 *
 * @generated from message Scailo.EquationWorkOrderItem
 */
export declare class EquationWorkOrderItem extends Message<EquationWorkOrderItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation work order
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
     * Stores the ID of the equation work order
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
    constructor(data?: PartialMessage<EquationWorkOrderItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationWorkOrderItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationWorkOrderItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationWorkOrderItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationWorkOrderItem;
    static equals(a: EquationWorkOrderItem | PlainMessage<EquationWorkOrderItem> | undefined, b: EquationWorkOrderItem | PlainMessage<EquationWorkOrderItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of equations work orders
 *
 * @generated from message Scailo.EquationsWorkOrdersList
 */
export declare class EquationsWorkOrdersList extends Message<EquationsWorkOrdersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.EquationWorkOrder list = 1;
     */
    list: EquationWorkOrder[];
    constructor(data?: PartialMessage<EquationsWorkOrdersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersList;
    static equals(a: EquationsWorkOrdersList | PlainMessage<EquationsWorkOrdersList> | undefined, b: EquationsWorkOrdersList | PlainMessage<EquationsWorkOrdersList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of equation work order items
 *
 * @generated from message Scailo.EquationsWorkOrdersItemsList
 */
export declare class EquationsWorkOrdersItemsList extends Message<EquationsWorkOrdersItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.EquationWorkOrderItem list = 1;
     */
    list: EquationWorkOrderItem[];
    constructor(data?: PartialMessage<EquationsWorkOrdersItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersItemsList;
    static equals(a: EquationsWorkOrdersItemsList | PlainMessage<EquationsWorkOrdersItemsList> | undefined, b: EquationsWorkOrdersItemsList | PlainMessage<EquationsWorkOrdersItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.EquationWorkOrderItemHistoryRequest
 */
export declare class EquationWorkOrderItemHistoryRequest extends Message<EquationWorkOrderItemHistoryRequest> {
    /**
     * Stores the ID of the equation work order
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
    constructor(data?: PartialMessage<EquationWorkOrderItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationWorkOrderItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationWorkOrderItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationWorkOrderItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationWorkOrderItemHistoryRequest;
    static equals(a: EquationWorkOrderItemHistoryRequest | PlainMessage<EquationWorkOrderItemHistoryRequest> | undefined, b: EquationWorkOrderItemHistoryRequest | PlainMessage<EquationWorkOrderItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.EquationWorkOrderItemsSearchRequest
 */
export declare class EquationWorkOrderItemsSearchRequest extends Message<EquationWorkOrderItemsSearchRequest> {
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
     * @generated from field: Scailo.EQUATION_WORK_ORDER_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_WORK_ORDER_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.EQUATION_WORK_ORDER_ITEM_STATUS status = 7;
     */
    status: EQUATION_WORK_ORDER_ITEM_STATUS;
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
     * The ID of the equation work order
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
    constructor(data?: PartialMessage<EquationWorkOrderItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationWorkOrderItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationWorkOrderItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationWorkOrderItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationWorkOrderItemsSearchRequest;
    static equals(a: EquationWorkOrderItemsSearchRequest | PlainMessage<EquationWorkOrderItemsSearchRequest> | undefined, b: EquationWorkOrderItemsSearchRequest | PlainMessage<EquationWorkOrderItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.EquationsWorkOrdersServicePaginatedItemsResponse
 */
export declare class EquationsWorkOrdersServicePaginatedItemsResponse extends Message<EquationsWorkOrdersServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.EquationWorkOrderItem payload = 4;
     */
    payload: EquationWorkOrderItem[];
    constructor(data?: PartialMessage<EquationsWorkOrdersServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginatedItemsResponse;
    static equals(a: EquationsWorkOrdersServicePaginatedItemsResponse | PlainMessage<EquationsWorkOrdersServicePaginatedItemsResponse> | undefined, b: EquationsWorkOrdersServicePaginatedItemsResponse | PlainMessage<EquationsWorkOrdersServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.EquationsWorkOrdersServicePaginationReq
 */
export declare class EquationsWorkOrdersServicePaginationReq extends Message<EquationsWorkOrdersServicePaginationReq> {
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
     * @generated from field: Scailo.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_WORK_ORDER_SORT_KEY;
    /**
     * The status of this equation work order
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<EquationsWorkOrdersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginationReq;
    static equals(a: EquationsWorkOrdersServicePaginationReq | PlainMessage<EquationsWorkOrdersServicePaginationReq> | undefined, b: EquationsWorkOrdersServicePaginationReq | PlainMessage<EquationsWorkOrdersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.EquationsWorkOrdersServicePaginationResponse
 */
export declare class EquationsWorkOrdersServicePaginationResponse extends Message<EquationsWorkOrdersServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.EquationWorkOrder payload = 4;
     */
    payload: EquationWorkOrder[];
    constructor(data?: PartialMessage<EquationsWorkOrdersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginationResponse;
    static equals(a: EquationsWorkOrdersServicePaginationResponse | PlainMessage<EquationsWorkOrdersServicePaginationResponse> | undefined, b: EquationsWorkOrdersServicePaginationResponse | PlainMessage<EquationsWorkOrdersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.EquationsWorkOrdersServiceFilterReq
 */
export declare class EquationsWorkOrdersServiceFilterReq extends Message<EquationsWorkOrdersServiceFilterReq> {
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
     * @generated from field: Scailo.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_WORK_ORDER_SORT_KEY;
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
     * The status of this equation work order
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
     * The name of the equation work order
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The ID of the work order that this equation belongs to
     *
     * @generated from field: uint64 work_order_id = 21;
     */
    workOrderId: bigint;
    /**
     * The ID of the constituent family that is part of an equation
     *
     * @generated from field: uint64 constituent_family_id = 30;
     */
    constituentFamilyId: bigint;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceFilterReq;
    static equals(a: EquationsWorkOrdersServiceFilterReq | PlainMessage<EquationsWorkOrdersServiceFilterReq> | undefined, b: EquationsWorkOrdersServiceFilterReq | PlainMessage<EquationsWorkOrdersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.EquationsWorkOrdersServiceCountReq
 */
export declare class EquationsWorkOrdersServiceCountReq extends Message<EquationsWorkOrdersServiceCountReq> {
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
     * The status of this equation work order
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
     * The name of the equation work order
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The ID of the work order that this equation belongs to
     *
     * @generated from field: uint64 work_order_id = 21;
     */
    workOrderId: bigint;
    /**
     * The ID of the constituent family that is part of an equation
     *
     * @generated from field: uint64 constituent_family_id = 30;
     */
    constituentFamilyId: bigint;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceCountReq;
    static equals(a: EquationsWorkOrdersServiceCountReq | PlainMessage<EquationsWorkOrdersServiceCountReq> | undefined, b: EquationsWorkOrdersServiceCountReq | PlainMessage<EquationsWorkOrdersServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.EquationsWorkOrdersServiceSearchAllReq
 */
export declare class EquationsWorkOrdersServiceSearchAllReq extends Message<EquationsWorkOrdersServiceSearchAllReq> {
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
     * @generated from field: Scailo.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_WORK_ORDER_SORT_KEY;
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
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EquationsWorkOrdersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceSearchAllReq;
    static equals(a: EquationsWorkOrdersServiceSearchAllReq | PlainMessage<EquationsWorkOrdersServiceSearchAllReq> | undefined, b: EquationsWorkOrdersServiceSearchAllReq | PlainMessage<EquationsWorkOrdersServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=equations_work_orders.scailo_pb.d.ts.map
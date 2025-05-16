import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a stock return can be added
 *
 * @generated from enum Scailo.STOCK_RETURN_REF_FROM
 */
export declare enum STOCK_RETURN_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: STOCK_RETURN_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    STOCK_RETURN_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the stock return originated from a stock issuance
     *
     * @generated from enum value: STOCK_RETURN_REF_FROM_STOCK_ISSUANCE = 1;
     */
    STOCK_RETURN_REF_FROM_STOCK_ISSUANCE = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.STOCK_RETURN_SORT_KEY
 */
export declare enum STOCK_RETURN_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STOCK_RETURN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_CREATED_AT = 1;
     */
    STOCK_RETURN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_MODIFIED_AT = 2;
     */
    STOCK_RETURN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_APPROVED_ON = 3;
     */
    STOCK_RETURN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_APPROVED_BY = 4;
     */
    STOCK_RETURN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STOCK_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_COMPLETED_ON = 6;
     */
    STOCK_RETURN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_REFERENCE_ID = 10;
     */
    STOCK_RETURN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: STOCK_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    STOCK_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.STOCK_RETURN_ITEM_SORT_KEY
 */
export declare enum STOCK_RETURN_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: STOCK_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STOCK_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: STOCK_RETURN_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    STOCK_RETURN_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: STOCK_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    STOCK_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: STOCK_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    STOCK_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: STOCK_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    STOCK_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: STOCK_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STOCK_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: STOCK_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    STOCK_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the quantity
     *
     * @generated from enum value: STOCK_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    STOCK_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11
}
/**
 *
 * Describes the applicable statuses of stock return items
 *
 * @generated from enum Scailo.STOCK_RETURN_ITEM_STATUS
 */
export declare enum STOCK_RETURN_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: STOCK_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    STOCK_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the stock return items must have been approved
     *
     * @generated from enum value: STOCK_RETURN_ITEM_STATUS_APPROVED = 1;
     */
    STOCK_RETURN_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the stock return items must be waiting for approval
     *
     * @generated from enum value: STOCK_RETURN_ITEM_STATUS_UNAPPROVED = 2;
     */
    STOCK_RETURN_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.StockReturnsServiceCreateRequest
 */
export declare class StockReturnsServiceCreateRequest extends Message<StockReturnsServiceCreateRequest> {
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
     * The reference ID of the stock return
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.STOCK_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: STOCK_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<StockReturnsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServiceCreateRequest;
    static equals(a: StockReturnsServiceCreateRequest | PlainMessage<StockReturnsServiceCreateRequest> | undefined, b: StockReturnsServiceCreateRequest | PlainMessage<StockReturnsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.StockReturnsServiceUpdateRequest
 */
export declare class StockReturnsServiceUpdateRequest extends Message<StockReturnsServiceUpdateRequest> {
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
     * The reference ID of the stock return
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
    constructor(data?: PartialMessage<StockReturnsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServiceUpdateRequest;
    static equals(a: StockReturnsServiceUpdateRequest | PlainMessage<StockReturnsServiceUpdateRequest> | undefined, b: StockReturnsServiceUpdateRequest | PlainMessage<StockReturnsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.StockReturn
 */
export declare class StockReturn extends Message<StockReturn> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this stock return
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
     * The status of this stock return
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this stock return
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this stock return was marked as completed
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
     * The reference ID of the stock return
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
     * The associated reference
     *
     * @generated from field: Scailo.STOCK_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: STOCK_RETURN_REF_FROM;
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
     * The list of associated stock return items
     *
     * @generated from field: repeated Scailo.StockReturnItem list = 20;
     */
    list: StockReturnItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<StockReturn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturn;
    static equals(a: StockReturn | PlainMessage<StockReturn> | undefined, b: StockReturn | PlainMessage<StockReturn> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a stock return
 *
 * @generated from message Scailo.StockReturnsServiceItemCreateRequest
 */
export declare class StockReturnsServiceItemCreateRequest extends Message<StockReturnsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the stock return ID
     *
     * @generated from field: uint64 stock_return_id = 10;
     */
    stockReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    /**
     * The remaining dimensions of the item (if applicable)
     *
     * @generated from field: string remaining_dimensions = 14;
     */
    remainingDimensions: string;
    constructor(data?: PartialMessage<StockReturnsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServiceItemCreateRequest;
    static equals(a: StockReturnsServiceItemCreateRequest | PlainMessage<StockReturnsServiceItemCreateRequest> | undefined, b: StockReturnsServiceItemCreateRequest | PlainMessage<StockReturnsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a stock return
 *
 * @generated from message Scailo.StockReturnsServiceItemUpdateRequest
 */
export declare class StockReturnsServiceItemUpdateRequest extends Message<StockReturnsServiceItemUpdateRequest> {
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
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    /**
     * The remaining dimensions of the item (if applicable)
     *
     * @generated from field: string remaining_dimensions = 14;
     */
    remainingDimensions: string;
    constructor(data?: PartialMessage<StockReturnsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServiceItemUpdateRequest;
    static equals(a: StockReturnsServiceItemUpdateRequest | PlainMessage<StockReturnsServiceItemUpdateRequest> | undefined, b: StockReturnsServiceItemUpdateRequest | PlainMessage<StockReturnsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a stock return
 *
 * @generated from message Scailo.StockReturnItem
 */
export declare class StockReturnItem extends Message<StockReturnItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this stock return
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
     * Stores the stock return ID
     *
     * @generated from field: uint64 stock_return_id = 10;
     */
    stockReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    /**
     * The remaining dimensions of the item (if applicable)
     *
     * @generated from field: string remaining_dimensions = 14;
     */
    remainingDimensions: string;
    constructor(data?: PartialMessage<StockReturnItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnItem;
    static equals(a: StockReturnItem | PlainMessage<StockReturnItem> | undefined, b: StockReturnItem | PlainMessage<StockReturnItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of stock returns
 *
 * @generated from message Scailo.StockReturnsList
 */
export declare class StockReturnsList extends Message<StockReturnsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.StockReturn list = 1;
     */
    list: StockReturn[];
    constructor(data?: PartialMessage<StockReturnsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsList;
    static equals(a: StockReturnsList | PlainMessage<StockReturnsList> | undefined, b: StockReturnsList | PlainMessage<StockReturnsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of stock return items
 *
 * @generated from message Scailo.StockReturnsItemsList
 */
export declare class StockReturnsItemsList extends Message<StockReturnsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.StockReturnItem list = 1;
     */
    list: StockReturnItem[];
    constructor(data?: PartialMessage<StockReturnsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsItemsList;
    static equals(a: StockReturnsItemsList | PlainMessage<StockReturnsItemsList> | undefined, b: StockReturnsItemsList | PlainMessage<StockReturnsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.StockReturnItemHistoryRequest
 */
export declare class StockReturnItemHistoryRequest extends Message<StockReturnItemHistoryRequest> {
    /**
     * Stores the stock return ID
     *
     * @generated from field: uint64 stock_return_id = 10;
     */
    stockReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StockReturnItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnItemHistoryRequest;
    static equals(a: StockReturnItemHistoryRequest | PlainMessage<StockReturnItemHistoryRequest> | undefined, b: StockReturnItemHistoryRequest | PlainMessage<StockReturnItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective stock return item
 *
 * @generated from message Scailo.StockReturnItemProspectiveInfoRequest
 */
export declare class StockReturnItemProspectiveInfoRequest extends Message<StockReturnItemProspectiveInfoRequest> {
    /**
     * Stores the stock return ID
     *
     * @generated from field: uint64 stock_return_id = 10;
     */
    stockReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StockReturnItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnItemProspectiveInfoRequest;
    static equals(a: StockReturnItemProspectiveInfoRequest | PlainMessage<StockReturnItemProspectiveInfoRequest> | undefined, b: StockReturnItemProspectiveInfoRequest | PlainMessage<StockReturnItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.StockReturnsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class StockReturnsServiceAlreadyAddedQuantityForSourceRequest extends Message<StockReturnsServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.STOCK_RETURN_REF_FROM ref_from = 1;
     */
    refFrom: STOCK_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<StockReturnsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: StockReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<StockReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: StockReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<StockReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.StockReturnsServicePaginationReq
 */
export declare class StockReturnsServicePaginationReq extends Message<StockReturnsServicePaginationReq> {
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
     * @generated from field: Scailo.STOCK_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_RETURN_SORT_KEY;
    /**
     * The status of this stock return
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<StockReturnsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServicePaginationReq;
    static equals(a: StockReturnsServicePaginationReq | PlainMessage<StockReturnsServicePaginationReq> | undefined, b: StockReturnsServicePaginationReq | PlainMessage<StockReturnsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.StockReturnsServicePaginationResponse
 */
export declare class StockReturnsServicePaginationResponse extends Message<StockReturnsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.StockReturn payload = 4;
     */
    payload: StockReturn[];
    constructor(data?: PartialMessage<StockReturnsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServicePaginationResponse;
    static equals(a: StockReturnsServicePaginationResponse | PlainMessage<StockReturnsServicePaginationResponse> | undefined, b: StockReturnsServicePaginationResponse | PlainMessage<StockReturnsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.StockReturnsServiceFilterReq
 */
export declare class StockReturnsServiceFilterReq extends Message<StockReturnsServiceFilterReq> {
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
     * @generated from field: Scailo.STOCK_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_RETURN_SORT_KEY;
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
     * The status of this stock return
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
     * The reference ID of the stock return
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
     * The associated reference
     *
     * @generated from field: Scailo.STOCK_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: STOCK_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<StockReturnsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServiceFilterReq;
    static equals(a: StockReturnsServiceFilterReq | PlainMessage<StockReturnsServiceFilterReq> | undefined, b: StockReturnsServiceFilterReq | PlainMessage<StockReturnsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.StockReturnsServiceCountReq
 */
export declare class StockReturnsServiceCountReq extends Message<StockReturnsServiceCountReq> {
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
     * The status of this stock return
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
     * The reference ID of the stock return
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
     * The associated reference
     *
     * @generated from field: Scailo.STOCK_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: STOCK_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<StockReturnsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServiceCountReq;
    static equals(a: StockReturnsServiceCountReq | PlainMessage<StockReturnsServiceCountReq> | undefined, b: StockReturnsServiceCountReq | PlainMessage<StockReturnsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.StockReturnsServiceSearchAllReq
 */
export declare class StockReturnsServiceSearchAllReq extends Message<StockReturnsServiceSearchAllReq> {
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
     * @generated from field: Scailo.STOCK_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_RETURN_SORT_KEY;
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
     * The associated reference
     *
     * @generated from field: Scailo.STOCK_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: STOCK_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    constructor(data?: PartialMessage<StockReturnsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServiceSearchAllReq;
    static equals(a: StockReturnsServiceSearchAllReq | PlainMessage<StockReturnsServiceSearchAllReq> | undefined, b: StockReturnsServiceSearchAllReq | PlainMessage<StockReturnsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.StockReturnItemsSearchRequest
 */
export declare class StockReturnItemsSearchRequest extends Message<StockReturnItemsSearchRequest> {
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
     * @generated from field: Scailo.STOCK_RETURN_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_RETURN_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.STOCK_RETURN_ITEM_STATUS status = 7;
     */
    status: STOCK_RETURN_ITEM_STATUS;
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
     * The ID of the stock return
     *
     * @generated from field: uint64 stock_return_id = 20;
     */
    stockReturnId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * Stores the item hash
     *
     * @generated from field: string item_hash = 22;
     */
    itemHash: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<StockReturnItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnItemsSearchRequest;
    static equals(a: StockReturnItemsSearchRequest | PlainMessage<StockReturnItemsSearchRequest> | undefined, b: StockReturnItemsSearchRequest | PlainMessage<StockReturnItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.StockReturnsServicePaginatedItemsResponse
 */
export declare class StockReturnsServicePaginatedItemsResponse extends Message<StockReturnsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.StockReturnItem payload = 4;
     */
    payload: StockReturnItem[];
    constructor(data?: PartialMessage<StockReturnsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockReturnsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockReturnsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockReturnsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockReturnsServicePaginatedItemsResponse;
    static equals(a: StockReturnsServicePaginatedItemsResponse | PlainMessage<StockReturnsServicePaginatedItemsResponse> | undefined, b: StockReturnsServicePaginatedItemsResponse | PlainMessage<StockReturnsServicePaginatedItemsResponse> | undefined): boolean;
}
//# sourceMappingURL=stock_returns.scailo_pb.d.ts.map
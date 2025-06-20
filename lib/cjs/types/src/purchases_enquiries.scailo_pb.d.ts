import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_ENQUIRY_ITEM_SORT_KEY
 */
export declare enum PURCHASE_ENQUIRY_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_NAME = 10;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the quantity
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_QUANTITY = 11;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_QUANTITY = 11,
    /**
     * Fetch ordered results by the required by date
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_SORT_KEY_REQUIRED_BY_DATE = 12;
     */
    PURCHASE_ENQUIRY_ITEM_SORT_KEY_REQUIRED_BY_DATE = 12
}
/**
 *
 * Describes the applicable statuses of purchase enquiry items
 *
 * @generated from enum Scailo.PURCHASE_ENQUIRY_ITEM_STATUS
 */
export declare enum PURCHASE_ENQUIRY_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the purchase enquiry items must have been approved
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_STATUS_APPROVED = 1;
     */
    PURCHASE_ENQUIRY_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the purchase enquiry items must be waiting for approval
     *
     * @generated from enum value: PURCHASE_ENQUIRY_ITEM_STATUS_UNAPPROVED = 2;
     */
    PURCHASE_ENQUIRY_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_ENQUIRY_SORT_KEY
 */
export declare enum PURCHASE_ENQUIRY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_ENQUIRY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_ENQUIRY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_ENQUIRY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_ENQUIRY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_ENQUIRY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_ENQUIRY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_COMPLETED_ON = 6;
     */
    PURCHASE_ENQUIRY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_REFERENCE_ID = 10;
     */
    PURCHASE_ENQUIRY_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PURCHASE_ENQUIRY_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the priority
     *
     * @generated from enum value: PURCHASE_ENQUIRY_SORT_KEY_PRIORITY = 14;
     */
    PURCHASE_ENQUIRY_SORT_KEY_PRIORITY = 14
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.PurchasesEnquiriesServiceCreateRequest
 */
export declare class PurchasesEnquiriesServiceCreateRequest extends Message<PurchasesEnquiriesServiceCreateRequest> {
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
     * The reference ID of the purchase enquiry
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The priority of the purchase enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The description of the purchase enquiry
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
    constructor(data?: PartialMessage<PurchasesEnquiriesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceCreateRequest;
    static equals(a: PurchasesEnquiriesServiceCreateRequest | PlainMessage<PurchasesEnquiriesServiceCreateRequest> | undefined, b: PurchasesEnquiriesServiceCreateRequest | PlainMessage<PurchasesEnquiriesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.PurchasesEnquiriesServiceUpdateRequest
 */
export declare class PurchasesEnquiriesServiceUpdateRequest extends Message<PurchasesEnquiriesServiceUpdateRequest> {
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
     * The reference ID of the purchase enquiry
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The priority of the purchase enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The description of the purchase enquiry
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
    constructor(data?: PartialMessage<PurchasesEnquiriesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceUpdateRequest;
    static equals(a: PurchasesEnquiriesServiceUpdateRequest | PlainMessage<PurchasesEnquiriesServiceUpdateRequest> | undefined, b: PurchasesEnquiriesServiceUpdateRequest | PlainMessage<PurchasesEnquiriesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.PurchaseEnquiry
 */
export declare class PurchaseEnquiry extends Message<PurchaseEnquiry> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase enquiry
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
     * The status of this purchase enquiry
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this purchase enquiry
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this purchase enquiry was marked as completed
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
     * The reference ID of the purchase enquiry
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
     * The priority of the purchase enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The description of the purchase enquiry
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of associated purchase enquiry items
     *
     * @generated from field: repeated Scailo.PurchaseEnquiryItem list = 20;
     */
    list: PurchaseEnquiryItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<PurchaseEnquiry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseEnquiry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseEnquiry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseEnquiry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseEnquiry;
    static equals(a: PurchaseEnquiry | PlainMessage<PurchaseEnquiry> | undefined, b: PurchaseEnquiry | PlainMessage<PurchaseEnquiry> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a purchase enquiry
 *
 * @generated from message Scailo.PurchasesEnquiriesServiceItemCreateRequest
 */
export declare class PurchasesEnquiriesServiceItemCreateRequest extends Message<PurchasesEnquiriesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the purchase enquiry ID
     *
     * @generated from field: uint64 purchase_enquiry_id = 10;
     */
    purchaseEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The required by date
     *
     * @generated from field: string required_by = 18;
     */
    requiredBy: string;
    /**
     * The description of the item
     *
     * @generated from field: string description = 19;
     */
    description: string;
    constructor(data?: PartialMessage<PurchasesEnquiriesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceItemCreateRequest;
    static equals(a: PurchasesEnquiriesServiceItemCreateRequest | PlainMessage<PurchasesEnquiriesServiceItemCreateRequest> | undefined, b: PurchasesEnquiriesServiceItemCreateRequest | PlainMessage<PurchasesEnquiriesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a purchase enquiry
 *
 * @generated from message Scailo.PurchasesEnquiriesServiceItemUpdateRequest
 */
export declare class PurchasesEnquiriesServiceItemUpdateRequest extends Message<PurchasesEnquiriesServiceItemUpdateRequest> {
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
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The required by date
     *
     * @generated from field: string required_by = 18;
     */
    requiredBy: string;
    /**
     * The description of the item
     *
     * @generated from field: string description = 19;
     */
    description: string;
    constructor(data?: PartialMessage<PurchasesEnquiriesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceItemUpdateRequest;
    static equals(a: PurchasesEnquiriesServiceItemUpdateRequest | PlainMessage<PurchasesEnquiriesServiceItemUpdateRequest> | undefined, b: PurchasesEnquiriesServiceItemUpdateRequest | PlainMessage<PurchasesEnquiriesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a purchase enquiry
 *
 * @generated from message Scailo.PurchaseEnquiryItem
 */
export declare class PurchaseEnquiryItem extends Message<PurchaseEnquiryItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase enquiry
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
     * Stores the purchase enquiry ID
     *
     * @generated from field: uint64 purchase_enquiry_id = 10;
     */
    purchaseEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The required by date
     *
     * @generated from field: string required_by = 18;
     */
    requiredBy: string;
    /**
     * The description of the item
     *
     * @generated from field: string description = 19;
     */
    description: string;
    constructor(data?: PartialMessage<PurchaseEnquiryItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseEnquiryItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseEnquiryItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseEnquiryItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseEnquiryItem;
    static equals(a: PurchaseEnquiryItem | PlainMessage<PurchaseEnquiryItem> | undefined, b: PurchaseEnquiryItem | PlainMessage<PurchaseEnquiryItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchases enquiries
 *
 * @generated from message Scailo.PurchasesEnquiriesList
 */
export declare class PurchasesEnquiriesList extends Message<PurchasesEnquiriesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseEnquiry list = 1;
     */
    list: PurchaseEnquiry[];
    constructor(data?: PartialMessage<PurchasesEnquiriesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesList;
    static equals(a: PurchasesEnquiriesList | PlainMessage<PurchasesEnquiriesList> | undefined, b: PurchasesEnquiriesList | PlainMessage<PurchasesEnquiriesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchase enquiry items
 *
 * @generated from message Scailo.PurchasesEnquiriesItemsList
 */
export declare class PurchasesEnquiriesItemsList extends Message<PurchasesEnquiriesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseEnquiryItem list = 1;
     */
    list: PurchaseEnquiryItem[];
    constructor(data?: PartialMessage<PurchasesEnquiriesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesItemsList;
    static equals(a: PurchasesEnquiriesItemsList | PlainMessage<PurchasesEnquiriesItemsList> | undefined, b: PurchasesEnquiriesItemsList | PlainMessage<PurchasesEnquiriesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.PurchaseEnquiryItemHistoryRequest
 */
export declare class PurchaseEnquiryItemHistoryRequest extends Message<PurchaseEnquiryItemHistoryRequest> {
    /**
     * Stores the purchase enquiry ID
     *
     * @generated from field: uint64 purchase_enquiry_id = 10;
     */
    purchaseEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<PurchaseEnquiryItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseEnquiryItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseEnquiryItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseEnquiryItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseEnquiryItemHistoryRequest;
    static equals(a: PurchaseEnquiryItemHistoryRequest | PlainMessage<PurchaseEnquiryItemHistoryRequest> | undefined, b: PurchaseEnquiryItemHistoryRequest | PlainMessage<PurchaseEnquiryItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.PurchaseEnquiryItemsSearchRequest
 */
export declare class PurchaseEnquiryItemsSearchRequest extends Message<PurchaseEnquiryItemsSearchRequest> {
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
     * @generated from field: Scailo.PURCHASE_ENQUIRY_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_ENQUIRY_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.PURCHASE_ENQUIRY_ITEM_STATUS status = 7;
     */
    status: PURCHASE_ENQUIRY_ITEM_STATUS;
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
     * Stores the purchase enquiry ID
     *
     * @generated from field: uint64 purchase_enquiry_id = 20;
     */
    purchaseEnquiryId: bigint;
    /**
     * The ID of the unit of material
     *
     * @generated from field: uint64 uom_id = 21;
     */
    uomId: bigint;
    /**
     * The exact required by date of the item in the purchase enquiry
     *
     * @generated from field: string required_by_date_exact = 28;
     */
    requiredByDateExact: string;
    /**
     * The start required by date of the item in the purchase enquiry
     *
     * @generated from field: string required_by_date_start = 29;
     */
    requiredByDateStart: string;
    /**
     * The end required by date of the item in the purchase enquiry
     *
     * @generated from field: string required_by_date_end = 30;
     */
    requiredByDateEnd: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<PurchaseEnquiryItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseEnquiryItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseEnquiryItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseEnquiryItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseEnquiryItemsSearchRequest;
    static equals(a: PurchaseEnquiryItemsSearchRequest | PlainMessage<PurchaseEnquiryItemsSearchRequest> | undefined, b: PurchaseEnquiryItemsSearchRequest | PlainMessage<PurchaseEnquiryItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.PurchaseEnquiriesServicePaginatedItemsResponse
 */
export declare class PurchaseEnquiriesServicePaginatedItemsResponse extends Message<PurchaseEnquiriesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.PurchaseEnquiryItem payload = 4;
     */
    payload: PurchaseEnquiryItem[];
    constructor(data?: PartialMessage<PurchaseEnquiriesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseEnquiriesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseEnquiriesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseEnquiriesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseEnquiriesServicePaginatedItemsResponse;
    static equals(a: PurchaseEnquiriesServicePaginatedItemsResponse | PlainMessage<PurchaseEnquiriesServicePaginatedItemsResponse> | undefined, b: PurchaseEnquiriesServicePaginatedItemsResponse | PlainMessage<PurchaseEnquiriesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.PurchasesEnquiriesServicePaginationReq
 */
export declare class PurchasesEnquiriesServicePaginationReq extends Message<PurchasesEnquiriesServicePaginationReq> {
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
     * @generated from field: Scailo.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_ENQUIRY_SORT_KEY;
    /**
     * The status of this purchase enquiry
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<PurchasesEnquiriesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServicePaginationReq;
    static equals(a: PurchasesEnquiriesServicePaginationReq | PlainMessage<PurchasesEnquiriesServicePaginationReq> | undefined, b: PurchasesEnquiriesServicePaginationReq | PlainMessage<PurchasesEnquiriesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.PurchasesEnquiriesServicePaginationResponse
 */
export declare class PurchasesEnquiriesServicePaginationResponse extends Message<PurchasesEnquiriesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.PurchaseEnquiry payload = 4;
     */
    payload: PurchaseEnquiry[];
    constructor(data?: PartialMessage<PurchasesEnquiriesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServicePaginationResponse;
    static equals(a: PurchasesEnquiriesServicePaginationResponse | PlainMessage<PurchasesEnquiriesServicePaginationResponse> | undefined, b: PurchasesEnquiriesServicePaginationResponse | PlainMessage<PurchasesEnquiriesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.PurchasesEnquiriesServiceFilterReq
 */
export declare class PurchasesEnquiriesServiceFilterReq extends Message<PurchasesEnquiriesServiceFilterReq> {
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
     * @generated from field: Scailo.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_ENQUIRY_SORT_KEY;
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
     * The status of this purchase enquiry
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
     * The reference ID of the purchase enquiry
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
     * The priority of the purchase enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 24;
     */
    priority: string;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<PurchasesEnquiriesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceFilterReq;
    static equals(a: PurchasesEnquiriesServiceFilterReq | PlainMessage<PurchasesEnquiriesServiceFilterReq> | undefined, b: PurchasesEnquiriesServiceFilterReq | PlainMessage<PurchasesEnquiriesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.PurchasesEnquiriesServiceCountReq
 */
export declare class PurchasesEnquiriesServiceCountReq extends Message<PurchasesEnquiriesServiceCountReq> {
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
     * The status of this purchase enquiry
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
     * The reference ID of the purchase enquiry
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
     * The priority of the purchase enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 24;
     */
    priority: string;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<PurchasesEnquiriesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceCountReq;
    static equals(a: PurchasesEnquiriesServiceCountReq | PlainMessage<PurchasesEnquiriesServiceCountReq> | undefined, b: PurchasesEnquiriesServiceCountReq | PlainMessage<PurchasesEnquiriesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.PurchasesEnquiriesServiceSearchAllReq
 */
export declare class PurchasesEnquiriesServiceSearchAllReq extends Message<PurchasesEnquiriesServiceSearchAllReq> {
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
     * @generated from field: Scailo.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_ENQUIRY_SORT_KEY;
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
    constructor(data?: PartialMessage<PurchasesEnquiriesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesEnquiriesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesEnquiriesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesEnquiriesServiceSearchAllReq;
    static equals(a: PurchasesEnquiriesServiceSearchAllReq | PlainMessage<PurchasesEnquiriesServiceSearchAllReq> | undefined, b: PurchasesEnquiriesServiceSearchAllReq | PlainMessage<PurchasesEnquiriesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=purchases_enquiries.scailo_pb.d.ts.map
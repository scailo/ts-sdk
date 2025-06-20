import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_INDENT_SORT_KEY
 */
export declare enum PURCHASE_INDENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_INDENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_INDENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_INDENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_INDENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_COMPLETED_ON = 6;
     */
    PURCHASE_INDENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_REFERENCE_ID = 10;
     */
    PURCHASE_INDENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PURCHASE_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: PURCHASE_INDENT_SORT_KEY_CONSIGNEE_LOCATION_ID = 12;
     */
    PURCHASE_INDENT_SORT_KEY_CONSIGNEE_LOCATION_ID = 12
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_INDENT_ITEM_SORT_KEY
 */
export declare enum PURCHASE_INDENT_ITEM_SORT_KEY {
    /**
     * Fetch invoiced results by id
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch invoiced results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch invoiced results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch invoiced results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch invoiced results by the approved by field
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch invoiced results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch invoiced results by the family ID
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch invoiced results by the internal quantity
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the delivery date
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_SORT_KEY_DELIVERY_DATE = 12;
     */
    PURCHASE_INDENT_ITEM_SORT_KEY_DELIVERY_DATE = 12
}
/**
 *
 * Describes the applicable statuses of purchase indent items
 *
 * @generated from enum Scailo.PURCHASE_INDENT_ITEM_STATUS
 */
export declare enum PURCHASE_INDENT_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_INDENT_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the purchase indent items must have been approved
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_STATUS_APPROVED = 1;
     */
    PURCHASE_INDENT_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the purchase indent items must be waiting for approval
     *
     * @generated from enum value: PURCHASE_INDENT_ITEM_STATUS_UNAPPROVED = 2;
     */
    PURCHASE_INDENT_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.PurchasesIndentsServiceCreateRequest
 */
export declare class PurchasesIndentsServiceCreateRequest extends Message<PurchasesIndentsServiceCreateRequest> {
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
     * The reference ID of the purchase indent
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<PurchasesIndentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceCreateRequest;
    static equals(a: PurchasesIndentsServiceCreateRequest | PlainMessage<PurchasesIndentsServiceCreateRequest> | undefined, b: PurchasesIndentsServiceCreateRequest | PlainMessage<PurchasesIndentsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.PurchasesIndentsServiceUpdateRequest
 */
export declare class PurchasesIndentsServiceUpdateRequest extends Message<PurchasesIndentsServiceUpdateRequest> {
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
     * The reference ID of the purchase indent
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
    constructor(data?: PartialMessage<PurchasesIndentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceUpdateRequest;
    static equals(a: PurchasesIndentsServiceUpdateRequest | PlainMessage<PurchasesIndentsServiceUpdateRequest> | undefined, b: PurchasesIndentsServiceUpdateRequest | PlainMessage<PurchasesIndentsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.PurchasesIndentsServiceAutofillRequest
 */
export declare class PurchasesIndentsServiceAutofillRequest extends Message<PurchasesIndentsServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<PurchasesIndentsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceAutofillRequest;
    static equals(a: PurchasesIndentsServiceAutofillRequest | PlainMessage<PurchasesIndentsServiceAutofillRequest> | undefined, b: PurchasesIndentsServiceAutofillRequest | PlainMessage<PurchasesIndentsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.PurchaseIndent
 */
export declare class PurchaseIndent extends Message<PurchaseIndent> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase indent
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
     * The status of this purchase indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this purchase indent
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this purchase indent was marked as completed
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
     * The reference ID of the purchase indent
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
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The list of associated purchase indent items
     *
     * @generated from field: repeated Scailo.PurchaseIndentItem list = 20;
     */
    list: PurchaseIndentItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<PurchaseIndent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseIndent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseIndent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseIndent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseIndent;
    static equals(a: PurchaseIndent | PlainMessage<PurchaseIndent> | undefined, b: PurchaseIndent | PlainMessage<PurchaseIndent> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a purchase indent
 *
 * @generated from message Scailo.PurchasesIndentsServiceItemCreateRequest
 */
export declare class PurchasesIndentsServiceItemCreateRequest extends Message<PurchasesIndentsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the purchase indent ID
     *
     * @generated from field: uint64 purchase_indent_id = 10;
     */
    purchaseIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<PurchasesIndentsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceItemCreateRequest;
    static equals(a: PurchasesIndentsServiceItemCreateRequest | PlainMessage<PurchasesIndentsServiceItemCreateRequest> | undefined, b: PurchasesIndentsServiceItemCreateRequest | PlainMessage<PurchasesIndentsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an individual item as part of multiple item addition to a purchase indent
 *
 * @generated from message Scailo.PurchasesIndentsServiceMultipleItemsSingleton
 */
export declare class PurchasesIndentsServiceMultipleItemsSingleton extends Message<PurchasesIndentsServiceMultipleItemsSingleton> {
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<PurchasesIndentsServiceMultipleItemsSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceMultipleItemsSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceMultipleItemsSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceMultipleItemsSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceMultipleItemsSingleton;
    static equals(a: PurchasesIndentsServiceMultipleItemsSingleton | PlainMessage<PurchasesIndentsServiceMultipleItemsSingleton> | undefined, b: PurchasesIndentsServiceMultipleItemsSingleton | PlainMessage<PurchasesIndentsServiceMultipleItemsSingleton> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add multiple items to a purchase indent
 *
 * @generated from message Scailo.PurchasesIndentsServiceMultipleItemsCreateRequest
 */
export declare class PurchasesIndentsServiceMultipleItemsCreateRequest extends Message<PurchasesIndentsServiceMultipleItemsCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the purchase indent ID
     *
     * @generated from field: uint64 purchase_indent_id = 10;
     */
    purchaseIndentId: bigint;
    /**
     * List of items
     *
     * @generated from field: repeated Scailo.PurchasesIndentsServiceMultipleItemsSingleton list = 11;
     */
    list: PurchasesIndentsServiceMultipleItemsSingleton[];
    constructor(data?: PartialMessage<PurchasesIndentsServiceMultipleItemsCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceMultipleItemsCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceMultipleItemsCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceMultipleItemsCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceMultipleItemsCreateRequest;
    static equals(a: PurchasesIndentsServiceMultipleItemsCreateRequest | PlainMessage<PurchasesIndentsServiceMultipleItemsCreateRequest> | undefined, b: PurchasesIndentsServiceMultipleItemsCreateRequest | PlainMessage<PurchasesIndentsServiceMultipleItemsCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a purchase indent
 *
 * @generated from message Scailo.PurchasesIndentsServiceItemUpdateRequest
 */
export declare class PurchasesIndentsServiceItemUpdateRequest extends Message<PurchasesIndentsServiceItemUpdateRequest> {
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
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<PurchasesIndentsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceItemUpdateRequest;
    static equals(a: PurchasesIndentsServiceItemUpdateRequest | PlainMessage<PurchasesIndentsServiceItemUpdateRequest> | undefined, b: PurchasesIndentsServiceItemUpdateRequest | PlainMessage<PurchasesIndentsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a purchase indent
 *
 * @generated from message Scailo.PurchaseIndentItem
 */
export declare class PurchaseIndentItem extends Message<PurchaseIndentItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase indent
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
     * Stores the purchase indent ID
     *
     * @generated from field: uint64 purchase_indent_id = 10;
     */
    purchaseIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<PurchaseIndentItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseIndentItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseIndentItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseIndentItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseIndentItem;
    static equals(a: PurchaseIndentItem | PlainMessage<PurchaseIndentItem> | undefined, b: PurchaseIndentItem | PlainMessage<PurchaseIndentItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchases indents
 *
 * @generated from message Scailo.PurchasesIndentsList
 */
export declare class PurchasesIndentsList extends Message<PurchasesIndentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseIndent list = 1;
     */
    list: PurchaseIndent[];
    constructor(data?: PartialMessage<PurchasesIndentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsList;
    static equals(a: PurchasesIndentsList | PlainMessage<PurchasesIndentsList> | undefined, b: PurchasesIndentsList | PlainMessage<PurchasesIndentsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchase indent items
 *
 * @generated from message Scailo.PurchasesIndentsItemsList
 */
export declare class PurchasesIndentsItemsList extends Message<PurchasesIndentsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchaseIndentItem list = 1;
     */
    list: PurchaseIndentItem[];
    constructor(data?: PartialMessage<PurchasesIndentsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsItemsList;
    static equals(a: PurchasesIndentsItemsList | PlainMessage<PurchasesIndentsItemsList> | undefined, b: PurchasesIndentsItemsList | PlainMessage<PurchasesIndentsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.PurchaseIndentItemHistoryRequest
 */
export declare class PurchaseIndentItemHistoryRequest extends Message<PurchaseIndentItemHistoryRequest> {
    /**
     * Stores the purchase indent ID
     *
     * @generated from field: uint64 purchase_indent_id = 10;
     */
    purchaseIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<PurchaseIndentItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseIndentItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseIndentItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseIndentItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseIndentItemHistoryRequest;
    static equals(a: PurchaseIndentItemHistoryRequest | PlainMessage<PurchaseIndentItemHistoryRequest> | undefined, b: PurchaseIndentItemHistoryRequest | PlainMessage<PurchaseIndentItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective purchase indent item
 *
 * @generated from message Scailo.PurchaseIndentItemProspectiveInfoRequest
 */
export declare class PurchaseIndentItemProspectiveInfoRequest extends Message<PurchaseIndentItemProspectiveInfoRequest> {
    /**
     * Stores the purchase indent ID
     *
     * @generated from field: uint64 purchase_indent_id = 10;
     */
    purchaseIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<PurchaseIndentItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseIndentItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseIndentItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseIndentItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseIndentItemProspectiveInfoRequest;
    static equals(a: PurchaseIndentItemProspectiveInfoRequest | PlainMessage<PurchaseIndentItemProspectiveInfoRequest> | undefined, b: PurchaseIndentItemProspectiveInfoRequest | PlainMessage<PurchaseIndentItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.PurchasesIndentsServicePaginationReq
 */
export declare class PurchasesIndentsServicePaginationReq extends Message<PurchasesIndentsServicePaginationReq> {
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
     * @generated from field: Scailo.PURCHASE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_INDENT_SORT_KEY;
    /**
     * The status of this purchase indent
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<PurchasesIndentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServicePaginationReq;
    static equals(a: PurchasesIndentsServicePaginationReq | PlainMessage<PurchasesIndentsServicePaginationReq> | undefined, b: PurchasesIndentsServicePaginationReq | PlainMessage<PurchasesIndentsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.PurchasesIndentsServicePaginationResponse
 */
export declare class PurchasesIndentsServicePaginationResponse extends Message<PurchasesIndentsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.PurchaseIndent payload = 4;
     */
    payload: PurchaseIndent[];
    constructor(data?: PartialMessage<PurchasesIndentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServicePaginationResponse;
    static equals(a: PurchasesIndentsServicePaginationResponse | PlainMessage<PurchasesIndentsServicePaginationResponse> | undefined, b: PurchasesIndentsServicePaginationResponse | PlainMessage<PurchasesIndentsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.PurchasesIndentsServiceFilterReq
 */
export declare class PurchasesIndentsServiceFilterReq extends Message<PurchasesIndentsServiceFilterReq> {
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
     * @generated from field: Scailo.PURCHASE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_INDENT_SORT_KEY;
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
     * The status of this purchase indent
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
     * The exact delivery date of any item in the purchase indent
     *
     * @generated from field: string delivery_date_exact = 17;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of any item in the purchase indent
     *
     * @generated from field: string delivery_date_start = 18;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of any item in the purchase indent
     *
     * @generated from field: string delivery_date_end = 19;
     */
    deliveryDateEnd: string;
    /**
     * The reference ID of the purchase indent
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
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
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
    constructor(data?: PartialMessage<PurchasesIndentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceFilterReq;
    static equals(a: PurchasesIndentsServiceFilterReq | PlainMessage<PurchasesIndentsServiceFilterReq> | undefined, b: PurchasesIndentsServiceFilterReq | PlainMessage<PurchasesIndentsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.PurchasesIndentsServiceCountReq
 */
export declare class PurchasesIndentsServiceCountReq extends Message<PurchasesIndentsServiceCountReq> {
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
     * The status of this purchase indent
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
     * The exact delivery date of any item in the purchase indent
     *
     * @generated from field: string delivery_date_exact = 17;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of any item in the purchase indent
     *
     * @generated from field: string delivery_date_start = 18;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of any item in the purchase indent
     *
     * @generated from field: string delivery_date_end = 19;
     */
    deliveryDateEnd: string;
    /**
     * The reference ID of the purchase indent
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
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
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
    constructor(data?: PartialMessage<PurchasesIndentsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceCountReq;
    static equals(a: PurchasesIndentsServiceCountReq | PlainMessage<PurchasesIndentsServiceCountReq> | undefined, b: PurchasesIndentsServiceCountReq | PlainMessage<PurchasesIndentsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.PurchasesIndentsServiceSearchAllReq
 */
export declare class PurchasesIndentsServiceSearchAllReq extends Message<PurchasesIndentsServiceSearchAllReq> {
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
     * @generated from field: Scailo.PURCHASE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_INDENT_SORT_KEY;
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
     * @generated from field: uint64 consignee_location_id = 20;
     */
    consigneeLocationId: bigint;
    constructor(data?: PartialMessage<PurchasesIndentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServiceSearchAllReq;
    static equals(a: PurchasesIndentsServiceSearchAllReq | PlainMessage<PurchasesIndentsServiceSearchAllReq> | undefined, b: PurchasesIndentsServiceSearchAllReq | PlainMessage<PurchasesIndentsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.PurchaseIndentItemsSearchRequest
 */
export declare class PurchaseIndentItemsSearchRequest extends Message<PurchaseIndentItemsSearchRequest> {
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
     * @generated from field: Scailo.PURCHASE_INDENT_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_INDENT_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.PURCHASE_INDENT_ITEM_STATUS status = 7;
     */
    status: PURCHASE_INDENT_ITEM_STATUS;
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
     * The ID of the purchase indent
     *
     * @generated from field: uint64 purchase_indent_id = 20;
     */
    purchaseIndentId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The exact delivery date of the item in the purchase indent
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the purchase indent
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the purchase indent
     *
     * @generated from field: string delivery_date_end = 30;
     */
    deliveryDateEnd: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<PurchaseIndentItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseIndentItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseIndentItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseIndentItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseIndentItemsSearchRequest;
    static equals(a: PurchaseIndentItemsSearchRequest | PlainMessage<PurchaseIndentItemsSearchRequest> | undefined, b: PurchaseIndentItemsSearchRequest | PlainMessage<PurchaseIndentItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.PurchasesIndentsServicePaginatedItemsResponse
 */
export declare class PurchasesIndentsServicePaginatedItemsResponse extends Message<PurchasesIndentsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.PurchaseIndentItem payload = 4;
     */
    payload: PurchaseIndentItem[];
    constructor(data?: PartialMessage<PurchasesIndentsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesIndentsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesIndentsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesIndentsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesIndentsServicePaginatedItemsResponse;
    static equals(a: PurchasesIndentsServicePaginatedItemsResponse | PlainMessage<PurchasesIndentsServicePaginatedItemsResponse> | undefined, b: PurchasesIndentsServicePaginatedItemsResponse | PlainMessage<PurchasesIndentsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the ordered statistics of the purchase indent
 *
 * @generated from message Scailo.PurchaseIndentOrderedStatistics
 */
export declare class PurchaseIndentOrderedStatistics extends Message<PurchaseIndentOrderedStatistics> {
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
     * Stores the ordered quantity
     *
     * @generated from field: uint64 ordered_quantity = 3;
     */
    orderedQuantity: bigint;
    constructor(data?: PartialMessage<PurchaseIndentOrderedStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseIndentOrderedStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseIndentOrderedStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseIndentOrderedStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseIndentOrderedStatistics;
    static equals(a: PurchaseIndentOrderedStatistics | PlainMessage<PurchaseIndentOrderedStatistics> | undefined, b: PurchaseIndentOrderedStatistics | PlainMessage<PurchaseIndentOrderedStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of ordered statistics of the purchase indent
 *
 * @generated from message Scailo.PurchaseIndentOrderedStatisticsList
 */
export declare class PurchaseIndentOrderedStatisticsList extends Message<PurchaseIndentOrderedStatisticsList> {
    /**
     * @generated from field: repeated Scailo.PurchaseIndentOrderedStatistics list = 1;
     */
    list: PurchaseIndentOrderedStatistics[];
    constructor(data?: PartialMessage<PurchaseIndentOrderedStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchaseIndentOrderedStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseIndentOrderedStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseIndentOrderedStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseIndentOrderedStatisticsList;
    static equals(a: PurchaseIndentOrderedStatisticsList | PlainMessage<PurchaseIndentOrderedStatisticsList> | undefined, b: PurchaseIndentOrderedStatisticsList | PlainMessage<PurchaseIndentOrderedStatisticsList> | undefined): boolean;
}
//# sourceMappingURL=purchases_indents.scailo_pb.d.ts.map
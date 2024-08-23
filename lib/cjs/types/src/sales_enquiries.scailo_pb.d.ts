import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_ENQUIRY_ITEM_SORT_KEY
 */
export declare enum SALES_ENQUIRY_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_NAME = 10;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the unit price
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_UNIT_PRICE = 12;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_UNIT_PRICE = 12,
    /**
     * Fetch ordered results by the discount
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_DISCOUNT = 13;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_DISCOUNT = 13,
    /**
     * Fetch ordered results by the delivery date
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_SORT_KEY_DELIVERY_DATE = 14;
     */
    SALES_ENQUIRY_ITEM_SORT_KEY_DELIVERY_DATE = 14
}
/**
 *
 * Describes the applicable statuses of sales enquiry items
 *
 * @generated from enum Scailo.SALES_ENQUIRY_ITEM_STATUS
 */
export declare enum SALES_ENQUIRY_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the sales enquiry items must have been approved
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_STATUS_APPROVED = 1;
     */
    SALES_ENQUIRY_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the sales enquiry items must be waiting for approval
     *
     * @generated from enum value: SALES_ENQUIRY_ITEM_STATUS_UNAPPROVED = 2;
     */
    SALES_ENQUIRY_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_ENQUIRY_SORT_KEY
 */
export declare enum SALES_ENQUIRY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_CREATED_AT = 1;
     */
    SALES_ENQUIRY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_ENQUIRY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_ENQUIRY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_ENQUIRY_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_ENQUIRY_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the consignee client ID
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_CONSIGNEE_CLIENT_ID = 12;
     */
    SALES_ENQUIRY_SORT_KEY_CONSIGNEE_CLIENT_ID = 12,
    /**
     * Fetch ordered results by the buyer client ID
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_BUYER_CLIENT_ID = 13;
     */
    SALES_ENQUIRY_SORT_KEY_BUYER_CLIENT_ID = 13,
    /**
     * Fetch ordered results by the priority
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_PRIORITY = 14;
     */
    SALES_ENQUIRY_SORT_KEY_PRIORITY = 14,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_AMENDMENT_COUNT = 15;
     */
    SALES_ENQUIRY_SORT_KEY_AMENDMENT_COUNT = 15
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SalesEnquiriesServiceCreateRequest
 */
export declare class SalesEnquiriesServiceCreateRequest extends Message<SalesEnquiriesServiceCreateRequest> {
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
     * The reference ID of the sales enquiry
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the consignee
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the sales enquiry
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The miscellaneous cost (in cents)
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The overall discount (in cents)
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The round off amount (in cents) (both positive and negative values are allowed)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesEnquiriesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCreateRequest;
    static equals(a: SalesEnquiriesServiceCreateRequest | PlainMessage<SalesEnquiriesServiceCreateRequest> | undefined, b: SalesEnquiriesServiceCreateRequest | PlainMessage<SalesEnquiriesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SalesEnquiriesServiceUpdateRequest
 */
export declare class SalesEnquiriesServiceUpdateRequest extends Message<SalesEnquiriesServiceUpdateRequest> {
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
     * The reference ID of the sales enquiry
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the consignee
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the sales enquiry
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The miscellaneous cost (in cents)
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The overall discount (in cents)
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The round off amount (in cents) (both positive and negative values are allowed)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesEnquiriesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static equals(a: SalesEnquiriesServiceUpdateRequest | PlainMessage<SalesEnquiriesServiceUpdateRequest> | undefined, b: SalesEnquiriesServiceUpdateRequest | PlainMessage<SalesEnquiriesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SalesEnquiry
 */
export declare class SalesEnquiry extends Message<SalesEnquiry> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales enquiry
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
     * The status of this sales enquiry
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this sales enquiry
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this sales enquiry was marked as completed
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
     * The reference ID of the sales enquiry
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
     * The ID of the consignee
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the sales enquiry
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The miscellaneous cost (in cents)
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The overall discount (in cents)
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The round off amount (in cents)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The number of times that the sales enquiry has been amended
     *
     * @generated from field: uint64 amendment_count = 20;
     */
    amendmentCount: bigint;
    /**
     * The list of associated sales enquiry items
     *
     * @generated from field: repeated Scailo.SalesEnquiryItem list = 30;
     */
    list: SalesEnquiryItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    /**
     * The total price of the sales enquiry
     *
     * @generated from field: double total_price = 50;
     */
    totalPrice: number;
    constructor(data?: PartialMessage<SalesEnquiry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiry;
    static equals(a: SalesEnquiry | PlainMessage<SalesEnquiry> | undefined, b: SalesEnquiry | PlainMessage<SalesEnquiry> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a sales enquiry
 *
 * @generated from message Scailo.SalesEnquiriesServiceItemCreateRequest
 */
export declare class SalesEnquiriesServiceItemCreateRequest extends Message<SalesEnquiriesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales enquiry ID
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The quantity being offered (in cents)
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The unit price
     *
     * @generated from field: uint64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     * The discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 15;
     */
    discount: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The round off (in cents) (both positive and negative values are allowed)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * The specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static equals(a: SalesEnquiriesServiceItemCreateRequest | PlainMessage<SalesEnquiriesServiceItemCreateRequest> | undefined, b: SalesEnquiriesServiceItemCreateRequest | PlainMessage<SalesEnquiriesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a sales enquiry
 *
 * @generated from message Scailo.SalesEnquiriesServiceItemUpdateRequest
 */
export declare class SalesEnquiriesServiceItemUpdateRequest extends Message<SalesEnquiriesServiceItemUpdateRequest> {
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
     * The quantity being offered (in cents)
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The unit price
     *
     * @generated from field: uint64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     * The discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 15;
     */
    discount: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The round off (in cents) (both positive and negative values are allowed)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * The specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static equals(a: SalesEnquiriesServiceItemUpdateRequest | PlainMessage<SalesEnquiriesServiceItemUpdateRequest> | undefined, b: SalesEnquiriesServiceItemUpdateRequest | PlainMessage<SalesEnquiriesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a sales enquiry
 *
 * @generated from message Scailo.SalesEnquiryItem
 */
export declare class SalesEnquiryItem extends Message<SalesEnquiryItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales enquiry
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
     * Stores the sales enquiry ID
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The quantity being offered (in cents)
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The unit price
     *
     * @generated from field: uint64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     * The discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 15;
     */
    discount: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The round off (in cents)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * The specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<SalesEnquiryItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryItem;
    static equals(a: SalesEnquiryItem | PlainMessage<SalesEnquiryItem> | undefined, b: SalesEnquiryItem | PlainMessage<SalesEnquiryItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales enquiries
 *
 * @generated from message Scailo.SalesEnquiriesList
 */
export declare class SalesEnquiriesList extends Message<SalesEnquiriesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesEnquiry list = 1;
     */
    list: SalesEnquiry[];
    constructor(data?: PartialMessage<SalesEnquiriesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesList;
    static equals(a: SalesEnquiriesList | PlainMessage<SalesEnquiriesList> | undefined, b: SalesEnquiriesList | PlainMessage<SalesEnquiriesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales enquiry items
 *
 * @generated from message Scailo.SalesEnquiriesItemsList
 */
export declare class SalesEnquiriesItemsList extends Message<SalesEnquiriesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesEnquiryItem list = 1;
     */
    list: SalesEnquiryItem[];
    constructor(data?: PartialMessage<SalesEnquiriesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesItemsList;
    static equals(a: SalesEnquiriesItemsList | PlainMessage<SalesEnquiriesItemsList> | undefined, b: SalesEnquiriesItemsList | PlainMessage<SalesEnquiriesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.SalesEnquiryItemHistoryRequest
 */
export declare class SalesEnquiryItemHistoryRequest extends Message<SalesEnquiryItemHistoryRequest> {
    /**
     * Stores the sales enquiry ID
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<SalesEnquiryItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryItemHistoryRequest;
    static equals(a: SalesEnquiryItemHistoryRequest | PlainMessage<SalesEnquiryItemHistoryRequest> | undefined, b: SalesEnquiryItemHistoryRequest | PlainMessage<SalesEnquiryItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.SalesEnquiryItemsSearchRequest
 */
export declare class SalesEnquiryItemsSearchRequest extends Message<SalesEnquiryItemsSearchRequest> {
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
     * @generated from field: Scailo.SALES_ENQUIRY_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ENQUIRY_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.SALES_ENQUIRY_ITEM_STATUS status = 7;
     */
    status: SALES_ENQUIRY_ITEM_STATUS;
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
     * Stores the sales enquiry ID
     *
     * @generated from field: uint64 sales_enquiry_id = 20;
     */
    salesEnquiryId: bigint;
    /**
     * The ID of the unit of material
     *
     * @generated from field: uint64 uom_id = 21;
     */
    uomId: bigint;
    /**
     * The ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 22;
     */
    taxGroupId: bigint;
    /**
     * The exact delivery date of the item in the sales enquiry
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales enquiry
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales enquiry
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
    constructor(data?: PartialMessage<SalesEnquiryItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryItemsSearchRequest;
    static equals(a: SalesEnquiryItemsSearchRequest | PlainMessage<SalesEnquiryItemsSearchRequest> | undefined, b: SalesEnquiryItemsSearchRequest | PlainMessage<SalesEnquiryItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.SalesEnquiriesServicePaginatedItemsResponse
 */
export declare class SalesEnquiriesServicePaginatedItemsResponse extends Message<SalesEnquiriesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.SalesEnquiryItem payload = 4;
     */
    payload: SalesEnquiryItem[];
    constructor(data?: PartialMessage<SalesEnquiriesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginatedItemsResponse;
    static equals(a: SalesEnquiriesServicePaginatedItemsResponse | PlainMessage<SalesEnquiriesServicePaginatedItemsResponse> | undefined, b: SalesEnquiriesServicePaginatedItemsResponse | PlainMessage<SalesEnquiriesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SalesEnquiriesServicePaginationReq
 */
export declare class SalesEnquiriesServicePaginationReq extends Message<SalesEnquiriesServicePaginationReq> {
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
     * @generated from field: Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ENQUIRY_SORT_KEY;
    /**
     * The status of this sales enquiry
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesEnquiriesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationReq;
    static equals(a: SalesEnquiriesServicePaginationReq | PlainMessage<SalesEnquiriesServicePaginationReq> | undefined, b: SalesEnquiriesServicePaginationReq | PlainMessage<SalesEnquiriesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SalesEnquiriesServicePaginationResponse
 */
export declare class SalesEnquiriesServicePaginationResponse extends Message<SalesEnquiriesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SalesEnquiry payload = 4;
     */
    payload: SalesEnquiry[];
    constructor(data?: PartialMessage<SalesEnquiriesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationResponse;
    static equals(a: SalesEnquiriesServicePaginationResponse | PlainMessage<SalesEnquiriesServicePaginationResponse> | undefined, b: SalesEnquiriesServicePaginationResponse | PlainMessage<SalesEnquiriesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SalesEnquiriesServiceFilterReq
 */
export declare class SalesEnquiriesServiceFilterReq extends Message<SalesEnquiriesServiceFilterReq> {
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
     * @generated from field: Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ENQUIRY_SORT_KEY;
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
     * The status of this sales enquiry
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
     * The reference ID of the sales enquiry
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
     * The ID of the consignee
     *
     * @generated from field: uint64 consignee_client_id = 22;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: uint64 buyer_client_id = 23;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 24;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: uint64 currency_id = 25;
     */
    currencyId: bigint;
    /**
     * The exact delivery date of the item in the sales enquiry
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales enquiry
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales enquiry
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceFilterReq;
    static equals(a: SalesEnquiriesServiceFilterReq | PlainMessage<SalesEnquiriesServiceFilterReq> | undefined, b: SalesEnquiriesServiceFilterReq | PlainMessage<SalesEnquiriesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SalesEnquiriesServiceCountReq
 */
export declare class SalesEnquiriesServiceCountReq extends Message<SalesEnquiriesServiceCountReq> {
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
     * The status of this sales enquiry
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
     * The reference ID of the sales enquiry
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
     * The ID of the consignee
     *
     * @generated from field: uint64 consignee_client_id = 22;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: uint64 buyer_client_id = 23;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 24;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: uint64 currency_id = 25;
     */
    currencyId: bigint;
    /**
     * The exact delivery date of the item in the sales enquiry
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales enquiry
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales enquiry
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCountReq;
    static equals(a: SalesEnquiriesServiceCountReq | PlainMessage<SalesEnquiriesServiceCountReq> | undefined, b: SalesEnquiriesServiceCountReq | PlainMessage<SalesEnquiriesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SalesEnquiriesServiceSearchAllReq
 */
export declare class SalesEnquiriesServiceSearchAllReq extends Message<SalesEnquiriesServiceSearchAllReq> {
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
     * @generated from field: Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ENQUIRY_SORT_KEY;
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
     * The ID of the consignee
     *
     * @generated from field: uint64 consignee_client_id = 22;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: uint64 buyer_client_id = 23;
     */
    buyerClientId: bigint;
    constructor(data?: PartialMessage<SalesEnquiriesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static equals(a: SalesEnquiriesServiceSearchAllReq | PlainMessage<SalesEnquiriesServiceSearchAllReq> | undefined, b: SalesEnquiriesServiceSearchAllReq | PlainMessage<SalesEnquiriesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a sales enquiry contact
 *
 * @generated from message Scailo.SalesEnquiriesServiceContactCreateRequest
 */
export declare class SalesEnquiriesServiceContactCreateRequest extends Message<SalesEnquiriesServiceContactCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales enquiry ID
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<SalesEnquiriesServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiriesServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceContactCreateRequest;
    static equals(a: SalesEnquiriesServiceContactCreateRequest | PlainMessage<SalesEnquiriesServiceContactCreateRequest> | undefined, b: SalesEnquiriesServiceContactCreateRequest | PlainMessage<SalesEnquiriesServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a sales enquiry contact
 *
 * @generated from message Scailo.SalesEnquiryContact
 */
export declare class SalesEnquiryContact extends Message<SalesEnquiryContact> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales enquiry
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
     * Stores the sales enquiry ID
     *
     * @generated from field: uint64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<SalesEnquiryContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryContact;
    static equals(a: SalesEnquiryContact | PlainMessage<SalesEnquiryContact> | undefined, b: SalesEnquiryContact | PlainMessage<SalesEnquiryContact> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales enquiry contacts
 *
 * @generated from message Scailo.SalesEnquiryContactsList
 */
export declare class SalesEnquiryContactsList extends Message<SalesEnquiryContactsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesEnquiryContact list = 1;
     */
    list: SalesEnquiryContact[];
    constructor(data?: PartialMessage<SalesEnquiryContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesEnquiryContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryContactsList;
    static equals(a: SalesEnquiryContactsList | PlainMessage<SalesEnquiryContactsList> | undefined, b: SalesEnquiryContactsList | PlainMessage<SalesEnquiryContactsList> | undefined): boolean;
}
//# sourceMappingURL=sales_enquiries.scailo_pb.d.ts.map
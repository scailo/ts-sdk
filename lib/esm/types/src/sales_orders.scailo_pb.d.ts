import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_ORDER_SORT_KEY
 */
export declare enum SALES_ORDER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_ORDER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_CREATED_AT = 1;
     */
    SALES_ORDER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_ORDER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_ORDER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_ORDER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_ORDER_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_ORDER_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_ORDER_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the consignee client ID
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_CONSIGNEE_CLIENT_ID = 12;
     */
    SALES_ORDER_SORT_KEY_CONSIGNEE_CLIENT_ID = 12,
    /**
     * Fetch ordered results by the buyer client ID
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_BUYER_CLIENT_ID = 13;
     */
    SALES_ORDER_SORT_KEY_BUYER_CLIENT_ID = 13,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_LOCATION_ID = 14;
     */
    SALES_ORDER_SORT_KEY_LOCATION_ID = 14,
    /**
     * Fetch ordered results by the currency ID
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_CURRENCY_ID = 15;
     */
    SALES_ORDER_SORT_KEY_CURRENCY_ID = 15,
    /**
     * Fetch ordered results by the project ID
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_PROJECT_ID = 16;
     */
    SALES_ORDER_SORT_KEY_PROJECT_ID = 16,
    /**
     * Fetch ordered results by the advance payment
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_PAYMENT_ADVANCE = 17;
     */
    SALES_ORDER_SORT_KEY_PAYMENT_ADVANCE = 17,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    SALES_ORDER_SORT_KEY_AMENDMENT_COUNT = 18,
    /**
     * Fetch ordered results by the total value
     *
     * @generated from enum value: SALES_ORDER_SORT_KEY_TOTAL_VALUE = 30;
     */
    SALES_ORDER_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Describes the sales order reference context
 *
 * @generated from enum Scailo.SALES_ORDER_REFERENCE_CONTEXT
 */
export declare enum SALES_ORDER_REFERENCE_CONTEXT {
    /**
     * Denotes that context be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0;
     */
    SALES_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0,
    /**
     * Denotes billing context
     *
     * @generated from enum value: SALES_ORDER_REFERENCE_CONTEXT_BILLING = 1;
     */
    SALES_ORDER_REFERENCE_CONTEXT_BILLING = 1
}
/**
 *
 * Describes the possible options for ref_from field for a sales order reference
 *
 * @generated from enum Scailo.SALES_ORDER_REFERENCE_REF_FROM
 */
export declare enum SALES_ORDER_REFERENCE_REF_FROM {
    /**
     * Denotes that the ref from be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_ORDER_REFERENCE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    SALES_ORDER_REFERENCE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes inward job
     *
     * @generated from enum value: SALES_ORDER_REFERENCE_REF_FROM_INWARD_JOB = 1;
     */
    SALES_ORDER_REFERENCE_REF_FROM_INWARD_JOB = 1,
    /**
     * Denotes sales enquiry
     *
     * @generated from enum value: SALES_ORDER_REFERENCE_REF_FROM_SALES_ENQUIRY = 2;
     */
    SALES_ORDER_REFERENCE_REF_FROM_SALES_ENQUIRY = 2,
    /**
     * Denotes sales quotation
     *
     * @generated from enum value: SALES_ORDER_REFERENCE_REF_FROM_SALES_QUOTATION = 3;
     */
    SALES_ORDER_REFERENCE_REF_FROM_SALES_QUOTATION = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_ORDER_ITEM_SORT_KEY
 */
export declare enum SALES_ORDER_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SALES_ORDER_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    SALES_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SALES_ORDER_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the client unit of material ID
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    SALES_ORDER_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch ordered results by the client quantity
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    SALES_ORDER_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * Fetch ordered results by the client family code
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    SALES_ORDER_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * Fetch ordered results by the unit price
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_UNIT_PRICE = 15;
     */
    SALES_ORDER_ITEM_SORT_KEY_UNIT_PRICE = 15,
    /**
     * Fetch ordered results by the tax group ID
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    SALES_ORDER_ITEM_SORT_KEY_TAX_GROUP_ID = 16,
    /**
     * Fetch ordered results by the discount
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_DISCOUNT = 17;
     */
    SALES_ORDER_ITEM_SORT_KEY_DISCOUNT = 17,
    /**
     * Fetch ordered results by the delivery date
     *
     * @generated from enum value: SALES_ORDER_ITEM_SORT_KEY_DELIVERY_DATE = 18;
     */
    SALES_ORDER_ITEM_SORT_KEY_DELIVERY_DATE = 18
}
/**
 *
 * Describes the applicable statuses of sales order items
 *
 * @generated from enum Scailo.SALES_ORDER_ITEM_STATUS
 */
export declare enum SALES_ORDER_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_ORDER_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_ORDER_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the sales order items must have been approved
     *
     * @generated from enum value: SALES_ORDER_ITEM_STATUS_APPROVED = 1;
     */
    SALES_ORDER_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the sales order items must be waiting for approval
     *
     * @generated from enum value: SALES_ORDER_ITEM_STATUS_UNAPPROVED = 2;
     */
    SALES_ORDER_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SalesOrdersServiceCreateRequest
 */
export declare class SalesOrdersServiceCreateRequest extends Message<SalesOrdersServiceCreateRequest> {
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
     * The reference ID of the sales order
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the consignee (client)
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer (client)
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The amount paid in advance
     *
     * @generated from field: uint64 payment_advance = 20;
     */
    paymentAdvance: bigint;
    /**
     * The payment cycle in days
     *
     * @generated from field: uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesOrdersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceCreateRequest;
    static equals(a: SalesOrdersServiceCreateRequest | PlainMessage<SalesOrdersServiceCreateRequest> | undefined, b: SalesOrdersServiceCreateRequest | PlainMessage<SalesOrdersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SalesOrdersServiceUpdateRequest
 */
export declare class SalesOrdersServiceUpdateRequest extends Message<SalesOrdersServiceUpdateRequest> {
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
     * The reference ID of the sales order
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the consignee (client)
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer (client)
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The amount paid in advance
     *
     * @generated from field: uint64 payment_advance = 20;
     */
    paymentAdvance: bigint;
    /**
     * The payment cycle in days
     *
     * @generated from field: uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesOrdersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceUpdateRequest;
    static equals(a: SalesOrdersServiceUpdateRequest | PlainMessage<SalesOrdersServiceUpdateRequest> | undefined, b: SalesOrdersServiceUpdateRequest | PlainMessage<SalesOrdersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.SalesOrdersServiceAutofillRequest
 */
export declare class SalesOrdersServiceAutofillRequest extends Message<SalesOrdersServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<SalesOrdersServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceAutofillRequest;
    static equals(a: SalesOrdersServiceAutofillRequest | PlainMessage<SalesOrdersServiceAutofillRequest> | undefined, b: SalesOrdersServiceAutofillRequest | PlainMessage<SalesOrdersServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SalesOrder
 */
export declare class SalesOrder extends Message<SalesOrder> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales order
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
     * The status of this sales order
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this sales order
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this sales order was marked as completed
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
     * The reference ID of the sales order
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
     * The ID of the consignee (client)
     *
     * @generated from field: uint64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer (client)
     *
     * @generated from field: uint64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The amount paid in advance
     *
     * @generated from field: uint64 payment_advance = 20;
     */
    paymentAdvance: bigint;
    /**
     * The payment cycle in days
     *
     * @generated from field: uint64 payment_cycle_in_days = 21;
     */
    paymentCycleInDays: bigint;
    /**
     * The number of times that the sales order has been amended
     *
     * @generated from field: uint64 amendment_count = 22;
     */
    amendmentCount: bigint;
    /**
     * Stores the total value of the sales order (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 30;
     */
    totalValue: number;
    /**
     * The list of associated sales order items
     *
     * @generated from field: repeated Scailo.SalesOrderItem list = 40;
     */
    list: SalesOrderItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 50;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SalesOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrder;
    static equals(a: SalesOrder | PlainMessage<SalesOrder> | undefined, b: SalesOrder | PlainMessage<SalesOrder> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a sales order
 *
 * @generated from message Scailo.SalesOrdersServiceItemCreateRequest
 */
export declare class SalesOrdersServiceItemCreateRequest extends Message<SalesOrdersServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales order ID
     *
     * @generated from field: uint64 sales_order_id = 10;
     */
    salesOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being ordered in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     * Stores the family code as given by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    /**
     * Stores if the item can be invoiced
     *
     * @generated from field: bool is_invoiceable = 22;
     */
    isInvoiceable: boolean;
    constructor(data?: PartialMessage<SalesOrdersServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceItemCreateRequest;
    static equals(a: SalesOrdersServiceItemCreateRequest | PlainMessage<SalesOrdersServiceItemCreateRequest> | undefined, b: SalesOrdersServiceItemCreateRequest | PlainMessage<SalesOrdersServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a sales order
 *
 * @generated from message Scailo.SalesOrdersServiceItemUpdateRequest
 */
export declare class SalesOrdersServiceItemUpdateRequest extends Message<SalesOrdersServiceItemUpdateRequest> {
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
     * The quantity (in cents) being ordered in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     * Stores the family code as given by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    /**
     * Stores if the item can be invoiced
     *
     * @generated from field: bool is_invoiceable = 22;
     */
    isInvoiceable: boolean;
    constructor(data?: PartialMessage<SalesOrdersServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceItemUpdateRequest;
    static equals(a: SalesOrdersServiceItemUpdateRequest | PlainMessage<SalesOrdersServiceItemUpdateRequest> | undefined, b: SalesOrdersServiceItemUpdateRequest | PlainMessage<SalesOrdersServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a sales order
 *
 * @generated from message Scailo.SalesOrderItem
 */
export declare class SalesOrderItem extends Message<SalesOrderItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales order
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
     * Stores the sales order ID
     *
     * @generated from field: uint64 sales_order_id = 10;
     */
    salesOrderId: bigint;
    /**
     * Stores the ID of the sales orderder item with which this item is bundled with
     *
     * @generated from field: uint64 bundled_with_id = 11;
     */
    bundledWithId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being ordered in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     * Stores the family code as given by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    /**
     * Stores if the item can be invoiced
     *
     * @generated from field: bool is_invoiceable = 22;
     */
    isInvoiceable: boolean;
    /**
     * Stores the unit price after factoring in the discount
     *
     * @generated from field: uint64 discounted_unit_price = 30;
     */
    discountedUnitPrice: bigint;
    constructor(data?: PartialMessage<SalesOrderItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderItem;
    static equals(a: SalesOrderItem | PlainMessage<SalesOrderItem> | undefined, b: SalesOrderItem | PlainMessage<SalesOrderItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales orders
 *
 * @generated from message Scailo.SalesOrdersList
 */
export declare class SalesOrdersList extends Message<SalesOrdersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesOrder list = 1;
     */
    list: SalesOrder[];
    constructor(data?: PartialMessage<SalesOrdersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersList;
    static equals(a: SalesOrdersList | PlainMessage<SalesOrdersList> | undefined, b: SalesOrdersList | PlainMessage<SalesOrdersList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales order items
 *
 * @generated from message Scailo.SalesOrderItemsList
 */
export declare class SalesOrderItemsList extends Message<SalesOrderItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesOrderItem list = 1;
     */
    list: SalesOrderItem[];
    constructor(data?: PartialMessage<SalesOrderItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderItemsList;
    static equals(a: SalesOrderItemsList | PlainMessage<SalesOrderItemsList> | undefined, b: SalesOrderItemsList | PlainMessage<SalesOrderItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.SalesOrderItemHistoryRequest
 */
export declare class SalesOrderItemHistoryRequest extends Message<SalesOrderItemHistoryRequest> {
    /**
     * Stores the sales order ID
     *
     * @generated from field: uint64 sales_order_id = 10;
     */
    salesOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesOrderItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderItemHistoryRequest;
    static equals(a: SalesOrderItemHistoryRequest | PlainMessage<SalesOrderItemHistoryRequest> | undefined, b: SalesOrderItemHistoryRequest | PlainMessage<SalesOrderItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective sales order item
 *
 * @generated from message Scailo.SalesOrderItemProspectiveInfoRequest
 */
export declare class SalesOrderItemProspectiveInfoRequest extends Message<SalesOrderItemProspectiveInfoRequest> {
    /**
     * Stores the sales order ID
     *
     * @generated from field: uint64 sales_order_id = 10;
     */
    salesOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the ID of the client's unit of material (if 0, the value is ignored while retrieving records)
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    constructor(data?: PartialMessage<SalesOrderItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderItemProspectiveInfoRequest;
    static equals(a: SalesOrderItemProspectiveInfoRequest | PlainMessage<SalesOrderItemProspectiveInfoRequest> | undefined, b: SalesOrderItemProspectiveInfoRequest | PlainMessage<SalesOrderItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SalesOrdersServicePaginationReq
 */
export declare class SalesOrdersServicePaginationReq extends Message<SalesOrdersServicePaginationReq> {
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
     * @generated from field: Scailo.SALES_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ORDER_SORT_KEY;
    /**
     * The status of this sales order
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesOrdersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServicePaginationReq;
    static equals(a: SalesOrdersServicePaginationReq | PlainMessage<SalesOrdersServicePaginationReq> | undefined, b: SalesOrdersServicePaginationReq | PlainMessage<SalesOrdersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SalesOrdersServicePaginationResponse
 */
export declare class SalesOrdersServicePaginationResponse extends Message<SalesOrdersServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SalesOrder payload = 4;
     */
    payload: SalesOrder[];
    constructor(data?: PartialMessage<SalesOrdersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServicePaginationResponse;
    static equals(a: SalesOrdersServicePaginationResponse | PlainMessage<SalesOrdersServicePaginationResponse> | undefined, b: SalesOrdersServicePaginationResponse | PlainMessage<SalesOrdersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SalesOrdersServiceFilterReq
 */
export declare class SalesOrdersServiceFilterReq extends Message<SalesOrdersServiceFilterReq> {
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
     * @generated from field: Scailo.SALES_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ORDER_SORT_KEY;
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
     * The status of this sales order
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
     * The reference ID of the sales order
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
     * The associated consignee client ID
     *
     * @generated from field: uint64 consignee_client_id = 22;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID
     *
     * @generated from field: uint64 buyer_client_id = 23;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 25;
     */
    currencyId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The exact delivery date of the item in the sales order
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales order
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales order
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    /**
     * Stores the minimum value of the sales order (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 50;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the sales order (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 51;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<SalesOrdersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceFilterReq;
    static equals(a: SalesOrdersServiceFilterReq | PlainMessage<SalesOrdersServiceFilterReq> | undefined, b: SalesOrdersServiceFilterReq | PlainMessage<SalesOrdersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SalesOrdersServiceCountReq
 */
export declare class SalesOrdersServiceCountReq extends Message<SalesOrdersServiceCountReq> {
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
     * The status of this sales order
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
     * The reference ID of the sales order
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
     * The associated consignee client ID
     *
     * @generated from field: uint64 consignee_client_id = 22;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID
     *
     * @generated from field: uint64 buyer_client_id = 23;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 25;
     */
    currencyId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * The exact delivery date of the item in the sales order
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales order
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales order
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    /**
     * Stores the minimum value of the sales order (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 50;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the sales order (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 51;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<SalesOrdersServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceCountReq;
    static equals(a: SalesOrdersServiceCountReq | PlainMessage<SalesOrdersServiceCountReq> | undefined, b: SalesOrdersServiceCountReq | PlainMessage<SalesOrdersServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SalesOrdersServiceSearchAllReq
 */
export declare class SalesOrdersServiceSearchAllReq extends Message<SalesOrdersServiceSearchAllReq> {
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
     * @generated from field: Scailo.SALES_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ORDER_SORT_KEY;
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
     * The associated consignee client ID
     *
     * @generated from field: uint64 consignee_client_id = 22;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID
     *
     * @generated from field: uint64 buyer_client_id = 23;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 25;
     */
    currencyId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<SalesOrdersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceSearchAllReq;
    static equals(a: SalesOrdersServiceSearchAllReq | PlainMessage<SalesOrdersServiceSearchAllReq> | undefined, b: SalesOrdersServiceSearchAllReq | PlainMessage<SalesOrdersServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a sales order reference
 *
 * @generated from message Scailo.SalesOrdersServiceReferenceCreateRequest
 */
export declare class SalesOrdersServiceReferenceCreateRequest extends Message<SalesOrdersServiceReferenceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales order ID
     *
     * @generated from field: uint64 sales_order_id = 10;
     */
    salesOrderId: bigint;
    /**
     * The reference context, could be billing or buying
     *
     * @generated from field: Scailo.SALES_ORDER_REFERENCE_CONTEXT context = 11;
     */
    context: SALES_ORDER_REFERENCE_CONTEXT;
    /**
     * The associated ref from
     *
     * @generated from field: Scailo.SALES_ORDER_REFERENCE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_ORDER_REFERENCE_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalesOrdersServiceReferenceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceReferenceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceReferenceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceReferenceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceReferenceCreateRequest;
    static equals(a: SalesOrdersServiceReferenceCreateRequest | PlainMessage<SalesOrdersServiceReferenceCreateRequest> | undefined, b: SalesOrdersServiceReferenceCreateRequest | PlainMessage<SalesOrdersServiceReferenceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a sales order reference
 *
 * @generated from message Scailo.SalesOrderReference
 */
export declare class SalesOrderReference extends Message<SalesOrderReference> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales order
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
     * Stores the sales order ID
     *
     * @generated from field: uint64 sales_order_id = 10;
     */
    salesOrderId: bigint;
    /**
     * The reference context, could be billing or buying
     *
     * @generated from field: Scailo.SALES_ORDER_REFERENCE_CONTEXT context = 11;
     */
    context: SALES_ORDER_REFERENCE_CONTEXT;
    /**
     * The associated ref from
     *
     * @generated from field: Scailo.SALES_ORDER_REFERENCE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_ORDER_REFERENCE_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalesOrderReference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderReference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderReference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderReference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderReference;
    static equals(a: SalesOrderReference | PlainMessage<SalesOrderReference> | undefined, b: SalesOrderReference | PlainMessage<SalesOrderReference> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales order references
 *
 * @generated from message Scailo.SalesOrderReferencesList
 */
export declare class SalesOrderReferencesList extends Message<SalesOrderReferencesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesOrderReference list = 1;
     */
    list: SalesOrderReference[];
    constructor(data?: PartialMessage<SalesOrderReferencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderReferencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderReferencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderReferencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderReferencesList;
    static equals(a: SalesOrderReferencesList | PlainMessage<SalesOrderReferencesList> | undefined, b: SalesOrderReferencesList | PlainMessage<SalesOrderReferencesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.SalesOrderItemsSearchRequest
 */
export declare class SalesOrderItemsSearchRequest extends Message<SalesOrderItemsSearchRequest> {
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
     * @generated from field: Scailo.SALES_ORDER_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ORDER_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.SALES_ORDER_ITEM_STATUS status = 7;
     */
    status: SALES_ORDER_ITEM_STATUS;
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
     * The ID of the sales order
     *
     * @generated from field: uint64 sales_order_id = 20;
     */
    salesOrderId: bigint;
    /**
     * Stores the ID of the sales order item with which this item is bundled with
     *
     * @generated from field: uint64 bundled_with_id = 21;
     */
    bundledWithId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 22;
     */
    familyId: bigint;
    /**
     * The ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 23;
     */
    clientUomId: bigint;
    /**
     * Stores the family code as given by the client
     *
     * @generated from field: string client_family_code = 26;
     */
    clientFamilyCode: string;
    /**
     * The ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 27;
     */
    taxGroupId: bigint;
    /**
     * The exact delivery date of the item in the sales order
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales order
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales order
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
    constructor(data?: PartialMessage<SalesOrderItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderItemsSearchRequest;
    static equals(a: SalesOrderItemsSearchRequest | PlainMessage<SalesOrderItemsSearchRequest> | undefined, b: SalesOrderItemsSearchRequest | PlainMessage<SalesOrderItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.SalesOrdersServicePaginatedItemsResponse
 */
export declare class SalesOrdersServicePaginatedItemsResponse extends Message<SalesOrdersServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.SalesOrderItem payload = 4;
     */
    payload: SalesOrderItem[];
    constructor(data?: PartialMessage<SalesOrdersServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServicePaginatedItemsResponse;
    static equals(a: SalesOrdersServicePaginatedItemsResponse | PlainMessage<SalesOrdersServicePaginatedItemsResponse> | undefined, b: SalesOrdersServicePaginatedItemsResponse | PlainMessage<SalesOrdersServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a sales order contact
 *
 * @generated from message Scailo.SalesOrdersServiceContactCreateRequest
 */
export declare class SalesOrdersServiceContactCreateRequest extends Message<SalesOrdersServiceContactCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales order ID
     *
     * @generated from field: uint64 sales_order_id = 10;
     */
    salesOrderId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<SalesOrdersServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrdersServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrdersServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrdersServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrdersServiceContactCreateRequest;
    static equals(a: SalesOrdersServiceContactCreateRequest | PlainMessage<SalesOrdersServiceContactCreateRequest> | undefined, b: SalesOrdersServiceContactCreateRequest | PlainMessage<SalesOrdersServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a sales order contact
 *
 * @generated from message Scailo.SalesOrderContact
 */
export declare class SalesOrderContact extends Message<SalesOrderContact> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales order
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
     * Stores the sales order ID
     *
     * @generated from field: uint64 sales_order_id = 10;
     */
    salesOrderId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<SalesOrderContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderContact;
    static equals(a: SalesOrderContact | PlainMessage<SalesOrderContact> | undefined, b: SalesOrderContact | PlainMessage<SalesOrderContact> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales order contacts
 *
 * @generated from message Scailo.SalesOrderContactsList
 */
export declare class SalesOrderContactsList extends Message<SalesOrderContactsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesOrderContact list = 1;
     */
    list: SalesOrderContact[];
    constructor(data?: PartialMessage<SalesOrderContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderContactsList;
    static equals(a: SalesOrderContactsList | PlainMessage<SalesOrderContactsList> | undefined, b: SalesOrderContactsList | PlainMessage<SalesOrderContactsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a sales order's inventory statistics payload
 *
 * @generated from message Scailo.SalesOrderInventoryStatistics
 */
export declare class SalesOrderInventoryStatistics extends Message<SalesOrderInventoryStatistics> {
    /**
     * Stores the cumulative quantity of the ordered inventory
     *
     * @generated from field: uint64 ordered = 1;
     */
    ordered: bigint;
    /**
     * Stores the cumulative quantity of the dispatched inventory
     *
     * @generated from field: uint64 dispatched = 2;
     */
    dispatched: bigint;
    /**
     * Stores the cumulative quantity of the returned inventory
     *
     * @generated from field: uint64 returned = 3;
     */
    returned: bigint;
    constructor(data?: PartialMessage<SalesOrderInventoryStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderInventoryStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderInventoryStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderInventoryStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderInventoryStatistics;
    static equals(a: SalesOrderInventoryStatistics | PlainMessage<SalesOrderInventoryStatistics> | undefined, b: SalesOrderInventoryStatistics | PlainMessage<SalesOrderInventoryStatistics> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a sales order's billing statistics payload
 *
 * @generated from message Scailo.SalesOrderBillingStatistics
 */
export declare class SalesOrderBillingStatistics extends Message<SalesOrderBillingStatistics> {
    /**
     * Stores the cumulative quantity of the ordered inventory
     *
     * @generated from field: uint64 ordered = 1;
     */
    ordered: bigint;
    /**
     * Stores the cumulative quantity of the billed inventory
     *
     * @generated from field: uint64 billed = 2;
     */
    billed: bigint;
    /**
     * Stores the cumulative quantity of the credited inventory
     *
     * @generated from field: uint64 credited = 3;
     */
    credited: bigint;
    constructor(data?: PartialMessage<SalesOrderBillingStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesOrderBillingStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesOrderBillingStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesOrderBillingStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesOrderBillingStatistics;
    static equals(a: SalesOrderBillingStatistics | PlainMessage<SalesOrderBillingStatistics> | undefined, b: SalesOrderBillingStatistics | PlainMessage<SalesOrderBillingStatistics> | undefined): boolean;
}
//# sourceMappingURL=sales_orders.scailo_pb.d.ts.map
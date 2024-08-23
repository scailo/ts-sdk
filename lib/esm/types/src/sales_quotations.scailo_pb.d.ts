import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_QUOTATION_SORT_KEY
 */
export declare enum SALES_QUOTATION_SORT_KEY {
    /**
     * Fetch quotationed results by id
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch quotationed results by the creation timestamp
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_CREATED_AT = 1;
     */
    SALES_QUOTATION_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch quotationed results by the modified timestamp
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_QUOTATION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch quotationed results by the approved on timestamp
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_QUOTATION_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch quotationed results by the approved by field
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_QUOTATION_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch quotationed results by the approver's role ID
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_QUOTATION_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch quotationed results by the approver's completed on timestamp
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_QUOTATION_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch quotationed results by the reference ID
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_QUOTATION_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch quotationed results by the final ref number
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_QUOTATION_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch quotationed results by the consignee client ID
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_CONSIGNEE_CLIENT_ID = 12;
     */
    SALES_QUOTATION_SORT_KEY_CONSIGNEE_CLIENT_ID = 12,
    /**
     * Fetch quotationed results by the buyer client ID
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_BUYER_CLIENT_ID = 13;
     */
    SALES_QUOTATION_SORT_KEY_BUYER_CLIENT_ID = 13,
    /**
     * Fetch quotationed results by the location ID
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_LOCATION_ID = 14;
     */
    SALES_QUOTATION_SORT_KEY_LOCATION_ID = 14,
    /**
     * Fetch quotationed results by the currency ID
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_CURRENCY_ID = 15;
     */
    SALES_QUOTATION_SORT_KEY_CURRENCY_ID = 15,
    /**
     * Fetch quotationed results by the project ID
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_PROJECT_ID = 16;
     */
    SALES_QUOTATION_SORT_KEY_PROJECT_ID = 16,
    /**
     * Fetch quotationed results by the advance payment
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_PAYMENT_ADVANCE = 17;
     */
    SALES_QUOTATION_SORT_KEY_PAYMENT_ADVANCE = 17,
    /**
     * Fetch quotationed results by the amendment count
     *
     * @generated from enum value: SALES_QUOTATION_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    SALES_QUOTATION_SORT_KEY_AMENDMENT_COUNT = 18
}
/**
 *
 * Describes the sales quotation reference context
 *
 * @generated from enum Scailo.SALES_QUOTATION_REFERENCE_CONTEXT
 */
export declare enum SALES_QUOTATION_REFERENCE_CONTEXT {
    /**
     * Denotes that context be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_QUOTATION_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0,
    /**
     * Denotes billing context
     *
     * @generated from enum value: SALES_QUOTATION_REFERENCE_CONTEXT_BILLING = 1;
     */
    SALES_QUOTATION_REFERENCE_CONTEXT_BILLING = 1
}
/**
 *
 * Describes the possible options for ref_from field for a sales quotation reference
 *
 * @generated from enum Scailo.SALES_QUOTATION_REFERENCE_REF_FROM
 */
export declare enum SALES_QUOTATION_REFERENCE_REF_FROM {
    /**
     * Denotes that the ref from be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_QUOTATION_REFERENCE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_REFERENCE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     *   // Denotes inward job
     *   SALES_QUOTATION_REFERENCE_REF_FROM_INWARD_JOB = 1;
     * Denotes sales enquiry
     *
     * @generated from enum value: SALES_QUOTATION_REFERENCE_REF_FROM_SALES_ENQUIRY = 2;
     */
    SALES_QUOTATION_REFERENCE_REF_FROM_SALES_ENQUIRY = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_QUOTATION_ITEM_SORT_KEY
 */
export declare enum SALES_QUOTATION_ITEM_SORT_KEY {
    /**
     * Fetch quotationed results by id
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch quotationed results by the creation timestamp
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch quotationed results by the modified timestamp
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch quotationed results by the approved on timestamp
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch quotationed results by the approved by field
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch quotationed results by the approver's role ID
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch quotationed results by the family ID
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch quotationed results by the internal quantity
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch quotationed results by the client unit of material ID
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch quotationed results by the client quantity
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * Fetch quotationed results by the client family code
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * Fetch quotationed results by the unit price
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_UNIT_PRICE = 15;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_UNIT_PRICE = 15,
    /**
     * Fetch quotationed results by the tax group ID
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_TAX_GROUP_ID = 16,
    /**
     * Fetch quotationed results by the discount
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_DISCOUNT = 17;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_DISCOUNT = 17,
    /**
     * Fetch quotationed results by the delivery date
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_SORT_KEY_DELIVERY_DATE = 18;
     */
    SALES_QUOTATION_ITEM_SORT_KEY_DELIVERY_DATE = 18
}
/**
 *
 * Describes the applicable statuses of sales quotation items
 *
 * @generated from enum Scailo.SALES_QUOTATION_ITEM_STATUS
 */
export declare enum SALES_QUOTATION_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_QUOTATION_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the sales quotation items must have been approved
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_STATUS_APPROVED = 1;
     */
    SALES_QUOTATION_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the sales quotation items must be waiting for approval
     *
     * @generated from enum value: SALES_QUOTATION_ITEM_STATUS_UNAPPROVED = 2;
     */
    SALES_QUOTATION_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SalesQuotationsServiceCreateRequest
 */
export declare class SalesQuotationsServiceCreateRequest extends Message<SalesQuotationsServiceCreateRequest> {
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
     * The reference ID of the sales quotation
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
    constructor(data?: PartialMessage<SalesQuotationsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceCreateRequest;
    static equals(a: SalesQuotationsServiceCreateRequest | PlainMessage<SalesQuotationsServiceCreateRequest> | undefined, b: SalesQuotationsServiceCreateRequest | PlainMessage<SalesQuotationsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SalesQuotationsServiceUpdateRequest
 */
export declare class SalesQuotationsServiceUpdateRequest extends Message<SalesQuotationsServiceUpdateRequest> {
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
     * The reference ID of the sales quotation
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
    constructor(data?: PartialMessage<SalesQuotationsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceUpdateRequest;
    static equals(a: SalesQuotationsServiceUpdateRequest | PlainMessage<SalesQuotationsServiceUpdateRequest> | undefined, b: SalesQuotationsServiceUpdateRequest | PlainMessage<SalesQuotationsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.SalesQuotationsServiceAutofillRequest
 */
export declare class SalesQuotationsServiceAutofillRequest extends Message<SalesQuotationsServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<SalesQuotationsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceAutofillRequest;
    static equals(a: SalesQuotationsServiceAutofillRequest | PlainMessage<SalesQuotationsServiceAutofillRequest> | undefined, b: SalesQuotationsServiceAutofillRequest | PlainMessage<SalesQuotationsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SalesQuotation
 */
export declare class SalesQuotation extends Message<SalesQuotation> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales quotation
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
     * The status of this sales quotation
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this sales quotation
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this sales quotation was marked as completed
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
     * The reference ID of the sales quotation
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
     * The number of times that the sales quotation has been amended
     *
     * @generated from field: uint64 amendment_count = 22;
     */
    amendmentCount: bigint;
    /**
     * Stores the total value of the sales quotation (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 30;
     */
    totalValue: number;
    /**
     * The list of associated sales quotation items
     *
     * @generated from field: repeated Scailo.SalesQuotationItem list = 40;
     */
    list: SalesQuotationItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 50;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SalesQuotation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotation;
    static equals(a: SalesQuotation | PlainMessage<SalesQuotation> | undefined, b: SalesQuotation | PlainMessage<SalesQuotation> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a sales quotation
 *
 * @generated from message Scailo.SalesQuotationsServiceItemCreateRequest
 */
export declare class SalesQuotationsServiceItemCreateRequest extends Message<SalesQuotationsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales quotation ID
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being quotationed in internal unit of material
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
     * Stores the quantity (in cents) being quotationed in client's unit of material
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
    constructor(data?: PartialMessage<SalesQuotationsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemCreateRequest;
    static equals(a: SalesQuotationsServiceItemCreateRequest | PlainMessage<SalesQuotationsServiceItemCreateRequest> | undefined, b: SalesQuotationsServiceItemCreateRequest | PlainMessage<SalesQuotationsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a sales quotation
 *
 * @generated from message Scailo.SalesQuotationsServiceItemUpdateRequest
 */
export declare class SalesQuotationsServiceItemUpdateRequest extends Message<SalesQuotationsServiceItemUpdateRequest> {
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
     * The quantity (in cents) being quotationed in internal unit of material
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
     * Stores the quantity (in cents) being quotationed in client's unit of material
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
    constructor(data?: PartialMessage<SalesQuotationsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceItemUpdateRequest;
    static equals(a: SalesQuotationsServiceItemUpdateRequest | PlainMessage<SalesQuotationsServiceItemUpdateRequest> | undefined, b: SalesQuotationsServiceItemUpdateRequest | PlainMessage<SalesQuotationsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a sales quotation
 *
 * @generated from message Scailo.SalesQuotationItem
 */
export declare class SalesQuotationItem extends Message<SalesQuotationItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales quotation
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
     * Stores the sales quotation ID
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     * Stores the ID of the sales squotation item with which this item is bundled with
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
     * The quantity (in cents) being quotationed in internal unit of material
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
     * Stores the quantity (in cents) being quotationed in client's unit of material
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
    constructor(data?: PartialMessage<SalesQuotationItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItem;
    static equals(a: SalesQuotationItem | PlainMessage<SalesQuotationItem> | undefined, b: SalesQuotationItem | PlainMessage<SalesQuotationItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales quotations
 *
 * @generated from message Scailo.SalesQuotationsList
 */
export declare class SalesQuotationsList extends Message<SalesQuotationsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesQuotation list = 1;
     */
    list: SalesQuotation[];
    constructor(data?: PartialMessage<SalesQuotationsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsList;
    static equals(a: SalesQuotationsList | PlainMessage<SalesQuotationsList> | undefined, b: SalesQuotationsList | PlainMessage<SalesQuotationsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales quotation items
 *
 * @generated from message Scailo.SalesQuotationItemsList
 */
export declare class SalesQuotationItemsList extends Message<SalesQuotationItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesQuotationItem list = 1;
     */
    list: SalesQuotationItem[];
    constructor(data?: PartialMessage<SalesQuotationItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItemsList;
    static equals(a: SalesQuotationItemsList | PlainMessage<SalesQuotationItemsList> | undefined, b: SalesQuotationItemsList | PlainMessage<SalesQuotationItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.SalesQuotationItemHistoryRequest
 */
export declare class SalesQuotationItemHistoryRequest extends Message<SalesQuotationItemHistoryRequest> {
    /**
     * Stores the sales quotation ID
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesQuotationItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItemHistoryRequest;
    static equals(a: SalesQuotationItemHistoryRequest | PlainMessage<SalesQuotationItemHistoryRequest> | undefined, b: SalesQuotationItemHistoryRequest | PlainMessage<SalesQuotationItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective sales quotation item
 *
 * @generated from message Scailo.SalesQuotationItemProspectiveInfoRequest
 */
export declare class SalesQuotationItemProspectiveInfoRequest extends Message<SalesQuotationItemProspectiveInfoRequest> {
    /**
     * Stores the sales quotation ID
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
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
    constructor(data?: PartialMessage<SalesQuotationItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItemProspectiveInfoRequest;
    static equals(a: SalesQuotationItemProspectiveInfoRequest | PlainMessage<SalesQuotationItemProspectiveInfoRequest> | undefined, b: SalesQuotationItemProspectiveInfoRequest | PlainMessage<SalesQuotationItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SalesQuotationsServicePaginationReq
 */
export declare class SalesQuotationsServicePaginationReq extends Message<SalesQuotationsServicePaginationReq> {
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
     * @generated from field: Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_QUOTATION_SORT_KEY;
    /**
     * The status of this sales quotation
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesQuotationsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginationReq;
    static equals(a: SalesQuotationsServicePaginationReq | PlainMessage<SalesQuotationsServicePaginationReq> | undefined, b: SalesQuotationsServicePaginationReq | PlainMessage<SalesQuotationsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SalesQuotationsServicePaginationResponse
 */
export declare class SalesQuotationsServicePaginationResponse extends Message<SalesQuotationsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SalesQuotation payload = 4;
     */
    payload: SalesQuotation[];
    constructor(data?: PartialMessage<SalesQuotationsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginationResponse;
    static equals(a: SalesQuotationsServicePaginationResponse | PlainMessage<SalesQuotationsServicePaginationResponse> | undefined, b: SalesQuotationsServicePaginationResponse | PlainMessage<SalesQuotationsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SalesQuotationsServiceFilterReq
 */
export declare class SalesQuotationsServiceFilterReq extends Message<SalesQuotationsServiceFilterReq> {
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
     * @generated from field: Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_QUOTATION_SORT_KEY;
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
     * The status of this sales quotation
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
     * The reference ID of the sales quotation
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
     * The exact delivery date of the item in the sales quotation
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales quotation
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales quotation
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    constructor(data?: PartialMessage<SalesQuotationsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceFilterReq;
    static equals(a: SalesQuotationsServiceFilterReq | PlainMessage<SalesQuotationsServiceFilterReq> | undefined, b: SalesQuotationsServiceFilterReq | PlainMessage<SalesQuotationsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SalesQuotationsServiceCountReq
 */
export declare class SalesQuotationsServiceCountReq extends Message<SalesQuotationsServiceCountReq> {
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
     * The status of this sales quotation
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
     * The reference ID of the sales quotation
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
     * The exact delivery date of the item in the sales quotation
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales quotation
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales quotation
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    constructor(data?: PartialMessage<SalesQuotationsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceCountReq;
    static equals(a: SalesQuotationsServiceCountReq | PlainMessage<SalesQuotationsServiceCountReq> | undefined, b: SalesQuotationsServiceCountReq | PlainMessage<SalesQuotationsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SalesQuotationsServiceSearchAllReq
 */
export declare class SalesQuotationsServiceSearchAllReq extends Message<SalesQuotationsServiceSearchAllReq> {
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
     * @generated from field: Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_QUOTATION_SORT_KEY;
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
    constructor(data?: PartialMessage<SalesQuotationsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceSearchAllReq;
    static equals(a: SalesQuotationsServiceSearchAllReq | PlainMessage<SalesQuotationsServiceSearchAllReq> | undefined, b: SalesQuotationsServiceSearchAllReq | PlainMessage<SalesQuotationsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a sales quotation reference
 *
 * @generated from message Scailo.SalesQuotationsServiceReferenceCreateRequest
 */
export declare class SalesQuotationsServiceReferenceCreateRequest extends Message<SalesQuotationsServiceReferenceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales quotation ID
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     * The reference context, could be billing or buying
     *
     * @generated from field: Scailo.SALES_QUOTATION_REFERENCE_CONTEXT context = 11;
     */
    context: SALES_QUOTATION_REFERENCE_CONTEXT;
    /**
     * The associated ref from
     *
     * @generated from field: Scailo.SALES_QUOTATION_REFERENCE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_QUOTATION_REFERENCE_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalesQuotationsServiceReferenceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceReferenceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceReferenceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceReferenceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceReferenceCreateRequest;
    static equals(a: SalesQuotationsServiceReferenceCreateRequest | PlainMessage<SalesQuotationsServiceReferenceCreateRequest> | undefined, b: SalesQuotationsServiceReferenceCreateRequest | PlainMessage<SalesQuotationsServiceReferenceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a sales quotation reference
 *
 * @generated from message Scailo.SalesQuotationReference
 */
export declare class SalesQuotationReference extends Message<SalesQuotationReference> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales quotation
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
     * Stores the sales quotation ID
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     * The reference context, could be billing or buying
     *
     * @generated from field: Scailo.SALES_QUOTATION_REFERENCE_CONTEXT context = 11;
     */
    context: SALES_QUOTATION_REFERENCE_CONTEXT;
    /**
     * The associated ref from
     *
     * @generated from field: Scailo.SALES_QUOTATION_REFERENCE_REF_FROM ref_from = 12;
     */
    refFrom: SALES_QUOTATION_REFERENCE_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalesQuotationReference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationReference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationReference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationReference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationReference;
    static equals(a: SalesQuotationReference | PlainMessage<SalesQuotationReference> | undefined, b: SalesQuotationReference | PlainMessage<SalesQuotationReference> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales quotation references
 *
 * @generated from message Scailo.SalesQuotationReferencesList
 */
export declare class SalesQuotationReferencesList extends Message<SalesQuotationReferencesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesQuotationReference list = 1;
     */
    list: SalesQuotationReference[];
    constructor(data?: PartialMessage<SalesQuotationReferencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationReferencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationReferencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationReferencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationReferencesList;
    static equals(a: SalesQuotationReferencesList | PlainMessage<SalesQuotationReferencesList> | undefined, b: SalesQuotationReferencesList | PlainMessage<SalesQuotationReferencesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.SalesQuotationItemsSearchRequest
 */
export declare class SalesQuotationItemsSearchRequest extends Message<SalesQuotationItemsSearchRequest> {
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
     * @generated from field: Scailo.SALES_QUOTATION_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_QUOTATION_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.SALES_QUOTATION_ITEM_STATUS status = 7;
     */
    status: SALES_QUOTATION_ITEM_STATUS;
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
     * The ID of the sales quotation
     *
     * @generated from field: uint64 sales_quotation_id = 20;
     */
    salesQuotationId: bigint;
    /**
     * Stores the ID of the sales squotation item with which this item is bundled with
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
     * The exact delivery date of the item in the sales quotation
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the sales quotation
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the sales quotation
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
    constructor(data?: PartialMessage<SalesQuotationItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationItemsSearchRequest;
    static equals(a: SalesQuotationItemsSearchRequest | PlainMessage<SalesQuotationItemsSearchRequest> | undefined, b: SalesQuotationItemsSearchRequest | PlainMessage<SalesQuotationItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.SalesQuotationsServicePaginatedItemsResponse
 */
export declare class SalesQuotationsServicePaginatedItemsResponse extends Message<SalesQuotationsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.SalesQuotationItem payload = 4;
     */
    payload: SalesQuotationItem[];
    constructor(data?: PartialMessage<SalesQuotationsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServicePaginatedItemsResponse;
    static equals(a: SalesQuotationsServicePaginatedItemsResponse | PlainMessage<SalesQuotationsServicePaginatedItemsResponse> | undefined, b: SalesQuotationsServicePaginatedItemsResponse | PlainMessage<SalesQuotationsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a sales quotation contact
 *
 * @generated from message Scailo.SalesQuotationsServiceContactCreateRequest
 */
export declare class SalesQuotationsServiceContactCreateRequest extends Message<SalesQuotationsServiceContactCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales quotation ID
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<SalesQuotationsServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationsServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationsServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationsServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationsServiceContactCreateRequest;
    static equals(a: SalesQuotationsServiceContactCreateRequest | PlainMessage<SalesQuotationsServiceContactCreateRequest> | undefined, b: SalesQuotationsServiceContactCreateRequest | PlainMessage<SalesQuotationsServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a sales quotation contact
 *
 * @generated from message Scailo.SalesQuotationContact
 */
export declare class SalesQuotationContact extends Message<SalesQuotationContact> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales quotation
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
     * Stores the sales quotation ID
     *
     * @generated from field: uint64 sales_quotation_id = 10;
     */
    salesQuotationId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<SalesQuotationContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationContact;
    static equals(a: SalesQuotationContact | PlainMessage<SalesQuotationContact> | undefined, b: SalesQuotationContact | PlainMessage<SalesQuotationContact> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of sales quotation contacts
 *
 * @generated from message Scailo.SalesQuotationContactsList
 */
export declare class SalesQuotationContactsList extends Message<SalesQuotationContactsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesQuotationContact list = 1;
     */
    list: SalesQuotationContact[];
    constructor(data?: PartialMessage<SalesQuotationContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesQuotationContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesQuotationContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesQuotationContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesQuotationContactsList;
    static equals(a: SalesQuotationContactsList | PlainMessage<SalesQuotationContactsList> | undefined, b: SalesQuotationContactsList | PlainMessage<SalesQuotationContactsList> | undefined): boolean;
}
//# sourceMappingURL=sales_quotations.scailo_pb.d.ts.map
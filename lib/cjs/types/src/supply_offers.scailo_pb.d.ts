import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SUPPLY_OFFER_SORT_KEY
 */
export declare enum SUPPLY_OFFER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SUPPLY_OFFER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_CREATED_AT = 1;
     */
    SUPPLY_OFFER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_MODIFIED_AT = 2;
     */
    SUPPLY_OFFER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_APPROVED_ON = 3;
     */
    SUPPLY_OFFER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_APPROVED_BY = 4;
     */
    SUPPLY_OFFER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SUPPLY_OFFER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_COMPLETED_ON = 6;
     */
    SUPPLY_OFFER_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_REFERENCE_ID = 10;
     */
    SUPPLY_OFFER_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SUPPLY_OFFER_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the consignee location ID
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_CONSIGNEE_LOCATION_ID = 12;
     */
    SUPPLY_OFFER_SORT_KEY_CONSIGNEE_LOCATION_ID = 12,
    /**
     * Fetch ordered results by the buyer location ID
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_BUYER_LOCATION_ID = 13;
     */
    SUPPLY_OFFER_SORT_KEY_BUYER_LOCATION_ID = 13,
    /**
     * Fetch ordered results by the vendor ID
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_VENDOR_ID = 14;
     */
    SUPPLY_OFFER_SORT_KEY_VENDOR_ID = 14,
    /**
     * Fetch ordered results by the currency ID
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_CURRENCY_ID = 15;
     */
    SUPPLY_OFFER_SORT_KEY_CURRENCY_ID = 15,
    /**
     * Fetch ordered results by the project ID
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_PROJECT_ID = 16;
     */
    SUPPLY_OFFER_SORT_KEY_PROJECT_ID = 16,
    /**
     * Fetch ordered results by the advance payment
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_PAYMENT_ADVANCE = 17;
     */
    SUPPLY_OFFER_SORT_KEY_PAYMENT_ADVANCE = 17,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_AMENDMENT_COUNT = 18;
     */
    SUPPLY_OFFER_SORT_KEY_AMENDMENT_COUNT = 18,
    /**
     * Fetch ordered results by the total value
     *
     * @generated from enum value: SUPPLY_OFFER_SORT_KEY_TOTAL_VALUE = 30;
     */
    SUPPLY_OFFER_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SUPPLY_OFFER_ITEM_SORT_KEY
 */
export declare enum SUPPLY_OFFER_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the vendor unit of material ID
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_VENDOR_UOM_ID = 12;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_VENDOR_UOM_ID = 12,
    /**
     * Fetch ordered results by the vendor quantity
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_VENDOR_QUANTITY = 13;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_VENDOR_QUANTITY = 13,
    /**
     * Fetch ordered results by the vendor unit price
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_VENDOR_UNIT_PRICE = 14;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_VENDOR_UNIT_PRICE = 14,
    /**
     * Fetch ordered results by the tax group ID
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_TAX_GROUP_ID = 15;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_TAX_GROUP_ID = 15,
    /**
     * Fetch ordered results by the discount
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_DISCOUNT = 16;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_DISCOUNT = 16,
    /**
     * Fetch ordered results by the delivery date
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_SORT_KEY_DELIVERY_DATE = 17;
     */
    SUPPLY_OFFER_ITEM_SORT_KEY_DELIVERY_DATE = 17
}
/**
 *
 * Describes the applicable statuses of supply offer items
 *
 * @generated from enum Scailo.SUPPLY_OFFER_ITEM_STATUS
 */
export declare enum SUPPLY_OFFER_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    SUPPLY_OFFER_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the supply offer items must have been approved
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_STATUS_APPROVED = 1;
     */
    SUPPLY_OFFER_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the supply offer items must be waiting for approval
     *
     * @generated from enum value: SUPPLY_OFFER_ITEM_STATUS_UNAPPROVED = 2;
     */
    SUPPLY_OFFER_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SupplyOffersServiceCreateRequest
 */
export declare class SupplyOffersServiceCreateRequest extends Message<SupplyOffersServiceCreateRequest> {
    /**
     *
     * @optional
     *
     * @description The globally unique identifier for the Organization or Business Entity.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
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
     *
     * @optional
     *
     * @description The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.
     *
     * @example 15234
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @mandatory
     *
     * @description A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.
     *
     * @example "ABS-2023-001"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The location ID of the consignee
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The location ID of the buyer
     *
     * @generated from field: uint64 buyer_location_id = 13;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 14;
     */
    vendorId: bigint;
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
    constructor(data?: PartialMessage<SupplyOffersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServiceCreateRequest;
    static equals(a: SupplyOffersServiceCreateRequest | PlainMessage<SupplyOffersServiceCreateRequest> | undefined, b: SupplyOffersServiceCreateRequest | PlainMessage<SupplyOffersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SupplyOffersServiceUpdateRequest
 */
export declare class SupplyOffersServiceUpdateRequest extends Message<SupplyOffersServiceUpdateRequest> {
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
     *
     * @optional
     *
     * @description Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.
     *
     * @example true
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     *
     * @optional
     *
     * @description Updated vault folder ID for documentation storage.
     *
     * @example 15235
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @mandatory
     *
     * @description Updated alphanumeric reference ID. Must contain at least 1 character.
     *
     * @example "ABS-2023-001-REV"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The location ID of the consignee
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The location ID of the buyer
     *
     * @generated from field: uint64 buyer_location_id = 13;
     */
    buyerLocationId: bigint;
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
    constructor(data?: PartialMessage<SupplyOffersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServiceUpdateRequest;
    static equals(a: SupplyOffersServiceUpdateRequest | PlainMessage<SupplyOffersServiceUpdateRequest> | undefined, b: SupplyOffersServiceUpdateRequest | PlainMessage<SupplyOffersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.SupplyOffersServiceAutofillRequest
 */
export declare class SupplyOffersServiceAutofillRequest extends Message<SupplyOffersServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<SupplyOffersServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServiceAutofillRequest;
    static equals(a: SupplyOffersServiceAutofillRequest | PlainMessage<SupplyOffersServiceAutofillRequest> | undefined, b: SupplyOffersServiceAutofillRequest | PlainMessage<SupplyOffersServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.SupplyOfferAncillaryParameters
 */
export declare class SupplyOfferAncillaryParameters extends Message<SupplyOfferAncillaryParameters> {
    /**
     * The UUID of the consignee location (the UUID of the associated consignee_location_id)
     *
     * @generated from field: string consignee_location_uuid = 212;
     */
    consigneeLocationUuid: string;
    /**
     * The UUID of the buyer location (the UUID of the associated buyer_location_id)
     *
     * @generated from field: string buyer_location_uuid = 213;
     */
    buyerLocationUuid: string;
    /**
     * The UUID of the vendor (the UUID of the associated vendor_id)
     *
     * @generated from field: string vendor_uuid = 214;
     */
    vendorUuid: string;
    /**
     * The UUID of the currency (the UUID of the associated currency)
     *
     * @generated from field: string currency_uuid = 215;
     */
    currencyUuid: string;
    constructor(data?: PartialMessage<SupplyOfferAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOfferAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOfferAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOfferAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOfferAncillaryParameters;
    static equals(a: SupplyOfferAncillaryParameters | PlainMessage<SupplyOfferAncillaryParameters> | undefined, b: SupplyOfferAncillaryParameters | PlainMessage<SupplyOfferAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SupplyOffer
 */
export declare class SupplyOffer extends Message<SupplyOffer> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     *
     * @description Standard employee and record metadata including timestamps.
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     *
     * @description Detailed approval workflow state (Approver ID, Role, and Timestamps).
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     *
     * @description The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @description Comprehensive audit trail of every operation performed on this record.
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     *
     * @description UNIX timestamp of when the record transitioned to the COMPLETED state.
     *
     * @example 1698400000
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     *
     * @description Link to the document storage folder.
     *
     * @example 15234
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @description The user-provided reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     *
     * @description The system-generated immutable reference number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     * The location ID of the consignee
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The location ID of the buyer
     *
     * @generated from field: uint64 buyer_location_id = 13;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 14;
     */
    vendorId: bigint;
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
     * The number of times that the supply offer has been amended
     *
     * @generated from field: uint64 amendment_count = 22;
     */
    amendmentCount: bigint;
    /**
     * Stores the total value of the supply offer (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 30;
     */
    totalValue: number;
    /**
     * The list of associated supply offer items
     *
     * @generated from field: repeated Scailo.SupplyOfferItem list = 40;
     */
    list: SupplyOfferItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 50;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SupplyOffer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffer;
    static equals(a: SupplyOffer | PlainMessage<SupplyOffer> | undefined, b: SupplyOffer | PlainMessage<SupplyOffer> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a supply offer
 *
 * @generated from message Scailo.SupplyOffersServiceItemCreateRequest
 */
export declare class SupplyOffersServiceItemCreateRequest extends Message<SupplyOffersServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the supply offer ID
     *
     * @generated from field: uint64 supply_offer_id = 10;
     */
    supplyOfferId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being ordered in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 vendor_unit_price = 15;
     */
    vendorUnitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 17;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<SupplyOffersServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServiceItemCreateRequest;
    static equals(a: SupplyOffersServiceItemCreateRequest | PlainMessage<SupplyOffersServiceItemCreateRequest> | undefined, b: SupplyOffersServiceItemCreateRequest | PlainMessage<SupplyOffersServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a supply offer
 *
 * @generated from message Scailo.SupplyOffersServiceItemUpdateRequest
 */
export declare class SupplyOffersServiceItemUpdateRequest extends Message<SupplyOffersServiceItemUpdateRequest> {
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
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 vendor_unit_price = 15;
     */
    vendorUnitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 17;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<SupplyOffersServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServiceItemUpdateRequest;
    static equals(a: SupplyOffersServiceItemUpdateRequest | PlainMessage<SupplyOffersServiceItemUpdateRequest> | undefined, b: SupplyOffersServiceItemUpdateRequest | PlainMessage<SupplyOffersServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a supply offer
 *
 * @generated from message Scailo.SupplyOfferItem
 */
export declare class SupplyOfferItem extends Message<SupplyOfferItem> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     *
     * @description Standard employee and record metadata including timestamps.
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     *
     * @description Detailed approval workflow state (Approver ID, Role, and Timestamps).
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     *
     * @description The approval state of the record
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
     * Stores the supply offer ID
     *
     * @generated from field: uint64 supply_offer_id = 10;
     */
    supplyOfferId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being ordered in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being ordered in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    /**
     * The unit price of the item (as supplied by the vendor)
     *
     * @generated from field: uint64 vendor_unit_price = 15;
     */
    vendorUnitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The applicable discount percentage (in cents)
     *
     * @generated from field: uint64 discount = 17;
     */
    discount: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    /**
     * Stores the vendor unit price after factoring in the discount
     *
     * @generated from field: uint64 discounted_vendor_unit_price = 30;
     */
    discountedVendorUnitPrice: bigint;
    /**
     * ----------------------------------------
     * The UUID of the associated supply offer
     *
     * @generated from field: string supply_offer_uuid = 110;
     */
    supplyOfferUuid: string;
    /**
     * The UUID of the associated family
     *
     * ----------------------------------------
     *
     * @generated from field: string family_uuid = 111;
     */
    familyUuid: string;
    constructor(data?: PartialMessage<SupplyOfferItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOfferItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOfferItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOfferItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOfferItem;
    static equals(a: SupplyOfferItem | PlainMessage<SupplyOfferItem> | undefined, b: SupplyOfferItem | PlainMessage<SupplyOfferItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of supply offers
 *
 * @generated from message Scailo.SupplyOffersList
 */
export declare class SupplyOffersList extends Message<SupplyOffersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SupplyOffer list = 1;
     */
    list: SupplyOffer[];
    constructor(data?: PartialMessage<SupplyOffersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersList;
    static equals(a: SupplyOffersList | PlainMessage<SupplyOffersList> | undefined, b: SupplyOffersList | PlainMessage<SupplyOffersList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of supply offer items
 *
 * @generated from message Scailo.SupplyOfferItemsList
 */
export declare class SupplyOfferItemsList extends Message<SupplyOfferItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SupplyOfferItem list = 1;
     */
    list: SupplyOfferItem[];
    constructor(data?: PartialMessage<SupplyOfferItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOfferItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOfferItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOfferItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOfferItemsList;
    static equals(a: SupplyOfferItemsList | PlainMessage<SupplyOfferItemsList> | undefined, b: SupplyOfferItemsList | PlainMessage<SupplyOfferItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.SupplyOfferItemHistoryRequest
 */
export declare class SupplyOfferItemHistoryRequest extends Message<SupplyOfferItemHistoryRequest> {
    /**
     * Stores the supply offer ID
     *
     * @generated from field: uint64 supply_offer_id = 10;
     */
    supplyOfferId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SupplyOfferItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOfferItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOfferItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOfferItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOfferItemHistoryRequest;
    static equals(a: SupplyOfferItemHistoryRequest | PlainMessage<SupplyOfferItemHistoryRequest> | undefined, b: SupplyOfferItemHistoryRequest | PlainMessage<SupplyOfferItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective supply offer item
 *
 * @generated from message Scailo.SupplyOfferItemProspectiveInfoRequest
 */
export declare class SupplyOfferItemProspectiveInfoRequest extends Message<SupplyOfferItemProspectiveInfoRequest> {
    /**
     * Stores the supply offer ID
     *
     * @generated from field: uint64 supply_offer_id = 10;
     */
    supplyOfferId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the ID of the vendor's unit of material (if 0, the value is ignored while retrieving records)
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    constructor(data?: PartialMessage<SupplyOfferItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOfferItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOfferItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOfferItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOfferItemProspectiveInfoRequest;
    static equals(a: SupplyOfferItemProspectiveInfoRequest | PlainMessage<SupplyOfferItemProspectiveInfoRequest> | undefined, b: SupplyOfferItemProspectiveInfoRequest | PlainMessage<SupplyOfferItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SupplyOffersServicePaginationReq
 */
export declare class SupplyOffersServicePaginationReq extends Message<SupplyOffersServicePaginationReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to return per page.
     *
     * @example 50
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Must be a strictly positive integer (1 or greater).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: Scailo.SUPPLY_OFFER_SORT_KEY sort_key = 5;
     */
    sortKey: SUPPLY_OFFER_SORT_KEY;
    /**
     * The status of this supply offer
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SupplyOffersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServicePaginationReq;
    static equals(a: SupplyOffersServicePaginationReq | PlainMessage<SupplyOffersServicePaginationReq> | undefined, b: SupplyOffersServicePaginationReq | PlainMessage<SupplyOffersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SupplyOffersServicePaginationResponse
 */
export declare class SupplyOffersServicePaginationResponse extends Message<SupplyOffersServicePaginationResponse> {
    /**
     *
     * @description Number of records returned in the current response slice.
     *
     * @example 50
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     *
     * @description The offset provided in the request.
     *
     * @example 0
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     *
     * @description The total number of records matching the criteria.
     *
     * @example 1250
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     *
     * @description The array of records for the current page.
     *
     * @generated from field: repeated Scailo.SupplyOffer payload = 4;
     */
    payload: SupplyOffer[];
    constructor(data?: PartialMessage<SupplyOffersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServicePaginationResponse;
    static equals(a: SupplyOffersServicePaginationResponse | PlainMessage<SupplyOffersServicePaginationResponse> | undefined, b: SupplyOffersServicePaginationResponse | PlainMessage<SupplyOffersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SupplyOffersServiceFilterReq
 */
export declare class SupplyOffersServiceFilterReq extends Message<SupplyOffersServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.SUPPLY_OFFER_SORT_KEY sort_key = 5;
     */
    sortKey: SUPPLY_OFFER_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the system-generated ref number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated consignee location ID
     *
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
    /**
     * The associated buyer location ID
     *
     * @generated from field: uint64 buyer_location_id = 23;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 24;
     */
    vendorId: bigint;
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
     * The exact delivery date of the item in the supply offer
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the supply offer
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the supply offer
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    /**
     * Stores the minimum value of the supply offer (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 50;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the supply offer (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 51;
     */
    totalValueMax: bigint;
    /**
     *
     * @optional
     *
     * @description Filter based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    /**
     *
     * @optional
     *
     * @description If `true`, the response will include the associated custom form field values for each record.
     * Set to `false` to improve performance when form data is not needed.
     *
     * @example true
     *
     * @generated from field: bool include_form_data = 501;
     */
    includeFormData: boolean;
    constructor(data?: PartialMessage<SupplyOffersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServiceFilterReq;
    static equals(a: SupplyOffersServiceFilterReq | PlainMessage<SupplyOffersServiceFilterReq> | undefined, b: SupplyOffersServiceFilterReq | PlainMessage<SupplyOffersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SupplyOffersServiceCountReq
 */
export declare class SupplyOffersServiceCountReq extends Message<SupplyOffersServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the system-generated ref number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated consignee location ID
     *
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
    /**
     * The associated buyer location ID
     *
     * @generated from field: uint64 buyer_location_id = 23;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 24;
     */
    vendorId: bigint;
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
     * The exact delivery date of the item in the supply offer
     *
     * @generated from field: string delivery_date_exact = 41;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the supply offer
     *
     * @generated from field: string delivery_date_start = 42;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the supply offer
     *
     * @generated from field: string delivery_date_end = 43;
     */
    deliveryDateEnd: string;
    /**
     * Stores the minimum value of the supply offer (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 50;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the supply offer (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 51;
     */
    totalValueMax: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<SupplyOffersServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServiceCountReq;
    static equals(a: SupplyOffersServiceCountReq | PlainMessage<SupplyOffersServiceCountReq> | undefined, b: SupplyOffersServiceCountReq | PlainMessage<SupplyOffersServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SupplyOffersServiceSearchAllReq
 */
export declare class SupplyOffersServiceSearchAllReq extends Message<SupplyOffersServiceSearchAllReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.SUPPLY_OFFER_SORT_KEY sort_key = 5;
     */
    sortKey: SUPPLY_OFFER_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @mandatory
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The associated consignee location ID
     *
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
    /**
     * The associated buyer location ID
     *
     * @generated from field: uint64 buyer_location_id = 23;
     */
    buyerLocationId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 24;
     */
    vendorId: bigint;
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
    constructor(data?: PartialMessage<SupplyOffersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServiceSearchAllReq;
    static equals(a: SupplyOffersServiceSearchAllReq | PlainMessage<SupplyOffersServiceSearchAllReq> | undefined, b: SupplyOffersServiceSearchAllReq | PlainMessage<SupplyOffersServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.SupplyOfferItemsSearchRequest
 */
export declare class SupplyOfferItemsSearchRequest extends Message<SupplyOfferItemsSearchRequest> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.SUPPLY_OFFER_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: SUPPLY_OFFER_ITEM_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.SUPPLY_OFFER_ITEM_STATUS status = 7;
     */
    status: SUPPLY_OFFER_ITEM_STATUS;
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
     * The ID of the supply offer
     *
     * @generated from field: uint64 supply_offer_id = 20;
     */
    supplyOfferId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 22;
     */
    vendorUomId: bigint;
    /**
     * The ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 23;
     */
    taxGroupId: bigint;
    /**
     * The exact delivery date of the item in the supply offer
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the supply offer
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the supply offer
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
    /**
     * ------------------------------------------
     * Extra filters
     * The ID of the associated vendor
     *
     * ------------------------------------------
     *
     * @generated from field: uint64 vendor_id = 200;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<SupplyOfferItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOfferItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOfferItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOfferItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOfferItemsSearchRequest;
    static equals(a: SupplyOfferItemsSearchRequest | PlainMessage<SupplyOfferItemsSearchRequest> | undefined, b: SupplyOfferItemsSearchRequest | PlainMessage<SupplyOfferItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.SupplyOffersServicePaginatedItemsResponse
 */
export declare class SupplyOffersServicePaginatedItemsResponse extends Message<SupplyOffersServicePaginatedItemsResponse> {
    /**
     *
     * @description Number of records returned in the current response slice.
     *
     * @example 50
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     *
     * @description The offset provided in the request.
     *
     * @example 0
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     *
     * @description The total number of records matching the criteria.
     *
     * @example 1250
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     *
     * @description The array of records for the current page.
     *
     * @generated from field: repeated Scailo.SupplyOfferItem payload = 4;
     */
    payload: SupplyOfferItem[];
    constructor(data?: PartialMessage<SupplyOffersServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SupplyOffersServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyOffersServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyOffersServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyOffersServicePaginatedItemsResponse;
    static equals(a: SupplyOffersServicePaginatedItemsResponse | PlainMessage<SupplyOffersServicePaginatedItemsResponse> | undefined, b: SupplyOffersServicePaginatedItemsResponse | PlainMessage<SupplyOffersServicePaginatedItemsResponse> | undefined): boolean;
}
//# sourceMappingURL=supply_offers.scailo_pb.d.ts.map
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a debit note can be added
 *
 * @generated from enum Scailo.DEBIT_NOTE_REF_FROM
 */
export declare enum DEBIT_NOTE_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the debit note originated from a purchase order
     *
     * @generated from enum value: DEBIT_NOTE_REF_FROM_PURCHASE_ORDER = 1;
     */
    DEBIT_NOTE_REF_FROM_PURCHASE_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.DEBIT_NOTE_ITEM_SORT_KEY
 */
export declare enum DEBIT_NOTE_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the vendor unit of material ID
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_VENDOR_UOM_ID = 12;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_VENDOR_UOM_ID = 12,
    /**
     * Fetch ordered results by the vendor quantity
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_VENDOR_QUANTITY = 13;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_VENDOR_QUANTITY = 13,
    /**
     * Fetch ordered results by the vendor unit price
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_VENDOR_UNIT_PRICE = 14;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_VENDOR_UNIT_PRICE = 14,
    /**
     * Fetch ordered results by the tax group ID
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    DEBIT_NOTE_ITEM_SORT_KEY_TAX_GROUP_ID = 16
}
/**
 *
 * Describes the applicable statuses of debit note items
 *
 * @generated from enum Scailo.DEBIT_NOTE_ITEM_STATUS
 */
export declare enum DEBIT_NOTE_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    DEBIT_NOTE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the debit note items must have been approved
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_STATUS_APPROVED = 1;
     */
    DEBIT_NOTE_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the debit note items must be waiting for approval
     *
     * @generated from enum value: DEBIT_NOTE_ITEM_STATUS_UNAPPROVED = 2;
     */
    DEBIT_NOTE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.DEBIT_NOTE_SORT_KEY
 */
export declare enum DEBIT_NOTE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    DEBIT_NOTE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_CREATED_AT = 1;
     */
    DEBIT_NOTE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_MODIFIED_AT = 2;
     */
    DEBIT_NOTE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_APPROVED_ON = 3;
     */
    DEBIT_NOTE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_APPROVED_BY = 4;
     */
    DEBIT_NOTE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    DEBIT_NOTE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_COMPLETED_ON = 6;
     */
    DEBIT_NOTE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_REFERENCE_ID = 10;
     */
    DEBIT_NOTE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    DEBIT_NOTE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the total value
     *
     * @generated from enum value: DEBIT_NOTE_SORT_KEY_TOTAL_VALUE = 30;
     */
    DEBIT_NOTE_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.DebitNotesServiceCreateRequest
 */
export declare class DebitNotesServiceCreateRequest extends Message<DebitNotesServiceCreateRequest> {
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
     * The reference ID of the debit note
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 12;
     */
    refFrom: DEBIT_NOTE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 15;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 16;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<DebitNotesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceCreateRequest;
    static equals(a: DebitNotesServiceCreateRequest | PlainMessage<DebitNotesServiceCreateRequest> | undefined, b: DebitNotesServiceCreateRequest | PlainMessage<DebitNotesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.DebitNotesServiceUpdateRequest
 */
export declare class DebitNotesServiceUpdateRequest extends Message<DebitNotesServiceUpdateRequest> {
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
     * The reference ID of the debit note
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 15;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 16;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<DebitNotesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceUpdateRequest;
    static equals(a: DebitNotesServiceUpdateRequest | PlainMessage<DebitNotesServiceUpdateRequest> | undefined, b: DebitNotesServiceUpdateRequest | PlainMessage<DebitNotesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.DebitNotesServiceAutofillRequest
 */
export declare class DebitNotesServiceAutofillRequest extends Message<DebitNotesServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<DebitNotesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceAutofillRequest;
    static equals(a: DebitNotesServiceAutofillRequest | PlainMessage<DebitNotesServiceAutofillRequest> | undefined, b: DebitNotesServiceAutofillRequest | PlainMessage<DebitNotesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.DebitNoteAncillaryParameters
 */
export declare class DebitNoteAncillaryParameters extends Message<DebitNoteAncillaryParameters> {
    /**
     * The UUID of the ref_id (the UUID of the associated ref_id)
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    /**
     * The UUID of the currency (the UUID of the associated currency)
     *
     * @generated from field: string currency_uuid = 214;
     */
    currencyUuid: string;
    constructor(data?: PartialMessage<DebitNoteAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteAncillaryParameters;
    static equals(a: DebitNoteAncillaryParameters | PlainMessage<DebitNoteAncillaryParameters> | undefined, b: DebitNoteAncillaryParameters | PlainMessage<DebitNoteAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.DebitNote
 */
export declare class DebitNote extends Message<DebitNote> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this debit note
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
     * The status of this debit note
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this debit note
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this debit note was marked as completed
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
     * The reference ID of the debit note
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
     * @generated from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 12;
     */
    refFrom: DEBIT_NOTE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The associated ID of the currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 15;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 16;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * Stores the total value of the debit note (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 20;
     */
    totalValue: number;
    /**
     * The list of associated debit note items
     *
     * @generated from field: repeated Scailo.DebitNoteItem list = 30;
     */
    list: DebitNoteItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<DebitNote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNote;
    static equals(a: DebitNote | PlainMessage<DebitNote> | undefined, b: DebitNote | PlainMessage<DebitNote> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a debit note
 *
 * @generated from message Scailo.DebitNotesServiceItemCreateRequest
 */
export declare class DebitNotesServiceItemCreateRequest extends Message<DebitNotesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the debit note ID
     *
     * @generated from field: uint64 debit_note_id = 10;
     */
    debitNoteId: bigint;
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in vendor's unit of material
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
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<DebitNotesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceItemCreateRequest;
    static equals(a: DebitNotesServiceItemCreateRequest | PlainMessage<DebitNotesServiceItemCreateRequest> | undefined, b: DebitNotesServiceItemCreateRequest | PlainMessage<DebitNotesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a debit note
 *
 * @generated from message Scailo.DebitNotesServiceItemUpdateRequest
 */
export declare class DebitNotesServiceItemUpdateRequest extends Message<DebitNotesServiceItemUpdateRequest> {
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in vendor's unit of material
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
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<DebitNotesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceItemUpdateRequest;
    static equals(a: DebitNotesServiceItemUpdateRequest | PlainMessage<DebitNotesServiceItemUpdateRequest> | undefined, b: DebitNotesServiceItemUpdateRequest | PlainMessage<DebitNotesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a debit note
 *
 * @generated from message Scailo.DebitNoteItem
 */
export declare class DebitNoteItem extends Message<DebitNoteItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this debit note
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
     * Stores the debit note ID
     *
     * @generated from field: uint64 debit_note_id = 10;
     */
    debitNoteId: bigint;
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in vendor's unit of material
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
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 18;
     */
    specifications: string;
    constructor(data?: PartialMessage<DebitNoteItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteItem;
    static equals(a: DebitNoteItem | PlainMessage<DebitNoteItem> | undefined, b: DebitNoteItem | PlainMessage<DebitNoteItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of debit notes
 *
 * @generated from message Scailo.DebitNotesList
 */
export declare class DebitNotesList extends Message<DebitNotesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.DebitNote list = 1;
     */
    list: DebitNote[];
    constructor(data?: PartialMessage<DebitNotesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesList;
    static equals(a: DebitNotesList | PlainMessage<DebitNotesList> | undefined, b: DebitNotesList | PlainMessage<DebitNotesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of debit note items
 *
 * @generated from message Scailo.DebitNoteItemsList
 */
export declare class DebitNoteItemsList extends Message<DebitNoteItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.DebitNoteItem list = 1;
     */
    list: DebitNoteItem[];
    constructor(data?: PartialMessage<DebitNoteItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteItemsList;
    static equals(a: DebitNoteItemsList | PlainMessage<DebitNoteItemsList> | undefined, b: DebitNoteItemsList | PlainMessage<DebitNoteItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.DebitNoteItemHistoryRequest
 */
export declare class DebitNoteItemHistoryRequest extends Message<DebitNoteItemHistoryRequest> {
    /**
     * Stores the debit note ID
     *
     * @generated from field: uint64 debit_note_id = 10;
     */
    debitNoteId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<DebitNoteItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteItemHistoryRequest;
    static equals(a: DebitNoteItemHistoryRequest | PlainMessage<DebitNoteItemHistoryRequest> | undefined, b: DebitNoteItemHistoryRequest | PlainMessage<DebitNoteItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective debit note item
 *
 * @generated from message Scailo.DebitNoteItemProspectiveInfoRequest
 */
export declare class DebitNoteItemProspectiveInfoRequest extends Message<DebitNoteItemProspectiveInfoRequest> {
    /**
     * Stores the debit note ID
     *
     * @generated from field: uint64 debit_note_id = 10;
     */
    debitNoteId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<DebitNoteItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteItemProspectiveInfoRequest;
    static equals(a: DebitNoteItemProspectiveInfoRequest | PlainMessage<DebitNoteItemProspectiveInfoRequest> | undefined, b: DebitNoteItemProspectiveInfoRequest | PlainMessage<DebitNoteItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.DebitNotesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class DebitNotesServiceAlreadyAddedQuantityForSourceRequest extends Message<DebitNotesServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 1;
     */
    refFrom: DEBIT_NOTE_REF_FROM;
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
    constructor(data?: PartialMessage<DebitNotesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: DebitNotesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<DebitNotesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: DebitNotesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<DebitNotesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.DebitNoteItemsSearchRequest
 */
export declare class DebitNoteItemsSearchRequest extends Message<DebitNoteItemsSearchRequest> {
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
     * @generated from field: Scailo.DEBIT_NOTE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: DEBIT_NOTE_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.DEBIT_NOTE_ITEM_STATUS status = 7;
     */
    status: DEBIT_NOTE_ITEM_STATUS;
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
     * The ID of the debit note
     *
     * @generated from field: uint64 debit_note_id = 20;
     */
    debitNoteId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 23;
     */
    vendorUomId: bigint;
    /**
     * The ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 27;
     */
    taxGroupId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<DebitNoteItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteItemsSearchRequest;
    static equals(a: DebitNoteItemsSearchRequest | PlainMessage<DebitNoteItemsSearchRequest> | undefined, b: DebitNoteItemsSearchRequest | PlainMessage<DebitNoteItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.DebitNotesServicePaginatedItemsResponse
 */
export declare class DebitNotesServicePaginatedItemsResponse extends Message<DebitNotesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.DebitNoteItem payload = 4;
     */
    payload: DebitNoteItem[];
    constructor(data?: PartialMessage<DebitNotesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServicePaginatedItemsResponse;
    static equals(a: DebitNotesServicePaginatedItemsResponse | PlainMessage<DebitNotesServicePaginatedItemsResponse> | undefined, b: DebitNotesServicePaginatedItemsResponse | PlainMessage<DebitNotesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.DebitNotesServicePaginationReq
 */
export declare class DebitNotesServicePaginationReq extends Message<DebitNotesServicePaginationReq> {
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
     * @generated from field: Scailo.DEBIT_NOTE_SORT_KEY sort_key = 5;
     */
    sortKey: DEBIT_NOTE_SORT_KEY;
    /**
     * The status of this debit note
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<DebitNotesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServicePaginationReq;
    static equals(a: DebitNotesServicePaginationReq | PlainMessage<DebitNotesServicePaginationReq> | undefined, b: DebitNotesServicePaginationReq | PlainMessage<DebitNotesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.DebitNotesServicePaginationResponse
 */
export declare class DebitNotesServicePaginationResponse extends Message<DebitNotesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.DebitNote payload = 4;
     */
    payload: DebitNote[];
    constructor(data?: PartialMessage<DebitNotesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServicePaginationResponse;
    static equals(a: DebitNotesServicePaginationResponse | PlainMessage<DebitNotesServicePaginationResponse> | undefined, b: DebitNotesServicePaginationResponse | PlainMessage<DebitNotesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.DebitNotesServiceFilterReq
 */
export declare class DebitNotesServiceFilterReq extends Message<DebitNotesServiceFilterReq> {
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
     * @generated from field: Scailo.DEBIT_NOTE_SORT_KEY sort_key = 5;
     */
    sortKey: DEBIT_NOTE_SORT_KEY;
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
     * The status of this debit note
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
     * The reference ID of the debit note
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
     * @generated from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 22;
     */
    refFrom: DEBIT_NOTE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 30;
     */
    currencyId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 31;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 32;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * Stores the minimum value of the debit note (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 70;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the debit note (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 71;
     */
    totalValueMax: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<DebitNotesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceFilterReq;
    static equals(a: DebitNotesServiceFilterReq | PlainMessage<DebitNotesServiceFilterReq> | undefined, b: DebitNotesServiceFilterReq | PlainMessage<DebitNotesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.DebitNotesServiceCountReq
 */
export declare class DebitNotesServiceCountReq extends Message<DebitNotesServiceCountReq> {
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
     * The status of this debit note
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
     * The reference ID of the debit note
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
     * @generated from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 22;
     */
    refFrom: DEBIT_NOTE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 30;
     */
    currencyId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 31;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 32;
     */
    projectId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * Stores the minimum value of the debit note (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 70;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the debit note (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 71;
     */
    totalValueMax: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<DebitNotesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceCountReq;
    static equals(a: DebitNotesServiceCountReq | PlainMessage<DebitNotesServiceCountReq> | undefined, b: DebitNotesServiceCountReq | PlainMessage<DebitNotesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.DebitNotesServiceSearchAllReq
 */
export declare class DebitNotesServiceSearchAllReq extends Message<DebitNotesServiceSearchAllReq> {
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
     * @generated from field: Scailo.DEBIT_NOTE_SORT_KEY sort_key = 5;
     */
    sortKey: DEBIT_NOTE_SORT_KEY;
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
     * @generated from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 22;
     */
    refFrom: DEBIT_NOTE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 25;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<DebitNotesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceSearchAllReq;
    static equals(a: DebitNotesServiceSearchAllReq | PlainMessage<DebitNotesServiceSearchAllReq> | undefined, b: DebitNotesServiceSearchAllReq | PlainMessage<DebitNotesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a debit note reference
 *
 * @generated from message Scailo.DebitNotesServiceReferenceCreateRequest
 */
export declare class DebitNotesServiceReferenceCreateRequest extends Message<DebitNotesServiceReferenceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the debit note ID
     *
     * @generated from field: uint64 debit_note_id = 10;
     */
    debitNoteId: bigint;
    /**
     * Stores the purchase return ID
     *
     * @generated from field: uint64 purchase_return_id = 11;
     */
    purchaseReturnId: bigint;
    constructor(data?: PartialMessage<DebitNotesServiceReferenceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNotesServiceReferenceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNotesServiceReferenceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNotesServiceReferenceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNotesServiceReferenceCreateRequest;
    static equals(a: DebitNotesServiceReferenceCreateRequest | PlainMessage<DebitNotesServiceReferenceCreateRequest> | undefined, b: DebitNotesServiceReferenceCreateRequest | PlainMessage<DebitNotesServiceReferenceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a debit note reference
 *
 * @generated from message Scailo.DebitNoteReference
 */
export declare class DebitNoteReference extends Message<DebitNoteReference> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this debit note
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
     * Stores the debit note ID
     *
     * @generated from field: uint64 debit_note_id = 10;
     */
    debitNoteId: bigint;
    /**
     * Stores the purchase return ID
     *
     * @generated from field: uint64 purchase_return_id = 11;
     */
    purchaseReturnId: bigint;
    constructor(data?: PartialMessage<DebitNoteReference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteReference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteReference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteReference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteReference;
    static equals(a: DebitNoteReference | PlainMessage<DebitNoteReference> | undefined, b: DebitNoteReference | PlainMessage<DebitNoteReference> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of debit note references
 *
 * @generated from message Scailo.DebitNoteReferencesList
 */
export declare class DebitNoteReferencesList extends Message<DebitNoteReferencesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.DebitNoteReference list = 1;
     */
    list: DebitNoteReference[];
    constructor(data?: PartialMessage<DebitNoteReferencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteReferencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteReferencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteReferencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteReferencesList;
    static equals(a: DebitNoteReferencesList | PlainMessage<DebitNoteReferencesList> | undefined, b: DebitNoteReferencesList | PlainMessage<DebitNoteReferencesList> | undefined): boolean;
}
/**
 *
 * Describes the returned statistics of the debit note
 *
 * @generated from message Scailo.DebitNoteReturnStatistics
 */
export declare class DebitNoteReturnStatistics extends Message<DebitNoteReturnStatistics> {
    /**
     * Stores the ID of the family
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     * Stores the billed quantity
     *
     * @generated from field: uint64 billed_quantity = 2;
     */
    billedQuantity: bigint;
    /**
     * Stores the returned quantity
     *
     * @generated from field: uint64 returned_quantity = 3;
     */
    returnedQuantity: bigint;
    constructor(data?: PartialMessage<DebitNoteReturnStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteReturnStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteReturnStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteReturnStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteReturnStatistics;
    static equals(a: DebitNoteReturnStatistics | PlainMessage<DebitNoteReturnStatistics> | undefined, b: DebitNoteReturnStatistics | PlainMessage<DebitNoteReturnStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of returned statistics of the debit note
 *
 * @generated from message Scailo.DebitNoteReturnStatisticsList
 */
export declare class DebitNoteReturnStatisticsList extends Message<DebitNoteReturnStatisticsList> {
    /**
     * @generated from field: repeated Scailo.DebitNoteReturnStatistics list = 1;
     */
    list: DebitNoteReturnStatistics[];
    constructor(data?: PartialMessage<DebitNoteReturnStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DebitNoteReturnStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebitNoteReturnStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebitNoteReturnStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebitNoteReturnStatisticsList;
    static equals(a: DebitNoteReturnStatisticsList | PlainMessage<DebitNoteReturnStatisticsList> | undefined, b: DebitNoteReturnStatisticsList | PlainMessage<DebitNoteReturnStatisticsList> | undefined): boolean;
}
//# sourceMappingURL=debit_notes.scailo_pb.d.ts.map
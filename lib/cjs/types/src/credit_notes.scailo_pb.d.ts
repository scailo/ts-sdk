import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a credit note can be added
 *
 * @generated from enum Scailo.CREDIT_NOTE_REF_FROM
 */
export declare enum CREDIT_NOTE_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the credit note originated from a sales order
     *
     * @generated from enum value: CREDIT_NOTE_REF_FROM_SALES_ORDER = 1;
     */
    CREDIT_NOTE_REF_FROM_SALES_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.CREDIT_NOTE_ITEM_SORT_KEY
 */
export declare enum CREDIT_NOTE_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the client unit of material ID
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch ordered results by the client quantity
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * Fetch ordered results by the client family code
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * Fetch ordered results by the unit price
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_UNIT_PRICE = 15;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_UNIT_PRICE = 15,
    /**
     * Fetch ordered results by the tax group ID
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_SORT_KEY_TAX_GROUP_ID = 16;
     */
    CREDIT_NOTE_ITEM_SORT_KEY_TAX_GROUP_ID = 16
}
/**
 *
 * Describes the applicable statuses of credit note items
 *
 * @generated from enum Scailo.CREDIT_NOTE_ITEM_STATUS
 */
export declare enum CREDIT_NOTE_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    CREDIT_NOTE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the credit note items must have been approved
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_STATUS_APPROVED = 1;
     */
    CREDIT_NOTE_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the credit note items must be waiting for approval
     *
     * @generated from enum value: CREDIT_NOTE_ITEM_STATUS_UNAPPROVED = 2;
     */
    CREDIT_NOTE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.CREDIT_NOTE_SORT_KEY
 */
export declare enum CREDIT_NOTE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CREDIT_NOTE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_CREATED_AT = 1;
     */
    CREDIT_NOTE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_MODIFIED_AT = 2;
     */
    CREDIT_NOTE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_APPROVED_ON = 3;
     */
    CREDIT_NOTE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_APPROVED_BY = 4;
     */
    CREDIT_NOTE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    CREDIT_NOTE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_COMPLETED_ON = 6;
     */
    CREDIT_NOTE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_REFERENCE_ID = 10;
     */
    CREDIT_NOTE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    CREDIT_NOTE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the total value
     *
     * @generated from enum value: CREDIT_NOTE_SORT_KEY_TOTAL_VALUE = 30;
     */
    CREDIT_NOTE_SORT_KEY_TOTAL_VALUE = 30
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.CreditNotesServiceCreateRequest
 */
export declare class CreditNotesServiceCreateRequest extends Message<CreditNotesServiceCreateRequest> {
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
     * The reference ID of the credit note
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 12;
     */
    refFrom: CREDIT_NOTE_REF_FROM;
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
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 17;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<CreditNotesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceCreateRequest;
    static equals(a: CreditNotesServiceCreateRequest | PlainMessage<CreditNotesServiceCreateRequest> | undefined, b: CreditNotesServiceCreateRequest | PlainMessage<CreditNotesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.CreditNotesServiceUpdateRequest
 */
export declare class CreditNotesServiceUpdateRequest extends Message<CreditNotesServiceUpdateRequest> {
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
     * The reference ID of the credit note
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
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 17;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<CreditNotesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceUpdateRequest;
    static equals(a: CreditNotesServiceUpdateRequest | PlainMessage<CreditNotesServiceUpdateRequest> | undefined, b: CreditNotesServiceUpdateRequest | PlainMessage<CreditNotesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.CreditNotesServiceAutofillRequest
 */
export declare class CreditNotesServiceAutofillRequest extends Message<CreditNotesServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<CreditNotesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceAutofillRequest;
    static equals(a: CreditNotesServiceAutofillRequest | PlainMessage<CreditNotesServiceAutofillRequest> | undefined, b: CreditNotesServiceAutofillRequest | PlainMessage<CreditNotesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.CreditNoteAncillaryParameters
 */
export declare class CreditNoteAncillaryParameters extends Message<CreditNoteAncillaryParameters> {
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
    constructor(data?: PartialMessage<CreditNoteAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNoteAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNoteAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNoteAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNoteAncillaryParameters;
    static equals(a: CreditNoteAncillaryParameters | PlainMessage<CreditNoteAncillaryParameters> | undefined, b: CreditNoteAncillaryParameters | PlainMessage<CreditNoteAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.CreditNote
 */
export declare class CreditNote extends Message<CreditNote> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this credit note
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
     * The status of this credit note
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this credit note
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this credit note was marked as completed
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
     * The reference ID of the credit note
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
     * @generated from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 12;
     */
    refFrom: CREDIT_NOTE_REF_FROM;
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
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * Any miscellaneous cost
     *
     * @generated from field: uint64 miscellaneous_cost = 16;
     */
    miscellaneousCost: bigint;
    /**
     * The optional discount amount
     *
     * @generated from field: uint64 overall_discount = 17;
     */
    overallDiscount: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * Stores the total value of the credit note (as a double, which requires no adjustments)
     *
     * @generated from field: double total_value = 20;
     */
    totalValue: number;
    /**
     * The list of associated credit note items
     *
     * @generated from field: repeated Scailo.CreditNoteItem list = 30;
     */
    list: CreditNoteItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<CreditNote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNote;
    static equals(a: CreditNote | PlainMessage<CreditNote> | undefined, b: CreditNote | PlainMessage<CreditNote> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a credit note
 *
 * @generated from message Scailo.CreditNotesServiceItemCreateRequest
 */
export declare class CreditNotesServiceItemCreateRequest extends Message<CreditNotesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the credit note ID
     *
     * @generated from field: uint64 credit_note_id = 10;
     */
    creditNoteId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being supplied in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     * The family code as represented by the client
     *
     * @generated from field: string client_family_code = 15;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item (as supplied to the client)
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<CreditNotesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceItemCreateRequest;
    static equals(a: CreditNotesServiceItemCreateRequest | PlainMessage<CreditNotesServiceItemCreateRequest> | undefined, b: CreditNotesServiceItemCreateRequest | PlainMessage<CreditNotesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a credit note
 *
 * @generated from message Scailo.CreditNotesServiceItemUpdateRequest
 */
export declare class CreditNotesServiceItemUpdateRequest extends Message<CreditNotesServiceItemUpdateRequest> {
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
     * The quantity (in cents) being supplied in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     * The family code as represented by the client
     *
     * @generated from field: string client_family_code = 15;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item (as supplied to the client)
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<CreditNotesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceItemUpdateRequest;
    static equals(a: CreditNotesServiceItemUpdateRequest | PlainMessage<CreditNotesServiceItemUpdateRequest> | undefined, b: CreditNotesServiceItemUpdateRequest | PlainMessage<CreditNotesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a credit note
 *
 * @generated from message Scailo.CreditNoteItem
 */
export declare class CreditNoteItem extends Message<CreditNoteItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this credit note
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
     * Stores the credit note ID
     *
     * @generated from field: uint64 credit_note_id = 10;
     */
    creditNoteId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being supplied in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 13;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 14;
     */
    clientQuantity: bigint;
    /**
     * The family code as represented by the client
     *
     * @generated from field: string client_family_code = 15;
     */
    clientFamilyCode: string;
    /**
     * The unit price of the item (as supplied to the client)
     *
     * @generated from field: uint64 unit_price = 16;
     */
    unitPrice: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 17;
     */
    taxGroupId: bigint;
    /**
     * The applicable round off amount (optional, and can be positive or negative)
     *
     * @generated from field: int64 round_off = 18;
     */
    roundOff: bigint;
    /**
     * Optional specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<CreditNoteItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNoteItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNoteItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNoteItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNoteItem;
    static equals(a: CreditNoteItem | PlainMessage<CreditNoteItem> | undefined, b: CreditNoteItem | PlainMessage<CreditNoteItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of credit notes
 *
 * @generated from message Scailo.CreditNotesList
 */
export declare class CreditNotesList extends Message<CreditNotesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.CreditNote list = 1;
     */
    list: CreditNote[];
    constructor(data?: PartialMessage<CreditNotesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesList;
    static equals(a: CreditNotesList | PlainMessage<CreditNotesList> | undefined, b: CreditNotesList | PlainMessage<CreditNotesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of credit note items
 *
 * @generated from message Scailo.CreditNoteItemsList
 */
export declare class CreditNoteItemsList extends Message<CreditNoteItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.CreditNoteItem list = 1;
     */
    list: CreditNoteItem[];
    constructor(data?: PartialMessage<CreditNoteItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNoteItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNoteItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNoteItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNoteItemsList;
    static equals(a: CreditNoteItemsList | PlainMessage<CreditNoteItemsList> | undefined, b: CreditNoteItemsList | PlainMessage<CreditNoteItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.CreditNoteItemHistoryRequest
 */
export declare class CreditNoteItemHistoryRequest extends Message<CreditNoteItemHistoryRequest> {
    /**
     * Stores the credit note ID
     *
     * @generated from field: uint64 credit_note_id = 10;
     */
    creditNoteId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<CreditNoteItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNoteItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNoteItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNoteItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNoteItemHistoryRequest;
    static equals(a: CreditNoteItemHistoryRequest | PlainMessage<CreditNoteItemHistoryRequest> | undefined, b: CreditNoteItemHistoryRequest | PlainMessage<CreditNoteItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective credit note item
 *
 * @generated from message Scailo.CreditNoteItemProspectiveInfoRequest
 */
export declare class CreditNoteItemProspectiveInfoRequest extends Message<CreditNoteItemProspectiveInfoRequest> {
    /**
     * Stores the credit note ID
     *
     * @generated from field: uint64 credit_note_id = 10;
     */
    creditNoteId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<CreditNoteItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNoteItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNoteItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNoteItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNoteItemProspectiveInfoRequest;
    static equals(a: CreditNoteItemProspectiveInfoRequest | PlainMessage<CreditNoteItemProspectiveInfoRequest> | undefined, b: CreditNoteItemProspectiveInfoRequest | PlainMessage<CreditNoteItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.CreditNotesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class CreditNotesServiceAlreadyAddedQuantityForSourceRequest extends Message<CreditNotesServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 1;
     */
    refFrom: CREDIT_NOTE_REF_FROM;
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
    constructor(data?: PartialMessage<CreditNotesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: CreditNotesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<CreditNotesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: CreditNotesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<CreditNotesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.CreditNoteItemsSearchRequest
 */
export declare class CreditNoteItemsSearchRequest extends Message<CreditNoteItemsSearchRequest> {
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
     * @generated from field: Scailo.CREDIT_NOTE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: CREDIT_NOTE_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.CREDIT_NOTE_ITEM_STATUS status = 7;
     */
    status: CREDIT_NOTE_ITEM_STATUS;
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
     * The ID of the credit note
     *
     * @generated from field: uint64 credit_note_id = 20;
     */
    creditNoteId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 21;
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
     * @generated from field: string client_family_code = 25;
     */
    clientFamilyCode: string;
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
    constructor(data?: PartialMessage<CreditNoteItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNoteItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNoteItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNoteItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNoteItemsSearchRequest;
    static equals(a: CreditNoteItemsSearchRequest | PlainMessage<CreditNoteItemsSearchRequest> | undefined, b: CreditNoteItemsSearchRequest | PlainMessage<CreditNoteItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.CreditNotesServicePaginatedItemsResponse
 */
export declare class CreditNotesServicePaginatedItemsResponse extends Message<CreditNotesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.CreditNoteItem payload = 4;
     */
    payload: CreditNoteItem[];
    constructor(data?: PartialMessage<CreditNotesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServicePaginatedItemsResponse;
    static equals(a: CreditNotesServicePaginatedItemsResponse | PlainMessage<CreditNotesServicePaginatedItemsResponse> | undefined, b: CreditNotesServicePaginatedItemsResponse | PlainMessage<CreditNotesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.CreditNotesServicePaginationReq
 */
export declare class CreditNotesServicePaginationReq extends Message<CreditNotesServicePaginationReq> {
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
     * @generated from field: Scailo.CREDIT_NOTE_SORT_KEY sort_key = 5;
     */
    sortKey: CREDIT_NOTE_SORT_KEY;
    /**
     * The status of this credit note
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<CreditNotesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServicePaginationReq;
    static equals(a: CreditNotesServicePaginationReq | PlainMessage<CreditNotesServicePaginationReq> | undefined, b: CreditNotesServicePaginationReq | PlainMessage<CreditNotesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.CreditNotesServicePaginationResponse
 */
export declare class CreditNotesServicePaginationResponse extends Message<CreditNotesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.CreditNote payload = 4;
     */
    payload: CreditNote[];
    constructor(data?: PartialMessage<CreditNotesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServicePaginationResponse;
    static equals(a: CreditNotesServicePaginationResponse | PlainMessage<CreditNotesServicePaginationResponse> | undefined, b: CreditNotesServicePaginationResponse | PlainMessage<CreditNotesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.CreditNotesServiceFilterReq
 */
export declare class CreditNotesServiceFilterReq extends Message<CreditNotesServiceFilterReq> {
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
     * @generated from field: Scailo.CREDIT_NOTE_SORT_KEY sort_key = 5;
     */
    sortKey: CREDIT_NOTE_SORT_KEY;
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
     * The status of this credit note
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
     * The reference ID of the credit note
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
     * @generated from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 22;
     */
    refFrom: CREDIT_NOTE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 24;
     */
    currencyId: bigint;
    /**
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 25;
     */
    bankAccountId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated project of the linked sales order
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    /**
     * Stores the minimum value of the credit note (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 70;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the credit note (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 71;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<CreditNotesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceFilterReq;
    static equals(a: CreditNotesServiceFilterReq | PlainMessage<CreditNotesServiceFilterReq> | undefined, b: CreditNotesServiceFilterReq | PlainMessage<CreditNotesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.CreditNotesServiceCountReq
 */
export declare class CreditNotesServiceCountReq extends Message<CreditNotesServiceCountReq> {
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
     * The status of this credit note
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
     * The reference ID of the credit note
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
     * @generated from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 22;
     */
    refFrom: CREDIT_NOTE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 24;
     */
    currencyId: bigint;
    /**
     * The associated ID of the bank account
     *
     * @generated from field: uint64 bank_account_id = 25;
     */
    bankAccountId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated project of the linked sales order
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    /**
     * Stores the minimum value of the credit note (ignored if 0)
     *
     * @generated from field: uint64 total_value_min = 70;
     */
    totalValueMin: bigint;
    /**
     * Stores the maximum value of the credit note (ignored if 0)
     *
     * @generated from field: uint64 total_value_max = 71;
     */
    totalValueMax: bigint;
    constructor(data?: PartialMessage<CreditNotesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceCountReq;
    static equals(a: CreditNotesServiceCountReq | PlainMessage<CreditNotesServiceCountReq> | undefined, b: CreditNotesServiceCountReq | PlainMessage<CreditNotesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.CreditNotesServiceSearchAllReq
 */
export declare class CreditNotesServiceSearchAllReq extends Message<CreditNotesServiceSearchAllReq> {
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
     * @generated from field: Scailo.CREDIT_NOTE_SORT_KEY sort_key = 5;
     */
    sortKey: CREDIT_NOTE_SORT_KEY;
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
     * @generated from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 22;
     */
    refFrom: CREDIT_NOTE_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    constructor(data?: PartialMessage<CreditNotesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceSearchAllReq;
    static equals(a: CreditNotesServiceSearchAllReq | PlainMessage<CreditNotesServiceSearchAllReq> | undefined, b: CreditNotesServiceSearchAllReq | PlainMessage<CreditNotesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a credit note reference
 *
 * @generated from message Scailo.CreditNotesServiceReferenceCreateRequest
 */
export declare class CreditNotesServiceReferenceCreateRequest extends Message<CreditNotesServiceReferenceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the credit note ID
     *
     * @generated from field: uint64 credit_note_id = 10;
     */
    creditNoteId: bigint;
    /**
     * Stores the sales return ID
     *
     * @generated from field: uint64 sales_return_id = 11;
     */
    salesReturnId: bigint;
    constructor(data?: PartialMessage<CreditNotesServiceReferenceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNotesServiceReferenceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNotesServiceReferenceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNotesServiceReferenceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNotesServiceReferenceCreateRequest;
    static equals(a: CreditNotesServiceReferenceCreateRequest | PlainMessage<CreditNotesServiceReferenceCreateRequest> | undefined, b: CreditNotesServiceReferenceCreateRequest | PlainMessage<CreditNotesServiceReferenceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a credit note reference
 *
 * @generated from message Scailo.CreditNoteReference
 */
export declare class CreditNoteReference extends Message<CreditNoteReference> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this credit note
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
     * Stores the credit note ID
     *
     * @generated from field: uint64 credit_note_id = 10;
     */
    creditNoteId: bigint;
    /**
     * Stores the sales return ID
     *
     * @generated from field: uint64 sales_return_id = 11;
     */
    salesReturnId: bigint;
    constructor(data?: PartialMessage<CreditNoteReference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNoteReference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNoteReference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNoteReference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNoteReference;
    static equals(a: CreditNoteReference | PlainMessage<CreditNoteReference> | undefined, b: CreditNoteReference | PlainMessage<CreditNoteReference> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of credit note references
 *
 * @generated from message Scailo.CreditNoteReferencesList
 */
export declare class CreditNoteReferencesList extends Message<CreditNoteReferencesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.CreditNoteReference list = 1;
     */
    list: CreditNoteReference[];
    constructor(data?: PartialMessage<CreditNoteReferencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CreditNoteReferencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditNoteReferencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditNoteReferencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditNoteReferencesList;
    static equals(a: CreditNoteReferencesList | PlainMessage<CreditNoteReferencesList> | undefined, b: CreditNoteReferencesList | PlainMessage<CreditNoteReferencesList> | undefined): boolean;
}
//# sourceMappingURL=credit_notes.scailo_pb.d.ts.map
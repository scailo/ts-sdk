import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS, TRANSACTION_TYPE } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a purchase payment can be added
 *
 * @generated from enum Scailo.PURCHASE_PAYMENT_REF_FROM
 */
export declare enum PURCHASE_PAYMENT_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: PURCHASE_PAYMENT_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_PAYMENT_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the purchase payment originated from a purchase order
     *
     * @generated from enum value: PURCHASE_PAYMENT_REF_FROM_PURCHASE_ORDER = 1;
     */
    PURCHASE_PAYMENT_REF_FROM_PURCHASE_ORDER = 1,
    /**
     * Denotes that the purchase payment originated from a vendor invoice
     *
     * @generated from enum value: PURCHASE_PAYMENT_REF_FROM_VENDOR_INVOICE = 2;
     */
    PURCHASE_PAYMENT_REF_FROM_VENDOR_INVOICE = 2,
    /**
     * Denotes that the purchase payment originated from a debit note
     *
     * @generated from enum value: PURCHASE_PAYMENT_REF_FROM_DEBIT_NOTE = 3;
     */
    PURCHASE_PAYMENT_REF_FROM_DEBIT_NOTE = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PURCHASE_PAYMENT_SORT_KEY
 */
export declare enum PURCHASE_PAYMENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_PAYMENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_PAYMENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_PAYMENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_PAYMENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_PAYMENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_PAYMENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    PURCHASE_PAYMENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_REFERENCE_ID = 10;
     */
    PURCHASE_PAYMENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PURCHASE_PAYMENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the payment timestamp
     *
     * @generated from enum value: PURCHASE_PAYMENT_SORT_KEY_PAYMENT_TIMESTAMP = 12;
     */
    PURCHASE_PAYMENT_SORT_KEY_PAYMENT_TIMESTAMP = 12
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.PurchasesPaymentsServiceCreateRequest
 */
export declare class PurchasesPaymentsServiceCreateRequest extends Message<PurchasesPaymentsServiceCreateRequest> {
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
     * The reference on which the purchase payment has been created
     *
     * @generated from field: Scailo.PURCHASE_PAYMENT_REF_FROM ref_from = 12;
     */
    refFrom: PURCHASE_PAYMENT_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the associated bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: Scailo.TRANSACTION_TYPE transaction_type = 17;
     */
    transactionType: TRANSACTION_TYPE;
    /**
     * The initial amount in cents, without any deductions
     *
     * @generated from field: uint64 amount_base = 18;
     */
    amountBase: bigint;
    /**
     * The final amount in cents, after all the deductions
     *
     * @generated from field: uint64 amount_net = 19;
     */
    amountNet: bigint;
    /**
     * The date & time of when the payment needs to be made
     *
     * @generated from field: uint64 payment_timestamp = 20;
     */
    paymentTimestamp: bigint;
    /**
     * The description of the purchase payment
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<PurchasesPaymentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesPaymentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesPaymentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceCreateRequest;
    static equals(a: PurchasesPaymentsServiceCreateRequest | PlainMessage<PurchasesPaymentsServiceCreateRequest> | undefined, b: PurchasesPaymentsServiceCreateRequest | PlainMessage<PurchasesPaymentsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.PurchasesPaymentsServiceUpdateRequest
 */
export declare class PurchasesPaymentsServiceUpdateRequest extends Message<PurchasesPaymentsServiceUpdateRequest> {
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
     * The ID of the associated bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: Scailo.TRANSACTION_TYPE transaction_type = 17;
     */
    transactionType: TRANSACTION_TYPE;
    /**
     * The initial amount in cents, without any deductions
     *
     * @generated from field: uint64 amount_base = 18;
     */
    amountBase: bigint;
    /**
     * The final amount in cents, after all the deductions
     *
     * @generated from field: uint64 amount_net = 19;
     */
    amountNet: bigint;
    /**
     * The date & time of when the payment needs to be made
     *
     * @generated from field: uint64 payment_timestamp = 20;
     */
    paymentTimestamp: bigint;
    /**
     * The description of the purchase payment
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<PurchasesPaymentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesPaymentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesPaymentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceUpdateRequest;
    static equals(a: PurchasesPaymentsServiceUpdateRequest | PlainMessage<PurchasesPaymentsServiceUpdateRequest> | undefined, b: PurchasesPaymentsServiceUpdateRequest | PlainMessage<PurchasesPaymentsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.PurchasePaymentAncillaryParameters
 */
export declare class PurchasePaymentAncillaryParameters extends Message<PurchasePaymentAncillaryParameters> {
    /**
     * The UUID of the ref_id (the UUID of the associated ref_id)
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    /**
     * The UUID of the vendor (the UUID of the associated vendor_id)
     *
     * @generated from field: string vendor_uuid = 214;
     */
    vendorUuid: string;
    /**
     * The UUID of the bank account (the UUID of the bank_account_id)
     *
     * @generated from field: string bank_account_uuid = 215;
     */
    bankAccountUuid: string;
    /**
     * The UUID of the currency (the UUID of the associated currency)
     *
     * @generated from field: string currency_uuid = 216;
     */
    currencyUuid: string;
    constructor(data?: PartialMessage<PurchasePaymentAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasePaymentAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasePaymentAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasePaymentAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasePaymentAncillaryParameters;
    static equals(a: PurchasePaymentAncillaryParameters | PlainMessage<PurchasePaymentAncillaryParameters> | undefined, b: PurchasePaymentAncillaryParameters | PlainMessage<PurchasePaymentAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.PurchasePayment
 */
export declare class PurchasePayment extends Message<PurchasePayment> {
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
     * The reference on which the purchase payment has been created
     *
     * @generated from field: Scailo.PURCHASE_PAYMENT_REF_FROM ref_from = 12;
     */
    refFrom: PURCHASE_PAYMENT_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 14;
     */
    vendorId: bigint;
    /**
     * The ID of the associated bank account
     *
     * @generated from field: uint64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: Scailo.TRANSACTION_TYPE transaction_type = 17;
     */
    transactionType: TRANSACTION_TYPE;
    /**
     * The initial amount in cents, without any deductions
     *
     * @generated from field: uint64 amount_base = 18;
     */
    amountBase: bigint;
    /**
     * The final amount in cents, after all the deductions
     *
     * @generated from field: uint64 amount_net = 19;
     */
    amountNet: bigint;
    /**
     * The date & time of when the payment needs to be made
     *
     * @generated from field: uint64 payment_timestamp = 20;
     */
    paymentTimestamp: bigint;
    /**
     * The description of the purchase payment
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<PurchasePayment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasePayment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasePayment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasePayment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasePayment;
    static equals(a: PurchasePayment | PlainMessage<PurchasePayment> | undefined, b: PurchasePayment | PlainMessage<PurchasePayment> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.PurchasesPaymentsList
 */
export declare class PurchasesPaymentsList extends Message<PurchasesPaymentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PurchasePayment list = 1;
     */
    list: PurchasePayment[];
    constructor(data?: PartialMessage<PurchasesPaymentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesPaymentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesPaymentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesPaymentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesPaymentsList;
    static equals(a: PurchasesPaymentsList | PlainMessage<PurchasesPaymentsList> | undefined, b: PurchasesPaymentsList | PlainMessage<PurchasesPaymentsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.PurchasesPaymentsServicePaginationReq
 */
export declare class PurchasesPaymentsServicePaginationReq extends Message<PurchasesPaymentsServicePaginationReq> {
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
     * @generated from field: Scailo.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_PAYMENT_SORT_KEY;
    /**
     * The status of this purchase payment
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<PurchasesPaymentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesPaymentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesPaymentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesPaymentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesPaymentsServicePaginationReq;
    static equals(a: PurchasesPaymentsServicePaginationReq | PlainMessage<PurchasesPaymentsServicePaginationReq> | undefined, b: PurchasesPaymentsServicePaginationReq | PlainMessage<PurchasesPaymentsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.PurchasesPaymentsServicePaginationResponse
 */
export declare class PurchasesPaymentsServicePaginationResponse extends Message<PurchasesPaymentsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.PurchasePayment payload = 4;
     */
    payload: PurchasePayment[];
    constructor(data?: PartialMessage<PurchasesPaymentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesPaymentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesPaymentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesPaymentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesPaymentsServicePaginationResponse;
    static equals(a: PurchasesPaymentsServicePaginationResponse | PlainMessage<PurchasesPaymentsServicePaginationResponse> | undefined, b: PurchasesPaymentsServicePaginationResponse | PlainMessage<PurchasesPaymentsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.PurchasesPaymentsServiceFilterReq
 */
export declare class PurchasesPaymentsServiceFilterReq extends Message<PurchasesPaymentsServiceFilterReq> {
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
     * @generated from field: Scailo.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_PAYMENT_SORT_KEY;
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
     * The reference on which the purchase payment has been created
     *
     * @generated from field: Scailo.PURCHASE_PAYMENT_REF_FROM ref_from = 22;
     */
    refFrom: PURCHASE_PAYMENT_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 24;
     */
    vendorId: bigint;
    /**
     * The ID of the associated bank account
     *
     * @generated from field: uint64 bank_account_id = 25;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 26;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: Scailo.TRANSACTION_TYPE transaction_type = 27;
     */
    transactionType: TRANSACTION_TYPE;
    /**
     * The start range of the payment timestamp
     *
     * @generated from field: uint64 payment_timestamp_start = 28;
     */
    paymentTimestampStart: bigint;
    /**
     * The end range of the payment timestamp
     *
     * @generated from field: uint64 payment_timestamp_end = 29;
     */
    paymentTimestampEnd: bigint;
    constructor(data?: PartialMessage<PurchasesPaymentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesPaymentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesPaymentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceFilterReq;
    static equals(a: PurchasesPaymentsServiceFilterReq | PlainMessage<PurchasesPaymentsServiceFilterReq> | undefined, b: PurchasesPaymentsServiceFilterReq | PlainMessage<PurchasesPaymentsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.PurchasesPaymentsServiceCountReq
 */
export declare class PurchasesPaymentsServiceCountReq extends Message<PurchasesPaymentsServiceCountReq> {
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
     * The reference on which the purchase payment has been created
     *
     * @generated from field: Scailo.PURCHASE_PAYMENT_REF_FROM ref_from = 22;
     */
    refFrom: PURCHASE_PAYMENT_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 24;
     */
    vendorId: bigint;
    /**
     * The ID of the associated bank account
     *
     * @generated from field: uint64 bank_account_id = 25;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 26;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: Scailo.TRANSACTION_TYPE transaction_type = 27;
     */
    transactionType: TRANSACTION_TYPE;
    /**
     * The start range of the payment timestamp
     *
     * @generated from field: uint64 payment_timestamp_start = 28;
     */
    paymentTimestampStart: bigint;
    /**
     * The end range of the payment timestamp
     *
     * @generated from field: uint64 payment_timestamp_end = 29;
     */
    paymentTimestampEnd: bigint;
    constructor(data?: PartialMessage<PurchasesPaymentsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesPaymentsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesPaymentsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceCountReq;
    static equals(a: PurchasesPaymentsServiceCountReq | PlainMessage<PurchasesPaymentsServiceCountReq> | undefined, b: PurchasesPaymentsServiceCountReq | PlainMessage<PurchasesPaymentsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.PurchasesPaymentsServiceSearchAllReq
 */
export declare class PurchasesPaymentsServiceSearchAllReq extends Message<PurchasesPaymentsServiceSearchAllReq> {
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
     * @generated from field: Scailo.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_PAYMENT_SORT_KEY;
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
     * The ID of the associated vendor
     *
     * @generated from field: uint64 vendor_id = 25;
     */
    vendorId: bigint;
    constructor(data?: PartialMessage<PurchasesPaymentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PurchasesPaymentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesPaymentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesPaymentsServiceSearchAllReq;
    static equals(a: PurchasesPaymentsServiceSearchAllReq | PlainMessage<PurchasesPaymentsServiceSearchAllReq> | undefined, b: PurchasesPaymentsServiceSearchAllReq | PlainMessage<PurchasesPaymentsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=purchases_payments.scailo_pb.d.ts.map
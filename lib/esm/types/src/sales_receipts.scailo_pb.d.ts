import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS, TRANSACTION_TYPE } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a sales receipt can be added
 *
 * @generated from enum Scailo.SALES_RECEIPT_REF_FROM
 */
export declare enum SALES_RECEIPT_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: SALES_RECEIPT_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    SALES_RECEIPT_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the sales receipt originated from a sales order
     *
     * @generated from enum value: SALES_RECEIPT_REF_FROM_SALES_ORDER = 1;
     */
    SALES_RECEIPT_REF_FROM_SALES_ORDER = 1,
    /**
     * Denotes that the sales receipt originated from a sales invoice
     *
     * @generated from enum value: SALES_RECEIPT_REF_FROM_SALES_INVOICE = 2;
     */
    SALES_RECEIPT_REF_FROM_SALES_INVOICE = 2,
    /**
     * Denotes that the sales receipt originated from a credit note
     *
     * @generated from enum value: SALES_RECEIPT_REF_FROM_CREDIT_NOTE = 3;
     */
    SALES_RECEIPT_REF_FROM_CREDIT_NOTE = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALES_RECEIPT_SORT_KEY
 */
export declare enum SALES_RECEIPT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_RECEIPT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_CREATED_AT = 1;
     */
    SALES_RECEIPT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_RECEIPT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_RECEIPT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_RECEIPT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_RECEIPT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_RECEIPT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_RECEIPT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_RECEIPT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the payment timestamp
     *
     * @generated from enum value: SALES_RECEIPT_SORT_KEY_PAYMENT_TIMESTAMP = 12;
     */
    SALES_RECEIPT_SORT_KEY_PAYMENT_TIMESTAMP = 12
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SalesReceiptsServiceCreateRequest
 */
export declare class SalesReceiptsServiceCreateRequest extends Message<SalesReceiptsServiceCreateRequest> {
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
     * The reference on which the sales receipt has been created
     *
     * @generated from field: Scailo.SALES_RECEIPT_REF_FROM ref_from = 12;
     */
    refFrom: SALES_RECEIPT_REF_FROM;
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
     * The description of the sales receipt
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<SalesReceiptsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceCreateRequest;
    static equals(a: SalesReceiptsServiceCreateRequest | PlainMessage<SalesReceiptsServiceCreateRequest> | undefined, b: SalesReceiptsServiceCreateRequest | PlainMessage<SalesReceiptsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SalesReceiptsServiceUpdateRequest
 */
export declare class SalesReceiptsServiceUpdateRequest extends Message<SalesReceiptsServiceUpdateRequest> {
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
     * The description of the sales receipt
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<SalesReceiptsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceUpdateRequest;
    static equals(a: SalesReceiptsServiceUpdateRequest | PlainMessage<SalesReceiptsServiceUpdateRequest> | undefined, b: SalesReceiptsServiceUpdateRequest | PlainMessage<SalesReceiptsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.SalesReceiptAncillaryParameters
 */
export declare class SalesReceiptAncillaryParameters extends Message<SalesReceiptAncillaryParameters> {
    /**
     * The UUID of the ref_id (the UUID of the associated ref_id)
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    /**
     * The UUID of the client (the UUID of the associated client_id)
     *
     * @generated from field: string client_uuid = 214;
     */
    clientUuid: string;
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
    constructor(data?: PartialMessage<SalesReceiptAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptAncillaryParameters;
    static equals(a: SalesReceiptAncillaryParameters | PlainMessage<SalesReceiptAncillaryParameters> | undefined, b: SalesReceiptAncillaryParameters | PlainMessage<SalesReceiptAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SalesReceipt
 */
export declare class SalesReceipt extends Message<SalesReceipt> {
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
     * The reference on which the sales receipt has been created
     *
     * @generated from field: Scailo.SALES_RECEIPT_REF_FROM ref_from = 12;
     */
    refFrom: SALES_RECEIPT_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the associated client
     *
     * @generated from field: uint64 client_id = 14;
     */
    clientId: bigint;
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
     * The description of the sales receipt
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<SalesReceipt>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceipt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceipt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceipt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceipt;
    static equals(a: SalesReceipt | PlainMessage<SalesReceipt> | undefined, b: SalesReceipt | PlainMessage<SalesReceipt> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.SalesReceiptsList
 */
export declare class SalesReceiptsList extends Message<SalesReceiptsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalesReceipt list = 1;
     */
    list: SalesReceipt[];
    constructor(data?: PartialMessage<SalesReceiptsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsList;
    static equals(a: SalesReceiptsList | PlainMessage<SalesReceiptsList> | undefined, b: SalesReceiptsList | PlainMessage<SalesReceiptsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SalesReceiptsServicePaginationReq
 */
export declare class SalesReceiptsServicePaginationReq extends Message<SalesReceiptsServicePaginationReq> {
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
     * @generated from field: Scailo.SALES_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RECEIPT_SORT_KEY;
    /**
     * The status of this sales receipt
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesReceiptsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationReq;
    static equals(a: SalesReceiptsServicePaginationReq | PlainMessage<SalesReceiptsServicePaginationReq> | undefined, b: SalesReceiptsServicePaginationReq | PlainMessage<SalesReceiptsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SalesReceiptsServicePaginationResponse
 */
export declare class SalesReceiptsServicePaginationResponse extends Message<SalesReceiptsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SalesReceipt payload = 4;
     */
    payload: SalesReceipt[];
    constructor(data?: PartialMessage<SalesReceiptsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationResponse;
    static equals(a: SalesReceiptsServicePaginationResponse | PlainMessage<SalesReceiptsServicePaginationResponse> | undefined, b: SalesReceiptsServicePaginationResponse | PlainMessage<SalesReceiptsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SalesReceiptsServiceFilterReq
 */
export declare class SalesReceiptsServiceFilterReq extends Message<SalesReceiptsServiceFilterReq> {
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
     * @generated from field: Scailo.SALES_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RECEIPT_SORT_KEY;
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
     * The reference on which the sales receipt has been created
     *
     * @generated from field: Scailo.SALES_RECEIPT_REF_FROM ref_from = 22;
     */
    refFrom: SALES_RECEIPT_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated client
     *
     * @generated from field: uint64 client_id = 24;
     */
    clientId: bigint;
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
    constructor(data?: PartialMessage<SalesReceiptsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceFilterReq;
    static equals(a: SalesReceiptsServiceFilterReq | PlainMessage<SalesReceiptsServiceFilterReq> | undefined, b: SalesReceiptsServiceFilterReq | PlainMessage<SalesReceiptsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SalesReceiptsServiceCountReq
 */
export declare class SalesReceiptsServiceCountReq extends Message<SalesReceiptsServiceCountReq> {
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
     * The reference on which the sales receipt has been created
     *
     * @generated from field: Scailo.SALES_RECEIPT_REF_FROM ref_from = 22;
     */
    refFrom: SALES_RECEIPT_REF_FROM;
    /**
     * The ID of the associated reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated client
     *
     * @generated from field: uint64 client_id = 24;
     */
    clientId: bigint;
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
    constructor(data?: PartialMessage<SalesReceiptsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceCountReq;
    static equals(a: SalesReceiptsServiceCountReq | PlainMessage<SalesReceiptsServiceCountReq> | undefined, b: SalesReceiptsServiceCountReq | PlainMessage<SalesReceiptsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SalesReceiptsServiceSearchAllReq
 */
export declare class SalesReceiptsServiceSearchAllReq extends Message<SalesReceiptsServiceSearchAllReq> {
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
     * @generated from field: Scailo.SALES_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RECEIPT_SORT_KEY;
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
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 60;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 61;
     */
    buyerClientId: bigint;
    constructor(data?: PartialMessage<SalesReceiptsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalesReceiptsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceSearchAllReq;
    static equals(a: SalesReceiptsServiceSearchAllReq | PlainMessage<SalesReceiptsServiceSearchAllReq> | undefined, b: SalesReceiptsServiceSearchAllReq | PlainMessage<SalesReceiptsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=sales_receipts.scailo_pb.d.ts.map
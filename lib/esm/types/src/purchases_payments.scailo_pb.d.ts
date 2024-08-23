import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
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
     * The reference ID of the purchase payment
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The reference on which the purchase payment has been created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
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
     * @generated from field: string transaction_type = 17;
     */
    transactionType: string;
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
     * The reference ID of the purchase payment
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
     * @generated from field: string transaction_type = 17;
     */
    transactionType: string;
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
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.PurchasePayment
 */
export declare class PurchasePayment extends Message<PurchasePayment> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase payment
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
     * The status of this purchase payment
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this purchase payment
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this purchase payment was marked as completed
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
     * The reference ID of the purchase payment
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
     * The reference on which the purchase payment has been created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
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
     * @generated from field: string transaction_type = 17;
     */
    transactionType: string;
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
     * @generated from field: Scailo.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_PAYMENT_SORT_KEY;
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
     * The status of this purchase payment
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
     * The reference_id of the purchase payment
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
     * The reference on which the purchase payment has been created
     *
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
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
     * @generated from field: string transaction_type = 27;
     */
    transactionType: string;
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
     * The status of this purchase payment
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
     * The reference_id of the purchase payment
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
     * The reference on which the purchase payment has been created
     *
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
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
     * @generated from field: string transaction_type = 27;
     */
    transactionType: string;
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
     * @generated from field: Scailo.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_PAYMENT_SORT_KEY;
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
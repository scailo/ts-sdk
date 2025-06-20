import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.BANK_ACCOUNT_SORT_KEY
 */
export declare enum BANK_ACCOUNT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    BANK_ACCOUNT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_CREATED_AT = 1;
     */
    BANK_ACCOUNT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_MODIFIED_AT = 2;
     */
    BANK_ACCOUNT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_APPROVED_ON = 3;
     */
    BANK_ACCOUNT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_APPROVED_BY = 4;
     */
    BANK_ACCOUNT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    BANK_ACCOUNT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_NAME = 10;
     */
    BANK_ACCOUNT_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_CODE = 11;
     */
    BANK_ACCOUNT_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.BankAccountsServiceCreateRequest
 */
export declare class BankAccountsServiceCreateRequest extends Message<BankAccountsServiceCreateRequest> {
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
     * The name of the bank account
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the bank account is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<BankAccountsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccountsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccountsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccountsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccountsServiceCreateRequest;
    static equals(a: BankAccountsServiceCreateRequest | PlainMessage<BankAccountsServiceCreateRequest> | undefined, b: BankAccountsServiceCreateRequest | PlainMessage<BankAccountsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.BankAccountsServiceUpdateRequest
 */
export declare class BankAccountsServiceUpdateRequest extends Message<BankAccountsServiceUpdateRequest> {
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
     * The name of the bank account
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the bank account is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<BankAccountsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccountsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccountsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccountsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccountsServiceUpdateRequest;
    static equals(a: BankAccountsServiceUpdateRequest | PlainMessage<BankAccountsServiceUpdateRequest> | undefined, b: BankAccountsServiceUpdateRequest | PlainMessage<BankAccountsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.BankAccount
 */
export declare class BankAccount extends Message<BankAccount> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this bank account
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
     * The status of this bank account
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this bank account
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the bank account
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the bank account is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<BankAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccount;
    static equals(a: BankAccount | PlainMessage<BankAccount> | undefined, b: BankAccount | PlainMessage<BankAccount> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.BankAccountsList
 */
export declare class BankAccountsList extends Message<BankAccountsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.BankAccount list = 1;
     */
    list: BankAccount[];
    constructor(data?: PartialMessage<BankAccountsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccountsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccountsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccountsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccountsList;
    static equals(a: BankAccountsList | PlainMessage<BankAccountsList> | undefined, b: BankAccountsList | PlainMessage<BankAccountsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.BankAccountsServicePaginationReq
 */
export declare class BankAccountsServicePaginationReq extends Message<BankAccountsServicePaginationReq> {
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
     * @generated from field: Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;
     */
    sortKey: BANK_ACCOUNT_SORT_KEY;
    /**
     * The status of this bank account
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<BankAccountsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccountsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccountsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccountsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccountsServicePaginationReq;
    static equals(a: BankAccountsServicePaginationReq | PlainMessage<BankAccountsServicePaginationReq> | undefined, b: BankAccountsServicePaginationReq | PlainMessage<BankAccountsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.BankAccountsServicePaginationResponse
 */
export declare class BankAccountsServicePaginationResponse extends Message<BankAccountsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.BankAccount payload = 4;
     */
    payload: BankAccount[];
    constructor(data?: PartialMessage<BankAccountsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccountsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccountsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccountsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccountsServicePaginationResponse;
    static equals(a: BankAccountsServicePaginationResponse | PlainMessage<BankAccountsServicePaginationResponse> | undefined, b: BankAccountsServicePaginationResponse | PlainMessage<BankAccountsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.BankAccountsServiceFilterReq
 */
export declare class BankAccountsServiceFilterReq extends Message<BankAccountsServiceFilterReq> {
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
     * @generated from field: Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;
     */
    sortKey: BANK_ACCOUNT_SORT_KEY;
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
     * The status of this bank account
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
     * The name of the bank account
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the bank account is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<BankAccountsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccountsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccountsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccountsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccountsServiceFilterReq;
    static equals(a: BankAccountsServiceFilterReq | PlainMessage<BankAccountsServiceFilterReq> | undefined, b: BankAccountsServiceFilterReq | PlainMessage<BankAccountsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.BankAccountsServiceCountReq
 */
export declare class BankAccountsServiceCountReq extends Message<BankAccountsServiceCountReq> {
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
     * The status of this bank account
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
     * The name of the bank account
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the bank account is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<BankAccountsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccountsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccountsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccountsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccountsServiceCountReq;
    static equals(a: BankAccountsServiceCountReq | PlainMessage<BankAccountsServiceCountReq> | undefined, b: BankAccountsServiceCountReq | PlainMessage<BankAccountsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.BankAccountsServiceSearchAllReq
 */
export declare class BankAccountsServiceSearchAllReq extends Message<BankAccountsServiceSearchAllReq> {
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
     * @generated from field: Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;
     */
    sortKey: BANK_ACCOUNT_SORT_KEY;
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
    constructor(data?: PartialMessage<BankAccountsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BankAccountsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankAccountsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankAccountsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankAccountsServiceSearchAllReq;
    static equals(a: BankAccountsServiceSearchAllReq | PlainMessage<BankAccountsServiceSearchAllReq> | undefined, b: BankAccountsServiceSearchAllReq | PlainMessage<BankAccountsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=bank_accounts.scailo_pb.d.ts.map
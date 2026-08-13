import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting bank account search results.
 *
 * @generated from enum Scailo.BANK_ACCOUNT_SORT_KEY
 */
export declare enum BANK_ACCOUNT_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    BANK_ACCOUNT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_CREATED_AT = 1;
     */
    BANK_ACCOUNT_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_MODIFIED_AT = 2;
     */
    BANK_ACCOUNT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_APPROVED_ON = 3;
     */
    BANK_ACCOUNT_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_APPROVED_BY = 4;
     */
    BANK_ACCOUNT_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    BANK_ACCOUNT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_NAME = 10;
     */
    BANK_ACCOUNT_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided code.
     *
     * @generated from enum value: BANK_ACCOUNT_SORT_KEY_CODE = 11;
     */
    BANK_ACCOUNT_SORT_KEY_CODE = 11
}
/**
 *
 * Request message for creating a new bank account record.
 * This record tracks corporate banking details, identifiers, and custom form
 * data tied to specific target business entities for financial tracking.
 *
 * **Note:** This is the primary entry point for Finance teams, Treasury, and Admins
 * to provision corporate bank accounts into the system for compliance and auditing.
 *
 * @generated from message Scailo.BankAccountsServiceCreateRequest
 */
export declare class BankAccountsServiceCreateRequest extends Message<BankAccountsServiceCreateRequest> {
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
     * @generated from field: optional string entity_uuid = 1;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 2;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The official or friendly name of the corporate bank account.
     *
     * @example "Main Operational Account"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @mandatory
     *
     * @description The unique code or internal classification token by which the bank account is registered.
     *
     * @example "ACC-OPS-01"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @optional
     *
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
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
 * Request message for updating an existing BankAccount record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, code and other custom form fields
 * of an established BankAccount.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.BankAccountsServiceUpdateRequest
 */
export declare class BankAccountsServiceUpdateRequest extends Message<BankAccountsServiceUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target record that needs to be updated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
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
     * @generated from field: optional bool notify_users = 3;
     */
    notifyUsers?: boolean;
    /**
     *
     * @optional
     *
     * @description The official or friendly name of the corporate bank account.
     *
     * @example "Main Operational Account"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 10;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique code or internal classification token by which the bank account is registered.
     *
     * @example "ACC-OPS-01"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 11;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
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
 * Represents a full Bank Account within the system.
 *
 * @generated from message Scailo.BankAccount
 */
export declare class BankAccount extends Message<BankAccount> {
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
     * @description The official or friendly name of the corporate bank account.
     *
     * @example "Main Operational Account"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique code or internal classification token by which the bank account is registered.
     *
     * @example "ACC-OPS-01"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description Collection of organization-specific dynamic data.
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
 * Container message for a collection of Bank Account records.
 *
 * @generated from message Scailo.BankAccountsList
 */
export declare class BankAccountsList extends Message<BankAccountsList> {
    /**
     * @description An array of Bank Account records.
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
 * Pagination request for retrieving slices of Bank Account records.
 *
 * @generated from message Scailo.BankAccountsServicePaginationReq
 */
export declare class BankAccountsServicePaginationReq extends Message<BankAccountsServicePaginationReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: optional Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;
     */
    sortKey?: BANK_ACCOUNT_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter results by a specific lifecycle status.
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.BankAccountsServicePaginationResponse
 */
export declare class BankAccountsServicePaginationResponse extends Message<BankAccountsServicePaginationResponse> {
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
 * Advanced filter request for searching and paginating bank accounts using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.BankAccountsServiceFilterReq
 */
export declare class BankAccountsServiceFilterReq extends Message<BankAccountsServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;
     */
    sortKey?: BANK_ACCOUNT_SORT_KEY;
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
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
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
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
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
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
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
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
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
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The official or friendly name of the corporate bank account.
     *
     * @example "Main Operational Account"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 20;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique code or internal classification token by which the bank account is registered.
     *
     * @example "ACC-OPS-01"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
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
     * @generated from field: optional bool include_form_data = 501;
     */
    includeFormData?: boolean;
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
 * Target filter request for counting bank account records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.BankAccountsServiceCountReq
 */
export declare class BankAccountsServiceCountReq extends Message<BankAccountsServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
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
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
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
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
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
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
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
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The official or friendly name of the corporate bank account.
     *
     * @example "Main Operational Account"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 20;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique code or internal classification token by which the bank account is registered.
     *
     * @example "ACC-OPS-01"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
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
 * Broad-spectrum search and lookup request for locating and paginating bank accounts via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.BankAccountsServiceSearchAllReq
 */
export declare class BankAccountsServiceSearchAllReq extends Message<BankAccountsServiceSearchAllReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;
     */
    sortKey?: BANK_ACCOUNT_SORT_KEY;
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
     * @generated from field: optional string entity_uuid = 6;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
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
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.CLIENT_SORT_KEY
 */
export declare enum CLIENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: CLIENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CLIENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: CLIENT_SORT_KEY_CREATED_AT = 1;
     */
    CLIENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: CLIENT_SORT_KEY_MODIFIED_AT = 2;
     */
    CLIENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: CLIENT_SORT_KEY_APPROVED_ON = 3;
     */
    CLIENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: CLIENT_SORT_KEY_APPROVED_BY = 4;
     */
    CLIENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: CLIENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    CLIENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: CLIENT_SORT_KEY_NAME = 10;
     */
    CLIENT_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: CLIENT_SORT_KEY_CODE = 11;
     */
    CLIENT_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the email address
     *
     * @generated from enum value: CLIENT_SORT_KEY_EMAIL = 12;
     */
    CLIENT_SORT_KEY_EMAIL = 12,
    /**
     * Fetch ordered results by the phone number
     *
     * @generated from enum value: CLIENT_SORT_KEY_PHONE = 13;
     */
    CLIENT_SORT_KEY_PHONE = 13
}
/**
 *
 * Describes the applicable statuses of client users
 *
 * @generated from enum Scailo.CLIENT_USER_STATUS
 */
export declare enum CLIENT_USER_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: CLIENT_USER_STATUS_ANY_UNSPECIFIED = 0;
     */
    CLIENT_USER_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the vendor items must have been approved
     *
     * @generated from enum value: CLIENT_USER_STATUS_APPROVED = 1;
     */
    CLIENT_USER_STATUS_APPROVED = 1,
    /**
     * Denotes that the vendor items must be waiting for approval
     *
     * @generated from enum value: CLIENT_USER_STATUS_UNAPPROVED = 2;
     */
    CLIENT_USER_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ClientsServiceCreateRequest
 */
export declare class ClientsServiceCreateRequest extends Message<ClientsServiceCreateRequest> {
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
     * The name of the client
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ClientsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceCreateRequest;
    static equals(a: ClientsServiceCreateRequest | PlainMessage<ClientsServiceCreateRequest> | undefined, b: ClientsServiceCreateRequest | PlainMessage<ClientsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ClientsServiceUpdateRequest
 */
export declare class ClientsServiceUpdateRequest extends Message<ClientsServiceUpdateRequest> {
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
     * The name of the client
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ClientsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceUpdateRequest;
    static equals(a: ClientsServiceUpdateRequest | PlainMessage<ClientsServiceUpdateRequest> | undefined, b: ClientsServiceUpdateRequest | PlainMessage<ClientsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Client
 */
export declare class Client extends Message<Client> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this client
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
     * The status of this client
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this client
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The name of the client
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Client>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Client";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Client;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Client;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Client;
    static equals(a: Client | PlainMessage<Client> | undefined, b: Client | PlainMessage<Client> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ClientsList
 */
export declare class ClientsList extends Message<ClientsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Client list = 1;
     */
    list: Client[];
    constructor(data?: PartialMessage<ClientsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsList;
    static equals(a: ClientsList | PlainMessage<ClientsList> | undefined, b: ClientsList | PlainMessage<ClientsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ClientsServicePaginationReq
 */
export declare class ClientsServicePaginationReq extends Message<ClientsServicePaginationReq> {
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
     * @generated from field: Scailo.CLIENT_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_SORT_KEY;
    /**
     * The status of this client
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ClientsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServicePaginationReq;
    static equals(a: ClientsServicePaginationReq | PlainMessage<ClientsServicePaginationReq> | undefined, b: ClientsServicePaginationReq | PlainMessage<ClientsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ClientsServicePaginationResponse
 */
export declare class ClientsServicePaginationResponse extends Message<ClientsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Client payload = 4;
     */
    payload: Client[];
    constructor(data?: PartialMessage<ClientsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServicePaginationResponse;
    static equals(a: ClientsServicePaginationResponse | PlainMessage<ClientsServicePaginationResponse> | undefined, b: ClientsServicePaginationResponse | PlainMessage<ClientsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ClientsServiceFilterReq
 */
export declare class ClientsServiceFilterReq extends Message<ClientsServiceFilterReq> {
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
     * @generated from field: Scailo.CLIENT_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_SORT_KEY;
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
     * The status of this client
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
     * The name of the client
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 22;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 23;
     */
    phone: string;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ClientsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceFilterReq;
    static equals(a: ClientsServiceFilterReq | PlainMessage<ClientsServiceFilterReq> | undefined, b: ClientsServiceFilterReq | PlainMessage<ClientsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ClientsServiceCountReq
 */
export declare class ClientsServiceCountReq extends Message<ClientsServiceCountReq> {
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
     * The status of this client
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
     * The name of the client
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 22;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 23;
     */
    phone: string;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ClientsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceCountReq;
    static equals(a: ClientsServiceCountReq | PlainMessage<ClientsServiceCountReq> | undefined, b: ClientsServiceCountReq | PlainMessage<ClientsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ClientsServiceSearchAllReq
 */
export declare class ClientsServiceSearchAllReq extends Message<ClientsServiceSearchAllReq> {
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
     * @generated from field: Scailo.CLIENT_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_SORT_KEY;
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
    constructor(data?: PartialMessage<ClientsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceSearchAllReq;
    static equals(a: ClientsServiceSearchAllReq | PlainMessage<ClientsServiceSearchAllReq> | undefined, b: ClientsServiceSearchAllReq | PlainMessage<ClientsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a client user
 *
 * @generated from message Scailo.ClientsServiceUserCreateRequest
 */
export declare class ClientsServiceUserCreateRequest extends Message<ClientsServiceUserCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the client ID
     *
     * @generated from field: uint64 client_id = 10;
     */
    clientId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores an optional associate ID
     *
     * @generated from field: uint64 associate_id = 12;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<ClientsServiceUserCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServiceUserCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceUserCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceUserCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceUserCreateRequest;
    static equals(a: ClientsServiceUserCreateRequest | PlainMessage<ClientsServiceUserCreateRequest> | undefined, b: ClientsServiceUserCreateRequest | PlainMessage<ClientsServiceUserCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a client user
 *
 * @generated from message Scailo.ClientUser
 */
export declare class ClientUser extends Message<ClientUser> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this client
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
     * Stores the client ID
     *
     * @generated from field: uint64 client_id = 10;
     */
    clientId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores an optional associate ID
     *
     * @generated from field: uint64 associate_id = 12;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<ClientUser>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientUser";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientUser;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientUser;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientUser;
    static equals(a: ClientUser | PlainMessage<ClientUser> | undefined, b: ClientUser | PlainMessage<ClientUser> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of client users
 *
 * @generated from message Scailo.ClientUsersList
 */
export declare class ClientUsersList extends Message<ClientUsersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ClientUser list = 1;
     */
    list: ClientUser[];
    constructor(data?: PartialMessage<ClientUsersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientUsersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientUsersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientUsersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientUsersList;
    static equals(a: ClientUsersList | PlainMessage<ClientUsersList> | undefined, b: ClientUsersList | PlainMessage<ClientUsersList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to search client users
 *
 * @generated from message Scailo.ClientUsersSearchRequest
 */
export declare class ClientUsersSearchRequest extends Message<ClientUsersSearchRequest> {
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
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the users
     *
     * @generated from field: Scailo.CLIENT_USER_STATUS status = 7;
     */
    status: CLIENT_USER_STATUS;
    /**
     * Stores the client ID
     *
     * @generated from field: uint64 client_id = 10;
     */
    clientId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores an optional associate ID
     *
     * @generated from field: uint64 associate_id = 12;
     */
    associateId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 20;
     */
    searchKey: string;
    constructor(data?: PartialMessage<ClientUsersSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientUsersSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientUsersSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientUsersSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientUsersSearchRequest;
    static equals(a: ClientUsersSearchRequest | PlainMessage<ClientUsersSearchRequest> | undefined, b: ClientUsersSearchRequest | PlainMessage<ClientUsersSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.ClientsServicePaginatedUsersResponse
 */
export declare class ClientsServicePaginatedUsersResponse extends Message<ClientsServicePaginatedUsersResponse> {
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
     * @generated from field: repeated Scailo.ClientUser payload = 4;
     */
    payload: ClientUser[];
    constructor(data?: PartialMessage<ClientsServicePaginatedUsersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientsServicePaginatedUsersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServicePaginatedUsersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServicePaginatedUsersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServicePaginatedUsersResponse;
    static equals(a: ClientsServicePaginatedUsersResponse | PlainMessage<ClientsServicePaginatedUsersResponse> | undefined, b: ClientsServicePaginatedUsersResponse | PlainMessage<ClientsServicePaginatedUsersResponse> | undefined): boolean;
}
//# sourceMappingURL=clients.scailo_pb.d.ts.map
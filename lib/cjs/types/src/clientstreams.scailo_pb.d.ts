import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the lifecycle status of each client stream
 *
 * @generated from enum Scailo.CLIENT_STREAM_LIFECYCLE
 */
export declare enum CLIENT_STREAM_LIFECYCLE {
    /**
     * Used only in filters
     *
     * @generated from enum value: CLIENT_STREAM_LIFECYCLE_ANY_UNSPECIFIED = 0;
     */
    CLIENT_STREAM_LIFECYCLE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the client stream is open
     *
     * @generated from enum value: CLIENT_STREAM_LIFECYCLE_OPEN = 1;
     */
    CLIENT_STREAM_LIFECYCLE_OPEN = 1,
    /**
     * Denotes that the client stream has completed
     *
     * @generated from enum value: CLIENT_STREAM_LIFECYCLE_COMPLETED = 2;
     */
    CLIENT_STREAM_LIFECYCLE_COMPLETED = 2,
    /**
     * Denotes that the client stream has been cancelled
     *
     * @generated from enum value: CLIENT_STREAM_LIFECYCLE_CANCELLED = 3;
     */
    CLIENT_STREAM_LIFECYCLE_CANCELLED = 3
}
/**
 *
 * Describes the available client stream references
 *
 * @generated from enum Scailo.CLIENT_STREAM_REF_FROM
 */
export declare enum CLIENT_STREAM_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    CLIENT_STREAM_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the reference is from a sales order
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_SALES_ORDER = 1;
     */
    CLIENT_STREAM_REF_FROM_SALES_ORDER = 1,
    /**
     * Denotes that the reference is from a goods dispatch
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_GOODS_DISPATCH = 10;
     */
    CLIENT_STREAM_REF_FROM_GOODS_DISPATCH = 10,
    /**
     * Denotes that the reference is from a sales invoice
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_SALES_INVOICE = 11;
     */
    CLIENT_STREAM_REF_FROM_SALES_INVOICE = 11,
    /**
     * Denotes that the reference is from a sales return
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_SALES_RETURN = 20;
     */
    CLIENT_STREAM_REF_FROM_SALES_RETURN = 20,
    /**
     * Denotes that the reference is from a credit note
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_CREDIT_NOTE = 21;
     */
    CLIENT_STREAM_REF_FROM_CREDIT_NOTE = 21,
    /**
     * Denotes that the reference is from a sales receipt
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_SALES_RECEIPT = 30;
     */
    CLIENT_STREAM_REF_FROM_SALES_RECEIPT = 30,
    /**
     * Denotes that the reference is from a sales quotation
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_SALES_QUOTATION = 40;
     */
    CLIENT_STREAM_REF_FROM_SALES_QUOTATION = 40,
    /**
     * Denotes that the reference is from a sales enquiry
     *
     * @generated from enum value: CLIENT_STREAM_REF_FROM_SALES_ENQUIRY = 50;
     */
    CLIENT_STREAM_REF_FROM_SALES_ENQUIRY = 50
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.CLIENT_STREAM_SORT_KEY
 */
export declare enum CLIENT_STREAM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: CLIENT_STREAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CLIENT_STREAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: CLIENT_STREAM_SORT_KEY_CREATED_AT = 1;
     */
    CLIENT_STREAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: CLIENT_STREAM_SORT_KEY_MODIFIED_AT = 2;
     */
    CLIENT_STREAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: CLIENT_STREAM_SORT_KEY_COMPLETED_ON = 6;
     */
    CLIENT_STREAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: CLIENT_STREAM_SORT_KEY_TITLE = 10;
     */
    CLIENT_STREAM_SORT_KEY_TITLE = 10
}
/**
 *
 * Describes the available message types for a client stream message
 *
 * @generated from enum Scailo.CLIENT_STREAM_MESSAGE_TYPE
 */
export declare enum CLIENT_STREAM_MESSAGE_TYPE {
    /**
     * Used only for filters
     *
     * @generated from enum value: CLIENT_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED = 0;
     */
    CLIENT_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the message was sent by a user
     *
     * @generated from enum value: CLIENT_STREAM_MESSAGE_TYPE_USER = 1;
     */
    CLIENT_STREAM_MESSAGE_TYPE_USER = 1,
    /**
     * Denotes that the message was sent by the system
     *
     * @generated from enum value: CLIENT_STREAM_MESSAGE_TYPE_SYSTEM = 2;
     */
    CLIENT_STREAM_MESSAGE_TYPE_SYSTEM = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.CLIENT_STREAM_MESSAGE_SORT_KEY
 */
export declare enum CLIENT_STREAM_MESSAGE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: CLIENT_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CLIENT_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: CLIENT_STREAM_MESSAGE_SORT_KEY_CREATED_AT = 1;
     */
    CLIENT_STREAM_MESSAGE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: CLIENT_STREAM_MESSAGE_SORT_KEY_MODIFIED_AT = 2;
     */
    CLIENT_STREAM_MESSAGE_SORT_KEY_MODIFIED_AT = 2
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being an client stream lifecycle status
 *
 * @generated from message Scailo.LogbookLogClientStreamLC
 */
export declare class LogbookLogClientStreamLC extends Message<LogbookLogClientStreamLC> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * Stores if the resource is active
     *
     * @generated from field: bool is_active = 2;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: Scailo.CLIENT_STREAM_LIFECYCLE operation = 11;
     */
    operation: CLIENT_STREAM_LIFECYCLE;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The name of the person who made this entry
     *
     * @generated from field: string name = 13;
     */
    name: string;
    /**
     * The ID of the user who made this entry
     *
     * @generated from field: uint64 user_id = 14;
     */
    userId: bigint;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 15;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 16;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogClientStreamLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogClientStreamLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogClientStreamLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogClientStreamLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogClientStreamLC;
    static equals(a: LogbookLogClientStreamLC | PlainMessage<LogbookLogClientStreamLC> | undefined, b: LogbookLogClientStreamLC | PlainMessage<LogbookLogClientStreamLC> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ClientStreamsServiceCreateRequest
 */
export declare class ClientStreamsServiceCreateRequest extends Message<ClientStreamsServiceCreateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 7;
     */
    vaultFolderId: bigint;
    /**
     * The title of the client stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The ID of the client
     *
     * @generated from field: uint64 client_id = 11;
     */
    clientId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 12;
     */
    refFrom: CLIENT_STREAM_REF_FROM;
    /**
     * The associated reference ID
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * Assign self (the user creating the stream) as an internal subscriber
     *
     * @generated from field: bool assign_self_as_internal_subscriber = 80;
     */
    assignSelfAsInternalSubscriber: boolean;
    /**
     * Assign self (the user creating the stream) as a client subscriber (this would allow client users to also create a stream)
     *
     * @generated from field: bool assign_self_as_client_subscriber = 81;
     */
    assignSelfAsClientSubscriber: boolean;
    constructor(data?: PartialMessage<ClientStreamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceCreateRequest;
    static equals(a: ClientStreamsServiceCreateRequest | PlainMessage<ClientStreamsServiceCreateRequest> | undefined, b: ClientStreamsServiceCreateRequest | PlainMessage<ClientStreamsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ClientStreamsServiceUpdateRequest
 */
export declare class ClientStreamsServiceUpdateRequest extends Message<ClientStreamsServiceUpdateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 7;
     */
    vaultFolderId: bigint;
    /**
     * The title of the client stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
    constructor(data?: PartialMessage<ClientStreamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceUpdateRequest;
    static equals(a: ClientStreamsServiceUpdateRequest | PlainMessage<ClientStreamsServiceUpdateRequest> | undefined, b: ClientStreamsServiceUpdateRequest | PlainMessage<ClientStreamsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ClientStream
 */
export declare class ClientStream extends Message<ClientStream> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this client stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this client stream
     *
     * @generated from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 4;
     */
    status: CLIENT_STREAM_LIFECYCLE;
    /**
     * Stores the logs of every operation performed on this client stream
     *
     * @generated from field: repeated Scailo.LogbookLogClientStreamLC logs = 5;
     */
    logs: LogbookLogClientStreamLC[];
    /**
     * The timestamp of when this client stream was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 7;
     */
    vaultFolderId: bigint;
    /**
     * The title of the client stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The ID of the client
     *
     * @generated from field: uint64 client_id = 11;
     */
    clientId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 12;
     */
    refFrom: CLIENT_STREAM_REF_FROM;
    /**
     * The associated reference ID
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The associated reference UUID
     *
     * @generated from field: string ref_uuid = 14;
     */
    refUuid: string;
    /**
     * Stores the internal reference that is automatically generated
     *
     * @generated from field: string internal_ref = 50;
     */
    internalRef: string;
    /**
     * Stores the number of unread messages in this stream for the specific user (on the basis of the auth token)
     *
     * @generated from field: uint64 unread_count = 60;
     */
    unreadCount: bigint;
    constructor(data?: PartialMessage<ClientStream>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStream";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStream;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStream;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStream;
    static equals(a: ClientStream | PlainMessage<ClientStream> | undefined, b: ClientStream | PlainMessage<ClientStream> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ClientStreamsList
 */
export declare class ClientStreamsList extends Message<ClientStreamsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ClientStream list = 1;
     */
    list: ClientStream[];
    constructor(data?: PartialMessage<ClientStreamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsList;
    static equals(a: ClientStreamsList | PlainMessage<ClientStreamsList> | undefined, b: ClientStreamsList | PlainMessage<ClientStreamsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ClientStreamsServicePaginationReq
 */
export declare class ClientStreamsServicePaginationReq extends Message<ClientStreamsServicePaginationReq> {
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
     * @generated from field: Scailo.CLIENT_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_STREAM_SORT_KEY;
    /**
     * The status of this client stream
     *
     * @generated from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 6;
     */
    status: CLIENT_STREAM_LIFECYCLE;
    constructor(data?: PartialMessage<ClientStreamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServicePaginationReq;
    static equals(a: ClientStreamsServicePaginationReq | PlainMessage<ClientStreamsServicePaginationReq> | undefined, b: ClientStreamsServicePaginationReq | PlainMessage<ClientStreamsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ClientStreamsServicePaginationResponse
 */
export declare class ClientStreamsServicePaginationResponse extends Message<ClientStreamsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ClientStream payload = 4;
     */
    payload: ClientStream[];
    constructor(data?: PartialMessage<ClientStreamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServicePaginationResponse;
    static equals(a: ClientStreamsServicePaginationResponse | PlainMessage<ClientStreamsServicePaginationResponse> | undefined, b: ClientStreamsServicePaginationResponse | PlainMessage<ClientStreamsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ClientStreamsServiceFilterReq
 */
export declare class ClientStreamsServiceFilterReq extends Message<ClientStreamsServiceFilterReq> {
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
     * @generated from field: Scailo.CLIENT_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_STREAM_SORT_KEY;
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
     * The status of this client stream
     *
     * @generated from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 10;
     */
    status: CLIENT_STREAM_LIFECYCLE;
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
     * Stores the internal reference that is automatically generated
     *
     * @generated from field: string internal_ref = 18;
     */
    internalRef: string;
    /**
     * The title of the client stream
     *
     * @generated from field: string title = 30;
     */
    title: string;
    /**
     * ------------------------------------------------
     * Filter by the associated client ID
     *
     * @generated from field: uint64 client_id = 40;
     */
    clientId: bigint;
    /**
     * Filter by the associated reference
     *
     * @generated from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 41;
     */
    refFrom: CLIENT_STREAM_REF_FROM;
    /**
     * Filter by the associated reference ID
     *
     * ------------------------------------------------
     *
     * @generated from field: uint64 ref_id = 42;
     */
    refId: bigint;
    /**
     * Filter by the associated internal subscriber user ID
     *
     * @generated from field: uint64 internal_subscriber_user_id = 60;
     */
    internalSubscriberUserId: bigint;
    /**
     * Filter by the associated client subscriber user ID
     *
     * @generated from field: uint64 client_subscriber_user_id = 61;
     */
    clientSubscriberUserId: bigint;
    constructor(data?: PartialMessage<ClientStreamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceFilterReq;
    static equals(a: ClientStreamsServiceFilterReq | PlainMessage<ClientStreamsServiceFilterReq> | undefined, b: ClientStreamsServiceFilterReq | PlainMessage<ClientStreamsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ClientStreamsServiceCountReq
 */
export declare class ClientStreamsServiceCountReq extends Message<ClientStreamsServiceCountReq> {
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
     * The status of this client stream
     *
     * @generated from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 10;
     */
    status: CLIENT_STREAM_LIFECYCLE;
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
     * Stores the internal reference that is automatically generated
     *
     * @generated from field: string internal_ref = 18;
     */
    internalRef: string;
    /**
     * The title of the client stream
     *
     * @generated from field: string title = 30;
     */
    title: string;
    /**
     * ------------------------------------------------
     * Filter by the associated client ID
     *
     * @generated from field: uint64 client_id = 40;
     */
    clientId: bigint;
    /**
     * Filter by the associated reference
     *
     * @generated from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 41;
     */
    refFrom: CLIENT_STREAM_REF_FROM;
    /**
     * Filter by the associated reference ID
     *
     * ------------------------------------------------
     *
     * @generated from field: uint64 ref_id = 42;
     */
    refId: bigint;
    /**
     * Filter by the associated internal subscriber user ID
     *
     * @generated from field: uint64 internal_subscriber_user_id = 60;
     */
    internalSubscriberUserId: bigint;
    /**
     * Filter by the associated client subscriber user ID
     *
     * @generated from field: uint64 client_subscriber_user_id = 61;
     */
    clientSubscriberUserId: bigint;
    constructor(data?: PartialMessage<ClientStreamsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceCountReq;
    static equals(a: ClientStreamsServiceCountReq | PlainMessage<ClientStreamsServiceCountReq> | undefined, b: ClientStreamsServiceCountReq | PlainMessage<ClientStreamsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ClientStreamsServiceSearchAllReq
 */
export declare class ClientStreamsServiceSearchAllReq extends Message<ClientStreamsServiceSearchAllReq> {
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
     * @generated from field: Scailo.CLIENT_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_STREAM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 10;
     */
    status: CLIENT_STREAM_LIFECYCLE;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * ------------------------------------------------
     * Filter by the associated client ID
     *
     * ------------------------------------------------
     *
     * @generated from field: uint64 client_id = 40;
     */
    clientId: bigint;
    /**
     * Filter by the associated internal subscriber user ID
     *
     * @generated from field: uint64 internal_subscriber_user_id = 60;
     */
    internalSubscriberUserId: bigint;
    /**
     * Filter by the associated client subscriber user ID
     *
     * @generated from field: uint64 client_subscriber_user_id = 61;
     */
    clientSubscriberUserId: bigint;
    constructor(data?: PartialMessage<ClientStreamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceSearchAllReq;
    static equals(a: ClientStreamsServiceSearchAllReq | PlainMessage<ClientStreamsServiceSearchAllReq> | undefined, b: ClientStreamsServiceSearchAllReq | PlainMessage<ClientStreamsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a message to an client stream
 *
 * @generated from message Scailo.ClientStreamsServiceMessageCreateRequest
 */
export declare class ClientStreamsServiceMessageCreateRequest extends Message<ClientStreamsServiceMessageCreateRequest> {
    /**
     * The type of the message
     *
     * @generated from field: Scailo.CLIENT_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: CLIENT_STREAM_MESSAGE_TYPE;
    /**
     * Stores the client stream UUID
     *
     * @generated from field: string client_stream_uuid = 10;
     */
    clientStreamUuid: string;
    /**
     * Stores the optional UUID of the message that this message is a response to
     *
     * @generated from field: string response_to_message_uuid = 11;
     */
    responseToMessageUuid: string;
    /**
     * The content of the message
     *
     * @generated from field: string content = 20;
     */
    content: string;
    constructor(data?: PartialMessage<ClientStreamsServiceMessageCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceMessageCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceMessageCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceMessageCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceMessageCreateRequest;
    static equals(a: ClientStreamsServiceMessageCreateRequest | PlainMessage<ClientStreamsServiceMessageCreateRequest> | undefined, b: ClientStreamsServiceMessageCreateRequest | PlainMessage<ClientStreamsServiceMessageCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a message associated to an client stream
 *
 * @generated from message Scailo.ClientStreamMessage
 */
export declare class ClientStreamMessage extends Message<ClientStreamMessage> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this client stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The type of the message
     *
     * @generated from field: Scailo.CLIENT_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: CLIENT_STREAM_MESSAGE_TYPE;
    /**
     * Stores the client stream ID
     *
     * @generated from field: uint64 client_stream_id = 10;
     */
    clientStreamId: bigint;
    /**
     * Stores the optional UUID of the message that this message is a response to
     *
     * @generated from field: string response_to_message_uuid = 11;
     */
    responseToMessageUuid: string;
    /**
     * The content of the message
     *
     * @generated from field: string content = 20;
     */
    content: string;
    /**
     * Stores the internal reference that is automatically generated
     *
     * @generated from field: string internal_ref = 50;
     */
    internalRef: string;
    /**
     * Stores if the message has been read by the user
     *
     * @generated from field: bool is_read = 60;
     */
    isRead: boolean;
    constructor(data?: PartialMessage<ClientStreamMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamMessage;
    static equals(a: ClientStreamMessage | PlainMessage<ClientStreamMessage> | undefined, b: ClientStreamMessage | PlainMessage<ClientStreamMessage> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of client stream messages
 *
 * @generated from message Scailo.ClientStreamMessagesList
 */
export declare class ClientStreamMessagesList extends Message<ClientStreamMessagesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ClientStreamMessage list = 1;
     */
    list: ClientStreamMessage[];
    constructor(data?: PartialMessage<ClientStreamMessagesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamMessagesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamMessagesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamMessagesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamMessagesList;
    static equals(a: ClientStreamMessagesList | PlainMessage<ClientStreamMessagesList> | undefined, b: ClientStreamMessagesList | PlainMessage<ClientStreamMessagesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve messages.
 *
 * @generated from message Scailo.ClientStreamMessagesSearchRequest
 */
export declare class ClientStreamMessagesSearchRequest extends Message<ClientStreamMessagesSearchRequest> {
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
     * @generated from field: Scailo.CLIENT_STREAM_MESSAGE_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_STREAM_MESSAGE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The type of the message
     *
     * @generated from field: Scailo.CLIENT_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: CLIENT_STREAM_MESSAGE_TYPE;
    /**
     * The ID of the client stream
     *
     * @generated from field: uint64 client_stream_id = 20;
     */
    clientStreamId: bigint;
    /**
     * Stores the optional UUID of the message that this message is a response to
     *
     * @generated from field: string response_to_message_uuid = 30;
     */
    responseToMessageUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<ClientStreamMessagesSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamMessagesSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamMessagesSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamMessagesSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamMessagesSearchRequest;
    static equals(a: ClientStreamMessagesSearchRequest | PlainMessage<ClientStreamMessagesSearchRequest> | undefined, b: ClientStreamMessagesSearchRequest | PlainMessage<ClientStreamMessagesSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination messages request
 *
 * @generated from message Scailo.ClientStreamsServicePaginatedMessagesResponse
 */
export declare class ClientStreamsServicePaginatedMessagesResponse extends Message<ClientStreamsServicePaginatedMessagesResponse> {
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
     * @generated from field: repeated Scailo.ClientStreamMessage payload = 4;
     */
    payload: ClientStreamMessage[];
    constructor(data?: PartialMessage<ClientStreamsServicePaginatedMessagesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServicePaginatedMessagesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServicePaginatedMessagesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServicePaginatedMessagesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServicePaginatedMessagesResponse;
    static equals(a: ClientStreamsServicePaginatedMessagesResponse | PlainMessage<ClientStreamsServicePaginatedMessagesResponse> | undefined, b: ClientStreamsServicePaginatedMessagesResponse | PlainMessage<ClientStreamsServicePaginatedMessagesResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a message receipt
 *
 * @generated from message Scailo.ClientStreamMessageReceipt
 */
export declare class ClientStreamMessageReceipt extends Message<ClientStreamMessageReceipt> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this client stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the client stream message UUID
     *
     * @generated from field: string client_stream_message_uuid = 10;
     */
    clientStreamMessageUuid: string;
    /**
     * The ID of the user who read this
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores if the message has been read by the user
     *
     * @generated from field: bool is_read = 12;
     */
    isRead: boolean;
    /**
     * Stores the timestamp of when the message was read
     *
     * @generated from field: uint64 read_at = 13;
     */
    readAt: bigint;
    constructor(data?: PartialMessage<ClientStreamMessageReceipt>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamMessageReceipt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamMessageReceipt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamMessageReceipt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamMessageReceipt;
    static equals(a: ClientStreamMessageReceipt | PlainMessage<ClientStreamMessageReceipt> | undefined, b: ClientStreamMessageReceipt | PlainMessage<ClientStreamMessageReceipt> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of client stream message receipts
 *
 * @generated from message Scailo.ClientStreamMessageReceiptsList
 */
export declare class ClientStreamMessageReceiptsList extends Message<ClientStreamMessageReceiptsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ClientStreamMessageReceipt list = 1;
     */
    list: ClientStreamMessageReceipt[];
    constructor(data?: PartialMessage<ClientStreamMessageReceiptsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamMessageReceiptsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamMessageReceiptsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamMessageReceiptsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamMessageReceiptsList;
    static equals(a: ClientStreamMessageReceiptsList | PlainMessage<ClientStreamMessageReceiptsList> | undefined, b: ClientStreamMessageReceiptsList | PlainMessage<ClientStreamMessageReceiptsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create an internal subscriber
 *
 * @generated from message Scailo.ClientStreamsServiceInternalSubscriberCreateRequest
 */
export declare class ClientStreamsServiceInternalSubscriberCreateRequest extends Message<ClientStreamsServiceInternalSubscriberCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the client stream ID
     *
     * @generated from field: uint64 client_stream_id = 10;
     */
    clientStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<ClientStreamsServiceInternalSubscriberCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceInternalSubscriberCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceInternalSubscriberCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceInternalSubscriberCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceInternalSubscriberCreateRequest;
    static equals(a: ClientStreamsServiceInternalSubscriberCreateRequest | PlainMessage<ClientStreamsServiceInternalSubscriberCreateRequest> | undefined, b: ClientStreamsServiceInternalSubscriberCreateRequest | PlainMessage<ClientStreamsServiceInternalSubscriberCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an internal subscriber
 *
 * @generated from message Scailo.ClientStreamInternalSubscriber
 */
export declare class ClientStreamInternalSubscriber extends Message<ClientStreamInternalSubscriber> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this client stream internal subscriber
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the client stream ID
     *
     * @generated from field: uint64 client_stream_id = 10;
     */
    clientStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<ClientStreamInternalSubscriber>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamInternalSubscriber";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamInternalSubscriber;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamInternalSubscriber;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamInternalSubscriber;
    static equals(a: ClientStreamInternalSubscriber | PlainMessage<ClientStreamInternalSubscriber> | undefined, b: ClientStreamInternalSubscriber | PlainMessage<ClientStreamInternalSubscriber> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of internal subscribers
 *
 * @generated from message Scailo.ClientStreamInternalSubscribersList
 */
export declare class ClientStreamInternalSubscribersList extends Message<ClientStreamInternalSubscribersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ClientStreamInternalSubscriber list = 1;
     */
    list: ClientStreamInternalSubscriber[];
    constructor(data?: PartialMessage<ClientStreamInternalSubscribersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamInternalSubscribersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamInternalSubscribersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamInternalSubscribersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamInternalSubscribersList;
    static equals(a: ClientStreamInternalSubscribersList | PlainMessage<ClientStreamInternalSubscribersList> | undefined, b: ClientStreamInternalSubscribersList | PlainMessage<ClientStreamInternalSubscribersList> | undefined): boolean;
}
/**
 *
 * Describes the data model to handle importing of internal subscribers from the given identifier representing a team or a department
 *
 * @generated from message Scailo.ClientStreamsServiceImportInternalSubscribersRequest
 */
export declare class ClientStreamsServiceImportInternalSubscribersRequest extends Message<ClientStreamsServiceImportInternalSubscribersRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the client stream
     *
     * @generated from field: uint64 client_stream_id = 2;
     */
    clientStreamId: bigint;
    /**
     * The ID of the team or the department from which internal subscribers need to be added to the client stream
     *
     * @generated from field: uint64 resource_id = 3;
     */
    resourceId: bigint;
    /**
     * Stores if the existing internal subscribers in the client stream need to be deleted before adding from the source record
     *
     * @generated from field: bool delete_existing = 4;
     */
    deleteExisting: boolean;
    constructor(data?: PartialMessage<ClientStreamsServiceImportInternalSubscribersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceImportInternalSubscribersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceImportInternalSubscribersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceImportInternalSubscribersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceImportInternalSubscribersRequest;
    static equals(a: ClientStreamsServiceImportInternalSubscribersRequest | PlainMessage<ClientStreamsServiceImportInternalSubscribersRequest> | undefined, b: ClientStreamsServiceImportInternalSubscribersRequest | PlainMessage<ClientStreamsServiceImportInternalSubscribersRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a client stream client subscriber
 *
 * @generated from message Scailo.ClientStreamsServiceClientSubscriberCreateRequest
 */
export declare class ClientStreamsServiceClientSubscriberCreateRequest extends Message<ClientStreamsServiceClientSubscriberCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the client stream ID
     *
     * @generated from field: uint64 client_stream_id = 10;
     */
    clientStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<ClientStreamsServiceClientSubscriberCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamsServiceClientSubscriberCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamsServiceClientSubscriberCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamsServiceClientSubscriberCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamsServiceClientSubscriberCreateRequest;
    static equals(a: ClientStreamsServiceClientSubscriberCreateRequest | PlainMessage<ClientStreamsServiceClientSubscriberCreateRequest> | undefined, b: ClientStreamsServiceClientSubscriberCreateRequest | PlainMessage<ClientStreamsServiceClientSubscriberCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a client stream client subscriber
 *
 * @generated from message Scailo.ClientStreamClientSubscriber
 */
export declare class ClientStreamClientSubscriber extends Message<ClientStreamClientSubscriber> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this client stream client subscriber
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the client stream ID
     *
     * @generated from field: uint64 client_stream_id = 10;
     */
    clientStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<ClientStreamClientSubscriber>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamClientSubscriber";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamClientSubscriber;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamClientSubscriber;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamClientSubscriber;
    static equals(a: ClientStreamClientSubscriber | PlainMessage<ClientStreamClientSubscriber> | undefined, b: ClientStreamClientSubscriber | PlainMessage<ClientStreamClientSubscriber> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of client stream client subscribers
 *
 * @generated from message Scailo.ClientStreamClientSubscribersList
 */
export declare class ClientStreamClientSubscribersList extends Message<ClientStreamClientSubscribersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ClientStreamClientSubscriber list = 1;
     */
    list: ClientStreamClientSubscriber[];
    constructor(data?: PartialMessage<ClientStreamClientSubscribersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientStreamClientSubscribersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamClientSubscribersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamClientSubscribersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamClientSubscribersList;
    static equals(a: ClientStreamClientSubscribersList | PlainMessage<ClientStreamClientSubscribersList> | undefined, b: ClientStreamClientSubscribersList | PlainMessage<ClientStreamClientSubscribersList> | undefined): boolean;
}
//# sourceMappingURL=clientstreams.scailo_pb.d.ts.map
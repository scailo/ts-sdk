import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the lifecycle status of each general stream
 *
 * @generated from enum Scailo.GENERAL_STREAM_LIFECYCLE
 */
export declare enum GENERAL_STREAM_LIFECYCLE {
    /**
     * Used only in filters
     *
     * @generated from enum value: GENERAL_STREAM_LIFECYCLE_ANY_UNSPECIFIED = 0;
     */
    GENERAL_STREAM_LIFECYCLE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the general stream is open
     *
     * @generated from enum value: GENERAL_STREAM_LIFECYCLE_OPEN = 1;
     */
    GENERAL_STREAM_LIFECYCLE_OPEN = 1,
    /**
     * Denotes that the general stream has completed
     *
     * @generated from enum value: GENERAL_STREAM_LIFECYCLE_COMPLETED = 2;
     */
    GENERAL_STREAM_LIFECYCLE_COMPLETED = 2,
    /**
     * Denotes that the general stream has been cancelled
     *
     * @generated from enum value: GENERAL_STREAM_LIFECYCLE_CANCELLED = 3;
     */
    GENERAL_STREAM_LIFECYCLE_CANCELLED = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.GENERAL_STREAM_SORT_KEY
 */
export declare enum GENERAL_STREAM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GENERAL_STREAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GENERAL_STREAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GENERAL_STREAM_SORT_KEY_CREATED_AT = 1;
     */
    GENERAL_STREAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GENERAL_STREAM_SORT_KEY_MODIFIED_AT = 2;
     */
    GENERAL_STREAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: GENERAL_STREAM_SORT_KEY_COMPLETED_ON = 6;
     */
    GENERAL_STREAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: GENERAL_STREAM_SORT_KEY_TITLE = 10;
     */
    GENERAL_STREAM_SORT_KEY_TITLE = 10
}
/**
 *
 * Describes the available message types for a general stream message
 *
 * @generated from enum Scailo.GENERAL_STREAM_MESSAGE_TYPE
 */
export declare enum GENERAL_STREAM_MESSAGE_TYPE {
    /**
     * Used only for filters
     *
     * @generated from enum value: GENERAL_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED = 0;
     */
    GENERAL_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the message was sent by a user
     *
     * @generated from enum value: GENERAL_STREAM_MESSAGE_TYPE_USER = 1;
     */
    GENERAL_STREAM_MESSAGE_TYPE_USER = 1,
    /**
     * Denotes that the message was sent by the system
     *
     * @generated from enum value: GENERAL_STREAM_MESSAGE_TYPE_SYSTEM = 2;
     */
    GENERAL_STREAM_MESSAGE_TYPE_SYSTEM = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.GENERAL_STREAM_MESSAGE_SORT_KEY
 */
export declare enum GENERAL_STREAM_MESSAGE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GENERAL_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GENERAL_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GENERAL_STREAM_MESSAGE_SORT_KEY_CREATED_AT = 1;
     */
    GENERAL_STREAM_MESSAGE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GENERAL_STREAM_MESSAGE_SORT_KEY_MODIFIED_AT = 2;
     */
    GENERAL_STREAM_MESSAGE_SORT_KEY_MODIFIED_AT = 2
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being an general stream lifecycle status
 *
 * @generated from message Scailo.LogbookLogGeneralStreamLC
 */
export declare class LogbookLogGeneralStreamLC extends Message<LogbookLogGeneralStreamLC> {
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
     * @generated from field: Scailo.GENERAL_STREAM_LIFECYCLE operation = 11;
     */
    operation: GENERAL_STREAM_LIFECYCLE;
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
    constructor(data?: PartialMessage<LogbookLogGeneralStreamLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogGeneralStreamLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogGeneralStreamLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogGeneralStreamLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogGeneralStreamLC;
    static equals(a: LogbookLogGeneralStreamLC | PlainMessage<LogbookLogGeneralStreamLC> | undefined, b: LogbookLogGeneralStreamLC | PlainMessage<LogbookLogGeneralStreamLC> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.GeneralStreamsServiceCreateRequest
 */
export declare class GeneralStreamsServiceCreateRequest extends Message<GeneralStreamsServiceCreateRequest> {
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
     * The title of the general stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * Assign self (the user creating the stream) as an internal subscriber
     *
     * @generated from field: bool assign_self_as_internal_subscriber = 80;
     */
    assignSelfAsInternalSubscriber: boolean;
    constructor(data?: PartialMessage<GeneralStreamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServiceCreateRequest;
    static equals(a: GeneralStreamsServiceCreateRequest | PlainMessage<GeneralStreamsServiceCreateRequest> | undefined, b: GeneralStreamsServiceCreateRequest | PlainMessage<GeneralStreamsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.GeneralStreamsServiceUpdateRequest
 */
export declare class GeneralStreamsServiceUpdateRequest extends Message<GeneralStreamsServiceUpdateRequest> {
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
     * The title of the general stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
    constructor(data?: PartialMessage<GeneralStreamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServiceUpdateRequest;
    static equals(a: GeneralStreamsServiceUpdateRequest | PlainMessage<GeneralStreamsServiceUpdateRequest> | undefined, b: GeneralStreamsServiceUpdateRequest | PlainMessage<GeneralStreamsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.GeneralStream
 */
export declare class GeneralStream extends Message<GeneralStream> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this general stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this general stream
     *
     * @generated from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 4;
     */
    status: GENERAL_STREAM_LIFECYCLE;
    /**
     * Stores the logs of every operation performed on this general stream
     *
     * @generated from field: repeated Scailo.LogbookLogGeneralStreamLC logs = 5;
     */
    logs: LogbookLogGeneralStreamLC[];
    /**
     * The timestamp of when this general stream was marked as completed
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
     * The title of the general stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
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
    /**
     * Stores the total number of messages in the stream
     *
     * @generated from field: uint64 message_count = 61;
     */
    messageCount: bigint;
    /**
     * Stores the username of the user who added the last message
     *
     * @generated from field: string last_message_by = 62;
     */
    lastMessageBy: string;
    constructor(data?: PartialMessage<GeneralStream>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStream";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStream;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStream;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStream;
    static equals(a: GeneralStream | PlainMessage<GeneralStream> | undefined, b: GeneralStream | PlainMessage<GeneralStream> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.GeneralStreamsList
 */
export declare class GeneralStreamsList extends Message<GeneralStreamsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GeneralStream list = 1;
     */
    list: GeneralStream[];
    constructor(data?: PartialMessage<GeneralStreamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsList;
    static equals(a: GeneralStreamsList | PlainMessage<GeneralStreamsList> | undefined, b: GeneralStreamsList | PlainMessage<GeneralStreamsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.GeneralStreamsServicePaginationReq
 */
export declare class GeneralStreamsServicePaginationReq extends Message<GeneralStreamsServicePaginationReq> {
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
     * @generated from field: Scailo.GENERAL_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: GENERAL_STREAM_SORT_KEY;
    /**
     * The status of this general stream
     *
     * @generated from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 6;
     */
    status: GENERAL_STREAM_LIFECYCLE;
    constructor(data?: PartialMessage<GeneralStreamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServicePaginationReq;
    static equals(a: GeneralStreamsServicePaginationReq | PlainMessage<GeneralStreamsServicePaginationReq> | undefined, b: GeneralStreamsServicePaginationReq | PlainMessage<GeneralStreamsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.GeneralStreamsServicePaginationResponse
 */
export declare class GeneralStreamsServicePaginationResponse extends Message<GeneralStreamsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.GeneralStream payload = 4;
     */
    payload: GeneralStream[];
    constructor(data?: PartialMessage<GeneralStreamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServicePaginationResponse;
    static equals(a: GeneralStreamsServicePaginationResponse | PlainMessage<GeneralStreamsServicePaginationResponse> | undefined, b: GeneralStreamsServicePaginationResponse | PlainMessage<GeneralStreamsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.GeneralStreamsServiceFilterReq
 */
export declare class GeneralStreamsServiceFilterReq extends Message<GeneralStreamsServiceFilterReq> {
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
     * @generated from field: Scailo.GENERAL_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: GENERAL_STREAM_SORT_KEY;
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
     * The status of this general stream
     *
     * @generated from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 10;
     */
    status: GENERAL_STREAM_LIFECYCLE;
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
     * The title of the general stream
     *
     * @generated from field: string title = 30;
     */
    title: string;
    /**
     * Filter by the associated internal subscriber user ID
     *
     * @generated from field: uint64 internal_subscriber_user_id = 60;
     */
    internalSubscriberUserId: bigint;
    constructor(data?: PartialMessage<GeneralStreamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServiceFilterReq;
    static equals(a: GeneralStreamsServiceFilterReq | PlainMessage<GeneralStreamsServiceFilterReq> | undefined, b: GeneralStreamsServiceFilterReq | PlainMessage<GeneralStreamsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.GeneralStreamsServiceCountReq
 */
export declare class GeneralStreamsServiceCountReq extends Message<GeneralStreamsServiceCountReq> {
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
     * The status of this general stream
     *
     * @generated from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 10;
     */
    status: GENERAL_STREAM_LIFECYCLE;
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
     * The title of the general stream
     *
     * @generated from field: string title = 30;
     */
    title: string;
    /**
     * Filter by the associated internal subscriber user ID
     *
     * @generated from field: uint64 internal_subscriber_user_id = 60;
     */
    internalSubscriberUserId: bigint;
    constructor(data?: PartialMessage<GeneralStreamsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServiceCountReq;
    static equals(a: GeneralStreamsServiceCountReq | PlainMessage<GeneralStreamsServiceCountReq> | undefined, b: GeneralStreamsServiceCountReq | PlainMessage<GeneralStreamsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.GeneralStreamsServiceSearchAllReq
 */
export declare class GeneralStreamsServiceSearchAllReq extends Message<GeneralStreamsServiceSearchAllReq> {
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
     * @generated from field: Scailo.GENERAL_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: GENERAL_STREAM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 10;
     */
    status: GENERAL_STREAM_LIFECYCLE;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * Filter by the associated internal subscriber user ID
     *
     * @generated from field: uint64 internal_subscriber_user_id = 60;
     */
    internalSubscriberUserId: bigint;
    constructor(data?: PartialMessage<GeneralStreamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServiceSearchAllReq;
    static equals(a: GeneralStreamsServiceSearchAllReq | PlainMessage<GeneralStreamsServiceSearchAllReq> | undefined, b: GeneralStreamsServiceSearchAllReq | PlainMessage<GeneralStreamsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a message to an general stream
 *
 * @generated from message Scailo.GeneralStreamsServiceMessageCreateRequest
 */
export declare class GeneralStreamsServiceMessageCreateRequest extends Message<GeneralStreamsServiceMessageCreateRequest> {
    /**
     * The type of the message
     *
     * @generated from field: Scailo.GENERAL_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: GENERAL_STREAM_MESSAGE_TYPE;
    /**
     * Stores the general stream UUID
     *
     * @generated from field: string general_stream_uuid = 10;
     */
    generalStreamUuid: string;
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
    constructor(data?: PartialMessage<GeneralStreamsServiceMessageCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServiceMessageCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServiceMessageCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServiceMessageCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServiceMessageCreateRequest;
    static equals(a: GeneralStreamsServiceMessageCreateRequest | PlainMessage<GeneralStreamsServiceMessageCreateRequest> | undefined, b: GeneralStreamsServiceMessageCreateRequest | PlainMessage<GeneralStreamsServiceMessageCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a message associated to an general stream
 *
 * @generated from message Scailo.GeneralStreamMessage
 */
export declare class GeneralStreamMessage extends Message<GeneralStreamMessage> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this general stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The type of the message
     *
     * @generated from field: Scailo.GENERAL_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: GENERAL_STREAM_MESSAGE_TYPE;
    /**
     * Stores the general stream ID
     *
     * @generated from field: uint64 general_stream_id = 10;
     */
    generalStreamId: bigint;
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
    constructor(data?: PartialMessage<GeneralStreamMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamMessage;
    static equals(a: GeneralStreamMessage | PlainMessage<GeneralStreamMessage> | undefined, b: GeneralStreamMessage | PlainMessage<GeneralStreamMessage> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of general stream messages
 *
 * @generated from message Scailo.GeneralStreamMessagesList
 */
export declare class GeneralStreamMessagesList extends Message<GeneralStreamMessagesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GeneralStreamMessage list = 1;
     */
    list: GeneralStreamMessage[];
    constructor(data?: PartialMessage<GeneralStreamMessagesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamMessagesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamMessagesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamMessagesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamMessagesList;
    static equals(a: GeneralStreamMessagesList | PlainMessage<GeneralStreamMessagesList> | undefined, b: GeneralStreamMessagesList | PlainMessage<GeneralStreamMessagesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve messages.
 *
 * @generated from message Scailo.GeneralStreamMessagesSearchRequest
 */
export declare class GeneralStreamMessagesSearchRequest extends Message<GeneralStreamMessagesSearchRequest> {
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
     * @generated from field: Scailo.GENERAL_STREAM_MESSAGE_SORT_KEY sort_key = 5;
     */
    sortKey: GENERAL_STREAM_MESSAGE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The type of the message
     *
     * @generated from field: Scailo.GENERAL_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: GENERAL_STREAM_MESSAGE_TYPE;
    /**
     * The ID of the general stream
     *
     * @generated from field: uint64 general_stream_id = 20;
     */
    generalStreamId: bigint;
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
    constructor(data?: PartialMessage<GeneralStreamMessagesSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamMessagesSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamMessagesSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamMessagesSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamMessagesSearchRequest;
    static equals(a: GeneralStreamMessagesSearchRequest | PlainMessage<GeneralStreamMessagesSearchRequest> | undefined, b: GeneralStreamMessagesSearchRequest | PlainMessage<GeneralStreamMessagesSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination messages request
 *
 * @generated from message Scailo.GeneralStreamsServicePaginatedMessagesResponse
 */
export declare class GeneralStreamsServicePaginatedMessagesResponse extends Message<GeneralStreamsServicePaginatedMessagesResponse> {
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
     * @generated from field: repeated Scailo.GeneralStreamMessage payload = 4;
     */
    payload: GeneralStreamMessage[];
    constructor(data?: PartialMessage<GeneralStreamsServicePaginatedMessagesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServicePaginatedMessagesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServicePaginatedMessagesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServicePaginatedMessagesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServicePaginatedMessagesResponse;
    static equals(a: GeneralStreamsServicePaginatedMessagesResponse | PlainMessage<GeneralStreamsServicePaginatedMessagesResponse> | undefined, b: GeneralStreamsServicePaginatedMessagesResponse | PlainMessage<GeneralStreamsServicePaginatedMessagesResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a message receipt
 *
 * @generated from message Scailo.GeneralStreamMessageReceipt
 */
export declare class GeneralStreamMessageReceipt extends Message<GeneralStreamMessageReceipt> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this general stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the general stream message UUID
     *
     * @generated from field: string general_stream_message_uuid = 10;
     */
    generalStreamMessageUuid: string;
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
    constructor(data?: PartialMessage<GeneralStreamMessageReceipt>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamMessageReceipt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamMessageReceipt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamMessageReceipt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamMessageReceipt;
    static equals(a: GeneralStreamMessageReceipt | PlainMessage<GeneralStreamMessageReceipt> | undefined, b: GeneralStreamMessageReceipt | PlainMessage<GeneralStreamMessageReceipt> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of general stream message receipts
 *
 * @generated from message Scailo.GeneralStreamMessageReceiptsList
 */
export declare class GeneralStreamMessageReceiptsList extends Message<GeneralStreamMessageReceiptsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GeneralStreamMessageReceipt list = 1;
     */
    list: GeneralStreamMessageReceipt[];
    constructor(data?: PartialMessage<GeneralStreamMessageReceiptsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamMessageReceiptsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamMessageReceiptsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamMessageReceiptsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamMessageReceiptsList;
    static equals(a: GeneralStreamMessageReceiptsList | PlainMessage<GeneralStreamMessageReceiptsList> | undefined, b: GeneralStreamMessageReceiptsList | PlainMessage<GeneralStreamMessageReceiptsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create an internal subscriber
 *
 * @generated from message Scailo.GeneralStreamsServiceInternalSubscriberCreateRequest
 */
export declare class GeneralStreamsServiceInternalSubscriberCreateRequest extends Message<GeneralStreamsServiceInternalSubscriberCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the general stream ID
     *
     * @generated from field: uint64 general_stream_id = 10;
     */
    generalStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<GeneralStreamsServiceInternalSubscriberCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServiceInternalSubscriberCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServiceInternalSubscriberCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServiceInternalSubscriberCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServiceInternalSubscriberCreateRequest;
    static equals(a: GeneralStreamsServiceInternalSubscriberCreateRequest | PlainMessage<GeneralStreamsServiceInternalSubscriberCreateRequest> | undefined, b: GeneralStreamsServiceInternalSubscriberCreateRequest | PlainMessage<GeneralStreamsServiceInternalSubscriberCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an internal subscriber
 *
 * @generated from message Scailo.GeneralStreamInternalSubscriber
 */
export declare class GeneralStreamInternalSubscriber extends Message<GeneralStreamInternalSubscriber> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this general stream internal subscriber
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
     * Stores the general stream ID
     *
     * @generated from field: uint64 general_stream_id = 10;
     */
    generalStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<GeneralStreamInternalSubscriber>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamInternalSubscriber";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamInternalSubscriber;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamInternalSubscriber;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamInternalSubscriber;
    static equals(a: GeneralStreamInternalSubscriber | PlainMessage<GeneralStreamInternalSubscriber> | undefined, b: GeneralStreamInternalSubscriber | PlainMessage<GeneralStreamInternalSubscriber> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of internal subscribers
 *
 * @generated from message Scailo.GeneralStreamInternalSubscribersList
 */
export declare class GeneralStreamInternalSubscribersList extends Message<GeneralStreamInternalSubscribersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GeneralStreamInternalSubscriber list = 1;
     */
    list: GeneralStreamInternalSubscriber[];
    constructor(data?: PartialMessage<GeneralStreamInternalSubscribersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamInternalSubscribersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamInternalSubscribersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamInternalSubscribersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamInternalSubscribersList;
    static equals(a: GeneralStreamInternalSubscribersList | PlainMessage<GeneralStreamInternalSubscribersList> | undefined, b: GeneralStreamInternalSubscribersList | PlainMessage<GeneralStreamInternalSubscribersList> | undefined): boolean;
}
/**
 *
 * Describes the data model to handle importing of internal subscribers from the given identifier representing a team or a department
 *
 * @generated from message Scailo.GeneralStreamsServiceImportInternalSubscribersRequest
 */
export declare class GeneralStreamsServiceImportInternalSubscribersRequest extends Message<GeneralStreamsServiceImportInternalSubscribersRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the general stream
     *
     * @generated from field: uint64 general_stream_id = 2;
     */
    generalStreamId: bigint;
    /**
     * The ID of the team or the department from which internal subscribers need to be added to the general stream
     *
     * @generated from field: uint64 resource_id = 3;
     */
    resourceId: bigint;
    /**
     * Stores if the existing internal subscribers in the general stream need to be deleted before adding from the source record
     *
     * @generated from field: bool delete_existing = 4;
     */
    deleteExisting: boolean;
    constructor(data?: PartialMessage<GeneralStreamsServiceImportInternalSubscribersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralStreamsServiceImportInternalSubscribersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralStreamsServiceImportInternalSubscribersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralStreamsServiceImportInternalSubscribersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralStreamsServiceImportInternalSubscribersRequest;
    static equals(a: GeneralStreamsServiceImportInternalSubscribersRequest | PlainMessage<GeneralStreamsServiceImportInternalSubscribersRequest> | undefined, b: GeneralStreamsServiceImportInternalSubscribersRequest | PlainMessage<GeneralStreamsServiceImportInternalSubscribersRequest> | undefined): boolean;
}
//# sourceMappingURL=general_streams.scailo_pb.d.ts.map
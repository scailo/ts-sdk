import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the lifecycle status of each vendor stream
 *
 * @generated from enum Scailo.VENDOR_STREAM_LIFECYCLE
 */
export declare enum VENDOR_STREAM_LIFECYCLE {
    /**
     * Used only in filters
     *
     * @generated from enum value: VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED = 0;
     */
    VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the vendor stream is open
     *
     * @generated from enum value: VENDOR_STREAM_LIFECYCLE_OPEN = 1;
     */
    VENDOR_STREAM_LIFECYCLE_OPEN = 1,
    /**
     * Denotes that the vendor stream has completed
     *
     * @generated from enum value: VENDOR_STREAM_LIFECYCLE_COMPLETED = 2;
     */
    VENDOR_STREAM_LIFECYCLE_COMPLETED = 2,
    /**
     * Denotes that the vendor stream has been cancelled
     *
     * @generated from enum value: VENDOR_STREAM_LIFECYCLE_CANCELLED = 3;
     */
    VENDOR_STREAM_LIFECYCLE_CANCELLED = 3
}
/**
 *
 * Describes the available vendor stream references
 *
 * @generated from enum Scailo.VENDOR_STREAM_REF_FROM
 */
export declare enum VENDOR_STREAM_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: VENDOR_STREAM_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    VENDOR_STREAM_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the reference is from a purchase order
     *
     * @generated from enum value: VENDOR_STREAM_REF_FROM_PURCHASE_ORDER = 1;
     */
    VENDOR_STREAM_REF_FROM_PURCHASE_ORDER = 1,
    /**
     * Denotes that the reference is from a goods receipt
     *
     * @generated from enum value: VENDOR_STREAM_REF_FROM_GOODS_RECEIPT = 10;
     */
    VENDOR_STREAM_REF_FROM_GOODS_RECEIPT = 10,
    /**
     * Denotes that the reference is from a vendor invoice
     *
     * @generated from enum value: VENDOR_STREAM_REF_FROM_VENDOR_INVOICE = 11;
     */
    VENDOR_STREAM_REF_FROM_VENDOR_INVOICE = 11,
    /**
     * Denotes that the reference is from a purchase return
     *
     * @generated from enum value: VENDOR_STREAM_REF_FROM_PURCHASE_RETURN = 20;
     */
    VENDOR_STREAM_REF_FROM_PURCHASE_RETURN = 20,
    /**
     * Denotes that the reference is from a debit note
     *
     * @generated from enum value: VENDOR_STREAM_REF_FROM_DEBIT_NOTE = 21;
     */
    VENDOR_STREAM_REF_FROM_DEBIT_NOTE = 21,
    /**
     * Denotes that the reference is from a purchase payment
     *
     * @generated from enum value: VENDOR_STREAM_REF_FROM_PURCHASE_PAYMENT = 30;
     */
    VENDOR_STREAM_REF_FROM_PURCHASE_PAYMENT = 30
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.VENDOR_STREAM_SORT_KEY
 */
export declare enum VENDOR_STREAM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: VENDOR_STREAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    VENDOR_STREAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: VENDOR_STREAM_SORT_KEY_CREATED_AT = 1;
     */
    VENDOR_STREAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: VENDOR_STREAM_SORT_KEY_MODIFIED_AT = 2;
     */
    VENDOR_STREAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: VENDOR_STREAM_SORT_KEY_COMPLETED_ON = 6;
     */
    VENDOR_STREAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: VENDOR_STREAM_SORT_KEY_TITLE = 10;
     */
    VENDOR_STREAM_SORT_KEY_TITLE = 10
}
/**
 *
 * Describes the available message types for a vendor stream message
 *
 * @generated from enum Scailo.VENDOR_STREAM_MESSAGE_TYPE
 */
export declare enum VENDOR_STREAM_MESSAGE_TYPE {
    /**
     * Used only for filters
     *
     * @generated from enum value: VENDOR_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED = 0;
     */
    VENDOR_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the message was sent by a user
     *
     * @generated from enum value: VENDOR_STREAM_MESSAGE_TYPE_USER = 1;
     */
    VENDOR_STREAM_MESSAGE_TYPE_USER = 1,
    /**
     * Denotes that the message was sent by the system
     *
     * @generated from enum value: VENDOR_STREAM_MESSAGE_TYPE_SYSTEM = 2;
     */
    VENDOR_STREAM_MESSAGE_TYPE_SYSTEM = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.VENDOR_STREAM_MESSAGE_SORT_KEY
 */
export declare enum VENDOR_STREAM_MESSAGE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: VENDOR_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    VENDOR_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: VENDOR_STREAM_MESSAGE_SORT_KEY_CREATED_AT = 1;
     */
    VENDOR_STREAM_MESSAGE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: VENDOR_STREAM_MESSAGE_SORT_KEY_MODIFIED_AT = 2;
     */
    VENDOR_STREAM_MESSAGE_SORT_KEY_MODIFIED_AT = 2
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being an vendor stream lifecycle status
 *
 * @generated from message Scailo.LogbookLogVendorStreamLC
 */
export declare class LogbookLogVendorStreamLC extends Message<LogbookLogVendorStreamLC> {
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
     * @generated from field: Scailo.VENDOR_STREAM_LIFECYCLE operation = 11;
     */
    operation: VENDOR_STREAM_LIFECYCLE;
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
    constructor(data?: PartialMessage<LogbookLogVendorStreamLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogVendorStreamLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogVendorStreamLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogVendorStreamLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogVendorStreamLC;
    static equals(a: LogbookLogVendorStreamLC | PlainMessage<LogbookLogVendorStreamLC> | undefined, b: LogbookLogVendorStreamLC | PlainMessage<LogbookLogVendorStreamLC> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.VendorStreamsServiceCreateRequest
 */
export declare class VendorStreamsServiceCreateRequest extends Message<VendorStreamsServiceCreateRequest> {
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
     * The title of the vendor stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 11;
     */
    vendorId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 12;
     */
    refFrom: VENDOR_STREAM_REF_FROM;
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
     * Assign self (the user creating the stream) as a vendor subscriber (this would allow vendor users to also create a stream)
     *
     * @generated from field: bool assign_self_as_vendor_subscriber = 81;
     */
    assignSelfAsVendorSubscriber: boolean;
    constructor(data?: PartialMessage<VendorStreamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceCreateRequest;
    static equals(a: VendorStreamsServiceCreateRequest | PlainMessage<VendorStreamsServiceCreateRequest> | undefined, b: VendorStreamsServiceCreateRequest | PlainMessage<VendorStreamsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.VendorStreamsServiceUpdateRequest
 */
export declare class VendorStreamsServiceUpdateRequest extends Message<VendorStreamsServiceUpdateRequest> {
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
     * The title of the vendor stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
    constructor(data?: PartialMessage<VendorStreamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceUpdateRequest;
    static equals(a: VendorStreamsServiceUpdateRequest | PlainMessage<VendorStreamsServiceUpdateRequest> | undefined, b: VendorStreamsServiceUpdateRequest | PlainMessage<VendorStreamsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.VendorStream
 */
export declare class VendorStream extends Message<VendorStream> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this vendor stream
     *
     * @generated from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 4;
     */
    status: VENDOR_STREAM_LIFECYCLE;
    /**
     * Stores the logs of every operation performed on this vendor stream
     *
     * @generated from field: repeated Scailo.LogbookLogVendorStreamLC logs = 5;
     */
    logs: LogbookLogVendorStreamLC[];
    /**
     * The timestamp of when this vendor stream was marked as completed
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
     * The associated vault folder UUID (will be empty if vault_folder_id is 0)
     *
     * @generated from field: string vault_folder_uuid = 107;
     */
    vaultFolderUuid: string;
    /**
     * The title of the vendor stream
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 11;
     */
    vendorId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 12;
     */
    refFrom: VENDOR_STREAM_REF_FROM;
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
    constructor(data?: PartialMessage<VendorStream>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStream";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStream;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStream;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStream;
    static equals(a: VendorStream | PlainMessage<VendorStream> | undefined, b: VendorStream | PlainMessage<VendorStream> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.VendorStreamsList
 */
export declare class VendorStreamsList extends Message<VendorStreamsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorStream list = 1;
     */
    list: VendorStream[];
    constructor(data?: PartialMessage<VendorStreamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsList;
    static equals(a: VendorStreamsList | PlainMessage<VendorStreamsList> | undefined, b: VendorStreamsList | PlainMessage<VendorStreamsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.VendorStreamsServicePaginationReq
 */
export declare class VendorStreamsServicePaginationReq extends Message<VendorStreamsServicePaginationReq> {
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
     * @generated from field: Scailo.VENDOR_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_STREAM_SORT_KEY;
    /**
     * The status of this vendor stream
     *
     * @generated from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 6;
     */
    status: VENDOR_STREAM_LIFECYCLE;
    constructor(data?: PartialMessage<VendorStreamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServicePaginationReq;
    static equals(a: VendorStreamsServicePaginationReq | PlainMessage<VendorStreamsServicePaginationReq> | undefined, b: VendorStreamsServicePaginationReq | PlainMessage<VendorStreamsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.VendorStreamsServicePaginationResponse
 */
export declare class VendorStreamsServicePaginationResponse extends Message<VendorStreamsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.VendorStream payload = 4;
     */
    payload: VendorStream[];
    constructor(data?: PartialMessage<VendorStreamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServicePaginationResponse;
    static equals(a: VendorStreamsServicePaginationResponse | PlainMessage<VendorStreamsServicePaginationResponse> | undefined, b: VendorStreamsServicePaginationResponse | PlainMessage<VendorStreamsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.VendorStreamsServiceFilterReq
 */
export declare class VendorStreamsServiceFilterReq extends Message<VendorStreamsServiceFilterReq> {
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
     * @generated from field: Scailo.VENDOR_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_STREAM_SORT_KEY;
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
     * The status of this vendor stream
     *
     * @generated from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 10;
     */
    status: VENDOR_STREAM_LIFECYCLE;
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
     * The title of the vendor stream
     *
     * @generated from field: string title = 30;
     */
    title: string;
    /**
     * ------------------------------------------------
     * Filter by the associated vendor ID
     *
     * @generated from field: uint64 vendor_id = 40;
     */
    vendorId: bigint;
    /**
     * Filter by the associated reference
     *
     * @generated from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 41;
     */
    refFrom: VENDOR_STREAM_REF_FROM;
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
     * Filter by the associated vendor subscriber user ID
     *
     * @generated from field: uint64 vendor_subscriber_user_id = 61;
     */
    vendorSubscriberUserId: bigint;
    constructor(data?: PartialMessage<VendorStreamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceFilterReq;
    static equals(a: VendorStreamsServiceFilterReq | PlainMessage<VendorStreamsServiceFilterReq> | undefined, b: VendorStreamsServiceFilterReq | PlainMessage<VendorStreamsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.VendorStreamsServiceCountReq
 */
export declare class VendorStreamsServiceCountReq extends Message<VendorStreamsServiceCountReq> {
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
     * The status of this vendor stream
     *
     * @generated from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 10;
     */
    status: VENDOR_STREAM_LIFECYCLE;
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
     * The title of the vendor stream
     *
     * @generated from field: string title = 30;
     */
    title: string;
    /**
     * ------------------------------------------------
     * Filter by the associated vendor ID
     *
     * @generated from field: uint64 vendor_id = 40;
     */
    vendorId: bigint;
    /**
     * Filter by the associated reference
     *
     * @generated from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 41;
     */
    refFrom: VENDOR_STREAM_REF_FROM;
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
     * Filter by the associated vendor subscriber user ID
     *
     * @generated from field: uint64 vendor_subscriber_user_id = 61;
     */
    vendorSubscriberUserId: bigint;
    constructor(data?: PartialMessage<VendorStreamsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceCountReq;
    static equals(a: VendorStreamsServiceCountReq | PlainMessage<VendorStreamsServiceCountReq> | undefined, b: VendorStreamsServiceCountReq | PlainMessage<VendorStreamsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.VendorStreamsServiceSearchAllReq
 */
export declare class VendorStreamsServiceSearchAllReq extends Message<VendorStreamsServiceSearchAllReq> {
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
     * @generated from field: Scailo.VENDOR_STREAM_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_STREAM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 10;
     */
    status: VENDOR_STREAM_LIFECYCLE;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * ------------------------------------------------
     * Filter by the associated vendor ID
     *
     * ------------------------------------------------
     *
     * @generated from field: uint64 vendor_id = 40;
     */
    vendorId: bigint;
    /**
     * Filter by the associated internal subscriber user ID
     *
     * @generated from field: uint64 internal_subscriber_user_id = 60;
     */
    internalSubscriberUserId: bigint;
    /**
     * Filter by the associated vendor subscriber user ID
     *
     * @generated from field: uint64 vendor_subscriber_user_id = 61;
     */
    vendorSubscriberUserId: bigint;
    constructor(data?: PartialMessage<VendorStreamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceSearchAllReq;
    static equals(a: VendorStreamsServiceSearchAllReq | PlainMessage<VendorStreamsServiceSearchAllReq> | undefined, b: VendorStreamsServiceSearchAllReq | PlainMessage<VendorStreamsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a message to an vendor stream
 *
 * @generated from message Scailo.VendorStreamsServiceMessageCreateRequest
 */
export declare class VendorStreamsServiceMessageCreateRequest extends Message<VendorStreamsServiceMessageCreateRequest> {
    /**
     * The type of the message
     *
     * @generated from field: Scailo.VENDOR_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: VENDOR_STREAM_MESSAGE_TYPE;
    /**
     * Stores the vendor stream UUID
     *
     * @generated from field: string vendor_stream_uuid = 10;
     */
    vendorStreamUuid: string;
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
    constructor(data?: PartialMessage<VendorStreamsServiceMessageCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceMessageCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceMessageCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceMessageCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceMessageCreateRequest;
    static equals(a: VendorStreamsServiceMessageCreateRequest | PlainMessage<VendorStreamsServiceMessageCreateRequest> | undefined, b: VendorStreamsServiceMessageCreateRequest | PlainMessage<VendorStreamsServiceMessageCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a message associated to an vendor stream
 *
 * @generated from message Scailo.VendorStreamMessage
 */
export declare class VendorStreamMessage extends Message<VendorStreamMessage> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The type of the message
     *
     * @generated from field: Scailo.VENDOR_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: VENDOR_STREAM_MESSAGE_TYPE;
    /**
     * Stores the vendor stream ID
     *
     * @generated from field: uint64 vendor_stream_id = 10;
     */
    vendorStreamId: bigint;
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
    constructor(data?: PartialMessage<VendorStreamMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamMessage;
    static equals(a: VendorStreamMessage | PlainMessage<VendorStreamMessage> | undefined, b: VendorStreamMessage | PlainMessage<VendorStreamMessage> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendor stream messages
 *
 * @generated from message Scailo.VendorStreamMessagesList
 */
export declare class VendorStreamMessagesList extends Message<VendorStreamMessagesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorStreamMessage list = 1;
     */
    list: VendorStreamMessage[];
    constructor(data?: PartialMessage<VendorStreamMessagesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamMessagesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamMessagesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamMessagesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamMessagesList;
    static equals(a: VendorStreamMessagesList | PlainMessage<VendorStreamMessagesList> | undefined, b: VendorStreamMessagesList | PlainMessage<VendorStreamMessagesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve messages.
 *
 * @generated from message Scailo.VendorStreamMessagesSearchRequest
 */
export declare class VendorStreamMessagesSearchRequest extends Message<VendorStreamMessagesSearchRequest> {
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
     * @generated from field: Scailo.VENDOR_STREAM_MESSAGE_SORT_KEY sort_key = 5;
     */
    sortKey: VENDOR_STREAM_MESSAGE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The type of the message
     *
     * @generated from field: Scailo.VENDOR_STREAM_MESSAGE_TYPE message_type = 8;
     */
    messageType: VENDOR_STREAM_MESSAGE_TYPE;
    /**
     * The ID of the vendor stream
     *
     * @generated from field: uint64 vendor_stream_id = 20;
     */
    vendorStreamId: bigint;
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
    constructor(data?: PartialMessage<VendorStreamMessagesSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamMessagesSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamMessagesSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamMessagesSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamMessagesSearchRequest;
    static equals(a: VendorStreamMessagesSearchRequest | PlainMessage<VendorStreamMessagesSearchRequest> | undefined, b: VendorStreamMessagesSearchRequest | PlainMessage<VendorStreamMessagesSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination messages request
 *
 * @generated from message Scailo.VendorStreamsServicePaginatedMessagesResponse
 */
export declare class VendorStreamsServicePaginatedMessagesResponse extends Message<VendorStreamsServicePaginatedMessagesResponse> {
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
     * @generated from field: repeated Scailo.VendorStreamMessage payload = 4;
     */
    payload: VendorStreamMessage[];
    constructor(data?: PartialMessage<VendorStreamsServicePaginatedMessagesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServicePaginatedMessagesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServicePaginatedMessagesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServicePaginatedMessagesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServicePaginatedMessagesResponse;
    static equals(a: VendorStreamsServicePaginatedMessagesResponse | PlainMessage<VendorStreamsServicePaginatedMessagesResponse> | undefined, b: VendorStreamsServicePaginatedMessagesResponse | PlainMessage<VendorStreamsServicePaginatedMessagesResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a message receipt
 *
 * @generated from message Scailo.VendorStreamMessageReceipt
 */
export declare class VendorStreamMessageReceipt extends Message<VendorStreamMessageReceipt> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor stream
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the vendor stream message UUID
     *
     * @generated from field: string vendor_stream_message_uuid = 10;
     */
    vendorStreamMessageUuid: string;
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
    constructor(data?: PartialMessage<VendorStreamMessageReceipt>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamMessageReceipt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamMessageReceipt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamMessageReceipt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamMessageReceipt;
    static equals(a: VendorStreamMessageReceipt | PlainMessage<VendorStreamMessageReceipt> | undefined, b: VendorStreamMessageReceipt | PlainMessage<VendorStreamMessageReceipt> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendor stream message receipts
 *
 * @generated from message Scailo.VendorStreamMessageReceiptsList
 */
export declare class VendorStreamMessageReceiptsList extends Message<VendorStreamMessageReceiptsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorStreamMessageReceipt list = 1;
     */
    list: VendorStreamMessageReceipt[];
    constructor(data?: PartialMessage<VendorStreamMessageReceiptsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamMessageReceiptsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamMessageReceiptsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamMessageReceiptsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamMessageReceiptsList;
    static equals(a: VendorStreamMessageReceiptsList | PlainMessage<VendorStreamMessageReceiptsList> | undefined, b: VendorStreamMessageReceiptsList | PlainMessage<VendorStreamMessageReceiptsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create an internal subscriber
 *
 * @generated from message Scailo.VendorStreamsServiceInternalSubscriberCreateRequest
 */
export declare class VendorStreamsServiceInternalSubscriberCreateRequest extends Message<VendorStreamsServiceInternalSubscriberCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the vendor stream ID
     *
     * @generated from field: uint64 vendor_stream_id = 10;
     */
    vendorStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<VendorStreamsServiceInternalSubscriberCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceInternalSubscriberCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceInternalSubscriberCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceInternalSubscriberCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceInternalSubscriberCreateRequest;
    static equals(a: VendorStreamsServiceInternalSubscriberCreateRequest | PlainMessage<VendorStreamsServiceInternalSubscriberCreateRequest> | undefined, b: VendorStreamsServiceInternalSubscriberCreateRequest | PlainMessage<VendorStreamsServiceInternalSubscriberCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an internal subscriber
 *
 * @generated from message Scailo.VendorStreamInternalSubscriber
 */
export declare class VendorStreamInternalSubscriber extends Message<VendorStreamInternalSubscriber> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor stream internal subscriber
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
     * Stores the vendor stream ID
     *
     * @generated from field: uint64 vendor_stream_id = 10;
     */
    vendorStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores the user UUID (determined by the user_id)
     *
     * @generated from field: string user_uuid = 30;
     */
    userUuid: string;
    constructor(data?: PartialMessage<VendorStreamInternalSubscriber>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamInternalSubscriber";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamInternalSubscriber;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamInternalSubscriber;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamInternalSubscriber;
    static equals(a: VendorStreamInternalSubscriber | PlainMessage<VendorStreamInternalSubscriber> | undefined, b: VendorStreamInternalSubscriber | PlainMessage<VendorStreamInternalSubscriber> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of internal subscribers
 *
 * @generated from message Scailo.VendorStreamInternalSubscribersList
 */
export declare class VendorStreamInternalSubscribersList extends Message<VendorStreamInternalSubscribersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorStreamInternalSubscriber list = 1;
     */
    list: VendorStreamInternalSubscriber[];
    constructor(data?: PartialMessage<VendorStreamInternalSubscribersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamInternalSubscribersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamInternalSubscribersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamInternalSubscribersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamInternalSubscribersList;
    static equals(a: VendorStreamInternalSubscribersList | PlainMessage<VendorStreamInternalSubscribersList> | undefined, b: VendorStreamInternalSubscribersList | PlainMessage<VendorStreamInternalSubscribersList> | undefined): boolean;
}
/**
 *
 * Describes the data model to handle importing of internal subscribers from the given identifier representing a team or a department
 *
 * @generated from message Scailo.VendorStreamsServiceImportInternalSubscribersRequest
 */
export declare class VendorStreamsServiceImportInternalSubscribersRequest extends Message<VendorStreamsServiceImportInternalSubscribersRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the vendor stream
     *
     * @generated from field: uint64 vendor_stream_id = 2;
     */
    vendorStreamId: bigint;
    /**
     * The ID of the team or the department from which internal subscribers need to be added to the vendor stream
     *
     * @generated from field: uint64 resource_id = 3;
     */
    resourceId: bigint;
    /**
     * Stores if the existing internal subscribers in the vendor stream need to be deleted before adding from the source record
     *
     * @generated from field: bool delete_existing = 4;
     */
    deleteExisting: boolean;
    constructor(data?: PartialMessage<VendorStreamsServiceImportInternalSubscribersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceImportInternalSubscribersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceImportInternalSubscribersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceImportInternalSubscribersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceImportInternalSubscribersRequest;
    static equals(a: VendorStreamsServiceImportInternalSubscribersRequest | PlainMessage<VendorStreamsServiceImportInternalSubscribersRequest> | undefined, b: VendorStreamsServiceImportInternalSubscribersRequest | PlainMessage<VendorStreamsServiceImportInternalSubscribersRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a vendor stream vendor subscriber
 *
 * @generated from message Scailo.VendorStreamsServiceVendorSubscriberCreateRequest
 */
export declare class VendorStreamsServiceVendorSubscriberCreateRequest extends Message<VendorStreamsServiceVendorSubscriberCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the vendor stream ID
     *
     * @generated from field: uint64 vendor_stream_id = 10;
     */
    vendorStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<VendorStreamsServiceVendorSubscriberCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamsServiceVendorSubscriberCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamsServiceVendorSubscriberCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamsServiceVendorSubscriberCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamsServiceVendorSubscriberCreateRequest;
    static equals(a: VendorStreamsServiceVendorSubscriberCreateRequest | PlainMessage<VendorStreamsServiceVendorSubscriberCreateRequest> | undefined, b: VendorStreamsServiceVendorSubscriberCreateRequest | PlainMessage<VendorStreamsServiceVendorSubscriberCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a vendor stream vendor subscriber
 *
 * @generated from message Scailo.VendorStreamVendorSubscriber
 */
export declare class VendorStreamVendorSubscriber extends Message<VendorStreamVendorSubscriber> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this vendor stream vendor subscriber
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
     * Stores the vendor stream ID
     *
     * @generated from field: uint64 vendor_stream_id = 10;
     */
    vendorStreamId: bigint;
    /**
     * Stores the user ID
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * Stores the user UUID (determined by the user_id)
     *
     * @generated from field: string user_uuid = 30;
     */
    userUuid: string;
    constructor(data?: PartialMessage<VendorStreamVendorSubscriber>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamVendorSubscriber";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamVendorSubscriber;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamVendorSubscriber;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamVendorSubscriber;
    static equals(a: VendorStreamVendorSubscriber | PlainMessage<VendorStreamVendorSubscriber> | undefined, b: VendorStreamVendorSubscriber | PlainMessage<VendorStreamVendorSubscriber> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vendor stream vendor subscribers
 *
 * @generated from message Scailo.VendorStreamVendorSubscribersList
 */
export declare class VendorStreamVendorSubscribersList extends Message<VendorStreamVendorSubscribersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.VendorStreamVendorSubscriber list = 1;
     */
    list: VendorStreamVendorSubscriber[];
    constructor(data?: PartialMessage<VendorStreamVendorSubscribersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorStreamVendorSubscribersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorStreamVendorSubscribersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorStreamVendorSubscribersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorStreamVendorSubscribersList;
    static equals(a: VendorStreamVendorSubscribersList | PlainMessage<VendorStreamVendorSubscribersList> | undefined, b: VendorStreamVendorSubscribersList | PlainMessage<VendorStreamVendorSubscribersList> | undefined): boolean;
}
//# sourceMappingURL=vendor_streams.scailo_pb.d.ts.map
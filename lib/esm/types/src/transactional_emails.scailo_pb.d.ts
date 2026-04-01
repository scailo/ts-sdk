import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys for retrieving transactional emails
 *
 * @generated from enum Scailo.TRANSACTIONAL_EMAIL_SORT_KEY
 */
export declare enum TRANSACTIONAL_EMAIL_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: TRANSACTIONAL_EMAIL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TRANSACTIONAL_EMAIL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: TRANSACTIONAL_EMAIL_SORT_KEY_CREATED_AT = 1;
     */
    TRANSACTIONAL_EMAIL_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: TRANSACTIONAL_EMAIL_SORT_KEY_MODIFIED_AT = 2;
     */
    TRANSACTIONAL_EMAIL_SORT_KEY_MODIFIED_AT = 2
}
/**
 *
 * Describes the necessary data structure during creation of a transactional email
 *
 * @generated from message Scailo.TransactionalEmailsServiceCreateRequest
 */
export declare class TransactionalEmailsServiceCreateRequest extends Message<TransactionalEmailsServiceCreateRequest> {
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
     * Stores the name of the sender
     *
     * @generated from field: string sender_name = 10;
     */
    senderName: string;
    /**
     * Stores the title of the transactional email
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * Stores the email address to which the reply could be sent
     *
     * @generated from field: string reply_to = 12;
     */
    replyTo: string;
    /**
     * Stores the subject of the transactional email
     *
     * @generated from field: string subject = 13;
     */
    subject: string;
    /**
     * Stores the content of the transactional email
     *
     * @generated from field: string content = 14;
     */
    content: string;
    /**
     * The list of recipients
     *
     * @generated from field: repeated Scailo.TransactionalEmailsServiceAddRecipientRequest recipients = 30;
     */
    recipients: TransactionalEmailsServiceAddRecipientRequest[];
    /**
     * The list of attachments
     *
     * @generated from field: repeated Scailo.TransactionalEmailsServiceAddAttachmentRequest attachments = 40;
     */
    attachments: TransactionalEmailsServiceAddAttachmentRequest[];
    constructor(data?: PartialMessage<TransactionalEmailsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceCreateRequest;
    static equals(a: TransactionalEmailsServiceCreateRequest | PlainMessage<TransactionalEmailsServiceCreateRequest> | undefined, b: TransactionalEmailsServiceCreateRequest | PlainMessage<TransactionalEmailsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each transactional email on the platform
 *
 * @generated from message Scailo.TransactionalEmail
 */
export declare class TransactionalEmail extends Message<TransactionalEmail> {
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
     * Stores the metadata of this resource
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the name of the sender
     *
     * @generated from field: string sender_name = 10;
     */
    senderName: string;
    /**
     * Stores the title of the transactional email
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * Stores the email address to which the reply could be sent
     *
     * @generated from field: string reply_to = 12;
     */
    replyTo: string;
    /**
     * Stores the subject of the transactional email
     *
     * @generated from field: string subject = 13;
     */
    subject: string;
    /**
     * Stores the content of the transactional email
     *
     * @generated from field: string content = 14;
     */
    content: string;
    /**
     * Stores the tracking URL of the transactional email
     *
     * @generated from field: string tracking_url = 20;
     */
    trackingUrl: string;
    constructor(data?: PartialMessage<TransactionalEmail>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmail";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmail;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmail;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmail;
    static equals(a: TransactionalEmail | PlainMessage<TransactionalEmail> | undefined, b: TransactionalEmail | PlainMessage<TransactionalEmail> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of transactional emails
 *
 * @generated from message Scailo.TransactionalEmailsList
 */
export declare class TransactionalEmailsList extends Message<TransactionalEmailsList> {
    /**
     * List of transactional emails
     *
     * @generated from field: repeated Scailo.TransactionalEmail list = 1;
     */
    list: TransactionalEmail[];
    constructor(data?: PartialMessage<TransactionalEmailsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailsList;
    static equals(a: TransactionalEmailsList | PlainMessage<TransactionalEmailsList> | undefined, b: TransactionalEmailsList | PlainMessage<TransactionalEmailsList> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message Scailo.TransactionalEmailPaginationResp
 */
export declare class TransactionalEmailPaginationResp extends Message<TransactionalEmailPaginationResp> {
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
     * @generated from field: repeated Scailo.TransactionalEmail payload = 4;
     */
    payload: TransactionalEmail[];
    constructor(data?: PartialMessage<TransactionalEmailPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailPaginationResp;
    static equals(a: TransactionalEmailPaginationResp | PlainMessage<TransactionalEmailPaginationResp> | undefined, b: TransactionalEmailPaginationResp | PlainMessage<TransactionalEmailPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.TransactionalEmailsServicePaginationReq
 */
export declare class TransactionalEmailsServicePaginationReq extends Message<TransactionalEmailsServicePaginationReq> {
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
     * @generated from field: Scailo.TRANSACTIONAL_EMAIL_SORT_KEY sort_key = 5;
     */
    sortKey: TRANSACTIONAL_EMAIL_SORT_KEY;
    constructor(data?: PartialMessage<TransactionalEmailsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailsServicePaginationReq;
    static equals(a: TransactionalEmailsServicePaginationReq | PlainMessage<TransactionalEmailsServicePaginationReq> | undefined, b: TransactionalEmailsServicePaginationReq | PlainMessage<TransactionalEmailsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.TransactionalEmailsServiceFilterReq
 */
export declare class TransactionalEmailsServiceFilterReq extends Message<TransactionalEmailsServiceFilterReq> {
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
     * @generated from field: Scailo.TRANSACTIONAL_EMAIL_SORT_KEY sort_key = 5;
     */
    sortKey: TRANSACTIONAL_EMAIL_SORT_KEY;
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
     * Stores the name of the sender
     *
     * @generated from field: string sender_name = 20;
     */
    senderName: string;
    /**
     * Stores the title of the transactional email
     *
     * @generated from field: string title = 21;
     */
    title: string;
    /**
     * Stores the email address to which the reply could be sent
     *
     * @generated from field: string reply_to = 22;
     */
    replyTo: string;
    /**
     * Stores the subject of the transactional email
     *
     * @generated from field: string subject = 23;
     */
    subject: string;
    /**
     * Stores the email address of the recipient
     *
     * @generated from field: string recipient_email_address = 40;
     */
    recipientEmailAddress: string;
    constructor(data?: PartialMessage<TransactionalEmailsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceFilterReq;
    static equals(a: TransactionalEmailsServiceFilterReq | PlainMessage<TransactionalEmailsServiceFilterReq> | undefined, b: TransactionalEmailsServiceFilterReq | PlainMessage<TransactionalEmailsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.TransactionalEmailsServiceCountReq
 */
export declare class TransactionalEmailsServiceCountReq extends Message<TransactionalEmailsServiceCountReq> {
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
     * Stores the name of the sender
     *
     * @generated from field: string sender_name = 20;
     */
    senderName: string;
    /**
     * Stores the title of the transactional email
     *
     * @generated from field: string title = 21;
     */
    title: string;
    /**
     * Stores the email address to which the reply could be sent
     *
     * @generated from field: string reply_to = 22;
     */
    replyTo: string;
    /**
     * Stores the subject of the transactional email
     *
     * @generated from field: string subject = 23;
     */
    subject: string;
    /**
     * Stores the email address of the recipient
     *
     * @generated from field: string recipient_email_address = 40;
     */
    recipientEmailAddress: string;
    constructor(data?: PartialMessage<TransactionalEmailsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceCountReq;
    static equals(a: TransactionalEmailsServiceCountReq | PlainMessage<TransactionalEmailsServiceCountReq> | undefined, b: TransactionalEmailsServiceCountReq | PlainMessage<TransactionalEmailsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on transactional emails
 *
 * @generated from message Scailo.TransactionalEmailsServiceSearchAllReq
 */
export declare class TransactionalEmailsServiceSearchAllReq extends Message<TransactionalEmailsServiceSearchAllReq> {
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
     * The sort key that is to be used to fetch the response
     *
     * @generated from field: Scailo.TRANSACTIONAL_EMAIL_SORT_KEY sort_key = 5;
     */
    sortKey: TRANSACTIONAL_EMAIL_SORT_KEY;
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
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 10;
     */
    searchKey: string;
    constructor(data?: PartialMessage<TransactionalEmailsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceSearchAllReq;
    static equals(a: TransactionalEmailsServiceSearchAllReq | PlainMessage<TransactionalEmailsServiceSearchAllReq> | undefined, b: TransactionalEmailsServiceSearchAllReq | PlainMessage<TransactionalEmailsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during addition of a recipient
 *
 * @generated from message Scailo.TransactionalEmailsServiceAddRecipientRequest
 */
export declare class TransactionalEmailsServiceAddRecipientRequest extends Message<TransactionalEmailsServiceAddRecipientRequest> {
    /**
     * Stores the email address of the recipient
     *
     * @generated from field: string address = 10;
     */
    address: string;
    constructor(data?: PartialMessage<TransactionalEmailsServiceAddRecipientRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailsServiceAddRecipientRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailsServiceAddRecipientRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceAddRecipientRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceAddRecipientRequest;
    static equals(a: TransactionalEmailsServiceAddRecipientRequest | PlainMessage<TransactionalEmailsServiceAddRecipientRequest> | undefined, b: TransactionalEmailsServiceAddRecipientRequest | PlainMessage<TransactionalEmailsServiceAddRecipientRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores the recipient information of a transactional email
 *
 * @generated from message Scailo.TransactionalEmailRecipient
 */
export declare class TransactionalEmailRecipient extends Message<TransactionalEmailRecipient> {
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
     * Stores the metadata of this client
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The ID of the transactional email
     *
     * @generated from field: uint64 transactional_email_id = 10;
     */
    transactionalEmailId: bigint;
    /**
     * The email address of the recipient
     *
     * @generated from field: string address = 11;
     */
    address: string;
    constructor(data?: PartialMessage<TransactionalEmailRecipient>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailRecipient";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailRecipient;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailRecipient;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailRecipient;
    static equals(a: TransactionalEmailRecipient | PlainMessage<TransactionalEmailRecipient> | undefined, b: TransactionalEmailRecipient | PlainMessage<TransactionalEmailRecipient> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of transactional email recipients
 *
 * @generated from message Scailo.TransactionalEmailRecipientsList
 */
export declare class TransactionalEmailRecipientsList extends Message<TransactionalEmailRecipientsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.TransactionalEmailRecipient list = 1;
     */
    list: TransactionalEmailRecipient[];
    constructor(data?: PartialMessage<TransactionalEmailRecipientsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailRecipientsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailRecipientsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailRecipientsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailRecipientsList;
    static equals(a: TransactionalEmailRecipientsList | PlainMessage<TransactionalEmailRecipientsList> | undefined, b: TransactionalEmailRecipientsList | PlainMessage<TransactionalEmailRecipientsList> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during addition of a recipient
 *
 * @generated from message Scailo.TransactionalEmailsServiceAddAttachmentRequest
 */
export declare class TransactionalEmailsServiceAddAttachmentRequest extends Message<TransactionalEmailsServiceAddAttachmentRequest> {
    /**
     * Stores the name of the attachment
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Stores the content of the attachment
     *
     * @generated from field: bytes content = 11;
     */
    content: Uint8Array;
    constructor(data?: PartialMessage<TransactionalEmailsServiceAddAttachmentRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailsServiceAddAttachmentRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailsServiceAddAttachmentRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceAddAttachmentRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailsServiceAddAttachmentRequest;
    static equals(a: TransactionalEmailsServiceAddAttachmentRequest | PlainMessage<TransactionalEmailsServiceAddAttachmentRequest> | undefined, b: TransactionalEmailsServiceAddAttachmentRequest | PlainMessage<TransactionalEmailsServiceAddAttachmentRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores the attachment information of a transactional email
 *
 * @generated from message Scailo.TransactionalEmailAttachment
 */
export declare class TransactionalEmailAttachment extends Message<TransactionalEmailAttachment> {
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
     * Stores the metadata of this client
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The ID of the transactional email
     *
     * @generated from field: uint64 transactional_email_id = 10;
     */
    transactionalEmailId: bigint;
    /**
     * The name of the attachment
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The content of the attachment
     *
     * @generated from field: bytes content = 12;
     */
    content: Uint8Array;
    constructor(data?: PartialMessage<TransactionalEmailAttachment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailAttachment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailAttachment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailAttachment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailAttachment;
    static equals(a: TransactionalEmailAttachment | PlainMessage<TransactionalEmailAttachment> | undefined, b: TransactionalEmailAttachment | PlainMessage<TransactionalEmailAttachment> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of transactional email attachments
 *
 * @generated from message Scailo.TransactionalEmailAttachmentsList
 */
export declare class TransactionalEmailAttachmentsList extends Message<TransactionalEmailAttachmentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.TransactionalEmailAttachment list = 1;
     */
    list: TransactionalEmailAttachment[];
    constructor(data?: PartialMessage<TransactionalEmailAttachmentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TransactionalEmailAttachmentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionalEmailAttachmentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionalEmailAttachmentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionalEmailAttachmentsList;
    static equals(a: TransactionalEmailAttachmentsList | PlainMessage<TransactionalEmailAttachmentsList> | undefined, b: TransactionalEmailAttachmentsList | PlainMessage<TransactionalEmailAttachmentsList> | undefined): boolean;
}
//# sourceMappingURL=transactional_emails.scailo_pb.d.ts.map
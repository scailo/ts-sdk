import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the available resource types magic links
 *
 * @generated from enum Scailo.MAGIC_LINK_RESOURCE_TYPE
 */
export declare enum MAGIC_LINK_RESOURCE_TYPE {
    /**
     * Used only in filters
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_ANY_UNSPECIFIED = 0;
     */
    MAGIC_LINK_RESOURCE_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the magic link was created for a purchase order
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_PURCHASE_ORDER = 100;
     */
    MAGIC_LINK_RESOURCE_TYPE_PURCHASE_ORDER = 100,
    /**
     * Denotes that the magic link was created for a goods receipt
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_GOODS_RECEIPT = 110;
     */
    MAGIC_LINK_RESOURCE_TYPE_GOODS_RECEIPT = 110,
    /**
     * Denotes that the magic link was created for a vendor invoice
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_VENDOR_INVOICE = 120;
     */
    MAGIC_LINK_RESOURCE_TYPE_VENDOR_INVOICE = 120,
    /**
     * Denotes that the magic link was created for a debit note
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_DEBIT_NOTE = 130;
     */
    MAGIC_LINK_RESOURCE_TYPE_DEBIT_NOTE = 130,
    /**
     * Denotes that the magic link was created for a purchase return
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_PURCHASE_RETURN = 140;
     */
    MAGIC_LINK_RESOURCE_TYPE_PURCHASE_RETURN = 140,
    /**
     * Denotes that the magic link was created for a sales enquiry
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_SALES_ENQUIRY = 200;
     */
    MAGIC_LINK_RESOURCE_TYPE_SALES_ENQUIRY = 200,
    /**
     * Denotes that the magic link was created for a sales quotation;
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_SALES_QUOTATION = 205;
     */
    MAGIC_LINK_RESOURCE_TYPE_SALES_QUOTATION = 205,
    /**
     * Denotes that the magic link was created for a sales order
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_SALES_ORDER = 210;
     */
    MAGIC_LINK_RESOURCE_TYPE_SALES_ORDER = 210,
    /**
     * Denotes that the magic link was created for a goods dispatch
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_GOODS_DISPATCH = 220;
     */
    MAGIC_LINK_RESOURCE_TYPE_GOODS_DISPATCH = 220,
    /**
     * Denotes that the magic link was created for a proforma invoice
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_PROFORMA_INVOICE = 225;
     */
    MAGIC_LINK_RESOURCE_TYPE_PROFORMA_INVOICE = 225,
    /**
     * Denotes that the magic link was created for a sales invoice
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_SALES_INVOICE = 230;
     */
    MAGIC_LINK_RESOURCE_TYPE_SALES_INVOICE = 230,
    /**
     * Denotes that the magic link was created for a credit note
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_CREDIT_NOTE = 240;
     */
    MAGIC_LINK_RESOURCE_TYPE_CREDIT_NOTE = 240,
    /**
     * Denotes that the magic link was created for a sales return
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_SALES_RETURN = 250;
     */
    MAGIC_LINK_RESOURCE_TYPE_SALES_RETURN = 250,
    /**
     * Denotes that the magic link was created for an inward job
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_INWARD_JOB = 300;
     */
    MAGIC_LINK_RESOURCE_TYPE_INWARD_JOB = 300,
    /**
     * Denotes that the magic link was created for an outward job
     *
     * @generated from enum value: MAGIC_LINK_RESOURCE_TYPE_OUTWARD_JOB = 400;
     */
    MAGIC_LINK_RESOURCE_TYPE_OUTWARD_JOB = 400
}
/**
 *
 * Describes the available sort keys for retrieving magic links
 *
 * @generated from enum Scailo.MAGIC_LINK_SORT_KEY
 */
export declare enum MAGIC_LINK_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: MAGIC_LINK_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    MAGIC_LINK_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: MAGIC_LINK_SORT_KEY_CREATED_AT = 1;
     */
    MAGIC_LINK_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: MAGIC_LINK_SORT_KEY_MODIFIED_AT = 2;
     */
    MAGIC_LINK_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by expiry timestamp
     *
     * @generated from enum value: MAGIC_LINK_SORT_KEY_EXPIRES_AT = 10;
     */
    MAGIC_LINK_SORT_KEY_EXPIRES_AT = 10
}
/**
 *
 * Describes the data structure of each magic link on the platform
 *
 * @generated from message Scailo.MagicLink
 */
export declare class MagicLink extends Message<MagicLink> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
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
     * The UUID of the resource
     *
     * @generated from field: string resource_uuid = 10;
     */
    resourceUuid: string;
    /**
     * The type of the resource
     *
     * @generated from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;
     */
    resourceType: MAGIC_LINK_RESOURCE_TYPE;
    /**
     * Stores the UNIX timestamp of when the link expires. If 0, then the link never expires
     *
     * @generated from field: uint64 expires_at = 30;
     */
    expiresAt: bigint;
    /**
     * Stores an optional description of the magic link
     *
     * @generated from field: string description = 35;
     */
    description: string;
    /**
     * Stores the code of the magic link that can be used to uniquely identify the magic link. This code will be used in the associated links, and will be used to uniquely identify the resource.
     *
     * @generated from field: string code = 40;
     */
    code: string;
    /**
     * Stores the generated URL of the magic link
     *
     * @generated from field: string url = 100;
     */
    url: string;
    constructor(data?: PartialMessage<MagicLink>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLink";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLink;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLink;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLink;
    static equals(a: MagicLink | PlainMessage<MagicLink> | undefined, b: MagicLink | PlainMessage<MagicLink> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of magic links
 *
 * @generated from message Scailo.MagicLinksList
 */
export declare class MagicLinksList extends Message<MagicLinksList> {
    /**
     * List of magic links
     *
     * @generated from field: repeated Scailo.MagicLink list = 1;
     */
    list: MagicLink[];
    constructor(data?: PartialMessage<MagicLinksList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinksList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinksList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinksList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinksList;
    static equals(a: MagicLinksList | PlainMessage<MagicLinksList> | undefined, b: MagicLinksList | PlainMessage<MagicLinksList> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message Scailo.MagicLinkPaginationResp
 */
export declare class MagicLinkPaginationResp extends Message<MagicLinkPaginationResp> {
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
     * @generated from field: repeated Scailo.MagicLink payload = 4;
     */
    payload: MagicLink[];
    constructor(data?: PartialMessage<MagicLinkPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinkPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinkPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinkPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinkPaginationResp;
    static equals(a: MagicLinkPaginationResp | PlainMessage<MagicLinkPaginationResp> | undefined, b: MagicLinkPaginationResp | PlainMessage<MagicLinkPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation of a magic link
 *
 * @generated from message Scailo.MagicLinksServiceCreateRequest
 */
export declare class MagicLinksServiceCreateRequest extends Message<MagicLinksServiceCreateRequest> {
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
     * The UUID of the resource
     *
     * @generated from field: string resource_uuid = 10;
     */
    resourceUuid: string;
    /**
     * The type of the resource
     *
     * @generated from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;
     */
    resourceType: MAGIC_LINK_RESOURCE_TYPE;
    /**
     * Stores the UNIX timestamp of when the link expires. If 0, then the link never expires
     *
     * @generated from field: uint64 expires_at = 30;
     */
    expiresAt: bigint;
    /**
     * Stores an optional description of the magic link
     *
     * @generated from field: string description = 35;
     */
    description: string;
    constructor(data?: PartialMessage<MagicLinksServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinksServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinksServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinksServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinksServiceCreateRequest;
    static equals(a: MagicLinksServiceCreateRequest | PlainMessage<MagicLinksServiceCreateRequest> | undefined, b: MagicLinksServiceCreateRequest | PlainMessage<MagicLinksServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure for creation of a magic link. This data structure is used within other services, while creating magic links for the given resource
 *
 * @generated from message Scailo.MagicLinksServiceCreateRequestForSpecificResource
 */
export declare class MagicLinksServiceCreateRequestForSpecificResource extends Message<MagicLinksServiceCreateRequestForSpecificResource> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The UUID of the resource
     *
     * @generated from field: string resource_uuid = 10;
     */
    resourceUuid: string;
    /**
     * Stores the UNIX timestamp of when the link expires. If 0, then the link never expires
     *
     * @generated from field: uint64 expires_at = 30;
     */
    expiresAt: bigint;
    /**
     * Stores an optional description of the magic link
     *
     * @generated from field: string description = 35;
     */
    description: string;
    constructor(data?: PartialMessage<MagicLinksServiceCreateRequestForSpecificResource>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinksServiceCreateRequestForSpecificResource";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinksServiceCreateRequestForSpecificResource;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinksServiceCreateRequestForSpecificResource;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinksServiceCreateRequestForSpecificResource;
    static equals(a: MagicLinksServiceCreateRequestForSpecificResource | PlainMessage<MagicLinksServiceCreateRequestForSpecificResource> | undefined, b: MagicLinksServiceCreateRequestForSpecificResource | PlainMessage<MagicLinksServiceCreateRequestForSpecificResource> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a magic link
 *
 * @generated from message Scailo.MagicLinksServiceUpdateRequest
 */
export declare class MagicLinksServiceUpdateRequest extends Message<MagicLinksServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the magic link that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * Stores the UNIX timestamp of when the link expires. If 0, then the link never expires
     *
     * @generated from field: uint64 expires_at = 30;
     */
    expiresAt: bigint;
    /**
     * Stores an optional description of the magic link
     *
     * @generated from field: string description = 35;
     */
    description: string;
    constructor(data?: PartialMessage<MagicLinksServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinksServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinksServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinksServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinksServiceUpdateRequest;
    static equals(a: MagicLinksServiceUpdateRequest | PlainMessage<MagicLinksServiceUpdateRequest> | undefined, b: MagicLinksServiceUpdateRequest | PlainMessage<MagicLinksServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.MagicLinksServicePaginationReq
 */
export declare class MagicLinksServicePaginationReq extends Message<MagicLinksServicePaginationReq> {
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
     * @generated from field: Scailo.MAGIC_LINK_SORT_KEY sort_key = 5;
     */
    sortKey: MAGIC_LINK_SORT_KEY;
    constructor(data?: PartialMessage<MagicLinksServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinksServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinksServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinksServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinksServicePaginationReq;
    static equals(a: MagicLinksServicePaginationReq | PlainMessage<MagicLinksServicePaginationReq> | undefined, b: MagicLinksServicePaginationReq | PlainMessage<MagicLinksServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.MagicLinksServiceFilterReq
 */
export declare class MagicLinksServiceFilterReq extends Message<MagicLinksServiceFilterReq> {
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
     * @generated from field: Scailo.MAGIC_LINK_SORT_KEY sort_key = 5;
     */
    sortKey: MAGIC_LINK_SORT_KEY;
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
     * The type of the resource
     *
     * @generated from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;
     */
    resourceType: MAGIC_LINK_RESOURCE_TYPE;
    /**
     * The UUID of the resource
     *
     * @generated from field: string resource_uuid = 22;
     */
    resourceUuid: string;
    /**
     * The start timestamp that needs to be considered to filter by expiry
     *
     * @generated from field: uint64 expires_at_start = 30;
     */
    expiresAtStart: bigint;
    /**
     * The end timestamp that needs to be considered to filter by expiry
     *
     * @generated from field: uint64 expires_at_end = 31;
     */
    expiresAtEnd: bigint;
    constructor(data?: PartialMessage<MagicLinksServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinksServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinksServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinksServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinksServiceFilterReq;
    static equals(a: MagicLinksServiceFilterReq | PlainMessage<MagicLinksServiceFilterReq> | undefined, b: MagicLinksServiceFilterReq | PlainMessage<MagicLinksServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.MagicLinksServiceCountReq
 */
export declare class MagicLinksServiceCountReq extends Message<MagicLinksServiceCountReq> {
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
     * The type of the resource
     *
     * @generated from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;
     */
    resourceType: MAGIC_LINK_RESOURCE_TYPE;
    /**
     * The UUID of the resource
     *
     * @generated from field: string resource_uuid = 22;
     */
    resourceUuid: string;
    /**
     * The start timestamp that needs to be considered to filter by expiry
     *
     * @generated from field: uint64 expires_at_start = 30;
     */
    expiresAtStart: bigint;
    /**
     * The end timestamp that needs to be considered to filter by expiry
     *
     * @generated from field: uint64 expires_at_end = 31;
     */
    expiresAtEnd: bigint;
    constructor(data?: PartialMessage<MagicLinksServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinksServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinksServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinksServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinksServiceCountReq;
    static equals(a: MagicLinksServiceCountReq | PlainMessage<MagicLinksServiceCountReq> | undefined, b: MagicLinksServiceCountReq | PlainMessage<MagicLinksServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on magic links
 *
 * @generated from message Scailo.MagicLinksServiceSearchAllReq
 */
export declare class MagicLinksServiceSearchAllReq extends Message<MagicLinksServiceSearchAllReq> {
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
     * The sort key that is to be used to fetch the response
     *
     * @generated from field: Scailo.MAGIC_LINK_SORT_KEY sort_key = 5;
     */
    sortKey: MAGIC_LINK_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter magic links
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
    /**
     * The type of the resource
     *
     * @generated from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;
     */
    resourceType: MAGIC_LINK_RESOURCE_TYPE;
    constructor(data?: PartialMessage<MagicLinksServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinksServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinksServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinksServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinksServiceSearchAllReq;
    static equals(a: MagicLinksServiceSearchAllReq | PlainMessage<MagicLinksServiceSearchAllReq> | undefined, b: MagicLinksServiceSearchAllReq | PlainMessage<MagicLinksServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for retrieving the magic link information using the code
 *
 * @generated from message Scailo.MagicLinkServiceSearchByCodeReq
 */
export declare class MagicLinkServiceSearchByCodeReq extends Message<MagicLinkServiceSearchByCodeReq> {
    /**
     * The code that needs to be used to retrieve the magic link
     *
     * @generated from field: string code = 1;
     */
    code: string;
    /**
     * The IP address that is requesting the search (must be a valid IPv4 or IPv6 address)
     *
     * @generated from field: string ip_address = 2;
     */
    ipAddress: string;
    constructor(data?: PartialMessage<MagicLinkServiceSearchByCodeReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinkServiceSearchByCodeReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinkServiceSearchByCodeReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinkServiceSearchByCodeReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinkServiceSearchByCodeReq;
    static equals(a: MagicLinkServiceSearchByCodeReq | PlainMessage<MagicLinkServiceSearchByCodeReq> | undefined, b: MagicLinkServiceSearchByCodeReq | PlainMessage<MagicLinkServiceSearchByCodeReq> | undefined): boolean;
}
/**
 *
 * Describes the access log of each magic link
 *
 * @generated from message Scailo.MagicLinkAccessLog
 */
export declare class MagicLinkAccessLog extends Message<MagicLinkAccessLog> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this user
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the UUID of the magic link that was accessed
     *
     * @generated from field: string magic_link_uuid = 12;
     */
    magicLinkUuid: string;
    /**
     * Stores the IP address from where the resource was accessed
     *
     * @generated from field: string ip_addr = 13;
     */
    ipAddr: string;
    constructor(data?: PartialMessage<MagicLinkAccessLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinkAccessLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinkAccessLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinkAccessLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinkAccessLog;
    static equals(a: MagicLinkAccessLog | PlainMessage<MagicLinkAccessLog> | undefined, b: MagicLinkAccessLog | PlainMessage<MagicLinkAccessLog> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of access logs
 *
 * @generated from message Scailo.MagicLinkAccessLogsList
 */
export declare class MagicLinkAccessLogsList extends Message<MagicLinkAccessLogsList> {
    /**
     * List of access logs
     *
     * @generated from field: repeated Scailo.MagicLinkAccessLog list = 1;
     */
    list: MagicLinkAccessLog[];
    constructor(data?: PartialMessage<MagicLinkAccessLogsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MagicLinkAccessLogsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MagicLinkAccessLogsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MagicLinkAccessLogsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MagicLinkAccessLogsList;
    static equals(a: MagicLinkAccessLogsList | PlainMessage<MagicLinkAccessLogsList> | undefined, b: MagicLinkAccessLogsList | PlainMessage<MagicLinkAccessLogsList> | undefined): boolean;
}
//# sourceMappingURL=magic_links.scailo_pb.d.ts.map
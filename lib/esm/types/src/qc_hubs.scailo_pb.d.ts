import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.QC_HUB_SORT_KEY
 */
export declare enum QC_HUB_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QC_HUB_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QC_HUB_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QC_HUB_SORT_KEY_CREATED_AT = 1;
     */
    QC_HUB_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QC_HUB_SORT_KEY_MODIFIED_AT = 2;
     */
    QC_HUB_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QC_HUB_SORT_KEY_APPROVED_ON = 3;
     */
    QC_HUB_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QC_HUB_SORT_KEY_APPROVED_BY = 4;
     */
    QC_HUB_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QC_HUB_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QC_HUB_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: QC_HUB_SORT_KEY_NAME = 10;
     */
    QC_HUB_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: QC_HUB_SORT_KEY_CODE = 11;
     */
    QC_HUB_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.QCHubsServiceCreateRequest
 */
export declare class QCHubsServiceCreateRequest extends Message<QCHubsServiceCreateRequest> {
    /**
     * QCHubs a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * QCHubs any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 9;
     */
    locationId: bigint;
    /**
     * The name of the qc hub
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the qc hub is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc hub
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The username of the incharge
     *
     * @generated from field: string incharge_username = 13;
     */
    inchargeUsername: string;
    /**
     * The contact number of the qc hub
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
    constructor(data?: PartialMessage<QCHubsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHubsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHubsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHubsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHubsServiceCreateRequest;
    static equals(a: QCHubsServiceCreateRequest | PlainMessage<QCHubsServiceCreateRequest> | undefined, b: QCHubsServiceCreateRequest | PlainMessage<QCHubsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.QCHubsServiceUpdateRequest
 */
export declare class QCHubsServiceUpdateRequest extends Message<QCHubsServiceUpdateRequest> {
    /**
     * QCHubs any comment that the user might add during this operation
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
     * Optional boolean value that qc hubs if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the qc hub
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the qc hub is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc hub
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The username of the incharge
     *
     * @generated from field: string incharge_username = 13;
     */
    inchargeUsername: string;
    /**
     * The contact number of the qc hub
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
    constructor(data?: PartialMessage<QCHubsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHubsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHubsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHubsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHubsServiceUpdateRequest;
    static equals(a: QCHubsServiceUpdateRequest | PlainMessage<QCHubsServiceUpdateRequest> | undefined, b: QCHubsServiceUpdateRequest | PlainMessage<QCHubsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.QCHub
 */
export declare class QCHub extends Message<QCHub> {
    /**
     * QCHubs a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * QCHubs the metadata of this qc hub
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * QCHubs the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this qc hub
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * QCHubs the logs of every operation performed on this qc hub
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 9;
     */
    locationId: bigint;
    /**
     * The name of the qc hub
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the qc hub is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc hub
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The username of the incharge
     *
     * @generated from field: string incharge_username = 13;
     */
    inchargeUsername: string;
    /**
     * The contact number of the qc hub
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
    constructor(data?: PartialMessage<QCHub>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHub";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHub;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHub;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHub;
    static equals(a: QCHub | PlainMessage<QCHub> | undefined, b: QCHub | PlainMessage<QCHub> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.QCHubsList
 */
export declare class QCHubsList extends Message<QCHubsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.QCHub list = 1;
     */
    list: QCHub[];
    constructor(data?: PartialMessage<QCHubsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHubsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHubsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHubsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHubsList;
    static equals(a: QCHubsList | PlainMessage<QCHubsList> | undefined, b: QCHubsList | PlainMessage<QCHubsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.QCHubsServicePaginationReq
 */
export declare class QCHubsServicePaginationReq extends Message<QCHubsServicePaginationReq> {
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
     * @generated from field: Scailo.QC_HUB_SORT_KEY sort_key = 5;
     */
    sortKey: QC_HUB_SORT_KEY;
    /**
     * The status of this qc hub
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<QCHubsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHubsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHubsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHubsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHubsServicePaginationReq;
    static equals(a: QCHubsServicePaginationReq | PlainMessage<QCHubsServicePaginationReq> | undefined, b: QCHubsServicePaginationReq | PlainMessage<QCHubsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.QCHubsServicePaginationResponse
 */
export declare class QCHubsServicePaginationResponse extends Message<QCHubsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.QCHub payload = 4;
     */
    payload: QCHub[];
    constructor(data?: PartialMessage<QCHubsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHubsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHubsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHubsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHubsServicePaginationResponse;
    static equals(a: QCHubsServicePaginationResponse | PlainMessage<QCHubsServicePaginationResponse> | undefined, b: QCHubsServicePaginationResponse | PlainMessage<QCHubsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.QCHubsServiceFilterReq
 */
export declare class QCHubsServiceFilterReq extends Message<QCHubsServiceFilterReq> {
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
     * @generated from field: Scailo.QC_HUB_SORT_KEY sort_key = 5;
     */
    sortKey: QC_HUB_SORT_KEY;
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
     * The status of this qc hub
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
     * The name of the qc hub
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the qc hub is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 22;
     */
    locationId: bigint;
    constructor(data?: PartialMessage<QCHubsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHubsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHubsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHubsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHubsServiceFilterReq;
    static equals(a: QCHubsServiceFilterReq | PlainMessage<QCHubsServiceFilterReq> | undefined, b: QCHubsServiceFilterReq | PlainMessage<QCHubsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.QCHubsServiceCountReq
 */
export declare class QCHubsServiceCountReq extends Message<QCHubsServiceCountReq> {
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
     * The status of this qc hub
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
     * The name of the qc hub
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the qc hub is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 22;
     */
    locationId: bigint;
    constructor(data?: PartialMessage<QCHubsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHubsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHubsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHubsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHubsServiceCountReq;
    static equals(a: QCHubsServiceCountReq | PlainMessage<QCHubsServiceCountReq> | undefined, b: QCHubsServiceCountReq | PlainMessage<QCHubsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.QCHubsServiceSearchAllReq
 */
export declare class QCHubsServiceSearchAllReq extends Message<QCHubsServiceSearchAllReq> {
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
     * @generated from field: Scailo.QC_HUB_SORT_KEY sort_key = 5;
     */
    sortKey: QC_HUB_SORT_KEY;
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
    /**
     * The ID of the associated location
     *
     * @generated from field: uint64 location_id = 12;
     */
    locationId: bigint;
    constructor(data?: PartialMessage<QCHubsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCHubsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCHubsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCHubsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCHubsServiceSearchAllReq;
    static equals(a: QCHubsServiceSearchAllReq | PlainMessage<QCHubsServiceSearchAllReq> | undefined, b: QCHubsServiceSearchAllReq | PlainMessage<QCHubsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=qc_hubs.scailo_pb.d.ts.map
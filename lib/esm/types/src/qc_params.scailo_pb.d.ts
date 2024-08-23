import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.QC_PARAM_SORT_KEY
 */
export declare enum QC_PARAM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QC_PARAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_CREATED_AT = 1;
     */
    QC_PARAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_MODIFIED_AT = 2;
     */
    QC_PARAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_APPROVED_ON = 3;
     */
    QC_PARAM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_APPROVED_BY = 4;
     */
    QC_PARAM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QC_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_COMPLETED_ON = 6;
     */
    QC_PARAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_NAME = 10;
     */
    QC_PARAM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: QC_PARAM_SORT_KEY_CODE = 11;
     */
    QC_PARAM_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.QCParamsServiceCreateRequest
 */
export declare class QCParamsServiceCreateRequest extends Message<QCParamsServiceCreateRequest> {
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
     * The name of the qc param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The qc param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<QCParamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceCreateRequest;
    static equals(a: QCParamsServiceCreateRequest | PlainMessage<QCParamsServiceCreateRequest> | undefined, b: QCParamsServiceCreateRequest | PlainMessage<QCParamsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.QCParamsServiceUpdateRequest
 */
export declare class QCParamsServiceUpdateRequest extends Message<QCParamsServiceUpdateRequest> {
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
     * The name of the qc param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The qc param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<QCParamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceUpdateRequest;
    static equals(a: QCParamsServiceUpdateRequest | PlainMessage<QCParamsServiceUpdateRequest> | undefined, b: QCParamsServiceUpdateRequest | PlainMessage<QCParamsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.QCParam
 */
export declare class QCParam extends Message<QCParam> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this qc param
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
     * The status of this qc param
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this qc param
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this qc param was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The name of the qc param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The qc param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<QCParam>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParam";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParam;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParam;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParam;
    static equals(a: QCParam | PlainMessage<QCParam> | undefined, b: QCParam | PlainMessage<QCParam> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.QCParamsList
 */
export declare class QCParamsList extends Message<QCParamsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.QCParam list = 1;
     */
    list: QCParam[];
    constructor(data?: PartialMessage<QCParamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsList;
    static equals(a: QCParamsList | PlainMessage<QCParamsList> | undefined, b: QCParamsList | PlainMessage<QCParamsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.QCParamsServicePaginationReq
 */
export declare class QCParamsServicePaginationReq extends Message<QCParamsServicePaginationReq> {
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
     * @generated from field: Scailo.QC_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: QC_PARAM_SORT_KEY;
    /**
     * The status of this qc param
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<QCParamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServicePaginationReq;
    static equals(a: QCParamsServicePaginationReq | PlainMessage<QCParamsServicePaginationReq> | undefined, b: QCParamsServicePaginationReq | PlainMessage<QCParamsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.QCParamsServicePaginationResponse
 */
export declare class QCParamsServicePaginationResponse extends Message<QCParamsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.QCParam payload = 4;
     */
    payload: QCParam[];
    constructor(data?: PartialMessage<QCParamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServicePaginationResponse;
    static equals(a: QCParamsServicePaginationResponse | PlainMessage<QCParamsServicePaginationResponse> | undefined, b: QCParamsServicePaginationResponse | PlainMessage<QCParamsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.QCParamsServiceFilterReq
 */
export declare class QCParamsServiceFilterReq extends Message<QCParamsServiceFilterReq> {
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
     * @generated from field: Scailo.QC_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: QC_PARAM_SORT_KEY;
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
     * The status of this qc param
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
     * The name of the qc param
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The qc param code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<QCParamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceFilterReq;
    static equals(a: QCParamsServiceFilterReq | PlainMessage<QCParamsServiceFilterReq> | undefined, b: QCParamsServiceFilterReq | PlainMessage<QCParamsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.QCParamsServiceCountReq
 */
export declare class QCParamsServiceCountReq extends Message<QCParamsServiceCountReq> {
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
     * The status of this qc param
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
     * The name of the qc param
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The qc param code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<QCParamsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParamsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceCountReq;
    static equals(a: QCParamsServiceCountReq | PlainMessage<QCParamsServiceCountReq> | undefined, b: QCParamsServiceCountReq | PlainMessage<QCParamsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.QCParamsServiceSearchAllReq
 */
export declare class QCParamsServiceSearchAllReq extends Message<QCParamsServiceSearchAllReq> {
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
     * @generated from field: Scailo.QC_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: QC_PARAM_SORT_KEY;
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
    constructor(data?: PartialMessage<QCParamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QCParamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceSearchAllReq;
    static equals(a: QCParamsServiceSearchAllReq | PlainMessage<QCParamsServiceSearchAllReq> | undefined, b: QCParamsServiceSearchAllReq | PlainMessage<QCParamsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=qc_params.scailo_pb.d.ts.map
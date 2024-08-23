import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SKILL_PARAM_SORT_KEY
 */
export declare enum SKILL_PARAM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_CREATED_AT = 1;
     */
    SKILL_PARAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_MODIFIED_AT = 2;
     */
    SKILL_PARAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVED_ON = 3;
     */
    SKILL_PARAM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVED_BY = 4;
     */
    SKILL_PARAM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SKILL_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_COMPLETED_ON = 6;
     */
    SKILL_PARAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_NAME = 10;
     */
    SKILL_PARAM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_CODE = 11;
     */
    SKILL_PARAM_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SkillsParamsServiceCreateRequest
 */
export declare class SkillsParamsServiceCreateRequest extends Message<SkillsParamsServiceCreateRequest> {
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
     * The name of the skill param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the skill param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SkillsParamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsParamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceCreateRequest;
    static equals(a: SkillsParamsServiceCreateRequest | PlainMessage<SkillsParamsServiceCreateRequest> | undefined, b: SkillsParamsServiceCreateRequest | PlainMessage<SkillsParamsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SkillsParamsServiceUpdateRequest
 */
export declare class SkillsParamsServiceUpdateRequest extends Message<SkillsParamsServiceUpdateRequest> {
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
     * The name of the skill param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the skill param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SkillsParamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsParamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceUpdateRequest;
    static equals(a: SkillsParamsServiceUpdateRequest | PlainMessage<SkillsParamsServiceUpdateRequest> | undefined, b: SkillsParamsServiceUpdateRequest | PlainMessage<SkillsParamsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SkillParam
 */
export declare class SkillParam extends Message<SkillParam> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this skill param
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
     * The status of this skill param
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this skill param
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this skill param was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The name of the skill param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the skill param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SkillParam>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillParam";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillParam;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillParam;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillParam;
    static equals(a: SkillParam | PlainMessage<SkillParam> | undefined, b: SkillParam | PlainMessage<SkillParam> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.SkillsParamsList
 */
export declare class SkillsParamsList extends Message<SkillsParamsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SkillParam list = 1;
     */
    list: SkillParam[];
    constructor(data?: PartialMessage<SkillsParamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsParamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsList;
    static equals(a: SkillsParamsList | PlainMessage<SkillsParamsList> | undefined, b: SkillsParamsList | PlainMessage<SkillsParamsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SkillsParamsServicePaginationReq
 */
export declare class SkillsParamsServicePaginationReq extends Message<SkillsParamsServicePaginationReq> {
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
     * @generated from field: Scailo.SKILL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_PARAM_SORT_KEY;
    /**
     * The status of this skill param
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SkillsParamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsParamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationReq;
    static equals(a: SkillsParamsServicePaginationReq | PlainMessage<SkillsParamsServicePaginationReq> | undefined, b: SkillsParamsServicePaginationReq | PlainMessage<SkillsParamsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SkillsParamsServicePaginationResponse
 */
export declare class SkillsParamsServicePaginationResponse extends Message<SkillsParamsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SkillParam payload = 4;
     */
    payload: SkillParam[];
    constructor(data?: PartialMessage<SkillsParamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsParamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationResponse;
    static equals(a: SkillsParamsServicePaginationResponse | PlainMessage<SkillsParamsServicePaginationResponse> | undefined, b: SkillsParamsServicePaginationResponse | PlainMessage<SkillsParamsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SkillsParamsServiceFilterReq
 */
export declare class SkillsParamsServiceFilterReq extends Message<SkillsParamsServiceFilterReq> {
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
     * @generated from field: Scailo.SKILL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_PARAM_SORT_KEY;
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
     * The status of this skill param
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
     * The name of the skill param
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<SkillsParamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsParamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceFilterReq;
    static equals(a: SkillsParamsServiceFilterReq | PlainMessage<SkillsParamsServiceFilterReq> | undefined, b: SkillsParamsServiceFilterReq | PlainMessage<SkillsParamsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SkillsParamsServiceCountReq
 */
export declare class SkillsParamsServiceCountReq extends Message<SkillsParamsServiceCountReq> {
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
     * The status of this skill param
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
     * The name of the skill param
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<SkillsParamsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsParamsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceCountReq;
    static equals(a: SkillsParamsServiceCountReq | PlainMessage<SkillsParamsServiceCountReq> | undefined, b: SkillsParamsServiceCountReq | PlainMessage<SkillsParamsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SkillsParamsServiceSearchAllReq
 */
export declare class SkillsParamsServiceSearchAllReq extends Message<SkillsParamsServiceSearchAllReq> {
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
     * @generated from field: Scailo.SKILL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_PARAM_SORT_KEY;
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
    constructor(data?: PartialMessage<SkillsParamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsParamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceSearchAllReq;
    static equals(a: SkillsParamsServiceSearchAllReq | PlainMessage<SkillsParamsServiceSearchAllReq> | undefined, b: SkillsParamsServiceSearchAllReq | PlainMessage<SkillsParamsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=skills_params.scailo_pb.d.ts.map
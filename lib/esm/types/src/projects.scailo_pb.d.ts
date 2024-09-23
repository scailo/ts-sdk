import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PROJECT_SORT_KEY
 */
export declare enum PROJECT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PROJECT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PROJECT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PROJECT_SORT_KEY_CREATED_AT = 1;
     */
    PROJECT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PROJECT_SORT_KEY_MODIFIED_AT = 2;
     */
    PROJECT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PROJECT_SORT_KEY_APPROVED_ON = 3;
     */
    PROJECT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PROJECT_SORT_KEY_APPROVED_BY = 4;
     */
    PROJECT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PROJECT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PROJECT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PROJECT_SORT_KEY_COMPLETED_ON = 6;
     */
    PROJECT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PROJECT_SORT_KEY_REFERENCE_ID = 10;
     */
    PROJECT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PROJECT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PROJECT_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ProjectsServiceCreateRequest
 */
export declare class ProjectsServiceCreateRequest extends Message<ProjectsServiceCreateRequest> {
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
     * The reference ID of the project
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The optional ID of the associated client
     *
     * @generated from field: uint64 client_id = 12;
     */
    clientId: bigint;
    /**
     * The description of the project
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProjectsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceCreateRequest;
    static equals(a: ProjectsServiceCreateRequest | PlainMessage<ProjectsServiceCreateRequest> | undefined, b: ProjectsServiceCreateRequest | PlainMessage<ProjectsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ProjectsServiceUpdateRequest
 */
export declare class ProjectsServiceUpdateRequest extends Message<ProjectsServiceUpdateRequest> {
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
     * The reference ID of the project
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The optional ID of the associated client
     *
     * @generated from field: uint64 client_id = 12;
     */
    clientId: bigint;
    /**
     * The description of the project
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProjectsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceUpdateRequest;
    static equals(a: ProjectsServiceUpdateRequest | PlainMessage<ProjectsServiceUpdateRequest> | undefined, b: ProjectsServiceUpdateRequest | PlainMessage<ProjectsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Project
 */
export declare class Project extends Message<Project> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this project
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
     * The status of this project
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this project
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this project was marked as completed
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
     * The reference ID of the project
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     * The optional ID of the associated client
     *
     * @generated from field: uint64 client_id = 12;
     */
    clientId: bigint;
    /**
     * The description of the project
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Project>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Project";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project;
    static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ProjectsList
 */
export declare class ProjectsList extends Message<ProjectsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Project list = 1;
     */
    list: Project[];
    constructor(data?: PartialMessage<ProjectsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsList;
    static equals(a: ProjectsList | PlainMessage<ProjectsList> | undefined, b: ProjectsList | PlainMessage<ProjectsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a project's statistics payload
 *
 * @generated from message Scailo.ProjectStatistics
 */
export declare class ProjectStatistics extends Message<ProjectStatistics> {
    /**
     * Stores the total amount of time spent on the project
     *
     * @generated from field: uint64 total_duration = 1;
     */
    totalDuration: bigint;
    /**
     * Stores the cumulative completion percentage of the project
     *
     * @generated from field: uint64 total_completion_percentage = 2;
     */
    totalCompletionPercentage: bigint;
    /**
     * Stores the total number of points
     *
     * @generated from field: uint64 total_points = 3;
     */
    totalPoints: bigint;
    constructor(data?: PartialMessage<ProjectStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectStatistics;
    static equals(a: ProjectStatistics | PlainMessage<ProjectStatistics> | undefined, b: ProjectStatistics | PlainMessage<ProjectStatistics> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ProjectsServicePaginationReq
 */
export declare class ProjectsServicePaginationReq extends Message<ProjectsServicePaginationReq> {
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
     * @generated from field: Scailo.PROJECT_SORT_KEY sort_key = 5;
     */
    sortKey: PROJECT_SORT_KEY;
    /**
     * The status of this project
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ProjectsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServicePaginationReq;
    static equals(a: ProjectsServicePaginationReq | PlainMessage<ProjectsServicePaginationReq> | undefined, b: ProjectsServicePaginationReq | PlainMessage<ProjectsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ProjectsServicePaginationResponse
 */
export declare class ProjectsServicePaginationResponse extends Message<ProjectsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Project payload = 4;
     */
    payload: Project[];
    constructor(data?: PartialMessage<ProjectsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServicePaginationResponse;
    static equals(a: ProjectsServicePaginationResponse | PlainMessage<ProjectsServicePaginationResponse> | undefined, b: ProjectsServicePaginationResponse | PlainMessage<ProjectsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ProjectsServiceFilterReq
 */
export declare class ProjectsServiceFilterReq extends Message<ProjectsServiceFilterReq> {
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
     * @generated from field: Scailo.PROJECT_SORT_KEY sort_key = 5;
     */
    sortKey: PROJECT_SORT_KEY;
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
     * The status of this project
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
     * The reference_id of the project
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The ID of the associated client. Returns all record if it is set to -1. 0 is a valid filter too.
     *
     * @generated from field: int64 client_id = 22;
     */
    clientId: bigint;
    /**
     * The ID of the associated sales order (ignored if 0)
     *
     * @generated from field: uint64 sales_order_id = 40;
     */
    salesOrderId: bigint;
    /**
     * The ID of the associated purchase order (ignored if 0)
     *
     * @generated from field: uint64 purchase_order_id = 41;
     */
    purchaseOrderId: bigint;
    /**
     * The ID of the associated outward job (ignored if 0)
     *
     * @generated from field: uint64 outward_job_id = 42;
     */
    outwardJobId: bigint;
    /**
     * The ID of the associated inward job (ignored if 0)
     *
     * @generated from field: uint64 inward_job_id = 43;
     */
    inwardJobId: bigint;
    /**
     * The ID of the associated production plan (ignored if 0)
     *
     * @generated from field: uint64 production_plan_id = 44;
     */
    productionPlanId: bigint;
    /**
     * The ID of the associated meeting (ignored if 0)
     *
     * @generated from field: uint64 meeting_id = 45;
     */
    meetingId: bigint;
    constructor(data?: PartialMessage<ProjectsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceFilterReq;
    static equals(a: ProjectsServiceFilterReq | PlainMessage<ProjectsServiceFilterReq> | undefined, b: ProjectsServiceFilterReq | PlainMessage<ProjectsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ProjectsServiceCountReq
 */
export declare class ProjectsServiceCountReq extends Message<ProjectsServiceCountReq> {
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
     * The status of this project
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
     * The reference_id of the project
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The ID of the associated client. Returns all record if it is set to -1. 0 is a valid filter too.
     *
     * @generated from field: int64 client_id = 22;
     */
    clientId: bigint;
    /**
     * The ID of the associated sales order (ignored if 0)
     *
     * @generated from field: uint64 sales_order_id = 40;
     */
    salesOrderId: bigint;
    /**
     * The ID of the associated purchase order (ignored if 0)
     *
     * @generated from field: uint64 purchase_order_id = 41;
     */
    purchaseOrderId: bigint;
    /**
     * The ID of the associated outward job (ignored if 0)
     *
     * @generated from field: uint64 outward_job_id = 42;
     */
    outwardJobId: bigint;
    /**
     * The ID of the associated inward job (ignored if 0)
     *
     * @generated from field: uint64 inward_job_id = 43;
     */
    inwardJobId: bigint;
    /**
     * The ID of the associated production plan (ignored if 0)
     *
     * @generated from field: uint64 production_plan_id = 44;
     */
    productionPlanId: bigint;
    /**
     * The ID of the associated meeting (ignored if 0)
     *
     * @generated from field: uint64 meeting_id = 45;
     */
    meetingId: bigint;
    constructor(data?: PartialMessage<ProjectsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceCountReq;
    static equals(a: ProjectsServiceCountReq | PlainMessage<ProjectsServiceCountReq> | undefined, b: ProjectsServiceCountReq | PlainMessage<ProjectsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ProjectsServiceSearchAllReq
 */
export declare class ProjectsServiceSearchAllReq extends Message<ProjectsServiceSearchAllReq> {
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
     * @generated from field: Scailo.PROJECT_SORT_KEY sort_key = 5;
     */
    sortKey: PROJECT_SORT_KEY;
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
     * The ID of the associated client. Returns all record if it is set to -1. 0 is a valid filter too.
     *
     * @generated from field: int64 client_id = 21;
     */
    clientId: bigint;
    constructor(data?: PartialMessage<ProjectsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceSearchAllReq;
    static equals(a: ProjectsServiceSearchAllReq | PlainMessage<ProjectsServiceSearchAllReq> | undefined, b: ProjectsServiceSearchAllReq | PlainMessage<ProjectsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a project contact
 *
 * @generated from message Scailo.ProjectsServiceContactCreateRequest
 */
export declare class ProjectsServiceContactCreateRequest extends Message<ProjectsServiceContactCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the project ID
     *
     * @generated from field: uint64 project_id = 10;
     */
    projectId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    constructor(data?: PartialMessage<ProjectsServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceContactCreateRequest;
    static equals(a: ProjectsServiceContactCreateRequest | PlainMessage<ProjectsServiceContactCreateRequest> | undefined, b: ProjectsServiceContactCreateRequest | PlainMessage<ProjectsServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a project contact
 *
 * @generated from message Scailo.ProjectContact
 */
export declare class ProjectContact extends Message<ProjectContact> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this project
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
     * Stores the project ID
     *
     * @generated from field: uint64 project_id = 10;
     */
    projectId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    /**
     * Stores the UUID of the employee
     *
     * @generated from field: string employee_uuid = 211;
     */
    employeeUuid: string;
    constructor(data?: PartialMessage<ProjectContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectContact;
    static equals(a: ProjectContact | PlainMessage<ProjectContact> | undefined, b: ProjectContact | PlainMessage<ProjectContact> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of project contacts
 *
 * @generated from message Scailo.ProjectContactsList
 */
export declare class ProjectContactsList extends Message<ProjectContactsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ProjectContact list = 1;
     */
    list: ProjectContact[];
    constructor(data?: PartialMessage<ProjectContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectContactsList;
    static equals(a: ProjectContactsList | PlainMessage<ProjectContactsList> | undefined, b: ProjectContactsList | PlainMessage<ProjectContactsList> | undefined): boolean;
}
//# sourceMappingURL=projects.scailo_pb.d.ts.map
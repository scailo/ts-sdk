import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ON_DUTY_SORT_KEY
 */
export declare enum ON_DUTY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ON_DUTY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_CREATED_AT = 1;
     */
    ON_DUTY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_MODIFIED_AT = 2;
     */
    ON_DUTY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_APPROVED_ON = 3;
     */
    ON_DUTY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_APPROVED_BY = 4;
     */
    ON_DUTY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ON_DUTY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_COMPLETED_ON = 6;
     */
    ON_DUTY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_REFERENCE_ID = 10;
     */
    ON_DUTY_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    ON_DUTY_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_USER_ID = 12;
     */
    ON_DUTY_SORT_KEY_USER_ID = 12,
    /**
     * Fetch ordered results by the "from timestamp"
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_ENTRY_TIMESTAMP = 13;
     */
    ON_DUTY_SORT_KEY_ENTRY_TIMESTAMP = 13,
    /**
     * Fetch ordered results by the "to timestamp"
     *
     * @generated from enum value: ON_DUTY_SORT_KEY_EXIT_TIMESTAMP = 14;
     */
    ON_DUTY_SORT_KEY_EXIT_TIMESTAMP = 14
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.OnDutiesServiceCreateRequest
 */
export declare class OnDutiesServiceCreateRequest extends Message<OnDutiesServiceCreateRequest> {
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
     * The reference ID of the onduty
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the user who has requested for onduty
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The UNIX timestamp from when the onduty begins
     *
     * @generated from field: uint64 entry_timestamp = 12;
     */
    entryTimestamp: bigint;
    /**
     * The UNIX timestamp from when the onduty ends
     *
     * @generated from field: uint64 exit_timestamp = 13;
     */
    exitTimestamp: bigint;
    /**
     * The description of the onduty
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<OnDutiesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServiceCreateRequest;
    static equals(a: OnDutiesServiceCreateRequest | PlainMessage<OnDutiesServiceCreateRequest> | undefined, b: OnDutiesServiceCreateRequest | PlainMessage<OnDutiesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.OnDutiesServiceUpdateRequest
 */
export declare class OnDutiesServiceUpdateRequest extends Message<OnDutiesServiceUpdateRequest> {
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
     * The reference ID of the onduty
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The UNIX timestamp from when the onduty begins
     *
     * @generated from field: uint64 entry_timestamp = 12;
     */
    entryTimestamp: bigint;
    /**
     * The UNIX timestamp from when the onduty ends
     *
     * @generated from field: uint64 exit_timestamp = 13;
     */
    exitTimestamp: bigint;
    /**
     * The description of the onduty
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<OnDutiesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServiceUpdateRequest;
    static equals(a: OnDutiesServiceUpdateRequest | PlainMessage<OnDutiesServiceUpdateRequest> | undefined, b: OnDutiesServiceUpdateRequest | PlainMessage<OnDutiesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the message payload that is necessary to create an entry record. This will most likely be called only from mobile devices.
 *
 * @generated from message Scailo.OnDutiesServiceImageEntryRequest
 */
export declare class OnDutiesServiceImageEntryRequest extends Message<OnDutiesServiceImageEntryRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * // The reference ID of the onduty
     * string reference_id = 10 [(genesis_validate.rules).string = {
     *     pattern: "[0-9A-Za-z ]+$", // Allow spaces
     * }];
     * The ID of the user who has requested for onduty
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The raw image content of the entry image
     *
     * @generated from field: bytes entry_image = 13;
     */
    entryImage: Uint8Array;
    /**
     * The MIME type of the entry image
     *
     * @generated from field: string entry_image_mime_type = 14;
     */
    entryImageMimeType: string;
    /**
     * The latitude of where the onduty entry was recorded
     *
     * @generated from field: double entry_latitude = 15;
     */
    entryLatitude: number;
    /**
     * The longiture of where the onduty entry was recorded
     *
     * @generated from field: double entry_longitude = 16;
     */
    entryLongitude: number;
    constructor(data?: PartialMessage<OnDutiesServiceImageEntryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServiceImageEntryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServiceImageEntryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServiceImageEntryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServiceImageEntryRequest;
    static equals(a: OnDutiesServiceImageEntryRequest | PlainMessage<OnDutiesServiceImageEntryRequest> | undefined, b: OnDutiesServiceImageEntryRequest | PlainMessage<OnDutiesServiceImageEntryRequest> | undefined): boolean;
}
/**
 *
 * Describes the message payload that is necessary to create an exit record. This will most likely be called only from mobile devices.
 *
 * @generated from message Scailo.OnDutiesServiceImageExitRequest
 */
export declare class OnDutiesServiceImageExitRequest extends Message<OnDutiesServiceImageExitRequest> {
    /**
     * The ID of the record that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * The raw image content of the exit image
     *
     * @generated from field: bytes exit_image = 13;
     */
    exitImage: Uint8Array;
    /**
     * The MIME type of the exit image
     *
     * @generated from field: string exit_image_mime_type = 14;
     */
    exitImageMimeType: string;
    /**
     * The latitude of where the onduty exit was recorded
     *
     * @generated from field: double exit_latitude = 15;
     */
    exitLatitude: number;
    /**
     * The longiture of where the onduty exit was recorded
     *
     * @generated from field: double exit_longitude = 16;
     */
    exitLongitude: number;
    constructor(data?: PartialMessage<OnDutiesServiceImageExitRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServiceImageExitRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServiceImageExitRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServiceImageExitRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServiceImageExitRequest;
    static equals(a: OnDutiesServiceImageExitRequest | PlainMessage<OnDutiesServiceImageExitRequest> | undefined, b: OnDutiesServiceImageExitRequest | PlainMessage<OnDutiesServiceImageExitRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.OnDuty
 */
export declare class OnDuty extends Message<OnDuty> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this onduty
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
     * The status of this onduty
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this onduty
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this onduty was marked as completed
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
     * The reference_id of the onduty
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
     * The ID of the user who has requested for onduty
     *
     * @generated from field: uint64 user_id = 12;
     */
    userId: bigint;
    /**
     * The UNIX timestamp from when the onduty begins
     *
     * @generated from field: uint64 entry_timestamp = 13;
     */
    entryTimestamp: bigint;
    /**
     * The UNIX timestamp from when the onduty ends
     *
     * @generated from field: uint64 exit_timestamp = 14;
     */
    exitTimestamp: bigint;
    /**
     * The description of the onduty
     *
     * @generated from field: string description = 15;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<OnDuty>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDuty";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDuty;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDuty;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDuty;
    static equals(a: OnDuty | PlainMessage<OnDuty> | undefined, b: OnDuty | PlainMessage<OnDuty> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.OnDutiesList
 */
export declare class OnDutiesList extends Message<OnDutiesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OnDuty list = 1;
     */
    list: OnDuty[];
    constructor(data?: PartialMessage<OnDutiesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesList;
    static equals(a: OnDutiesList | PlainMessage<OnDutiesList> | undefined, b: OnDutiesList | PlainMessage<OnDutiesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.OnDutiesServicePaginationReq
 */
export declare class OnDutiesServicePaginationReq extends Message<OnDutiesServicePaginationReq> {
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
     * @generated from field: Scailo.ON_DUTY_SORT_KEY sort_key = 5;
     */
    sortKey: ON_DUTY_SORT_KEY;
    /**
     * The status of this onduty
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<OnDutiesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServicePaginationReq;
    static equals(a: OnDutiesServicePaginationReq | PlainMessage<OnDutiesServicePaginationReq> | undefined, b: OnDutiesServicePaginationReq | PlainMessage<OnDutiesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.OnDutiesServicePaginationResponse
 */
export declare class OnDutiesServicePaginationResponse extends Message<OnDutiesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.OnDuty payload = 4;
     */
    payload: OnDuty[];
    constructor(data?: PartialMessage<OnDutiesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServicePaginationResponse;
    static equals(a: OnDutiesServicePaginationResponse | PlainMessage<OnDutiesServicePaginationResponse> | undefined, b: OnDutiesServicePaginationResponse | PlainMessage<OnDutiesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.OnDutiesServiceFilterReq
 */
export declare class OnDutiesServiceFilterReq extends Message<OnDutiesServiceFilterReq> {
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
     * @generated from field: Scailo.ON_DUTY_SORT_KEY sort_key = 5;
     */
    sortKey: ON_DUTY_SORT_KEY;
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
     * The status of this onduty
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
     * The reference_id of the onduty
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
     * The ID of the user who has requested for onduty
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 entry_timestamp_start = 24;
     */
    entryTimestampStart: bigint;
    /**
     * The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 entry_timestamp_end = 25;
     */
    entryTimestampEnd: bigint;
    /**
     * The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 exit_timestamp_start = 26;
     */
    exitTimestampStart: bigint;
    /**
     * The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 exit_timestamp_end = 27;
     */
    exitTimestampEnd: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<OnDutiesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServiceFilterReq;
    static equals(a: OnDutiesServiceFilterReq | PlainMessage<OnDutiesServiceFilterReq> | undefined, b: OnDutiesServiceFilterReq | PlainMessage<OnDutiesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.OnDutiesServiceCountReq
 */
export declare class OnDutiesServiceCountReq extends Message<OnDutiesServiceCountReq> {
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
     * The status of this onduty
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
     * The reference_id of the onduty
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
     * The ID of the user who has requested for onduty
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 entry_timestamp_start = 24;
     */
    entryTimestampStart: bigint;
    /**
     * The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 entry_timestamp_end = 25;
     */
    entryTimestampEnd: bigint;
    /**
     * The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 exit_timestamp_start = 26;
     */
    exitTimestampStart: bigint;
    /**
     * The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 exit_timestamp_end = 27;
     */
    exitTimestampEnd: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<OnDutiesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServiceCountReq;
    static equals(a: OnDutiesServiceCountReq | PlainMessage<OnDutiesServiceCountReq> | undefined, b: OnDutiesServiceCountReq | PlainMessage<OnDutiesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.OnDutiesServiceSearchAllReq
 */
export declare class OnDutiesServiceSearchAllReq extends Message<OnDutiesServiceSearchAllReq> {
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
     * @generated from field: Scailo.ON_DUTY_SORT_KEY sort_key = 5;
     */
    sortKey: ON_DUTY_SORT_KEY;
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
     * The ID of the user who has requested for onduty
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<OnDutiesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OnDutiesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnDutiesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnDutiesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnDutiesServiceSearchAllReq;
    static equals(a: OnDutiesServiceSearchAllReq | PlainMessage<OnDutiesServiceSearchAllReq> | undefined, b: OnDutiesServiceSearchAllReq | PlainMessage<OnDutiesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=on_duties.scailo_pb.d.ts.map
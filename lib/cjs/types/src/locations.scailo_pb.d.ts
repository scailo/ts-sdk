import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.LOCATION_SORT_KEY
 */
export declare enum LOCATION_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LOCATION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LOCATION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LOCATION_SORT_KEY_CREATED_AT = 1;
     */
    LOCATION_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LOCATION_SORT_KEY_MODIFIED_AT = 2;
     */
    LOCATION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: LOCATION_SORT_KEY_APPROVED_ON = 3;
     */
    LOCATION_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: LOCATION_SORT_KEY_APPROVED_BY = 4;
     */
    LOCATION_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: LOCATION_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LOCATION_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: LOCATION_SORT_KEY_NAME = 10;
     */
    LOCATION_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: LOCATION_SORT_KEY_CODE = 11;
     */
    LOCATION_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the email address
     *
     * @generated from enum value: LOCATION_SORT_KEY_EMAIL = 12;
     */
    LOCATION_SORT_KEY_EMAIL = 12,
    /**
     * Fetch ordered results by the phone number
     *
     * @generated from enum value: LOCATION_SORT_KEY_PHONE = 13;
     */
    LOCATION_SORT_KEY_PHONE = 13
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.LocationsServiceCreateRequest
 */
export declare class LocationsServiceCreateRequest extends Message<LocationsServiceCreateRequest> {
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
     * The name of the location
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the location is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the location
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the location
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The ID of the associated non-leaf parent location (0, if the first location that is being created is a leaf location)
     *
     * @generated from field: uint64 parent_location_id = 14;
     */
    parentLocationId: bigint;
    /**
     * Stores if this is a leaf location or a non-leaf location
     *
     * @generated from field: bool is_leaf = 15;
     */
    isLeaf: boolean;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<LocationsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LocationsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceCreateRequest;
    static equals(a: LocationsServiceCreateRequest | PlainMessage<LocationsServiceCreateRequest> | undefined, b: LocationsServiceCreateRequest | PlainMessage<LocationsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.LocationsServiceUpdateRequest
 */
export declare class LocationsServiceUpdateRequest extends Message<LocationsServiceUpdateRequest> {
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
     * The name of the location
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * // The unique code by which the location is classified
     * string code = 11 [(buf.validate.field).string = {
     *   // pattern:   "^[^[0-9]A-Za-z]+( [^[0-9]A-Za-z]+)*$",
     *   min_len: 1
     * }];
     * The primary email of the location
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the location
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<LocationsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LocationsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceUpdateRequest;
    static equals(a: LocationsServiceUpdateRequest | PlainMessage<LocationsServiceUpdateRequest> | undefined, b: LocationsServiceUpdateRequest | PlainMessage<LocationsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Location
 */
export declare class Location extends Message<Location> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this location
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
     * The status of this location
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this location
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the location
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the location is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the location
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the location
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The ID of the associated non-leaf parent location (0, if the first location that is being created is a leaf location)
     *
     * @generated from field: uint64 parent_location_id = 14;
     */
    parentLocationId: bigint;
    /**
     * Stores if this is a leaf location or a non-leaf location
     *
     * @generated from field: bool is_leaf = 15;
     */
    isLeaf: boolean;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Location>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Location";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Location;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Location;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Location;
    static equals(a: Location | PlainMessage<Location> | undefined, b: Location | PlainMessage<Location> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.LocationsList
 */
export declare class LocationsList extends Message<LocationsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Location list = 1;
     */
    list: Location[];
    constructor(data?: PartialMessage<LocationsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LocationsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsList;
    static equals(a: LocationsList | PlainMessage<LocationsList> | undefined, b: LocationsList | PlainMessage<LocationsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.LocationsServicePaginationReq
 */
export declare class LocationsServicePaginationReq extends Message<LocationsServicePaginationReq> {
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
     * @generated from field: Scailo.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey: LOCATION_SORT_KEY;
    /**
     * The status of this location
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<LocationsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LocationsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServicePaginationReq;
    static equals(a: LocationsServicePaginationReq | PlainMessage<LocationsServicePaginationReq> | undefined, b: LocationsServicePaginationReq | PlainMessage<LocationsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.LocationsServicePaginationResponse
 */
export declare class LocationsServicePaginationResponse extends Message<LocationsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Location payload = 4;
     */
    payload: Location[];
    constructor(data?: PartialMessage<LocationsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LocationsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServicePaginationResponse;
    static equals(a: LocationsServicePaginationResponse | PlainMessage<LocationsServicePaginationResponse> | undefined, b: LocationsServicePaginationResponse | PlainMessage<LocationsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.LocationsServiceFilterReq
 */
export declare class LocationsServiceFilterReq extends Message<LocationsServiceFilterReq> {
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
     * @generated from field: Scailo.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey: LOCATION_SORT_KEY;
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
     * The status of this location
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
     * The name of the location
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the location is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The primary email of the location
     *
     * @generated from field: string email = 22;
     */
    email: string;
    /**
     * The primary contact number of the location
     *
     * @generated from field: string phone = 23;
     */
    phone: string;
    /**
     * The ID of the associated non-leaf parent location (0, if the first location that is being created is a leaf location)
     *
     * @generated from field: uint64 parent_location_id = 24;
     */
    parentLocationId: bigint;
    /**
     * Stores if this is a leaf location or a non-leaf location
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 25;
     */
    isLeaf: BOOL_FILTER;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<LocationsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LocationsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceFilterReq;
    static equals(a: LocationsServiceFilterReq | PlainMessage<LocationsServiceFilterReq> | undefined, b: LocationsServiceFilterReq | PlainMessage<LocationsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.LocationsServiceCountReq
 */
export declare class LocationsServiceCountReq extends Message<LocationsServiceCountReq> {
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
     * The status of this location
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
     * The name of the location
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the location is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The primary email of the location
     *
     * @generated from field: string email = 22;
     */
    email: string;
    /**
     * The primary contact number of the location
     *
     * @generated from field: string phone = 23;
     */
    phone: string;
    /**
     * The ID of the associated non-leaf parent location (0, if the first location that is being created is a leaf location)
     *
     * @generated from field: uint64 parent_location_id = 24;
     */
    parentLocationId: bigint;
    /**
     * Stores if this is a leaf location or a non-leaf location
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 25;
     */
    isLeaf: BOOL_FILTER;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<LocationsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LocationsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceCountReq;
    static equals(a: LocationsServiceCountReq | PlainMessage<LocationsServiceCountReq> | undefined, b: LocationsServiceCountReq | PlainMessage<LocationsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.LocationsServiceSearchAllReq
 */
export declare class LocationsServiceSearchAllReq extends Message<LocationsServiceSearchAllReq> {
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
     * @generated from field: Scailo.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey: LOCATION_SORT_KEY;
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
     * The ID of the associated non-leaf parent location (0, if the first location that is being created is a leaf location)
     *
     * @generated from field: uint64 parent_location_id = 24;
     */
    parentLocationId: bigint;
    /**
     * Stores if this is a leaf location or a non-leaf location
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 25;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<LocationsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LocationsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceSearchAllReq;
    static equals(a: LocationsServiceSearchAllReq | PlainMessage<LocationsServiceSearchAllReq> | undefined, b: LocationsServiceSearchAllReq | PlainMessage<LocationsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=locations.scailo_pb.d.ts.map
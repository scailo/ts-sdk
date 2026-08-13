import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting location search results.
 *
 * @generated from enum Scailo.LOCATION_SORT_KEY
 */
export declare enum LOCATION_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: LOCATION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LOCATION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: LOCATION_SORT_KEY_CREATED_AT = 1;
     */
    LOCATION_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: LOCATION_SORT_KEY_MODIFIED_AT = 2;
     */
    LOCATION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: LOCATION_SORT_KEY_APPROVED_ON = 3;
     */
    LOCATION_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: LOCATION_SORT_KEY_APPROVED_BY = 4;
     */
    LOCATION_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: LOCATION_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LOCATION_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: LOCATION_SORT_KEY_NAME = 10;
     */
    LOCATION_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided code.
     *
     * @generated from enum value: LOCATION_SORT_KEY_CODE = 11;
     */
    LOCATION_SORT_KEY_CODE = 11,
    /**
     * @description Sort alphabetically by the user-provided email address.
     *
     * @generated from enum value: LOCATION_SORT_KEY_EMAIL = 12;
     */
    LOCATION_SORT_KEY_EMAIL = 12,
    /**
     * @description Sort alphabetically by the user-provided phone number.
     *
     * @generated from enum value: LOCATION_SORT_KEY_PHONE = 13;
     */
    LOCATION_SORT_KEY_PHONE = 13
}
/**
 *
 * Request message for creating and registering a new geographic or logical Location.
 * This record tracks physical operational sites, facility hierarchies (leaf vs. non-leaf parent nodes),
 * primary contact endpoints, and tenant isolation parameters.
 *
 * **Note:** This is the primary entry point for Operations, Facilities Management, and Admins to
 * construct corporate site maps, log logistics hubs, or declare regional branch offices.
 *
 * @generated from message Scailo.LocationsServiceCreateRequest
 */
export declare class LocationsServiceCreateRequest extends Message<LocationsServiceCreateRequest> {
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
     * @generated from field: optional string entity_uuid = 1;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 2;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The official or friendly descriptive name of the location.
     *
     * @example "Headquarters - Building B"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @mandatory
     *
     * @description The unique code or internal alphanumeric token used to classify the location for shipping, logistics, or tagging.
     *
     * @example "LOC-HQ-BLDGB"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @mandatory
     *
     * @description The primary communication or support email address linked specifically to this location.
     *
     * @example "facilities.loc1@acme.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format Must be a valid and structurally sound email address format.
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     *
     * @mandatory
     *
     * @description The primary contact or front desk telephone number for the location, typically including country and area codes.
     *
     * @example "+1-512-555-0144"
     *
     * @regex .+
     *
     * @format Must be a non-empty string representing a valid phone number format.
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent non-leaf location. Defaults to 0 if this is the root or top-level node in the geographic hierarchy.
     *
     * @example 1024
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 parent_location_id = 14;
     */
    parentLocationId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description Flag determining whether this location is a terminal 'leaf' node (e.g., a specific office room) or a 'non-leaf' grouping node (e.g., an entire region or campus).
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: bool is_leaf = 15;
     */
    isLeaf: boolean;
    /**
     *
     * @optional
     *
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
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
 * Request message for updating an existing Location record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, email, phone and other custom form fields
 * of an established Location.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.LocationsServiceUpdateRequest
 */
export declare class LocationsServiceUpdateRequest extends Message<LocationsServiceUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target record that needs to be updated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     *
     * @optional
     *
     * @description Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.
     *
     * @example true
     *
     * @generated from field: optional bool notify_users = 3;
     */
    notifyUsers?: boolean;
    /**
     *
     * @optional
     *
     * @description The official or friendly descriptive name of the location.
     *
     * @example "Headquarters - Building B"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 10;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The primary communication or support email address linked specifically to this location.
     *
     * @example "facilities.loc1@acme.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format Must be a valid and structurally sound email address format.
     *
     * @generated from field: optional string email = 12;
     */
    email?: string;
    /**
     *
     * @optional
     *
     * @description The primary contact or front desk telephone number for the location, typically including country and area codes.
     *
     * @example "+1-512-555-0144"
     *
     * @regex .*
     *
     * @format Must be a non-empty string representing a valid phone number format.
     *
     * @generated from field: optional string phone = 13;
     */
    phone?: string;
    /**
     *
     * @optional
     *
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
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
 * Represents a full Location within the system.
 *
 * @generated from message Scailo.Location
 */
export declare class Location extends Message<Location> {
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
     *
     * @description Standard employee and record metadata including timestamps.
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     *
     * @description Detailed approval workflow state (Approver ID, Role, and Timestamps).
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     *
     * @description The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @description Comprehensive audit trail of every operation performed on this record.
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     *
     * @description The official or friendly descriptive name of the location.
     *
     * @example "Headquarters - Building B"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique code or internal alphanumeric token used to classify the location for shipping, logistics, or tagging.
     *
     * @example "LOC-HQ-BLDGB"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description The primary communication or support email address linked specifically to this location.
     *
     * @example "facilities.loc1@acme.com"
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     *
     * @description The primary contact or front desk telephone number for the location, typically including country and area codes.
     *
     * @example "+1-512-555-0144"
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     *
     * @description The unique internal identifier of the parent non-leaf location. Defaults to 0 if this is the root or top-level node in the geographic hierarchy.
     *
     * @example 1024
     *
     * @generated from field: uint64 parent_location_id = 14;
     */
    parentLocationId: bigint;
    /**
     *
     * @description Flag determining whether this location is a terminal 'leaf' node (e.g., a specific office room) or a 'non-leaf' grouping node (e.g., an entire region or campus).
     *
     * @example true
     *
     * @generated from field: bool is_leaf = 15;
     */
    isLeaf: boolean;
    /**
     *
     * @description Collection of organization-specific dynamic data.
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
 * Container message for a collection of Location records.
 *
 * @generated from message Scailo.LocationsList
 */
export declare class LocationsList extends Message<LocationsList> {
    /**
     * @description An array of Location records.
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
 * Pagination request for retrieving slices of Location records.
 *
 * @generated from message Scailo.LocationsServicePaginationReq
 */
export declare class LocationsServicePaginationReq extends Message<LocationsServicePaginationReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: optional Scailo.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey?: LOCATION_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter results by a specific lifecycle status.
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.LocationsServicePaginationResponse
 */
export declare class LocationsServicePaginationResponse extends Message<LocationsServicePaginationResponse> {
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
 * Advanced filter request for searching and paginating locations using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.LocationsServiceFilterReq
 */
export declare class LocationsServiceFilterReq extends Message<LocationsServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey?: LOCATION_SORT_KEY;
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
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
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
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The official or friendly descriptive name of the location.
     *
     * @example "Headquarters - Building B"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 20;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique code or internal alphanumeric token used to classify the location for shipping, logistics, or tagging.
     *
     * @example "LOC-HQ-BLDGB"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The primary communication or support email address linked specifically to this location.
     *
     * @example "facilities.loc1@acme.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format Must be a valid and structurally sound email address format.
     *
     * @generated from field: optional string email = 22;
     */
    email?: string;
    /**
     *
     * @optional
     *
     * @description The primary contact or front desk telephone number for the location, typically including country and area codes.
     *
     * @example "+1-512-555-0144"
     *
     * @regex .*
     *
     * @format Must be a non-empty string representing a valid phone number format.
     *
     * @generated from field: optional string phone = 23;
     */
    phone?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent non-leaf location. Defaults to 0 if this is the root or top-level node in the geographic hierarchy.
     *
     * @example 1024
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 parent_location_id = 24;
     */
    parentLocationId?: bigint;
    /**
     *
     * @optional
     *
     * @description Flag determining whether this location is a terminal 'leaf' node (e.g., a specific office room) or a 'non-leaf' grouping node (e.g., an entire region or campus).
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 25;
     */
    isLeaf?: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description Filter based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    /**
     *
     * @optional
     *
     * @description If `true`, the response will include the associated custom form field values for each record.
     * Set to `false` to improve performance when form data is not needed.
     *
     * @example true
     *
     * @generated from field: optional bool include_form_data = 501;
     */
    includeFormData?: boolean;
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
 * Target filter request for counting location records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.LocationsServiceCountReq
 */
export declare class LocationsServiceCountReq extends Message<LocationsServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
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
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The official or friendly descriptive name of the location.
     *
     * @example "Headquarters - Building B"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 20;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique code or internal alphanumeric token used to classify the location for shipping, logistics, or tagging.
     *
     * @example "LOC-HQ-BLDGB"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The primary communication or support email address linked specifically to this location.
     *
     * @example "facilities.loc1@acme.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format Must be a valid and structurally sound email address format.
     *
     * @generated from field: optional string email = 22;
     */
    email?: string;
    /**
     *
     * @optional
     *
     * @description The primary contact or front desk telephone number for the location, typically including country and area codes.
     *
     * @example "+1-512-555-0144"
     *
     * @regex .*
     *
     * @format Must be a non-empty string representing a valid phone number format.
     *
     * @generated from field: optional string phone = 23;
     */
    phone?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent non-leaf location. Defaults to 0 if this is the root or top-level node in the geographic hierarchy.
     *
     * @example 1024
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 parent_location_id = 24;
     */
    parentLocationId?: bigint;
    /**
     *
     * @optional
     *
     * @description Flag determining whether this location is a terminal 'leaf' node (e.g., a specific office room) or a 'non-leaf' grouping node (e.g., an entire region or campus).
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 25;
     */
    isLeaf?: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
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
 * Broad-spectrum search and lookup request for locating and paginating locations via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.LocationsServiceSearchAllReq
 */
export declare class LocationsServiceSearchAllReq extends Message<LocationsServiceSearchAllReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey?: LOCATION_SORT_KEY;
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
     * @generated from field: optional string entity_uuid = 6;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
     *
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent non-leaf location. Defaults to 0 if this is the root or top-level node in the geographic hierarchy.
     *
     * @example 1024
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 parent_location_id = 24;
     */
    parentLocationId?: bigint;
    /**
     *
     * @optional
     *
     * @description Flag determining whether this location is a terminal 'leaf' node (e.g., a specific office room) or a 'non-leaf' grouping node (e.g., an entire region or campus).
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 25;
     */
    isLeaf?: BOOL_FILTER;
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
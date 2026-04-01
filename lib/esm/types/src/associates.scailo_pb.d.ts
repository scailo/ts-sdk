import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the available options that a associate can be associated with
 *
 * @generated from enum Scailo.ASSOCIATE_ORG_REF_FROM
 */
export declare enum ASSOCIATE_ORG_REF_FROM {
    /**
     * Useful only in filter and search requests
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * When the associate has no association
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_EMPTY = 1;
     */
    ASSOCIATE_ORG_REF_FROM_EMPTY = 1,
    /**
     * When the associate has been associated to a client
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_CLIENT = 2;
     */
    ASSOCIATE_ORG_REF_FROM_CLIENT = 2,
    /**
     * When the associate has been associated to a vendor
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_VENDOR = 3;
     */
    ASSOCIATE_ORG_REF_FROM_VENDOR = 3
}
/**
 *
 * Describes the available sort keys for retrieving associates
 *
 * @generated from enum Scailo.ASSOCIATE_SORT_KEY
 */
export declare enum ASSOCIATE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ASSOCIATE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_CREATED_AT = 1;
     */
    ASSOCIATE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_MODIFIED_AT = 2;
     */
    ASSOCIATE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by first name
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_FIRST_NAME = 10;
     */
    ASSOCIATE_SORT_KEY_FIRST_NAME = 10,
    /**
     * Fetch ordered results by middle name
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_MIDDLE_NAME = 11;
     */
    ASSOCIATE_SORT_KEY_MIDDLE_NAME = 11,
    /**
     * Fetch ordered results by last name
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_LAST_NAME = 12;
     */
    ASSOCIATE_SORT_KEY_LAST_NAME = 12,
    /**
     * Fetch ordered results by organization name
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_ORG_NAME = 13;
     */
    ASSOCIATE_SORT_KEY_ORG_NAME = 13,
    /**
     * Fetch ordered results by job title
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_JOB_TITLE = 14;
     */
    ASSOCIATE_SORT_KEY_JOB_TITLE = 14
}
/**
 *
 * Describes the data structure of each associate on the platform
 *
 * @generated from message Scailo.Associate
 */
export declare class Associate extends Message<Associate> {
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
     *
     * @description Link to the document storage folder.
     *
     * @example 15234
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The first name of the associate
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The middle name of the associate
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     * The last name of the associate
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: uint64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     * The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     * The job title of the associate
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     * The department that the associates works in
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     * The work phone number of the associate
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     * The work email address of the associate
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     * The personal phone number of the associate
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     * The personal email address of the associate
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     * The associate's birthday
     *
     * @generated from field: string birthday = 22;
     */
    birthday: string;
    /**
     * The associate's anniversary
     *
     * @generated from field: string anniversary = 23;
     */
    anniversary: string;
    /**
     * A short description of the associate
     *
     * @generated from field: string description = 24;
     */
    description: string;
    constructor(data?: PartialMessage<Associate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Associate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Associate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Associate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Associate;
    static equals(a: Associate | PlainMessage<Associate> | undefined, b: Associate | PlainMessage<Associate> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of associates
 *
 * @generated from message Scailo.AssociatesList
 */
export declare class AssociatesList extends Message<AssociatesList> {
    /**
     * List of associates
     *
     * @generated from field: repeated Scailo.Associate list = 1;
     */
    list: Associate[];
    constructor(data?: PartialMessage<AssociatesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesList;
    static equals(a: AssociatesList | PlainMessage<AssociatesList> | undefined, b: AssociatesList | PlainMessage<AssociatesList> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message Scailo.AssociatePaginationResp
 */
export declare class AssociatePaginationResp extends Message<AssociatePaginationResp> {
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
     * @generated from field: repeated Scailo.Associate payload = 4;
     */
    payload: Associate[];
    constructor(data?: PartialMessage<AssociatePaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatePaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatePaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatePaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatePaginationResp;
    static equals(a: AssociatePaginationResp | PlainMessage<AssociatePaginationResp> | undefined, b: AssociatePaginationResp | PlainMessage<AssociatePaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation of a associate
 *
 * @generated from message Scailo.AssociatesServiceCreateRequest
 */
export declare class AssociatesServiceCreateRequest extends Message<AssociatesServiceCreateRequest> {
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
     *
     * @optional
     *
     * @description The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.
     *
     * @example 15234
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The first name of the associate
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The middle name of the associate
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     * The last name of the associate
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: uint64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     * The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     * The job title of the associate
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     * The department that the associates works in
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     * The work phone number of the associate
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     * The work email address of the associate
     *
     * [(buf.validate.field).string.email = true];
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     * The personal phone number of the associate
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     * The personal email address of the associate
     *
     * [(buf.validate.field).string.email = true];
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     * The associate's birthday
     *
     * @generated from field: string birthday = 22;
     */
    birthday: string;
    /**
     * The associate's anniversary
     *
     * @generated from field: string anniversary = 23;
     */
    anniversary: string;
    /**
     * A short description of the associate
     *
     * @generated from field: string description = 24;
     */
    description: string;
    constructor(data?: PartialMessage<AssociatesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceCreateRequest;
    static equals(a: AssociatesServiceCreateRequest | PlainMessage<AssociatesServiceCreateRequest> | undefined, b: AssociatesServiceCreateRequest | PlainMessage<AssociatesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure to import a list of associates
 *
 * @generated from message Scailo.AssociatesServiceImportRequest
 */
export declare class AssociatesServiceImportRequest extends Message<AssociatesServiceImportRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The list of associates that need to be imported
     *
     * @generated from field: repeated Scailo.AssociatesServiceCreateRequest list = 10;
     */
    list: AssociatesServiceCreateRequest[];
    constructor(data?: PartialMessage<AssociatesServiceImportRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceImportRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceImportRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceImportRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceImportRequest;
    static equals(a: AssociatesServiceImportRequest | PlainMessage<AssociatesServiceImportRequest> | undefined, b: AssociatesServiceImportRequest | PlainMessage<AssociatesServiceImportRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a associate
 *
 * @generated from message Scailo.AssociatesServiceUpdateRequest
 */
export declare class AssociatesServiceUpdateRequest extends Message<AssociatesServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the associate that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     *
     * @optional
     *
     * @description Updated vault folder ID for documentation storage.
     *
     * @example 15235
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The first name of the associate
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The middle name of the associate
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     * The last name of the associate
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: uint64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     * The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     * The job title of the associate
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     * The department that the associates works in
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     * The work phone number of the associate
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     * The work email address of the associate
     *
     * [(buf.validate.field).string.email = true];
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     * The personal phone number of the associate
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     * The personal email address of the associate
     *
     * [(buf.validate.field).string.email = true];
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     * The associate's birthday
     *
     * @generated from field: string birthday = 22;
     */
    birthday: string;
    /**
     * The associate's anniversary
     *
     * @generated from field: string anniversary = 23;
     */
    anniversary: string;
    /**
     * A short description of the associate
     *
     * @generated from field: string description = 24;
     */
    description: string;
    constructor(data?: PartialMessage<AssociatesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceUpdateRequest;
    static equals(a: AssociatesServiceUpdateRequest | PlainMessage<AssociatesServiceUpdateRequest> | undefined, b: AssociatesServiceUpdateRequest | PlainMessage<AssociatesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.AssociatesServicePaginationReq
 */
export declare class AssociatesServicePaginationReq extends Message<AssociatesServicePaginationReq> {
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
     * @generated from field: Scailo.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey: ASSOCIATE_SORT_KEY;
    constructor(data?: PartialMessage<AssociatesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServicePaginationReq;
    static equals(a: AssociatesServicePaginationReq | PlainMessage<AssociatesServicePaginationReq> | undefined, b: AssociatesServicePaginationReq | PlainMessage<AssociatesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.AssociatesServiceFilterReq
 */
export declare class AssociatesServiceFilterReq extends Message<AssociatesServiceFilterReq> {
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
     * @generated from field: Scailo.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey: ASSOCIATE_SORT_KEY;
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
     * The first name of the associate
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The middle name of the associate
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     * The last name of the associate
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: uint64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     * The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     * The job title of the associate
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     * The department that the associates works in
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     * The work phone number of the associate
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     * The work email address of the associate
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     * The personal phone number of the associate
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     * The personal email address of the associate
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     * The vendor ID of the associate (if this is used, then org_ref_from and org_ref_id combination is not necessary)
     *
     * @generated from field: uint64 vendor_id = 50;
     */
    vendorId: bigint;
    /**
     * The client ID of the associate (if this is used, then org_ref_from and org_ref_id combination is not necessary)
     *
     * @generated from field: uint64 client_id = 60;
     */
    clientId: bigint;
    constructor(data?: PartialMessage<AssociatesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceFilterReq;
    static equals(a: AssociatesServiceFilterReq | PlainMessage<AssociatesServiceFilterReq> | undefined, b: AssociatesServiceFilterReq | PlainMessage<AssociatesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.AssociatesServiceCountReq
 */
export declare class AssociatesServiceCountReq extends Message<AssociatesServiceCountReq> {
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
     * The first name of the associate
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The middle name of the associate
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     * The last name of the associate
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: uint64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     * The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     * The job title of the associate
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     * The department that the associates works in
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     * The work phone number of the associate
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     * The work email address of the associate
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     * The personal phone number of the associate
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     * The personal email address of the associate
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     * The vendor ID of the associate (if this is used, then org_ref_from and org_ref_id combination is not necessary)
     *
     * @generated from field: uint64 vendor_id = 50;
     */
    vendorId: bigint;
    /**
     * The client ID of the associate (if this is used, then org_ref_from and org_ref_id combination is not necessary)
     *
     * @generated from field: uint64 client_id = 60;
     */
    clientId: bigint;
    constructor(data?: PartialMessage<AssociatesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceCountReq;
    static equals(a: AssociatesServiceCountReq | PlainMessage<AssociatesServiceCountReq> | undefined, b: AssociatesServiceCountReq | PlainMessage<AssociatesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on associates
 *
 * @generated from message Scailo.AssociatesServiceSearchAllReq
 */
export declare class AssociatesServiceSearchAllReq extends Message<AssociatesServiceSearchAllReq> {
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
     * @generated from field: Scailo.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey: ASSOCIATE_SORT_KEY;
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
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: uint64 org_ref_id = 14;
     */
    orgRefId: bigint;
    constructor(data?: PartialMessage<AssociatesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceSearchAllReq;
    static equals(a: AssociatesServiceSearchAllReq | PlainMessage<AssociatesServiceSearchAllReq> | undefined, b: AssociatesServiceSearchAllReq | PlainMessage<AssociatesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=associates.scailo_pb.d.ts.map
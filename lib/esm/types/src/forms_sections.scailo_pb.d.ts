import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, FORM_TYPE, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys for retrieving forms sections
 *
 * @generated from enum Scailo.FORM_SECTION_SORT_KEY
 */
export declare enum FORM_SECTION_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: FORM_SECTION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    FORM_SECTION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: FORM_SECTION_SORT_KEY_CREATED_AT = 1;
     */
    FORM_SECTION_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: FORM_SECTION_SORT_KEY_MODIFIED_AT = 2;
     */
    FORM_SECTION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: FORM_SECTION_SORT_KEY_NAME = 10;
     */
    FORM_SECTION_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: FORM_SECTION_SORT_KEY_CODE = 11;
     */
    FORM_SECTION_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the data structure of each form section on the platform
 *
 * @generated from message Scailo.FormSection
 */
export declare class FormSection extends Message<FormSection> {
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
     * The name of the form section
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the form section is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The type of the form section
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * A short description of the form section
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The width of the form section
     *
     * @generated from field: string width = 13;
     */
    width: string;
    constructor(data?: PartialMessage<FormSection>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormSection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormSection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormSection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormSection;
    static equals(a: FormSection | PlainMessage<FormSection> | undefined, b: FormSection | PlainMessage<FormSection> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of forms sections
 *
 * @generated from message Scailo.FormsSectionsList
 */
export declare class FormsSectionsList extends Message<FormsSectionsList> {
    /**
     * List of forms sections
     *
     * @generated from field: repeated Scailo.FormSection list = 1;
     */
    list: FormSection[];
    constructor(data?: PartialMessage<FormsSectionsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsSectionsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsSectionsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsSectionsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsSectionsList;
    static equals(a: FormsSectionsList | PlainMessage<FormsSectionsList> | undefined, b: FormsSectionsList | PlainMessage<FormsSectionsList> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message Scailo.FormSectionPaginationResp
 */
export declare class FormSectionPaginationResp extends Message<FormSectionPaginationResp> {
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
     * @generated from field: repeated Scailo.FormSection payload = 4;
     */
    payload: FormSection[];
    constructor(data?: PartialMessage<FormSectionPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormSectionPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormSectionPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormSectionPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormSectionPaginationResp;
    static equals(a: FormSectionPaginationResp | PlainMessage<FormSectionPaginationResp> | undefined, b: FormSectionPaginationResp | PlainMessage<FormSectionPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation of a form section
 *
 * @generated from message Scailo.FormsSectionsServiceCreateRequest
 */
export declare class FormsSectionsServiceCreateRequest extends Message<FormsSectionsServiceCreateRequest> {
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
     * The name of the form section
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the form section is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The type of the form section
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * A short description of the form section
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The width of the form section
     *
     * @generated from field: string width = 13;
     */
    width: string;
    constructor(data?: PartialMessage<FormsSectionsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsSectionsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsSectionsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsSectionsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsSectionsServiceCreateRequest;
    static equals(a: FormsSectionsServiceCreateRequest | PlainMessage<FormsSectionsServiceCreateRequest> | undefined, b: FormsSectionsServiceCreateRequest | PlainMessage<FormsSectionsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a form section
 *
 * @generated from message Scailo.FormsSectionsServiceUpdateRequest
 */
export declare class FormsSectionsServiceUpdateRequest extends Message<FormsSectionsServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the form section that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * The name of the form section
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the form section is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * A short description of the form section
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The width of the form section
     *
     * @generated from field: string width = 13;
     */
    width: string;
    constructor(data?: PartialMessage<FormsSectionsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsSectionsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsSectionsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsSectionsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsSectionsServiceUpdateRequest;
    static equals(a: FormsSectionsServiceUpdateRequest | PlainMessage<FormsSectionsServiceUpdateRequest> | undefined, b: FormsSectionsServiceUpdateRequest | PlainMessage<FormsSectionsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.FormsSectionsServicePaginationReq
 */
export declare class FormsSectionsServicePaginationReq extends Message<FormsSectionsServicePaginationReq> {
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
     * @generated from field: Scailo.FORM_SECTION_SORT_KEY sort_key = 5;
     */
    sortKey: FORM_SECTION_SORT_KEY;
    constructor(data?: PartialMessage<FormsSectionsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsSectionsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsSectionsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsSectionsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsSectionsServicePaginationReq;
    static equals(a: FormsSectionsServicePaginationReq | PlainMessage<FormsSectionsServicePaginationReq> | undefined, b: FormsSectionsServicePaginationReq | PlainMessage<FormsSectionsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.FormsSectionsServiceFilterReq
 */
export declare class FormsSectionsServiceFilterReq extends Message<FormsSectionsServiceFilterReq> {
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
     * @generated from field: Scailo.FORM_SECTION_SORT_KEY sort_key = 5;
     */
    sortKey: FORM_SECTION_SORT_KEY;
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
     * The name of the form section
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The type of the form section
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * The unique code by which the form section is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<FormsSectionsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsSectionsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsSectionsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsSectionsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsSectionsServiceFilterReq;
    static equals(a: FormsSectionsServiceFilterReq | PlainMessage<FormsSectionsServiceFilterReq> | undefined, b: FormsSectionsServiceFilterReq | PlainMessage<FormsSectionsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.FormsSectionsServiceCountReq
 */
export declare class FormsSectionsServiceCountReq extends Message<FormsSectionsServiceCountReq> {
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
     * The name of the form section
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The type of the form section
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * The unique code by which the form section is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<FormsSectionsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsSectionsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsSectionsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsSectionsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsSectionsServiceCountReq;
    static equals(a: FormsSectionsServiceCountReq | PlainMessage<FormsSectionsServiceCountReq> | undefined, b: FormsSectionsServiceCountReq | PlainMessage<FormsSectionsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on forms sections
 *
 * @generated from message Scailo.FormsSectionsServiceSearchAllReq
 */
export declare class FormsSectionsServiceSearchAllReq extends Message<FormsSectionsServiceSearchAllReq> {
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
     * @generated from field: Scailo.FORM_SECTION_SORT_KEY sort_key = 5;
     */
    sortKey: FORM_SECTION_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter forms sections
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
    constructor(data?: PartialMessage<FormsSectionsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsSectionsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsSectionsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsSectionsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsSectionsServiceSearchAllReq;
    static equals(a: FormsSectionsServiceSearchAllReq | PlainMessage<FormsSectionsServiceSearchAllReq> | undefined, b: FormsSectionsServiceSearchAllReq | PlainMessage<FormsSectionsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=forms_sections.scailo_pb.d.ts.map
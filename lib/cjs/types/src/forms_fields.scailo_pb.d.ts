import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, FORM_FIELD_ELEMENT, FORM_TYPE, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys for retrieving forms fields
 *
 * @generated from enum Scailo.FORM_FIELD_SORT_KEY
 */
export declare enum FORM_FIELD_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: FORM_FIELD_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    FORM_FIELD_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: FORM_FIELD_SORT_KEY_CREATED_AT = 1;
     */
    FORM_FIELD_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: FORM_FIELD_SORT_KEY_MODIFIED_AT = 2;
     */
    FORM_FIELD_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: FORM_FIELD_SORT_KEY_NAME = 10;
     */
    FORM_FIELD_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: FORM_FIELD_SORT_KEY_CODE = 11;
     */
    FORM_FIELD_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the section ID, and the record ID (this is a composite sort key)
     *
     * @generated from enum value: FORM_FIELD_SORT_KEY_SECTION_ID_AND_RECORD_ID = 20;
     */
    FORM_FIELD_SORT_KEY_SECTION_ID_AND_RECORD_ID = 20
}
/**
 *
 * Describes the data structure of each form field on the platform
 *
 * @generated from message Scailo.FormField
 */
export declare class FormField extends Message<FormField> {
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
     * The name of the form field
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the form field is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The type of the form field
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * The ID of the corresponding form section that the form field belongs to
     *
     * @generated from field: uint64 section_id = 12;
     */
    sectionId: bigint;
    /**
     * The width of the form field
     *
     * @generated from field: string width = 13;
     */
    width: string;
    /**
     * The type of the element
     *
     * @generated from field: Scailo.FORM_FIELD_ELEMENT element = 14;
     */
    element: FORM_FIELD_ELEMENT;
    /**
     * The placeholder of the form field
     *
     * @generated from field: string placeholder = 15;
     */
    placeholder: string;
    /**
     * The regex that is applicable on the form field
     *
     * @generated from field: string regex = 16;
     */
    regex: string;
    /**
     * The possible values that are applicable on the form field (in case of dropdowns, radio buttons, checkboxes)
     *
     * @generated from field: repeated string defined_values = 17;
     */
    definedValues: string[];
    /**
     * Denotes if the field is readonly (changes shall not be allowed to be made on the UI). Any changes will still be made through the API
     *
     * @generated from field: bool is_readonly = 30;
     */
    isReadonly: boolean;
    /**
     * Denotes if the field is hidden (field shall not be visible on the UI). The field shall be visible only through the API
     *
     * @generated from field: bool is_hidden = 31;
     */
    isHidden: boolean;
    /**
     * Denotes if the field is searchable (field shall not be visible on the UI in the filters view). The field will continue to be searchable through the API
     *
     * @generated from field: bool is_searchable = 32;
     */
    isSearchable: boolean;
    /**
     * Denotes if the field is public (field shall be visible on any custom designed public interfaces)
     *
     * @generated from field: bool is_public = 33;
     */
    isPublic: boolean;
    constructor(data?: PartialMessage<FormField>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormField";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormField;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormField;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormField;
    static equals(a: FormField | PlainMessage<FormField> | undefined, b: FormField | PlainMessage<FormField> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of forms fields
 *
 * @generated from message Scailo.FormsFieldsList
 */
export declare class FormsFieldsList extends Message<FormsFieldsList> {
    /**
     * List of forms fields
     *
     * @generated from field: repeated Scailo.FormField list = 1;
     */
    list: FormField[];
    constructor(data?: PartialMessage<FormsFieldsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsFieldsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsFieldsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsFieldsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsFieldsList;
    static equals(a: FormsFieldsList | PlainMessage<FormsFieldsList> | undefined, b: FormsFieldsList | PlainMessage<FormsFieldsList> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message Scailo.FormFieldPaginationResp
 */
export declare class FormFieldPaginationResp extends Message<FormFieldPaginationResp> {
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
     * @generated from field: repeated Scailo.FormField payload = 4;
     */
    payload: FormField[];
    constructor(data?: PartialMessage<FormFieldPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormFieldPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldPaginationResp;
    static equals(a: FormFieldPaginationResp | PlainMessage<FormFieldPaginationResp> | undefined, b: FormFieldPaginationResp | PlainMessage<FormFieldPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation of a form field
 *
 * @generated from message Scailo.FormsFieldsServiceCreateRequest
 */
export declare class FormsFieldsServiceCreateRequest extends Message<FormsFieldsServiceCreateRequest> {
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
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the form field
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the form field is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The type of the form field
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * The ID of the corresponding form section that the form field belongs to
     *
     * @generated from field: uint64 section_id = 12;
     */
    sectionId: bigint;
    /**
     * The width of the form field
     *
     * @generated from field: string width = 13;
     */
    width: string;
    /**
     * The type of the element
     *
     * @generated from field: Scailo.FORM_FIELD_ELEMENT element = 14;
     */
    element: FORM_FIELD_ELEMENT;
    /**
     * The placeholder of the form field
     *
     * @generated from field: string placeholder = 15;
     */
    placeholder: string;
    /**
     * The regex that is applicable on the form field
     *
     * @generated from field: string regex = 16;
     */
    regex: string;
    /**
     * The possible values that are applicable on the form field (in case of dropdowns, radio buttons, checkboxes)
     *
     * @generated from field: repeated string defined_values = 17;
     */
    definedValues: string[];
    /**
     * Denotes if the field is readonly (changes shall not be allowed to be made on the UI). Any changes will still be made through the API
     *
     * @generated from field: bool is_readonly = 30;
     */
    isReadonly: boolean;
    /**
     * Denotes if the field is hidden (field shall not be visible on the UI). The field shall be visible only through the API
     *
     * @generated from field: bool is_hidden = 31;
     */
    isHidden: boolean;
    /**
     * Denotes if the field is searchable (field shall not be visible on the UI in the filters view). The field will continue to be searchable through the API
     *
     * @generated from field: bool is_searchable = 32;
     */
    isSearchable: boolean;
    /**
     * Denotes if the field is public (field shall be visible on any custom designed public interfaces)
     *
     * @generated from field: bool is_public = 33;
     */
    isPublic: boolean;
    constructor(data?: PartialMessage<FormsFieldsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsFieldsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsFieldsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsFieldsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsFieldsServiceCreateRequest;
    static equals(a: FormsFieldsServiceCreateRequest | PlainMessage<FormsFieldsServiceCreateRequest> | undefined, b: FormsFieldsServiceCreateRequest | PlainMessage<FormsFieldsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a form field
 *
 * @generated from message Scailo.FormsFieldsServiceUpdateRequest
 */
export declare class FormsFieldsServiceUpdateRequest extends Message<FormsFieldsServiceUpdateRequest> {
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
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the form field that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * The name of the form field
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the form field is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the corresponding form section that the form field belongs to
     *
     * @generated from field: uint64 section_id = 12;
     */
    sectionId: bigint;
    /**
     * The width of the form field
     *
     * @generated from field: string width = 13;
     */
    width: string;
    /**
     * The placeholder of the form field
     *
     * @generated from field: string placeholder = 15;
     */
    placeholder: string;
    /**
     * The regex that is applicable on the form field
     *
     * @generated from field: string regex = 16;
     */
    regex: string;
    /**
     * The possible values that are applicable on the form field (in case of dropdowns, radio buttons, checkboxes)
     *
     * @generated from field: repeated string defined_values = 17;
     */
    definedValues: string[];
    /**
     * Denotes if the field is readonly (changes shall not be allowed to be made on the UI). Any changes will still be made through the API
     *
     * @generated from field: bool is_readonly = 30;
     */
    isReadonly: boolean;
    /**
     * Denotes if the field is hidden (field shall not be visible on the UI). The field shall be visible only through the API
     *
     * @generated from field: bool is_hidden = 31;
     */
    isHidden: boolean;
    /**
     * Denotes if the field is searchable (field shall not be visible on the UI in the filters view). The field will continue to be searchable through the API
     *
     * @generated from field: bool is_searchable = 32;
     */
    isSearchable: boolean;
    /**
     * Denotes if the field is public (field shall be visible on any custom designed public interfaces)
     *
     * @generated from field: bool is_public = 33;
     */
    isPublic: boolean;
    constructor(data?: PartialMessage<FormsFieldsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsFieldsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsFieldsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsFieldsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsFieldsServiceUpdateRequest;
    static equals(a: FormsFieldsServiceUpdateRequest | PlainMessage<FormsFieldsServiceUpdateRequest> | undefined, b: FormsFieldsServiceUpdateRequest | PlainMessage<FormsFieldsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.FormsFieldsServicePaginationReq
 */
export declare class FormsFieldsServicePaginationReq extends Message<FormsFieldsServicePaginationReq> {
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
     * @generated from field: Scailo.FORM_FIELD_SORT_KEY sort_key = 5;
     */
    sortKey: FORM_FIELD_SORT_KEY;
    constructor(data?: PartialMessage<FormsFieldsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsFieldsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsFieldsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsFieldsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsFieldsServicePaginationReq;
    static equals(a: FormsFieldsServicePaginationReq | PlainMessage<FormsFieldsServicePaginationReq> | undefined, b: FormsFieldsServicePaginationReq | PlainMessage<FormsFieldsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.FormsFieldsServiceFilterReq
 */
export declare class FormsFieldsServiceFilterReq extends Message<FormsFieldsServiceFilterReq> {
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
     * @generated from field: Scailo.FORM_FIELD_SORT_KEY sort_key = 5;
     */
    sortKey: FORM_FIELD_SORT_KEY;
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
     * The name of the form field
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The type of the form field
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * The ID of the corresponding form section that the form field belongs to
     *
     * @generated from field: uint64 section_id = 12;
     */
    sectionId: bigint;
    /**
     * The unique code by which the form field is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<FormsFieldsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsFieldsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsFieldsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsFieldsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsFieldsServiceFilterReq;
    static equals(a: FormsFieldsServiceFilterReq | PlainMessage<FormsFieldsServiceFilterReq> | undefined, b: FormsFieldsServiceFilterReq | PlainMessage<FormsFieldsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.FormsFieldsServiceCountReq
 */
export declare class FormsFieldsServiceCountReq extends Message<FormsFieldsServiceCountReq> {
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
     * The name of the form field
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The type of the form field
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * The ID of the corresponding form section that the form field belongs to
     *
     * @generated from field: uint64 section_id = 12;
     */
    sectionId: bigint;
    /**
     * The unique code by which the form field is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<FormsFieldsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsFieldsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsFieldsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsFieldsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsFieldsServiceCountReq;
    static equals(a: FormsFieldsServiceCountReq | PlainMessage<FormsFieldsServiceCountReq> | undefined, b: FormsFieldsServiceCountReq | PlainMessage<FormsFieldsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on forms fields
 *
 * @generated from message Scailo.FormsFieldsServiceSearchAllReq
 */
export declare class FormsFieldsServiceSearchAllReq extends Message<FormsFieldsServiceSearchAllReq> {
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
     * @generated from field: Scailo.FORM_FIELD_SORT_KEY sort_key = 5;
     */
    sortKey: FORM_FIELD_SORT_KEY;
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
     * The type of the form field
     *
     * @generated from field: Scailo.FORM_TYPE type = 11;
     */
    type: FORM_TYPE;
    /**
     * The ID of the corresponding form section that the form field belongs to
     *
     * @generated from field: uint64 section_id = 12;
     */
    sectionId: bigint;
    constructor(data?: PartialMessage<FormsFieldsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormsFieldsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormsFieldsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormsFieldsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormsFieldsServiceSearchAllReq;
    static equals(a: FormsFieldsServiceSearchAllReq | PlainMessage<FormsFieldsServiceSearchAllReq> | undefined, b: FormsFieldsServiceSearchAllReq | PlainMessage<FormsFieldsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=forms_fields.scailo_pb.d.ts.map
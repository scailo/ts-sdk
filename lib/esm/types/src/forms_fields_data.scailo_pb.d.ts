import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EmployeeMetadata } from "./base.scailo_pb.js";
import { FormField } from "./forms_fields.scailo_pb.js";
/**
 *
 * Describes the form field filter operator
 *
 * @generated from enum Scailo.FORM_FIELD_FILTER_OPERATOR
 */
export declare enum FORM_FIELD_FILTER_OPERATOR {
    /**
     * The default operator which uses similarity to filter. Returns all records that are similar to the given value
     *
     * @generated from enum value: FORM_FIELD_FILTER_OPERATOR_SIMILARITY_UNSPECIFIED = 0;
     */
    FORM_FIELD_FILTER_OPERATOR_SIMILARITY_UNSPECIFIED = 0,
    /**
     * The operator uses equality. Returns all records that match the given value
     *
     * @generated from enum value: FORM_FIELD_FILTER_OPERATOR_EQUALITY = 10;
     */
    FORM_FIELD_FILTER_OPERATOR_EQUALITY = 10,
    /**
     * The operator uses less than. Returns all records that are less than the given value. Useful for comparing numbers and dates. For strings, it returns all records that are lexicographically less than the given value.
     *
     * @generated from enum value: FORM_FIELD_FILTER_OPERATOR_LESS_THAN = 20;
     */
    FORM_FIELD_FILTER_OPERATOR_LESS_THAN = 20,
    /**
     * The operator uses less than or equal. Returns all records that are less than or equal to the given value. Useful for comparing numbers and dates. For strings, it returns all records that are lexicographically less than or equal to the given value.
     *
     * @generated from enum value: FORM_FIELD_FILTER_OPERATOR_LESS_THAN_OR_EQUAL = 21;
     */
    FORM_FIELD_FILTER_OPERATOR_LESS_THAN_OR_EQUAL = 21,
    /**
     * The operator uses greater than. Returns all records that are greater than the given value. Useful for comparing numbers and dates. For strings, it returns all records that are lexicographically greater than the given value.
     *
     * @generated from enum value: FORM_FIELD_FILTER_OPERATOR_GREATER_THAN = 30;
     */
    FORM_FIELD_FILTER_OPERATOR_GREATER_THAN = 30,
    /**
     * The operator uses greater than or equal. Returns all records that are greater than or equal to the given value. Useful for comparing numbers and dates. For strings, it returns all records that are lexicographically greater than or equal to the given value.
     *
     * @generated from enum value: FORM_FIELD_FILTER_OPERATOR_GREATER_THAN_OR_EQUAL = 31;
     */
    FORM_FIELD_FILTER_OPERATOR_GREATER_THAN_OR_EQUAL = 31
}
/**
 *
 * Describes the data stored in an individual form field data row of each dynamic form
 *
 * @generated from message Scailo.FormFieldDatum
 */
export declare class FormFieldDatum extends Message<FormFieldDatum> {
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
     * The ID of the form field
     *
     * @generated from field: uint64 form_field_id = 10;
     */
    formFieldId: bigint;
    /**
     * The underlying form field (from the form_field_id)
     *
     * @generated from field: Scailo.FormField form_field = 20;
     */
    formField?: FormField;
    /**
     * The UUID that this field belongs to
     *
     * @generated from field: string ref_uuid = 21;
     */
    refUuid: string;
    /**
     * The value entered by the user
     *
     * @generated from field: string value = 22;
     */
    value: string;
    /**
     * The list of values that have been selected by the user (in case of a checkbox or a dropdown)
     *
     * @generated from field: repeated string selected_values = 23;
     */
    selectedValues: string[];
    /**
     * Denotes if this field requires approval by a competent authority
     *
     * @generated from field: bool need_approval = 24;
     */
    needApproval: boolean;
    constructor(data?: PartialMessage<FormFieldDatum>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormFieldDatum";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatum;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatum;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatum;
    static equals(a: FormFieldDatum | PlainMessage<FormFieldDatum> | undefined, b: FormFieldDatum | PlainMessage<FormFieldDatum> | undefined): boolean;
}
/**
 *
 * Describes the data required for creating a dynamic form field entry
 *
 * @generated from message Scailo.FormFieldDatumCreateRequest
 */
export declare class FormFieldDatumCreateRequest extends Message<FormFieldDatumCreateRequest> {
    /**
     * The ID of the corresponding form field
     *
     * @generated from field: uint64 form_field_id = 1;
     */
    formFieldId: bigint;
    /**
     * The value to be stored (for textarea and input)
     *
     * @generated from field: string value = 2;
     */
    value: string;
    /**
     * The list of selected values (for radio, checkbox, and select)
     *
     * @generated from field: repeated string selected_values = 3;
     */
    selectedValues: string[];
    constructor(data?: PartialMessage<FormFieldDatumCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormFieldDatumCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatumCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatumCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatumCreateRequest;
    static equals(a: FormFieldDatumCreateRequest | PlainMessage<FormFieldDatumCreateRequest> | undefined, b: FormFieldDatumCreateRequest | PlainMessage<FormFieldDatumCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.FormFieldDatumList
 */
export declare class FormFieldDatumList extends Message<FormFieldDatumList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.FormFieldDatum list = 1;
     */
    list: FormFieldDatum[];
    constructor(data?: PartialMessage<FormFieldDatumList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormFieldDatumList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatumList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatumList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatumList;
    static equals(a: FormFieldDatumList | PlainMessage<FormFieldDatumList> | undefined, b: FormFieldDatumList | PlainMessage<FormFieldDatumList> | undefined): boolean;
}
/**
 *
 * Describes the data required to fetch history of the given form field and the specified resource
 *
 * @generated from message Scailo.FormFieldDatumHistoryRequest
 */
export declare class FormFieldDatumHistoryRequest extends Message<FormFieldDatumHistoryRequest> {
    /**
     * The ID of the corresponding form field
     *
     * @generated from field: uint64 form_field_id = 1;
     */
    formFieldId: bigint;
    /**
     * The UUID of the corresponding resource
     *
     * @generated from field: string ref_uuid = 2;
     */
    refUuid: string;
    constructor(data?: PartialMessage<FormFieldDatumHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormFieldDatumHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatumHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatumHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatumHistoryRequest;
    static equals(a: FormFieldDatumHistoryRequest | PlainMessage<FormFieldDatumHistoryRequest> | undefined, b: FormFieldDatumHistoryRequest | PlainMessage<FormFieldDatumHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the data required to filter for records using form field data
 *
 * @generated from message Scailo.FormFieldDatumFilterRequest
 */
export declare class FormFieldDatumFilterRequest extends Message<FormFieldDatumFilterRequest> {
    /**
     * The ID of the corresponding form field
     *
     * @generated from field: uint64 form_field_id = 1;
     */
    formFieldId: bigint;
    /**
     * The value to be filtered
     *
     * @generated from field: string value = 2;
     */
    value: string;
    /**
     * The operator to be used
     *
     * @generated from field: Scailo.FORM_FIELD_FILTER_OPERATOR operator = 10;
     */
    operator: FORM_FIELD_FILTER_OPERATOR;
    constructor(data?: PartialMessage<FormFieldDatumFilterRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FormFieldDatumFilterRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatumFilterRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatumFilterRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatumFilterRequest;
    static equals(a: FormFieldDatumFilterRequest | PlainMessage<FormFieldDatumFilterRequest> | undefined, b: FormFieldDatumFilterRequest | PlainMessage<FormFieldDatumFilterRequest> | undefined): boolean;
}
//# sourceMappingURL=forms_fields_data.scailo_pb.d.ts.map
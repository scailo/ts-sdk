import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available input types for a skill group item (with possible vbalues being number-absolute, number-percentage, text-input, text-dropdown)
 *
 * @generated from enum Scailo.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE
 */
export declare enum SKILL_GROUP_ITEM_INPUT_VALUE_TYPE {
    /**
     * Input value type is an absolute number (with min and max defined in number_min_value and number_max_value)
     *
     * @generated from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED = 0;
     */
    SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED = 0,
    /**
     * Input value type is a percentage
     *
     * @generated from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_NUMBER_PERCENTAGE = 1;
     */
    SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_NUMBER_PERCENTAGE = 1,
    /**
     * Input value type is a textual input
     *
     * @generated from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_TEXT_INPUT = 2;
     */
    SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_TEXT_INPUT = 2,
    /**
     * Input value type is a dropdown (from the values as defined in text_values)
     *
     * @generated from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_TEXT_DROPDOWN = 3;
     */
    SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_TEXT_DROPDOWN = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SKILL_GROUP_SORT_KEY
 */
export declare enum SKILL_GROUP_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    SKILL_GROUP_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    SKILL_GROUP_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    SKILL_GROUP_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    SKILL_GROUP_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SKILL_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_COMPLETED_ON = 6;
     */
    SKILL_GROUP_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_NAME = 10;
     */
    SKILL_GROUP_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the role ID
     *
     * @generated from enum value: SKILL_GROUP_SORT_KEY_ROLE_ID = 11;
     */
    SKILL_GROUP_SORT_KEY_ROLE_ID = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SkillsGroupsServiceCreateRequest
 */
export declare class SkillsGroupsServiceCreateRequest extends Message<SkillsGroupsServiceCreateRequest> {
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
     * The name of the skill group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the role that this skill group belongs to
     *
     * @generated from field: uint64 role_id = 12;
     */
    roleId: bigint;
    /**
     * The description of the skill group
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
    constructor(data?: PartialMessage<SkillsGroupsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServiceCreateRequest;
    static equals(a: SkillsGroupsServiceCreateRequest | PlainMessage<SkillsGroupsServiceCreateRequest> | undefined, b: SkillsGroupsServiceCreateRequest | PlainMessage<SkillsGroupsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SkillsGroupsServiceUpdateRequest
 */
export declare class SkillsGroupsServiceUpdateRequest extends Message<SkillsGroupsServiceUpdateRequest> {
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
     * The name of the skill group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the role that this skill group belongs to
     *
     * @generated from field: uint64 role_id = 12;
     */
    roleId: bigint;
    /**
     * The description of the skill group
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
    constructor(data?: PartialMessage<SkillsGroupsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServiceUpdateRequest;
    static equals(a: SkillsGroupsServiceUpdateRequest | PlainMessage<SkillsGroupsServiceUpdateRequest> | undefined, b: SkillsGroupsServiceUpdateRequest | PlainMessage<SkillsGroupsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.SkillGroup
 */
export declare class SkillGroup extends Message<SkillGroup> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this skill group
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
     * The status of this skill group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this skill group
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this skill group was marked as completed
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
     * The name of the skill group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the role that this skill group belongs to
     *
     * @generated from field: uint64 role_id = 12;
     */
    roleId: bigint;
    /**
     * The description of the skill group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated skill group params
     *
     * @generated from field: repeated Scailo.SkillGroupItem list = 20;
     */
    list: SkillGroupItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SkillGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillGroup;
    static equals(a: SkillGroup | PlainMessage<SkillGroup> | undefined, b: SkillGroup | PlainMessage<SkillGroup> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a param to a skill group
 *
 * @generated from message Scailo.SkillsGroupsServiceItemCreateRequest
 */
export declare class SkillsGroupsServiceItemCreateRequest extends Message<SkillsGroupsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the skill group
     *
     * @generated from field: uint64 skill_group_id = 10;
     */
    skillGroupId: bigint;
    /**
     * The ID of the skill param that is a part of the skill group
     *
     * @generated from field: uint64 skill_param_id = 11;
     */
    skillParamId: bigint;
    /**
     * The input value type of the item
     *
     * @generated from field: Scailo.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE input_value_type = 12;
     */
    inputValueType: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_min_value = 13;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_max_value = 14;
     */
    numberMaxValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 15;
     */
    textValues: string[];
    /**
     * An optional description
     *
     * @generated from field: string description = 20;
     */
    description: string;
    constructor(data?: PartialMessage<SkillsGroupsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServiceItemCreateRequest;
    static equals(a: SkillsGroupsServiceItemCreateRequest | PlainMessage<SkillsGroupsServiceItemCreateRequest> | undefined, b: SkillsGroupsServiceItemCreateRequest | PlainMessage<SkillsGroupsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update a param in a skill group
 *
 * @generated from message Scailo.SkillsGroupsServiceItemUpdateRequest
 */
export declare class SkillsGroupsServiceItemUpdateRequest extends Message<SkillsGroupsServiceItemUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * The input value type of the item
     *
     * @generated from field: Scailo.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE input_value_type = 12;
     */
    inputValueType: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_min_value = 13;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_max_value = 14;
     */
    numberMaxValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 15;
     */
    textValues: string[];
    /**
     * An optional description
     *
     * @generated from field: string description = 20;
     */
    description: string;
    constructor(data?: PartialMessage<SkillsGroupsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServiceItemUpdateRequest;
    static equals(a: SkillsGroupsServiceItemUpdateRequest | PlainMessage<SkillsGroupsServiceItemUpdateRequest> | undefined, b: SkillsGroupsServiceItemUpdateRequest | PlainMessage<SkillsGroupsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a param associated to a skill group
 *
 * @generated from message Scailo.SkillGroupItem
 */
export declare class SkillGroupItem extends Message<SkillGroupItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this skill group
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
     * Stores the ID of the skill group
     *
     * @generated from field: uint64 skill_group_id = 10;
     */
    skillGroupId: bigint;
    /**
     * The ID of the skill param that is a part of the skill group
     *
     * @generated from field: uint64 skill_param_id = 11;
     */
    skillParamId: bigint;
    /**
     * The input value type of the item
     *
     * @generated from field: Scailo.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE input_value_type = 12;
     */
    inputValueType: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_min_value = 13;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_max_value = 14;
     */
    numberMaxValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 15;
     */
    textValues: string[];
    /**
     * An optional description
     *
     * @generated from field: string description = 20;
     */
    description: string;
    constructor(data?: PartialMessage<SkillGroupItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillGroupItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillGroupItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillGroupItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillGroupItem;
    static equals(a: SkillGroupItem | PlainMessage<SkillGroupItem> | undefined, b: SkillGroupItem | PlainMessage<SkillGroupItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of skills groups
 *
 * @generated from message Scailo.SkillsGroupsList
 */
export declare class SkillsGroupsList extends Message<SkillsGroupsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SkillGroup list = 1;
     */
    list: SkillGroup[];
    constructor(data?: PartialMessage<SkillsGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsList;
    static equals(a: SkillsGroupsList | PlainMessage<SkillsGroupsList> | undefined, b: SkillsGroupsList | PlainMessage<SkillsGroupsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of skill group params
 *
 * @generated from message Scailo.SkillsGroupsItemsList
 */
export declare class SkillsGroupsItemsList extends Message<SkillsGroupsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SkillGroupItem list = 1;
     */
    list: SkillGroupItem[];
    constructor(data?: PartialMessage<SkillsGroupsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsItemsList;
    static equals(a: SkillsGroupsItemsList | PlainMessage<SkillsGroupsItemsList> | undefined, b: SkillsGroupsItemsList | PlainMessage<SkillsGroupsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.SkillGroupItemHistoryRequest
 */
export declare class SkillGroupItemHistoryRequest extends Message<SkillGroupItemHistoryRequest> {
    /**
     * Stores the ID of the skill group
     *
     * @generated from field: uint64 skill_group_id = 10;
     */
    skillGroupId: bigint;
    /**
     * The ID of the skill param that is a part of the skill group
     *
     * @generated from field: uint64 skill_param_id = 11;
     */
    skillParamId: bigint;
    constructor(data?: PartialMessage<SkillGroupItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillGroupItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillGroupItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillGroupItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillGroupItemHistoryRequest;
    static equals(a: SkillGroupItemHistoryRequest | PlainMessage<SkillGroupItemHistoryRequest> | undefined, b: SkillGroupItemHistoryRequest | PlainMessage<SkillGroupItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SkillsGroupsServicePaginationReq
 */
export declare class SkillsGroupsServicePaginationReq extends Message<SkillsGroupsServicePaginationReq> {
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
     * @generated from field: Scailo.SKILL_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_GROUP_SORT_KEY;
    /**
     * The status of this skill group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SkillsGroupsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServicePaginationReq;
    static equals(a: SkillsGroupsServicePaginationReq | PlainMessage<SkillsGroupsServicePaginationReq> | undefined, b: SkillsGroupsServicePaginationReq | PlainMessage<SkillsGroupsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SkillsGroupsServicePaginationResponse
 */
export declare class SkillsGroupsServicePaginationResponse extends Message<SkillsGroupsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.SkillGroup payload = 4;
     */
    payload: SkillGroup[];
    constructor(data?: PartialMessage<SkillsGroupsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServicePaginationResponse;
    static equals(a: SkillsGroupsServicePaginationResponse | PlainMessage<SkillsGroupsServicePaginationResponse> | undefined, b: SkillsGroupsServicePaginationResponse | PlainMessage<SkillsGroupsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SkillsGroupsServiceFilterReq
 */
export declare class SkillsGroupsServiceFilterReq extends Message<SkillsGroupsServiceFilterReq> {
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
     * @generated from field: Scailo.SKILL_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_GROUP_SORT_KEY;
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
     * The status of this skill group
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
     * The name of the skill group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The skill group code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the role that this skill group belongs to
     *
     * @generated from field: uint64 role_id = 22;
     */
    roleId: bigint;
    constructor(data?: PartialMessage<SkillsGroupsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServiceFilterReq;
    static equals(a: SkillsGroupsServiceFilterReq | PlainMessage<SkillsGroupsServiceFilterReq> | undefined, b: SkillsGroupsServiceFilterReq | PlainMessage<SkillsGroupsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SkillsGroupsServiceCountReq
 */
export declare class SkillsGroupsServiceCountReq extends Message<SkillsGroupsServiceCountReq> {
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
     * The status of this skill group
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
     * The name of the skill group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The skill group code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the role that this skill group belongs to
     *
     * @generated from field: uint64 role_id = 22;
     */
    roleId: bigint;
    constructor(data?: PartialMessage<SkillsGroupsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServiceCountReq;
    static equals(a: SkillsGroupsServiceCountReq | PlainMessage<SkillsGroupsServiceCountReq> | undefined, b: SkillsGroupsServiceCountReq | PlainMessage<SkillsGroupsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SkillsGroupsServiceSearchAllReq
 */
export declare class SkillsGroupsServiceSearchAllReq extends Message<SkillsGroupsServiceSearchAllReq> {
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
     * @generated from field: Scailo.SKILL_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_GROUP_SORT_KEY;
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
    constructor(data?: PartialMessage<SkillsGroupsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SkillsGroupsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsGroupsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsGroupsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsGroupsServiceSearchAllReq;
    static equals(a: SkillsGroupsServiceSearchAllReq | PlainMessage<SkillsGroupsServiceSearchAllReq> | undefined, b: SkillsGroupsServiceSearchAllReq | PlainMessage<SkillsGroupsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=skills_groups.scailo_pb.d.ts.map
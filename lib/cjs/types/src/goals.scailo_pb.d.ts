import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available input types for a goal item (with possible vbalues being number-absolute, number-percentage, text-input, text-dropdown)
 *
 * @generated from enum Scailo.GOAL_ITEM_INPUT_VALUE_TYPE
 */
export declare enum GOAL_ITEM_INPUT_VALUE_TYPE {
    /**
     * Input value type is an absolute number (with min and max defined in number_min_value and number_max_value)
     *
     * @generated from enum value: GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED = 0;
     */
    GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED = 0,
    /**
     * Input value type is a percentage
     *
     * @generated from enum value: GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_PERCENTAGE = 1;
     */
    GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_PERCENTAGE = 1,
    /**
     * Input value type is a textual input
     *
     * @generated from enum value: GOAL_ITEM_INPUT_VALUE_TYPE_TEXT_INPUT = 2;
     */
    GOAL_ITEM_INPUT_VALUE_TYPE_TEXT_INPUT = 2,
    /**
     * Input value type is a dropdown (from the values as defined in text_values)
     *
     * @generated from enum value: GOAL_ITEM_INPUT_VALUE_TYPE_TEXT_DROPDOWN = 3;
     */
    GOAL_ITEM_INPUT_VALUE_TYPE_TEXT_DROPDOWN = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.GOAL_ITEM_SORT_KEY
 */
export declare enum GOAL_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOAL_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOAL_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOAL_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    GOAL_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOAL_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    GOAL_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOAL_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    GOAL_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOAL_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    GOAL_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOAL_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOAL_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the label ID
     *
     * @generated from enum value: GOAL_ITEM_SORT_KEY_LABEL_ID = 10;
     */
    GOAL_ITEM_SORT_KEY_LABEL_ID = 10
}
/**
 *
 * Describes the applicable statuses of goal items
 *
 * @generated from enum Scailo.GOAL_ITEM_STATUS
 */
export declare enum GOAL_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: GOAL_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    GOAL_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the goal items must have been approved
     *
     * @generated from enum value: GOAL_ITEM_STATUS_APPROVED = 1;
     */
    GOAL_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the goal items must be waiting for approval
     *
     * @generated from enum value: GOAL_ITEM_STATUS_UNAPPROVED = 2;
     */
    GOAL_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.GOAL_SORT_KEY
 */
export declare enum GOAL_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOAL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOAL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOAL_SORT_KEY_CREATED_AT = 1;
     */
    GOAL_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOAL_SORT_KEY_MODIFIED_AT = 2;
     */
    GOAL_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOAL_SORT_KEY_APPROVED_ON = 3;
     */
    GOAL_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOAL_SORT_KEY_APPROVED_BY = 4;
     */
    GOAL_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOAL_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOAL_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: GOAL_SORT_KEY_COMPLETED_ON = 6;
     */
    GOAL_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: GOAL_SORT_KEY_REFERENCE_ID = 10;
     */
    GOAL_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: GOAL_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    GOAL_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.GoalsServiceCreateRequest
 */
export declare class GoalsServiceCreateRequest extends Message<GoalsServiceCreateRequest> {
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
     * The reference ID of the goal
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated user ID
     *
     * @generated from field: uint64 user_id = 12;
     */
    userId: bigint;
    /**
     * The date from which the goal comes into force
     *
     * @generated from field: string start_date = 13;
     */
    startDate: string;
    /**
     * The date until which the goal remains into force
     *
     * @generated from field: string end_date = 14;
     */
    endDate: string;
    /**
     * The description of the goal
     *
     * @generated from field: string description = 20;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GoalsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceCreateRequest;
    static equals(a: GoalsServiceCreateRequest | PlainMessage<GoalsServiceCreateRequest> | undefined, b: GoalsServiceCreateRequest | PlainMessage<GoalsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.GoalsServiceUpdateRequest
 */
export declare class GoalsServiceUpdateRequest extends Message<GoalsServiceUpdateRequest> {
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
     * The reference ID of the goal
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The date from which the goal comes into force
     *
     * @generated from field: string start_date = 13;
     */
    startDate: string;
    /**
     * The date until which the goal remains into force
     *
     * @generated from field: string end_date = 14;
     */
    endDate: string;
    /**
     * The description of the goal
     *
     * @generated from field: string description = 20;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GoalsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceUpdateRequest;
    static equals(a: GoalsServiceUpdateRequest | PlainMessage<GoalsServiceUpdateRequest> | undefined, b: GoalsServiceUpdateRequest | PlainMessage<GoalsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Goal
 */
export declare class Goal extends Message<Goal> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this goal
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
     * The status of this goal
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this goal
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this goal was marked as completed
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
     * The reference ID of the goal
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
     * The associated user ID
     *
     * @generated from field: uint64 user_id = 12;
     */
    userId: bigint;
    /**
     * The date from which the goal comes into force
     *
     * @generated from field: string start_date = 13;
     */
    startDate: string;
    /**
     * The date until which the goal remains into force
     *
     * @generated from field: string end_date = 14;
     */
    endDate: string;
    /**
     * The description of the goal
     *
     * @generated from field: string description = 20;
     */
    description: string;
    /**
     * The list of associated goal items
     *
     * @generated from field: repeated Scailo.GoalItem list = 30;
     */
    list: GoalItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Goal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Goal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Goal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Goal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Goal;
    static equals(a: Goal | PlainMessage<Goal> | undefined, b: Goal | PlainMessage<Goal> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a goal
 *
 * @generated from message Scailo.GoalsServiceItemCreateRequest
 */
export declare class GoalsServiceItemCreateRequest extends Message<GoalsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the goal ID
     *
     * @generated from field: uint64 goal_id = 10;
     */
    goalId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores an optional label
     *
     * @generated from field: uint64 label_id = 12;
     */
    labelId: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 13;
     */
    specifications: string;
    /**
     * The input value type of the item
     *
     * @generated from field: Scailo.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;
     */
    inputValueType: GOAL_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_min_value = 21;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_max_value = 22;
     */
    numberMaxValue: bigint;
    /**
     * The acceptable value of the item in case input_value_type is of number type
     *
     * @generated from field: uint64 number_acceptable_value = 23;
     */
    numberAcceptableValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 30;
     */
    textValues: string[];
    /**
     * The acceptable value of the item in case input_value_type is of text type
     *
     * @generated from field: string text_acceptable_value = 31;
     */
    textAcceptableValue: string;
    constructor(data?: PartialMessage<GoalsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceItemCreateRequest;
    static equals(a: GoalsServiceItemCreateRequest | PlainMessage<GoalsServiceItemCreateRequest> | undefined, b: GoalsServiceItemCreateRequest | PlainMessage<GoalsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a goal
 *
 * @generated from message Scailo.GoalsServiceItemUpdateRequest
 */
export declare class GoalsServiceItemUpdateRequest extends Message<GoalsServiceItemUpdateRequest> {
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
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores an optional label
     *
     * @generated from field: uint64 label_id = 12;
     */
    labelId: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 13;
     */
    specifications: string;
    /**
     * The input value type of the item
     *
     * @generated from field: Scailo.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;
     */
    inputValueType: GOAL_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_min_value = 21;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_max_value = 22;
     */
    numberMaxValue: bigint;
    /**
     * The acceptable value of the item in case input_value_type is of number type
     *
     * @generated from field: uint64 number_acceptable_value = 23;
     */
    numberAcceptableValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 30;
     */
    textValues: string[];
    /**
     * The acceptable value of the item in case input_value_type is of text type
     *
     * @generated from field: string text_acceptable_value = 31;
     */
    textAcceptableValue: string;
    constructor(data?: PartialMessage<GoalsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceItemUpdateRequest;
    static equals(a: GoalsServiceItemUpdateRequest | PlainMessage<GoalsServiceItemUpdateRequest> | undefined, b: GoalsServiceItemUpdateRequest | PlainMessage<GoalsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a goal
 *
 * @generated from message Scailo.GoalItem
 */
export declare class GoalItem extends Message<GoalItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this goal
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
     * Stores the goal ID
     *
     * @generated from field: uint64 goal_id = 10;
     */
    goalId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores an optional label
     *
     * @generated from field: uint64 label_id = 12;
     */
    labelId: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 13;
     */
    specifications: string;
    /**
     * The input value type of the item
     *
     * @generated from field: Scailo.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;
     */
    inputValueType: GOAL_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_min_value = 21;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: uint64 number_max_value = 22;
     */
    numberMaxValue: bigint;
    /**
     * The acceptable value of the item in case input_value_type is of number type
     *
     * @generated from field: uint64 number_acceptable_value = 23;
     */
    numberAcceptableValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 30;
     */
    textValues: string[];
    /**
     * The acceptable value of the item in case input_value_type is of text type
     *
     * @generated from field: string text_acceptable_value = 31;
     */
    textAcceptableValue: string;
    constructor(data?: PartialMessage<GoalItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalItem;
    static equals(a: GoalItem | PlainMessage<GoalItem> | undefined, b: GoalItem | PlainMessage<GoalItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goals
 *
 * @generated from message Scailo.GoalsList
 */
export declare class GoalsList extends Message<GoalsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Goal list = 1;
     */
    list: Goal[];
    constructor(data?: PartialMessage<GoalsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsList;
    static equals(a: GoalsList | PlainMessage<GoalsList> | undefined, b: GoalsList | PlainMessage<GoalsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goal items
 *
 * @generated from message Scailo.GoalsItemsList
 */
export declare class GoalsItemsList extends Message<GoalsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.GoalItem list = 1;
     */
    list: GoalItem[];
    constructor(data?: PartialMessage<GoalsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsItemsList;
    static equals(a: GoalsItemsList | PlainMessage<GoalsItemsList> | undefined, b: GoalsItemsList | PlainMessage<GoalsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.GoalItemHistoryRequest
 */
export declare class GoalItemHistoryRequest extends Message<GoalItemHistoryRequest> {
    /**
     * Stores the goal ID
     *
     * @generated from field: uint64 goal_id = 10;
     */
    goalId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<GoalItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalItemHistoryRequest;
    static equals(a: GoalItemHistoryRequest | PlainMessage<GoalItemHistoryRequest> | undefined, b: GoalItemHistoryRequest | PlainMessage<GoalItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.GoalItemsSearchRequest
 */
export declare class GoalItemsSearchRequest extends Message<GoalItemsSearchRequest> {
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
     * @generated from field: Scailo.GOAL_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: GOAL_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.GOAL_ITEM_STATUS status = 7;
     */
    status: GOAL_ITEM_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 10;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 11;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 12;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 13;
     */
    approverRoleId: bigint;
    /**
     * Stores the goal ID
     *
     * @generated from field: uint64 goal_id = 20;
     */
    goalId: bigint;
    /**
     * Stores an optional label
     *
     * @generated from field: uint64 label_id = 21;
     */
    labelId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<GoalItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalItemsSearchRequest;
    static equals(a: GoalItemsSearchRequest | PlainMessage<GoalItemsSearchRequest> | undefined, b: GoalItemsSearchRequest | PlainMessage<GoalItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.GoalsServicePaginatedItemsResponse
 */
export declare class GoalsServicePaginatedItemsResponse extends Message<GoalsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.GoalItem payload = 4;
     */
    payload: GoalItem[];
    constructor(data?: PartialMessage<GoalsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServicePaginatedItemsResponse;
    static equals(a: GoalsServicePaginatedItemsResponse | PlainMessage<GoalsServicePaginatedItemsResponse> | undefined, b: GoalsServicePaginatedItemsResponse | PlainMessage<GoalsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.GoalsServicePaginationReq
 */
export declare class GoalsServicePaginationReq extends Message<GoalsServicePaginationReq> {
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
     * @generated from field: Scailo.GOAL_SORT_KEY sort_key = 5;
     */
    sortKey: GOAL_SORT_KEY;
    /**
     * The status of this goal
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<GoalsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServicePaginationReq;
    static equals(a: GoalsServicePaginationReq | PlainMessage<GoalsServicePaginationReq> | undefined, b: GoalsServicePaginationReq | PlainMessage<GoalsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.GoalsServicePaginationResponse
 */
export declare class GoalsServicePaginationResponse extends Message<GoalsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Goal payload = 4;
     */
    payload: Goal[];
    constructor(data?: PartialMessage<GoalsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServicePaginationResponse;
    static equals(a: GoalsServicePaginationResponse | PlainMessage<GoalsServicePaginationResponse> | undefined, b: GoalsServicePaginationResponse | PlainMessage<GoalsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.GoalsServiceFilterReq
 */
export declare class GoalsServiceFilterReq extends Message<GoalsServiceFilterReq> {
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
     * @generated from field: Scailo.GOAL_SORT_KEY sort_key = 5;
     */
    sortKey: GOAL_SORT_KEY;
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
     * The status of this goal
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
     * The reference ID of the goal
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
     * The associated user ID
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The min start date of the plan (in string)
     *
     * @generated from field: string start_date_start = 30;
     */
    startDateStart: string;
    /**
     * The max start date of the plan (in string)
     *
     * @generated from field: string start_date_end = 31;
     */
    startDateEnd: string;
    /**
     * The exact start date of the plan (in string)
     *
     * @generated from field: string start_date_exact = 32;
     */
    startDateExact: string;
    /**
     * The min end date of the plan (in string)
     *
     * @generated from field: string end_date_start = 36;
     */
    endDateStart: string;
    /**
     * The max end date of the plan (in string)
     *
     * @generated from field: string end_date_end = 37;
     */
    endDateEnd: string;
    /**
     * The exact end date of the plan (in string)
     *
     * @generated from field: string end_date_exact = 38;
     */
    endDateExact: string;
    constructor(data?: PartialMessage<GoalsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceFilterReq;
    static equals(a: GoalsServiceFilterReq | PlainMessage<GoalsServiceFilterReq> | undefined, b: GoalsServiceFilterReq | PlainMessage<GoalsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.GoalsServiceCountReq
 */
export declare class GoalsServiceCountReq extends Message<GoalsServiceCountReq> {
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
     * The status of this goal
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
     * The reference ID of the goal
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
     * The associated user ID
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The min start date of the plan (in string)
     *
     * @generated from field: string start_date_start = 30;
     */
    startDateStart: string;
    /**
     * The max start date of the plan (in string)
     *
     * @generated from field: string start_date_end = 31;
     */
    startDateEnd: string;
    /**
     * The exact start date of the plan (in string)
     *
     * @generated from field: string start_date_exact = 32;
     */
    startDateExact: string;
    /**
     * The min end date of the plan (in string)
     *
     * @generated from field: string end_date_start = 36;
     */
    endDateStart: string;
    /**
     * The max end date of the plan (in string)
     *
     * @generated from field: string end_date_end = 37;
     */
    endDateEnd: string;
    /**
     * The exact end date of the plan (in string)
     *
     * @generated from field: string end_date_exact = 38;
     */
    endDateExact: string;
    constructor(data?: PartialMessage<GoalsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceCountReq;
    static equals(a: GoalsServiceCountReq | PlainMessage<GoalsServiceCountReq> | undefined, b: GoalsServiceCountReq | PlainMessage<GoalsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.GoalsServiceSearchAllReq
 */
export declare class GoalsServiceSearchAllReq extends Message<GoalsServiceSearchAllReq> {
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
     * @generated from field: Scailo.GOAL_SORT_KEY sort_key = 5;
     */
    sortKey: GOAL_SORT_KEY;
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
     * The associated user ID
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<GoalsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GoalsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceSearchAllReq;
    static equals(a: GoalsServiceSearchAllReq | PlainMessage<GoalsServiceSearchAllReq> | undefined, b: GoalsServiceSearchAllReq | PlainMessage<GoalsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=goals.scailo_pb.d.ts.map
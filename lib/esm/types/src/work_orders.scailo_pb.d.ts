import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a work order can be added
 *
 * @generated from enum Scailo.WORK_ORDER_REF_FROM
 */
export declare enum WORK_ORDER_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: WORK_ORDER_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    WORK_ORDER_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the work order originated from a sales order
     *
     * @generated from enum value: WORK_ORDER_REF_FROM_SALES_ORDER = 1;
     */
    WORK_ORDER_REF_FROM_SALES_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.WORK_ORDER_SORT_KEY
 */
export declare enum WORK_ORDER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    WORK_ORDER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_CREATED_AT = 1;
     */
    WORK_ORDER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_MODIFIED_AT = 2;
     */
    WORK_ORDER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_APPROVED_ON = 3;
     */
    WORK_ORDER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_APPROVED_BY = 4;
     */
    WORK_ORDER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    WORK_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_COMPLETED_ON = 6;
     */
    WORK_ORDER_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_REFERENCE_ID = 10;
     */
    WORK_ORDER_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    WORK_ORDER_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_LOCATION_ID = 12;
     */
    WORK_ORDER_SORT_KEY_LOCATION_ID = 12,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_AMENDMENT_COUNT = 40;
     */
    WORK_ORDER_SORT_KEY_AMENDMENT_COUNT = 40
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.WORK_ORDER_ITEM_SORT_KEY
 */
export declare enum WORK_ORDER_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    WORK_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    WORK_ORDER_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    WORK_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    WORK_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    WORK_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    WORK_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    WORK_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the quantity
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_QUANTITY = 11;
     */
    WORK_ORDER_ITEM_SORT_KEY_QUANTITY = 11,
    /**
     * Fetch ordered results by the delivery date
     *
     * @generated from enum value: WORK_ORDER_ITEM_SORT_KEY_DELIVERY_DATE = 12;
     */
    WORK_ORDER_ITEM_SORT_KEY_DELIVERY_DATE = 12
}
/**
 *
 * Describes the applicable statuses of work order items
 *
 * @generated from enum Scailo.WORK_ORDER_ITEM_STATUS
 */
export declare enum WORK_ORDER_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: WORK_ORDER_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    WORK_ORDER_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the work order items must have been approved
     *
     * @generated from enum value: WORK_ORDER_ITEM_STATUS_APPROVED = 1;
     */
    WORK_ORDER_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the work order items must be waiting for approval
     *
     * @generated from enum value: WORK_ORDER_ITEM_STATUS_UNAPPROVED = 2;
     */
    WORK_ORDER_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.WorkOrdersServiceCreateRequest
 */
export declare class WorkOrdersServiceCreateRequest extends Message<WorkOrdersServiceCreateRequest> {
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
     *
     * @mandatory
     *
     * @description A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.
     *
     * @example "ABS-2023-001"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.WORK_ORDER_REF_FROM ref_from = 12;
     */
    refFrom: WORK_ORDER_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
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
    constructor(data?: PartialMessage<WorkOrdersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceCreateRequest;
    static equals(a: WorkOrdersServiceCreateRequest | PlainMessage<WorkOrdersServiceCreateRequest> | undefined, b: WorkOrdersServiceCreateRequest | PlainMessage<WorkOrdersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.WorkOrdersServiceUpdateRequest
 */
export declare class WorkOrdersServiceUpdateRequest extends Message<WorkOrdersServiceUpdateRequest> {
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
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
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
     *
     * @mandatory
     *
     * @description Updated alphanumeric reference ID. Must contain at least 1 character.
     *
     * @example "ABS-2023-001-REV"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
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
    constructor(data?: PartialMessage<WorkOrdersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceUpdateRequest;
    static equals(a: WorkOrdersServiceUpdateRequest | PlainMessage<WorkOrdersServiceUpdateRequest> | undefined, b: WorkOrdersServiceUpdateRequest | PlainMessage<WorkOrdersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.WorkOrdersServiceAutofillRequest
 */
export declare class WorkOrdersServiceAutofillRequest extends Message<WorkOrdersServiceAutofillRequest> {
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
     * The UUID of the record that needs to be updated
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * Denotes if all the equation dependencies (if applicable) should also be automatically added to the work order
     *
     * @generated from field: bool populate_using_equation_dependencies = 3;
     */
    populateUsingEquationDependencies: boolean;
    constructor(data?: PartialMessage<WorkOrdersServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceAutofillRequest;
    static equals(a: WorkOrdersServiceAutofillRequest | PlainMessage<WorkOrdersServiceAutofillRequest> | undefined, b: WorkOrdersServiceAutofillRequest | PlainMessage<WorkOrdersServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.WorkOrderAncillaryParameters
 */
export declare class WorkOrderAncillaryParameters extends Message<WorkOrderAncillaryParameters> {
    /**
     * The UUID of the ref_id (the UUID of the associated ref_id)
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    /**
     * The UUID of the location (the UUID of the associated location_id)
     *
     * @generated from field: string location_uuid = 215;
     */
    locationUuid: string;
    constructor(data?: PartialMessage<WorkOrderAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderAncillaryParameters;
    static equals(a: WorkOrderAncillaryParameters | PlainMessage<WorkOrderAncillaryParameters> | undefined, b: WorkOrderAncillaryParameters | PlainMessage<WorkOrderAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.WorkOrder
 */
export declare class WorkOrder extends Message<WorkOrder> {
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
     * @description UNIX timestamp of when the record transitioned to the COMPLETED state.
     *
     * @example 1698400000
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
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
     *
     * @description The user-provided reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     *
     * @description The system-generated immutable reference number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.WORK_ORDER_REF_FROM ref_from = 12;
     */
    refFrom: WORK_ORDER_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     *
     * @description The number of times that this record has been amended after approval.
     *
     * @example 5
     *
     * @generated from field: uint64 amendment_count = 40;
     */
    amendmentCount: bigint;
    /**
     * The list of associated work order items
     *
     * @generated from field: repeated Scailo.WorkOrderItem list = 20;
     */
    list: WorkOrderItem[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<WorkOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrder;
    static equals(a: WorkOrder | PlainMessage<WorkOrder> | undefined, b: WorkOrder | PlainMessage<WorkOrder> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a work order
 *
 * @generated from message Scailo.WorkOrdersServiceItemCreateRequest
 */
export declare class WorkOrdersServiceItemCreateRequest extends Message<WorkOrdersServiceItemCreateRequest> {
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
     * Stores the work order ID
     *
     * @generated from field: uint64 work_order_id = 10;
     */
    workOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    constructor(data?: PartialMessage<WorkOrdersServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceItemCreateRequest;
    static equals(a: WorkOrdersServiceItemCreateRequest | PlainMessage<WorkOrdersServiceItemCreateRequest> | undefined, b: WorkOrdersServiceItemCreateRequest | PlainMessage<WorkOrdersServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a work order
 *
 * @generated from message Scailo.WorkOrdersServiceItemUpdateRequest
 */
export declare class WorkOrdersServiceItemUpdateRequest extends Message<WorkOrdersServiceItemUpdateRequest> {
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
     * The ID of the record
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    constructor(data?: PartialMessage<WorkOrdersServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceItemUpdateRequest;
    static equals(a: WorkOrdersServiceItemUpdateRequest | PlainMessage<WorkOrdersServiceItemUpdateRequest> | undefined, b: WorkOrdersServiceItemUpdateRequest | PlainMessage<WorkOrdersServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a work order
 *
 * @generated from message Scailo.WorkOrderItem
 */
export declare class WorkOrderItem extends Message<WorkOrderItem> {
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
     * @description A boolean flag indicating whether this specific record requires further administrative approval.
     *
     * @example false
     *
     * @format Boolean true or false.
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
     * Stores the work order ID
     *
     * @generated from field: uint64 work_order_id = 10;
     */
    workOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    constructor(data?: PartialMessage<WorkOrderItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderItem;
    static equals(a: WorkOrderItem | PlainMessage<WorkOrderItem> | undefined, b: WorkOrderItem | PlainMessage<WorkOrderItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of work orders
 *
 * @generated from message Scailo.WorkOrdersList
 */
export declare class WorkOrdersList extends Message<WorkOrdersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.WorkOrder list = 1;
     */
    list: WorkOrder[];
    constructor(data?: PartialMessage<WorkOrdersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersList;
    static equals(a: WorkOrdersList | PlainMessage<WorkOrdersList> | undefined, b: WorkOrdersList | PlainMessage<WorkOrdersList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of work order items
 *
 * @generated from message Scailo.WorkOrdersItemsList
 */
export declare class WorkOrdersItemsList extends Message<WorkOrdersItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.WorkOrderItem list = 1;
     */
    list: WorkOrderItem[];
    constructor(data?: PartialMessage<WorkOrdersItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersItemsList;
    static equals(a: WorkOrdersItemsList | PlainMessage<WorkOrdersItemsList> | undefined, b: WorkOrdersItemsList | PlainMessage<WorkOrdersItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.WorkOrderItemHistoryRequest
 */
export declare class WorkOrderItemHistoryRequest extends Message<WorkOrderItemHistoryRequest> {
    /**
     * Stores the work order ID
     *
     * @generated from field: uint64 work_order_id = 10;
     */
    workOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<WorkOrderItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderItemHistoryRequest;
    static equals(a: WorkOrderItemHistoryRequest | PlainMessage<WorkOrderItemHistoryRequest> | undefined, b: WorkOrderItemHistoryRequest | PlainMessage<WorkOrderItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective work order item
 *
 * @generated from message Scailo.WorkOrderItemProspectiveInfoRequest
 */
export declare class WorkOrderItemProspectiveInfoRequest extends Message<WorkOrderItemProspectiveInfoRequest> {
    /**
     * Stores the work order ID
     *
     * @generated from field: uint64 work_order_id = 10;
     */
    workOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<WorkOrderItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderItemProspectiveInfoRequest;
    static equals(a: WorkOrderItemProspectiveInfoRequest | PlainMessage<WorkOrderItemProspectiveInfoRequest> | undefined, b: WorkOrderItemProspectiveInfoRequest | PlainMessage<WorkOrderItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.WorkOrdersServicePaginationReq
 */
export declare class WorkOrdersServicePaginationReq extends Message<WorkOrdersServicePaginationReq> {
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
     * @generated from field: Scailo.WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: WORK_ORDER_SORT_KEY;
    /**
     * The status of this work order
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<WorkOrdersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginationReq;
    static equals(a: WorkOrdersServicePaginationReq | PlainMessage<WorkOrdersServicePaginationReq> | undefined, b: WorkOrdersServicePaginationReq | PlainMessage<WorkOrdersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.WorkOrdersServicePaginationResponse
 */
export declare class WorkOrdersServicePaginationResponse extends Message<WorkOrdersServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.WorkOrder payload = 4;
     */
    payload: WorkOrder[];
    constructor(data?: PartialMessage<WorkOrdersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginationResponse;
    static equals(a: WorkOrdersServicePaginationResponse | PlainMessage<WorkOrdersServicePaginationResponse> | undefined, b: WorkOrdersServicePaginationResponse | PlainMessage<WorkOrdersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.WorkOrdersServiceFilterReq
 */
export declare class WorkOrdersServiceFilterReq extends Message<WorkOrdersServiceFilterReq> {
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
     * @generated from field: Scailo.WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: WORK_ORDER_SORT_KEY;
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
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
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
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
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
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
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
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The exact delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_exact = 17;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_start = 18;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_end = 19;
     */
    deliveryDateEnd: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the system-generated ref number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.WORK_ORDER_REF_FROM ref_from = 22;
     */
    refFrom: WORK_ORDER_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated project of the linked sales order
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
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
     * @generated from field: bool include_form_data = 501;
     */
    includeFormData: boolean;
    constructor(data?: PartialMessage<WorkOrdersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceFilterReq;
    static equals(a: WorkOrdersServiceFilterReq | PlainMessage<WorkOrdersServiceFilterReq> | undefined, b: WorkOrdersServiceFilterReq | PlainMessage<WorkOrdersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.WorkOrdersServiceCountReq
 */
export declare class WorkOrdersServiceCountReq extends Message<WorkOrdersServiceCountReq> {
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
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
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
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
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
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
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
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The exact delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_exact = 17;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_start = 18;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_end = 19;
     */
    deliveryDateEnd: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the system-generated ref number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.WORK_ORDER_REF_FROM ref_from = 22;
     */
    refFrom: WORK_ORDER_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 40;
     */
    familyId: bigint;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated project of the linked sales order
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<WorkOrdersServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceCountReq;
    static equals(a: WorkOrdersServiceCountReq | PlainMessage<WorkOrdersServiceCountReq> | undefined, b: WorkOrdersServiceCountReq | PlainMessage<WorkOrdersServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.WorkOrdersServiceSearchAllReq
 */
export declare class WorkOrdersServiceSearchAllReq extends Message<WorkOrdersServiceSearchAllReq> {
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
     * @generated from field: Scailo.WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: WORK_ORDER_SORT_KEY;
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
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @mandatory
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.WORK_ORDER_REF_FROM ref_from = 22;
     */
    refFrom: WORK_ORDER_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * Sales Order related filters
     * The associated consignee client ID of the linked sales order
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    constructor(data?: PartialMessage<WorkOrdersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceSearchAllReq;
    static equals(a: WorkOrdersServiceSearchAllReq | PlainMessage<WorkOrdersServiceSearchAllReq> | undefined, b: WorkOrdersServiceSearchAllReq | PlainMessage<WorkOrdersServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.WorkOrderItemsSearchRequest
 */
export declare class WorkOrderItemsSearchRequest extends Message<WorkOrderItemsSearchRequest> {
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
     * @generated from field: Scailo.WORK_ORDER_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: WORK_ORDER_ITEM_SORT_KEY;
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
     * The status of the items
     *
     * @generated from field: Scailo.WORK_ORDER_ITEM_STATUS status = 7;
     */
    status: WORK_ORDER_ITEM_STATUS;
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
     * The ID of the work order
     *
     * @generated from field: uint64 work_order_id = 20;
     */
    workOrderId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The exact delivery date of the item in the work order
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the work order
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the work order
     *
     * @generated from field: string delivery_date_end = 30;
     */
    deliveryDateEnd: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    /**
     *
     * @optional
     *
     * @description Filter line items by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).
     *
     * @example 1051
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 buyer_client_id = 200;
     */
    buyerClientId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items by the unique internal identifier of the sales order.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sales_order_id = 210;
     */
    salesOrderId: bigint;
    constructor(data?: PartialMessage<WorkOrderItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderItemsSearchRequest;
    static equals(a: WorkOrderItemsSearchRequest | PlainMessage<WorkOrderItemsSearchRequest> | undefined, b: WorkOrderItemsSearchRequest | PlainMessage<WorkOrderItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.WorkOrdersServicePaginatedItemsResponse
 */
export declare class WorkOrdersServicePaginatedItemsResponse extends Message<WorkOrdersServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.WorkOrderItem payload = 4;
     */
    payload: WorkOrderItem[];
    constructor(data?: PartialMessage<WorkOrdersServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrdersServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginatedItemsResponse;
    static equals(a: WorkOrdersServicePaginatedItemsResponse | PlainMessage<WorkOrdersServicePaginatedItemsResponse> | undefined, b: WorkOrdersServicePaginatedItemsResponse | PlainMessage<WorkOrdersServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the requirement statistics of the work order
 *
 * @generated from message Scailo.WorkOrderRequirementStatistics
 */
export declare class WorkOrderRequirementStatistics extends Message<WorkOrderRequirementStatistics> {
    /**
     * Stores the ID of the family
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     * Stores the sales order quantity
     *
     * @generated from field: uint64 sales_order_quantity = 2;
     */
    salesOrderQuantity: bigint;
    /**
     * Stores the work order quantity
     *
     * @generated from field: uint64 work_order_quantity = 3;
     */
    workOrderQuantity: bigint;
    constructor(data?: PartialMessage<WorkOrderRequirementStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderRequirementStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderRequirementStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderRequirementStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderRequirementStatistics;
    static equals(a: WorkOrderRequirementStatistics | PlainMessage<WorkOrderRequirementStatistics> | undefined, b: WorkOrderRequirementStatistics | PlainMessage<WorkOrderRequirementStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of requirement statistics of the work order
 *
 * @generated from message Scailo.WorkOrderRequirementStatisticsList
 */
export declare class WorkOrderRequirementStatisticsList extends Message<WorkOrderRequirementStatisticsList> {
    /**
     * @generated from field: repeated Scailo.WorkOrderRequirementStatistics list = 1;
     */
    list: WorkOrderRequirementStatistics[];
    constructor(data?: PartialMessage<WorkOrderRequirementStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderRequirementStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderRequirementStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderRequirementStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderRequirementStatisticsList;
    static equals(a: WorkOrderRequirementStatisticsList | PlainMessage<WorkOrderRequirementStatisticsList> | undefined, b: WorkOrderRequirementStatisticsList | PlainMessage<WorkOrderRequirementStatisticsList> | undefined): boolean;
}
/**
 *
 * Describes the production statistics of the work order
 *
 * @generated from message Scailo.WorkOrderProductionStatistics
 */
export declare class WorkOrderProductionStatistics extends Message<WorkOrderProductionStatistics> {
    /**
     * Stores the ID of the family
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     * Stores the production plan quantity
     *
     * @generated from field: uint64 production_plan_quantity = 2;
     */
    productionPlanQuantity: bigint;
    /**
     * Stores the work order quantity
     *
     * @generated from field: uint64 work_order_quantity = 3;
     */
    workOrderQuantity: bigint;
    /**
     * Stores the produced quantity
     *
     * @generated from field: uint64 produced_quantity = 4;
     */
    producedQuantity: bigint;
    constructor(data?: PartialMessage<WorkOrderProductionStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderProductionStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderProductionStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderProductionStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderProductionStatistics;
    static equals(a: WorkOrderProductionStatistics | PlainMessage<WorkOrderProductionStatistics> | undefined, b: WorkOrderProductionStatistics | PlainMessage<WorkOrderProductionStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of production statistics of the work order
 *
 * @generated from message Scailo.WorkOrderProductionStatisticsList
 */
export declare class WorkOrderProductionStatisticsList extends Message<WorkOrderProductionStatisticsList> {
    /**
     * @generated from field: repeated Scailo.WorkOrderProductionStatistics list = 1;
     */
    list: WorkOrderProductionStatistics[];
    constructor(data?: PartialMessage<WorkOrderProductionStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkOrderProductionStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderProductionStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderProductionStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderProductionStatisticsList;
    static equals(a: WorkOrderProductionStatisticsList | PlainMessage<WorkOrderProductionStatisticsList> | undefined, b: WorkOrderProductionStatisticsList | PlainMessage<WorkOrderProductionStatisticsList> | undefined): boolean;
}
//# sourceMappingURL=work_orders.scailo_pb.d.ts.map
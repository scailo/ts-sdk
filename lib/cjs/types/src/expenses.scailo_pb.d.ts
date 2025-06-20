import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.EXPENSE_ITEM_SORT_KEY
 */
export declare enum EXPENSE_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EXPENSE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    EXPENSE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    EXPENSE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    EXPENSE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    EXPENSE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EXPENSE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the ledger ID
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_LEDGER_ID = 10;
     */
    EXPENSE_ITEM_SORT_KEY_LEDGER_ID = 10,
    /**
     * Fetch ordered results by the tax group ID
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_TAX_GROUP_ID = 11;
     */
    EXPENSE_ITEM_SORT_KEY_TAX_GROUP_ID = 11,
    /**
     * Fetch ordered results by the amount
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_AMOUNT = 12;
     */
    EXPENSE_ITEM_SORT_KEY_AMOUNT = 12,
    /**
     * Fetch ordered results by the date of expense
     *
     * @generated from enum value: EXPENSE_ITEM_SORT_KEY_DATE_OF_EXPENSE = 13;
     */
    EXPENSE_ITEM_SORT_KEY_DATE_OF_EXPENSE = 13
}
/**
 *
 * Describes the applicable statuses of expense items
 *
 * @generated from enum Scailo.EXPENSE_ITEM_STATUS
 */
export declare enum EXPENSE_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: EXPENSE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    EXPENSE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the expense items must have been approved
     *
     * @generated from enum value: EXPENSE_ITEM_STATUS_APPROVED = 1;
     */
    EXPENSE_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the expense items must be waiting for approval
     *
     * @generated from enum value: EXPENSE_ITEM_STATUS_UNAPPROVED = 2;
     */
    EXPENSE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.EXPENSE_SORT_KEY
 */
export declare enum EXPENSE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: EXPENSE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EXPENSE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: EXPENSE_SORT_KEY_CREATED_AT = 1;
     */
    EXPENSE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: EXPENSE_SORT_KEY_MODIFIED_AT = 2;
     */
    EXPENSE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: EXPENSE_SORT_KEY_APPROVED_ON = 3;
     */
    EXPENSE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: EXPENSE_SORT_KEY_APPROVED_BY = 4;
     */
    EXPENSE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: EXPENSE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EXPENSE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: EXPENSE_SORT_KEY_COMPLETED_ON = 6;
     */
    EXPENSE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: EXPENSE_SORT_KEY_REFERENCE_ID = 10;
     */
    EXPENSE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: EXPENSE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    EXPENSE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the currency ID
     *
     * @generated from enum value: EXPENSE_SORT_KEY_CURRENCY_ID = 12;
     */
    EXPENSE_SORT_KEY_CURRENCY_ID = 12,
    /**
     * Fetch ordered results by the user ID who paid for the expense
     *
     * @generated from enum value: EXPENSE_SORT_KEY_PAID_BY_USER_ID = 13;
     */
    EXPENSE_SORT_KEY_PAID_BY_USER_ID = 13
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ExpensesServiceCreateRequest
 */
export declare class ExpensesServiceCreateRequest extends Message<ExpensesServiceCreateRequest> {
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
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the expense
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The reference on which the expense has been created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The ID of the associated reference (can be 0 in case ref_from is "not-applicable")
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The ID of the user who paid for this expense (if paid by organization, then this will be 0)
     *
     * @generated from field: uint64 paid_by_user_id = 15;
     */
    paidByUserId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ExpensesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServiceCreateRequest;
    static equals(a: ExpensesServiceCreateRequest | PlainMessage<ExpensesServiceCreateRequest> | undefined, b: ExpensesServiceCreateRequest | PlainMessage<ExpensesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ExpensesServiceUpdateRequest
 */
export declare class ExpensesServiceUpdateRequest extends Message<ExpensesServiceUpdateRequest> {
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
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the expense
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The reference on which the expense has been created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The ID of the associated reference (can be 0 in case ref_from is "not-applicable")
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The ID of the user who paid for this expense (if paid by organization, then this will be 0)
     *
     * @generated from field: uint64 paid_by_user_id = 15;
     */
    paidByUserId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ExpensesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServiceUpdateRequest;
    static equals(a: ExpensesServiceUpdateRequest | PlainMessage<ExpensesServiceUpdateRequest> | undefined, b: ExpensesServiceUpdateRequest | PlainMessage<ExpensesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Expense
 */
export declare class Expense extends Message<Expense> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this expense
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
     * The status of this expense
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this expense
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this expense was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the expense
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
     * The reference on which the expense has been created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The ID of the associated reference (can be 0 in case ref_from is "not-applicable")
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: uint64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The ID of the user who paid for this expense (if paid by organization, then this will be 0)
     *
     * @generated from field: uint64 paid_by_user_id = 15;
     */
    paidByUserId: bigint;
    /**
     * The list of associated expense items
     *
     * @generated from field: repeated Scailo.ExpenseItem list = 20;
     */
    list: ExpenseItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    /**
     * The total amount of the expense
     *
     * @generated from field: double total_amount = 40;
     */
    totalAmount: number;
    constructor(data?: PartialMessage<Expense>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Expense";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Expense;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Expense;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Expense;
    static equals(a: Expense | PlainMessage<Expense> | undefined, b: Expense | PlainMessage<Expense> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a expense
 *
 * @generated from message Scailo.ExpensesServiceItemCreateRequest
 */
export declare class ExpensesServiceItemCreateRequest extends Message<ExpensesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the expense ID
     *
     * @generated from field: uint64 expense_id = 10;
     */
    expenseId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The associated bill number
     *
     * @generated from field: string bill_no = 12;
     */
    billNo: string;
    /**
     * The description of the item
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The ID of the associated ledger account (can be 0 temporarily)
     *
     * @generated from field: uint64 ledger_id = 15;
     */
    ledgerId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The total amount of this item (in cents)
     *
     * @generated from field: uint64 amount = 17;
     */
    amount: bigint;
    /**
     * The date on which this expense was incurred
     *
     * @generated from field: string date_of_expense = 18;
     */
    dateOfExpense: string;
    constructor(data?: PartialMessage<ExpensesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServiceItemCreateRequest;
    static equals(a: ExpensesServiceItemCreateRequest | PlainMessage<ExpensesServiceItemCreateRequest> | undefined, b: ExpensesServiceItemCreateRequest | PlainMessage<ExpensesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a expense
 *
 * @generated from message Scailo.ExpensesServiceItemUpdateRequest
 */
export declare class ExpensesServiceItemUpdateRequest extends Message<ExpensesServiceItemUpdateRequest> {
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
     * The associated bill number
     *
     * @generated from field: string bill_no = 12;
     */
    billNo: string;
    /**
     * The description of the item
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The ID of the associated ledger account (can be 0 temporarily)
     *
     * @generated from field: uint64 ledger_id = 15;
     */
    ledgerId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The total amount of this item (in cents)
     *
     * @generated from field: uint64 amount = 17;
     */
    amount: bigint;
    /**
     * The date on which this expense was incurred
     *
     * @generated from field: string date_of_expense = 18;
     */
    dateOfExpense: string;
    constructor(data?: PartialMessage<ExpensesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServiceItemUpdateRequest;
    static equals(a: ExpensesServiceItemUpdateRequest | PlainMessage<ExpensesServiceItemUpdateRequest> | undefined, b: ExpensesServiceItemUpdateRequest | PlainMessage<ExpensesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a expense
 *
 * @generated from message Scailo.ExpenseItem
 */
export declare class ExpenseItem extends Message<ExpenseItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this expense
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
     * Stores the expense ID
     *
     * @generated from field: uint64 expense_id = 10;
     */
    expenseId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The associated bill number
     *
     * @generated from field: string bill_no = 12;
     */
    billNo: string;
    /**
     * The description of the item
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The ID of the associated ledger account (can be 0 temporarily)
     *
     * @generated from field: uint64 ledger_id = 15;
     */
    ledgerId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The total amount of this item (in cents)
     *
     * @generated from field: uint64 amount = 17;
     */
    amount: bigint;
    /**
     * The date on which this expense was incurred
     *
     * @generated from field: string date_of_expense = 18;
     */
    dateOfExpense: string;
    constructor(data?: PartialMessage<ExpenseItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpenseItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpenseItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpenseItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpenseItem;
    static equals(a: ExpenseItem | PlainMessage<ExpenseItem> | undefined, b: ExpenseItem | PlainMessage<ExpenseItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of expenses
 *
 * @generated from message Scailo.ExpensesList
 */
export declare class ExpensesList extends Message<ExpensesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Expense list = 1;
     */
    list: Expense[];
    constructor(data?: PartialMessage<ExpensesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesList;
    static equals(a: ExpensesList | PlainMessage<ExpensesList> | undefined, b: ExpensesList | PlainMessage<ExpensesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of expense items
 *
 * @generated from message Scailo.ExpensesItemsList
 */
export declare class ExpensesItemsList extends Message<ExpensesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ExpenseItem list = 1;
     */
    list: ExpenseItem[];
    constructor(data?: PartialMessage<ExpensesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesItemsList;
    static equals(a: ExpensesItemsList | PlainMessage<ExpensesItemsList> | undefined, b: ExpensesItemsList | PlainMessage<ExpensesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.ExpenseItemHistoryRequest
 */
export declare class ExpenseItemHistoryRequest extends Message<ExpenseItemHistoryRequest> {
    /**
     * Stores the expense ID
     *
     * @generated from field: uint64 expense_id = 10;
     */
    expenseId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<ExpenseItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpenseItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpenseItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpenseItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpenseItemHistoryRequest;
    static equals(a: ExpenseItemHistoryRequest | PlainMessage<ExpenseItemHistoryRequest> | undefined, b: ExpenseItemHistoryRequest | PlainMessage<ExpenseItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.ExpenseItemsSearchRequest
 */
export declare class ExpenseItemsSearchRequest extends Message<ExpenseItemsSearchRequest> {
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
     * @generated from field: Scailo.EXPENSE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: EXPENSE_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.EXPENSE_ITEM_STATUS status = 7;
     */
    status: EXPENSE_ITEM_STATUS;
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
     * Stores the expense ID
     *
     * @generated from field: uint64 expense_id = 20;
     */
    expenseId: bigint;
    /**
     * The ID of the associated ledger account
     *
     * @generated from field: uint64 ledger_id = 25;
     */
    ledgerId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: uint64 tax_group_id = 26;
     */
    taxGroupId: bigint;
    /**
     * The date on which this expense was incurred
     *
     * @generated from field: string date_of_expense = 28;
     */
    dateOfExpense: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<ExpenseItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpenseItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpenseItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpenseItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpenseItemsSearchRequest;
    static equals(a: ExpenseItemsSearchRequest | PlainMessage<ExpenseItemsSearchRequest> | undefined, b: ExpenseItemsSearchRequest | PlainMessage<ExpenseItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.ExpensesServicePaginatedItemsResponse
 */
export declare class ExpensesServicePaginatedItemsResponse extends Message<ExpensesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.ExpenseItem payload = 4;
     */
    payload: ExpenseItem[];
    constructor(data?: PartialMessage<ExpensesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServicePaginatedItemsResponse;
    static equals(a: ExpensesServicePaginatedItemsResponse | PlainMessage<ExpensesServicePaginatedItemsResponse> | undefined, b: ExpensesServicePaginatedItemsResponse | PlainMessage<ExpensesServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ExpensesServicePaginationReq
 */
export declare class ExpensesServicePaginationReq extends Message<ExpensesServicePaginationReq> {
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
     * @generated from field: Scailo.EXPENSE_SORT_KEY sort_key = 5;
     */
    sortKey: EXPENSE_SORT_KEY;
    /**
     * The status of this expense
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ExpensesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServicePaginationReq;
    static equals(a: ExpensesServicePaginationReq | PlainMessage<ExpensesServicePaginationReq> | undefined, b: ExpensesServicePaginationReq | PlainMessage<ExpensesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ExpensesServicePaginationResponse
 */
export declare class ExpensesServicePaginationResponse extends Message<ExpensesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Expense payload = 4;
     */
    payload: Expense[];
    constructor(data?: PartialMessage<ExpensesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServicePaginationResponse;
    static equals(a: ExpensesServicePaginationResponse | PlainMessage<ExpensesServicePaginationResponse> | undefined, b: ExpensesServicePaginationResponse | PlainMessage<ExpensesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ExpensesServiceFilterReq
 */
export declare class ExpensesServiceFilterReq extends Message<ExpensesServiceFilterReq> {
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
     * @generated from field: Scailo.EXPENSE_SORT_KEY sort_key = 5;
     */
    sortKey: EXPENSE_SORT_KEY;
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
     * The status of this expense
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
     * The reference ID of the expense
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
     * The currency ID of the expense
     *
     * @generated from field: uint64 currency_id = 22;
     */
    currencyId: bigint;
    /**
     * The ID of the user who paid for this expense (if paid by organization, then this will be 0)
     *
     * @generated from field: uint64 paid_by_user_id = 23;
     */
    paidByUserId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 30;
     */
    projectId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ExpensesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServiceFilterReq;
    static equals(a: ExpensesServiceFilterReq | PlainMessage<ExpensesServiceFilterReq> | undefined, b: ExpensesServiceFilterReq | PlainMessage<ExpensesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ExpensesServiceCountReq
 */
export declare class ExpensesServiceCountReq extends Message<ExpensesServiceCountReq> {
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
     * The status of this expense
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
     * The reference ID of the expense
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
     * The currency ID of the expense
     *
     * @generated from field: uint64 currency_id = 22;
     */
    currencyId: bigint;
    /**
     * The ID of the user who paid for this expense (if paid by organization, then this will be 0)
     *
     * @generated from field: uint64 paid_by_user_id = 23;
     */
    paidByUserId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 30;
     */
    projectId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ExpensesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServiceCountReq;
    static equals(a: ExpensesServiceCountReq | PlainMessage<ExpensesServiceCountReq> | undefined, b: ExpensesServiceCountReq | PlainMessage<ExpensesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ExpensesServiceSearchAllReq
 */
export declare class ExpensesServiceSearchAllReq extends Message<ExpensesServiceSearchAllReq> {
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
     * @generated from field: Scailo.EXPENSE_SORT_KEY sort_key = 5;
     */
    sortKey: EXPENSE_SORT_KEY;
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
    constructor(data?: PartialMessage<ExpensesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ExpensesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpensesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpensesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpensesServiceSearchAllReq;
    static equals(a: ExpensesServiceSearchAllReq | PlainMessage<ExpensesServiceSearchAllReq> | undefined, b: ExpensesServiceSearchAllReq | PlainMessage<ExpensesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=expenses.scailo_pb.d.ts.map
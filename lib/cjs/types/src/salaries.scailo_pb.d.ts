import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SALARY_SORT_KEY
 */
export declare enum SALARY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALARY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALARY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALARY_SORT_KEY_CREATED_AT = 1;
     */
    SALARY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALARY_SORT_KEY_MODIFIED_AT = 2;
     */
    SALARY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALARY_SORT_KEY_APPROVED_ON = 3;
     */
    SALARY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALARY_SORT_KEY_APPROVED_BY = 4;
     */
    SALARY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALARY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALARY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SALARY_SORT_KEY_COMPLETED_ON = 6;
     */
    SALARY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SALARY_SORT_KEY_REFERENCE_ID = 10;
     */
    SALARY_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SALARY_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALARY_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the employee ID
     *
     * @generated from enum value: SALARY_SORT_KEY_EMPLOYEE_ID = 12;
     */
    SALARY_SORT_KEY_EMPLOYEE_ID = 12,
    /**
     * Fetch ordered results by the bank account ID
     *
     * @generated from enum value: SALARY_SORT_KEY_BANK_ACCOUNT_ID = 13;
     */
    SALARY_SORT_KEY_BANK_ACCOUNT_ID = 13,
    /**
     * Fetch ordered results by the currency ID
     *
     * @generated from enum value: SALARY_SORT_KEY_CURRENCY_ID = 14;
     */
    SALARY_SORT_KEY_CURRENCY_ID = 14,
    /**
     * Fetch ordered results by the payroll group ID
     *
     * @generated from enum value: SALARY_SORT_KEY_PAYROLL_GROUP_ID = 15;
     */
    SALARY_SORT_KEY_PAYROLL_GROUP_ID = 15,
    /**
     * Fetch ordered results by the tax group ID
     *
     * @generated from enum value: SALARY_SORT_KEY_TAX_GROUP_ID = 16;
     */
    SALARY_SORT_KEY_TAX_GROUP_ID = 16
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.SalariesServiceCreateRequest
 */
export declare class SalariesServiceCreateRequest extends Message<SalariesServiceCreateRequest> {
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
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the salary
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the associated employee
     *
     * @generated from field: int64 employee_id = 12;
     */
    employeeId: bigint;
    /**
     * The date from which the salary is being calculated
     *
     * @generated from field: string from_date = 13;
     */
    fromDate: string;
    /**
     * The date until which the salary is being calculated
     *
     * @generated from field: string to_date = 14;
     */
    toDate: string;
    /**
     * The ID of the bank account (belonging to the organization) from which the salary will be debited
     *
     * @generated from field: int64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: int64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The basic pay amount
     *
     * @generated from field: int64 basic_pay_amount = 17;
     */
    basicPayAmount: bigint;
    /**
     * The unit of the basic pay
     *
     * @generated from field: int64 basic_pay_uom_id = 18;
     */
    basicPayUomId: bigint;
    /**
     * The number of attendance records being considered
     *
     * @generated from field: int64 applicable_attendance_records_count = 19;
     */
    applicableAttendanceRecordsCount: bigint;
    /**
     * The unit of attendance
     *
     * @generated from field: int64 applicable_attendance_uom_id = 20;
     */
    applicableAttendanceUomId: bigint;
    /**
     * The numerator for the conversion factor from attendance unit to basic pay unit
     *
     * @generated from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_numerator = 21;
     */
    cfFromAttendanceUomIdToBasicPayUomIdNumerator: bigint;
    /**
     * The denominator for the conversion factor from attendance unit to basic pay unit
     *
     * @generated from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_denominator = 22;
     */
    cfFromAttendanceUomIdToBasicPayUomIdDenominator: bigint;
    /**
     * The ID of the associated payroll group
     *
     * @generated from field: int64 payroll_group_id = 23;
     */
    payrollGroupId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: int64 tax_group_id = 24;
     */
    taxGroupId: bigint;
    /**
     * Any additional description
     *
     * @generated from field: string description = 25;
     */
    description: string;
    /**
     * Stores any roundoff amount
     *
     * @generated from field: int64 round_off = 30;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalariesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceCreateRequest;
    static equals(a: SalariesServiceCreateRequest | PlainMessage<SalariesServiceCreateRequest> | undefined, b: SalariesServiceCreateRequest | PlainMessage<SalariesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.SalariesServiceUpdateRequest
 */
export declare class SalariesServiceUpdateRequest extends Message<SalariesServiceUpdateRequest> {
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
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the salary
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The date from which the salary is being calculated
     *
     * @generated from field: string from_date = 13;
     */
    fromDate: string;
    /**
     * The date until which the salary is being calculated
     *
     * @generated from field: string to_date = 14;
     */
    toDate: string;
    /**
     * The ID of the bank account (belonging to the organization) from which the salary will be debited
     *
     * @generated from field: int64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: int64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The basic pay amount
     *
     * @generated from field: int64 basic_pay_amount = 17;
     */
    basicPayAmount: bigint;
    /**
     * The unit of the basic pay
     *
     * @generated from field: int64 basic_pay_uom_id = 18;
     */
    basicPayUomId: bigint;
    /**
     * The number of attendance records being considered
     *
     * @generated from field: int64 applicable_attendance_records_count = 19;
     */
    applicableAttendanceRecordsCount: bigint;
    /**
     * The unit of attendance
     *
     * @generated from field: int64 applicable_attendance_uom_id = 20;
     */
    applicableAttendanceUomId: bigint;
    /**
     * The numerator for the conversion factor from attendance unit to basic pay unit
     *
     * @generated from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_numerator = 21;
     */
    cfFromAttendanceUomIdToBasicPayUomIdNumerator: bigint;
    /**
     * The denominator for the conversion factor from attendance unit to basic pay unit
     *
     * @generated from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_denominator = 22;
     */
    cfFromAttendanceUomIdToBasicPayUomIdDenominator: bigint;
    /**
     * The ID of the associated payroll group
     *
     * @generated from field: int64 payroll_group_id = 23;
     */
    payrollGroupId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: int64 tax_group_id = 24;
     */
    taxGroupId: bigint;
    /**
     * Any additional description
     *
     * @generated from field: string description = 25;
     */
    description: string;
    /**
     * Stores any roundoff amount
     *
     * @generated from field: int64 round_off = 30;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalariesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceUpdateRequest;
    static equals(a: SalariesServiceUpdateRequest | PlainMessage<SalariesServiceUpdateRequest> | undefined, b: SalariesServiceUpdateRequest | PlainMessage<SalariesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.SalariesServiceAutofillRequest
 */
export declare class SalariesServiceAutofillRequest extends Message<SalariesServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<SalariesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceAutofillRequest;
    static equals(a: SalariesServiceAutofillRequest | PlainMessage<SalariesServiceAutofillRequest> | undefined, b: SalariesServiceAutofillRequest | PlainMessage<SalariesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Salary
 */
export declare class Salary extends Message<Salary> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this salary
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
     * The status of this salary
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this salary
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this salary was marked as completed
     *
     * @generated from field: int64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the salary
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
     * The ID of the associated employee
     *
     * @generated from field: int64 employee_id = 12;
     */
    employeeId: bigint;
    /**
     * The date from which the salary is being calculated
     *
     * @generated from field: string from_date = 13;
     */
    fromDate: string;
    /**
     * The date until which the salary is being calculated
     *
     * @generated from field: string to_date = 14;
     */
    toDate: string;
    /**
     * The ID of the bank account (belonging to the organization) from which the salary will be debited
     *
     * @generated from field: int64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: int64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The basic pay amount
     *
     * @generated from field: int64 basic_pay_amount = 17;
     */
    basicPayAmount: bigint;
    /**
     * The unit of the basic pay
     *
     * @generated from field: int64 basic_pay_uom_id = 18;
     */
    basicPayUomId: bigint;
    /**
     * The number of attendance records being considered
     *
     * @generated from field: int64 applicable_attendance_records_count = 19;
     */
    applicableAttendanceRecordsCount: bigint;
    /**
     * The unit of attendance
     *
     * @generated from field: int64 applicable_attendance_uom_id = 20;
     */
    applicableAttendanceUomId: bigint;
    /**
     * The numerator for the conversion factor from attendance unit to basic pay unit
     *
     * @generated from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_numerator = 21;
     */
    cfFromAttendanceUomIdToBasicPayUomIdNumerator: bigint;
    /**
     * The denominator for the conversion factor from attendance unit to basic pay unit
     *
     * @generated from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_denominator = 22;
     */
    cfFromAttendanceUomIdToBasicPayUomIdDenominator: bigint;
    /**
     * The ID of the associated payroll group
     *
     * @generated from field: int64 payroll_group_id = 23;
     */
    payrollGroupId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: int64 tax_group_id = 24;
     */
    taxGroupId: bigint;
    /**
     * Any additional description
     *
     * @generated from field: string description = 25;
     */
    description: string;
    /**
     * Stores any roundoff amount
     *
     * @generated from field: int64 round_off = 30;
     */
    roundOff: bigint;
    /**
     * The list of associated addition items
     *
     * @generated from field: repeated Scailo.SalaryAdditionItem addition_items_list = 40;
     */
    additionItemsList: SalaryAdditionItem[];
    /**
     * The list of associated deduction items
     *
     * @generated from field: repeated Scailo.SalaryDeductionItem deduction_items_list = 41;
     */
    deductionItemsList: SalaryDeductionItem[];
    /**
     * The list of associated reimbursement items
     *
     * @generated from field: repeated Scailo.SalaryReimbursementItem reimbursement_items_list = 42;
     */
    reimbursementItemsList: SalaryReimbursementItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 50;
     */
    formData: FormFieldDatum[];
    /**
     * The total amount of the salary
     *
     * @generated from field: double total_amount = 60;
     */
    totalAmount: number;
    constructor(data?: PartialMessage<Salary>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Salary";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Salary;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Salary;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Salary;
    static equals(a: Salary | PlainMessage<Salary> | undefined, b: Salary | PlainMessage<Salary> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of salaries
 *
 * @generated from message Scailo.SalariesList
 */
export declare class SalariesList extends Message<SalariesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Salary list = 1;
     */
    list: Salary[];
    constructor(data?: PartialMessage<SalariesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesList;
    static equals(a: SalariesList | PlainMessage<SalariesList> | undefined, b: SalariesList | PlainMessage<SalariesList> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an addition item to a salary
 *
 * @generated from message Scailo.SalariesServiceAdditionItemCreateRequest
 */
export declare class SalariesServiceAdditionItemCreateRequest extends Message<SalariesServiceAdditionItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    /**
     * The total quantity of this item (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<SalariesServiceAdditionItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceAdditionItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceAdditionItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceAdditionItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceAdditionItemCreateRequest;
    static equals(a: SalariesServiceAdditionItemCreateRequest | PlainMessage<SalariesServiceAdditionItemCreateRequest> | undefined, b: SalariesServiceAdditionItemCreateRequest | PlainMessage<SalariesServiceAdditionItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an addition item in a salary
 *
 * @generated from message Scailo.SalariesServiceAdditionItemUpdateRequest
 */
export declare class SalariesServiceAdditionItemUpdateRequest extends Message<SalariesServiceAdditionItemUpdateRequest> {
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
     * The total quantity of this item (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<SalariesServiceAdditionItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceAdditionItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceAdditionItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceAdditionItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceAdditionItemUpdateRequest;
    static equals(a: SalariesServiceAdditionItemUpdateRequest | PlainMessage<SalariesServiceAdditionItemUpdateRequest> | undefined, b: SalariesServiceAdditionItemUpdateRequest | PlainMessage<SalariesServiceAdditionItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an addition item associated to a salary
 *
 * @generated from message Scailo.SalaryAdditionItem
 */
export declare class SalaryAdditionItem extends Message<SalaryAdditionItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this salary
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
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    /**
     * The total quantity of this item (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<SalaryAdditionItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryAdditionItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryAdditionItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryAdditionItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryAdditionItem;
    static equals(a: SalaryAdditionItem | PlainMessage<SalaryAdditionItem> | undefined, b: SalaryAdditionItem | PlainMessage<SalaryAdditionItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of salary addition items
 *
 * @generated from message Scailo.SalariesAdditionItemsList
 */
export declare class SalariesAdditionItemsList extends Message<SalariesAdditionItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalaryAdditionItem list = 1;
     */
    list: SalaryAdditionItem[];
    constructor(data?: PartialMessage<SalariesAdditionItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesAdditionItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesAdditionItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesAdditionItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesAdditionItemsList;
    static equals(a: SalariesAdditionItemsList | PlainMessage<SalariesAdditionItemsList> | undefined, b: SalariesAdditionItemsList | PlainMessage<SalariesAdditionItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the addition record
 *
 * @generated from message Scailo.SalaryAdditionItemHistoryRequest
 */
export declare class SalaryAdditionItemHistoryRequest extends Message<SalaryAdditionItemHistoryRequest> {
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalaryAdditionItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryAdditionItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryAdditionItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryAdditionItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryAdditionItemHistoryRequest;
    static equals(a: SalaryAdditionItemHistoryRequest | PlainMessage<SalaryAdditionItemHistoryRequest> | undefined, b: SalaryAdditionItemHistoryRequest | PlainMessage<SalaryAdditionItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective salary addition item
 *
 * @generated from message Scailo.SalaryAdditionItemProspectiveInfoRequest
 */
export declare class SalaryAdditionItemProspectiveInfoRequest extends Message<SalaryAdditionItemProspectiveInfoRequest> {
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    constructor(data?: PartialMessage<SalaryAdditionItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryAdditionItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryAdditionItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryAdditionItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryAdditionItemProspectiveInfoRequest;
    static equals(a: SalaryAdditionItemProspectiveInfoRequest | PlainMessage<SalaryAdditionItemProspectiveInfoRequest> | undefined, b: SalaryAdditionItemProspectiveInfoRequest | PlainMessage<SalaryAdditionItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an deduction item to a salary
 *
 * @generated from message Scailo.SalariesServiceDeductionItemCreateRequest
 */
export declare class SalariesServiceDeductionItemCreateRequest extends Message<SalariesServiceDeductionItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    /**
     * The total quantity of this item (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<SalariesServiceDeductionItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceDeductionItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceDeductionItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceDeductionItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceDeductionItemCreateRequest;
    static equals(a: SalariesServiceDeductionItemCreateRequest | PlainMessage<SalariesServiceDeductionItemCreateRequest> | undefined, b: SalariesServiceDeductionItemCreateRequest | PlainMessage<SalariesServiceDeductionItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an deduction item in a salary
 *
 * @generated from message Scailo.SalariesServiceDeductionItemUpdateRequest
 */
export declare class SalariesServiceDeductionItemUpdateRequest extends Message<SalariesServiceDeductionItemUpdateRequest> {
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
     * The total quantity of this item (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<SalariesServiceDeductionItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceDeductionItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceDeductionItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceDeductionItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceDeductionItemUpdateRequest;
    static equals(a: SalariesServiceDeductionItemUpdateRequest | PlainMessage<SalariesServiceDeductionItemUpdateRequest> | undefined, b: SalariesServiceDeductionItemUpdateRequest | PlainMessage<SalariesServiceDeductionItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an deduction item associated to a salary
 *
 * @generated from message Scailo.SalaryDeductionItem
 */
export declare class SalaryDeductionItem extends Message<SalaryDeductionItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this salary
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
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    /**
     * The total quantity of this item (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<SalaryDeductionItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryDeductionItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryDeductionItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryDeductionItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryDeductionItem;
    static equals(a: SalaryDeductionItem | PlainMessage<SalaryDeductionItem> | undefined, b: SalaryDeductionItem | PlainMessage<SalaryDeductionItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of salary deduction items
 *
 * @generated from message Scailo.SalariesDeductionItemsList
 */
export declare class SalariesDeductionItemsList extends Message<SalariesDeductionItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalaryDeductionItem list = 1;
     */
    list: SalaryDeductionItem[];
    constructor(data?: PartialMessage<SalariesDeductionItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesDeductionItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesDeductionItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesDeductionItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesDeductionItemsList;
    static equals(a: SalariesDeductionItemsList | PlainMessage<SalariesDeductionItemsList> | undefined, b: SalariesDeductionItemsList | PlainMessage<SalariesDeductionItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the deduction record
 *
 * @generated from message Scailo.SalaryDeductionItemHistoryRequest
 */
export declare class SalaryDeductionItemHistoryRequest extends Message<SalaryDeductionItemHistoryRequest> {
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalaryDeductionItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryDeductionItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryDeductionItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryDeductionItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryDeductionItemHistoryRequest;
    static equals(a: SalaryDeductionItemHistoryRequest | PlainMessage<SalaryDeductionItemHistoryRequest> | undefined, b: SalaryDeductionItemHistoryRequest | PlainMessage<SalaryDeductionItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective salary deduction item
 *
 * @generated from message Scailo.SalaryDeductionItemProspectiveInfoRequest
 */
export declare class SalaryDeductionItemProspectiveInfoRequest extends Message<SalaryDeductionItemProspectiveInfoRequest> {
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    constructor(data?: PartialMessage<SalaryDeductionItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryDeductionItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryDeductionItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryDeductionItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryDeductionItemProspectiveInfoRequest;
    static equals(a: SalaryDeductionItemProspectiveInfoRequest | PlainMessage<SalaryDeductionItemProspectiveInfoRequest> | undefined, b: SalaryDeductionItemProspectiveInfoRequest | PlainMessage<SalaryDeductionItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an reimbursement item to a salary
 *
 * @generated from message Scailo.SalariesServiceReimbursementItemCreateRequest
 */
export declare class SalariesServiceReimbursementItemCreateRequest extends Message<SalariesServiceReimbursementItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    /**
     * The total amount of this item (in cents)
     *
     * @generated from field: int64 amount = 13;
     */
    amount: bigint;
    constructor(data?: PartialMessage<SalariesServiceReimbursementItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceReimbursementItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceReimbursementItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceReimbursementItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceReimbursementItemCreateRequest;
    static equals(a: SalariesServiceReimbursementItemCreateRequest | PlainMessage<SalariesServiceReimbursementItemCreateRequest> | undefined, b: SalariesServiceReimbursementItemCreateRequest | PlainMessage<SalariesServiceReimbursementItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an reimbursement item in a salary
 *
 * @generated from message Scailo.SalariesServiceReimbursementItemUpdateRequest
 */
export declare class SalariesServiceReimbursementItemUpdateRequest extends Message<SalariesServiceReimbursementItemUpdateRequest> {
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
     * The total amount of this item (in cents)
     *
     * @generated from field: int64 amount = 13;
     */
    amount: bigint;
    constructor(data?: PartialMessage<SalariesServiceReimbursementItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceReimbursementItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceReimbursementItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceReimbursementItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceReimbursementItemUpdateRequest;
    static equals(a: SalariesServiceReimbursementItemUpdateRequest | PlainMessage<SalariesServiceReimbursementItemUpdateRequest> | undefined, b: SalariesServiceReimbursementItemUpdateRequest | PlainMessage<SalariesServiceReimbursementItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an reimbursement item associated to a salary
 *
 * @generated from message Scailo.SalaryReimbursementItem
 */
export declare class SalaryReimbursementItem extends Message<SalaryReimbursementItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this salary
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
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    /**
     * The total amount of this item (in cents)
     *
     * @generated from field: int64 amount = 13;
     */
    amount: bigint;
    constructor(data?: PartialMessage<SalaryReimbursementItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryReimbursementItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryReimbursementItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryReimbursementItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryReimbursementItem;
    static equals(a: SalaryReimbursementItem | PlainMessage<SalaryReimbursementItem> | undefined, b: SalaryReimbursementItem | PlainMessage<SalaryReimbursementItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of salary reimbursement items
 *
 * @generated from message Scailo.SalariesReimbursementItemsList
 */
export declare class SalariesReimbursementItemsList extends Message<SalariesReimbursementItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.SalaryReimbursementItem list = 1;
     */
    list: SalaryReimbursementItem[];
    constructor(data?: PartialMessage<SalariesReimbursementItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesReimbursementItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesReimbursementItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesReimbursementItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesReimbursementItemsList;
    static equals(a: SalariesReimbursementItemsList | PlainMessage<SalariesReimbursementItemsList> | undefined, b: SalariesReimbursementItemsList | PlainMessage<SalariesReimbursementItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the reimbursement record
 *
 * @generated from message Scailo.SalaryReimbursementItemHistoryRequest
 */
export declare class SalaryReimbursementItemHistoryRequest extends Message<SalaryReimbursementItemHistoryRequest> {
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 12;
     */
    refId: bigint;
    constructor(data?: PartialMessage<SalaryReimbursementItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryReimbursementItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryReimbursementItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryReimbursementItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryReimbursementItemHistoryRequest;
    static equals(a: SalaryReimbursementItemHistoryRequest | PlainMessage<SalaryReimbursementItemHistoryRequest> | undefined, b: SalaryReimbursementItemHistoryRequest | PlainMessage<SalaryReimbursementItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective salary reimbursement item
 *
 * @generated from message Scailo.SalaryReimbursementItemProspectiveInfoRequest
 */
export declare class SalaryReimbursementItemProspectiveInfoRequest extends Message<SalaryReimbursementItemProspectiveInfoRequest> {
    /**
     * Stores the salary ID
     *
     * @generated from field: int64 salary_id = 10;
     */
    salaryId: bigint;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 11;
     */
    refFrom: string;
    constructor(data?: PartialMessage<SalaryReimbursementItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalaryReimbursementItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalaryReimbursementItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalaryReimbursementItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalaryReimbursementItemProspectiveInfoRequest;
    static equals(a: SalaryReimbursementItemProspectiveInfoRequest | PlainMessage<SalaryReimbursementItemProspectiveInfoRequest> | undefined, b: SalaryReimbursementItemProspectiveInfoRequest | PlainMessage<SalaryReimbursementItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.SalariesServicePaginationReq
 */
export declare class SalariesServicePaginationReq extends Message<SalariesServicePaginationReq> {
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
     * @generated from field: int64 offset = 3;
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
     * @generated from field: Scailo.SALARY_SORT_KEY sort_key = 5;
     */
    sortKey: SALARY_SORT_KEY;
    /**
     * The status of this salary
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalariesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServicePaginationReq;
    static equals(a: SalariesServicePaginationReq | PlainMessage<SalariesServicePaginationReq> | undefined, b: SalariesServicePaginationReq | PlainMessage<SalariesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.SalariesServicePaginationResponse
 */
export declare class SalariesServicePaginationResponse extends Message<SalariesServicePaginationResponse> {
    /**
     * The number of records in this payload
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: int64 offset = 2;
     */
    offset: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: int64 total = 3;
     */
    total: bigint;
    /**
     * The list of records
     *
     * @generated from field: repeated Scailo.Salary payload = 4;
     */
    payload: Salary[];
    constructor(data?: PartialMessage<SalariesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServicePaginationResponse;
    static equals(a: SalariesServicePaginationResponse | PlainMessage<SalariesServicePaginationResponse> | undefined, b: SalariesServicePaginationResponse | PlainMessage<SalariesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.SalariesServiceFilterReq
 */
export declare class SalariesServiceFilterReq extends Message<SalariesServiceFilterReq> {
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
     * @generated from field: int64 offset = 3;
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
     * @generated from field: Scailo.SALARY_SORT_KEY sort_key = 5;
     */
    sortKey: SALARY_SORT_KEY;
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
     * The status of this salary
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: int64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: int64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: int64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: int64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: int64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: int64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The reference ID of the salary
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
     * The employee ID of the salary
     *
     * @generated from field: int64 employee_id = 22;
     */
    employeeId: bigint;
    /**
     * The bank account ID of the salary
     *
     * @generated from field: int64 bank_account_id = 23;
     */
    bankAccountId: bigint;
    /**
     * The currency ID of the salary
     *
     * @generated from field: int64 currency_id = 24;
     */
    currencyId: bigint;
    /**
     * The payroll group ID of the salary
     *
     * @generated from field: int64 payroll_group_id = 25;
     */
    payrollGroupId: bigint;
    /**
     * The tax group ID of the salary
     *
     * @generated from field: int64 tax_group_id = 26;
     */
    taxGroupId: bigint;
    constructor(data?: PartialMessage<SalariesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceFilterReq;
    static equals(a: SalariesServiceFilterReq | PlainMessage<SalariesServiceFilterReq> | undefined, b: SalariesServiceFilterReq | PlainMessage<SalariesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.SalariesServiceCountReq
 */
export declare class SalariesServiceCountReq extends Message<SalariesServiceCountReq> {
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
     * The status of this salary
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: int64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: int64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: int64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: int64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: int64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: int64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The reference ID of the salary
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
     * The employee ID of the salary
     *
     * @generated from field: int64 employee_id = 22;
     */
    employeeId: bigint;
    /**
     * The bank account ID of the salary
     *
     * @generated from field: int64 bank_account_id = 23;
     */
    bankAccountId: bigint;
    /**
     * The currency ID of the salary
     *
     * @generated from field: int64 currency_id = 24;
     */
    currencyId: bigint;
    /**
     * The payroll group ID of the salary
     *
     * @generated from field: int64 payroll_group_id = 25;
     */
    payrollGroupId: bigint;
    /**
     * The tax group ID of the salary
     *
     * @generated from field: int64 tax_group_id = 26;
     */
    taxGroupId: bigint;
    constructor(data?: PartialMessage<SalariesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceCountReq;
    static equals(a: SalariesServiceCountReq | PlainMessage<SalariesServiceCountReq> | undefined, b: SalariesServiceCountReq | PlainMessage<SalariesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.SalariesServiceSearchAllReq
 */
export declare class SalariesServiceSearchAllReq extends Message<SalariesServiceSearchAllReq> {
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
     * @generated from field: int64 offset = 3;
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
     * @generated from field: Scailo.SALARY_SORT_KEY sort_key = 5;
     */
    sortKey: SALARY_SORT_KEY;
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
    constructor(data?: PartialMessage<SalariesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SalariesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalariesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalariesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalariesServiceSearchAllReq;
    static equals(a: SalariesServiceSearchAllReq | PlainMessage<SalariesServiceSearchAllReq> | undefined, b: SalariesServiceSearchAllReq | PlainMessage<SalariesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=salaries.scailo_pb.d.ts.map
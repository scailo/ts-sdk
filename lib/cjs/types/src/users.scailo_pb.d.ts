import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available user types
 *
 * @generated from enum Scailo.USER_TYPE
 */
export declare enum USER_TYPE {
    /**
     * Useful for filter and count operation when this field needs to be ignored
     *
     * @generated from enum value: USER_TYPE_ANY_UNSPECIFIED = 0;
     */
    USER_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the user is an employee
     *
     * @generated from enum value: USER_TYPE_EMPLOYEE = 1;
     */
    USER_TYPE_EMPLOYEE = 1,
    /**
     * Denotes that the user is a client
     *
     * @generated from enum value: USER_TYPE_CLIENT = 2;
     */
    USER_TYPE_CLIENT = 2,
    /**
     * Denotes that the user is a vendor
     *
     * @generated from enum value: USER_TYPE_VENDOR = 3;
     */
    USER_TYPE_VENDOR = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.USER_SORT_KEY
 */
export declare enum USER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: USER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    USER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: USER_SORT_KEY_CREATED_AT = 1;
     */
    USER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: USER_SORT_KEY_MODIFIED_AT = 2;
     */
    USER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: USER_SORT_KEY_APPROVED_ON = 3;
     */
    USER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: USER_SORT_KEY_APPROVED_BY = 4;
     */
    USER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: USER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    USER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the username
     *
     * @generated from enum value: USER_SORT_KEY_USERNAME = 10;
     */
    USER_SORT_KEY_USERNAME = 10,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: USER_SORT_KEY_NAME = 11;
     */
    USER_SORT_KEY_NAME = 11,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: USER_SORT_KEY_CODE = 12;
     */
    USER_SORT_KEY_CODE = 12,
    /**
     * Fetch ordered results by the email address
     *
     * @generated from enum value: USER_SORT_KEY_EMAIL = 13;
     */
    USER_SORT_KEY_EMAIL = 13,
    /**
     * Fetch ordered results by the phone number
     *
     * @generated from enum value: USER_SORT_KEY_PHONE = 14;
     */
    USER_SORT_KEY_PHONE = 14
}
/**
 *
 * Request message for creating a new user record.
 * * This is the primary entry point for onboarding employees or system users.
 * It handles identity, contact information, physical address, and payroll
 * configuration in a single atomic operation.
 *
 * **Note:** Dynamic fields should be provided in the `form_data` field for
 * organization-specific requirements.
 *
 * @generated from message Scailo.UsersServiceCreateRequest
 */
export declare class UsersServiceCreateRequest extends Message<UsersServiceCreateRequest> {
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
     * [Optional] Internal notes or audit comments for this creation event.
     * Maximum 500 characters.
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * [Required] The classification of the user (e.g., CLIENT, EMPLOYEE, VENDOR).
     *
     * @generated from field: Scailo.USER_TYPE user_type = 7;
     */
    userType: USER_TYPE;
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
     * [Required] The unique login identifier.
     * Must be at least 1 character and unique across the entity.
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     * [Required] The unique employee or payroll code.
     * Used for cross-referencing with external HR or ERP systems.
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * [Required] The full legal name of the user.
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * [Required] The plain text password for the account.
     * This value is hashed before storage.
     *
     * @generated from field: string plain_text_password = 13;
     */
    plainTextPassword: string;
    /**
     * [Required] The primary security Role ID (System/Web access).
     *
     * @generated from field: uint64 role_id = 14;
     */
    roleId: bigint;
    /**
     * [Optional] The secondary Role ID for mobile application access.
     *
     * @generated from field: uint64 mobile_role_id = 15;
     */
    mobileRoleId: bigint;
    /**
     * [Required] The primary email address for system notifications.
     * Example: "jane.doe@example.com"
     *
     * @generated from field: string email = 16;
     */
    email: string;
    /**
     * [Optional] The secondary/corporate work email address.
     *
     * @generated from field: string work_email = 17;
     */
    workEmail: string;
    /**
     * [Required] The primary contact number (e.g., Mobile or Landline).
     * Recommended format: E.164 (e.g., "+12125550123").
     *
     * @generated from field: string phone = 18;
     */
    phone: string;
    /**
     * [Optional] The user's date of birth.
     * **Format:** `Day Month Date Year`
     * Example: "Mon Jan 02 2006"
     *
     * @generated from field: string birthday = 30;
     */
    birthday: string;
    /**
     * [Optional] The official start date for the user.
     * **Format:** `Day Month Date Year`
     * Example: "Wed Oct 25 2023"
     *
     * @generated from field: string joining_date = 31;
     */
    joiningDate: string;
    /**
     * [Optional] Primary residential or mailing address.
     *
     * @generated from field: string address = 32;
     */
    address: string;
    /**
     * [Optional] City of residence.
     *
     * @generated from field: string city = 33;
     */
    city: string;
    /**
     * [Optional] State, Province, or Region of residence.
     *
     * @generated from field: string state = 34;
     */
    state: string;
    /**
     * [Optional] Country of residence (ISO 3166-1 alpha-2 recommended).
     * Example: "US", "GB", "IN"
     *
     * @generated from field: string country = 35;
     */
    country: string;
    /**
     * [Optional] Postal or ZIP code.
     *
     * @generated from field: string pin_code = 36;
     */
    pinCode: string;
    /**
     * [Optional] The user's blood group.
     * Example: "O+", "A-", "B+"
     *
     * @generated from field: string blood_group = 37;
     */
    bloodGroup: string;
    /**
     * [Optional] Assigned shift group for attendance scheduling.
     *
     * @generated from field: uint64 shift_group_id = 50;
     */
    shiftGroupId: bigint;
    /**
     * [Optional] Unit of Measure (UOM) for tracking attendance duration.
     *
     * @generated from field: uint64 attendance_uom_id = 51;
     */
    attendanceUomId: bigint;
    /**
     * [Optional] The department ID. Set to 0 for unassigned/general.
     *
     * @generated from field: uint64 department_id = 52;
     */
    departmentId: bigint;
    /**
     * [Optional] The payroll group used for salary batching.
     *
     * @generated from field: uint64 payroll_group_id = 53;
     */
    payrollGroupId: bigint;
    /**
     * [Optional] The tax group used for statutory deductions.
     *
     * @generated from field: uint64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId: bigint;
    /**
     * [Optional] The ID of the currency for the user's base salary.
     *
     * @generated from field: uint64 payroll_currency_id = 55;
     */
    payrollCurrencyId: bigint;
    /**
     * [Optional] The base salary amount in the **smallest currency unit**.
     * For USD, 500000 represents $5,000.00.
     *
     * @generated from field: uint64 basic_pay_amount = 56;
     */
    basicPayAmount: bigint;
    /**
     * [Optional] The UOM ID for the basic pay (e.g., Per Month, Per Year).
     *
     * @generated from field: uint64 basic_pay_uom_id = 57;
     */
    basicPayUomId: bigint;
    /**
     * [Optional] A collection of custom field data.
     * Use this for any organization-specific dynamic attributes.
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 70;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<UsersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceCreateRequest;
    static equals(a: UsersServiceCreateRequest | PlainMessage<UsersServiceCreateRequest> | undefined, b: UsersServiceCreateRequest | PlainMessage<UsersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.UsersServiceUpdateRequest
 */
export declare class UsersServiceUpdateRequest extends Message<UsersServiceUpdateRequest> {
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
     * The unique employee code by which the user is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * The associated role ID
     *
     * @generated from field: uint64 role_id = 14;
     */
    roleId: bigint;
    /**
     * The associated mobile role ID
     *
     * @generated from field: uint64 mobile_role_id = 15;
     */
    mobileRoleId: bigint;
    /**
     * The primary email of the user
     *
     * @generated from field: string email = 16;
     */
    email: string;
    /**
     * The optional work email of the user
     *
     * @generated from field: string work_email = 17;
     */
    workEmail: string;
    /**
     * The primary contact number of the user
     *
     * @generated from field: string phone = 18;
     */
    phone: string;
    /**
     * The birthday of the user
     *
     * @generated from field: string birthday = 30;
     */
    birthday: string;
    /**
     * The joining date of the user
     *
     * @generated from field: string joining_date = 31;
     */
    joiningDate: string;
    /**
     * The address of the user
     *
     * @generated from field: string address = 32;
     */
    address: string;
    /**
     * The city of residence
     *
     * @generated from field: string city = 33;
     */
    city: string;
    /**
     * The state of residence
     *
     * @generated from field: string state = 34;
     */
    state: string;
    /**
     * The country of residence
     *
     * @generated from field: string country = 35;
     */
    country: string;
    /**
     * THe PIN Code of residence
     *
     * @generated from field: string pin_code = 36;
     */
    pinCode: string;
    /**
     * THe Blood Group of the user
     *
     * @generated from field: string blood_group = 37;
     */
    bloodGroup: string;
    /**
     * The associated shift group ID
     *
     * @generated from field: uint64 shift_group_id = 50;
     */
    shiftGroupId: bigint;
    /**
     * The associated unit of material of the user's attendance record
     *
     * @generated from field: uint64 attendance_uom_id = 51;
     */
    attendanceUomId: bigint;
    /**
     * The associated department (can be 0 to allow seamless transition)
     *
     * @generated from field: uint64 department_id = 52;
     */
    departmentId: bigint;
    /**
     * The associated payroll group ID of the user
     *
     * @generated from field: uint64 payroll_group_id = 53;
     */
    payrollGroupId: bigint;
    /**
     * The associated tax group ID using which the user's payroll needs to be calculated
     *
     * @generated from field: uint64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId: bigint;
    /**
     * The associated currency ID of the user's payroll
     *
     * @generated from field: uint64 payroll_currency_id = 55;
     */
    payrollCurrencyId: bigint;
    /**
     * The basic pay amount of the user (in cents)
     *
     * @generated from field: uint64 basic_pay_amount = 56;
     */
    basicPayAmount: bigint;
    /**
     * The associated unit of material for storing the basic pay amount
     *
     * @generated from field: uint64 basic_pay_uom_id = 57;
     */
    basicPayUomId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 70;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<UsersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceUpdateRequest;
    static equals(a: UsersServiceUpdateRequest | PlainMessage<UsersServiceUpdateRequest> | undefined, b: UsersServiceUpdateRequest | PlainMessage<UsersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.User
 */
export declare class User extends Message<User> {
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
     * Stores the user type
     *
     * @generated from field: Scailo.USER_TYPE user_type = 7;
     */
    userType: USER_TYPE;
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
     * The username of the user
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     * The unique employee code by which the user is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * The associated role ID
     *
     * @generated from field: uint64 role_id = 14;
     */
    roleId: bigint;
    /**
     * The associated mobile role ID
     *
     * @generated from field: uint64 mobile_role_id = 15;
     */
    mobileRoleId: bigint;
    /**
     * The primary email of the user
     *
     * @generated from field: string email = 16;
     */
    email: string;
    /**
     * The optional work email of the user
     *
     * @generated from field: string work_email = 17;
     */
    workEmail: string;
    /**
     * The primary contact number of the user
     *
     * @generated from field: string phone = 18;
     */
    phone: string;
    /**
     * The birthday of the user
     *
     * @generated from field: string birthday = 30;
     */
    birthday: string;
    /**
     * The joining date of the user
     *
     * @generated from field: string joining_date = 31;
     */
    joiningDate: string;
    /**
     * The address of the user
     *
     * @generated from field: string address = 32;
     */
    address: string;
    /**
     * The city of residence
     *
     * @generated from field: string city = 33;
     */
    city: string;
    /**
     * The state of residence
     *
     * @generated from field: string state = 34;
     */
    state: string;
    /**
     * The country of residence
     *
     * @generated from field: string country = 35;
     */
    country: string;
    /**
     * THe PIN Code of residence
     *
     * @generated from field: string pin_code = 36;
     */
    pinCode: string;
    /**
     * THe Blood Group of the user
     *
     * @generated from field: string blood_group = 37;
     */
    bloodGroup: string;
    /**
     * The associated shift group ID
     *
     * @generated from field: uint64 shift_group_id = 50;
     */
    shiftGroupId: bigint;
    /**
     * The associated unit of material of the user's attendance record
     *
     * @generated from field: uint64 attendance_uom_id = 51;
     */
    attendanceUomId: bigint;
    /**
     * The associated department
     *
     * @generated from field: uint64 department_id = 52;
     */
    departmentId: bigint;
    /**
     * The associated payroll group ID of the user
     *
     * @generated from field: uint64 payroll_group_id = 53;
     */
    payrollGroupId: bigint;
    /**
     * The associated tax group ID using which the user's payroll needs to be calculated
     *
     * @generated from field: uint64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId: bigint;
    /**
     * The associated currency ID of the user's payroll
     *
     * @generated from field: uint64 payroll_currency_id = 55;
     */
    payrollCurrencyId: bigint;
    /**
     * The basic pay amount of the user (in cents)
     *
     * @generated from field: uint64 basic_pay_amount = 56;
     */
    basicPayAmount: bigint;
    /**
     * The associated unit of material for storing the basic pay amount
     *
     * @generated from field: uint64 basic_pay_uom_id = 57;
     */
    basicPayUomId: bigint;
    /**
     * Stores if MFA has been enabled by the user
     *
     * @generated from field: bool mfa_status = 60;
     */
    mfaStatus: boolean;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 70;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<User>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.User";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;
    static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}
/**
 *
 * Describes the message that is used internally to validate user
 *
 * @generated from message Scailo.UserPrimaryInfo
 */
export declare class UserPrimaryInfo extends Message<UserPrimaryInfo> {
    /**
     * Stores the user type
     *
     * @generated from field: Scailo.USER_TYPE user_type = 7;
     */
    userType: USER_TYPE;
    /**
     * The username of the user
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores the hashed password
     *
     * @generated from field: bytes password = 12;
     */
    password: Uint8Array;
    /**
     * The associated role ID
     *
     * @generated from field: uint64 role_id = 13;
     */
    roleId: bigint;
    /**
     * The associated mobile role ID
     *
     * @generated from field: uint64 mobile_role_id = 14;
     */
    mobileRoleId: bigint;
    /**
     * Stores if MFA has been enabled by the user
     *
     * @generated from field: bool mfa_status = 15;
     */
    mfaStatus: boolean;
    /**
     * Stores the MFA secret
     *
     * @generated from field: bytes mfa_secret = 16;
     */
    mfaSecret: Uint8Array;
    /**
     * THe Blood Group of the user
     *
     * @generated from field: string blood_group = 20;
     */
    bloodGroup: string;
    constructor(data?: PartialMessage<UserPrimaryInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UserPrimaryInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserPrimaryInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserPrimaryInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserPrimaryInfo;
    static equals(a: UserPrimaryInfo | PlainMessage<UserPrimaryInfo> | undefined, b: UserPrimaryInfo | PlainMessage<UserPrimaryInfo> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.UsersList
 */
export declare class UsersList extends Message<UsersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.User list = 1;
     */
    list: User[];
    constructor(data?: PartialMessage<UsersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersList;
    static equals(a: UsersList | PlainMessage<UsersList> | undefined, b: UsersList | PlainMessage<UsersList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.UsersServicePaginationReq
 */
export declare class UsersServicePaginationReq extends Message<UsersServicePaginationReq> {
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
     * @generated from field: Scailo.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
    /**
     * The status of this user
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<UsersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServicePaginationReq;
    static equals(a: UsersServicePaginationReq | PlainMessage<UsersServicePaginationReq> | undefined, b: UsersServicePaginationReq | PlainMessage<UsersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.UsersServicePaginationResponse
 */
export declare class UsersServicePaginationResponse extends Message<UsersServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.User payload = 4;
     */
    payload: User[];
    constructor(data?: PartialMessage<UsersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServicePaginationResponse;
    static equals(a: UsersServicePaginationResponse | PlainMessage<UsersServicePaginationResponse> | undefined, b: UsersServicePaginationResponse | PlainMessage<UsersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.UsersServiceFilterReq
 */
export declare class UsersServiceFilterReq extends Message<UsersServiceFilterReq> {
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
     * @generated from field: Scailo.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
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
     * Stores the user type
     *
     * @generated from field: Scailo.USER_TYPE user_type = 7;
     */
    userType: USER_TYPE;
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
     * The username of the user
     *
     * @generated from field: string username = 20;
     */
    username: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 21;
     */
    name: string;
    /**
     * The unique code by which the user is classified
     *
     * @generated from field: string code = 22;
     */
    code: string;
    /**
     * The primary email of the user
     *
     * @generated from field: string email = 23;
     */
    email: string;
    /**
     * The primary contact number of the user
     *
     * @generated from field: string phone = 24;
     */
    phone: string;
    /**
     * The associated role ID
     *
     * @generated from field: uint64 role_id = 25;
     */
    roleId: bigint;
    /**
     * The associated shift group ID
     *
     * @generated from field: uint64 shift_group_id = 26;
     */
    shiftGroupId: bigint;
    /**
     * The associated unit of material of the user's attendance record
     *
     * @generated from field: uint64 attendance_uom_id = 27;
     */
    attendanceUomId: bigint;
    /**
     * The associated department
     *
     * @generated from field: uint64 department_id = 28;
     */
    departmentId: bigint;
    /**
     * The associated payroll group ID of the user
     *
     * @generated from field: uint64 payroll_group_id = 29;
     */
    payrollGroupId: bigint;
    /**
     * The associated tax group ID using which the user's payroll needs to be calculated
     *
     * @generated from field: uint64 payroll_tax_group_id = 30;
     */
    payrollTaxGroupId: bigint;
    /**
     * The associated currency ID of the user's payroll
     *
     * @generated from field: uint64 payroll_currency_id = 31;
     */
    payrollCurrencyId: bigint;
    /**
     * The associated unit of material for storing the basic pay amount
     *
     * @generated from field: uint64 basic_pay_uom_id = 32;
     */
    basicPayUomId: bigint;
    /**
     * The optional work email of the user
     *
     * @generated from field: string work_email = 33;
     */
    workEmail: string;
    /**
     * --------------------------------------------------------------------------------
     * Filter by the associated vendor ID (return all the users that belong to this vendor)
     *
     * @generated from field: uint64 vendor_id = 70;
     */
    vendorId: bigint;
    /**
     * Filter by the associated client ID (return all the users that belong to this client)
     *
     * --------------------------------------------------------------------------------
     *
     * @generated from field: uint64 client_id = 71;
     */
    clientId: bigint;
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
    constructor(data?: PartialMessage<UsersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceFilterReq;
    static equals(a: UsersServiceFilterReq | PlainMessage<UsersServiceFilterReq> | undefined, b: UsersServiceFilterReq | PlainMessage<UsersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.UsersServiceCountReq
 */
export declare class UsersServiceCountReq extends Message<UsersServiceCountReq> {
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
     * Stores the user type
     *
     * @generated from field: Scailo.USER_TYPE user_type = 7;
     */
    userType: USER_TYPE;
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
     * The username of the user
     *
     * @generated from field: string username = 20;
     */
    username: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 21;
     */
    name: string;
    /**
     * The unique code by which the user is classified
     *
     * @generated from field: string code = 22;
     */
    code: string;
    /**
     * The primary email of the user
     *
     * @generated from field: string email = 23;
     */
    email: string;
    /**
     * The primary contact number of the user
     *
     * @generated from field: string phone = 24;
     */
    phone: string;
    /**
     * The associated role ID
     *
     * @generated from field: uint64 role_id = 25;
     */
    roleId: bigint;
    /**
     * The associated shift group ID
     *
     * @generated from field: uint64 shift_group_id = 26;
     */
    shiftGroupId: bigint;
    /**
     * The associated unit of material of the user's attendance record
     *
     * @generated from field: uint64 attendance_uom_id = 27;
     */
    attendanceUomId: bigint;
    /**
     * The associated department
     *
     * @generated from field: uint64 department_id = 28;
     */
    departmentId: bigint;
    /**
     * The associated payroll group ID of the user
     *
     * @generated from field: uint64 payroll_group_id = 29;
     */
    payrollGroupId: bigint;
    /**
     * The associated tax group ID using which the user's payroll needs to be calculated
     *
     * @generated from field: uint64 payroll_tax_group_id = 30;
     */
    payrollTaxGroupId: bigint;
    /**
     * The associated currency ID of the user's payroll
     *
     * @generated from field: uint64 payroll_currency_id = 31;
     */
    payrollCurrencyId: bigint;
    /**
     * The associated unit of material for storing the basic pay amount
     *
     * @generated from field: uint64 basic_pay_uom_id = 32;
     */
    basicPayUomId: bigint;
    /**
     * The optional work email of the user
     *
     * @generated from field: string work_email = 33;
     */
    workEmail: string;
    /**
     * --------------------------------------------------------------------------------
     * Filter by the associated vendor ID (return all the users that belong to this vendor)
     *
     * @generated from field: uint64 vendor_id = 70;
     */
    vendorId: bigint;
    /**
     * Filter by the associated client ID (return all the users that belong to this client)
     *
     * --------------------------------------------------------------------------------
     *
     * @generated from field: uint64 client_id = 71;
     */
    clientId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<UsersServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceCountReq;
    static equals(a: UsersServiceCountReq | PlainMessage<UsersServiceCountReq> | undefined, b: UsersServiceCountReq | PlainMessage<UsersServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.UsersServiceSearchAllReq
 */
export declare class UsersServiceSearchAllReq extends Message<UsersServiceSearchAllReq> {
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
     * @generated from field: Scailo.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
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
     * Stores the user type
     *
     * @generated from field: Scailo.USER_TYPE user_type = 7;
     */
    userType: USER_TYPE;
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
     * --------------------------------------------------------------------------------
     * Filter by the associated vendor ID (return all the users that belong to this vendor)
     *
     * @generated from field: uint64 vendor_id = 70;
     */
    vendorId: bigint;
    /**
     * Filter by the associated client ID (return all the users that belong to this client)
     *
     * --------------------------------------------------------------------------------
     *
     * @generated from field: uint64 client_id = 71;
     */
    clientId: bigint;
    constructor(data?: PartialMessage<UsersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceSearchAllReq;
    static equals(a: UsersServiceSearchAllReq | PlainMessage<UsersServiceSearchAllReq> | undefined, b: UsersServiceSearchAllReq | PlainMessage<UsersServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the message that is required to register a user's device
 *
 * @generated from message Scailo.UsersServiceRegisterMobileDeviceRequest
 */
export declare class UsersServiceRegisterMobileDeviceRequest extends Message<UsersServiceRegisterMobileDeviceRequest> {
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
     * The ID of the user who has possession of the device
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The operating system of the device
     *
     * @generated from field: string device_os = 12;
     */
    deviceOs: string;
    /**
     * The generated FCM Token
     *
     * @generated from field: string device_token = 13;
     */
    deviceToken: string;
    constructor(data?: PartialMessage<UsersServiceRegisterMobileDeviceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServiceRegisterMobileDeviceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceRegisterMobileDeviceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceRegisterMobileDeviceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceRegisterMobileDeviceRequest;
    static equals(a: UsersServiceRegisterMobileDeviceRequest | PlainMessage<UsersServiceRegisterMobileDeviceRequest> | undefined, b: UsersServiceRegisterMobileDeviceRequest | PlainMessage<UsersServiceRegisterMobileDeviceRequest> | undefined): boolean;
}
/**
 *
 * Describes the message that is required to reset a user's password through an email
 *
 * @generated from message Scailo.UsersServicePasswordResetReq
 */
export declare class UsersServicePasswordResetReq extends Message<UsersServicePasswordResetReq> {
    /**
     * The username of the user
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     * The optional domain prefix that is used to generate the magic link that will allow the user to update the password. If this is empty, then the default authless access domain is used. This is useful in case of password redirections need to happen at custom domains.
     *
     * @generated from field: string domain_prefix = 20;
     */
    domainPrefix: string;
    constructor(data?: PartialMessage<UsersServicePasswordResetReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UsersServicePasswordResetReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServicePasswordResetReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServicePasswordResetReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServicePasswordResetReq;
    static equals(a: UsersServicePasswordResetReq | PlainMessage<UsersServicePasswordResetReq> | undefined, b: UsersServicePasswordResetReq | PlainMessage<UsersServicePasswordResetReq> | undefined): boolean;
}
//# sourceMappingURL=users.scailo_pb.d.ts.map
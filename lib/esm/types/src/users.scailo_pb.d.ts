import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enum defining the primary account classifications and systemic access types for users on the platform.
 *
 * @generated from enum Scailo.USER_TYPE
 */
export declare enum USER_TYPE {
    /**
     *
     * @description Denotes that the user type filter should be disregarded. Used exclusively within search APIs to bypass classification restrictions.
     *
     * @generated from enum value: USER_TYPE_ANY_UNSPECIFIED = 0;
     */
    USER_TYPE_ANY_UNSPECIFIED = 0,
    /**
     *
     * @description Denotes an internal employee lifecycle record bound to corporate attendance, shift scheduling, and payroll.
     *
     * @generated from enum value: USER_TYPE_EMPLOYEE = 1;
     */
    USER_TYPE_EMPLOYEE = 1,
    /**
     *
     * @description Denotes an external client user mapping linked directly to a client organization or billing profile.
     *
     * @generated from enum value: USER_TYPE_CLIENT = 2;
     */
    USER_TYPE_CLIENT = 2,
    /**
     *
     * @description Denotes an external vendor contact profile linked to supply chain logistics or procurement tracking.
     *
     * @generated from enum value: USER_TYPE_VENDOR = 3;
     */
    USER_TYPE_VENDOR = 3
}
/**
 *
 * Enumeration of fields available for sorting user search results.
 *
 * @generated from enum Scailo.USER_SORT_KEY
 */
export declare enum USER_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: USER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    USER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: USER_SORT_KEY_CREATED_AT = 1;
     */
    USER_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: USER_SORT_KEY_MODIFIED_AT = 2;
     */
    USER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: USER_SORT_KEY_APPROVED_ON = 3;
     */
    USER_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: USER_SORT_KEY_APPROVED_BY = 4;
     */
    USER_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: USER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    USER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided username.
     *
     * @generated from enum value: USER_SORT_KEY_USERNAME = 10;
     */
    USER_SORT_KEY_USERNAME = 10,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: USER_SORT_KEY_NAME = 11;
     */
    USER_SORT_KEY_NAME = 11,
    /**
     * @description Sort alphabetically by the user-provided code.
     *
     * @generated from enum value: USER_SORT_KEY_CODE = 12;
     */
    USER_SORT_KEY_CODE = 12,
    /**
     * @description Sort alphabetically by the user-provided email.
     *
     * @generated from enum value: USER_SORT_KEY_EMAIL = 13;
     */
    USER_SORT_KEY_EMAIL = 13,
    /**
     * @description Sort alphabetically by the user-provided phone number.
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
     * @generated from field: optional string entity_uuid = 1;
     */
    entityUuid?: string;
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
     * @generated from field: optional string user_comment = 2;
     */
    userComment?: string;
    /**
     *
     * @mandatory
     *
     * @description The categorical classification of the user entity determining their system scope and behavioral rules.
     *
     * @example USER_TYPE_EMPLOYEE
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
     * @generated from field: optional uint64 vault_folder_id = 9;
     */
    vaultFolderId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique system-level login alias used by the actor to authenticate against the platform.
     *
     * @example "jane.doe"
     *
     * @regex .+
     *
     * @format Must be a non-empty string and completely unique across the given business entity space.
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.
     *
     * @example "EMP-2026-992"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @mandatory
     *
     * @description The official or full legal name of the user as recognized on statutory documentation.
     *
     * @example "Jane Doe"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     *
     * @mandatory
     *
     * @description The raw plain text password string supplied for account registration. This token is cryptographically hashed before commitment to persistent storage.
     *
     * @example "S3cureP@ssword123!"
     *
     * @regex .+
     *
     * @format Must be a non-empty string meeting organizational length and entropy guidelines.
     *
     * @generated from field: string plain_text_password = 13;
     */
    plainTextPassword: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the primary web application access or RBAC security role.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: uint64 role_id = 14;
     */
    roleId: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of a secondary security role tailored exclusively for mobile application endpoints.
     *
     * @example 2048
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 mobile_role_id = 15;
     */
    mobileRoleId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description The primary communication or routing email address where structural system notifications are dispatched.
     *
     * @example "jane.doe@example.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format Must be a structurally sound and valid email address string.
     *
     * @generated from field: string email = 16;
     */
    email: string;
    /**
     *
     * @optional
     *
     * @description A secondary, fallback, or corporate work email address for overlapping communication loops.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string work_email = 17;
     */
    workEmail?: string;
    /**
     *
     * @mandatory
     *
     * @description The primary telephone contact or mobile line number assigned to the account profile.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: string phone = 18;
     */
    phone: string;
    /**
     *
     * @optional
     *
     * @description The calendar date of birth of the user, primarily captured for verification workflows.
     *
     * @example "Mon Jan 02 2006"
     *
     * @regex .*
     *
     * @format Must follow the specific string syntax format: `Day Month Date Year`.
     *
     * @generated from field: optional string birthday = 30;
     */
    birthday?: string;
    /**
     *
     * @optional
     *
     * @description The formal start or contract initialization date marking when the individual officially joins the team roster.
     *
     * @example "Wed Oct 25 2023"
     *
     * @regex .*
     *
     * @format Must follow the specific string syntax format: `Day Month Date Year`.
     *
     * @generated from field: optional string joining_date = 31;
     */
    joiningDate?: string;
    /**
     *
     * @optional
     *
     * @description Primary street details, building number, or geographic line matching residential or official mailing location records.
     *
     * @example "123 Business Park Drive, Suite 400"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters.
     *
     * @generated from field: optional string address = 32;
     */
    address?: string;
    /**
     *
     * @optional
     *
     * @description The explicit city name corresponding to the user's primary residence or workplace assignment.
     *
     * @example "Austin"
     *
     * @regex .*
     *
     * @format String value, can be empty.
     *
     * @generated from field: optional string city = 33;
     */
    city?: string;
    /**
     *
     * @optional
     *
     * @description The administrative territory, province, state, or regional zone of residence.
     *
     * @example "Texas"
     *
     * @regex .*
     *
     * @format String value, can be empty.
     *
     * @generated from field: optional string state = 34;
     */
    state?: string;
    /**
     *
     * @optional
     *
     * @description The country code corresponding to the user's operational location.
     *
     * @example "US"
     *
     * @regex ^[A-Z]{2}$
     *
     * @format Strict ISO 3166-1 alpha-2 standard country codes are highly recommended.
     *
     * @generated from field: optional string country = 35;
     */
    country?: string;
    /**
     *
     * @optional
     *
     * @description The standardized postal index number or geographic ZIP routing code.
     *
     * @example "78701"
     *
     * @regex .*
     *
     * @format String value, can be empty.
     *
     * @generated from field: optional string pin_code = 36;
     */
    pinCode?: string;
    /**
     *
     * @optional
     *
     * @description Medical identifier indicating the user's legal ABO blood group for emergency or corporate wellness logs.
     *
     * @example "O+"
     *
     * @regex ^(A|B|AB|O)[+-]$
     *
     * @format Alphanumeric value containing classification type followed by rh factor sign.
     *
     * @generated from field: optional string blood_group = 37;
     */
    bloodGroup?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the operational work shift group mapped to this account profile for scheduling and timecard verification.
     *
     * @example 45
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unallocated.
     *
     * @generated from field: optional uint64 shift_group_id = 50;
     */
    shiftGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal Unit of Measure (UOM) tracking ID used to evaluate time structures, shifts, or active work hour configurations.
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unallocated.
     *
     * @generated from field: optional uint64 attendance_uom_id = 51;
     */
    attendanceUomId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal sequence identifier of the corporate Department or business unit to which the user is structurally assigned.
     *
     * @example 304
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 for general or unassigned staff vectors.
     *
     * @generated from field: optional uint64 department_id = 52;
     */
    departmentId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the designated payroll distribution group used for localized batch processing and compensation disbursement.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 payroll_group_id = 53;
     */
    payrollGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the tax matrix or statutory configuration rule governing payroll deductions.
     *
     * @example 19
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if no deductions are assigned.
     *
     * @generated from field: optional uint64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal identifier matching the currency context in which the user's base salary and line compensation amounts are denominated.
     *
     * @example 3
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 payroll_currency_id = 55;
     */
    payrollCurrencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The raw volume integer representing basic salary compensation. **Critical:** Value must be defined in the minor unit of the currency.
     *
     * @example 500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. For example, a value of 500000 in USD represents $5,000.00.
     *
     * @generated from field: optional uint64 basic_pay_amount = 56;
     */
    basicPayAmount?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal Unit of Measure (UOM) tracking ID applied to contextualize basic pay duration distributions (e.g., Per Month, Per Annum).
     *
     * @example 701
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 basic_pay_uom_id = 57;
     */
    basicPayUomId?: bigint;
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
 * Request message for updating an existing User record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the code, name, role ID, mobile role ID, email, work email, phone, birthday, joining date, address, city, state, country, pin code, blood group, shift group ID, attendance uom ID, department ID, payroll group ID, payroll tax group ID, payroll currency ID, basic pay amount, basic pay uom ID and other custom form fields
 * of an established User.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.UsersServiceUpdateRequest
 */
export declare class UsersServiceUpdateRequest extends Message<UsersServiceUpdateRequest> {
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
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
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
     * @generated from field: optional bool notify_users = 3;
     */
    notifyUsers?: boolean;
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
     * @generated from field: optional uint64 vault_folder_id = 9;
     */
    vaultFolderId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.
     *
     * @example "EMP-2026-992"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 11;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The official or full legal name of the user as recognized on statutory documentation.
     *
     * @example "Jane Doe"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 12;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the primary web application access or RBAC security role.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: optional uint64 role_id = 14;
     */
    roleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of a secondary security role tailored exclusively for mobile application endpoints.
     *
     * @example 2048
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 mobile_role_id = 15;
     */
    mobileRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The primary communication or routing email address where structural system notifications are dispatched.
     *
     * @example "jane.doe@example.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format Must be a structurally sound and valid email address string.
     *
     * @generated from field: optional string email = 16;
     */
    email?: string;
    /**
     *
     * @optional
     *
     * @description A secondary, fallback, or corporate work email address for overlapping communication loops.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string work_email = 17;
     */
    workEmail?: string;
    /**
     *
     * @optional
     *
     * @description The primary telephone contact or mobile line number assigned to the account profile.
     *
     * @example "+12125550123"
     *
     * @regex .*
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string phone = 18;
     */
    phone?: string;
    /**
     *
     * @optional
     *
     * @description The calendar date of birth of the user, primarily captured for verification workflows.
     *
     * @example "Mon Jan 02 2006"
     *
     * @regex .*
     *
     * @format Must follow the specific string syntax format: `Day Month Date Year`.
     *
     * @generated from field: optional string birthday = 30;
     */
    birthday?: string;
    /**
     *
     * @optional
     *
     * @description The formal start or contract initialization date marking when the individual officially joins the team roster.
     *
     * @example "Wed Oct 25 2023"
     *
     * @regex .*
     *
     * @format Must follow the specific string syntax format: `Day Month Date Year`.
     *
     * @generated from field: optional string joining_date = 31;
     */
    joiningDate?: string;
    /**
     *
     * @optional
     *
     * @description Primary street details, building number, or geographic line matching residential or official mailing location records.
     *
     * @example "123 Business Park Drive, Suite 400"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters.
     *
     * @generated from field: optional string address = 32;
     */
    address?: string;
    /**
     *
     * @optional
     *
     * @description The explicit city name corresponding to the user's primary residence or workplace assignment.
     *
     * @example "Austin"
     *
     * @regex .*
     *
     * @format String value, can be empty.
     *
     * @generated from field: optional string city = 33;
     */
    city?: string;
    /**
     *
     * @optional
     *
     * @description The administrative territory, province, state, or regional zone of residence.
     *
     * @example "Texas"
     *
     * @regex .*
     *
     * @format String value, can be empty.
     *
     * @generated from field: optional string state = 34;
     */
    state?: string;
    /**
     *
     * @optional
     *
     * @description The country code corresponding to the user's operational location.
     *
     * @example "US"
     *
     * @regex ^[A-Z]{2}$
     *
     * @format Strict ISO 3166-1 alpha-2 standard country codes are highly recommended.
     *
     * @generated from field: optional string country = 35;
     */
    country?: string;
    /**
     *
     * @optional
     *
     * @description The standardized postal index number or geographic ZIP routing code.
     *
     * @example "78701"
     *
     * @regex .*
     *
     * @format String value, can be empty.
     *
     * @generated from field: optional string pin_code = 36;
     */
    pinCode?: string;
    /**
     *
     * @optional
     *
     * @description Medical identifier indicating the user's legal ABO blood group for emergency or corporate wellness logs.
     *
     * @example "O+"
     *
     * @regex ^(A|B|AB|O)[+-]$
     *
     * @format Alphanumeric value containing classification type followed by rh factor sign.
     *
     * @generated from field: optional string blood_group = 37;
     */
    bloodGroup?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the operational work shift group mapped to this account profile for scheduling and timecard verification.
     *
     * @example 45
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unallocated.
     *
     * @generated from field: optional uint64 shift_group_id = 50;
     */
    shiftGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal Unit of Measure (UOM) tracking ID used to evaluate time structures, shifts, or active work hour configurations.
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unallocated.
     *
     * @generated from field: optional uint64 attendance_uom_id = 51;
     */
    attendanceUomId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal sequence identifier of the corporate Department or business unit to which the user is structurally assigned.
     *
     * @example 304
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 for general or unassigned staff vectors.
     *
     * @generated from field: optional uint64 department_id = 52;
     */
    departmentId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the designated payroll distribution group used for localized batch processing and compensation disbursement.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 payroll_group_id = 53;
     */
    payrollGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the tax matrix or statutory configuration rule governing payroll deductions.
     *
     * @example 19
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if no deductions are assigned.
     *
     * @generated from field: optional uint64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal identifier matching the currency context in which the user's base salary and line compensation amounts are denominated.
     *
     * @example 3
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 payroll_currency_id = 55;
     */
    payrollCurrencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The raw volume integer representing basic salary compensation. **Critical:** Value must be defined in the minor unit of the currency.
     *
     * @example 500000
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. For example, a value of 500000 in USD represents $5,000.00.
     *
     * @generated from field: optional uint64 basic_pay_amount = 56;
     */
    basicPayAmount?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal Unit of Measure (UOM) tracking ID applied to contextualize basic pay duration distributions (e.g., Per Month, Per Annum).
     *
     * @example 701
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 basic_pay_uom_id = 57;
     */
    basicPayUomId?: bigint;
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
 * Represents a full User within the system.
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
     *
     * @description The categorical classification of the user entity determining their system scope and behavioral rules.
     *
     * @example USER_TYPE_EMPLOYEE
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
     *
     * @description The unique system-level login alias used by the actor to authenticate against the platform.
     *
     * @example "jane.doe"
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     *
     * @description The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.
     *
     * @example "EMP-2026-992"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description The official or full legal name of the user as recognized on statutory documentation.
     *
     * @example "Jane Doe"
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     *
     * @description The unique internal identifier of the primary web application access or RBAC security role.
     *
     * @example 1024
     *
     * @generated from field: uint64 role_id = 14;
     */
    roleId: bigint;
    /**
     *
     * @description The unique internal identifier of a secondary security role tailored exclusively for mobile application endpoints.
     *
     * @example 2048
     *
     * @generated from field: uint64 mobile_role_id = 15;
     */
    mobileRoleId: bigint;
    /**
     *
     * @description The primary communication or routing email address where structural system notifications are dispatched.
     *
     * @example "jane.doe@example.com"
     *
     * @generated from field: string email = 16;
     */
    email: string;
    /**
     *
     * @description A secondary, fallback, or corporate work email address for overlapping communication loops.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @generated from field: string work_email = 17;
     */
    workEmail: string;
    /**
     *
     * @description The primary telephone contact or mobile line number assigned to the account profile.
     *
     * @example "+12125550123"
     *
     * @generated from field: string phone = 18;
     */
    phone: string;
    /**
     *
     * @description The calendar date of birth of the user, primarily captured for verification workflows.
     *
     * @example "Mon Jan 02 2006"
     *
     * @generated from field: string birthday = 30;
     */
    birthday: string;
    /**
     *
     * @description The formal start or contract initialization date marking when the individual officially joins the team roster.
     *
     * @example "Wed Oct 25 2023"
     *
     * @generated from field: string joining_date = 31;
     */
    joiningDate: string;
    /**
     *
     * @description Primary street details, building number, or geographic line matching residential or official mailing location records.
     *
     * @example "123 Business Park Drive, Suite 400"
     *
     * @generated from field: string address = 32;
     */
    address: string;
    /**
     *
     * @description The explicit city name corresponding to the user's primary residence or workplace assignment.
     *
     * @example "Austin"
     *
     * @generated from field: string city = 33;
     */
    city: string;
    /**
     *
     * @description The administrative territory, province, state, or regional zone of residence.
     *
     * @example "Texas"
     *
     * @generated from field: string state = 34;
     */
    state: string;
    /**
     *
     * @description The country code corresponding to the user's operational location.
     *
     * @example "US"
     *
     * @generated from field: string country = 35;
     */
    country: string;
    /**
     *
     * @description The standardized postal index number or geographic ZIP routing code.
     *
     * @example "78701"
     *
     * @generated from field: string pin_code = 36;
     */
    pinCode: string;
    /**
     *
     * @description Medical identifier indicating the user's legal ABO blood group for emergency or corporate wellness logs.
     *
     * @example "O+"
     *
     * @generated from field: string blood_group = 37;
     */
    bloodGroup: string;
    /**
     *
     * @description The unique internal identifier of the operational work shift group mapped to this account profile for scheduling and timecard verification.
     *
     * @example 45
     *
     * @generated from field: uint64 shift_group_id = 50;
     */
    shiftGroupId: bigint;
    /**
     *
     * @description The internal Unit of Measure (UOM) tracking ID used to evaluate time structures, shifts, or active work hour configurations.
     *
     * @example 12
     *
     * @generated from field: uint64 attendance_uom_id = 51;
     */
    attendanceUomId: bigint;
    /**
     *
     * @description The unique internal sequence identifier of the corporate Department or business unit to which the user is structurally assigned.
     *
     * @example 304
     *
     * @generated from field: uint64 department_id = 52;
     */
    departmentId: bigint;
    /**
     *
     * @description The unique internal identifier of the designated payroll distribution group used for localized batch processing and compensation disbursement.
     *
     * @example 88
     *
     * @generated from field: uint64 payroll_group_id = 53;
     */
    payrollGroupId: bigint;
    /**
     *
     * @description The unique internal identifier of the tax matrix or statutory configuration rule governing payroll deductions.
     *
     * @example 19
     *
     * @generated from field: uint64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId: bigint;
    /**
     *
     * @description The internal identifier matching the currency context in which the user's base salary and line compensation amounts are denominated.
     *
     * @example 3
     *
     * @generated from field: uint64 payroll_currency_id = 55;
     */
    payrollCurrencyId: bigint;
    /**
     *
     * @description The raw volume integer representing basic salary compensation. **Critical:** Value must be defined in the minor unit of the currency.
     *
     * @example 500000
     *
     * @generated from field: uint64 basic_pay_amount = 56;
     */
    basicPayAmount: bigint;
    /**
     *
     * @description The internal Unit of Measure (UOM) tracking ID applied to contextualize basic pay duration distributions (e.g., Per Month, Per Annum).
     *
     * @example 701
     *
     * @generated from field: uint64 basic_pay_uom_id = 57;
     */
    basicPayUomId: bigint;
    /**
     *
     * @description Security flag determining whether Multi-Factor Authentication (MFA) has been explicitly provisioned and enabled for this user account.
     *
     * @example true
     *
     * @generated from field: bool mfa_status = 60;
     */
    mfaStatus: boolean;
    /**
     *
     * @description Collection of organization-specific dynamic data.
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
 * Micro-structure utilized strictly for internal authentication, identity verification, and cryptographic evaluation.
 * This message isolates sensitive credential states, role matrices, Multi-Factor Authentication (MFA) secrets,
 * and critical baseline attributes required to securely issue session tokens.
 *
 * **Security Warning:** This message handles raw cryptographic data and password hashes. It must never
 * be exposed directly to public-facing edge services or untrusted client layers.
 *
 * @generated from message Scailo.UserPrimaryInfo
 */
export declare class UserPrimaryInfo extends Message<UserPrimaryInfo> {
    /**
     *
     * @description The categorical classification of the user entity determining their system scope and behavioral rules.
     *
     * @example USER_TYPE_EMPLOYEE
     *
     * @generated from field: Scailo.USER_TYPE user_type = 7;
     */
    userType: USER_TYPE;
    /**
     *
     * @description The unique system-level login alias used by the actor to authenticate against the platform.
     *
     * @example "jane.doe"
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     *
     * @description The official or full legal name of the user as recognized on statutory documentation.
     *
     * @example "Jane Doe"
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     *
     * @description The securely salted and compiled binary representation of the user's password hash.
     *
     * @example "\x24\x32\x61\x24\x31\x32\x24\x4b\x53..."
     *
     * @format Byte array containing the evaluated cryptographic digest (e.g., bcrypt payload).
     *
     * @generated from field: bytes password = 12;
     */
    password: Uint8Array;
    /**
     *
     * @description The unique internal identifier of the primary web application access or RBAC security role.
     *
     * @example 1024
     *
     * @generated from field: uint64 role_id = 13;
     */
    roleId: bigint;
    /**
     *
     * @description The unique internal identifier of a secondary security role tailored exclusively for mobile application endpoints.
     *
     * @example 2048
     *
     * @generated from field: uint64 mobile_role_id = 14;
     */
    mobileRoleId: bigint;
    /**
     *
     * @description Security flag determining whether Multi-Factor Authentication (MFA) has been explicitly provisioned and enabled for this user account.
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: bool mfa_status = 15;
     */
    mfaStatus: boolean;
    /**
     *
     * @description The encrypted or raw binary cryptographic secret used to evaluate Time-Based One-Time Password (TOTP) seed structures during verification loops.
     *
     * @example "\x4e\x58\x57\x32\x4d\x34\x33\x55..."
     *
     * @format Sensitive byte array. Access must remain strictly isolated within internal authentication boundaries.
     *
     * @generated from field: bytes mfa_secret = 16;
     */
    mfaSecret: Uint8Array;
    /**
     *
     * @description Medical identifier indicating the user's legal ABO blood group for emergency or corporate wellness logs.
     *
     * @example "O+"
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
 * Container message for a collection of User records.
 *
 * @generated from message Scailo.UsersList
 */
export declare class UsersList extends Message<UsersList> {
    /**
     * @description An array of User records.
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
 * Pagination request for retrieving slices of User records.
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
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: optional Scailo.USER_SORT_KEY sort_key = 5;
     */
    sortKey?: USER_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter results by a specific lifecycle status.
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
 * Response message for paginated queries, including total counts for UI elements.
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
 * Advanced filter request for searching and paginating users using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
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
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.USER_SORT_KEY sort_key = 5;
     */
    sortKey?: USER_SORT_KEY;
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
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description The categorical classification of the user entity determining their system scope and behavioral rules.
     *
     * @example USER_TYPE_EMPLOYEE
     *
     * @generated from field: optional Scailo.USER_TYPE user_type = 7;
     */
    userType?: USER_TYPE;
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
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
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
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
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
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
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
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique system-level login alias used by the actor to authenticate against the platform.
     *
     * @example "jane.doe"
     *
     * @regex .*
     *
     * @format Must be a non-empty string and completely unique across the given business entity space.
     *
     * @generated from field: optional string username = 20;
     */
    username?: string;
    /**
     *
     * @optional
     *
     * @description The official or full legal name of the user as recognized on statutory documentation.
     *
     * @example "Jane Doe"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 21;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.
     *
     * @example "EMP-2026-992"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 22;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The primary communication or routing email address where structural system notifications are dispatched.
     *
     * @example "jane.doe@example.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format Must be a structurally sound and valid email address string.
     *
     * @generated from field: optional string email = 23;
     */
    email?: string;
    /**
     *
     * @optional
     *
     * @description The primary telephone contact or mobile line number assigned to the account profile.
     *
     * @example "+12125550123"
     *
     * @regex .*
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string phone = 24;
     */
    phone?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the primary web application access or RBAC security role.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: optional uint64 role_id = 25;
     */
    roleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the operational work shift group mapped to this account profile for scheduling and timecard verification.
     *
     * @example 45
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unallocated.
     *
     * @generated from field: optional uint64 shift_group_id = 26;
     */
    shiftGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal Unit of Measure (UOM) tracking ID used to evaluate time structures, shifts, or active work hour configurations.
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unallocated.
     *
     * @generated from field: optional uint64 attendance_uom_id = 27;
     */
    attendanceUomId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal sequence identifier of the corporate Department or business unit to which the user is structurally assigned.
     *
     * @example 304
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 for general or unassigned staff vectors.
     *
     * @generated from field: optional uint64 department_id = 28;
     */
    departmentId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the designated payroll distribution group used for localized batch processing and compensation disbursement.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 payroll_group_id = 29;
     */
    payrollGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the tax matrix or statutory configuration rule governing payroll deductions.
     *
     * @example 19
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if no deductions are assigned.
     *
     * @generated from field: optional uint64 payroll_tax_group_id = 30;
     */
    payrollTaxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal identifier matching the currency context in which the user's base salary and line compensation amounts are denominated.
     *
     * @example 3
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 payroll_currency_id = 31;
     */
    payrollCurrencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal Unit of Measure (UOM) tracking ID applied to contextualize basic pay duration distributions (e.g., Per Month, Per Annum).
     *
     * @example 701
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 basic_pay_uom_id = 32;
     */
    basicPayUomId?: bigint;
    /**
     *
     * @optional
     *
     * @description A secondary, fallback, or corporate work email address for overlapping communication loops.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string work_email = 33;
     */
    workEmail?: string;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the users associated with or belonging to a specific external Vendor profile.
     *
     * @example 5402
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 vendor_id = 70;
     */
    vendorId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the users associated with or belonging to a specific external Client profile.
     *
     * @example 9107
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * --------------------------------------------------------------------------------
     *
     * @generated from field: optional uint64 client_id = 71;
     */
    clientId?: bigint;
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
     * @generated from field: optional bool include_form_data = 501;
     */
    includeFormData?: boolean;
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
 * Target filter request for counting user records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
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
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description The categorical classification of the user entity determining their system scope and behavioral rules.
     *
     * @example USER_TYPE_EMPLOYEE
     *
     * @generated from field: optional Scailo.USER_TYPE user_type = 7;
     */
    userType?: USER_TYPE;
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
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
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
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
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
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
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
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique system-level login alias used by the actor to authenticate against the platform.
     *
     * @example "jane.doe"
     *
     * @regex .*
     *
     * @format Must be a non-empty string and completely unique across the given business entity space.
     *
     * @generated from field: optional string username = 20;
     */
    username?: string;
    /**
     *
     * @optional
     *
     * @description The official or full legal name of the user as recognized on statutory documentation.
     *
     * @example "Jane Doe"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 21;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.
     *
     * @example "EMP-2026-992"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 22;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The primary communication or routing email address where structural system notifications are dispatched.
     *
     * @example "jane.doe@example.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format Must be a structurally sound and valid email address string.
     *
     * @generated from field: optional string email = 23;
     */
    email?: string;
    /**
     *
     * @optional
     *
     * @description The primary telephone contact or mobile line number assigned to the account profile.
     *
     * @example "+12125550123"
     *
     * @regex .*
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string phone = 24;
     */
    phone?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the primary web application access or RBAC security role.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: optional uint64 role_id = 25;
     */
    roleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the operational work shift group mapped to this account profile for scheduling and timecard verification.
     *
     * @example 45
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unallocated.
     *
     * @generated from field: optional uint64 shift_group_id = 26;
     */
    shiftGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal Unit of Measure (UOM) tracking ID used to evaluate time structures, shifts, or active work hour configurations.
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unallocated.
     *
     * @generated from field: optional uint64 attendance_uom_id = 27;
     */
    attendanceUomId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal sequence identifier of the corporate Department or business unit to which the user is structurally assigned.
     *
     * @example 304
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 for general or unassigned staff vectors.
     *
     * @generated from field: optional uint64 department_id = 28;
     */
    departmentId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the designated payroll distribution group used for localized batch processing and compensation disbursement.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 payroll_group_id = 29;
     */
    payrollGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the tax matrix or statutory configuration rule governing payroll deductions.
     *
     * @example 19
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if no deductions are assigned.
     *
     * @generated from field: optional uint64 payroll_tax_group_id = 30;
     */
    payrollTaxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal identifier matching the currency context in which the user's base salary and line compensation amounts are denominated.
     *
     * @example 3
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 payroll_currency_id = 31;
     */
    payrollCurrencyId?: bigint;
    /**
     *
     * @optional
     *
     * @description The internal Unit of Measure (UOM) tracking ID applied to contextualize basic pay duration distributions (e.g., Per Month, Per Annum).
     *
     * @example 701
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer. Defaults to 0 if unassigned.
     *
     * @generated from field: optional uint64 basic_pay_uom_id = 32;
     */
    basicPayUomId?: bigint;
    /**
     *
     * @optional
     *
     * @description A secondary, fallback, or corporate work email address for overlapping communication loops.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string work_email = 33;
     */
    workEmail?: string;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the users associated with or belonging to a specific external Vendor profile.
     *
     * @example 5402
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 vendor_id = 70;
     */
    vendorId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the users associated with or belonging to a specific external Client profile.
     *
     * @example 9107
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * --------------------------------------------------------------------------------
     *
     * @generated from field: optional uint64 client_id = 71;
     */
    clientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
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
 * Broad-spectrum search and lookup request for locating and paginating users via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
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
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.USER_SORT_KEY sort_key = 5;
     */
    sortKey?: USER_SORT_KEY;
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
     * @generated from field: optional string entity_uuid = 6;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description The categorical classification of the user entity determining their system scope and behavioral rules.
     *
     * @example USER_TYPE_EMPLOYEE
     *
     * @generated from field: optional Scailo.USER_TYPE user_type = 7;
     */
    userType?: USER_TYPE;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the users associated with or belonging to a specific external Vendor profile.
     *
     * @example 5402
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 vendor_id = 70;
     */
    vendorId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the users associated with or belonging to a specific external Client profile.
     *
     * @example 9107
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 client_id = 71;
     */
    clientId?: bigint;
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
 * Request message for registering an authenticated user's mobile device endpoint.
 * This structure maps pushing target tokens, hardware operating systems, and user profiles
 * to handle automated system routing for high-volume push alerts.
 *
 * **Side Effects:**
 * - Registers or overwrites the active Firebase Cloud Messaging (FCM) token mapped to the user asset.
 * - Subscribes the device endpoint to relevant corporate notification topics.
 *
 * @generated from message Scailo.UsersServiceRegisterMobileDeviceRequest
 */
export declare class UsersServiceRegisterMobileDeviceRequest extends Message<UsersServiceRegisterMobileDeviceRequest> {
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
     * @generated from field: optional string entity_uuid = 1;
     */
    entityUuid?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal sequence identifier of the user who owns or possesses the mobile device.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer greater than zero.
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The primary operating system classification of the physical mobile device.
     *
     * @example "Android"
     *
     * @regex ^[0-9A-Za-z]+$
     *
     * @format Alphanumeric characters only. Spaces and special characters are strictly prohibited.
     *
     * @generated from field: string device_os = 12;
     */
    deviceOs: string;
    /**
     *
     * @mandatory
     *
     * @description The unique hardware token generated by Firebase Cloud Messaging (FCM) or Apple Push Notification service (APNs).
     *
     * @example "bk3RNwAz3B0:CI2gDEstbXGYadIDZsTY2s4YckCustomTokenString..."
     *
     * @regex .*
     *
     * @format Non-empty string constraint with a strict boundary enforcement between 1 and 300 characters.
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
 * Request message used to safely initiate an asynchronous user password recovery and reset sequence via email.
 *
 * **Side Effects:**
 * - Generates a secure, short-lived single-use cryptographic verification token.
 * - Dispatches a automated recovery email containing a deep-linked "magic link" to the user's primary registered address.
 *
 * @generated from message Scailo.UsersServicePasswordResetReq
 */
export declare class UsersServicePasswordResetReq extends Message<UsersServicePasswordResetReq> {
    /**
     *
     * @mandatory
     *
     * @description The unique system-level login alias matching the account requiring a password recovery event.
     *
     * @example "jane.doe"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     *
     * @optional
     *
     * @description A custom domain prefix or external FQDN string used to override standard redirect endpoints when constructing the recovery link.
     *
     * @example "https://users.acme.com/auth/reset"
     *
     * @regex .*
     *
     * @format If omitted, the system defaults to the pre-configured authless gateway domain. Highly recommended when integrating white-labeled portals.
     *
     * @generated from field: optional string domain_prefix = 20;
     */
    domainPrefix?: string;
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
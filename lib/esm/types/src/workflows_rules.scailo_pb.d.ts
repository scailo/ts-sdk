import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible service names for which a workflow rule can be created
 *
 * @generated from enum Scailo.WORKFLOW_RULE_SERVICE_NAME
 */
export declare enum WORKFLOW_RULE_SERVICE_NAME {
    /**
     * Used only for filters
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED = 0;
     */
    WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED = 0,
    /**
     * Apply the rule for absences service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ABSENCES = 10;
     */
    WORKFLOW_RULE_SERVICE_NAME_ABSENCES = 10,
    /**
     * Apply the rule for action codes service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ACTIONS_CODES = 20;
     */
    WORKFLOW_RULE_SERVICE_NAME_ACTIONS_CODES = 20,
    /**
     * Apply the rule for activities groups service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ACTIVITIES_GROUPS = 30;
     */
    WORKFLOW_RULE_SERVICE_NAME_ACTIVITIES_GROUPS = 30,
    /**
     * Apply the rule for activities statuses service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ACTIVITIES_STATUSES = 40;
     */
    WORKFLOW_RULE_SERVICE_NAME_ACTIVITIES_STATUSES = 40,
    /**
     * Apply the rule for activities tags service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ACTIVITIES_TAGS = 50;
     */
    WORKFLOW_RULE_SERVICE_NAME_ACTIVITIES_TAGS = 50,
    /**
     * Apply the rule for activities service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ACTIVITIES = 60;
     */
    WORKFLOW_RULE_SERVICE_NAME_ACTIVITIES = 60,
    /**
     * Apply the rule for announcements service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ANNOUNCEMENTS = 70;
     */
    WORKFLOW_RULE_SERVICE_NAME_ANNOUNCEMENTS = 70,
    /**
     * Apply the rule for asset indents service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ASSET_INDENTS = 80;
     */
    WORKFLOW_RULE_SERVICE_NAME_ASSET_INDENTS = 80,
    /**
     * Apply the rule for associates service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ASSOCIATES = 90;
     */
    WORKFLOW_RULE_SERVICE_NAME_ASSOCIATES = 90,
    /**
     * Apply the rule for attendances amendments service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ATTENDANCES_AMENDMENTS = 100;
     */
    WORKFLOW_RULE_SERVICE_NAME_ATTENDANCES_AMENDMENTS = 100,
    /**
     * Apply the rules for attendances service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ATTENDANCES = 110;
     */
    WORKFLOW_RULE_SERVICE_NAME_ATTENDANCES = 110,
    /**
     * Apply the rule for bank accounts service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_BANK_ACCOUNTS = 200;
     */
    WORKFLOW_RULE_SERVICE_NAME_BANK_ACCOUNTS = 200,
    /**
     * Apply the rule for clients service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_CLIENTS = 300;
     */
    WORKFLOW_RULE_SERVICE_NAME_CLIENTS = 300,
    /**
     * Apply the rule for components service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_COMPONENTS = 310;
     */
    WORKFLOW_RULE_SERVICE_NAME_COMPONENTS = 310,
    /**
     * Apply the rule for credit notes service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_CREDIT_NOTES = 320;
     */
    WORKFLOW_RULE_SERVICE_NAME_CREDIT_NOTES = 320,
    /**
     * Apply the rule for currencies service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_CURRENCIES = 330;
     */
    WORKFLOW_RULE_SERVICE_NAME_CURRENCIES = 330,
    /**
     * Apply the rule for debit notes service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_DEBIT_NOTES = 4000;
     */
    WORKFLOW_RULE_SERVICE_NAME_DEBIT_NOTES = 4000,
    /**
     * Apply the rule for departments service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_DEPARTMENTS = 410;
     */
    WORKFLOW_RULE_SERVICE_NAME_DEPARTMENTS = 410,
    /**
     * Apply the rule for equations families service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_EQUATIONS_FAMILIES = 500;
     */
    WORKFLOW_RULE_SERVICE_NAME_EQUATIONS_FAMILIES = 500,
    /**
     * Apply the rule for equations replaceables service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_EQUATIONS_REPLACEABLES = 510;
     */
    WORKFLOW_RULE_SERVICE_NAME_EQUATIONS_REPLACEABLES = 510,
    /**
     * Apply the rule for equations sales bundles service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_EQUATIONS_SALES_BUNDLES = 520;
     */
    WORKFLOW_RULE_SERVICE_NAME_EQUATIONS_SALES_BUNDLES = 520,
    /**
     * Apply the rule for equations work orders service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_EQUATIONS_WORK_ORDERS = 530;
     */
    WORKFLOW_RULE_SERVICE_NAME_EQUATIONS_WORK_ORDERS = 530,
    /**
     * Apply the rule for equipments service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_EQUIPMENTS = 540;
     */
    WORKFLOW_RULE_SERVICE_NAME_EQUIPMENTS = 540,
    /**
     * Apply the rule for expenses service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_EXPENSES = 550;
     */
    WORKFLOW_RULE_SERVICE_NAME_EXPENSES = 550,
    /**
     * Apply the rule for families service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_FAMILIES = 600;
     */
    WORKFLOW_RULE_SERVICE_NAME_FAMILIES = 600,
    /**
     * Apply the rule for feedstocks service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_FEEDSTOCKS = 610;
     */
    WORKFLOW_RULE_SERVICE_NAME_FEEDSTOCKS = 610,
    /**
     * Apply the rule for goals service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_GOALS = 700;
     */
    WORKFLOW_RULE_SERVICE_NAME_GOALS = 700,
    /**
     * Apply the rule for goods dispatches service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_GOODS_DISPATCHES = 710;
     */
    WORKFLOW_RULE_SERVICE_NAME_GOODS_DISPATCHES = 710,
    /**
     * Apply the rule for goods receipts service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_GOODS_RECEIPTS = 720;
     */
    WORKFLOW_RULE_SERVICE_NAME_GOODS_RECEIPTS = 720,
    /**
     * Apply the rule for holidays service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_HOLIDAYS = 800;
     */
    WORKFLOW_RULE_SERVICE_NAME_HOLIDAYS = 800,
    /**
     * Apply the rule for infrastructures service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_INFRASTRUCTURES = 900;
     */
    WORKFLOW_RULE_SERVICE_NAME_INFRASTRUCTURES = 900,
    /**
     * Apply the rule for inventory service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_INVENTORY = 910;
     */
    WORKFLOW_RULE_SERVICE_NAME_INVENTORY = 910,
    /**
     * Apply the rule for inward jobs free issue materials returns service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_INWARD_JOBS_FREE_ISSUE_MATERIALS_RETURNS = 1000;
     */
    WORKFLOW_RULE_SERVICE_NAME_INWARD_JOBS_FREE_ISSUE_MATERIALS_RETURNS = 1000,
    /**
     * Apply the rule for inward jobs free issue materials service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_INWARD_JOBS_FREE_ISSUE_MATERIALS = 1010;
     */
    WORKFLOW_RULE_SERVICE_NAME_INWARD_JOBS_FREE_ISSUE_MATERIALS = 1010,
    /**
     * Apply the rule for inward jobs service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_INWARD_JOBS = 1020;
     */
    WORKFLOW_RULE_SERVICE_NAME_INWARD_JOBS = 1020,
    /**
     * Apply the rule for leaves adjustments service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_LEAVES_ADJUSTMENTS = 1100;
     */
    WORKFLOW_RULE_SERVICE_NAME_LEAVES_ADJUSTMENTS = 1100,
    /**
     * Apply the rule for leaves requests service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_LEAVES_REQUESTS = 1110;
     */
    WORKFLOW_RULE_SERVICE_NAME_LEAVES_REQUESTS = 1110,
    /**
     * Apply the rule for meetings service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_MEETINGS = 1200;
     */
    WORKFLOW_RULE_SERVICE_NAME_MEETINGS = 1200,
    /**
     * Apply the rule for merchandises service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_MERCHANDISES = 1210;
     */
    WORKFLOW_RULE_SERVICE_NAME_MERCHANDISES = 1210,
    /**
     * Apply the rule for notes service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_NOTES = 1300;
     */
    WORKFLOW_RULE_SERVICE_NAME_NOTES = 1300,
    /**
     * Apply the rule for on duties service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ON_DUTIES = 1400;
     */
    WORKFLOW_RULE_SERVICE_NAME_ON_DUTIES = 1400,
    /**
     * Apply the rule for outward jobs free issue materials returns service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_OUTWARD_JOBS_FREE_ISSUE_MATERIALS_RETURNS = 1410;
     */
    WORKFLOW_RULE_SERVICE_NAME_OUTWARD_JOBS_FREE_ISSUE_MATERIALS_RETURNS = 1410,
    /**
     * Apply the rule for outward jobs free issue materials service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_OUTWARD_JOBS_FREE_ISSUE_MATERIALS = 1420;
     */
    WORKFLOW_RULE_SERVICE_NAME_OUTWARD_JOBS_FREE_ISSUE_MATERIALS = 1420,
    /**
     * Apply the rule for outward jobs service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_OUTWARD_JOBS = 1430;
     */
    WORKFLOW_RULE_SERVICE_NAME_OUTWARD_JOBS = 1430,
    /**
     * Apply the rule for overtimes service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_OVERTIMES = 1440;
     */
    WORKFLOW_RULE_SERVICE_NAME_OVERTIMES = 1440,
    /**
     * Apply the rule for production indents service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PRODUCTION_INDENTS = 1500;
     */
    WORKFLOW_RULE_SERVICE_NAME_PRODUCTION_INDENTS = 1500,
    /**
     * Apply the rule for production plans service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PRODUCTION_PLANS = 1510;
     */
    WORKFLOW_RULE_SERVICE_NAME_PRODUCTION_PLANS = 1510,
    /**
     * Apply the rule for products service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PRODUCTS = 1520;
     */
    WORKFLOW_RULE_SERVICE_NAME_PRODUCTS = 1520,
    /**
     * Apply the rule for projects service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PROJECTS = 1530;
     */
    WORKFLOW_RULE_SERVICE_NAME_PROJECTS = 1530,
    /**
     * Apply the rule for purchases enquiries service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PURCHASES_ENQUIRIES = 1540;
     */
    WORKFLOW_RULE_SERVICE_NAME_PURCHASES_ENQUIRIES = 1540,
    /**
     * Apply the rule for purchases indents service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PURCHASES_INDENTS = 1550;
     */
    WORKFLOW_RULE_SERVICE_NAME_PURCHASES_INDENTS = 1550,
    /**
     * Apply the rule for purchases orders service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PURCHASES_ORDERS = 1560;
     */
    WORKFLOW_RULE_SERVICE_NAME_PURCHASES_ORDERS = 1560,
    /**
     * Apply the rule for purchases payments service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PURCHASES_PAYMENTS = 1570;
     */
    WORKFLOW_RULE_SERVICE_NAME_PURCHASES_PAYMENTS = 1570,
    /**
     * Apply the rule for purchases returns service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_PURCHASES_RETURNS = 1580;
     */
    WORKFLOW_RULE_SERVICE_NAME_PURCHASES_RETURNS = 1580,
    /**
     * Apply the rule for qc groups service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_QC_GROUPS = 1600;
     */
    WORKFLOW_RULE_SERVICE_NAME_QC_GROUPS = 1600,
    /**
     * Apply the rule for qc samples service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_QC_SAMPLES = 1610;
     */
    WORKFLOW_RULE_SERVICE_NAME_QC_SAMPLES = 1610,
    /**
     * Apply the rule for quotations requests service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_QUOTATIONS_REQUESTS = 1620;
     */
    WORKFLOW_RULE_SERVICE_NAME_QUOTATIONS_REQUESTS = 1620,
    /**
     * Apply the rule for quotations responses service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_QUOTATIONS_RESPONSES = 1630;
     */
    WORKFLOW_RULE_SERVICE_NAME_QUOTATIONS_RESPONSES = 1630,
    /**
     * Apply the rule for replaceable indents service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_REPLACEABLE_INDENTS = 1700;
     */
    WORKFLOW_RULE_SERVICE_NAME_REPLACEABLE_INDENTS = 1700,
    /**
     * Apply the rule for roles service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_ROLES = 1710;
     */
    WORKFLOW_RULE_SERVICE_NAME_ROLES = 1710,
    /**
     * Apply the rule for salaries service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_SALARIES = 1800;
     */
    WORKFLOW_RULE_SERVICE_NAME_SALARIES = 1800,
    /**
     * Apply the rule for sales enquiries service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_SALES_ENQUIRIES = 1810;
     */
    WORKFLOW_RULE_SERVICE_NAME_SALES_ENQUIRIES = 1810,
    /**
     * Apply the rule for sales invoices service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_SALES_INVOICES = 1820;
     */
    WORKFLOW_RULE_SERVICE_NAME_SALES_INVOICES = 1820,
    /**
     * Apply the rule for sales orders service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_SALES_ORDERS = 1830;
     */
    WORKFLOW_RULE_SERVICE_NAME_SALES_ORDERS = 1830,
    /**
     * Apply the rule for sales quotations service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_SALES_QUOTATIONS = 1840;
     */
    WORKFLOW_RULE_SERVICE_NAME_SALES_QUOTATIONS = 1840,
    /**
     * Apply the rule for sales receipts service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_SALES_RECEIPTS = 1850;
     */
    WORKFLOW_RULE_SERVICE_NAME_SALES_RECEIPTS = 1850,
    /**
     * Apply the rule for sales returns service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_SALES_RETURNS = 1860;
     */
    WORKFLOW_RULE_SERVICE_NAME_SALES_RETURNS = 1860,
    /**
     * Apply the rule for stock audits service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_STOCK_AUDITS = 1870;
     */
    WORKFLOW_RULE_SERVICE_NAME_STOCK_AUDITS = 1870,
    /**
     * Apply the rule for stock issuances service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_STOCK_ISSUANCES = 1880;
     */
    WORKFLOW_RULE_SERVICE_NAME_STOCK_ISSUANCES = 1880,
    /**
     * Apply the rule for stock returns service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_STOCK_RETURNS = 1890;
     */
    WORKFLOW_RULE_SERVICE_NAME_STOCK_RETURNS = 1890,
    /**
     * Apply the rule for users service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_USERS = 1900;
     */
    WORKFLOW_RULE_SERVICE_NAME_USERS = 1900,
    /**
     * Apply the rule for vendor invoices service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_VENDOR_INVOICES = 2000;
     */
    WORKFLOW_RULE_SERVICE_NAME_VENDOR_INVOICES = 2000,
    /**
     * Apply the rule for vendors service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_VENDORS = 2010;
     */
    WORKFLOW_RULE_SERVICE_NAME_VENDORS = 2010,
    /**
     * Apply the rule for visitations service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_VISITATIONS = 2020;
     */
    WORKFLOW_RULE_SERVICE_NAME_VISITATIONS = 2020,
    /**
     * Apply the rule for work orders service
     *
     * @generated from enum value: WORKFLOW_RULE_SERVICE_NAME_WORK_ORDERS = 2100;
     */
    WORKFLOW_RULE_SERVICE_NAME_WORK_ORDERS = 2100
}
/**
 *
 * Stores all the possible moments for which a workflow rule can be created
 *
 * @generated from enum Scailo.WORKFLOW_RULE_MOMENT
 */
export declare enum WORKFLOW_RULE_MOMENT {
    /**
     * Used only for filters
     *
     * @generated from enum value: WORKFLOW_RULE_MOMENT_ANY_UNSPECIFIED = 0;
     */
    WORKFLOW_RULE_MOMENT_ANY_UNSPECIFIED = 0,
    /**
     * Run the rule at the beginning of the transaction
     *
     * @generated from enum value: WORKFLOW_RULE_MOMENT_BEGIN = 1;
     */
    WORKFLOW_RULE_MOMENT_BEGIN = 1,
    /**
     * Run the rule at the end of the transaction
     *
     * @generated from enum value: WORKFLOW_RULE_MOMENT_END = 2;
     */
    WORKFLOW_RULE_MOMENT_END = 2
}
/**
 *
 * Stores all the possible values for when the rule should be triggered. Possible values are Success and Failure.
 *
 * @generated from enum Scailo.WORKFLOW_RULE_EXECUTE_ON
 */
export declare enum WORKFLOW_RULE_EXECUTE_ON {
    /**
     * Used only for filters
     *
     * @generated from enum value: WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED = 0;
     */
    WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED = 0,
    /**
     * Execute the rule when the transaction is successful
     *
     * @generated from enum value: WORKFLOW_RULE_EXECUTE_ON_SUCCESS = 1;
     */
    WORKFLOW_RULE_EXECUTE_ON_SUCCESS = 1,
    /**
     * Execute the rule when the transaction fails
     *
     * @generated from enum value: WORKFLOW_RULE_EXECUTE_ON_FAILURE = 2;
     */
    WORKFLOW_RULE_EXECUTE_ON_FAILURE = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.WORKFLOW_RULE_SORT_KEY
 */
export declare enum WORKFLOW_RULE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    WORKFLOW_RULE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_CREATED_AT = 1;
     */
    WORKFLOW_RULE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_MODIFIED_AT = 2;
     */
    WORKFLOW_RULE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_APPROVED_ON = 3;
     */
    WORKFLOW_RULE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_APPROVED_BY = 4;
     */
    WORKFLOW_RULE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    WORKFLOW_RULE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_COMPLETED_ON = 6;
     */
    WORKFLOW_RULE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_NAME = 10;
     */
    WORKFLOW_RULE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the service name
     *
     * @generated from enum value: WORKFLOW_RULE_SORT_KEY_SERVICE_NAME = 11;
     */
    WORKFLOW_RULE_SORT_KEY_SERVICE_NAME = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.WorkflowsRulesServiceCreateRequest
 */
export declare class WorkflowsRulesServiceCreateRequest extends Message<WorkflowsRulesServiceCreateRequest> {
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
     * The name of the workflow rule
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the user who is to be notified when this rule is triggered. The notification will most likely be in the form of an email.
     *
     * @generated from field: uint64 notify_user_id = 12;
     */
    notifyUserId: bigint;
    /**
     * The description of the workflow rule
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The name of the service for which this rule is applicable for
     *
     * @generated from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 20;
     */
    serviceName: WORKFLOW_RULE_SERVICE_NAME;
    /**
     * Stores the status of the record. The rule is triggered when the status is reached.
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 21;
     */
    recordStatus: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the moment at which the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_MOMENT moment = 22;
     */
    moment: WORKFLOW_RULE_MOMENT;
    /**
     * Stores the value for when the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 23;
     */
    executeOn: WORKFLOW_RULE_EXECUTE_ON;
    /**
     * Stores any additional static payload that is provided by the user and needs to be relayed in the rule
     *
     * @generated from field: bytes user_payload = 40;
     */
    userPayload: Uint8Array;
    constructor(data?: PartialMessage<WorkflowsRulesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowsRulesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowsRulesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceCreateRequest;
    static equals(a: WorkflowsRulesServiceCreateRequest | PlainMessage<WorkflowsRulesServiceCreateRequest> | undefined, b: WorkflowsRulesServiceCreateRequest | PlainMessage<WorkflowsRulesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.WorkflowsRulesServiceUpdateRequest
 */
export declare class WorkflowsRulesServiceUpdateRequest extends Message<WorkflowsRulesServiceUpdateRequest> {
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
     * The name of the workflow rule
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the user who is to be notified when this rule is triggered. The notification will most likely be in the form of an email.
     *
     * @generated from field: uint64 notify_user_id = 12;
     */
    notifyUserId: bigint;
    /**
     * The description of the workflow rule
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The name of the service for which this rule is applicable for
     *
     * @generated from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 20;
     */
    serviceName: WORKFLOW_RULE_SERVICE_NAME;
    /**
     * Stores the status of the record. The rule is triggered when the status is reached.
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 21;
     */
    recordStatus: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the moment at which the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_MOMENT moment = 22;
     */
    moment: WORKFLOW_RULE_MOMENT;
    /**
     * Stores the value for when the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 23;
     */
    executeOn: WORKFLOW_RULE_EXECUTE_ON;
    /**
     * Stores any additional static payload that is provided by the user and needs to be relayed in the rule
     *
     * @generated from field: bytes user_payload = 40;
     */
    userPayload: Uint8Array;
    constructor(data?: PartialMessage<WorkflowsRulesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowsRulesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowsRulesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceUpdateRequest;
    static equals(a: WorkflowsRulesServiceUpdateRequest | PlainMessage<WorkflowsRulesServiceUpdateRequest> | undefined, b: WorkflowsRulesServiceUpdateRequest | PlainMessage<WorkflowsRulesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.WorkflowRule
 */
export declare class WorkflowRule extends Message<WorkflowRule> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this workflow rule
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
     * The status of this workflow rule
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this workflow rule
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this workflow rule was marked as completed
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
     * The name of the workflow rule
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique autogenerated code of the workflow rule
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is to be notified when this rule is triggered. The notification will most likely be in the form of an email.
     *
     * @generated from field: uint64 notify_user_id = 12;
     */
    notifyUserId: bigint;
    /**
     * The description of the workflow rule
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The name of the service for which this rule is applicable for
     *
     * @generated from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 20;
     */
    serviceName: WORKFLOW_RULE_SERVICE_NAME;
    /**
     * Stores the status of the record. The rule is triggered when the status is reached.
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 21;
     */
    recordStatus: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the moment at which the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_MOMENT moment = 22;
     */
    moment: WORKFLOW_RULE_MOMENT;
    /**
     * Stores the value for when the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 23;
     */
    executeOn: WORKFLOW_RULE_EXECUTE_ON;
    /**
     * Stores any additional static payload that is provided by the user and needs to be relayed in the rule
     *
     * @generated from field: bytes user_payload = 40;
     */
    userPayload: Uint8Array;
    constructor(data?: PartialMessage<WorkflowRule>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowRule";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowRule;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowRule;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowRule;
    static equals(a: WorkflowRule | PlainMessage<WorkflowRule> | undefined, b: WorkflowRule | PlainMessage<WorkflowRule> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of workflows rules
 *
 * @generated from message Scailo.WorkflowsRulesList
 */
export declare class WorkflowsRulesList extends Message<WorkflowsRulesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.WorkflowRule list = 1;
     */
    list: WorkflowRule[];
    constructor(data?: PartialMessage<WorkflowsRulesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowsRulesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowsRulesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowsRulesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowsRulesList;
    static equals(a: WorkflowsRulesList | PlainMessage<WorkflowsRulesList> | undefined, b: WorkflowsRulesList | PlainMessage<WorkflowsRulesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.WorkflowsRulesServicePaginationReq
 */
export declare class WorkflowsRulesServicePaginationReq extends Message<WorkflowsRulesServicePaginationReq> {
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
     * @generated from field: Scailo.WORKFLOW_RULE_SORT_KEY sort_key = 5;
     */
    sortKey: WORKFLOW_RULE_SORT_KEY;
    /**
     * The status of this workflow rule
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<WorkflowsRulesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowsRulesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowsRulesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowsRulesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowsRulesServicePaginationReq;
    static equals(a: WorkflowsRulesServicePaginationReq | PlainMessage<WorkflowsRulesServicePaginationReq> | undefined, b: WorkflowsRulesServicePaginationReq | PlainMessage<WorkflowsRulesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.WorkflowsRulesServicePaginationResponse
 */
export declare class WorkflowsRulesServicePaginationResponse extends Message<WorkflowsRulesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.WorkflowRule payload = 4;
     */
    payload: WorkflowRule[];
    constructor(data?: PartialMessage<WorkflowsRulesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowsRulesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowsRulesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowsRulesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowsRulesServicePaginationResponse;
    static equals(a: WorkflowsRulesServicePaginationResponse | PlainMessage<WorkflowsRulesServicePaginationResponse> | undefined, b: WorkflowsRulesServicePaginationResponse | PlainMessage<WorkflowsRulesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.WorkflowsRulesServiceFilterReq
 */
export declare class WorkflowsRulesServiceFilterReq extends Message<WorkflowsRulesServiceFilterReq> {
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
     * @generated from field: Scailo.WORKFLOW_RULE_SORT_KEY sort_key = 5;
     */
    sortKey: WORKFLOW_RULE_SORT_KEY;
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
     * The status of this workflow rule
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
     * The name of the workflow rule
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The code of the workflow rule
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the user who is being notified
     *
     * @generated from field: uint64 notify_user_id = 22;
     */
    notifyUserId: bigint;
    /**
     * The name of the service for which this rule is applicable for
     *
     * @generated from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 30;
     */
    serviceName: WORKFLOW_RULE_SERVICE_NAME;
    /**
     * Stores the status of the record. The rule is triggered when the status is reached.
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 31;
     */
    recordStatus: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the moment at which the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_MOMENT moment = 32;
     */
    moment: WORKFLOW_RULE_MOMENT;
    /**
     * Stores the value for when the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 33;
     */
    executeOn: WORKFLOW_RULE_EXECUTE_ON;
    constructor(data?: PartialMessage<WorkflowsRulesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowsRulesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowsRulesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceFilterReq;
    static equals(a: WorkflowsRulesServiceFilterReq | PlainMessage<WorkflowsRulesServiceFilterReq> | undefined, b: WorkflowsRulesServiceFilterReq | PlainMessage<WorkflowsRulesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.WorkflowsRulesServiceCountReq
 */
export declare class WorkflowsRulesServiceCountReq extends Message<WorkflowsRulesServiceCountReq> {
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
     * The status of this workflow rule
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
     * The name of the workflow rule
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The code of the workflow rule
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the user who is being notified
     *
     * @generated from field: uint64 notify_user_id = 22;
     */
    notifyUserId: bigint;
    /**
     * The name of the service for which this rule is applicable for
     *
     * @generated from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 30;
     */
    serviceName: WORKFLOW_RULE_SERVICE_NAME;
    /**
     * Stores the status of the record. The rule is triggered when the status is reached.
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 31;
     */
    recordStatus: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the moment at which the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_MOMENT moment = 32;
     */
    moment: WORKFLOW_RULE_MOMENT;
    /**
     * Stores the value for when the rule should be triggered
     *
     * @generated from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 33;
     */
    executeOn: WORKFLOW_RULE_EXECUTE_ON;
    constructor(data?: PartialMessage<WorkflowsRulesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowsRulesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowsRulesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceCountReq;
    static equals(a: WorkflowsRulesServiceCountReq | PlainMessage<WorkflowsRulesServiceCountReq> | undefined, b: WorkflowsRulesServiceCountReq | PlainMessage<WorkflowsRulesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.WorkflowsRulesServiceSearchAllReq
 */
export declare class WorkflowsRulesServiceSearchAllReq extends Message<WorkflowsRulesServiceSearchAllReq> {
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
     * @generated from field: Scailo.WORKFLOW_RULE_SORT_KEY sort_key = 5;
     */
    sortKey: WORKFLOW_RULE_SORT_KEY;
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
    constructor(data?: PartialMessage<WorkflowsRulesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowsRulesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowsRulesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowsRulesServiceSearchAllReq;
    static equals(a: WorkflowsRulesServiceSearchAllReq | PlainMessage<WorkflowsRulesServiceSearchAllReq> | undefined, b: WorkflowsRulesServiceSearchAllReq | PlainMessage<WorkflowsRulesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload that is sent to Redis whenever an event occurs
 *
 * @generated from message Scailo.WorkflowEvent
 */
export declare class WorkflowEvent extends Message<WorkflowEvent> {
    /**
     * The ID of the trigger that could be used to update the status of the trigger
     *
     * @generated from field: uint64 event_id = 1;
     */
    eventId: bigint;
    /**
     * The code of the workflow rule
     *
     * @generated from field: string rule_code = 2;
     */
    ruleCode: string;
    /**
     * The name of the service for which this rule is applicable for
     *
     * @generated from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 10;
     */
    serviceName: WORKFLOW_RULE_SERVICE_NAME;
    /**
     * The status of the transaction
     *
     * @generated from field: Scailo.WORKFLOW_RULE_EXECUTE_ON transaction_status = 20;
     */
    transactionStatus: WORKFLOW_RULE_EXECUTE_ON;
    /**
     * The payload of the transaction that just took place (could be sales order, etc.)
     *
     * @generated from field: bytes transaction_payload = 30;
     */
    transactionPayload: Uint8Array;
    /**
     * The configured static user payload of the workflow rule
     *
     * @generated from field: bytes user_payload = 40;
     */
    userPayload: Uint8Array;
    /**
     * The username of the user who triggered the workflow
     *
     * @generated from field: string username = 50;
     */
    username: string;
    constructor(data?: PartialMessage<WorkflowEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.WorkflowEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowEvent;
    static equals(a: WorkflowEvent | PlainMessage<WorkflowEvent> | undefined, b: WorkflowEvent | PlainMessage<WorkflowEvent> | undefined): boolean;
}
//# sourceMappingURL=workflows_rules.scailo_pb.d.ts.map
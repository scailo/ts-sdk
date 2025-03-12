import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 *
 * Describes the order in which the records need to be returned
 *
 * @generated from enum Scailo.SORT_ORDER
 */
export declare enum SORT_ORDER {
    /**
     * Fetch results in the ascending order of the provided sort key
     *
     * @generated from enum value: ASCENDING_UNSPECIFIED = 0;
     */
    ASCENDING_UNSPECIFIED = 0,
    /**
     * Fetch results in the descending order of the provided sort key
     *
     * @generated from enum value: DESCENDING = 1;
     */
    DESCENDING = 1
}
/**
 *
 * Describes the standard lifecycle status of each record
 *
 * @generated from enum Scailo.STANDARD_LIFECYCLE_STATUS
 */
export declare enum STANDARD_LIFECYCLE_STATUS {
    /**
     * Use this only in filter and search queries so as to retrieve all the records regardless of the status that they are in
     *
     * @generated from enum value: ANY_UNSPECIFIED = 0;
     */
    ANY_UNSPECIFIED = 0,
    /**
     * The resource has just been created, and has been sent for verification
     *
     * @generated from enum value: PREVERIFY = 1;
     */
    PREVERIFY = 1,
    /**
     * The resource has been saved as a draft
     *
     * @generated from enum value: DRAFT = 2;
     */
    DRAFT = 2,
    /**
     * The resource has been verified
     *
     * @generated from enum value: VERIFIED = 3;
     */
    VERIFIED = 3,
    /**
     * The resource has been approved
     *
     * @generated from enum value: STANDING = 4;
     */
    STANDING = 4,
    /**
     * The resource has been sent for revision
     *
     * @generated from enum value: REVISION = 5;
     */
    REVISION = 5,
    /**
     * The resource has been halted
     *
     * @generated from enum value: HALTED = 6;
     */
    HALTED = 6,
    /**
     * The resource has been marked as completed
     *
     * @generated from enum value: COMPLETED = 7;
     */
    COMPLETED = 7,
    /**
     * The resource has been discarded
     *
     * @generated from enum value: DISCARDED = 8;
     */
    DISCARDED = 8
}
/**
 *
 * Describes the available form types
 *
 * @generated from enum Scailo.FORM_TYPE
 */
export declare enum FORM_TYPE {
    /**
     * Use this only in filter and search queries so as to retrieve all the records regardless of the form type that they are in
     *
     * @generated from enum value: FORM_TYPE_ANY_UNSPECIFIED = 0;
     */
    FORM_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * The form type is "sales-enquiry-form"
     *
     * @generated from enum value: FORM_TYPE_SALES_ENQUIRY_FORM = 10;
     */
    FORM_TYPE_SALES_ENQUIRY_FORM = 10,
    /**
     * The form type is "purchase-enquiry-form"
     *
     * @generated from enum value: FORM_TYPE_PURCHASE_ENQUIRY_FORM = 20;
     */
    FORM_TYPE_PURCHASE_ENQUIRY_FORM = 20,
    /**
     * The form type is "project-form"
     *
     * @generated from enum value: FORM_TYPE_PROJECT_FORM = 30;
     */
    FORM_TYPE_PROJECT_FORM = 30,
    /**
     * The form type is "sales-order-form"
     *
     * @generated from enum value: FORM_TYPE_SALES_ORDER_FORM = 40;
     */
    FORM_TYPE_SALES_ORDER_FORM = 40,
    /**
     * The form type is "sales-quotation-form"
     *
     * @generated from enum value: FORM_TYPE_SALES_QUOTATION_FORM = 50;
     */
    FORM_TYPE_SALES_QUOTATION_FORM = 50,
    /**
     * The form type is "client-form"
     *
     * @generated from enum value: FORM_TYPE_CLIENT_FORM = 60;
     */
    FORM_TYPE_CLIENT_FORM = 60,
    /**
     * The form type is "user-form"
     *
     * @generated from enum value: FORM_TYPE_USER_FORM = 70;
     */
    FORM_TYPE_USER_FORM = 70,
    /**
     * The form type is "purchase-order-form"
     *
     * @generated from enum value: FORM_TYPE_PURCHASE_ORDER_FORM = 80;
     */
    FORM_TYPE_PURCHASE_ORDER_FORM = 80,
    /**
     * The form type is "supply-offer-form"
     *
     * @generated from enum value: FORM_TYPE_SUPPLY_OFFER_FORM = 85;
     */
    FORM_TYPE_SUPPLY_OFFER_FORM = 85,
    /**
     * The form type is "purchase-indent-form"
     *
     * @generated from enum value: FORM_TYPE_PURCHASE_INDENT_FORM = 90;
     */
    FORM_TYPE_PURCHASE_INDENT_FORM = 90,
    /**
     * The form type is "sales-invoice-form"
     *
     * @generated from enum value: FORM_TYPE_SALES_INVOICE_FORM = 100;
     */
    FORM_TYPE_SALES_INVOICE_FORM = 100,
    /**
     * The form type is "proforma-invoice-form"
     *
     * @generated from enum value: FORM_TYPE_PROFORMA_INVOICE_FORM = 105;
     */
    FORM_TYPE_PROFORMA_INVOICE_FORM = 105,
    /**
     * The form type is "goods-dispatch-form"
     *
     * @generated from enum value: FORM_TYPE_GOODS_DISPATCH_FORM = 110;
     */
    FORM_TYPE_GOODS_DISPATCH_FORM = 110,
    /**
     * The form type is "vendor-invoice-form"
     *
     * @generated from enum value: FORM_TYPE_VENDOR_INVOICE_FORM = 120;
     */
    FORM_TYPE_VENDOR_INVOICE_FORM = 120,
    /**
     * The form type is "goods-receipt-form"
     *
     * @generated from enum value: FORM_TYPE_GOODS_RECEIPT_FORM = 130;
     */
    FORM_TYPE_GOODS_RECEIPT_FORM = 130,
    /**
     * The form type is "work-order-form"
     *
     * @generated from enum value: FORM_TYPE_WORK_ORDER_FORM = 140;
     */
    FORM_TYPE_WORK_ORDER_FORM = 140,
    /**
     * The form type is "vendor-form"
     *
     * @generated from enum value: FORM_TYPE_VENDOR_FORM = 150;
     */
    FORM_TYPE_VENDOR_FORM = 150,
    /**
     * The form type is "stock-issuance-form"
     *
     * @generated from enum value: FORM_TYPE_STOCK_ISSUANCE_FORM = 160;
     */
    FORM_TYPE_STOCK_ISSUANCE_FORM = 160,
    /**
     * The form type is "stock-audit-form"
     *
     * @generated from enum value: FORM_TYPE_STOCK_AUDIT_FORM = 170;
     */
    FORM_TYPE_STOCK_AUDIT_FORM = 170,
    /**
     * The form type is "stock-return-form"
     *
     * @generated from enum value: FORM_TYPE_STOCK_RETURN_FORM = 180;
     */
    FORM_TYPE_STOCK_RETURN_FORM = 180,
    /**
     * The form type is "expense-form"
     *
     * @generated from enum value: FORM_TYPE_EXPENSE_FORM = 190;
     */
    FORM_TYPE_EXPENSE_FORM = 190,
    /**
     * The form type is "location-form"
     *
     * @generated from enum value: FORM_TYPE_LOCATION_FORM = 200;
     */
    FORM_TYPE_LOCATION_FORM = 200,
    /**
     * The form type is "bank-account-form"
     *
     * @generated from enum value: FORM_TYPE_BANK_ACCOUNT_FORM = 210;
     */
    FORM_TYPE_BANK_ACCOUNT_FORM = 210,
    /**
     * The form type is "qc-group-form"
     *
     * @generated from enum value: FORM_TYPE_QC_GROUP_FORM = 220;
     */
    FORM_TYPE_QC_GROUP_FORM = 220,
    /**
     * The form type is "quotation-request-form"
     *
     * @generated from enum value: FORM_TYPE_QUOTATION_REQUEST_FORM = 230;
     */
    FORM_TYPE_QUOTATION_REQUEST_FORM = 230,
    /**
     * The form type is "quotation-response-form"
     *
     * @generated from enum value: FORM_TYPE_QUOTATION_RESPONSE_FORM = 240;
     */
    FORM_TYPE_QUOTATION_RESPONSE_FORM = 240,
    /**
     * The form type is "production-plan-form"
     *
     * @generated from enum value: FORM_TYPE_PRODUCTION_PLAN_FORM = 250;
     */
    FORM_TYPE_PRODUCTION_PLAN_FORM = 250,
    /**
     * The form type is "production-indent-form"
     *
     * @generated from enum value: FORM_TYPE_PRODUCTION_INDENT_FORM = 260;
     */
    FORM_TYPE_PRODUCTION_INDENT_FORM = 260,
    /**
     * The form type is "replaceable-indent-form"
     *
     * @generated from enum value: FORM_TYPE_REPLACEABLE_INDENT_FORM = 270;
     */
    FORM_TYPE_REPLACEABLE_INDENT_FORM = 270,
    /**
     * The form type is "asset-indent-form"
     *
     * @generated from enum value: FORM_TYPE_ASSET_INDENT_FORM = 280;
     */
    FORM_TYPE_ASSET_INDENT_FORM = 280,
    /**
     * The form type is "purchase-return-form"
     *
     * @generated from enum value: FORM_TYPE_PURCHASE_RETURN_FORM = 290;
     */
    FORM_TYPE_PURCHASE_RETURN_FORM = 290,
    /**
     * The form type is "sales-return-form"
     *
     * @generated from enum value: FORM_TYPE_SALES_RETURN_FORM = 300;
     */
    FORM_TYPE_SALES_RETURN_FORM = 300,
    /**
     * The form type is "debit-note-form"
     *
     * @generated from enum value: FORM_TYPE_DEBIT_NOTE_FORM = 310;
     */
    FORM_TYPE_DEBIT_NOTE_FORM = 310,
    /**
     * The form type is "credit-note-form"
     *
     * @generated from enum value: FORM_TYPE_CREDIT_NOTE_FORM = 320;
     */
    FORM_TYPE_CREDIT_NOTE_FORM = 320,
    /**
     * The form type is "inward-job-form"
     *
     * @generated from enum value: FORM_TYPE_INWARD_JOB_FORM = 330;
     */
    FORM_TYPE_INWARD_JOB_FORM = 330,
    /**
     * The form type is "inward-job-free-issue-material-form"
     *
     * @generated from enum value: FORM_TYPE_INWARD_JOB_FREE_ISSUE_MATERIAL_FORM = 340;
     */
    FORM_TYPE_INWARD_JOB_FREE_ISSUE_MATERIAL_FORM = 340,
    /**
     * The form type is "inward-job-free-issue-material-return-form"
     *
     * @generated from enum value: FORM_TYPE_INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_FORM = 350;
     */
    FORM_TYPE_INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_FORM = 350,
    /**
     * The form type is "outward-job-form"
     *
     * @generated from enum value: FORM_TYPE_OUTWARD_JOB_FORM = 360;
     */
    FORM_TYPE_OUTWARD_JOB_FORM = 360,
    /**
     * The form type is "outward-job-free-issue-material-form"
     *
     * @generated from enum value: FORM_TYPE_OUTWARD_JOB_FREE_ISSUE_MATERIAL_FORM = 370;
     */
    FORM_TYPE_OUTWARD_JOB_FREE_ISSUE_MATERIAL_FORM = 370,
    /**
     * The form type is "outward-job-free-issue-material-return-form"
     *
     * @generated from enum value: FORM_TYPE_OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_FORM = 380;
     */
    FORM_TYPE_OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_FORM = 380,
    /**
     * The form type is "leave-request-form"
     *
     * @generated from enum value: FORM_TYPE_LEAVE_REQUEST_FORM = 390;
     */
    FORM_TYPE_LEAVE_REQUEST_FORM = 390,
    /**
     * The form type is "overtime-form"
     *
     * @generated from enum value: FORM_TYPE_OVERTIME_FORM = 400;
     */
    FORM_TYPE_OVERTIME_FORM = 400,
    /**
     * The form type is "attendance-form"
     *
     * @generated from enum value: FORM_TYPE_ATTENDANCE_FORM = 410;
     */
    FORM_TYPE_ATTENDANCE_FORM = 410,
    /**
     * The form type is "absence-form"
     *
     * @generated from enum value: FORM_TYPE_ABSENCE_FORM = 420;
     */
    FORM_TYPE_ABSENCE_FORM = 420,
    /**
     * The form type is "onduty-form"
     *
     * @generated from enum value: FORM_TYPE_ONDUTY_FORM = 430;
     */
    FORM_TYPE_ONDUTY_FORM = 430,
    /**
     * The form type is "attendanceamendment-form"
     *
     * @generated from enum value: FORM_TYPE_ATTENDANCE_AMENDMENT_FORM = 440;
     */
    FORM_TYPE_ATTENDANCE_AMENDMENT_FORM = 440,
    /**
     * The form type is "visitation-form"
     *
     * @generated from enum value: FORM_TYPE_VISITATION_FORM = 450;
     */
    FORM_TYPE_VISITATION_FORM = 450,
    /**
     * The form type is "salary-form"
     *
     * @generated from enum value: FORM_TYPE_SALARY_FORM = 490;
     */
    FORM_TYPE_SALARY_FORM = 490,
    /**
     * The form type is "skill-param-form"
     *
     * @generated from enum value: FORM_TYPE_SKILL_PARAM_FORM = 500;
     */
    FORM_TYPE_SKILL_PARAM_FORM = 500,
    /**
     * The form type is "skill-group-form"
     *
     * @generated from enum value: FORM_TYPE_SKILL_GROUP_FORM = 510;
     */
    FORM_TYPE_SKILL_GROUP_FORM = 510,
    /**
     * The form type is "goal-form"
     *
     * @generated from enum value: FORM_TYPE_GOAL_FORM = 520;
     */
    FORM_TYPE_GOAL_FORM = 520,
    /**
     * The form type is "meeting-form"
     *
     * @generated from enum value: FORM_TYPE_MEETING_FORM = 530;
     */
    FORM_TYPE_MEETING_FORM = 530
}
/**
 *
 * Describes the available form field elements
 *
 * @generated from enum Scailo.FORM_FIELD_ELEMENT
 */
export declare enum FORM_FIELD_ELEMENT {
    /**
     * Use this only in filter and search queries so as to retrieve all the records regardless of the form type that they are in
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_ANY_UNSPECIFIED = 0;
     */
    FORM_FIELD_ELEMENT_ANY_UNSPECIFIED = 0,
    /**
     * The element is an input
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_INPUT = 10;
     */
    FORM_FIELD_ELEMENT_INPUT = 10,
    /**
     * The element is a radio button
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_RADIO = 20;
     */
    FORM_FIELD_ELEMENT_RADIO = 20,
    /**
     * The element is a checkbox
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_CHECKBOX = 30;
     */
    FORM_FIELD_ELEMENT_CHECKBOX = 30,
    /**
     * The element is a dropdown
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_SELECT = 40;
     */
    FORM_FIELD_ELEMENT_SELECT = 40,
    /**
     * The element is a multiline textarea
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_TEXTAREA = 50;
     */
    FORM_FIELD_ELEMENT_TEXTAREA = 50,
    /**
     * The element is a date input
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_DATE = 60;
     */
    FORM_FIELD_ELEMENT_DATE = 60,
    /**
     * The element is an email address input
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_EMAIL = 70;
     */
    FORM_FIELD_ELEMENT_EMAIL = 70,
    /**
     * The element is a phone number input
     *
     * @generated from enum value: FORM_FIELD_ELEMENT_PHONE = 80;
     */
    FORM_FIELD_ELEMENT_PHONE = 80
}
/**
 *
 * Describes all the possible values within a logbook operation
 *
 * @generated from enum Scailo.LOGBOOK_OPERATION
 */
export declare enum LOGBOOK_OPERATION {
    /**
     * Create a resource
     *
     * @generated from enum value: CREATE_UNSPECIFIED = 0;
     */
    CREATE_UNSPECIFIED = 0,
    /**
     * Update a resource
     *
     * @generated from enum value: UPDATE = 1;
     */
    UPDATE = 1,
    /**
     * Archive a resource
     *
     * @generated from enum value: ARCHIVE = 2;
     */
    ARCHIVE = 2,
    /**
     * Restore a resource
     *
     * @generated from enum value: RESTORE = 3;
     */
    RESTORE = 3
}
/**
 *
 * Describes the filter applicable on boolean properties (true, false, or any)
 *
 * @generated from enum Scailo.BOOL_FILTER
 */
export declare enum BOOL_FILTER {
    /**
     * Disregard the property
     *
     * @generated from enum value: BOOL_FILTER_ANY_UNSPECIFIED = 0;
     */
    BOOL_FILTER_ANY_UNSPECIFIED = 0,
    /**
     * Filter records that have the property set to true
     *
     * @generated from enum value: BOOL_FILTER_TRUE = 1;
     */
    BOOL_FILTER_TRUE = 1,
    /**
     * Filter records that have the property set to false
     *
     * @generated from enum value: BOOL_FILTER_FALSE = 2;
     */
    BOOL_FILTER_FALSE = 2
}
/**
 *
 * Describes the lifecycle status of each inventory
 *
 * @generated from enum Scailo.INVENTORY_LIFECYCLE
 */
export declare enum INVENTORY_LIFECYCLE {
    /**
     * Used only in filters
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_ANY_UNSPECIFIED = 0;
     */
    INVENTORY_LIFECYCLE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the inventory is in QC
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_QC = 1;
     */
    INVENTORY_LIFECYCLE_QC = 1,
    /**
     * Denotes that the inventory is in store
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_STORE = 2;
     */
    INVENTORY_LIFECYCLE_STORE = 2,
    /**
     * Denotes that the inventory is in reqork
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_REWORK = 3;
     */
    INVENTORY_LIFECYCLE_REWORK = 3,
    /**
     * Denotes that the inventory has been consumed
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_CONSUMED = 4;
     */
    INVENTORY_LIFECYCLE_CONSUMED = 4,
    /**
     * Denotes that the inventory has been rejected
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_REJECTED = 5;
     */
    INVENTORY_LIFECYCLE_REJECTED = 5,
    /**
     * Denotes that the inventory has been scrapped
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_SCRAP = 6;
     */
    INVENTORY_LIFECYCLE_SCRAP = 6,
    /**
     * Denotes that the inventory is meant to be returned
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_RETURNABLE = 7;
     */
    INVENTORY_LIFECYCLE_RETURNABLE = 7,
    /**
     * Denotes that the inventory has been discarded
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_DISCARDED = 8;
     */
    INVENTORY_LIFECYCLE_DISCARDED = 8,
    /**
     * Denotes that the inventory has been issued
     *
     * @generated from enum value: INVENTORY_LIFECYCLE_ISSUED = 9;
     */
    INVENTORY_LIFECYCLE_ISSUED = 9
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.INVENTORY_SORT_KEY
 */
export declare enum INVENTORY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: INVENTORY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    INVENTORY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: INVENTORY_SORT_KEY_CREATED_AT = 1;
     */
    INVENTORY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: INVENTORY_SORT_KEY_MODIFIED_AT = 2;
     */
    INVENTORY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the store intake timestamp
     *
     * @generated from enum value: INVENTORY_SORT_KEY_STORE_INTAKE_AT = 10;
     */
    INVENTORY_SORT_KEY_STORE_INTAKE_AT = 10,
    /**
     * Fetch ordered results by the discarded timestamp
     *
     * @generated from enum value: INVENTORY_SORT_KEY_DISCARDED_AT = 11;
     */
    INVENTORY_SORT_KEY_DISCARDED_AT = 11,
    /**
     * Fetch ordered results by the shelf timestamp
     *
     * @generated from enum value: INVENTORY_SORT_KEY_SHELF_TIMESTAMP = 12;
     */
    INVENTORY_SORT_KEY_SHELF_TIMESTAMP = 12,
    /**
     * Fetch ordered results by the warranty timestamp
     *
     * @generated from enum value: INVENTORY_SORT_KEY_WARRANTY_TIMESTAMP = 13;
     */
    INVENTORY_SORT_KEY_WARRANTY_TIMESTAMP = 13,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: INVENTORY_SORT_KEY_FAMILY_ID = 14;
     */
    INVENTORY_SORT_KEY_FAMILY_ID = 14,
    /**
     * Fetch ordered results by the internal item code
     *
     * @generated from enum value: INVENTORY_SORT_KEY_INTERNAL_ITEM_CODE = 20;
     */
    INVENTORY_SORT_KEY_INTERNAL_ITEM_CODE = 20,
    /**
     * Fetch ordered results by the primary quantity
     *
     * @generated from enum value: INVENTORY_SORT_KEY_PRIMARY_QUANTITY = 21;
     */
    INVENTORY_SORT_KEY_PRIMARY_QUANTITY = 21,
    /**
     * Fetch ordered results by the remaining primary quantity
     *
     * @generated from enum value: INVENTORY_SORT_KEY_PRIMARY_QUANTITY_REMAINING = 22;
     */
    INVENTORY_SORT_KEY_PRIMARY_QUANTITY_REMAINING = 22,
    /**
     * Fetch ordered results by the secondary quantity
     *
     * @generated from enum value: INVENTORY_SORT_KEY_SECONDARY_QUANTITY = 23;
     */
    INVENTORY_SORT_KEY_SECONDARY_QUANTITY = 23,
    /**
     * Fetch ordered results by the store ID
     *
     * @generated from enum value: INVENTORY_SORT_KEY_STORE_ID = 24;
     */
    INVENTORY_SORT_KEY_STORE_ID = 24,
    /**
     * Fetch ordered results by the storage ID
     *
     * @generated from enum value: INVENTORY_SORT_KEY_STORAGE_ID = 25;
     */
    INVENTORY_SORT_KEY_STORAGE_ID = 25
}
/**
 *
 * Stores all the possible categories of inventory interactions
 *
 * @generated from enum Scailo.INVENTORY_INTERACTION_CATEGORY
 */
export declare enum INVENTORY_INTERACTION_CATEGORY {
    /**
     * Only used within filter operations
     *
     * @generated from enum value: INVENTORY_INTERACTION_CATEGORY_ANY_UNSPECIFIED = 0;
     */
    INVENTORY_INTERACTION_CATEGORY_ANY_UNSPECIFIED = 0,
    /**
     * Denotes interactions that are classified as issued
     *
     * @generated from enum value: INVENTORY_INTERACTION_CATEGORY_ISSUED = 1;
     */
    INVENTORY_INTERACTION_CATEGORY_ISSUED = 1,
    /**
     * Denotes interactions that are classified as returned
     *
     * @generated from enum value: INVENTORY_INTERACTION_CATEGORY_RETURNED = 2;
     */
    INVENTORY_INTERACTION_CATEGORY_RETURNED = 2,
    /**
     * Denotes interactions that are classified as adjusted
     *
     * @generated from enum value: INVENTORY_INTERACTION_CATEGORY_ADJUSTED = 3;
     */
    INVENTORY_INTERACTION_CATEGORY_ADJUSTED = 3
}
/**
 *
 * Stores all the possible issued purposes
 *
 * @generated from enum Scailo.INVENTORY_ISSUED_PURPOSE
 */
export declare enum INVENTORY_ISSUED_PURPOSE {
    /**
     * Only used within filter operations
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_ANY_UNSPECIFIED = 0;
     */
    INVENTORY_ISSUED_PURPOSE_ANY_UNSPECIFIED = 0,
    /**
     * Issued for Stock Issuance
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_STOCK_ISSUANCE = 1;
     */
    INVENTORY_ISSUED_PURPOSE_STOCK_ISSUANCE = 1,
    /**
     * Issued for Stock Audit
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_STOCK_AUDIT = 2;
     */
    INVENTORY_ISSUED_PURPOSE_STOCK_AUDIT = 2,
    /**
     * Issued for Stock Split
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_STOCK_SPLIT = 3;
     */
    INVENTORY_ISSUED_PURPOSE_STOCK_SPLIT = 3,
    /**
     * Returned using Stock Return
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_STOCK_RETURN = 4;
     */
    INVENTORY_ISSUED_PURPOSE_STOCK_RETURN = 4,
    /**
     * Issued for Goods Dispatch
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_GOODS_DISPATCH = 5;
     */
    INVENTORY_ISSUED_PURPOSE_GOODS_DISPATCH = 5,
    /**
     * Issued as intake
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_INTAKE = 6;
     */
    INVENTORY_ISSUED_PURPOSE_INTAKE = 6,
    /**
     * Initial Stock
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_INITIAL_STOCK = 7;
     */
    INVENTORY_ISSUED_PURPOSE_INITIAL_STOCK = 7,
    /**
     * Returned using Sales Return
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_SALES_RETURN = 8;
     */
    INVENTORY_ISSUED_PURPOSE_SALES_RETURN = 8,
    /**
     * Returned using Purchase Return
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_PURCHASE_RETURN = 9;
     */
    INVENTORY_ISSUED_PURPOSE_PURCHASE_RETURN = 9,
    /**
     * Issued for Outward Job Free Issue Material
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_OUTWARD_JOB_FREE_ISSUE_MATERIAL = 10;
     */
    INVENTORY_ISSUED_PURPOSE_OUTWARD_JOB_FREE_ISSUE_MATERIAL = 10,
    /**
     * Returned using Outward Job Free Issue Material Return
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN = 11;
     */
    INVENTORY_ISSUED_PURPOSE_OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN = 11,
    /**
     * Issued for Inward Job Free Issue Material Return
     *
     * @generated from enum value: INVENTORY_ISSUED_PURPOSE_INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN = 12;
     */
    INVENTORY_ISSUED_PURPOSE_INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN = 12
}
/**
 *
 * Stores the possible values of an amendment log reference
 *
 * @generated from enum Scailo.AMENDMENT_LOG_REF_FOR
 */
export declare enum AMENDMENT_LOG_REF_FOR {
    /**
     * Only used for filter operations
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_ANY_UNSPECIFIED = 0;
     */
    AMENDMENT_LOG_REF_FOR_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the log is made while amending a family
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_FAMILY = 1;
     */
    AMENDMENT_LOG_REF_FOR_FAMILY = 1,
    /**
     * Denotes that the log is made while amending a purchase order
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_PURCHASE_ORDER = 2;
     */
    AMENDMENT_LOG_REF_FOR_PURCHASE_ORDER = 2,
    /**
     * Denotes that the log is made while amending a supply offer
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_SUPPLY_OFFER = 21;
     */
    AMENDMENT_LOG_REF_FOR_SUPPLY_OFFER = 21,
    /**
     * Denotes that the log is made while amending a sales order
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_SALES_ORDER = 3;
     */
    AMENDMENT_LOG_REF_FOR_SALES_ORDER = 3,
    /**
     * Denotes that the log is made while amending a sales enquiry
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_SALES_ENQUIRY = 4;
     */
    AMENDMENT_LOG_REF_FOR_SALES_ENQUIRY = 4,
    /**
     * Denotes that the log is made while amending a sales quotation
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_SALES_QUOTATION = 5;
     */
    AMENDMENT_LOG_REF_FOR_SALES_QUOTATION = 5,
    /**
     * Denotes that the log is made while amending a sales invoice
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_SALES_INVOICE = 6;
     */
    AMENDMENT_LOG_REF_FOR_SALES_INVOICE = 6,
    /**
     * Denotes that the log is made while amending a proforma invoice
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_PROFORMA_INVOICE = 7;
     */
    AMENDMENT_LOG_REF_FOR_PROFORMA_INVOICE = 7,
    /**
     * Denotes that the log is made while amending a work order equation
     *
     * @generated from enum value: AMENDMENT_LOG_REF_FOR_EQUATION_WORK_ORDER = 100;
     */
    AMENDMENT_LOG_REF_FOR_EQUATION_WORK_ORDER = 100
}
/**
 *
 * Describes an empty object
 *
 * @generated from message Scailo.Empty
 */
export declare class Empty extends Message<Empty> {
    constructor(data?: PartialMessage<Empty>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Empty";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Empty;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Empty;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Empty;
    static equals(a: Empty | PlainMessage<Empty> | undefined, b: Empty | PlainMessage<Empty> | undefined): boolean;
}
/**
 *
 * Describes the boolean response
 *
 * @generated from message Scailo.BooleanResponse
 */
export declare class BooleanResponse extends Message<BooleanResponse> {
    /**
     * Stores if the value is true or false
     *
     * @generated from field: bool value = 1;
     */
    value: boolean;
    constructor(data?: PartialMessage<BooleanResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BooleanResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BooleanResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BooleanResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BooleanResponse;
    static equals(a: BooleanResponse | PlainMessage<BooleanResponse> | undefined, b: BooleanResponse | PlainMessage<BooleanResponse> | undefined): boolean;
}
/**
 *
 * Describes a generic response that consists of bytes as payload
 *
 * @generated from message Scailo.BytesResponse
 */
export declare class BytesResponse extends Message<BytesResponse> {
    /**
     * Stores the response content in bytes
     *
     * @generated from field: bytes value = 1;
     */
    value: Uint8Array;
    constructor(data?: PartialMessage<BytesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.BytesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BytesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BytesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BytesResponse;
    static equals(a: BytesResponse | PlainMessage<BytesResponse> | undefined, b: BytesResponse | PlainMessage<BytesResponse> | undefined): boolean;
}
/**
 *
 * Describes a generic response that consists of string as payload
 *
 * @generated from message Scailo.StringResponse
 */
export declare class StringResponse extends Message<StringResponse> {
    /**
     * Stores the reponse content in string
     *
     * @generated from field: string value = 1;
     */
    value: string;
    constructor(data?: PartialMessage<StringResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StringResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringResponse;
    static equals(a: StringResponse | PlainMessage<StringResponse> | undefined, b: StringResponse | PlainMessage<StringResponse> | undefined): boolean;
}
/**
 *
 * Describes a generic response that consists of price as payload
 *
 * @generated from message Scailo.PriceResponse
 */
export declare class PriceResponse extends Message<PriceResponse> {
    /**
     * Stores the price as an integer (in cents)
     *
     * @generated from field: int64 value = 1;
     */
    value: bigint;
    constructor(data?: PartialMessage<PriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceResponse;
    static equals(a: PriceResponse | PlainMessage<PriceResponse> | undefined, b: PriceResponse | PlainMessage<PriceResponse> | undefined): boolean;
}
/**
 *
 * Describes a generic response that consists of info of an image
 *
 * @generated from message Scailo.ImageResponse
 */
export declare class ImageResponse extends Message<ImageResponse> {
    /**
     * Stores the raw image content
     *
     * @generated from field: bytes image = 1;
     */
    image: Uint8Array;
    /**
     * Stores the MIME type of the image
     *
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
    /**
     * The timestamp of when the image was captured
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<ImageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ImageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageResponse;
    static equals(a: ImageResponse | PlainMessage<ImageResponse> | undefined, b: ImageResponse | PlainMessage<ImageResponse> | undefined): boolean;
}
/**
 *
 * Describes the message that consists of a base64 string. Useful for relaying an image as a base64 string.
 *
 * @generated from message Scailo.Base64String
 */
export declare class Base64String extends Message<Base64String> {
    /**
     * Stores the image as a base64 string
     *
     * @generated from field: string image = 1;
     */
    image: string;
    constructor(data?: PartialMessage<Base64String>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Base64String";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Base64String;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Base64String;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Base64String;
    static equals(a: Base64String | PlainMessage<Base64String> | undefined, b: Base64String | PlainMessage<Base64String> | undefined): boolean;
}
/**
 *
 * Describes the payload that will be used to filter records on the basis of the given month and day
 *
 * @generated from message Scailo.MonthAndDayFilter
 */
export declare class MonthAndDayFilter extends Message<MonthAndDayFilter> {
    /**
     * Stores the month (1 for Jan, 2 for Feb, etc.)
     *
     * @generated from field: uint64 month = 1;
     */
    month: bigint;
    /**
     * Stores the day
     *
     * @generated from field: uint64 day = 2;
     */
    day: bigint;
    constructor(data?: PartialMessage<MonthAndDayFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MonthAndDayFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MonthAndDayFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MonthAndDayFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MonthAndDayFilter;
    static equals(a: MonthAndDayFilter | PlainMessage<MonthAndDayFilter> | undefined, b: MonthAndDayFilter | PlainMessage<MonthAndDayFilter> | undefined): boolean;
}
/**
 *
 * Describes a generic response that represents a GPS coordinate
 *
 * @generated from message Scailo.GPSCoordinatesResponse
 */
export declare class GPSCoordinatesResponse extends Message<GPSCoordinatesResponse> {
    /**
     * Stores the latitude
     *
     * @generated from field: double latitude = 1;
     */
    latitude: number;
    /**
     * Stores the longitude
     *
     * @generated from field: double longitude = 2;
     */
    longitude: number;
    constructor(data?: PartialMessage<GPSCoordinatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GPSCoordinatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GPSCoordinatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GPSCoordinatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GPSCoordinatesResponse;
    static equals(a: GPSCoordinatesResponse | PlainMessage<GPSCoordinatesResponse> | undefined, b: GPSCoordinatesResponse | PlainMessage<GPSCoordinatesResponse> | undefined): boolean;
}
/**
 *
 * Describes the payload for a request to determine the count of records in the given status
 *
 * @generated from message Scailo.CountInSLCStatusRequest
 */
export declare class CountInSLCStatusRequest extends Message<CountInSLCStatusRequest> {
    /**
     * Denote if only active records need to be returned
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The standard lifecycle status
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 2;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<CountInSLCStatusRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CountInSLCStatusRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountInSLCStatusRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountInSLCStatusRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountInSLCStatusRequest;
    static equals(a: CountInSLCStatusRequest | PlainMessage<CountInSLCStatusRequest> | undefined, b: CountInSLCStatusRequest | PlainMessage<CountInSLCStatusRequest> | undefined): boolean;
}
/**
 *
 * Describes the count response
 *
 * @generated from message Scailo.CountResponse
 */
export declare class CountResponse extends Message<CountResponse> {
    /**
     * The number of records
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    constructor(data?: PartialMessage<CountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountResponse;
    static equals(a: CountResponse | PlainMessage<CountResponse> | undefined, b: CountResponse | PlainMessage<CountResponse> | undefined): boolean;
}
/**
 *
 * Describes the sum reponse
 *
 * @generated from message Scailo.SumResponse
 */
export declare class SumResponse extends Message<SumResponse> {
    /**
     * The sum of all the records
     *
     * @generated from field: double sum = 1;
     */
    sum: number;
    constructor(data?: PartialMessage<SumResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SumResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SumResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SumResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SumResponse;
    static equals(a: SumResponse | PlainMessage<SumResponse> | undefined, b: SumResponse | PlainMessage<SumResponse> | undefined): boolean;
}
/**
 *
 * Describes the quantity response
 *
 * @generated from message Scailo.QuantityResponse
 */
export declare class QuantityResponse extends Message<QuantityResponse> {
    /**
     * The quantity (has to be int currently, since certain locations might need negative values, such as "required quantity" responses)
     *
     * @generated from field: int64 quantity = 1;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<QuantityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuantityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuantityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuantityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuantityResponse;
    static equals(a: QuantityResponse | PlainMessage<QuantityResponse> | undefined, b: QuantityResponse | PlainMessage<QuantityResponse> | undefined): boolean;
}
/**
 *
 * Describes the dual quantity response. Primary quantity represents quantity in internal UoM and secondary quantity represents quantity in either vendor UoM or client UoM, depending on the context
 *
 * @generated from message Scailo.DualQuantitiesResponse
 */
export declare class DualQuantitiesResponse extends Message<DualQuantitiesResponse> {
    /**
     * Quantity in internal UoM
     *
     * @generated from field: uint64 primary_quantity = 1;
     */
    primaryQuantity: bigint;
    /**
     * Quantity in either vendor or client UoM
     *
     * @generated from field: uint64 secondary_quantity = 2;
     */
    secondaryQuantity: bigint;
    constructor(data?: PartialMessage<DualQuantitiesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.DualQuantitiesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DualQuantitiesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DualQuantitiesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DualQuantitiesResponse;
    static equals(a: DualQuantitiesResponse | PlainMessage<DualQuantitiesResponse> | undefined, b: DualQuantitiesResponse | PlainMessage<DualQuantitiesResponse> | undefined): boolean;
}
/**
 *
 * Describes the employee metadata of each resource
 *
 * @generated from message Scailo.EmployeeMetadata
 */
export declare class EmployeeMetadata extends Message<EmployeeMetadata> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * Stores the username of the user who added this resource
     *
     * @generated from field: string added_by = 3;
     */
    addedBy: string;
    /**
     * Represents if the resource is active
     *
     * @generated from field: bool is_active = 4;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when the resource was created
     *
     * @generated from field: uint64 created_at = 5;
     */
    createdAt: bigint;
    /**
     * Stores the timestamp of when the resource was last modified
     *
     * @generated from field: uint64 modified_at = 6;
     */
    modifiedAt: bigint;
    constructor(data?: PartialMessage<EmployeeMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EmployeeMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmployeeMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmployeeMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmployeeMetadata;
    static equals(a: EmployeeMetadata | PlainMessage<EmployeeMetadata> | undefined, b: EmployeeMetadata | PlainMessage<EmployeeMetadata> | undefined): boolean;
}
/**
 *
 * Describes the approval metadata of each resource
 *
 * @generated from message Scailo.ApprovalMetadata
 */
export declare class ApprovalMetadata extends Message<ApprovalMetadata> {
    /**
     * Stores the UNIX timestamp of when a resource was approved
     *
     * @generated from field: uint64 approved_on = 1;
     */
    approvedOn: bigint;
    /**
     * Stores the ID of the user who approved this resource
     *
     * @generated from field: uint64 approved_by_user_id = 2;
     */
    approvedByUserId: bigint;
    /**
     * Stores the Role ID of the user who approved this resource at the time of approval. This needs to be stored, as the user's role is fluid
     *
     * @generated from field: uint64 approver_role_id = 3;
     */
    approverRoleId: bigint;
    constructor(data?: PartialMessage<ApprovalMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ApprovalMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApprovalMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApprovalMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApprovalMetadata;
    static equals(a: ApprovalMetadata | PlainMessage<ApprovalMetadata> | undefined, b: ApprovalMetadata | PlainMessage<ApprovalMetadata> | undefined): boolean;
}
/**
 *
 * Describes the status of the records returned to a request
 *
 * @generated from message Scailo.ActiveStatus
 */
export declare class ActiveStatus extends Message<ActiveStatus> {
    /**
     * Used in ViewAll procedural calls, to denote if only active records need to be returned
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    constructor(data?: PartialMessage<ActiveStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActiveStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveStatus;
    static equals(a: ActiveStatus | PlainMessage<ActiveStatus> | undefined, b: ActiveStatus | PlainMessage<ActiveStatus> | undefined): boolean;
}
/**
 *
 * Describes the payload that is required to update the password of a user (by an administrator)
 *
 * @generated from message Scailo.UpdatePasswordReq
 */
export declare class UpdatePasswordReq extends Message<UpdatePasswordReq> {
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
     * The plain text password using which the user can login
     *
     * @generated from field: string plain_text_password = 10;
     */
    plainTextPassword: string;
    constructor(data?: PartialMessage<UpdatePasswordReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UpdatePasswordReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePasswordReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePasswordReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePasswordReq;
    static equals(a: UpdatePasswordReq | PlainMessage<UpdatePasswordReq> | undefined, b: UpdatePasswordReq | PlainMessage<UpdatePasswordReq> | undefined): boolean;
}
/**
 *
 * Describes the payload that is requred to update the user's own password
 *
 * @generated from message Scailo.UpdateOwnPasswordReq
 */
export declare class UpdateOwnPasswordReq extends Message<UpdateOwnPasswordReq> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The old login password
     *
     * @generated from field: string old_plain_text_password = 3;
     */
    oldPlainTextPassword: string;
    /**
     * The new password
     *
     * @generated from field: string plain_text_password = 4;
     */
    plainTextPassword: string;
    constructor(data?: PartialMessage<UpdateOwnPasswordReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UpdateOwnPasswordReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateOwnPasswordReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateOwnPasswordReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateOwnPasswordReq;
    static equals(a: UpdateOwnPasswordReq | PlainMessage<UpdateOwnPasswordReq> | undefined, b: UpdateOwnPasswordReq | PlainMessage<UpdateOwnPasswordReq> | undefined): boolean;
}
/**
 *
 * Describes the payload that is required to upload a picture associated to a resource (such as profile picture or signature)
 *
 * @generated from message Scailo.UploadPictureReq
 */
export declare class UploadPictureReq extends Message<UploadPictureReq> {
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
     * The base64 encoded image that is to be set as the profile picture
     *
     * @generated from field: string img = 10;
     */
    img: string;
    /**
     * The MIME type of the profile picture
     *
     * @generated from field: string mime_type = 11;
     */
    mimeType: string;
    constructor(data?: PartialMessage<UploadPictureReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UploadPictureReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadPictureReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadPictureReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadPictureReq;
    static equals(a: UploadPictureReq | PlainMessage<UploadPictureReq> | undefined, b: UploadPictureReq | PlainMessage<UploadPictureReq> | undefined): boolean;
}
/**
 *
 * Describes a simple search request
 *
 * @generated from message Scailo.SimpleSearchReq
 */
export declare class SimpleSearchReq extends Message<SimpleSearchReq> {
    /**
     * @generated from field: string search_key = 1;
     */
    searchKey: string;
    constructor(data?: PartialMessage<SimpleSearchReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.SimpleSearchReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleSearchReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleSearchReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleSearchReq;
    static equals(a: SimpleSearchReq | PlainMessage<SimpleSearchReq> | undefined, b: SimpleSearchReq | PlainMessage<SimpleSearchReq> | undefined): boolean;
}
/**
 *
 * Describes the payload necessary for performing Repeat requests with a specific delivery date
 *
 * @generated from message Scailo.RepeatWithDeliveryDate
 */
export declare class RepeatWithDeliveryDate extends Message<RepeatWithDeliveryDate> {
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The reference ID of the repeated record
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The common delivery date
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    constructor(data?: PartialMessage<RepeatWithDeliveryDate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RepeatWithDeliveryDate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepeatWithDeliveryDate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepeatWithDeliveryDate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepeatWithDeliveryDate;
    static equals(a: RepeatWithDeliveryDate | PlainMessage<RepeatWithDeliveryDate> | undefined, b: RepeatWithDeliveryDate | PlainMessage<RepeatWithDeliveryDate> | undefined): boolean;
}
/**
 *
 * Describes the standard identifier
 *
 * @generated from message Scailo.Identifier
 */
export declare class Identifier extends Message<Identifier> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    constructor(data?: PartialMessage<Identifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Identifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Identifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Identifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Identifier;
    static equals(a: Identifier | PlainMessage<Identifier> | undefined, b: Identifier | PlainMessage<Identifier> | undefined): boolean;
}
/**
 *
 * Describes the response that consists of the ID and the UUID of the record
 *
 * @generated from message Scailo.IdentifierResponse
 */
export declare class IdentifierResponse extends Message<IdentifierResponse> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 10;
     */
    uuid: string;
    constructor(data?: PartialMessage<IdentifierResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierResponse;
    static equals(a: IdentifierResponse | PlainMessage<IdentifierResponse> | undefined, b: IdentifierResponse | PlainMessage<IdentifierResponse> | undefined): boolean;
}
/**
 *
 * Describes the standard identifier that can also be a zero
 *
 * @generated from message Scailo.IdentifierZeroable
 */
export declare class IdentifierZeroable extends Message<IdentifierZeroable> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    constructor(data?: PartialMessage<IdentifierZeroable>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierZeroable";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierZeroable;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierZeroable;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierZeroable;
    static equals(a: IdentifierZeroable | PlainMessage<IdentifierZeroable> | undefined, b: IdentifierZeroable | PlainMessage<IdentifierZeroable> | undefined): boolean;
}
/**
 *
 * Describes the list of standard identifiers, used for identifying associated items
 *
 * @generated from message Scailo.IdentifiersList
 */
export declare class IdentifiersList extends Message<IdentifiersList> {
    /**
     * List of identifiers
     *
     * @generated from field: repeated uint64 list = 1;
     */
    list: bigint[];
    constructor(data?: PartialMessage<IdentifiersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifiersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifiersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifiersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifiersList;
    static equals(a: IdentifiersList | PlainMessage<IdentifiersList> | undefined, b: IdentifiersList | PlainMessage<IdentifiersList> | undefined): boolean;
}
/**
 *
 * Describes the list of simple strings, used for underlying associated items
 *
 * @generated from message Scailo.StringsList
 */
export declare class StringsList extends Message<StringsList> {
    /**
     * List of strings
     *
     * @generated from field: repeated string list = 1;
     */
    list: string[];
    constructor(data?: PartialMessage<StringsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StringsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringsList;
    static equals(a: StringsList | PlainMessage<StringsList> | undefined, b: StringsList | PlainMessage<StringsList> | undefined): boolean;
}
/**
 *
 * Describes the standard identifier with a user comment. Useful when an operation needs to be performed, and a user comment needs to be recorded
 *
 * @generated from message Scailo.IdentifierWithUserComment
 */
export declare class IdentifierWithUserComment extends Message<IdentifierWithUserComment> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    constructor(data?: PartialMessage<IdentifierWithUserComment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierWithUserComment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithUserComment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithUserComment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithUserComment;
    static equals(a: IdentifierWithUserComment | PlainMessage<IdentifierWithUserComment> | undefined, b: IdentifierWithUserComment | PlainMessage<IdentifierWithUserComment> | undefined): boolean;
}
/**
 *
 * Describes the standard identifier with email attributes. Useful when a record (identified by the identifier) needs to be mailed with the given subject, and the list of email addresses.
 *
 * @generated from message Scailo.IdentifierWithEmailAttributes
 */
export declare class IdentifierWithEmailAttributes extends Message<IdentifierWithEmailAttributes> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * The subject of the email
     *
     * @generated from field: string subject = 10;
     */
    subject: string;
    /**
     * The list of email addresses of the recipients
     *
     * @generated from field: repeated string recipients = 11;
     */
    recipients: string[];
    /**
     * The body of the email
     *
     * @generated from field: string body = 12;
     */
    body: string;
    constructor(data?: PartialMessage<IdentifierWithEmailAttributes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierWithEmailAttributes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithEmailAttributes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithEmailAttributes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithEmailAttributes;
    static equals(a: IdentifierWithEmailAttributes | PlainMessage<IdentifierWithEmailAttributes> | undefined, b: IdentifierWithEmailAttributes | PlainMessage<IdentifierWithEmailAttributes> | undefined): boolean;
}
/**
 *
 * Describes the standard identifier with a search key. Useful when searching within sub records of a parent item (such as shift group shifts, etc)
 *
 * @generated from message Scailo.IdentifierWithSearchKey
 */
export declare class IdentifierWithSearchKey extends Message<IdentifierWithSearchKey> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * The search key
     *
     * @generated from field: string search_key = 2;
     */
    searchKey: string;
    constructor(data?: PartialMessage<IdentifierWithSearchKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierWithSearchKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithSearchKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithSearchKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithSearchKey;
    static equals(a: IdentifierWithSearchKey | PlainMessage<IdentifierWithSearchKey> | undefined, b: IdentifierWithSearchKey | PlainMessage<IdentifierWithSearchKey> | undefined): boolean;
}
/**
 *
 * Describes the standard identifier with a file. Useful for uploading CSV files to records identified by the identifier
 *
 * @generated from message Scailo.IdentifierWithFile
 */
export declare class IdentifierWithFile extends Message<IdentifierWithFile> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * The content of the file
     *
     * @generated from field: bytes file_content = 10;
     */
    fileContent: Uint8Array;
    constructor(data?: PartialMessage<IdentifierWithFile>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierWithFile";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithFile;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithFile;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithFile;
    static equals(a: IdentifierWithFile | PlainMessage<IdentifierWithFile> | undefined, b: IdentifierWithFile | PlainMessage<IdentifierWithFile> | undefined): boolean;
}
/**
 *
 * Describes the standard UUID identifier with a file. Useful for uploading CSV files to records identified by the identifier UUID
 *
 * @generated from message Scailo.IdentifierUUIDWithFile
 */
export declare class IdentifierUUIDWithFile extends Message<IdentifierUUIDWithFile> {
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The content of the file
     *
     * @generated from field: bytes file_content = 10;
     */
    fileContent: Uint8Array;
    constructor(data?: PartialMessage<IdentifierUUIDWithFile>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierUUIDWithFile";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierUUIDWithFile;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierUUIDWithFile;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierUUIDWithFile;
    static equals(a: IdentifierUUIDWithFile | PlainMessage<IdentifierUUIDWithFile> | undefined, b: IdentifierUUIDWithFile | PlainMessage<IdentifierUUIDWithFile> | undefined): boolean;
}
/**
 *
 * Describes the UUID identifier
 *
 * @generated from message Scailo.IdentifierUUID
 */
export declare class IdentifierUUID extends Message<IdentifierUUID> {
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    constructor(data?: PartialMessage<IdentifierUUID>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierUUID";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierUUID;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierUUID;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierUUID;
    static equals(a: IdentifierUUID | PlainMessage<IdentifierUUID> | undefined, b: IdentifierUUID | PlainMessage<IdentifierUUID> | undefined): boolean;
}
/**
 *
 * Describes the UUID identifier with a user comment. Useful when an operation needs to be performed, and a user comment needs to be recorded
 *
 * @generated from message Scailo.IdentifierUUIDWithUserComment
 */
export declare class IdentifierUUIDWithUserComment extends Message<IdentifierUUIDWithUserComment> {
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 10;
     */
    userComment: string;
    constructor(data?: PartialMessage<IdentifierUUIDWithUserComment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierUUIDWithUserComment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierUUIDWithUserComment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierUUIDWithUserComment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierUUIDWithUserComment;
    static equals(a: IdentifierUUIDWithUserComment | PlainMessage<IdentifierUUIDWithUserComment> | undefined, b: IdentifierUUIDWithUserComment | PlainMessage<IdentifierUUIDWithUserComment> | undefined): boolean;
}
/**
 *
 * Describes the list of UUID identifiers, used for identifying associated items
 *
 * @generated from message Scailo.IdentifierUUIDsList
 */
export declare class IdentifierUUIDsList extends Message<IdentifierUUIDsList> {
    /**
     * List of UUID identifiers
     *
     * @generated from field: repeated Scailo.IdentifierUUID list = 1;
     */
    list: IdentifierUUID[];
    constructor(data?: PartialMessage<IdentifierUUIDsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.IdentifierUUIDsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierUUIDsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierUUIDsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierUUIDsList;
    static equals(a: IdentifierUUIDsList | PlainMessage<IdentifierUUIDsList> | undefined, b: IdentifierUUIDsList | PlainMessage<IdentifierUUIDsList> | undefined): boolean;
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being a standard lifecycle status
 *
 * @generated from message Scailo.LogbookLogConciseSLC
 */
export declare class LogbookLogConciseSLC extends Message<LogbookLogConciseSLC> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * Stores if the resource is active
     *
     * @generated from field: bool is_active = 2;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS operation = 11;
     */
    operation: STANDARD_LIFECYCLE_STATUS;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The name of the person who made this entry
     *
     * @generated from field: string name = 13;
     */
    name: string;
    /**
     * The ID of the user who made this entry
     *
     * @generated from field: uint64 user_id = 14;
     */
    userId: bigint;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 15;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 16;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogConciseSLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogConciseSLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogConciseSLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogConciseSLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogConciseSLC;
    static equals(a: LogbookLogConciseSLC | PlainMessage<LogbookLogConciseSLC> | undefined, b: LogbookLogConciseSLC | PlainMessage<LogbookLogConciseSLC> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to create a standard lifecycle log entry
 *
 * @generated from message Scailo.LogbookLogConciseSLCCreateRequest
 */
export declare class LogbookLogConciseSLCCreateRequest extends Message<LogbookLogConciseSLCCreateRequest> {
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS operation = 11;
     */
    operation: STANDARD_LIFECYCLE_STATUS;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 13;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 14;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogConciseSLCCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogConciseSLCCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogConciseSLCCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogConciseSLCCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogConciseSLCCreateRequest;
    static equals(a: LogbookLogConciseSLCCreateRequest | PlainMessage<LogbookLogConciseSLCCreateRequest> | undefined, b: LogbookLogConciseSLCCreateRequest | PlainMessage<LogbookLogConciseSLCCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to create a generic lifecycle log entry
 *
 * @generated from message Scailo.LogbookLogConciseGenericCreateRequest
 */
export declare class LogbookLogConciseGenericCreateRequest extends Message<LogbookLogConciseGenericCreateRequest> {
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: string operation = 11;
     */
    operation: string;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 13;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 14;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogConciseGenericCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogConciseGenericCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogConciseGenericCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogConciseGenericCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogConciseGenericCreateRequest;
    static equals(a: LogbookLogConciseGenericCreateRequest | PlainMessage<LogbookLogConciseGenericCreateRequest> | undefined, b: LogbookLogConciseGenericCreateRequest | PlainMessage<LogbookLogConciseGenericCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes each parameter that's part of the logbook (includes historical data of the object)
 *
 * @generated from message Scailo.LogbookLogComplete
 */
export declare class LogbookLogComplete extends Message<LogbookLogComplete> {
    /**
     * Stores the metada of this resource
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 1;
     */
    metadata?: EmployeeMetadata;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: Scailo.LOGBOOK_OPERATION operation = 11;
     */
    operation: LOGBOOK_OPERATION;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 13;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 14;
     */
    userComment: string;
    /**
     * The marshalled object at the time the log was created
     *
     * @generated from field: bytes previous_data = 15;
     */
    previousData: Uint8Array;
    constructor(data?: PartialMessage<LogbookLogComplete>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogComplete";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogComplete;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogComplete;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogComplete;
    static equals(a: LogbookLogComplete | PlainMessage<LogbookLogComplete> | undefined, b: LogbookLogComplete | PlainMessage<LogbookLogComplete> | undefined): boolean;
}
/**
 *
 * Describes the data model to handle reordering of items
 *
 * @generated from message Scailo.ReorderItemsRequest
 */
export declare class ReorderItemsRequest extends Message<ReorderItemsRequest> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * The list of IDs to be stored in the given sequence
     *
     * @generated from field: repeated uint64 sequence = 2;
     */
    sequence: bigint[];
    constructor(data?: PartialMessage<ReorderItemsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ReorderItemsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReorderItemsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReorderItemsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReorderItemsRequest;
    static equals(a: ReorderItemsRequest | PlainMessage<ReorderItemsRequest> | undefined, b: ReorderItemsRequest | PlainMessage<ReorderItemsRequest> | undefined): boolean;
}
/**
 *
 * Describes the data model to handle cloning of properties of a source record (denoted by source ID) into a target record (denoted by the target ID)
 *
 * @generated from message Scailo.CloneRequest
 */
export declare class CloneRequest extends Message<CloneRequest> {
    /**
     * The ID of the source record whose properties need to be cloned into the target record
     *
     * @generated from field: uint64 source_id = 1;
     */
    sourceId: bigint;
    /**
     * The ID of the target record that will store the cloned properties from the source
     *
     * @generated from field: uint64 target_id = 2;
     */
    targetId: bigint;
    /**
     * Stores if the existing items in the target resource need to be deleted before cloning from the source resource
     *
     * @generated from field: bool delete_existing = 3;
     */
    deleteExisting: boolean;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 4;
     */
    userComment: string;
    constructor(data?: PartialMessage<CloneRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CloneRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CloneRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CloneRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CloneRequest;
    static equals(a: CloneRequest | PlainMessage<CloneRequest> | undefined, b: CloneRequest | PlainMessage<CloneRequest> | undefined): boolean;
}
/**
 *
 * Describes the payload that consists of a file
 *
 * @generated from message Scailo.StandardFile
 */
export declare class StandardFile extends Message<StandardFile> {
    /**
     * Stores the name of the file
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Stores the MIME type of the file
     *
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
    /**
     * Stores the raw file content
     *
     * @generated from field: bytes content = 10;
     */
    content: Uint8Array;
    constructor(data?: PartialMessage<StandardFile>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StandardFile";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StandardFile;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StandardFile;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StandardFile;
    static equals(a: StandardFile | PlainMessage<StandardFile> | undefined, b: StandardFile | PlainMessage<StandardFile> | undefined): boolean;
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being a inventory lifecycle status
 *
 * @generated from message Scailo.LogbookLogInventoryLC
 */
export declare class LogbookLogInventoryLC extends Message<LogbookLogInventoryLC> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * Stores if the resource is active
     *
     * @generated from field: bool is_active = 2;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: Scailo.INVENTORY_LIFECYCLE operation = 11;
     */
    operation: INVENTORY_LIFECYCLE;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The name of the person who made this entry
     *
     * @generated from field: string name = 13;
     */
    name: string;
    /**
     * The ID of the user who made this entry
     *
     * @generated from field: uint64 user_id = 14;
     */
    userId: bigint;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 15;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 16;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogInventoryLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogInventoryLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogInventoryLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogInventoryLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogInventoryLC;
    static equals(a: LogbookLogInventoryLC | PlainMessage<LogbookLogInventoryLC> | undefined, b: LogbookLogInventoryLC | PlainMessage<LogbookLogInventoryLC> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to partition an inventory lot
 *
 * @generated from message Scailo.InventoryPartitionRequest
 */
export declare class InventoryPartitionRequest extends Message<InventoryPartitionRequest> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The primary quantity of the new partition
     *
     * @generated from field: uint64 partition_quantity = 10;
     */
    partitionQuantity: bigint;
    /**
     * The secondary quantity of the new partition
     *
     * @generated from field: uint64 partition_secondary_quantity = 11;
     */
    partitionSecondaryQuantity: bigint;
    constructor(data?: PartialMessage<InventoryPartitionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryPartitionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryPartitionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryPartitionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryPartitionRequest;
    static equals(a: InventoryPartitionRequest | PlainMessage<InventoryPartitionRequest> | undefined, b: InventoryPartitionRequest | PlainMessage<InventoryPartitionRequest> | undefined): boolean;
}
/**
 *
 * Stores the parameters present within an inventory interaction
 *
 * @generated from message Scailo.InventoryInteraction
 */
export declare class InventoryInteraction extends Message<InventoryInteraction> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this interaction
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the category
     *
     * @generated from field: Scailo.INVENTORY_INTERACTION_CATEGORY category = 10;
     */
    category: INVENTORY_INTERACTION_CATEGORY;
    /**
     * Stores the UUID of the inventory item
     *
     * @generated from field: string inventory_ref_uuid = 11;
     */
    inventoryRefUuid: string;
    /**
     * Stores the hash of the inventory item that has been issued from this parent item
     *
     * @generated from field: string issued_inventory_hash = 12;
     */
    issuedInventoryHash: string;
    /**
     * Stores the purpose for which this new item has been issued, for e.g. 'stock-issuance'
     *
     * @generated from field: Scailo.INVENTORY_ISSUED_PURPOSE issued_ref_purpose = 13;
     */
    issuedRefPurpose: INVENTORY_ISSUED_PURPOSE;
    /**
     * Stores the ID of the corresponding issued_ref_purpose item, for e.g., the stock-issuance ID
     *
     * @generated from field: uint64 issued_ref_id = 14;
     */
    issuedRefId: bigint;
    /**
     * Stores the quantity of this item (in cents). Can be negative since this could also be an adjustment
     *
     * @generated from field: int64 internal_quantity = 15;
     */
    internalQuantity: bigint;
    constructor(data?: PartialMessage<InventoryInteraction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryInteraction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryInteraction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryInteraction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryInteraction;
    static equals(a: InventoryInteraction | PlainMessage<InventoryInteraction> | undefined, b: InventoryInteraction | PlainMessage<InventoryInteraction> | undefined): boolean;
}
/**
 *
 * Describes the list of inventory interactions
 *
 * @generated from message Scailo.InventoryInteractionsList
 */
export declare class InventoryInteractionsList extends Message<InventoryInteractionsList> {
    /**
     * List of interactions
     *
     * @generated from field: repeated Scailo.InventoryInteraction list = 1;
     */
    list: InventoryInteraction[];
    constructor(data?: PartialMessage<InventoryInteractionsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InventoryInteractionsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InventoryInteractionsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InventoryInteractionsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InventoryInteractionsList;
    static equals(a: InventoryInteractionsList | PlainMessage<InventoryInteractionsList> | undefined, b: InventoryInteractionsList | PlainMessage<InventoryInteractionsList> | undefined): boolean;
}
/**
 *
 * Describes the data payload within an amendment log
 *
 * @generated from message Scailo.AmendmentLog
 */
export declare class AmendmentLog extends Message<AmendmentLog> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metada of this resource
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the reference
     *
     * @generated from field: Scailo.AMENDMENT_LOG_REF_FOR ref_for = 10;
     */
    refFor: AMENDMENT_LOG_REF_FOR;
    /**
     * Stores the ID of the reference
     *
     * @generated from field: uint64 ref_id = 11;
     */
    refId: bigint;
    /**
     * Stores the comment
     *
     * @generated from field: string comment = 20;
     */
    comment: string;
    constructor(data?: PartialMessage<AmendmentLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AmendmentLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AmendmentLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AmendmentLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AmendmentLog;
    static equals(a: AmendmentLog | PlainMessage<AmendmentLog> | undefined, b: AmendmentLog | PlainMessage<AmendmentLog> | undefined): boolean;
}
/**
 *
 * Describes the list of amendment logs
 *
 * @generated from message Scailo.AmendmentLogsList
 */
export declare class AmendmentLogsList extends Message<AmendmentLogsList> {
    /**
     * List of amendment logs
     *
     * @generated from field: repeated Scailo.AmendmentLog list = 1;
     */
    list: AmendmentLog[];
    constructor(data?: PartialMessage<AmendmentLogsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AmendmentLogsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AmendmentLogsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AmendmentLogsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AmendmentLogsList;
    static equals(a: AmendmentLogsList | PlainMessage<AmendmentLogsList> | undefined, b: AmendmentLogsList | PlainMessage<AmendmentLogsList> | undefined): boolean;
}
//# sourceMappingURL=base.scailo_pb.d.ts.map
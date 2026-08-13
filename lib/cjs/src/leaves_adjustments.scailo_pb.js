"use strict";
// addLeaveAdjustmentRecord
// modifyLeaveAdjustmentRecord
// reorderLeaveAdjustmentRecords
// deleteLeaveAdjustmentRecord
// approveLeaveAdjustmentRecord
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeavesAdjustmentsServicePaginatedRecordsResponse = exports.LeaveAdjustmentRecordsSearchRequest = exports.LeavesAdjustmentsServiceSearchAllReq = exports.LeavesAdjustmentsServiceCountReq = exports.LeavesAdjustmentsServiceFilterReq = exports.LeavesAdjustmentsServicePaginationResponse = exports.LeavesAdjustmentsServicePaginationReq = exports.LeavesAdjustmentsRecordsHistoryRequest = exports.LeavesAdjustmentsRecordsList = exports.LeavesAdjustmentsList = exports.LeaveAdjustmentRecord = exports.LeavesAdjustmentsServiceRecordUpdateRequest = exports.LeavesAdjustmentsServiceRecordCreateRequest = exports.LeaveAdjustment = exports.LeavesAdjustmentsServiceUpdateRequest = exports.LeavesAdjustmentsServiceCreateRequest = exports.LEAVE_ADJUSTMENT_RECORD_STATUS = exports.LEAVE_ADJUSTMENT_RECORD_SORT_KEY = exports.LEAVE_ADJUSTMENT_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_scailo_pb_js_1 = require("./base.scailo_pb.js");
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.LEAVE_ADJUSTMENT_SORT_KEY
 */
var LEAVE_ADJUSTMENT_SORT_KEY;
(function (LEAVE_ADJUSTMENT_SORT_KEY) {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED"] = 0] = "LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT = 1;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT"] = 1] = "LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT"] = 2] = "LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON = 3;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON"] = 3] = "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON";
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY = 4;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY"] = 4] = "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY";
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID"] = 5] = "LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID";
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON"] = 6] = "LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON";
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID = 10;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID"] = 10] = "LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID";
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER"] = 11] = "LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER";
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_USER_ID = 12;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_USER_ID"] = 12] = "LEAVE_ADJUSTMENT_SORT_KEY_USER_ID";
})(LEAVE_ADJUSTMENT_SORT_KEY || (exports.LEAVE_ADJUSTMENT_SORT_KEY = LEAVE_ADJUSTMENT_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY)
protobuf_1.proto3.util.setEnumType(LEAVE_ADJUSTMENT_SORT_KEY, "Scailo.LEAVE_ADJUSTMENT_SORT_KEY", [
    { no: 0, name: "LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED" },
    { no: 1, name: "LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT" },
    { no: 2, name: "LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT" },
    { no: 3, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON" },
    { no: 4, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY" },
    { no: 5, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID" },
    { no: 6, name: "LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON" },
    { no: 10, name: "LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID" },
    { no: 11, name: "LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER" },
    { no: 12, name: "LEAVE_ADJUSTMENT_SORT_KEY_USER_ID" },
]);
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.LEAVE_ADJUSTMENT_RECORD_SORT_KEY
 */
var LEAVE_ADJUSTMENT_RECORD_SORT_KEY;
(function (LEAVE_ADJUSTMENT_RECORD_SORT_KEY) {
    /**
     * Fetch results by id
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_ID_UNSPECIFIED"] = 0] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_CREATED_AT = 1;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_CREATED_AT"] = 1] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_CREATED_AT";
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_MODIFIED_AT = 2;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_MODIFIED_AT"] = 2] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVED_ON = 3;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVED_ON"] = 3] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVED_ON";
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVED_BY = 4;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVED_BY"] = 4] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVED_BY";
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVER_ROLE_ID"] = 5] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVER_ROLE_ID";
    /**
     * Fetch results by the leave type ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_LEAVE_TYPE_ID = 10;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_LEAVE_TYPE_ID"] = 10] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_LEAVE_TYPE_ID";
    /**
     * Fetch results by the uom ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_UOM_ID = 11;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_UOM_ID"] = 11] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_UOM_ID";
    /**
     * Fetch results by the quantity
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_SORT_KEY_QUANTITY = 12;
     */
    LEAVE_ADJUSTMENT_RECORD_SORT_KEY[LEAVE_ADJUSTMENT_RECORD_SORT_KEY["LEAVE_ADJUSTMENT_RECORD_SORT_KEY_QUANTITY"] = 12] = "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_QUANTITY";
})(LEAVE_ADJUSTMENT_RECORD_SORT_KEY || (exports.LEAVE_ADJUSTMENT_RECORD_SORT_KEY = LEAVE_ADJUSTMENT_RECORD_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(LEAVE_ADJUSTMENT_RECORD_SORT_KEY)
protobuf_1.proto3.util.setEnumType(LEAVE_ADJUSTMENT_RECORD_SORT_KEY, "Scailo.LEAVE_ADJUSTMENT_RECORD_SORT_KEY", [
    { no: 0, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_ID_UNSPECIFIED" },
    { no: 1, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_CREATED_AT" },
    { no: 2, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_MODIFIED_AT" },
    { no: 3, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVED_ON" },
    { no: 4, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVED_BY" },
    { no: 5, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_APPROVER_ROLE_ID" },
    { no: 10, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_LEAVE_TYPE_ID" },
    { no: 11, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_UOM_ID" },
    { no: 12, name: "LEAVE_ADJUSTMENT_RECORD_SORT_KEY_QUANTITY" },
]);
/**
 *
 * Describes the applicable statuses of leave adjustment records
 *
 * @generated from enum Scailo.LEAVE_ADJUSTMENT_RECORD_STATUS
 */
var LEAVE_ADJUSTMENT_RECORD_STATUS;
(function (LEAVE_ADJUSTMENT_RECORD_STATUS) {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_STATUS_ANY_UNSPECIFIED = 0;
     */
    LEAVE_ADJUSTMENT_RECORD_STATUS[LEAVE_ADJUSTMENT_RECORD_STATUS["LEAVE_ADJUSTMENT_RECORD_STATUS_ANY_UNSPECIFIED"] = 0] = "LEAVE_ADJUSTMENT_RECORD_STATUS_ANY_UNSPECIFIED";
    /**
     * Denotes that the leave adjustment records must have been approved
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_STATUS_APPROVED = 1;
     */
    LEAVE_ADJUSTMENT_RECORD_STATUS[LEAVE_ADJUSTMENT_RECORD_STATUS["LEAVE_ADJUSTMENT_RECORD_STATUS_APPROVED"] = 1] = "LEAVE_ADJUSTMENT_RECORD_STATUS_APPROVED";
    /**
     * Denotes that the leave adjustment records must be waiting for approval
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_RECORD_STATUS_UNAPPROVED = 2;
     */
    LEAVE_ADJUSTMENT_RECORD_STATUS[LEAVE_ADJUSTMENT_RECORD_STATUS["LEAVE_ADJUSTMENT_RECORD_STATUS_UNAPPROVED"] = 2] = "LEAVE_ADJUSTMENT_RECORD_STATUS_UNAPPROVED";
})(LEAVE_ADJUSTMENT_RECORD_STATUS || (exports.LEAVE_ADJUSTMENT_RECORD_STATUS = LEAVE_ADJUSTMENT_RECORD_STATUS = {}));
// Retrieve enum metadata with: proto3.getEnumType(LEAVE_ADJUSTMENT_RECORD_STATUS)
protobuf_1.proto3.util.setEnumType(LEAVE_ADJUSTMENT_RECORD_STATUS, "Scailo.LEAVE_ADJUSTMENT_RECORD_STATUS", [
    { no: 0, name: "LEAVE_ADJUSTMENT_RECORD_STATUS_ANY_UNSPECIFIED" },
    { no: 1, name: "LEAVE_ADJUSTMENT_RECORD_STATUS_APPROVED" },
    { no: 2, name: "LEAVE_ADJUSTMENT_RECORD_STATUS_UNAPPROVED" },
]);
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.LeavesAdjustmentsServiceCreateRequest
 */
class LeavesAdjustmentsServiceCreateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.entityUuid = "";
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
        this.userComment = "";
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
        this.vaultFolderId = protobuf_1.protoInt64.zero;
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
        this.referenceId = "";
        /**
         * The ID of the user for whom this adjustment needs to be made
         *
         * @generated from field: uint64 user_id = 11;
         */
        this.userId = protobuf_1.protoInt64.zero;
        /**
         * The description of the leave adjustment
         *
         * @generated from field: string description = 12;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceCreateRequest, a, b);
    }
}
exports.LeavesAdjustmentsServiceCreateRequest = LeavesAdjustmentsServiceCreateRequest;
LeavesAdjustmentsServiceCreateRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceCreateRequest.typeName = "Scailo.LeavesAdjustmentsServiceCreateRequest";
LeavesAdjustmentsServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "user_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.LeavesAdjustmentsServiceUpdateRequest
 */
class LeavesAdjustmentsServiceUpdateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.userComment = "";
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
        this.id = protobuf_1.protoInt64.zero;
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
        this.notifyUsers = false;
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
        this.vaultFolderId = protobuf_1.protoInt64.zero;
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
        this.referenceId = "";
        /**
         * The description of the leave adjustment
         *
         * @generated from field: string description = 12;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceUpdateRequest, a, b);
    }
}
exports.LeavesAdjustmentsServiceUpdateRequest = LeavesAdjustmentsServiceUpdateRequest;
LeavesAdjustmentsServiceUpdateRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceUpdateRequest.typeName = "Scailo.LeavesAdjustmentsServiceUpdateRequest";
LeavesAdjustmentsServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.LeaveAdjustment
 */
class LeaveAdjustment extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         *
         * @description The organization's globally unique identifier.
         *
         * @example "550e8400-e29b-41d4-a716-446655440000"
         *
         * @generated from field: string entity_uuid = 1;
         */
        this.entityUuid = "";
        /**
         *
         * @description The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).
         *
         * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
         */
        this.status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
        /**
         *
         * @description Comprehensive audit trail of every operation performed on this record.
         *
         * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
         */
        this.logs = [];
        /**
         *
         * @description UNIX timestamp of when the record transitioned to the COMPLETED state.
         *
         * @example 1698400000
         *
         * @generated from field: uint64 completed_on = 6;
         */
        this.completedOn = protobuf_1.protoInt64.zero;
        /**
         *
         * @description Link to the document storage folder.
         *
         * @example 15234
         *
         * @generated from field: uint64 vault_folder_id = 9;
         */
        this.vaultFolderId = protobuf_1.protoInt64.zero;
        /**
         *
         * @description The user-provided reference ID.
         *
         * @example "ABS-2023-001"
         *
         * @generated from field: string reference_id = 10;
         */
        this.referenceId = "";
        /**
         *
         * @description The system-generated immutable reference number.
         *
         * @example "ABS-2023-X9Z2"
         *
         * @generated from field: string final_ref_number = 11;
         */
        this.finalRefNumber = "";
        /**
         * The ID of the user for whom this adjustment needs to be made
         *
         * @generated from field: uint64 user_id = 12;
         */
        this.userId = protobuf_1.protoInt64.zero;
        /**
         * The description of the leave adjustment
         *
         * @generated from field: string description = 13;
         */
        this.description = "";
        /**
         * The list of associated leave adjustment records
         *
         * @generated from field: repeated Scailo.LeaveAdjustmentRecord list = 20;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeaveAdjustment().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeaveAdjustment().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeaveAdjustment().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeaveAdjustment, a, b);
    }
}
exports.LeaveAdjustment = LeaveAdjustment;
LeaveAdjustment.runtime = protobuf_1.proto3;
LeaveAdjustment.typeName = "Scailo.LeaveAdjustment";
LeaveAdjustment.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: base_scailo_pb_js_1.EmployeeMetadata },
    { no: 3, name: "approval_metadata", kind: "message", T: base_scailo_pb_js_1.ApprovalMetadata },
    { no: 4, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 5, name: "logs", kind: "message", T: base_scailo_pb_js_1.LogbookLogConciseSLC, repeated: true },
    { no: 6, name: "completed_on", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "user_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "list", kind: "message", T: LeaveAdjustmentRecord, repeated: true },
]);
/**
 *
 * Describes the parameters required to add a record
 *
 * @generated from message Scailo.LeavesAdjustmentsServiceRecordCreateRequest
 */
class LeavesAdjustmentsServiceRecordCreateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.userComment = "";
        /**
         * Stores the leave adjustment ID
         *
         * @generated from field: uint64 leave_adjustment_id = 10;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave type ID
         *
         * @generated from field: uint64 leave_type_id = 11;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        /**
         * Stores the unit of material ID
         *
         * @generated from field: uint64 uom_id = 12;
         */
        this.uomId = protobuf_1.protoInt64.zero;
        /**
         * Stores the quantity of leaves (in cents)
         *
         * @generated from field: uint64 quantity = 13;
         */
        this.quantity = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceRecordCreateRequest, a, b);
    }
}
exports.LeavesAdjustmentsServiceRecordCreateRequest = LeavesAdjustmentsServiceRecordCreateRequest;
LeavesAdjustmentsServiceRecordCreateRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceRecordCreateRequest.typeName = "Scailo.LeavesAdjustmentsServiceRecordCreateRequest";
LeavesAdjustmentsServiceRecordCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "leave_adjustment_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "leave_type_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "uom_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: "quantity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 *
 * Describes the parameters required to update a record
 *
 * @generated from message Scailo.LeavesAdjustmentsServiceRecordUpdateRequest
 */
class LeavesAdjustmentsServiceRecordUpdateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.userComment = "";
        /**
         * The ID of the record
         *
         * @generated from field: uint64 id = 2;
         */
        this.id = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave adjustment ID
         *
         * @generated from field: uint64 leave_adjustment_id = 10;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave type ID
         *
         * @generated from field: uint64 leave_type_id = 11;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        /**
         * Stores the unit of material ID
         *
         * @generated from field: uint64 uom_id = 12;
         */
        this.uomId = protobuf_1.protoInt64.zero;
        /**
         * Stores the quantity of leaves (in cents)
         *
         * @generated from field: uint64 quantity = 13;
         */
        this.quantity = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceRecordUpdateRequest, a, b);
    }
}
exports.LeavesAdjustmentsServiceRecordUpdateRequest = LeavesAdjustmentsServiceRecordUpdateRequest;
LeavesAdjustmentsServiceRecordUpdateRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceRecordUpdateRequest.typeName = "Scailo.LeavesAdjustmentsServiceRecordUpdateRequest";
LeavesAdjustmentsServiceRecordUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "leave_adjustment_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "leave_type_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "uom_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: "quantity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 *
 * Describes the parameters that constitute a record associated to a record
 *
 * @generated from message Scailo.LeaveAdjustmentRecord
 */
class LeaveAdjustmentRecord extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         *
         * @description The organization's globally unique identifier.
         *
         * @example "550e8400-e29b-41d4-a716-446655440000"
         *
         * @generated from field: string entity_uuid = 1;
         */
        this.entityUuid = "";
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
        this.needApproval = false;
        /**
         * Stores any comment that the user might have added during an operation
         *
         * @generated from field: string user_comment = 5;
         */
        this.userComment = "";
        /**
         * Stores the leave adjustment ID
         *
         * @generated from field: uint64 leave_adjustment_id = 10;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave type ID
         *
         * @generated from field: uint64 leave_type_id = 11;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        /**
         * Stores the unit of material ID
         *
         * @generated from field: uint64 uom_id = 12;
         */
        this.uomId = protobuf_1.protoInt64.zero;
        /**
         * Stores the quantity of leaves (in cents)
         *
         * @generated from field: uint64 quantity = 13;
         */
        this.quantity = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeaveAdjustmentRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeaveAdjustmentRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeaveAdjustmentRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeaveAdjustmentRecord, a, b);
    }
}
exports.LeaveAdjustmentRecord = LeaveAdjustmentRecord;
LeaveAdjustmentRecord.runtime = protobuf_1.proto3;
LeaveAdjustmentRecord.typeName = "Scailo.LeaveAdjustmentRecord";
LeaveAdjustmentRecord.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: base_scailo_pb_js_1.EmployeeMetadata },
    { no: 3, name: "approval_metadata", kind: "message", T: base_scailo_pb_js_1.ApprovalMetadata },
    { no: 4, name: "need_approval", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "leave_adjustment_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "leave_type_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "uom_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: "quantity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.LeavesAdjustmentsList
 */
class LeavesAdjustmentsList extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Scailo.LeaveAdjustment list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsList, a, b);
    }
}
exports.LeavesAdjustmentsList = LeavesAdjustmentsList;
LeavesAdjustmentsList.runtime = protobuf_1.proto3;
LeavesAdjustmentsList.typeName = "Scailo.LeavesAdjustmentsList";
LeavesAdjustmentsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: LeaveAdjustment, repeated: true },
]);
/**
 *
 * Describes the message consisting of the list of leave adjustment records
 *
 * @generated from message Scailo.LeavesAdjustmentsRecordsList
 */
class LeavesAdjustmentsRecordsList extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Scailo.LeaveAdjustmentRecord list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsRecordsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsRecordsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsRecordsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsRecordsList, a, b);
    }
}
exports.LeavesAdjustmentsRecordsList = LeavesAdjustmentsRecordsList;
LeavesAdjustmentsRecordsList.runtime = protobuf_1.proto3;
LeavesAdjustmentsRecordsList.typeName = "Scailo.LeavesAdjustmentsRecordsList";
LeavesAdjustmentsRecordsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: LeaveAdjustmentRecord, repeated: true },
]);
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.LeavesAdjustmentsRecordsHistoryRequest
 */
class LeavesAdjustmentsRecordsHistoryRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores the leave adjustment ID
         *
         * @generated from field: uint64 leave_adjustment_id = 10;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave type ID
         *
         * @generated from field: uint64 leave_type_id = 11;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsRecordsHistoryRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsRecordsHistoryRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsRecordsHistoryRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsRecordsHistoryRequest, a, b);
    }
}
exports.LeavesAdjustmentsRecordsHistoryRequest = LeavesAdjustmentsRecordsHistoryRequest;
LeavesAdjustmentsRecordsHistoryRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsRecordsHistoryRequest.typeName = "Scailo.LeavesAdjustmentsRecordsHistoryRequest";
LeavesAdjustmentsRecordsHistoryRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 10, name: "leave_adjustment_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "leave_type_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.LeavesAdjustmentsServicePaginationReq
 */
class LeavesAdjustmentsServicePaginationReq extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
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
        this.count = protobuf_1.protoInt64.zero;
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
        this.offset = protobuf_1.protoInt64.zero;
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
        this.sortOrder = base_scailo_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         *
         * @optional
         *
         * @description The specific field key to sort the results by.
         *
         * @generated from field: Scailo.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The status of this record
         *
         * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
         */
        this.status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServicePaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServicePaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServicePaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServicePaginationReq, a, b);
    }
}
exports.LeavesAdjustmentsServicePaginationReq = LeavesAdjustmentsServicePaginationReq;
LeavesAdjustmentsServicePaginationReq.runtime = protobuf_1.proto3;
LeavesAdjustmentsServicePaginationReq.typeName = "Scailo.LeavesAdjustmentsServicePaginationReq";
LeavesAdjustmentsServicePaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.BOOL_FILTER) },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) },
    { no: 6, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
]);
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.LeavesAdjustmentsServicePaginationResponse
 */
class LeavesAdjustmentsServicePaginationResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         *
         * @description Number of records returned in the current response slice.
         *
         * @example 50
         *
         * @generated from field: uint64 count = 1;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         *
         * @description The offset provided in the request.
         *
         * @example 0
         *
         * @generated from field: uint64 offset = 2;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         *
         * @description The total number of records matching the criteria.
         *
         * @example 1250
         *
         * @generated from field: uint64 total = 3;
         */
        this.total = protobuf_1.protoInt64.zero;
        /**
         *
         * @description The array of records for the current page.
         *
         * @generated from field: repeated Scailo.LeaveAdjustment payload = 4;
         */
        this.payload = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServicePaginationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServicePaginationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServicePaginationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServicePaginationResponse, a, b);
    }
}
exports.LeavesAdjustmentsServicePaginationResponse = LeavesAdjustmentsServicePaginationResponse;
LeavesAdjustmentsServicePaginationResponse.runtime = protobuf_1.proto3;
LeavesAdjustmentsServicePaginationResponse.typeName = "Scailo.LeavesAdjustmentsServicePaginationResponse";
LeavesAdjustmentsServicePaginationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "payload", kind: "message", T: LeaveAdjustment, repeated: true },
]);
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.LeavesAdjustmentsServiceFilterReq
 */
class LeavesAdjustmentsServiceFilterReq extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
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
        this.count = protobuf_1.protoInt64.zero;
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
        this.offset = protobuf_1.protoInt64.zero;
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
        this.sortOrder = base_scailo_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         *
         * @optional
         *
         * @description The field used for sorting.
         *
         * @generated from field: Scailo.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
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
        this.creationTimestampStart = protobuf_1.protoInt64.zero;
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
        this.creationTimestampEnd = protobuf_1.protoInt64.zero;
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
        this.modificationTimestampStart = protobuf_1.protoInt64.zero;
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
        this.modificationTimestampEnd = protobuf_1.protoInt64.zero;
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
        this.entityUuid = "";
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
        this.status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
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
        this.approvedOnStart = protobuf_1.protoInt64.zero;
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
        this.approvedOnEnd = protobuf_1.protoInt64.zero;
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
        this.approvedByUserId = protobuf_1.protoInt64.zero;
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
        this.approverRoleId = protobuf_1.protoInt64.zero;
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
        this.completedOnStart = protobuf_1.protoInt64.zero;
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
        this.completedOnEnd = protobuf_1.protoInt64.zero;
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
        this.referenceId = "";
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
        this.finalRefNumber = "";
        /**
         * The ID of the user for whom this adjustment needs to be made
         *
         * @generated from field: uint64 user_id = 22;
         */
        this.userId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceFilterReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceFilterReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceFilterReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceFilterReq, a, b);
    }
}
exports.LeavesAdjustmentsServiceFilterReq = LeavesAdjustmentsServiceFilterReq;
LeavesAdjustmentsServiceFilterReq.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceFilterReq.typeName = "Scailo.LeavesAdjustmentsServiceFilterReq";
LeavesAdjustmentsServiceFilterReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.BOOL_FILTER) },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) },
    { no: 101, name: "creation_timestamp_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 102, name: "creation_timestamp_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 103, name: "modification_timestamp_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 104, name: "modification_timestamp_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "approved_on_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "approved_on_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: "approved_by_user_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 14, name: "approver_role_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 15, name: "completed_on_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 16, name: "completed_on_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 20, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "user_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.LeavesAdjustmentsServiceCountReq
 */
class LeavesAdjustmentsServiceCountReq extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
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
        this.creationTimestampStart = protobuf_1.protoInt64.zero;
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
        this.creationTimestampEnd = protobuf_1.protoInt64.zero;
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
        this.modificationTimestampStart = protobuf_1.protoInt64.zero;
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
        this.modificationTimestampEnd = protobuf_1.protoInt64.zero;
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
        this.entityUuid = "";
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
        this.status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
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
        this.approvedOnStart = protobuf_1.protoInt64.zero;
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
        this.approvedOnEnd = protobuf_1.protoInt64.zero;
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
        this.approvedByUserId = protobuf_1.protoInt64.zero;
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
        this.approverRoleId = protobuf_1.protoInt64.zero;
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
        this.completedOnStart = protobuf_1.protoInt64.zero;
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
        this.completedOnEnd = protobuf_1.protoInt64.zero;
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
        this.referenceId = "";
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
        this.finalRefNumber = "";
        /**
         * The ID of the user for whom this adjustment needs to be made
         *
         * @generated from field: uint64 user_id = 22;
         */
        this.userId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceCountReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceCountReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceCountReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceCountReq, a, b);
    }
}
exports.LeavesAdjustmentsServiceCountReq = LeavesAdjustmentsServiceCountReq;
LeavesAdjustmentsServiceCountReq.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceCountReq.typeName = "Scailo.LeavesAdjustmentsServiceCountReq";
LeavesAdjustmentsServiceCountReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.BOOL_FILTER) },
    { no: 101, name: "creation_timestamp_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 102, name: "creation_timestamp_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 103, name: "modification_timestamp_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 104, name: "modification_timestamp_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "approved_on_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "approved_on_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: "approved_by_user_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 14, name: "approver_role_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 15, name: "completed_on_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 16, name: "completed_on_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 20, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "user_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.LeavesAdjustmentsServiceSearchAllReq
 */
class LeavesAdjustmentsServiceSearchAllReq extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
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
        this.count = protobuf_1.protoInt64.zero;
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
        this.offset = protobuf_1.protoInt64.zero;
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
        this.sortOrder = base_scailo_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         *
         * @optional
         *
         * @description The field used for sorting.
         *
         * @generated from field: Scailo.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
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
        this.entityUuid = "";
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
        this.status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
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
        this.searchKey = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceSearchAllReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceSearchAllReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceSearchAllReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceSearchAllReq, a, b);
    }
}
exports.LeavesAdjustmentsServiceSearchAllReq = LeavesAdjustmentsServiceSearchAllReq;
LeavesAdjustmentsServiceSearchAllReq.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceSearchAllReq.typeName = "Scailo.LeavesAdjustmentsServiceSearchAllReq";
LeavesAdjustmentsServiceSearchAllReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.BOOL_FILTER) },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the request payload to retrieve approved or unapproved records.
 *
 * @generated from message Scailo.LeaveAdjustmentRecordsSearchRequest
 */
class LeaveAdjustmentRecordsSearchRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
        this.isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
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
        this.count = protobuf_1.protoInt64.zero;
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
        this.offset = protobuf_1.protoInt64.zero;
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
        this.sortOrder = base_scailo_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         *
         * @optional
         *
         * @description The field used for sorting.
         *
         * @generated from field: Scailo.LEAVE_ADJUSTMENT_RECORD_SORT_KEY sort_key = 5;
         */
        this.sortKey = LEAVE_ADJUSTMENT_RECORD_SORT_KEY.LEAVE_ADJUSTMENT_RECORD_SORT_KEY_ID_UNSPECIFIED;
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
        this.entityUuid = "";
        /**
         * The status of the records
         *
         * @generated from field: Scailo.LEAVE_ADJUSTMENT_RECORD_STATUS status = 7;
         */
        this.status = LEAVE_ADJUSTMENT_RECORD_STATUS.LEAVE_ADJUSTMENT_RECORD_STATUS_ANY_UNSPECIFIED;
        /**
         * The start range of approved timestamp
         *
         * @generated from field: uint64 approved_on_start = 10;
         */
        this.approvedOnStart = protobuf_1.protoInt64.zero;
        /**
         * The end range of approved timestamp
         *
         * @generated from field: uint64 approved_on_end = 11;
         */
        this.approvedOnEnd = protobuf_1.protoInt64.zero;
        /**
         * The ID of the approver
         *
         * @generated from field: uint64 approved_by_user_id = 12;
         */
        this.approvedByUserId = protobuf_1.protoInt64.zero;
        /**
         * The role ID of the approver
         *
         * @generated from field: uint64 approver_role_id = 13;
         */
        this.approverRoleId = protobuf_1.protoInt64.zero;
        /**
         * The ID of the leave adjustment
         *
         * @generated from field: uint64 leave_adjustment_id = 20;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * The ID of the leave type
         *
         * @generated from field: uint64 leave_type_id = 21;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        /**
         * The ID of the UoM
         *
         * @generated from field: uint64 uom_id = 22;
         */
        this.uomId = protobuf_1.protoInt64.zero;
        /**
         * Describes the key with which the search operation needs to be performed
         *
         * @generated from field: string search_key = 40;
         */
        this.searchKey = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeaveAdjustmentRecordsSearchRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeaveAdjustmentRecordsSearchRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeaveAdjustmentRecordsSearchRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeaveAdjustmentRecordsSearchRequest, a, b);
    }
}
exports.LeaveAdjustmentRecordsSearchRequest = LeaveAdjustmentRecordsSearchRequest;
LeaveAdjustmentRecordsSearchRequest.runtime = protobuf_1.proto3;
LeaveAdjustmentRecordsSearchRequest.typeName = "Scailo.LeaveAdjustmentRecordsSearchRequest";
LeaveAdjustmentRecordsSearchRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.BOOL_FILTER) },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_RECORD_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_RECORD_STATUS) },
    { no: 10, name: "approved_on_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "approved_on_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "approved_by_user_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: "approver_role_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 20, name: "leave_adjustment_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 21, name: "leave_type_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 22, name: "uom_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 40, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the response to a pagination records request
 *
 * @generated from message Scailo.LeavesAdjustmentsServicePaginatedRecordsResponse
 */
class LeavesAdjustmentsServicePaginatedRecordsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         *
         * @description Number of records returned in the current response slice.
         *
         * @example 50
         *
         * @generated from field: uint64 count = 1;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         *
         * @description The offset provided in the request.
         *
         * @example 0
         *
         * @generated from field: uint64 offset = 2;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         *
         * @description The total number of records matching the criteria.
         *
         * @example 1250
         *
         * @generated from field: uint64 total = 3;
         */
        this.total = protobuf_1.protoInt64.zero;
        /**
         *
         * @description The array of records for the current page.
         *
         * @generated from field: repeated Scailo.LeaveAdjustmentRecord payload = 4;
         */
        this.payload = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServicePaginatedRecordsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServicePaginatedRecordsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServicePaginatedRecordsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServicePaginatedRecordsResponse, a, b);
    }
}
exports.LeavesAdjustmentsServicePaginatedRecordsResponse = LeavesAdjustmentsServicePaginatedRecordsResponse;
LeavesAdjustmentsServicePaginatedRecordsResponse.runtime = protobuf_1.proto3;
LeavesAdjustmentsServicePaginatedRecordsResponse.typeName = "Scailo.LeavesAdjustmentsServicePaginatedRecordsResponse";
LeavesAdjustmentsServicePaginatedRecordsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "payload", kind: "message", T: LeaveAdjustmentRecord, repeated: true },
]);

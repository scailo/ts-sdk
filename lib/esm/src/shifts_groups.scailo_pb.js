"use strict";
// addShiftGroupShift
// modifyShiftGroupShift
// reorderShiftGroupShifts
// deleteShiftGroupShift
// approveShiftGroupShift
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftsGroupsServiceSearchAllReq = exports.ShiftsGroupsServiceCountReq = exports.ShiftsGroupsServiceFilterReq = exports.ShiftsGroupsServicePaginationResponse = exports.ShiftsGroupsServicePaginationReq = exports.ShiftsGroupsShiftsHistoryRequest = exports.ShiftsGroupsShiftsList = exports.ShiftsGroupsList = exports.ShiftGroupShift = exports.ShiftsGroupsServiceShiftGroupUpdateRequest = exports.ShiftsGroupsServiceShiftGroupCreateRequest = exports.ShiftGroup = exports.ShiftsGroupsServiceUpdateRequest = exports.ShiftsGroupsServiceCreateRequest = exports.SHIFT_GROUP_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_scailo_pb_js_1 = require("./base.scailo_pb.js");
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.SHIFT_GROUP_SORT_KEY
 */
var SHIFT_GROUP_SORT_KEY;
(function (SHIFT_GROUP_SORT_KEY) {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED"] = 0] = "SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_CREATED_AT"] = 1] = "SHIFT_GROUP_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_MODIFIED_AT"] = 2] = "SHIFT_GROUP_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_APPROVED_ON"] = 3] = "SHIFT_GROUP_SORT_KEY_APPROVED_ON";
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_APPROVED_BY"] = 4] = "SHIFT_GROUP_SORT_KEY_APPROVED_BY";
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID"] = 5] = "SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID";
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_COMPLETED_ON = 6;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_COMPLETED_ON"] = 6] = "SHIFT_GROUP_SORT_KEY_COMPLETED_ON";
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_NAME = 10;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_NAME"] = 10] = "SHIFT_GROUP_SORT_KEY_NAME";
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_CODE = 11;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_CODE"] = 11] = "SHIFT_GROUP_SORT_KEY_CODE";
})(SHIFT_GROUP_SORT_KEY || (exports.SHIFT_GROUP_SORT_KEY = SHIFT_GROUP_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(SHIFT_GROUP_SORT_KEY)
protobuf_1.proto3.util.setEnumType(SHIFT_GROUP_SORT_KEY, "Scailo.SHIFT_GROUP_SORT_KEY", [
    { no: 0, name: "SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED" },
    { no: 1, name: "SHIFT_GROUP_SORT_KEY_CREATED_AT" },
    { no: 2, name: "SHIFT_GROUP_SORT_KEY_MODIFIED_AT" },
    { no: 3, name: "SHIFT_GROUP_SORT_KEY_APPROVED_ON" },
    { no: 4, name: "SHIFT_GROUP_SORT_KEY_APPROVED_BY" },
    { no: 5, name: "SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID" },
    { no: 6, name: "SHIFT_GROUP_SORT_KEY_COMPLETED_ON" },
    { no: 10, name: "SHIFT_GROUP_SORT_KEY_NAME" },
    { no: 11, name: "SHIFT_GROUP_SORT_KEY_CODE" },
]);
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ShiftsGroupsServiceCreateRequest
 */
class ShiftsGroupsServiceCreateRequest extends protobuf_1.Message {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid = "";
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment = "";
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift group
     *
     * @generated from field: string name = 10;
     */
    name = "";
    /**
     * The shift group code
     *
     * @generated from field: string code = 11;
     */
    code = "";
    /**
     * The description of the shift group
     *
     * @generated from field: string description = 12;
     */
    description = "";
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServiceCreateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 9, name: "vault_folder_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceCreateRequest, a, b);
    }
}
exports.ShiftsGroupsServiceCreateRequest = ShiftsGroupsServiceCreateRequest;
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ShiftsGroupsServiceUpdateRequest
 */
class ShiftsGroupsServiceUpdateRequest extends protobuf_1.Message {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment = "";
    /**
     * The ID of the record that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id = protobuf_1.protoInt64.zero;
    /**
     * Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers = false;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift group
     *
     * @generated from field: string name = 10;
     */
    name = "";
    /**
     * The shift group code
     *
     * @generated from field: string code = 11;
     */
    code = "";
    /**
     * The description of the shift group
     *
     * @generated from field: string description = 12;
     */
    description = "";
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServiceUpdateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 9, name: "vault_folder_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceUpdateRequest, a, b);
    }
}
exports.ShiftsGroupsServiceUpdateRequest = ShiftsGroupsServiceUpdateRequest;
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ShiftGroup
 */
class ShiftGroup extends protobuf_1.Message {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid = "";
    /**
     * Stores the metadata of this shift group
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata;
    /**
     * Stores the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata;
    /**
     * The status of this shift group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
    /**
     * Stores the logs of every operation performed on this shift group
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs = [];
    /**
     * The timestamp of when this shift group was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn = protobuf_1.protoInt64.zero;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift group
     *
     * @generated from field: string name = 10;
     */
    name = "";
    /**
     * The shift group code
     *
     * @generated from field: string code = 11;
     */
    code = "";
    /**
     * The description of the shift group
     *
     * @generated from field: string description = 12;
     */
    description = "";
    /**
     * The list of associated shift group shifts
     *
     * @generated from field: repeated Scailo.ShiftGroupShift list = 20;
     */
    list = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftGroup";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "metadata", kind: "message", T: base_scailo_pb_js_1.EmployeeMetadata },
        { no: 3, name: "approval_metadata", kind: "message", T: base_scailo_pb_js_1.ApprovalMetadata },
        { no: 4, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
        { no: 5, name: "logs", kind: "message", T: base_scailo_pb_js_1.LogbookLogConciseSLC, repeated: true },
        { no: 6, name: "completed_on", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 9, name: "vault_folder_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 20, name: "list", kind: "message", T: ShiftGroupShift, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftGroup, a, b);
    }
}
exports.ShiftGroup = ShiftGroup;
/**
 *
 * Describes the parameters required to add a shift to a shift group
 *
 * @generated from message Scailo.ShiftsGroupsServiceShiftGroupCreateRequest
 */
class ShiftsGroupsServiceShiftGroupCreateRequest extends protobuf_1.Message {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment = "";
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 10;
     */
    shiftGroupId = protobuf_1.protoInt64.zero;
    /**
     * Stores the shift ID
     *
     * @generated from field: uint64 shift_id = 11;
     */
    shiftId = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServiceShiftGroupCreateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 10, name: "shift_group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 11, name: "shift_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServiceShiftGroupCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServiceShiftGroupCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServiceShiftGroupCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceShiftGroupCreateRequest, a, b);
    }
}
exports.ShiftsGroupsServiceShiftGroupCreateRequest = ShiftsGroupsServiceShiftGroupCreateRequest;
/**
 *
 * Describes the parameters required to update a shift in a shift group
 *
 * @generated from message Scailo.ShiftsGroupsServiceShiftGroupUpdateRequest
 */
class ShiftsGroupsServiceShiftGroupUpdateRequest extends protobuf_1.Message {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment = "";
    /**
     * The ID of the record
     *
     * @generated from field: uint64 id = 2;
     */
    id = protobuf_1.protoInt64.zero;
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 10;
     */
    shiftGroupId = protobuf_1.protoInt64.zero;
    /**
     * Stores the shift ID
     *
     * @generated from field: uint64 shift_id = 11;
     */
    shiftId = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServiceShiftGroupUpdateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 10, name: "shift_group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 11, name: "shift_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServiceShiftGroupUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServiceShiftGroupUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServiceShiftGroupUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceShiftGroupUpdateRequest, a, b);
    }
}
exports.ShiftsGroupsServiceShiftGroupUpdateRequest = ShiftsGroupsServiceShiftGroupUpdateRequest;
/**
 *
 * Describes the parameters that constitute a shift associated to a shift group
 *
 * @generated from message Scailo.ShiftGroupShift
 */
class ShiftGroupShift extends protobuf_1.Message {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid = "";
    /**
     * Stores the metadata of this shift group
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata;
    /**
     * Stores the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata;
    /**
     * Denotes if this record requires approval (or has been approved)
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval = false;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment = "";
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 10;
     */
    shiftGroupId = protobuf_1.protoInt64.zero;
    /**
     * Stores the shift ID
     *
     * @generated from field: uint64 shift_id = 11;
     */
    shiftId = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftGroupShift";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "metadata", kind: "message", T: base_scailo_pb_js_1.EmployeeMetadata },
        { no: 3, name: "approval_metadata", kind: "message", T: base_scailo_pb_js_1.ApprovalMetadata },
        { no: 4, name: "need_approval", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 5, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 10, name: "shift_group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 11, name: "shift_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftGroupShift().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftGroupShift().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftGroupShift().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftGroupShift, a, b);
    }
}
exports.ShiftGroupShift = ShiftGroupShift;
/**
 *
 * Describes the message consisting of the list of shift groups
 *
 * @generated from message Scailo.ShiftsGroupsList
 */
class ShiftsGroupsList extends protobuf_1.Message {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ShiftGroup list = 1;
     */
    list = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsList";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "list", kind: "message", T: ShiftGroup, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsList, a, b);
    }
}
exports.ShiftsGroupsList = ShiftsGroupsList;
/**
 *
 * Describes the message consisting of the list of shift group shifts
 *
 * @generated from message Scailo.ShiftsGroupsShiftsList
 */
class ShiftsGroupsShiftsList extends protobuf_1.Message {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ShiftGroupShift list = 1;
     */
    list = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsShiftsList";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "list", kind: "message", T: ShiftGroupShift, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsShiftsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsShiftsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsShiftsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsShiftsList, a, b);
    }
}
exports.ShiftsGroupsShiftsList = ShiftsGroupsShiftsList;
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.ShiftsGroupsShiftsHistoryRequest
 */
class ShiftsGroupsShiftsHistoryRequest extends protobuf_1.Message {
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 10;
     */
    shiftGroupId = protobuf_1.protoInt64.zero;
    /**
     * Stores the shift ID
     *
     * @generated from field: uint64 shift_id = 11;
     */
    shiftId = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsShiftsHistoryRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 10, name: "shift_group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 11, name: "shift_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsShiftsHistoryRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsShiftsHistoryRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsShiftsHistoryRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsShiftsHistoryRequest, a, b);
    }
}
exports.ShiftsGroupsShiftsHistoryRequest = ShiftsGroupsShiftsHistoryRequest;
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ShiftsGroupsServicePaginationReq
 */
class ShiftsGroupsServicePaginationReq extends protobuf_1.Message {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_scailo_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SHIFT_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey = SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The status of this shift group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServicePaginationReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.BOOL_FILTER) },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_GROUP_SORT_KEY) },
        { no: 6, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServicePaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServicePaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServicePaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServicePaginationReq, a, b);
    }
}
exports.ShiftsGroupsServicePaginationReq = ShiftsGroupsServicePaginationReq;
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ShiftsGroupsServicePaginationResponse
 */
class ShiftsGroupsServicePaginationResponse extends protobuf_1.Message {
    /**
     * The number of records in this payload
     *
     * @generated from field: uint64 count = 1;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: uint64 offset = 2;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The total number of records that are available
     *
     * @generated from field: uint64 total = 3;
     */
    total = protobuf_1.protoInt64.zero;
    /**
     * The list of records
     *
     * @generated from field: repeated Scailo.ShiftGroup payload = 4;
     */
    payload = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServicePaginationResponse";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 2, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 3, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 4, name: "payload", kind: "message", T: ShiftGroup, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServicePaginationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServicePaginationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServicePaginationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServicePaginationResponse, a, b);
    }
}
exports.ShiftsGroupsServicePaginationResponse = ShiftsGroupsServicePaginationResponse;
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ShiftsGroupsServiceFilterReq
 */
class ShiftsGroupsServiceFilterReq extends protobuf_1.Message {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_scailo_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SHIFT_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey = SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart = protobuf_1.protoInt64.zero;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd = protobuf_1.protoInt64.zero;
    /**
     * The minimum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart = protobuf_1.protoInt64.zero;
    /**
     * The maximum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd = protobuf_1.protoInt64.zero;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid = "";
    /**
     * The status of this shift group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart = protobuf_1.protoInt64.zero;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd = protobuf_1.protoInt64.zero;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId = protobuf_1.protoInt64.zero;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId = protobuf_1.protoInt64.zero;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart = protobuf_1.protoInt64.zero;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift group
     *
     * @generated from field: string name = 20;
     */
    name = "";
    /**
     * The shift group code
     *
     * @generated from field: string code = 21;
     */
    code = "";
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServiceFilterReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.BOOL_FILTER) },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_GROUP_SORT_KEY) },
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
        { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServiceFilterReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServiceFilterReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServiceFilterReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceFilterReq, a, b);
    }
}
exports.ShiftsGroupsServiceFilterReq = ShiftsGroupsServiceFilterReq;
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ShiftsGroupsServiceCountReq
 */
class ShiftsGroupsServiceCountReq extends protobuf_1.Message {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart = protobuf_1.protoInt64.zero;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd = protobuf_1.protoInt64.zero;
    /**
     * The minimum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart = protobuf_1.protoInt64.zero;
    /**
     * The maximum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd = protobuf_1.protoInt64.zero;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid = "";
    /**
     * The status of this shift group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart = protobuf_1.protoInt64.zero;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd = protobuf_1.protoInt64.zero;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId = protobuf_1.protoInt64.zero;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId = protobuf_1.protoInt64.zero;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart = protobuf_1.protoInt64.zero;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift group
     *
     * @generated from field: string name = 20;
     */
    name = "";
    /**
     * The shift group code
     *
     * @generated from field: string code = 21;
     */
    code = "";
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServiceCountReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
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
        { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServiceCountReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServiceCountReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServiceCountReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceCountReq, a, b);
    }
}
exports.ShiftsGroupsServiceCountReq = ShiftsGroupsServiceCountReq;
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ShiftsGroupsServiceSearchAllReq
 */
class ShiftsGroupsServiceSearchAllReq extends protobuf_1.Message {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive = base_scailo_pb_js_1.BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_scailo_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SHIFT_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey = SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid = "";
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status = base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey = "";
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Scailo.ShiftsGroupsServiceSearchAllReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.BOOL_FILTER) },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_GROUP_SORT_KEY) },
        { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_scailo_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
        { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new ShiftsGroupsServiceSearchAllReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ShiftsGroupsServiceSearchAllReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ShiftsGroupsServiceSearchAllReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceSearchAllReq, a, b);
    }
}
exports.ShiftsGroupsServiceSearchAllReq = ShiftsGroupsServiceSearchAllReq;

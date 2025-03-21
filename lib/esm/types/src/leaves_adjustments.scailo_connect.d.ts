import { LeaveAdjustment, LeaveAdjustmentRecord, LeaveAdjustmentRecordsSearchRequest, LeavesAdjustmentsList, LeavesAdjustmentsRecordsHistoryRequest, LeavesAdjustmentsRecordsList, LeavesAdjustmentsServiceCountReq, LeavesAdjustmentsServiceCreateRequest, LeavesAdjustmentsServiceFilterReq, LeavesAdjustmentsServicePaginatedRecordsResponse, LeavesAdjustmentsServicePaginationReq, LeavesAdjustmentsServicePaginationResponse, LeavesAdjustmentsServiceRecordCreateRequest, LeavesAdjustmentsServiceRecordUpdateRequest, LeavesAdjustmentsServiceSearchAllReq, LeavesAdjustmentsServiceUpdateRequest } from "./leaves_adjustments.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each record
 *
 * @generated from service Scailo.LeavesAdjustmentsService
 */
export declare const LeavesAdjustmentsService: {
    readonly typeName: "Scailo.LeavesAdjustmentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof LeavesAdjustmentsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof LeavesAdjustmentsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof LeavesAdjustmentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof LeavesAdjustmentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a record to a record
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.AddLeaveAdjustmentRecord
         */
        readonly addLeaveAdjustmentRecord: {
            readonly name: "AddLeaveAdjustmentRecord";
            readonly I: typeof LeavesAdjustmentsServiceRecordCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a record in a record
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ModifyLeaveAdjustmentRecord
         */
        readonly modifyLeaveAdjustmentRecord: {
            readonly name: "ModifyLeaveAdjustmentRecord";
            readonly I: typeof LeavesAdjustmentsServiceRecordUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a record in a record
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ApproveLeaveAdjustmentRecord
         */
        readonly approveLeaveAdjustmentRecord: {
            readonly name: "ApproveLeaveAdjustmentRecord";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a record in a record
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.DeleteLeaveAdjustmentRecord
         */
        readonly deleteLeaveAdjustmentRecord: {
            readonly name: "DeleteLeaveAdjustmentRecord";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder records
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ReorderLeaveAdjustmentRecords
         */
        readonly reorderLeaveAdjustmentRecords: {
            readonly name: "ReorderLeaveAdjustmentRecords";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Leave Adjustment Record by ID
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewLeaveAdjustmentRecordByID
         */
        readonly viewLeaveAdjustmentRecordByID: {
            readonly name: "ViewLeaveAdjustmentRecordByID";
            readonly I: typeof Identifier;
            readonly O: typeof LeaveAdjustmentRecord;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved leave adjustment records for given record ID
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewApprovedLeaveAdjustmentRecords
         */
        readonly viewApprovedLeaveAdjustmentRecords: {
            readonly name: "ViewApprovedLeaveAdjustmentRecords";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved leave adjustment records for given record ID
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewUnapprovedLeaveAdjustmentRecords
         */
        readonly viewUnapprovedLeaveAdjustmentRecords: {
            readonly name: "ViewUnapprovedLeaveAdjustmentRecords";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the record
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewLeaveAdjustmentRecordHistory
         */
        readonly viewLeaveAdjustmentRecordHistory: {
            readonly name: "ViewLeaveAdjustmentRecordHistory";
            readonly I: typeof LeavesAdjustmentsRecordsHistoryRequest;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved leave adjustment records for given leave adjustment ID with pagination
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewPaginatedApprovedLeaveAdjustmentRecords
         */
        readonly viewPaginatedApprovedLeaveAdjustmentRecords: {
            readonly name: "ViewPaginatedApprovedLeaveAdjustmentRecords";
            readonly I: typeof LeaveAdjustmentRecordsSearchRequest;
            readonly O: typeof LeavesAdjustmentsServicePaginatedRecordsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved leave adjustment records for given leave adjustment ID with pagination
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewPaginatedUnapprovedLeaveAdjustmentRecords
         */
        readonly viewPaginatedUnapprovedLeaveAdjustmentRecords: {
            readonly name: "ViewPaginatedUnapprovedLeaveAdjustmentRecords";
            readonly I: typeof LeaveAdjustmentRecordsSearchRequest;
            readonly O: typeof LeavesAdjustmentsServicePaginatedRecordsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through leave adjustment records with pagination
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.SearchRecordsWithPagination
         */
        readonly searchRecordsWithPagination: {
            readonly name: "SearchRecordsWithPagination";
            readonly I: typeof LeaveAdjustmentRecordsSearchRequest;
            readonly O: typeof LeavesAdjustmentsServicePaginatedRecordsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof LeaveAdjustment;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof LeaveAdjustment;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof LeaveAdjustment;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof LeaveAdjustment;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof LeavesAdjustmentsServicePaginationReq;
            readonly O: typeof LeavesAdjustmentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof LeavesAdjustmentsServiceSearchAllReq;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof LeavesAdjustmentsServiceFilterReq;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof LeavesAdjustmentsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.LeavesAdjustmentsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof LeavesAdjustmentsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=leaves_adjustments.scailo_connect.d.ts.map
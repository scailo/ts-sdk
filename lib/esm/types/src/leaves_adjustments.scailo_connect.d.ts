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
         * Saves a new record as a draft without triggering side effects.
         *
         * Use this method when you have incomplete information but wish to persist
         * the record for later completion. The record remains in a `DRAFT` state.
         *
         * **Note:** Some strict validation rules may be relaxed in the backend for drafts compared to `Create`.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Draft" action.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If critical system fields are missing.
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
         * Updates an existing record that is currently in `DRAFT` status.
         *
         * This method allows modification of all primary attributes while the record is not yet verified.
         *
         * **Errors:**
         * - `FAILED_PRECONDITION`: If the record is not in a `DRAFT` state.
         * - `NOT_FOUND`: If the provided ID does not exist.
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
         * Submits a record in `DRAFT` or `REVISION` status for verification.
         *
         * This triggers the first stage of the approval workflow.
         *
         * **Status Transition:** -> `PREVERIFY`
         *
         * **Side Effects:**
         * - Notifies designated verifiers or approvers.
         * - Locks certain fields from being updated without returning to `REVISION`.
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
         * Marks a record as verified, signaling that it is ready for final approval.
         *
         * **Status Transition:** -> `VERIFIED`
         *
         * **Side Effects:**
         * - Records the verifying user and timestamp in the audit logs.
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
         * Officially approves the record.
         *
         * **Status Transition:** -> `STANDING`
         *
         * **Side Effects:**
         * - Finalizes the `final_ref_number`.
         * - Records the approver's identity and timestamp.
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
         * Sends the record back to the creator for corrections.
         *
         * Use this if details are incorrect or supporting documents (in the vault) are missing.
         *
         * **Status Transition:** -> `REVISION`
         *
         * **Side Effects:**
         * - Notifies the record creator that changes are required.
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
         * Updates a record that has been sent back for `REVISION`.
         *
         * **Side Effects:**
         * - Re-validates the updated fields.
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
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
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
         * Permanently cancels the record.
         *
         * Records in this state are typically ignored.
         *
         * **Status Transition:** -> `DISCARDED`
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
         * Restores a previously `DISCARDED` or `HALTED` record.
         *
         * **Side Effects:**
         * - Moves the record back to `PREVERIFY` and sends for verification.
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
         * Marks the record as finalized and fully processed.
         *
         * **Status Transition:** -> `COMPLETED`
         *
         * **Side Effects:**
         * - Locks the record from further modification.
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
         * Creates a new record based on an existing one (cloning).
         *
         * This is useful for repeating records or correcting finalized records by starting fresh.
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
         * Adds an audit comment to the record's history without changing its current lifecycle status.
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
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
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
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
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
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
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
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
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
         * Retrieves a list of records matching the provided array of internal IDs.
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
         * Returns all records filtered by their active status.
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
         * Returns all records belonging to a specific organization/entity UUID.
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
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
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
         * Performs a free-text search across records using a search key.
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
         * Performs a high-granularity search based on multiple specific field filters.
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
         * Returns the total number of records currently in a specific lifecycle status.
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
         * Returns the total count of records matching the given complex filter criteria.
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
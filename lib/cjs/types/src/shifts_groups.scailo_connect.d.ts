import { ShiftGroup, ShiftGroupShift, ShiftsGroupsList, ShiftsGroupsServiceCountReq, ShiftsGroupsServiceCreateRequest, ShiftsGroupsServiceFilterReq, ShiftsGroupsServicePaginationReq, ShiftsGroupsServicePaginationResponse, ShiftsGroupsServiceSearchAllReq, ShiftsGroupsServiceShiftGroupCreateRequest, ShiftsGroupsServiceShiftGroupUpdateRequest, ShiftsGroupsServiceUpdateRequest, ShiftsGroupsShiftsHistoryRequest, ShiftsGroupsShiftsList } from "./shifts_groups.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each shift group
 *
 * @generated from service Scailo.ShiftsGroupsService
 */
export declare const ShiftsGroupsService: {
    readonly typeName: "Scailo.ShiftsGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.ShiftsGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ShiftsGroupsServiceCreateRequest;
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
         * @generated from rpc Scailo.ShiftsGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ShiftsGroupsServiceCreateRequest;
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
         * @generated from rpc Scailo.ShiftsGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ShiftsGroupsServiceUpdateRequest;
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
         * @generated from rpc Scailo.ShiftsGroupsService.SendForVerification
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
         * @generated from rpc Scailo.ShiftsGroupsService.Verify
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
         * @generated from rpc Scailo.ShiftsGroupsService.Approve
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
         * @generated from rpc Scailo.ShiftsGroupsService.SendForRevision
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
         * @generated from rpc Scailo.ShiftsGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ShiftsGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.ShiftsGroupsService.Halt
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
         * @generated from rpc Scailo.ShiftsGroupsService.Discard
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
         * @generated from rpc Scailo.ShiftsGroupsService.Restore
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
         * @generated from rpc Scailo.ShiftsGroupsService.Complete
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
         * @generated from rpc Scailo.ShiftsGroupsService.Repeat
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
         * @generated from rpc Scailo.ShiftsGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Attaches a specified folder directly to a record without requiring a full revision workflow.
         *
         * This is a convenience API designed to bypass the traditional multi-step modification lifecycle
         * (e.g., creating a revision, updating data, submitting for verification, and awaiting approval).
         * It allows for the immediate, single-step association of a vault folder.
         *
         * **Side Effects & Lifecycle:**
         * * The overall status of the record remains unchanged.
         * * The record's modification timestamp is automatically updated to the current time.
         * * An entry is appended to the record's audit log tracking this attachment.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a shift to a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.AddShiftGroupShift
         */
        readonly addShiftGroupShift: {
            readonly name: "AddShiftGroupShift";
            readonly I: typeof ShiftsGroupsServiceShiftGroupCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a shift in a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ModifyShiftGroupShift
         */
        readonly modifyShiftGroupShift: {
            readonly name: "ModifyShiftGroupShift";
            readonly I: typeof ShiftsGroupsServiceShiftGroupUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a shift in a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ApproveShiftGroupShift
         */
        readonly approveShiftGroupShift: {
            readonly name: "ApproveShiftGroupShift";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a shift in a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.DeleteShiftGroupShift
         */
        readonly deleteShiftGroupShift: {
            readonly name: "DeleteShiftGroupShift";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder shifts in a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ReorderShiftGroupShifts
         */
        readonly reorderShiftGroupShifts: {
            readonly name: "ReorderShiftGroupShifts";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Shift Group Shift by ID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewShiftGroupShiftByID
         */
        readonly viewShiftGroupShiftByID: {
            readonly name: "ViewShiftGroupShiftByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroupShift;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved shift group shifts for given shift group ID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewApprovedShiftGroupShifts
         */
        readonly viewApprovedShiftGroupShifts: {
            readonly name: "ViewApprovedShiftGroupShifts";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved shift group shifts for given shift group ID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewUnapprovedShiftGroupShifts
         */
        readonly viewUnapprovedShiftGroupShifts: {
            readonly name: "ViewUnapprovedShiftGroupShifts";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the shift group shift
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewShiftGroupShiftsHistory
         */
        readonly viewShiftGroupShiftsHistory: {
            readonly name: "ViewShiftGroupShiftsHistory";
            readonly I: typeof ShiftsGroupsShiftsHistoryRequest;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ShiftsGroupsServicePaginationReq;
            readonly O: typeof ShiftsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ShiftsGroupsServiceSearchAllReq;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ShiftsGroupsServiceFilterReq;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.CountInStatus
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
         * @generated from rpc Scailo.ShiftsGroupsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ShiftsGroupsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.ShiftsGroupsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof ShiftsGroupsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Bulk imports records from a provided CSV file.
         * Behavior:
         * - Deduplication: Skips entries where the `code` already exists in the system.
         * - Atomicity: This is an "all-or-nothing" operation; if any part of the
         *   import fails, no changes are committed.
         * - Idempotency: Multiple calls with the same CSV result in the same state.
         * Returns a list of UUIDs for all successfully processed or existing records.
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=shifts_groups.scailo_connect.d.ts.map
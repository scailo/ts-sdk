import { PayrollGroup, PayrollGroupItem, PayrollGroupItemHistoryRequest, PayrollGroupsItemsList, PayrollGroupsList, PayrollGroupsServiceCountReq, PayrollGroupsServiceCreateRequest, PayrollGroupsServiceFilterReq, PayrollGroupsServiceItemCreateRequest, PayrollGroupsServiceItemUpdateRequest, PayrollGroupsServicePaginationReq, PayrollGroupsServicePaginationResponse, PayrollGroupsServiceSearchAllReq, PayrollGroupsServiceUpdateRequest } from "./payroll_groups.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each payroll group
 *
 * @generated from service Scailo.PayrollGroupsService
 */
export declare const PayrollGroupsService: {
    readonly typeName: "Scailo.PayrollGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.PayrollGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PayrollGroupsServiceCreateRequest;
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
         * @generated from rpc Scailo.PayrollGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PayrollGroupsServiceCreateRequest;
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
         * @generated from rpc Scailo.PayrollGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PayrollGroupsServiceUpdateRequest;
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
         * @generated from rpc Scailo.PayrollGroupsService.SendForVerification
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
         * @generated from rpc Scailo.PayrollGroupsService.Verify
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
         * @generated from rpc Scailo.PayrollGroupsService.Approve
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
         * @generated from rpc Scailo.PayrollGroupsService.SendForRevision
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
         * @generated from rpc Scailo.PayrollGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PayrollGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.PayrollGroupsService.Halt
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
         * @generated from rpc Scailo.PayrollGroupsService.Discard
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
         * @generated from rpc Scailo.PayrollGroupsService.Restore
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
         * @generated from rpc Scailo.PayrollGroupsService.Complete
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
         * @generated from rpc Scailo.PayrollGroupsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopens a finalized or closed record for further modifications.
         *
         * **Status Transition:** -> `REVISION`
         *
         * **Side Effects:**
         * - Unlocks the record to allow edits.
         * - Logs the required user comment into the audit trail for compliance tracking.
         *
         * @generated from rpc Scailo.PayrollGroupsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Adds an audit comment to the record's history without changing its current lifecycle status.
         *
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.PayrollGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Initiates the creation of a new record by duplicating the structural properties of an existing record.
         *
         * **Side Effects:**
         * - Provisions a new record populated with the metadata and configurations of the source record.
         * - Does not clone operational transactions or historical logs of the source.
         * - Appends an audit trail entry tracking the cloning operation and justification.
         *
         * @generated from rpc Scailo.PayrollGroupsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a param to a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.AddPayrollGroupItem
         */
        readonly addPayrollGroupItem: {
            readonly name: "AddPayrollGroupItem";
            readonly I: typeof PayrollGroupsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a param in a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.ModifyPayrollGroupItem
         */
        readonly modifyPayrollGroupItem: {
            readonly name: "ModifyPayrollGroupItem";
            readonly I: typeof PayrollGroupsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a param in a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.ApprovePayrollGroupItem
         */
        readonly approvePayrollGroupItem: {
            readonly name: "ApprovePayrollGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a param in a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.DeletePayrollGroupItem
         */
        readonly deletePayrollGroupItem: {
            readonly name: "DeletePayrollGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder params in a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.ReorderPayrollGroupItems
         */
        readonly reorderPayrollGroupItems: {
            readonly name: "ReorderPayrollGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Payroll Group Item by ID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewPayrollGroupItemByID
         */
        readonly viewPayrollGroupItemByID: {
            readonly name: "ViewPayrollGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PayrollGroupItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved payroll group params for given payroll group ID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewApprovedPayrollGroupItems
         */
        readonly viewApprovedPayrollGroupItems: {
            readonly name: "ViewApprovedPayrollGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PayrollGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved payroll group params for given payroll group ID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewUnapprovedPayrollGroupItems
         */
        readonly viewUnapprovedPayrollGroupItems: {
            readonly name: "ViewUnapprovedPayrollGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PayrollGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the payroll group item
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewPayrollGroupItemHistory
         */
        readonly viewPayrollGroupItemHistory: {
            readonly name: "ViewPayrollGroupItemHistory";
            readonly I: typeof PayrollGroupItemHistoryRequest;
            readonly O: typeof PayrollGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.PayrollGroupsService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload items
         *
         * @generated from rpc Scailo.PayrollGroupsService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.PayrollGroupsService.UploadPayrollGroupItems
         */
        readonly uploadPayrollGroupItems: {
            readonly name: "UploadPayrollGroupItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PayrollGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PayrollGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record via the assigned internal code. In case duplicates are found, this method retrieves the latest record.
         *
         * **Note:** High-volume compliance data, audit records, and system logs are excluded from the response payload.
         *
         * **Errors:**
         * - `NOT_FOUND`: If the provided internal code does not exist.
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PayrollGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof PayrollGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PayrollGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PayrollGroupsServicePaginationReq;
            readonly O: typeof PayrollGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.PayrollGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PayrollGroupsServiceSearchAllReq;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.PayrollGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PayrollGroupsServiceFilterReq;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.PayrollGroupsService.CountInStatus
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
         * @generated from rpc Scailo.PayrollGroupsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof PayrollGroupsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.PayrollGroupsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof PayrollGroupsServiceFilterReq;
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
         * @generated from rpc Scailo.PayrollGroupsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=payroll_groups.scailo_connect.d.ts.map
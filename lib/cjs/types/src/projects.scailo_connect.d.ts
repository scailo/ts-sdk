import { Project, ProjectContact, ProjectContactsList, ProjectsList, ProjectsServiceContactCreateRequest, ProjectsServiceCountReq, ProjectsServiceCreateRequest, ProjectsServiceFilterReq, ProjectsServicePaginationReq, ProjectsServicePaginationResponse, ProjectsServiceSearchAllReq, ProjectsServiceUpdateRequest, ProjectStatistics } from "./projects.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithUserComment, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
/**
 *
 * The ProjectsService manages the full lifecycle of projects.
 * It provides standard CRUD operations alongside a robust state machine for
 * verification, manager approval, and completion.
 *
 * @generated from service Scailo.ProjectsService
 */
export declare const ProjectsService: {
    readonly typeName: "Scailo.ProjectsService";
    readonly methods: {
        /**
         * Creates a new record and immediately moves it to the verification workflow.
         *
         * This method validates all required fields.
         * The record is created with a `STANDARD_LIFECYCLE_STATUS.PREVERIFY` status.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Create" action.
         * - May trigger automated verification workflows.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If validation rules fail.
         *
         * @generated from rpc Scailo.ProjectsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProjectsServiceCreateRequest;
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
         * @generated from rpc Scailo.ProjectsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ProjectsServiceCreateRequest;
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
         * @generated from rpc Scailo.ProjectsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ProjectsServiceUpdateRequest;
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
         * @generated from rpc Scailo.ProjectsService.SendForVerification
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
         * @generated from rpc Scailo.ProjectsService.Verify
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
         * @generated from rpc Scailo.ProjectsService.Approve
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
         * @generated from rpc Scailo.ProjectsService.SendForRevision
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
         * @generated from rpc Scailo.ProjectsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ProjectsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.ProjectsService.Halt
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
         * @generated from rpc Scailo.ProjectsService.Discard
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
         * @generated from rpc Scailo.ProjectsService.Restore
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
         * @generated from rpc Scailo.ProjectsService.Complete
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
         * @generated from rpc Scailo.ProjectsService.Repeat
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
         * @generated from rpc Scailo.ProjectsService.Reopen
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
         * @generated from rpc Scailo.ProjectsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Triggers an automated email notification related to the record.
         *
         * **Side Effects:**
         * - Dispatches a structured email to the designated recipients based on the provided attributes.
         * - Appends an entry to the system communication logs for auditing purposes.
         *
         * @generated from rpc Scailo.ProjectsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
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
         * @generated from rpc Scailo.ProjectsService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Associates a new personnel contact with an existing project.
         *
         * **Side Effects:**
         * - Validates the relationship between the project and employee.
         * - Depending on system configurations, may place the new contact association into a pending approval state.
         *
         * @generated from rpc Scailo.ProjectsService.AddProjectContact
         */
        readonly addProjectContact: {
            readonly name: "AddProjectContact";
            readonly I: typeof ProjectsServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending project contact record, finalizing its integration into the project roster.
         *
         * **Side Effects:**
         * - Activates the contact mapping within the system.
         * - Appends the required approval metadata and audit comment to the record history.
         *
         * @generated from rpc Scailo.ProjectsService.ApproveProjectContact
         */
        readonly approveProjectContact: {
            readonly name: "ApproveProjectContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates a contact association from a project.
         *
         * **Side Effects:**
         * - Revokes project-specific context and access linked to this contact association.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.ProjectsService.DeleteProjectContact
         */
        readonly deleteProjectContact: {
            readonly name: "DeleteProjectContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, granular details of a specific project contact by its internal sequence ID.
         *
         * This is a read-only operation that fetches full metadata, employee contexts, and approval histories.
         *
         * @generated from rpc Scailo.ProjectsService.ViewProjectContactByID
         */
        readonly viewProjectContactByID: {
            readonly name: "ViewProjectContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProjectContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all contact associations mapped to a given project unique identifier.
         *
         * This read-only query aggregates and returns the collection of personnel assigned to the project entity.
         *
         * @generated from rpc Scailo.ProjectsService.ViewProjectContacts
         */
        readonly viewProjectContacts: {
            readonly name: "ViewProjectContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProjectContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.ProjectsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Project;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.ProjectsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Project;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record based on its user-defined, external reference ID.
         *
         * This read-only operation is utilized for targeted lookups using human-readable identifiers (e.g., "REF-2023-001") rather than internal system IDs or unpredictable UUIDs.
         * Because external reference IDs might occasionally be duplicated across a tenant's dataset (due to legacy data imports, external CRM syncing overlaps, or manual entry overrides),
         * this query guarantees a deterministic response. In the event of a collision, it automatically resolves the conflict by returning only the most recently created or modified record
         * that matches the requested reference string.
         *
         * @generated from rpc Scailo.ProjectsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof Project;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.ProjectsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Project;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.ProjectsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Project;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.ProjectsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof ProjectsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.ProjectsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProjectsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.ProjectsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProjectsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.ProjectsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ProjectsServicePaginationReq;
            readonly O: typeof ProjectsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves granular metrics and operational performance data for a specific project.
         *
         * This is a read-only operation used to aggregate lifecycle data, timelines,
         * and resource utilization without altering the underlying record state.
         *
         * @generated from rpc Scailo.ProjectsService.ViewStatistics
         */
        readonly viewStatistics: {
            readonly name: "ViewStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProjectStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.ProjectsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ProjectsServiceSearchAllReq;
            readonly O: typeof ProjectsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.ProjectsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ProjectsServiceFilterReq;
            readonly O: typeof ProjectsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.ProjectsService.CountInStatus
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
         * @generated from rpc Scailo.ProjectsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ProjectsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.ProjectsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof ProjectsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload records
         *
         * @generated from rpc Scailo.ProjectsService.DownloadImportTemplate
         */
        readonly downloadImportTemplate: {
            readonly name: "DownloadImportTemplate";
            readonly I: typeof Empty;
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
         * @generated from rpc Scailo.ProjectsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=projects.scailo_connect.d.ts.map
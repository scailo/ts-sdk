import { QuestionnaireTemplate, QuestionnaireTemplatesList, QuestionnaireTemplatesServiceCountReq, QuestionnaireTemplatesServiceCreateRequest, QuestionnaireTemplatesServiceFilterReq, QuestionnaireTemplatesServicePaginationReq, QuestionnaireTemplatesServicePaginationResponse, QuestionnaireTemplatesServiceSearchAllReq, QuestionnaireTemplatesServiceUpdateRequest } from "./questionnaire_templates.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
/**
 *
 * The QuestionnaireTemplatesService manages the full lifecycle of questionnaire template records.
 * It provides standard CRUD operations alongside a robust state machine for
 * verification, manager approval, and completion.
 *
 * @generated from service Scailo.QuestionnaireTemplatesService
 */
export declare const QuestionnaireTemplatesService: {
    readonly typeName: "Scailo.QuestionnaireTemplatesService";
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
         * - `INVALID_ARGUMENT`: If validation rules fail (e.g., negative quantity, invalid timestamps).
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QuestionnaireTemplatesServiceCreateRequest;
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QuestionnaireTemplatesServiceCreateRequest;
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QuestionnaireTemplatesServiceUpdateRequest;
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.SendForVerification
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Verify
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Approve
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.SendForRevision
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QuestionnaireTemplatesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Halt
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Discard
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Restore
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Complete
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Repeat
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Reopen
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.CommentAdd
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.SendEmail
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuestionnaireTemplate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireTemplate;
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof QuestionnaireTemplate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuestionnaireTemplate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireTemplate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof QuestionnaireTemplatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuestionnaireTemplatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireTemplatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QuestionnaireTemplatesServicePaginationReq;
            readonly O: typeof QuestionnaireTemplatesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QuestionnaireTemplatesServiceSearchAllReq;
            readonly O: typeof QuestionnaireTemplatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QuestionnaireTemplatesServiceFilterReq;
            readonly O: typeof QuestionnaireTemplatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.CountInStatus
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof QuestionnaireTemplatesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof QuestionnaireTemplatesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload records
         *
         * @generated from rpc Scailo.QuestionnaireTemplatesService.DownloadImportTemplate
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
         * @generated from rpc Scailo.QuestionnaireTemplatesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=questionnaire_templates.scailo_connect.d.ts.map
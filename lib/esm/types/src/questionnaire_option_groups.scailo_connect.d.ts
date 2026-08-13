import { QuestionnaireOptionGroup, QuestionnaireOptionGroupsList, QuestionnaireOptionGroupsServiceCountReq, QuestionnaireOptionGroupsServiceCreateRequest, QuestionnaireOptionGroupsServiceFilterReq, QuestionnaireOptionGroupsServicePaginatedValuesResponse, QuestionnaireOptionGroupsServicePaginationReq, QuestionnaireOptionGroupsServicePaginationResponse, QuestionnaireOptionGroupsServiceSearchAllReq, QuestionnaireOptionGroupsServiceUpdateRequest, QuestionnaireOptionGroupsServiceValueCreateRequest, QuestionnaireOptionGroupsServiceValueUpdateRequest, QuestionnaireOptionGroupsValuesList, QuestionnaireOptionGroupValue, QuestionnaireOptionGroupValueHistoryRequest, QuestionnaireOptionGroupValuesSearchRequest } from "./questionnaire_option_groups.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
/**
 *
 * The QuestionnaireOptionGroupsService manages the full lifecycle of questionnaire option group records.
 * It provides standard CRUD operations alongside a robust state machine for
 * verification, manager approval, and completion.
 *
 * @generated from service Scailo.QuestionnaireOptionGroupsService
 */
export declare const QuestionnaireOptionGroupsService: {
    readonly typeName: "Scailo.QuestionnaireOptionGroupsService";
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QuestionnaireOptionGroupsServiceCreateRequest;
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QuestionnaireOptionGroupsServiceCreateRequest;
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QuestionnaireOptionGroupsServiceUpdateRequest;
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.SendForVerification
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Verify
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Approve
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.SendForRevision
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QuestionnaireOptionGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Halt
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Discard
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Restore
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Complete
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Repeat
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Reopen
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.CommentAdd
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Adds a new distinct answer choice (value) to an existing questionnaire option group.
         *
         * **Side Effects:**
         * - Creates a new standardized option mapped to the parent group.
         * - Depending on system configurations, may place this new choice into a pending approval state before it becomes visible in live forms.
         * - Appends an audit trail entry tracking the creation.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.AddQuestionnaireOptionGroupValue
         */
        readonly addQuestionnaireOptionGroupValue: {
            readonly name: "AddQuestionnaireOptionGroupValue";
            readonly I: typeof QuestionnaireOptionGroupsServiceValueCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates the textual representation or display sequence of an existing option value.
         *
         * **Side Effects:**
         * - Modifies the presentation attributes of the answer choice without breaking existing historical form submissions.
         * - May trigger a re-approval workflow depending on configuration.
         * - Appends an audit trail entry tracking the modification.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ModifyQuestionnaireOptionGroupValue
         */
        readonly modifyQuestionnaireOptionGroupValue: {
            readonly name: "ModifyQuestionnaireOptionGroupValue";
            readonly I: typeof QuestionnaireOptionGroupsServiceValueUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending answer choice, finalizing its availability within the option group.
         *
         * **Side Effects:**
         * - Activates the value, making it selectable in live surveys and questionnaires that utilize this group.
         * - Appends the required approval metadata, timestamp, and audit comment to the record's history.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ApproveQuestionnaireOptionGroupValue
         */
        readonly approveQuestionnaireOptionGroupValue: {
            readonly name: "ApproveQuestionnaireOptionGroupValue";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates an answer choice from an option group.
         *
         * **Side Effects:**
         * - Revokes the choice from future form renderings (historical submissions typically retain the raw text value).
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.DeleteQuestionnaireOptionGroupValue
         */
        readonly deleteQuestionnaireOptionGroupValue: {
            readonly name: "DeleteQuestionnaireOptionGroupValue";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorders the numerical sequence of answer choices within an option group.
         *
         * **Side Effects:**
         * - Mutates the display sequence (`sort_order`) of the specified values in bulk.
         * - Directly affects how the choices are visually arranged (e.g., top-to-bottom, alphabetical, logical progression) in UI dropdowns or radio button lists.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ReorderQuestionnaireOptionGroupValues
         */
        readonly reorderQuestionnaireOptionGroupValues: {
            readonly name: "ReorderQuestionnaireOptionGroupValues";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, granular details of a specific answer choice by its internal sequence ID.
         *
         * This is a read-only operation that fetches full metadata, parent mappings, and approval histories.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewQuestionnaireOptionGroupValueByID
         */
        readonly viewQuestionnaireOptionGroupValueByID: {
            readonly name: "ViewQuestionnaireOptionGroupValueByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuestionnaireOptionGroupValue;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all active, fully approved answer choices mapped to a specific option group ID.
         *
         * This read-only query is optimized for frontend form rendering, returning only the choices that are officially authorized to be displayed to users.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewApprovedQuestionnaireOptionGroupValues
         */
        readonly viewApprovedQuestionnaireOptionGroupValues: {
            readonly name: "ViewApprovedQuestionnaireOptionGroupValues";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuestionnaireOptionGroupsValuesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved answer choices mapped to a specific option group ID.
         *
         * This read-only query is utilized primarily by form administrators to quickly identify and review new dictionary terms awaiting authorization.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewUnapprovedQuestionnaireOptionGroupValues
         */
        readonly viewUnapprovedQuestionnaireOptionGroupValues: {
            readonly name: "ViewUnapprovedQuestionnaireOptionGroupValues";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuestionnaireOptionGroupsValuesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the historical audit trail and lifecycle changes of a specific answer choice record.
         *
         * This read-only operation aggregates the chronological evolution of the value, tracking textual tweaks and approval state changes.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewQuestionnaireOptionGroupValueHistory
         */
        readonly viewQuestionnaireOptionGroupValueHistory: {
            readonly name: "ViewQuestionnaireOptionGroupValueHistory";
            readonly I: typeof QuestionnaireOptionGroupValueHistoryRequest;
            readonly O: typeof QuestionnaireOptionGroupsValuesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists active, approved answer choices using robust pagination controls.
         *
         * This read-only query is optimized for rendering extremely large option sets (e.g., complete lists of country codes, industry classifications) in frontend interfaces, supporting explicit windowing parameters.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewPaginatedApprovedQuestionnaireOptionGroupValues
         */
        readonly viewPaginatedApprovedQuestionnaireOptionGroupValues: {
            readonly name: "ViewPaginatedApprovedQuestionnaireOptionGroupValues";
            readonly I: typeof QuestionnaireOptionGroupValuesSearchRequest;
            readonly O: typeof QuestionnaireOptionGroupsServicePaginatedValuesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved answer choices using robust pagination controls.
         *
         * This read-only query is optimized for administrative review dashboards handling high volumes of dictionary additions.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewPaginatedUnapprovedQuestionnaireOptionGroupValues
         */
        readonly viewPaginatedUnapprovedQuestionnaireOptionGroupValues: {
            readonly name: "ViewPaginatedUnapprovedQuestionnaireOptionGroupValues";
            readonly I: typeof QuestionnaireOptionGroupValuesSearchRequest;
            readonly O: typeof QuestionnaireOptionGroupsServicePaginatedValuesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through all answer choices using advanced filters, status flags, and pagination tokens.
         *
         * This read-only query is the primary entry point for complex lookups across massive dictionary sets, commonly utilized by administrative reporting views.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.SearchValuesWithPagination
         */
        readonly searchValuesWithPagination: {
            readonly name: "SearchValuesWithPagination";
            readonly I: typeof QuestionnaireOptionGroupValuesSearchRequest;
            readonly O: typeof QuestionnaireOptionGroupsServicePaginatedValuesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Exports the current list of answer choices for a specific option group into a downloadable CSV file.
         *
         * This read-only operation is used by administrators to audit large dictionary sets offline, or as a starting point to modify the list locally before executing a bulk upload.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.DownloadValuesAsCSV
         */
        readonly downloadValuesAsCSV: {
            readonly name: "DownloadValuesAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates and downloads a blank, structurally compliant CSV template.
         *
         * This read-only operation provides administrators with the exact column headers required to successfully perform a bulk upload of new answer choices.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.DownloadValuesTemplateAsCSV
         */
        readonly downloadValuesTemplateAsCSV: {
            readonly name: "DownloadValuesTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Processes a bulk ingestion of answer choices for a specific option group via a CSV file upload.
         *
         * **Side Effects:**
         * - **CRITICAL:** This is an idempotent, destructive operation. It automatically deletes all existing values currently mapped to the option group before applying the new items from the CSV.
         * - Wipes the current active list and replaces it entirely with the parsed file contents.
         * - Triggers creation audit logs for the newly imported choices.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.UploadQuestionnaireOptionGroupValues
         */
        readonly uploadQuestionnaireOptionGroupValues: {
            readonly name: "UploadQuestionnaireOptionGroupValues";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuestionnaireOptionGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * View by Code (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireOptionGroup;
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof QuestionnaireOptionGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuestionnaireOptionGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireOptionGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof QuestionnaireOptionGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuestionnaireOptionGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireOptionGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QuestionnaireOptionGroupsServicePaginationReq;
            readonly O: typeof QuestionnaireOptionGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QuestionnaireOptionGroupsServiceSearchAllReq;
            readonly O: typeof QuestionnaireOptionGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QuestionnaireOptionGroupsServiceFilterReq;
            readonly O: typeof QuestionnaireOptionGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.CountInStatus
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof QuestionnaireOptionGroupsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof QuestionnaireOptionGroupsServiceFilterReq;
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
         * @generated from rpc Scailo.QuestionnaireOptionGroupsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=questionnaire_option_groups.scailo_connect.d.ts.map
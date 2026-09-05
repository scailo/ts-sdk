import { QuestionnaireSection, QuestionnaireSectionConditionalRule, QuestionnaireSectionConditionalRuleHistoryRequest, QuestionnaireSectionConditionalRulesList, QuestionnaireSectionConditionalRulesSearchRequest, QuestionnaireSectionsList, QuestionnaireSectionsServiceConditionalRuleCreateRequest, QuestionnaireSectionsServiceConditionalRuleUpdateRequest, QuestionnaireSectionsServiceCountReq, QuestionnaireSectionsServiceCreateRequest, QuestionnaireSectionsServiceFilterReq, QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest, QuestionnaireSectionsServicePaginatedConditionalRulesResponse, QuestionnaireSectionsServicePaginationReq, QuestionnaireSectionsServicePaginationResponse, QuestionnaireSectionsServiceSearchAllReq, QuestionnaireSectionsServiceUpdateRequest } from "./questionnaire_sections.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
/**
 *
 * The QuestionnaireSectionsService manages the full lifecycle of questionnaire section records.
 * It provides standard CRUD operations alongside a robust state machine for
 * verification, manager approval, and completion.
 *
 * @generated from service Scailo.QuestionnaireSectionsService
 */
export declare const QuestionnaireSectionsService: {
    readonly typeName: "Scailo.QuestionnaireSectionsService";
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QuestionnaireSectionsServiceCreateRequest;
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QuestionnaireSectionsServiceCreateRequest;
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QuestionnaireSectionsServiceUpdateRequest;
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.SendForVerification
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Verify
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Approve
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.SendForRevision
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QuestionnaireSectionsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.Halt
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Discard
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Restore
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Complete
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Repeat
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Reopen
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.CommentAdd
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.SendEmail
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Appends multiple conditional rules to an existing Questionnaire Section in a single batch transaction.
         *
         * **Side Effects:**
         * - Dynamically calculates base pricing, discounts, and taxes for each item in the batch.
         * - Attaches the newly created conditional rules to the parent questionnaire section.
         * - May place the items into a pending approval state depending on system configuration.
         * - Appends a unified audit trail entry tracking the batch creation event.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.AddMultipleConditionalRules
         */
        readonly addMultipleConditionalRules: {
            readonly name: "AddMultipleConditionalRules";
            readonly I: typeof QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Appends a single conditional rule to an existing Questionnaire Section.
         *
         * **Side Effects:**
         * - Validates product family eligibility and calculates financial totals for the requested quantities.
         * - Attaches the new conditional rule to the parent order.
         * - Appends an audit trail entry tracking the creation and user justification.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.AddConditionalRule
         */
        readonly addConditionalRule: {
            readonly name: "AddConditionalRule";
            readonly I: typeof QuestionnaireSectionsServiceConditionalRuleCreateRequest;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modifies the core transactional parameters (including quantities and client units) of an existing conditional rule.
         *
         * **Side Effects:**
         * - Overwrites the previous quantities, terms, and specifications of the item.
         * - Triggers a recalculation of the parent questionnaire section's grand total.
         * - May reset the item's approval status, requiring re-authorization.
         * - Appends an audit trail entry tracking the modifications.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ModifyConditionalRule
         */
        readonly modifyConditionalRule: {
            readonly name: "ModifyConditionalRule";
            readonly I: typeof QuestionnaireSectionsServiceConditionalRuleUpdateRequest;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending conditional rule, finalizing its active status within the questionnaire section.
         *
         * **Side Effects:**
         * - Activates the conditional rule, making it eligible for dispatch and invoicing workflows.
         * - Appends the required approval metadata, timestamp, and audit comment to the record's history.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ApproveConditionalRule
         */
        readonly approveConditionalRule: {
            readonly name: "ApproveConditionalRule";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates a conditional rule from the questionnaire section.
         *
         * **Side Effects:**
         * - Revokes the item from the order, subtracting its value from the grand total.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.DeleteConditionalRule
         */
        readonly deleteConditionalRule: {
            readonly name: "DeleteConditionalRule";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, finalized details of a specific conditional rule by its internal sequence ID.
         *
         * This is a read-only operation that fetches full metadata, approval histories, and calculated financial values.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewConditionalRuleByID
         */
        readonly viewConditionalRuleByID: {
            readonly name: "ViewConditionalRuleByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuestionnaireSectionConditionalRule;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all active, fully approved conditional rules mapped to a specific questionnaire section ID.
         *
         * This read-only query is optimized for rendering the finalized order summary on frontend interfaces and printed invoices.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewApprovedConditionalRules
         */
        readonly viewApprovedConditionalRules: {
            readonly name: "ViewApprovedConditionalRules";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuestionnaireSectionConditionalRulesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved conditional rules mapped to a specific questionnaire section ID.
         *
         * This read-only query is utilized primarily by administrative dashboards to quickly identify order lines awaiting financial or operational authorization.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewUnapprovedConditionalRules
         */
        readonly viewUnapprovedConditionalRules: {
            readonly name: "ViewUnapprovedConditionalRules";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuestionnaireSectionConditionalRulesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the historical audit trail and lifecycle changes of a specific conditional rule.
         *
         * This read-only operation aggregates the chronological evolution of the item, tracking term adjustments, specification updates, and state changes.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewConditionalRuleHistory
         */
        readonly viewConditionalRuleHistory: {
            readonly name: "ViewConditionalRuleHistory";
            readonly I: typeof QuestionnaireSectionConditionalRuleHistoryRequest;
            readonly O: typeof QuestionnaireSectionConditionalRulesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists active, approved conditional rules using robust pagination controls.
         *
         * This read-only query is optimized for rendering extremely large orders in frontend data tables, supporting explicit windowing parameters.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewPaginatedApprovedConditionalRules
         */
        readonly viewPaginatedApprovedConditionalRules: {
            readonly name: "ViewPaginatedApprovedConditionalRules";
            readonly I: typeof QuestionnaireSectionConditionalRulesSearchRequest;
            readonly O: typeof QuestionnaireSectionsServicePaginatedConditionalRulesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved conditional rules using robust pagination controls.
         *
         * This read-only query is optimized for administrative review dashboards handling high volumes of unapproved items.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewPaginatedUnapprovedConditionalRules
         */
        readonly viewPaginatedUnapprovedConditionalRules: {
            readonly name: "ViewPaginatedUnapprovedConditionalRules";
            readonly I: typeof QuestionnaireSectionConditionalRulesSearchRequest;
            readonly O: typeof QuestionnaireSectionsServicePaginatedConditionalRulesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through all conditional rules using advanced filters, status flags, fuzzy text matching, and pagination.
         *
         * This read-only query is the primary entry point for complex lookups across massive order catalogs.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.SearchConditionalRulesWithPagination
         */
        readonly searchConditionalRulesWithPagination: {
            readonly name: "SearchConditionalRulesWithPagination";
            readonly I: typeof QuestionnaireSectionConditionalRulesSearchRequest;
            readonly O: typeof QuestionnaireSectionsServicePaginatedConditionalRulesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Exports the current list of conditional rules for a specific questionnaire section into a downloadable CSV file.
         *
         * This read-only operation is used by administrators to audit large orders offline, or as a baseline to modify items locally before executing a bulk upload.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.DownloadConditionalRulesAsCSV
         */
        readonly downloadConditionalRulesAsCSV: {
            readonly name: "DownloadConditionalRulesAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates and downloads a blank, structurally compliant CSV template.
         *
         * This read-only operation provides clients with the exact column headers required to successfully perform a bulk line-item upload.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.DownloadConditionalRulesTemplateAsCSV
         */
        readonly downloadConditionalRulesTemplateAsCSV: {
            readonly name: "DownloadConditionalRulesTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Processes a bulk ingestion of conditional rules for a specific questionnaire section via a CSV file upload.
         *
         * **Side Effects:**
         * - **CRITICAL:** This is an idempotent, destructive operation. It automatically deletes all existing conditional rules currently mapped to the questionnaire section before applying the new items from the CSV.
         * - Wipes the current active list and replaces it entirely with the parsed file contents.
         * - Triggers recalculations of order totals and appends creation audit logs for the newly imported items.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.UploadConditionalRules
         */
        readonly uploadConditionalRules: {
            readonly name: "UploadConditionalRules";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuestionnaireSection;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireSection;
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof QuestionnaireSection;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuestionnaireSection;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireSection;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof QuestionnaireSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuestionnaireSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuestionnaireSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QuestionnaireSectionsServicePaginationReq;
            readonly O: typeof QuestionnaireSectionsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QuestionnaireSectionsServiceSearchAllReq;
            readonly O: typeof QuestionnaireSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QuestionnaireSectionsServiceFilterReq;
            readonly O: typeof QuestionnaireSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.CountInStatus
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof QuestionnaireSectionsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a section for uploading records
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof QuestionnaireSectionsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV section that could be used to upload records
         *
         * @generated from rpc Scailo.QuestionnaireSectionsService.DownloadImportTemplate
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
         * @generated from rpc Scailo.QuestionnaireSectionsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=questionnaire_sections.scailo_connect.d.ts.map
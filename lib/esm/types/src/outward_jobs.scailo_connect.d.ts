import { OutwardJob, OutwardJobAncillaryParameters, OutwardJobContact, OutwardJobContactsList, OutwardJobInwardInventoryMatchList, OutwardJobInwardItem, OutwardJobInwardItemHistoryRequest, OutwardJobInwardItemProspectiveInfoRequest, OutwardJobInwardItemsSearchRequest, OutwardJobOutwardInventoryMatchList, OutwardJobOutwardItem, OutwardJobOutwardItemHistoryRequest, OutwardJobOutwardItemProspectiveInfoRequest, OutwardJobOutwardItemsSearchRequest, OutwardJobsInwardItemsList, OutwardJobsList, OutwardJobsOutwardItemsList, OutwardJobsServiceAutofillRequest, OutwardJobsServiceContactCreateRequest, OutwardJobsServiceCountReq, OutwardJobsServiceCreateRequest, OutwardJobsServiceFilterReq, OutwardJobsServiceInwardItemCreateRequest, OutwardJobsServiceInwardItemUpdateRequest, OutwardJobsServiceMultipleInwardItemsCreateRequest, OutwardJobsServiceMultipleOutwardItemsCreateRequest, OutwardJobsServiceOutwardItemCreateRequest, OutwardJobsServiceOutwardItemUpdateRequest, OutwardJobsServicePaginatedInwardItemsResponse, OutwardJobsServicePaginatedOutwardItemsResponse, OutwardJobsServicePaginationReq, OutwardJobsServicePaginationResponse, OutwardJobsServiceSearchAllReq, OutwardJobsServiceUpdateRequest } from "./outward_jobs.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each outward job
 *
 * @generated from service Scailo.OutwardJobsService
 */
export declare const OutwardJobsService: {
    readonly typeName: "Scailo.OutwardJobsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.OutwardJobsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof OutwardJobsServiceCreateRequest;
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
         * @generated from rpc Scailo.OutwardJobsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof OutwardJobsServiceCreateRequest;
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
         * @generated from rpc Scailo.OutwardJobsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof OutwardJobsServiceUpdateRequest;
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
         * @generated from rpc Scailo.OutwardJobsService.SendForVerification
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
         * @generated from rpc Scailo.OutwardJobsService.Verify
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
         * @generated from rpc Scailo.OutwardJobsService.Approve
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
         * @generated from rpc Scailo.OutwardJobsService.SendForRevision
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
         * @generated from rpc Scailo.OutwardJobsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof OutwardJobsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.OutwardJobsService.Halt
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
         * @generated from rpc Scailo.OutwardJobsService.Discard
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
         * @generated from rpc Scailo.OutwardJobsService.Restore
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
         * @generated from rpc Scailo.OutwardJobsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Duplicates an existing operational record (e.g., an order, schedule, or requisition) to create a new, distinct entity with a specified delivery date.
         *
         * **Side Effects:**
         * - Provisions a completely new record that inherits the core attributes, line items, and configurations of the source record identified by the UUID.
         * - Overrides the original delivery schedule with the newly provided `delivery_date` and assigns the newly provided external `reference_id`.
         * - Appends an audit trail entry linking the new record to its original source, tracking the duplication event and justification comment.
         * - Returns the internal identifier and UUID of the newly generated record.
         *
         * @generated from rpc Scailo.OutwardJobsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof RepeatWithDeliveryDate;
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
         * @generated from rpc Scailo.OutwardJobsService.Reopen
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
         * @generated from rpc Scailo.OutwardJobsService.CommentAdd
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
         * @generated from rpc Scailo.OutwardJobsService.SendEmail
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
         * @generated from rpc Scailo.OutwardJobsService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Automatically populates a record with line items and configurations derived from its linked references.
         *
         * **Side Effects:**
         * - Queries the target record (identified by its UUID) for any attached operational constraints or references.
         * - Dynamically generates and attaches the corresponding line items to the record based on the sourced data, minimizing manual data entry.
         * - Appends an audit trail entry tracking the execution of the autofill operation and the provided justification comment.
         *
         * @generated from rpc Scailo.OutwardJobsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof OutwardJobsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.OutwardJobsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates whether the specified record has satisfied all prerequisite business rules required to transition into a completed lifecycle state.
         *
         * This is a non-mutating, read-only query that performs comprehensive server-side validation against the record's current operational constraints. Depending on the specific domain context, the underlying checks may verify that all dependent workflows are resolved, associated child records (such as line items or sub-tasks) have reached their terminal states, and no mandatory actions remain pending.
         * Client applications typically utilize this endpoint to dynamically determine whether the "Complete" action should be enabled or exposed in the user interface.
         *
         * @generated from rpc Scailo.OutwardJobsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward items within an Outward Job have been ordered (through a Purchase Order)
         *
         * @generated from rpc Scailo.OutwardJobsService.IsOrdered
         */
        readonly isOrdered: {
            readonly name: "IsOrdered";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Outward items within an Outward Job have been dispatched (through Free Issue Material)
         *
         * @generated from rpc Scailo.OutwardJobsService.IsDispatched
         */
        readonly isDispatched: {
            readonly name: "IsDispatched";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.AddMultipleOutwardJobInwardItems
         */
        readonly addMultipleOutwardJobInwardItems: {
            readonly name: "AddMultipleOutwardJobInwardItems";
            readonly I: typeof OutwardJobsServiceMultipleInwardItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an inward item to a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.AddOutwardJobInwardItem
         */
        readonly addOutwardJobInwardItem: {
            readonly name: "AddOutwardJobInwardItem";
            readonly I: typeof OutwardJobsServiceInwardItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an inward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ModifyOutwardJobInwardItem
         */
        readonly modifyOutwardJobInwardItem: {
            readonly name: "ModifyOutwardJobInwardItem";
            readonly I: typeof OutwardJobsServiceInwardItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an inward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ApproveOutwardJobInwardItem
         */
        readonly approveOutwardJobInwardItem: {
            readonly name: "ApproveOutwardJobInwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an inward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.DeleteOutwardJobInwardItem
         */
        readonly deleteOutwardJobInwardItem: {
            readonly name: "DeleteOutwardJobInwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ReorderOutwardJobInwardItems
         */
        readonly reorderOutwardJobInwardItems: {
            readonly name: "ReorderOutwardJobInwardItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Inward Item by ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobInwardItemByID
         */
        readonly viewOutwardJobInwardItemByID: {
            readonly name: "ViewOutwardJobInwardItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobInwardItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job inward items for given outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewApprovedOutwardJobInwardItems
         */
        readonly viewApprovedOutwardJobInwardItems: {
            readonly name: "ViewApprovedOutwardJobInwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job inward items for given outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewUnapprovedOutwardJobInwardItems
         */
        readonly viewUnapprovedOutwardJobInwardItems: {
            readonly name: "ViewUnapprovedOutwardJobInwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the outward job inward item
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobInwardItemHistory
         */
        readonly viewOutwardJobInwardItemHistory: {
            readonly name: "ViewOutwardJobInwardItemHistory";
            readonly I: typeof OutwardJobInwardItemHistoryRequest;
            readonly O: typeof OutwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job inward items for given outward job ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewPaginatedApprovedOutwardJobInwardItems
         */
        readonly viewPaginatedApprovedOutwardJobInwardItems: {
            readonly name: "ViewPaginatedApprovedOutwardJobInwardItems";
            readonly I: typeof OutwardJobInwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job inward items for given outward job ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewPaginatedUnapprovedOutwardJobInwardItems
         */
        readonly viewPaginatedUnapprovedOutwardJobInwardItems: {
            readonly name: "ViewPaginatedUnapprovedOutwardJobInwardItems";
            readonly I: typeof OutwardJobInwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through outward job inward items with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.SearchInwardItemsWithPagination
         */
        readonly searchInwardItemsWithPagination: {
            readonly name: "SearchInwardItemsWithPagination";
            readonly I: typeof OutwardJobInwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload inward items from the filled CSV file
         *
         * @generated from rpc Scailo.OutwardJobsService.DownloadInwardItemsCSVTemplate
         */
        readonly downloadInwardItemsCSVTemplate: {
            readonly name: "DownloadInwardItemsCSVTemplate";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload inward items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.OutwardJobsService.UploadOutwardJobInwardItems
         */
        readonly uploadOutwardJobInwardItems: {
            readonly name: "UploadOutwardJobInwardItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.AddMultipleOutwardJobOutwardItems
         */
        readonly addMultipleOutwardJobOutwardItems: {
            readonly name: "AddMultipleOutwardJobOutwardItems";
            readonly I: typeof OutwardJobsServiceMultipleOutwardItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an outward item to a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.AddOutwardJobOutwardItem
         */
        readonly addOutwardJobOutwardItem: {
            readonly name: "AddOutwardJobOutwardItem";
            readonly I: typeof OutwardJobsServiceOutwardItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an outward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ModifyOutwardJobOutwardItem
         */
        readonly modifyOutwardJobOutwardItem: {
            readonly name: "ModifyOutwardJobOutwardItem";
            readonly I: typeof OutwardJobsServiceOutwardItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an outward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ApproveOutwardJobOutwardItem
         */
        readonly approveOutwardJobOutwardItem: {
            readonly name: "ApproveOutwardJobOutwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an outward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.DeleteOutwardJobOutwardItem
         */
        readonly deleteOutwardJobOutwardItem: {
            readonly name: "DeleteOutwardJobOutwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ReorderOutwardJobOutwardItems
         */
        readonly reorderOutwardJobOutwardItems: {
            readonly name: "ReorderOutwardJobOutwardItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Outward Item by ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobOutwardItemByID
         */
        readonly viewOutwardJobOutwardItemByID: {
            readonly name: "ViewOutwardJobOutwardItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobOutwardItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job outward items for given outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewApprovedOutwardJobOutwardItems
         */
        readonly viewApprovedOutwardJobOutwardItems: {
            readonly name: "ViewApprovedOutwardJobOutwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job outward items for given outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewUnapprovedOutwardJobOutwardItems
         */
        readonly viewUnapprovedOutwardJobOutwardItems: {
            readonly name: "ViewUnapprovedOutwardJobOutwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the outward job outward item
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobOutwardItemHistory
         */
        readonly viewOutwardJobOutwardItemHistory: {
            readonly name: "ViewOutwardJobOutwardItemHistory";
            readonly I: typeof OutwardJobOutwardItemHistoryRequest;
            readonly O: typeof OutwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job outward items for given outward job ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewPaginatedApprovedOutwardJobOutwardItems
         */
        readonly viewPaginatedApprovedOutwardJobOutwardItems: {
            readonly name: "ViewPaginatedApprovedOutwardJobOutwardItems";
            readonly I: typeof OutwardJobOutwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job outward items for given outward job ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewPaginatedUnapprovedOutwardJobOutwardItems
         */
        readonly viewPaginatedUnapprovedOutwardJobOutwardItems: {
            readonly name: "ViewPaginatedUnapprovedOutwardJobOutwardItems";
            readonly I: typeof OutwardJobOutwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through outward job outward items with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.SearchOutwardItemsWithPagination
         */
        readonly searchOutwardItemsWithPagination: {
            readonly name: "SearchOutwardItemsWithPagination";
            readonly I: typeof OutwardJobOutwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload outward items from the filled CSV file
         *
         * @generated from rpc Scailo.OutwardJobsService.DownloadOutwardItemsCSVTemplate
         */
        readonly downloadOutwardItemsCSVTemplate: {
            readonly name: "DownloadOutwardItemsCSVTemplate";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload outward items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.OutwardJobsService.UploadOutwardJobOutwardItems
         */
        readonly uploadOutwardJobOutwardItems: {
            readonly name: "UploadOutwardJobOutwardItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a contact
         *
         * @generated from rpc Scailo.OutwardJobsService.AddOutwardJobContact
         */
        readonly addOutwardJobContact: {
            readonly name: "AddOutwardJobContact";
            readonly I: typeof OutwardJobsServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a contact
         *
         * @generated from rpc Scailo.OutwardJobsService.ApproveOutwardJobContact
         */
        readonly approveOutwardJobContact: {
            readonly name: "ApproveOutwardJobContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a contact
         *
         * @generated from rpc Scailo.OutwardJobsService.DeleteOutwardJobContact
         */
        readonly deleteOutwardJobContact: {
            readonly name: "DeleteOutwardJobContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a contact for the given ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobContactByID
         */
        readonly viewOutwardJobContactByID: {
            readonly name: "ViewOutwardJobContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all contacts for given outward job UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobContacts
         */
        readonly viewOutwardJobContacts: {
            readonly name: "ViewOutwardJobContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof OutwardJobsServicePaginationReq;
            readonly O: typeof OutwardJobsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all purchase order IDs that are associated with the given outward job UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewAssociatedPurchaseOrderIDs
         */
        readonly viewAssociatedPurchaseOrderIDs: {
            readonly name: "ViewAssociatedPurchaseOrderIDs";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward items for the given outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewProspectiveInwardFamilies
         */
        readonly viewProspectiveInwardFamilies: {
            readonly name: "ViewProspectiveInwardFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter prospective inward families for the record represented by the given UUID identifier
         *
         * @generated from rpc Scailo.OutwardJobsService.FilterProspectiveInwardFamilies
         */
        readonly filterProspectiveInwardFamilies: {
            readonly name: "FilterProspectiveInwardFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward job inward item info for the given family ID and outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewProspectiveOutwardJobInwardItem
         */
        readonly viewProspectiveOutwardJobInwardItem: {
            readonly name: "ViewProspectiveOutwardJobInwardItem";
            readonly I: typeof OutwardJobInwardItemProspectiveInfoRequest;
            readonly O: typeof OutwardJobsServiceInwardItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Inventory Match of all the inward families of the given outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewInwardInventoryMatch
         */
        readonly viewInwardInventoryMatch: {
            readonly name: "ViewInwardInventoryMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobInwardInventoryMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward items for the given outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewProspectiveOutwardFamilies
         */
        readonly viewProspectiveOutwardFamilies: {
            readonly name: "ViewProspectiveOutwardFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter prospective outward families for the record represented by the given UUID identifier
         *
         * @generated from rpc Scailo.OutwardJobsService.FilterProspectiveOutwardFamilies
         */
        readonly filterProspectiveOutwardFamilies: {
            readonly name: "FilterProspectiveOutwardFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward job outward item info for the given family ID and outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewProspectiveOutwardJobOutwardItem
         */
        readonly viewProspectiveOutwardJobOutwardItem: {
            readonly name: "ViewProspectiveOutwardJobOutwardItem";
            readonly I: typeof OutwardJobOutwardItemProspectiveInfoRequest;
            readonly O: typeof OutwardJobsServiceOutwardItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Inventory Match of all the outward families of the given outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardInventoryMatch
         */
        readonly viewOutwardInventoryMatch: {
            readonly name: "ViewOutwardInventoryMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobOutwardInventoryMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates the download eligibility of a specific record using its universally unique identifier (UUID).
         *
         * This endpoint serves as a lightweight precursor to the actual file retrieval process. It verifies
         * whether the target record supports file extraction by checking if a custom download function has
         * been implemented for the underlying asset. By utilizing this check, client applications can
         * preemptively determine file availability and dynamically adjust user interface elements
         * (e.g., enabling or disabling a download button) without initiating a full, potentially heavy
         * download request.
         *
         * @generated from rpc Scailo.OutwardJobsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the underlying file or document payload associated with a specific entity
         * using its universally unique identifier (UUID).
         *
         * This endpoint is designed for versatile resource retrieval and is commonly utilized
         * to facilitate direct, secure, or public-facing downloads. By relying on an obscure
         * UUID rather than predictable internal sequential IDs, it ensures that external
         * download links remain unguessable and safe for broad distribution.
         *
         * @generated from rpc Scailo.OutwardJobsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.OutwardJobsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof OutwardJobsServiceSearchAllReq;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.OutwardJobsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof OutwardJobsServiceFilterReq;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.OutwardJobsService.CountInStatus
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
         * @generated from rpc Scailo.OutwardJobsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof OutwardJobsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.OutwardJobsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof OutwardJobsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=outward_jobs.scailo_connect.d.ts.map
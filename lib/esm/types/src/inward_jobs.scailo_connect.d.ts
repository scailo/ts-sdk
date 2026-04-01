import { InwardJob, InwardJobAncillaryParameters, InwardJobContact, InwardJobContactsList, InwardJobInwardInventoryMatchList, InwardJobInwardItem, InwardJobInwardItemHistoryRequest, InwardJobInwardItemProspectiveInfoRequest, InwardJobInwardItemsSearchRequest, InwardJobOutwardInventoryMatchList, InwardJobOutwardItem, InwardJobOutwardItemHistoryRequest, InwardJobOutwardItemProspectiveInfoRequest, InwardJobOutwardItemsSearchRequest, InwardJobsInwardItemsList, InwardJobsList, InwardJobsOutwardItemsList, InwardJobsServiceAutofillRequest, InwardJobsServiceContactCreateRequest, InwardJobsServiceCountReq, InwardJobsServiceCreateRequest, InwardJobsServiceFilterReq, InwardJobsServiceInwardItemCreateRequest, InwardJobsServiceInwardItemUpdateRequest, InwardJobsServiceMultipleInwardItemsCreateRequest, InwardJobsServiceMultipleOutwardItemsCreateRequest, InwardJobsServiceOutwardItemCreateRequest, InwardJobsServiceOutwardItemUpdateRequest, InwardJobsServicePaginatedInwardItemsResponse, InwardJobsServicePaginatedOutwardItemsResponse, InwardJobsServicePaginationReq, InwardJobsServicePaginationResponse, InwardJobsServiceSearchAllReq, InwardJobsServiceUpdateRequest } from "./inward_jobs.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each inward job
 *
 * @generated from service Scailo.InwardJobsService
 */
export declare const InwardJobsService: {
    readonly typeName: "Scailo.InwardJobsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.InwardJobsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof InwardJobsServiceCreateRequest;
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
         * @generated from rpc Scailo.InwardJobsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof InwardJobsServiceCreateRequest;
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
         * @generated from rpc Scailo.InwardJobsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof InwardJobsServiceUpdateRequest;
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
         * @generated from rpc Scailo.InwardJobsService.SendForVerification
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
         * @generated from rpc Scailo.InwardJobsService.Verify
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
         * @generated from rpc Scailo.InwardJobsService.Approve
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
         * @generated from rpc Scailo.InwardJobsService.SendForRevision
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
         * @generated from rpc Scailo.InwardJobsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof InwardJobsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.InwardJobsService.Halt
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
         * @generated from rpc Scailo.InwardJobsService.Discard
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
         * @generated from rpc Scailo.InwardJobsService.Restore
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
         * @generated from rpc Scailo.InwardJobsService.Complete
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
         * @generated from rpc Scailo.InwardJobsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof RepeatWithDeliveryDate;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.InwardJobsService.Reopen
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
         * @generated from rpc Scailo.InwardJobsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.InwardJobsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the inward job
         *
         * @generated from rpc Scailo.InwardJobsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof InwardJobsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.InwardJobsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward Job can be marked as completed (is true when all the inward items have been ordered and all the outward items have been received)
         *
         * @generated from rpc Scailo.InwardJobsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward items within an Inward Job have been ordered (through a Sales Order)
         *
         * @generated from rpc Scailo.InwardJobsService.IsOrdered
         */
        readonly isOrdered: {
            readonly name: "IsOrdered";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Outward items within an Inward Job have been received (through Free Issue Material)
         *
         * @generated from rpc Scailo.InwardJobsService.IsReceived
         */
        readonly isReceived: {
            readonly name: "IsReceived";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.AddMultipleInwardJobInwardItems
         */
        readonly addMultipleInwardJobInwardItems: {
            readonly name: "AddMultipleInwardJobInwardItems";
            readonly I: typeof InwardJobsServiceMultipleInwardItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an inward item to a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.AddInwardJobInwardItem
         */
        readonly addInwardJobInwardItem: {
            readonly name: "AddInwardJobInwardItem";
            readonly I: typeof InwardJobsServiceInwardItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an inward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ModifyInwardJobInwardItem
         */
        readonly modifyInwardJobInwardItem: {
            readonly name: "ModifyInwardJobInwardItem";
            readonly I: typeof InwardJobsServiceInwardItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an inward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ApproveInwardJobInwardItem
         */
        readonly approveInwardJobInwardItem: {
            readonly name: "ApproveInwardJobInwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an inward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.DeleteInwardJobInwardItem
         */
        readonly deleteInwardJobInwardItem: {
            readonly name: "DeleteInwardJobInwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ReorderInwardJobInwardItems
         */
        readonly reorderInwardJobInwardItems: {
            readonly name: "ReorderInwardJobInwardItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Inward Item by ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobInwardItemByID
         */
        readonly viewInwardJobInwardItemByID: {
            readonly name: "ViewInwardJobInwardItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobInwardItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job inward items for given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewApprovedInwardJobInwardItems
         */
        readonly viewApprovedInwardJobInwardItems: {
            readonly name: "ViewApprovedInwardJobInwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job inward items for given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewUnapprovedInwardJobInwardItems
         */
        readonly viewUnapprovedInwardJobInwardItems: {
            readonly name: "ViewUnapprovedInwardJobInwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the inward job inward item
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobInwardItemHistory
         */
        readonly viewInwardJobInwardItemHistory: {
            readonly name: "ViewInwardJobInwardItemHistory";
            readonly I: typeof InwardJobInwardItemHistoryRequest;
            readonly O: typeof InwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job inward items for given inward job ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewPaginatedApprovedInwardJobInwardItems
         */
        readonly viewPaginatedApprovedInwardJobInwardItems: {
            readonly name: "ViewPaginatedApprovedInwardJobInwardItems";
            readonly I: typeof InwardJobInwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job inward items for given inward job ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewPaginatedUnapprovedInwardJobInwardItems
         */
        readonly viewPaginatedUnapprovedInwardJobInwardItems: {
            readonly name: "ViewPaginatedUnapprovedInwardJobInwardItems";
            readonly I: typeof InwardJobInwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through inward job inward items with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.SearchInwardItemsWithPagination
         */
        readonly searchInwardItemsWithPagination: {
            readonly name: "SearchInwardItemsWithPagination";
            readonly I: typeof InwardJobInwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload inward items from the filled CSV file
         *
         * @generated from rpc Scailo.InwardJobsService.DownloadInwardItemsCSVTemplate
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
         * @generated from rpc Scailo.InwardJobsService.UploadInwardJobInwardItems
         */
        readonly uploadInwardJobInwardItems: {
            readonly name: "UploadInwardJobInwardItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.AddMultipleInwardJobOutwardItems
         */
        readonly addMultipleInwardJobOutwardItems: {
            readonly name: "AddMultipleInwardJobOutwardItems";
            readonly I: typeof InwardJobsServiceMultipleOutwardItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an outward item to a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.AddInwardJobOutwardItem
         */
        readonly addInwardJobOutwardItem: {
            readonly name: "AddInwardJobOutwardItem";
            readonly I: typeof InwardJobsServiceOutwardItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an outward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ModifyInwardJobOutwardItem
         */
        readonly modifyInwardJobOutwardItem: {
            readonly name: "ModifyInwardJobOutwardItem";
            readonly I: typeof InwardJobsServiceOutwardItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an outward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ApproveInwardJobOutwardItem
         */
        readonly approveInwardJobOutwardItem: {
            readonly name: "ApproveInwardJobOutwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an outward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.DeleteInwardJobOutwardItem
         */
        readonly deleteInwardJobOutwardItem: {
            readonly name: "DeleteInwardJobOutwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ReorderInwardJobOutwardItems
         */
        readonly reorderInwardJobOutwardItems: {
            readonly name: "ReorderInwardJobOutwardItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Outward Item by ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobOutwardItemByID
         */
        readonly viewInwardJobOutwardItemByID: {
            readonly name: "ViewInwardJobOutwardItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobOutwardItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job outward items for given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewApprovedInwardJobOutwardItems
         */
        readonly viewApprovedInwardJobOutwardItems: {
            readonly name: "ViewApprovedInwardJobOutwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job outward items for given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewUnapprovedInwardJobOutwardItems
         */
        readonly viewUnapprovedInwardJobOutwardItems: {
            readonly name: "ViewUnapprovedInwardJobOutwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the inward job outward item
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobOutwardItemHistory
         */
        readonly viewInwardJobOutwardItemHistory: {
            readonly name: "ViewInwardJobOutwardItemHistory";
            readonly I: typeof InwardJobOutwardItemHistoryRequest;
            readonly O: typeof InwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job outward items for given inward job ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewPaginatedApprovedInwardJobOutwardItems
         */
        readonly viewPaginatedApprovedInwardJobOutwardItems: {
            readonly name: "ViewPaginatedApprovedInwardJobOutwardItems";
            readonly I: typeof InwardJobOutwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job outward items for given inward job ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewPaginatedUnapprovedInwardJobOutwardItems
         */
        readonly viewPaginatedUnapprovedInwardJobOutwardItems: {
            readonly name: "ViewPaginatedUnapprovedInwardJobOutwardItems";
            readonly I: typeof InwardJobOutwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through inward job outward items with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.SearchOutwardItemsWithPagination
         */
        readonly searchOutwardItemsWithPagination: {
            readonly name: "SearchOutwardItemsWithPagination";
            readonly I: typeof InwardJobOutwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload outward items from the filled CSV file
         *
         * @generated from rpc Scailo.InwardJobsService.DownloadOutwardItemsCSVTemplate
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
         * @generated from rpc Scailo.InwardJobsService.UploadInwardJobOutwardItems
         */
        readonly uploadInwardJobOutwardItems: {
            readonly name: "UploadInwardJobOutwardItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a contact
         *
         * @generated from rpc Scailo.InwardJobsService.AddInwardJobContact
         */
        readonly addInwardJobContact: {
            readonly name: "AddInwardJobContact";
            readonly I: typeof InwardJobsServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a contact
         *
         * @generated from rpc Scailo.InwardJobsService.ApproveInwardJobContact
         */
        readonly approveInwardJobContact: {
            readonly name: "ApproveInwardJobContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a contact
         *
         * @generated from rpc Scailo.InwardJobsService.DeleteInwardJobContact
         */
        readonly deleteInwardJobContact: {
            readonly name: "DeleteInwardJobContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a contact for the given ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobContactByID
         */
        readonly viewInwardJobContactByID: {
            readonly name: "ViewInwardJobContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all contacts for given inward job UUID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobContacts
         */
        readonly viewInwardJobContacts: {
            readonly name: "ViewInwardJobContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.InwardJobsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.InwardJobsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.InwardJobsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.InwardJobsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.InwardJobsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.InwardJobsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.InwardJobsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.InwardJobsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof InwardJobsServicePaginationReq;
            readonly O: typeof InwardJobsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all sales order IDs that are associated with the given inward job UUID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewAssociatedSalesOrderIDs
         */
        readonly viewAssociatedSalesOrderIDs: {
            readonly name: "ViewAssociatedSalesOrderIDs";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Inventory Match of all the inward families of the given inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardInventoryMatch
         */
        readonly viewInwardInventoryMatch: {
            readonly name: "ViewInwardInventoryMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobInwardInventoryMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward items for the given inward job (all families that could be purchased)
         *
         * @generated from rpc Scailo.InwardJobsService.ViewProspectiveInwardFamilies
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
         * @generated from rpc Scailo.InwardJobsService.FilterProspectiveInwardFamilies
         */
        readonly filterProspectiveInwardFamilies: {
            readonly name: "FilterProspectiveInwardFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward job inward item info for the given family ID and inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewProspectiveInwardJobInwardItem
         */
        readonly viewProspectiveInwardJobInwardItem: {
            readonly name: "ViewProspectiveInwardJobInwardItem";
            readonly I: typeof InwardJobInwardItemProspectiveInfoRequest;
            readonly O: typeof InwardJobsServiceInwardItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Inventory Match of all the outward families of the given inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ViewOutwardInventoryMatch
         */
        readonly viewOutwardInventoryMatch: {
            readonly name: "ViewOutwardInventoryMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobOutwardInventoryMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward items for the given inward job (all families that could be sold)
         *
         * @generated from rpc Scailo.InwardJobsService.ViewProspectiveOutwardFamilies
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
         * @generated from rpc Scailo.InwardJobsService.FilterProspectiveOutwardFamilies
         */
        readonly filterProspectiveOutwardFamilies: {
            readonly name: "FilterProspectiveOutwardFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward job outward item info for the given family ID and inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewProspectiveInwardJobOutwardItem
         */
        readonly viewProspectiveInwardJobOutwardItem: {
            readonly name: "ViewProspectiveInwardJobOutwardItem";
            readonly I: typeof InwardJobOutwardItemProspectiveInfoRequest;
            readonly O: typeof InwardJobsServiceOutwardItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.InwardJobsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download inward job with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.InwardJobsService.DownloadByUUID
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
         * @generated from rpc Scailo.InwardJobsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof InwardJobsServiceSearchAllReq;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.InwardJobsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof InwardJobsServiceFilterReq;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.InwardJobsService.CountInStatus
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
         * @generated from rpc Scailo.InwardJobsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof InwardJobsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.InwardJobsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof InwardJobsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=inward_jobs.scailo_connect.d.ts.map
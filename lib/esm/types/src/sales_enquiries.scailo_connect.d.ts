import { SalesEnquiriesItemsList, SalesEnquiriesList, SalesEnquiriesServiceContactCreateRequest, SalesEnquiriesServiceCountReq, SalesEnquiriesServiceCreateRequest, SalesEnquiriesServiceFilterReq, SalesEnquiriesServiceItemCreateRequest, SalesEnquiriesServiceItemUpdateRequest, SalesEnquiriesServicePaginatedItemsResponse, SalesEnquiriesServicePaginationReq, SalesEnquiriesServicePaginationResponse, SalesEnquiriesServiceSearchAllReq, SalesEnquiriesServiceUpdateRequest, SalesEnquiry, SalesEnquiryAncillaryParameters, SalesEnquiryContact, SalesEnquiryContactsList, SalesEnquiryItem, SalesEnquiryItemHistoryRequest, SalesEnquiryItemsSearchRequest } from "./sales_enquiries.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * The SalesEnquiriesService acts as the primary entry point for managing inbound leads and prospective customer requests.
 * This service handles the complete lifecycle of a Sales Enquiry—from initial ingestion (e.g., via website contact forms,
 * CRM integrations, or direct communication) through qualification, internal review, and final conversion into formal
 * Sales Quotations or Sales Orders.
 *
 * It provides a comprehensive suite of RPCs to mutate core prospect parameters, track requested line items (which uniquely
 * utilize free-text descriptors prior to strict catalog mapping), orchestrate multi-stage approval workflows, and execute
 * advanced, paginated lookups. This service is architected to give sales and business development teams actionable
 * visibility into the earliest stages of the outbound sales pipeline.
 *
 * @generated from service Scailo.SalesEnquiriesService
 */
export declare const SalesEnquiriesService: {
    readonly typeName: "Scailo.SalesEnquiriesService";
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
         * - `ALREADY_EXISTS`: If the `reference_id` is already taken.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalesEnquiriesServiceCreateRequest;
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
         * @generated from rpc Scailo.SalesEnquiriesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalesEnquiriesServiceCreateRequest;
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
         * @generated from rpc Scailo.SalesEnquiriesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalesEnquiriesServiceUpdateRequest;
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
         * @generated from rpc Scailo.SalesEnquiriesService.SendForVerification
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
         * @generated from rpc Scailo.SalesEnquiriesService.Verify
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
         * @generated from rpc Scailo.SalesEnquiriesService.Approve
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
         * @generated from rpc Scailo.SalesEnquiriesService.SendForRevision
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
         * @generated from rpc Scailo.SalesEnquiriesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesEnquiriesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Halt
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
         * @generated from rpc Scailo.SalesEnquiriesService.Discard
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
         * @generated from rpc Scailo.SalesEnquiriesService.Restore
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
         * @generated from rpc Scailo.SalesEnquiriesService.Complete
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
         * @generated from rpc Scailo.SalesEnquiriesService.Repeat
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
         * @generated from rpc Scailo.SalesEnquiriesService.Reopen
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
         * @generated from rpc Scailo.SalesEnquiriesService.CommentAdd
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
         * @generated from rpc Scailo.SalesEnquiriesService.SendEmail
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
         * @generated from rpc Scailo.SalesEnquiriesService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Initiates a formal amendment process for a specific record, transitioning it into a structured revision workflow.
         *
         * This API is utilized when substantive modifications are required for an already finalized or approved record.
         * Rather than mutating the active data directly, it explicitly triggers a compliance-driven revision cycle,
         * ensuring that all proposed changes are tracked and undergo standard review and authorization procedures.
         *
         * **Side Effects & Lifecycle:**
         * * The record's internal amendment count property is strictly incremented by 1.
         * * The record is placed into a pending revision state, typically preserving the availability of the currently approved version until the amendment is finalized.
         * * The optional user comment is permanently appended to the record's audit log as the formal justification for initiating the change.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Amend
         */
        readonly amend: {
            readonly name: "Amend";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Appends a single requested product or service line item to an existing Sales Enquiry.
         *
         * **Side Effects:**
         * - Captures the prospect's preliminary interest, expected quantities, and proposed pricing.
         * - Attaches the new line item to the parent enquiry, identifying the product via a free-text name rather than a strict catalog ID.
         * - Appends an audit trail entry tracking the creation and user justification.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.AddSalesEnquiryItem
         */
        readonly addSalesEnquiryItem: {
            readonly name: "AddSalesEnquiryItem";
            readonly I: typeof SalesEnquiriesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modifies the core parameters of an existing requested line item.
         *
         * **Side Effects:**
         * - Overwrites the previously requested quantities, proposed terms, and specifications as the lead is qualified and client requirements become clearer.
         * - Triggers a recalculation of the parent sales enquiry's prospective grand total.
         * - May reset the item's approval status, requiring re-authorization.
         * - Appends an audit trail entry tracking the modifications.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ModifySalesEnquiryItem
         */
        readonly modifySalesEnquiryItem: {
            readonly name: "ModifySalesEnquiryItem";
            readonly I: typeof SalesEnquiriesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending line item, finalizing its active status within the sales enquiry.
         *
         * **Side Effects:**
         * - Activates the requested line item, validating its inclusion in the prospect's profile.
         * - Appends the required approval metadata, timestamp, and audit comment to the record's history.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ApproveSalesEnquiryItem
         */
        readonly approveSalesEnquiryItem: {
            readonly name: "ApproveSalesEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates a requested line item from the sales enquiry.
         *
         * **Side Effects:**
         * - Revokes the item from the enquiry, subtracting its prospective value from the grand total.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DeleteSalesEnquiryItem
         */
        readonly deleteSalesEnquiryItem: {
            readonly name: "DeleteSalesEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorders the numerical sequence of requested line items within the sales enquiry.
         *
         * **Side Effects:**
         * - Mutates the display sequence (`sort_order`) of the specified items in bulk.
         * - Directly affects how the requested items are visually arranged in UI tables for sales representatives.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ReorderSalesEnquiryItems
         */
        readonly reorderSalesEnquiryItems: {
            readonly name: "ReorderSalesEnquiryItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, finalized details of a specific requested line item by its internal sequence ID.
         *
         * This is a read-only operation that fetches full metadata, approval histories, and calculated prospective financial values.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewSalesEnquiryItemByID
         */
        readonly viewSalesEnquiryItemByID: {
            readonly name: "ViewSalesEnquiryItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiryItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all active, fully approved requested line items mapped to a specific sales enquiry ID.
         *
         * This read-only query is optimized for rendering the finalized lead summary on frontend interfaces before conversion to a quotation.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewApprovedSalesEnquiryItems
         */
        readonly viewApprovedSalesEnquiryItems: {
            readonly name: "ViewApprovedSalesEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved requested line items mapped to a specific sales enquiry ID.
         *
         * This read-only query is utilized primarily by administrative dashboards to quickly identify prospect requests awaiting initial review.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewUnapprovedSalesEnquiryItems
         */
        readonly viewUnapprovedSalesEnquiryItems: {
            readonly name: "ViewUnapprovedSalesEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the historical audit trail and lifecycle changes of a specific requested line item.
         *
         * This read-only operation aggregates the chronological evolution of the item based on its free-text name and parent enquiry ID, tracking parameter adjustments and state changes throughout the qualification phase.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewSalesEnquiryItemHistory
         */
        readonly viewSalesEnquiryItemHistory: {
            readonly name: "ViewSalesEnquiryItemHistory";
            readonly I: typeof SalesEnquiryItemHistoryRequest;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists active, approved requested line items using robust pagination controls.
         *
         * This read-only query is optimized for rendering large inbound requests in frontend data tables, supporting explicit windowing parameters.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewPaginatedApprovedSalesEnquiryItems
         */
        readonly viewPaginatedApprovedSalesEnquiryItems: {
            readonly name: "ViewPaginatedApprovedSalesEnquiryItems";
            readonly I: typeof SalesEnquiryItemsSearchRequest;
            readonly O: typeof SalesEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved requested line items using robust pagination controls.
         *
         * This read-only query is optimized for administrative review dashboards handling high volumes of unapproved prospect requests.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewPaginatedUnapprovedSalesEnquiryItems
         */
        readonly viewPaginatedUnapprovedSalesEnquiryItems: {
            readonly name: "ViewPaginatedUnapprovedSalesEnquiryItems";
            readonly I: typeof SalesEnquiryItemsSearchRequest;
            readonly O: typeof SalesEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through all requested line items using advanced filters, status flags, fuzzy text matching, and pagination.
         *
         * This read-only query is the primary entry point for complex lookups across massive lists of inbound leads.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof SalesEnquiryItemsSearchRequest;
            readonly O: typeof SalesEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Exports the current list of requested line items for a specific sales enquiry into a downloadable CSV file.
         *
         * This read-only operation is used by sales representatives to review large prospects offline, or as a baseline to modify requested items locally before executing a bulk upload.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates and downloads a blank, structurally compliant CSV template.
         *
         * This read-only operation provides clients with the exact column headers required to successfully perform a bulk line-item upload.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Processes a bulk ingestion of requested line items for a specific sales enquiry via a CSV file upload.
         *
         * **Side Effects:**
         * - **CRITICAL:** This is an idempotent, destructive operation. It automatically deletes all existing line items currently mapped to the sales enquiry before applying the new items from the CSV.
         * - Wipes the current active list and replaces it entirely with the parsed file contents.
         * - Triggers recalculations of prospective totals and appends creation audit logs for the newly imported items.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.UploadSalesEnquiryItems
         */
        readonly uploadSalesEnquiryItems: {
            readonly name: "UploadSalesEnquiryItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Assigns a designated prospect associate (contact person) to the sales enquiry.
         *
         * **Side Effects:**
         * - Creates a linkage identifying the specific individual who submitted the request or is acting as the primary point of contact for the lead.
         * - Appends an audit trail entry tracking the assignment.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.AddSalesEnquiryContact
         */
        readonly addSalesEnquiryContact: {
            readonly name: "AddSalesEnquiryContact";
            readonly I: typeof SalesEnquiriesServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending prospect contact assignment, finalizing their visibility on the enquiry.
         *
         * **Side Effects:**
         * - Activates the contact linkage, allowing the associate's details to be used for formal follow-ups.
         * - Appends an approval audit trail entry.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ApproveSalesEnquiryContact
         */
        readonly approveSalesEnquiryContact: {
            readonly name: "ApproveSalesEnquiryContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Removes a designated prospect associate from the sales enquiry.
         *
         * **Side Effects:**
         * - Severs the linkage between the enquiry and the individual.
         * - Appends a deletion justification to the audit log.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DeleteSalesEnquiryContact
         */
        readonly deleteSalesEnquiryContact: {
            readonly name: "DeleteSalesEnquiryContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete details of a specific contact mapping by its internal ID.
         *
         * This read-only query fetches the associate linkage data and workflow state.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewSalesEnquiryContactByID
         */
        readonly viewSalesEnquiryContactByID: {
            readonly name: "ViewSalesEnquiryContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiryContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all designated client contacts (associates) assigned to a specific sales enquiry by its UUID.
         *
         * This read-only query is utilized to populate the "Points of Contact" section in frontend lead management views.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewSalesEnquiryContacts
         */
        readonly viewSalesEnquiryContacts: {
            readonly name: "ViewSalesEnquiryContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiryContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiry;
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
         * @generated from rpc Scailo.SalesEnquiriesService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the globally unique identifiers (UUIDs) of a Sales Enquiry's core relational dependencies.
         *
         * This is a read-only query designed to fetch essential parameter references—such as the buyer, consignee, and currency — without exposing the system's internal sequential integer IDs.
         * Client applications and external integrations utilize this endpoint to securely reference linked records while actively mitigating the risk of ID-based data enumeration.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiryAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesEnquiriesServicePaginationReq;
            readonly O: typeof SalesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the comprehensive, chronological history of formal amendments applied to a specific record.
         *
         * This read-only query exposes the complete audit trail of revision workflows that the entity has undergone.
         * It is explicitly designed to support compliance checks, historical tracking, and administrative reviews by
         * detailing exactly how and when a record evolved over its lifecycle.
         *
         * **Side Effects & Lifecycle:**
         * * This is a strictly read-only operation; the underlying record and its current lifecycle state remain entirely unchanged.
         * * Aggregates and returns a sequential log of amendment events, which typically include revision counts, initiation timestamps, and the justification comments provided when the amendments were triggered.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of internal identifiers for all Sales Orders that were generated from or linked to a specific Sales Enquiry.
         *
         * This read-only query is typically utilized by frontend interfaces to display the conversion history of an inbound lead. It allows users to quickly track how an initial prospect request materialized into active fulfillment records and facilitates seamless navigation between the pre-sales lead management and order fulfillment modules.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAssociatedSalesOrdersIDs
         */
        readonly viewAssociatedSalesOrdersIDs: {
            readonly name: "ViewAssociatedSalesOrdersIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
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
         * @generated from rpc Scailo.SalesEnquiriesService.IsDownloadable
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
         * @generated from rpc Scailo.SalesEnquiriesService.DownloadByUUID
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
         * @generated from rpc Scailo.SalesEnquiriesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalesEnquiriesServiceSearchAllReq;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalesEnquiriesServiceFilterReq;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.CountInStatus
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
         * @generated from rpc Scailo.SalesEnquiriesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalesEnquiriesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof SalesEnquiriesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_enquiries.scailo_connect.d.ts.map
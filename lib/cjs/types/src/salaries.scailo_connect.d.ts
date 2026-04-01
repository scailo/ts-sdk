import { SalariesAdditionItemsList, SalariesDeductionItemsList, SalariesList, SalariesReimbursementItemsList, SalariesServiceAdditionItemCreateRequest, SalariesServiceAdditionItemUpdateRequest, SalariesServiceAutofillRequest, SalariesServiceCountReq, SalariesServiceCreateRequest, SalariesServiceDeductionItemCreateRequest, SalariesServiceDeductionItemUpdateRequest, SalariesServiceFilterReq, SalariesServicePaginationReq, SalariesServicePaginationResponse, SalariesServiceReimbursementItemCreateRequest, SalariesServiceReimbursementItemUpdateRequest, SalariesServiceSearchAllReq, SalariesServiceUpdateRequest, Salary, SalaryAdditionItem, SalaryAdditionItemHistoryRequest, SalaryAdditionItemProspectiveInfoRequest, SalaryDeductionItem, SalaryDeductionItemHistoryRequest, SalaryDeductionItemProspectiveInfoRequest, SalaryReimbursementItem, SalaryReimbursementItemHistoryRequest, SalaryReimbursementItemProspectiveInfoRequest } from "./salaries.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each salary
 *
 * @generated from service Scailo.SalariesService
 */
export declare const SalariesService: {
    readonly typeName: "Scailo.SalariesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.SalariesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalariesServiceCreateRequest;
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
         * @generated from rpc Scailo.SalariesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalariesServiceCreateRequest;
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
         * @generated from rpc Scailo.SalariesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalariesServiceUpdateRequest;
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
         * @generated from rpc Scailo.SalariesService.SendForVerification
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
         * @generated from rpc Scailo.SalariesService.Verify
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
         * @generated from rpc Scailo.SalariesService.Approve
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
         * @generated from rpc Scailo.SalariesService.SendForRevision
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
         * @generated from rpc Scailo.SalariesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalariesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.SalariesService.Halt
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
         * @generated from rpc Scailo.SalariesService.Discard
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
         * @generated from rpc Scailo.SalariesService.Restore
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
         * @generated from rpc Scailo.SalariesService.Complete
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
         * @generated from rpc Scailo.SalariesService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.SalariesService.Reopen
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
         * @generated from rpc Scailo.SalariesService.CommentAdd
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
         * @generated from rpc Scailo.SalariesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the salary
         *
         * @generated from rpc Scailo.SalariesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof SalariesServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an addition item to a salary
         *
         * @generated from rpc Scailo.SalariesService.AddSalaryAdditionItem
         */
        readonly addSalaryAdditionItem: {
            readonly name: "AddSalaryAdditionItem";
            readonly I: typeof SalariesServiceAdditionItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an addition item in a salary
         *
         * @generated from rpc Scailo.SalariesService.ModifySalaryAdditionItem
         */
        readonly modifySalaryAdditionItem: {
            readonly name: "ModifySalaryAdditionItem";
            readonly I: typeof SalariesServiceAdditionItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an addition item in a salary
         *
         * @generated from rpc Scailo.SalariesService.ApproveSalaryAdditionItem
         */
        readonly approveSalaryAdditionItem: {
            readonly name: "ApproveSalaryAdditionItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an addition item in a salary
         *
         * @generated from rpc Scailo.SalariesService.DeleteSalaryAdditionItem
         */
        readonly deleteSalaryAdditionItem: {
            readonly name: "DeleteSalaryAdditionItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder addition items in a salary
         *
         * @generated from rpc Scailo.SalariesService.ReorderSalaryAdditionItems
         */
        readonly reorderSalaryAdditionItems: {
            readonly name: "ReorderSalaryAdditionItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Salary Addition Item by ID
         *
         * @generated from rpc Scailo.SalariesService.ViewSalaryAdditionItemByID
         */
        readonly viewSalaryAdditionItemByID: {
            readonly name: "ViewSalaryAdditionItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalaryAdditionItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved salary addition items for given salary ID
         *
         * @generated from rpc Scailo.SalariesService.ViewApprovedSalaryAdditionItems
         */
        readonly viewApprovedSalaryAdditionItems: {
            readonly name: "ViewApprovedSalaryAdditionItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalariesAdditionItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved salary addition items for given salary ID
         *
         * @generated from rpc Scailo.SalariesService.ViewUnapprovedSalaryAdditionItems
         */
        readonly viewUnapprovedSalaryAdditionItems: {
            readonly name: "ViewUnapprovedSalaryAdditionItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalariesAdditionItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the salary addition item
         *
         * @generated from rpc Scailo.SalariesService.ViewSalaryAdditionItemHistory
         */
        readonly viewSalaryAdditionItemHistory: {
            readonly name: "ViewSalaryAdditionItemHistory";
            readonly I: typeof SalaryAdditionItemHistoryRequest;
            readonly O: typeof SalariesAdditionItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective addition item info
         *
         * @generated from rpc Scailo.SalariesService.ViewProspectiveSalaryAdditionItem
         */
        readonly viewProspectiveSalaryAdditionItem: {
            readonly name: "ViewProspectiveSalaryAdditionItem";
            readonly I: typeof SalaryAdditionItemProspectiveInfoRequest;
            readonly O: typeof SalariesServiceAdditionItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an deduction item to a salary
         *
         * @generated from rpc Scailo.SalariesService.AddSalaryDeductionItem
         */
        readonly addSalaryDeductionItem: {
            readonly name: "AddSalaryDeductionItem";
            readonly I: typeof SalariesServiceDeductionItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an deduction item in a salary
         *
         * @generated from rpc Scailo.SalariesService.ModifySalaryDeductionItem
         */
        readonly modifySalaryDeductionItem: {
            readonly name: "ModifySalaryDeductionItem";
            readonly I: typeof SalariesServiceDeductionItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an deduction item in a salary
         *
         * @generated from rpc Scailo.SalariesService.ApproveSalaryDeductionItem
         */
        readonly approveSalaryDeductionItem: {
            readonly name: "ApproveSalaryDeductionItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an deduction item in a salary
         *
         * @generated from rpc Scailo.SalariesService.DeleteSalaryDeductionItem
         */
        readonly deleteSalaryDeductionItem: {
            readonly name: "DeleteSalaryDeductionItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder deduction items in a salary
         *
         * @generated from rpc Scailo.SalariesService.ReorderSalaryDeductionItems
         */
        readonly reorderSalaryDeductionItems: {
            readonly name: "ReorderSalaryDeductionItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Salary Deduction Item by ID
         *
         * @generated from rpc Scailo.SalariesService.ViewSalaryDeductionItemByID
         */
        readonly viewSalaryDeductionItemByID: {
            readonly name: "ViewSalaryDeductionItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalaryDeductionItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved salary deduction items for given salary ID
         *
         * @generated from rpc Scailo.SalariesService.ViewApprovedSalaryDeductionItems
         */
        readonly viewApprovedSalaryDeductionItems: {
            readonly name: "ViewApprovedSalaryDeductionItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalariesDeductionItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved salary deduction items for given salary ID
         *
         * @generated from rpc Scailo.SalariesService.ViewUnapprovedSalaryDeductionItems
         */
        readonly viewUnapprovedSalaryDeductionItems: {
            readonly name: "ViewUnapprovedSalaryDeductionItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalariesDeductionItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the salary deduction item
         *
         * @generated from rpc Scailo.SalariesService.ViewSalaryDeductionItemHistory
         */
        readonly viewSalaryDeductionItemHistory: {
            readonly name: "ViewSalaryDeductionItemHistory";
            readonly I: typeof SalaryDeductionItemHistoryRequest;
            readonly O: typeof SalariesDeductionItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective deduction item info
         *
         * @generated from rpc Scailo.SalariesService.ViewProspectiveSalaryDeductionItem
         */
        readonly viewProspectiveSalaryDeductionItem: {
            readonly name: "ViewProspectiveSalaryDeductionItem";
            readonly I: typeof SalaryDeductionItemProspectiveInfoRequest;
            readonly O: typeof SalariesServiceDeductionItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an reimbursement item to a salary
         *
         * @generated from rpc Scailo.SalariesService.AddSalaryReimbursementItem
         */
        readonly addSalaryReimbursementItem: {
            readonly name: "AddSalaryReimbursementItem";
            readonly I: typeof SalariesServiceReimbursementItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an reimbursement item in a salary
         *
         * @generated from rpc Scailo.SalariesService.ModifySalaryReimbursementItem
         */
        readonly modifySalaryReimbursementItem: {
            readonly name: "ModifySalaryReimbursementItem";
            readonly I: typeof SalariesServiceReimbursementItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an reimbursement item in a salary
         *
         * @generated from rpc Scailo.SalariesService.ApproveSalaryReimbursementItem
         */
        readonly approveSalaryReimbursementItem: {
            readonly name: "ApproveSalaryReimbursementItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an reimbursement item in a salary
         *
         * @generated from rpc Scailo.SalariesService.DeleteSalaryReimbursementItem
         */
        readonly deleteSalaryReimbursementItem: {
            readonly name: "DeleteSalaryReimbursementItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder reimbursement items in a salary
         *
         * @generated from rpc Scailo.SalariesService.ReorderSalaryReimbursementItems
         */
        readonly reorderSalaryReimbursementItems: {
            readonly name: "ReorderSalaryReimbursementItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Salary Reimbursement Item by ID
         *
         * @generated from rpc Scailo.SalariesService.ViewSalaryReimbursementItemByID
         */
        readonly viewSalaryReimbursementItemByID: {
            readonly name: "ViewSalaryReimbursementItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalaryReimbursementItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved salary reimbursement items for given salary ID
         *
         * @generated from rpc Scailo.SalariesService.ViewApprovedSalaryReimbursementItems
         */
        readonly viewApprovedSalaryReimbursementItems: {
            readonly name: "ViewApprovedSalaryReimbursementItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalariesReimbursementItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved salary reimbursement items for given salary ID
         *
         * @generated from rpc Scailo.SalariesService.ViewUnapprovedSalaryReimbursementItems
         */
        readonly viewUnapprovedSalaryReimbursementItems: {
            readonly name: "ViewUnapprovedSalaryReimbursementItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalariesReimbursementItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the salary reimbursement item
         *
         * @generated from rpc Scailo.SalariesService.ViewSalaryReimbursementItemHistory
         */
        readonly viewSalaryReimbursementItemHistory: {
            readonly name: "ViewSalaryReimbursementItemHistory";
            readonly I: typeof SalaryReimbursementItemHistoryRequest;
            readonly O: typeof SalariesReimbursementItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective reimbursement item info
         *
         * @generated from rpc Scailo.SalariesService.ViewProspectiveSalaryReimbursementItem
         */
        readonly viewProspectiveSalaryReimbursementItem: {
            readonly name: "ViewProspectiveSalaryReimbursementItem";
            readonly I: typeof SalaryReimbursementItemProspectiveInfoRequest;
            readonly O: typeof SalariesServiceReimbursementItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalariesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Salary;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalariesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Salary;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalariesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Salary;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalariesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Salary;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.SalariesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof SalariesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.SalariesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalariesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.SalariesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalariesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.SalariesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalariesServicePaginationReq;
            readonly O: typeof SalariesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.SalariesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalariesServiceSearchAllReq;
            readonly O: typeof SalariesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.SalariesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalariesServiceFilterReq;
            readonly O: typeof SalariesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.SalariesService.CountInStatus
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
         * @generated from rpc Scailo.SalariesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalariesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.SalariesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof SalariesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=salaries.scailo_connect.d.ts.map
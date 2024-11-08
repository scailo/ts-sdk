import { SalariesAdditionItemsList, SalariesDeductionItemsList, SalariesList, SalariesReimbursementItemsList, SalariesServiceAdditionItemCreateRequest, SalariesServiceAdditionItemUpdateRequest, SalariesServiceAutofillRequest, SalariesServiceCountReq, SalariesServiceCreateRequest, SalariesServiceDeductionItemCreateRequest, SalariesServiceDeductionItemUpdateRequest, SalariesServiceFilterReq, SalariesServicePaginationReq, SalariesServicePaginationResponse, SalariesServiceReimbursementItemCreateRequest, SalariesServiceReimbursementItemUpdateRequest, SalariesServiceSearchAllReq, SalariesServiceUpdateRequest, Salary, SalaryAdditionItem, SalaryAdditionItemHistoryRequest, SalaryAdditionItemProspectiveInfoRequest, SalaryDeductionItem, SalaryDeductionItemHistoryRequest, SalaryDeductionItemProspectiveInfoRequest, SalaryReimbursementItem, SalaryReimbursementItemHistoryRequest, SalaryReimbursementItemProspectiveInfoRequest } from "./salaries.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base.scailo_pb.js";
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
         * Create and save as draft
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
         * Update draft
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
         * Send for verification
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
         * Verify
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
         * Approve
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
         * Send For Revision
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
         * Update revision
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
         * Halt
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
         * Discard
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
         * Restore
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
         * Complete
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
         * Repeat
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
         * Add comment
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
         * --------------------------------------------------------------------
         * Addition Records
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
         * --------------------------------------------------------------------
         * Deduction Records
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
         * --------------------------------------------------------------------
         * Reimbursement Records
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
         * View by ID
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
         * View all
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
         * View all with the given entity UUID
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
         * View with pagination
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
         * View all that match the given search key
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
         * View all that match the given filter criteria
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
         * Count in status
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
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.SalariesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalariesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=salaries.scailo_connect.d.ts.map
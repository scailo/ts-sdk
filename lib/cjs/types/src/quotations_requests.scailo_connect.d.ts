import { QuotationRequest, QuotationRequestItem, QuotationRequestItemHistoryRequest, QuotationRequestItemsSearchRequest, QuotationsRequestsItemsList, QuotationsRequestsList, QuotationsRequestsServiceAutofillRequest, QuotationsRequestsServiceCountReq, QuotationsRequestsServiceCreateRequest, QuotationsRequestsServiceFilterReq, QuotationsRequestsServiceItemCreateRequest, QuotationsRequestsServiceItemUpdateRequest, QuotationsRequestsServicePaginatedItemsResponse, QuotationsRequestsServicePaginationReq, QuotationsRequestsServicePaginationResponse, QuotationsRequestsServiceSearchAllReq, QuotationsRequestsServiceUpdateRequest } from "./quotations_requests.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each quotation request
 *
 * @generated from service Scailo.QuotationsRequestsService
 */
export declare const QuotationsRequestsService: {
    readonly typeName: "Scailo.QuotationsRequestsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QuotationsRequestsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QuotationsRequestsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.QuotationsRequestsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QuotationsRequestsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.QuotationsRequestsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Scailo.QuotationsRequestsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Scailo.QuotationsRequestsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QuotationsRequestsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof RepeatWithDeliveryDate;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Scailo.QuotationsRequestsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the quotation request (from the associated purchase enquiry)
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof QuotationsRequestsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a quotation request
         *
         * @generated from rpc Scailo.QuotationsRequestsService.AddQuotationRequestItem
         */
        readonly addQuotationRequestItem: {
            readonly name: "AddQuotationRequestItem";
            readonly I: typeof QuotationsRequestsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a quotation request
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ModifyQuotationRequestItem
         */
        readonly modifyQuotationRequestItem: {
            readonly name: "ModifyQuotationRequestItem";
            readonly I: typeof QuotationsRequestsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a quotation request
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ApproveQuotationRequestItem
         */
        readonly approveQuotationRequestItem: {
            readonly name: "ApproveQuotationRequestItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a quotation request
         *
         * @generated from rpc Scailo.QuotationsRequestsService.DeleteQuotationRequestItem
         */
        readonly deleteQuotationRequestItem: {
            readonly name: "DeleteQuotationRequestItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a quotation request
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ReorderQuotationRequestItems
         */
        readonly reorderQuotationRequestItems: {
            readonly name: "ReorderQuotationRequestItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View quotation request Item by ID
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewQuotationRequestItemByID
         */
        readonly viewQuotationRequestItemByID: {
            readonly name: "ViewQuotationRequestItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationRequestItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved quotation request items for given quotation request ID
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewApprovedQuotationRequestItems
         */
        readonly viewApprovedQuotationRequestItems: {
            readonly name: "ViewApprovedQuotationRequestItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved quotation request items for given quotation request ID
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewUnapprovedQuotationRequestItems
         */
        readonly viewUnapprovedQuotationRequestItems: {
            readonly name: "ViewUnapprovedQuotationRequestItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the quotation request item
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewQuotationRequestItemHistory
         */
        readonly viewQuotationRequestItemHistory: {
            readonly name: "ViewQuotationRequestItemHistory";
            readonly I: typeof QuotationRequestItemHistoryRequest;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved quotation request items for given quotation request ID with pagination
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewPaginatedApprovedQuotationRequestItems
         */
        readonly viewPaginatedApprovedQuotationRequestItems: {
            readonly name: "ViewPaginatedApprovedQuotationRequestItems";
            readonly I: typeof QuotationRequestItemsSearchRequest;
            readonly O: typeof QuotationsRequestsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved quotation request items for given quotation request ID with pagination
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewPaginatedUnapprovedQuotationRequestItems
         */
        readonly viewPaginatedUnapprovedQuotationRequestItems: {
            readonly name: "ViewPaginatedUnapprovedQuotationRequestItems";
            readonly I: typeof QuotationRequestItemsSearchRequest;
            readonly O: typeof QuotationsRequestsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through quotation request items with pagination
         *
         * @generated from rpc Scailo.QuotationsRequestsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof QuotationRequestItemsSearchRequest;
            readonly O: typeof QuotationsRequestsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuotationRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.QuotationsRequestsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QuotationsRequestsServicePaginationReq;
            readonly O: typeof QuotationsRequestsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download quotation request with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.QuotationsRequestsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.QuotationsRequestsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QuotationsRequestsServiceSearchAllReq;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.QuotationsRequestsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QuotationsRequestsServiceFilterReq;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.QuotationsRequestsService.CountInStatus
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
         * @generated from rpc Scailo.QuotationsRequestsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof QuotationsRequestsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=quotations_requests.scailo_connect.d.ts.map
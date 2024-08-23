import { QuotationResponse, QuotationResponseItem, QuotationResponseItemHistoryRequest, QuotationResponseItemsSearchRequest, QuotationsResponsesItemsList, QuotationsResponsesList, QuotationsResponsesServiceCountReq, QuotationsResponsesServiceCreateRequest, QuotationsResponsesServiceFilterReq, QuotationsResponsesServiceItemCreateRequest, QuotationsResponsesServiceItemsFilterReq, QuotationsResponsesServiceItemUpdateRequest, QuotationsResponsesServicePaginatedItemsResponse, QuotationsResponsesServicePaginationReq, QuotationsResponsesServicePaginationResponse, QuotationsResponsesServiceSearchAllReq, QuotationsResponsesServiceUpdateRequest } from "./quotations_responses.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each quotation response
 *
 * @generated from service Scailo.QuotationsResponsesService
 */
export declare const QuotationsResponsesService: {
    readonly typeName: "Scailo.QuotationsResponsesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.QuotationsResponsesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QuotationsResponsesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.QuotationsResponsesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QuotationsResponsesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.QuotationsResponsesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QuotationsResponsesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.QuotationsResponsesService.SendForVerification
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
         * @generated from rpc Scailo.QuotationsResponsesService.Verify
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
         * @generated from rpc Scailo.QuotationsResponsesService.Approve
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
         * @generated from rpc Scailo.QuotationsResponsesService.SendForRevision
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
         * @generated from rpc Scailo.QuotationsResponsesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QuotationsResponsesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.QuotationsResponsesService.Halt
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
         * @generated from rpc Scailo.QuotationsResponsesService.Discard
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
         * @generated from rpc Scailo.QuotationsResponsesService.Restore
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
         * @generated from rpc Scailo.QuotationsResponsesService.Complete
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
         * @generated from rpc Scailo.QuotationsResponsesService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.QuotationsResponsesService.Reopen
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
         * @generated from rpc Scailo.QuotationsResponsesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a quotation response
         *
         * @generated from rpc Scailo.QuotationsResponsesService.AddQuotationResponseItem
         */
        readonly addQuotationResponseItem: {
            readonly name: "AddQuotationResponseItem";
            readonly I: typeof QuotationsResponsesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a quotation response
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ModifyQuotationResponseItem
         */
        readonly modifyQuotationResponseItem: {
            readonly name: "ModifyQuotationResponseItem";
            readonly I: typeof QuotationsResponsesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a quotation response
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ApproveQuotationResponseItem
         */
        readonly approveQuotationResponseItem: {
            readonly name: "ApproveQuotationResponseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a quotation response
         *
         * @generated from rpc Scailo.QuotationsResponsesService.DeleteQuotationResponseItem
         */
        readonly deleteQuotationResponseItem: {
            readonly name: "DeleteQuotationResponseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a quotation response
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ReorderQuotationResponseItems
         */
        readonly reorderQuotationResponseItems: {
            readonly name: "ReorderQuotationResponseItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View quotation response Item by ID
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewQuotationResponseItemByID
         */
        readonly viewQuotationResponseItemByID: {
            readonly name: "ViewQuotationResponseItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationResponseItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved quotation response items for given quotation response ID
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewApprovedQuotationResponseItems
         */
        readonly viewApprovedQuotationResponseItems: {
            readonly name: "ViewApprovedQuotationResponseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved quotation response items for given quotation response ID
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewUnapprovedQuotationResponseItems
         */
        readonly viewUnapprovedQuotationResponseItems: {
            readonly name: "ViewUnapprovedQuotationResponseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the quotation response item
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewQuotationResponseItemHistory
         */
        readonly viewQuotationResponseItemHistory: {
            readonly name: "ViewQuotationResponseItemHistory";
            readonly I: typeof QuotationResponseItemHistoryRequest;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the quotation response items that match the given filter criteria
         *
         * @generated from rpc Scailo.QuotationsResponsesService.FilterItems
         */
        readonly filterItems: {
            readonly name: "FilterItems";
            readonly I: typeof QuotationsResponsesServiceItemsFilterReq;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved quotation response items for given quotation response ID with pagination
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewPaginatedApprovedQuotationResponseItems
         */
        readonly viewPaginatedApprovedQuotationResponseItems: {
            readonly name: "ViewPaginatedApprovedQuotationResponseItems";
            readonly I: typeof QuotationResponseItemsSearchRequest;
            readonly O: typeof QuotationsResponsesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved quotation response items for given quotation response ID with pagination
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewPaginatedUnapprovedQuotationResponseItems
         */
        readonly viewPaginatedUnapprovedQuotationResponseItems: {
            readonly name: "ViewPaginatedUnapprovedQuotationResponseItems";
            readonly I: typeof QuotationResponseItemsSearchRequest;
            readonly O: typeof QuotationsResponsesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through quotation response items with pagination
         *
         * @generated from rpc Scailo.QuotationsResponsesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof QuotationResponseItemsSearchRequest;
            readonly O: typeof QuotationsResponsesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuotationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.QuotationsResponsesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QuotationsResponsesServicePaginationReq;
            readonly O: typeof QuotationsResponsesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download quotation response with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.QuotationsResponsesService.DownloadByUUID
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
         * @generated from rpc Scailo.QuotationsResponsesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QuotationsResponsesServiceSearchAllReq;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.QuotationsResponsesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QuotationsResponsesServiceFilterReq;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.QuotationsResponsesService.CountInStatus
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
         * @generated from rpc Scailo.QuotationsResponsesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof QuotationsResponsesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=quotations_responses.scailo_connect.d.ts.map
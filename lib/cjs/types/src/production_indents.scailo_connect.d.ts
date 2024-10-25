import { ProductionIndent, ProductionIndentIssuedStatisticsList, ProductionIndentItem, ProductionIndentItemHistoryRequest, ProductionIndentItemProspectiveInfoRequest, ProductionIndentItemsSearchRequest, ProductionIndentsItemsList, ProductionIndentsList, ProductionIndentsServiceAutofillRequest, ProductionIndentsServiceCountReq, ProductionIndentsServiceCreateRequest, ProductionIndentsServiceFilterReq, ProductionIndentsServiceItemCreateRequest, ProductionIndentsServiceItemUpdateRequest, ProductionIndentsServicePaginatedItemsResponse, ProductionIndentsServicePaginationReq, ProductionIndentsServicePaginationResponse, ProductionIndentsServiceSearchAllReq, ProductionIndentsServiceUpdateRequest } from "./production_indents.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each production indent
 *
 * @generated from service Scailo.ProductionIndentsService
 */
export declare const ProductionIndentsService: {
    readonly typeName: "Scailo.ProductionIndentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.ProductionIndentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProductionIndentsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.ProductionIndentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ProductionIndentsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.ProductionIndentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ProductionIndentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.ProductionIndentsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Scailo.ProductionIndentsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Scailo.ProductionIndentsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Scailo.ProductionIndentsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Scailo.ProductionIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ProductionIndentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.ProductionIndentsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.ProductionIndentsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Scailo.ProductionIndentsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.ProductionIndentsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.ProductionIndentsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.ProductionIndentsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Scailo.ProductionIndentsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.ProductionIndentsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the production indent
         *
         * @generated from rpc Scailo.ProductionIndentsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof ProductionIndentsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Production Indent can be marked as completed
         *
         * @generated from rpc Scailo.ProductionIndentsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a production indent
         *
         * @generated from rpc Scailo.ProductionIndentsService.AddProductionIndentItem
         */
        readonly addProductionIndentItem: {
            readonly name: "AddProductionIndentItem";
            readonly I: typeof ProductionIndentsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a production indent
         *
         * @generated from rpc Scailo.ProductionIndentsService.ModifyProductionIndentItem
         */
        readonly modifyProductionIndentItem: {
            readonly name: "ModifyProductionIndentItem";
            readonly I: typeof ProductionIndentsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a production indent
         *
         * @generated from rpc Scailo.ProductionIndentsService.ApproveProductionIndentItem
         */
        readonly approveProductionIndentItem: {
            readonly name: "ApproveProductionIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a production indent
         *
         * @generated from rpc Scailo.ProductionIndentsService.DeleteProductionIndentItem
         */
        readonly deleteProductionIndentItem: {
            readonly name: "DeleteProductionIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a production indent
         *
         * @generated from rpc Scailo.ProductionIndentsService.ReorderProductionIndentItems
         */
        readonly reorderProductionIndentItems: {
            readonly name: "ReorderProductionIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Production Indent Item by ID
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewProductionIndentItemByID
         */
        readonly viewProductionIndentItemByID: {
            readonly name: "ViewProductionIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionIndentItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved production indent items for given production indent ID
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewApprovedProductionIndentItems
         */
        readonly viewApprovedProductionIndentItems: {
            readonly name: "ViewApprovedProductionIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved production indent items for given production indent ID
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewUnapprovedProductionIndentItems
         */
        readonly viewUnapprovedProductionIndentItems: {
            readonly name: "ViewUnapprovedProductionIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the production indent item
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewProductionIndentItemHistory
         */
        readonly viewProductionIndentItemHistory: {
            readonly name: "ViewProductionIndentItemHistory";
            readonly I: typeof ProductionIndentItemHistoryRequest;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved production indent items for given production indent ID with pagination
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewPaginatedApprovedProductionIndentItems
         */
        readonly viewPaginatedApprovedProductionIndentItems: {
            readonly name: "ViewPaginatedApprovedProductionIndentItems";
            readonly I: typeof ProductionIndentItemsSearchRequest;
            readonly O: typeof ProductionIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved production indent items for given production indent ID with pagination
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewPaginatedUnapprovedProductionIndentItems
         */
        readonly viewPaginatedUnapprovedProductionIndentItems: {
            readonly name: "ViewPaginatedUnapprovedProductionIndentItems";
            readonly I: typeof ProductionIndentItemsSearchRequest;
            readonly O: typeof ProductionIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through production indent items with pagination
         *
         * @generated from rpc Scailo.ProductionIndentsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof ProductionIndentItemsSearchRequest;
            readonly O: typeof ProductionIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ProductionIndentsServicePaginationReq;
            readonly O: typeof ProductionIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given production indent
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective production indent item info for the given family ID and production indent ID
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewProspectiveProductionIndentItem
         */
        readonly viewProspectiveProductionIndentItem: {
            readonly name: "ViewProspectiveProductionIndentItem";
            readonly I: typeof ProductionIndentItemProspectiveInfoRequest;
            readonly O: typeof ProductionIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View issued (stock issuance) statistics of the production indent
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewIssuedStatistics
         */
        readonly viewIssuedStatistics: {
            readonly name: "ViewIssuedStatistics";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionIndentIssuedStatisticsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Scailo.ProductionIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: {
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof ProductionIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.ProductionIndentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ProductionIndentsServiceSearchAllReq;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.ProductionIndentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ProductionIndentsServiceFilterReq;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.ProductionIndentsService.CountInStatus
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
         * @generated from rpc Scailo.ProductionIndentsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ProductionIndentsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=production_indents.scailo_connect.d.ts.map
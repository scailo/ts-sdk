import { ReplaceableIndent, ReplaceableIndentItem, ReplaceableIndentItemHistoryRequest, ReplaceableIndentItemProspectiveInfoRequest, ReplaceableIndentItemsSearchRequest, ReplaceableIndentsItemsList, ReplaceableIndentsList, ReplaceableIndentsServiceAutofillRequest, ReplaceableIndentsServiceCountReq, ReplaceableIndentsServiceCreateRequest, ReplaceableIndentsServiceFilterReq, ReplaceableIndentsServiceItemCreateRequest, ReplaceableIndentsServiceItemUpdateRequest, ReplaceableIndentsServicePaginatedItemsResponse, ReplaceableIndentsServicePaginationReq, ReplaceableIndentsServicePaginationResponse, ReplaceableIndentsServiceSearchAllReq, ReplaceableIndentsServiceUpdateRequest } from "./replaceable_indents.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each replaceable indent
 *
 * @generated from service Scailo.ReplaceableIndentsService
 */
export declare const ReplaceableIndentsService: {
    readonly typeName: "Scailo.ReplaceableIndentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ReplaceableIndentsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ReplaceableIndentsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ReplaceableIndentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.SendForVerification
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
         * @generated from rpc Scailo.ReplaceableIndentsService.Verify
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
         * @generated from rpc Scailo.ReplaceableIndentsService.Approve
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
         * @generated from rpc Scailo.ReplaceableIndentsService.SendForRevision
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
         * @generated from rpc Scailo.ReplaceableIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ReplaceableIndentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.Halt
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
         * @generated from rpc Scailo.ReplaceableIndentsService.Discard
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
         * @generated from rpc Scailo.ReplaceableIndentsService.Restore
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
         * @generated from rpc Scailo.ReplaceableIndentsService.Complete
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
         * @generated from rpc Scailo.ReplaceableIndentsService.Repeat
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
         * @generated from rpc Scailo.ReplaceableIndentsService.Reopen
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
         * @generated from rpc Scailo.ReplaceableIndentsService.CommentAdd
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
         * @generated from rpc Scailo.ReplaceableIndentsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the replaceable indent
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof ReplaceableIndentsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Replaceable Indent can be marked as completed
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a replaceable indent
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.AddReplaceableIndentItem
         */
        readonly addReplaceableIndentItem: {
            readonly name: "AddReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a replaceable indent
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ModifyReplaceableIndentItem
         */
        readonly modifyReplaceableIndentItem: {
            readonly name: "ModifyReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a replaceable indent
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ApproveReplaceableIndentItem
         */
        readonly approveReplaceableIndentItem: {
            readonly name: "ApproveReplaceableIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a replaceable indent
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.DeleteReplaceableIndentItem
         */
        readonly deleteReplaceableIndentItem: {
            readonly name: "DeleteReplaceableIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a replaceable indent
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ReorderReplaceableIndentItems
         */
        readonly reorderReplaceableIndentItems: {
            readonly name: "ReorderReplaceableIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Replaceable Indent Item by ID
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewReplaceableIndentItemByID
         */
        readonly viewReplaceableIndentItemByID: {
            readonly name: "ViewReplaceableIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ReplaceableIndentItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved replaceable indent items for given replaceable indent ID
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewApprovedReplaceableIndentItems
         */
        readonly viewApprovedReplaceableIndentItems: {
            readonly name: "ViewApprovedReplaceableIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved replaceable indent items for given replaceable indent ID
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewUnapprovedReplaceableIndentItems
         */
        readonly viewUnapprovedReplaceableIndentItems: {
            readonly name: "ViewUnapprovedReplaceableIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the replaceable indent item
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewReplaceableIndentItemHistory
         */
        readonly viewReplaceableIndentItemHistory: {
            readonly name: "ViewReplaceableIndentItemHistory";
            readonly I: typeof ReplaceableIndentItemHistoryRequest;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved replaceable indent items for given replaceable indent ID with pagination
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewPaginatedApprovedReplaceableIndentItems
         */
        readonly viewPaginatedApprovedReplaceableIndentItems: {
            readonly name: "ViewPaginatedApprovedReplaceableIndentItems";
            readonly I: typeof ReplaceableIndentItemsSearchRequest;
            readonly O: typeof ReplaceableIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved replaceable indent items for given replaceable indent ID with pagination
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewPaginatedUnapprovedReplaceableIndentItems
         */
        readonly viewPaginatedUnapprovedReplaceableIndentItems: {
            readonly name: "ViewPaginatedUnapprovedReplaceableIndentItems";
            readonly I: typeof ReplaceableIndentItemsSearchRequest;
            readonly O: typeof ReplaceableIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through replaceable indent items with pagination
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof ReplaceableIndentItemsSearchRequest;
            readonly O: typeof ReplaceableIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ReplaceableIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ReplaceableIndentsServicePaginationReq;
            readonly O: typeof ReplaceableIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given replaceable indent
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective replaceable indent item info for the given family ID and replaceable indent ID
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewProspectiveReplaceableIndentItem
         */
        readonly viewProspectiveReplaceableIndentItem: {
            readonly name: "ViewProspectiveReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentItemProspectiveInfoRequest;
            readonly O: typeof ReplaceableIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: {
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof ReplaceableIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ReplaceableIndentsServiceSearchAllReq;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ReplaceableIndentsServiceFilterReq;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.ReplaceableIndentsService.CountInStatus
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
         * @generated from rpc Scailo.ReplaceableIndentsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ReplaceableIndentsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=replaceable_indents.scailo_connect.d.ts.map
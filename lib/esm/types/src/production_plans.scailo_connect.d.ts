import { ProductionPlan, ProductionPlanItem, ProductionPlanItemHistoryRequest, ProductionPlanItemProspectiveInfoRequest, ProductionPlanItemsSearchRequest, ProductionPlansItemsList, ProductionPlansList, ProductionPlansServiceAlreadyAddedQuantityForSourceRequest, ProductionPlansServiceAutofillRequest, ProductionPlansServiceCountReq, ProductionPlansServiceCreateRequest, ProductionPlansServiceFilterReq, ProductionPlansServiceItemCreateRequest, ProductionPlansServiceItemUpdateRequest, ProductionPlansServicePaginatedItemsResponse, ProductionPlansServicePaginationReq, ProductionPlansServicePaginationResponse, ProductionPlansServiceSearchAllReq, ProductionPlansServiceUpdateRequest } from "./production_plans.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each production plan
 *
 * @generated from service Scailo.ProductionPlansService
 */
export declare const ProductionPlansService: {
    readonly typeName: "Scailo.ProductionPlansService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.ProductionPlansService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProductionPlansServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.ProductionPlansService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ProductionPlansServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.ProductionPlansService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ProductionPlansServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.ProductionPlansService.SendForVerification
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
         * @generated from rpc Scailo.ProductionPlansService.Verify
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
         * @generated from rpc Scailo.ProductionPlansService.Approve
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
         * @generated from rpc Scailo.ProductionPlansService.SendForRevision
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
         * @generated from rpc Scailo.ProductionPlansService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ProductionPlansServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.ProductionPlansService.Halt
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
         * @generated from rpc Scailo.ProductionPlansService.Discard
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
         * @generated from rpc Scailo.ProductionPlansService.Restore
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
         * @generated from rpc Scailo.ProductionPlansService.Complete
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
         * @generated from rpc Scailo.ProductionPlansService.Repeat
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
         * @generated from rpc Scailo.ProductionPlansService.Reopen
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
         * @generated from rpc Scailo.ProductionPlansService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.ProductionPlansService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the production plan
         *
         * @generated from rpc Scailo.ProductionPlansService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof ProductionPlansServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Production Plan can be marked as completed
         *
         * @generated from rpc Scailo.ProductionPlansService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a production plan
         *
         * @generated from rpc Scailo.ProductionPlansService.AddProductionPlanItem
         */
        readonly addProductionPlanItem: {
            readonly name: "AddProductionPlanItem";
            readonly I: typeof ProductionPlansServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a production plan
         *
         * @generated from rpc Scailo.ProductionPlansService.ModifyProductionPlanItem
         */
        readonly modifyProductionPlanItem: {
            readonly name: "ModifyProductionPlanItem";
            readonly I: typeof ProductionPlansServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a production plan
         *
         * @generated from rpc Scailo.ProductionPlansService.ApproveProductionPlanItem
         */
        readonly approveProductionPlanItem: {
            readonly name: "ApproveProductionPlanItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a production plan
         *
         * @generated from rpc Scailo.ProductionPlansService.DeleteProductionPlanItem
         */
        readonly deleteProductionPlanItem: {
            readonly name: "DeleteProductionPlanItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a production plan
         *
         * @generated from rpc Scailo.ProductionPlansService.ReorderProductionPlanItems
         */
        readonly reorderProductionPlanItems: {
            readonly name: "ReorderProductionPlanItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Production Plan Item by ID
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewProductionPlanItemByID
         */
        readonly viewProductionPlanItemByID: {
            readonly name: "ViewProductionPlanItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionPlanItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved production plan items for given production plan ID
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewApprovedProductionPlanItems
         */
        readonly viewApprovedProductionPlanItems: {
            readonly name: "ViewApprovedProductionPlanItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved production plan items for given production plan ID
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewUnapprovedProductionPlanItems
         */
        readonly viewUnapprovedProductionPlanItems: {
            readonly name: "ViewUnapprovedProductionPlanItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the production plan item
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewProductionPlanItemHistory
         */
        readonly viewProductionPlanItemHistory: {
            readonly name: "ViewProductionPlanItemHistory";
            readonly I: typeof ProductionPlanItemHistoryRequest;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved production plan items for given production plan ID with pagination
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewPaginatedApprovedProductionPlanItems
         */
        readonly viewPaginatedApprovedProductionPlanItems: {
            readonly name: "ViewPaginatedApprovedProductionPlanItems";
            readonly I: typeof ProductionPlanItemsSearchRequest;
            readonly O: typeof ProductionPlansServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved production plan items for given production plan ID with pagination
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewPaginatedUnapprovedProductionPlanItems
         */
        readonly viewPaginatedUnapprovedProductionPlanItems: {
            readonly name: "ViewPaginatedUnapprovedProductionPlanItems";
            readonly I: typeof ProductionPlanItemsSearchRequest;
            readonly O: typeof ProductionPlansServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through production plan items with pagination
         *
         * @generated from rpc Scailo.ProductionPlansService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof ProductionPlanItemsSearchRequest;
            readonly O: typeof ProductionPlansServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionPlan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProductionPlan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ProductionPlansServicePaginationReq;
            readonly O: typeof ProductionPlansServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given production plan
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective production plan item info for the given family ID and production plan ID
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewProspectiveProductionPlanItem
         */
        readonly viewProspectiveProductionPlanItem: {
            readonly name: "ViewProspectiveProductionPlanItem";
            readonly I: typeof ProductionPlanItemProspectiveInfoRequest;
            readonly O: typeof ProductionPlansServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the net quantity to be produced for the given family in the given production plan
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewRemainingProductionQuantiy
         */
        readonly viewRemainingProductionQuantiy: {
            readonly name: "ViewRemainingProductionQuantiy";
            readonly I: typeof ProductionPlanItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.ProductionPlansService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof ProductionPlansServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download production plan with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.ProductionPlansService.DownloadByUUID
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
         * @generated from rpc Scailo.ProductionPlansService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ProductionPlansServiceSearchAllReq;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.ProductionPlansService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ProductionPlansServiceFilterReq;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.ProductionPlansService.CountInStatus
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
         * @generated from rpc Scailo.ProductionPlansService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ProductionPlansServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=production_plans.scailo_connect.d.ts.map
import { EquationSalesBundle, EquationSalesBundleItem, EquationSalesBundleItemHistoryRequest, EquationSalesBundleItemsSearchRequest, EquationsSalesBundlesItemsList, EquationsSalesBundlesList, EquationsSalesBundlesServiceCountReq, EquationsSalesBundlesServiceCreateRequest, EquationsSalesBundlesServiceFilterReq, EquationsSalesBundlesServiceItemCreateRequest, EquationsSalesBundlesServiceItemUpdateRequest, EquationsSalesBundlesServicePaginatedItemsResponse, EquationsSalesBundlesServicePaginationReq, EquationsSalesBundlesServicePaginationResponse, EquationsSalesBundlesServiceSearchAllReq, EquationsSalesBundlesServiceUpdateRequest } from "./equations_sales_bundles.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifiersList, IdentifierUUID, IdentifierWithFile, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each equation sales bundle
 *
 * @generated from service Scailo.EquationsSalesBundlesService
 */
export declare const EquationsSalesBundlesService: {
    readonly typeName: "Scailo.EquationsSalesBundlesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EquationsSalesBundlesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof EquationsSalesBundlesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsSalesBundlesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.SendForVerification
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Verify
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Approve
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.SendForRevision
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsSalesBundlesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.Halt
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Discard
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Restore
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Complete
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Repeat
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Reopen
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
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone equation from an existing equation (denoted by the identifier)
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a equation sales bundle
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.AddEquationSalesBundleItem
         */
        readonly addEquationSalesBundleItem: {
            readonly name: "AddEquationSalesBundleItem";
            readonly I: typeof EquationsSalesBundlesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a equation sales bundle
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ModifyEquationSalesBundleItem
         */
        readonly modifyEquationSalesBundleItem: {
            readonly name: "ModifyEquationSalesBundleItem";
            readonly I: typeof EquationsSalesBundlesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a equation sales bundle
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ApproveEquationSalesBundleItem
         */
        readonly approveEquationSalesBundleItem: {
            readonly name: "ApproveEquationSalesBundleItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a equation sales bundle
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.DeleteEquationSalesBundleItem
         */
        readonly deleteEquationSalesBundleItem: {
            readonly name: "DeleteEquationSalesBundleItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a equation sales bundle
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ReorderEquationSalesBundleItems
         */
        readonly reorderEquationSalesBundleItems: {
            readonly name: "ReorderEquationSalesBundleItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Equation Sales Bundle Item by ID
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewEquationSalesBundleItemByID
         */
        readonly viewEquationSalesBundleItemByID: {
            readonly name: "ViewEquationSalesBundleItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundleItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation sales bundle items for given equation sales bundle ID
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewApprovedEquationSalesBundleItems
         */
        readonly viewApprovedEquationSalesBundleItems: {
            readonly name: "ViewApprovedEquationSalesBundleItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation sales bundle items for given equation sales bundle ID
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewUnapprovedEquationSalesBundleItems
         */
        readonly viewUnapprovedEquationSalesBundleItems: {
            readonly name: "ViewUnapprovedEquationSalesBundleItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the equation sales bundle item
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewEquationSalesBundleItemHistory
         */
        readonly viewEquationSalesBundleItemHistory: {
            readonly name: "ViewEquationSalesBundleItemHistory";
            readonly I: typeof EquationSalesBundleItemHistoryRequest;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation sales bundle items for given equation sales bundle ID with pagination
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewPaginatedApprovedEquationSalesBundleItems
         */
        readonly viewPaginatedApprovedEquationSalesBundleItems: {
            readonly name: "ViewPaginatedApprovedEquationSalesBundleItems";
            readonly I: typeof EquationSalesBundleItemsSearchRequest;
            readonly O: typeof EquationsSalesBundlesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation sales bundle items for given equation sales bundle ID with pagination
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewPaginatedUnapprovedEquationSalesBundleItems
         */
        readonly viewPaginatedUnapprovedEquationSalesBundleItems: {
            readonly name: "ViewPaginatedUnapprovedEquationSalesBundleItems";
            readonly I: typeof EquationSalesBundleItemsSearchRequest;
            readonly O: typeof EquationsSalesBundlesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through equation sales bundle items with pagination
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof EquationSalesBundleItemsSearchRequest;
            readonly O: typeof EquationsSalesBundlesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof Identifier;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV file with the entire dependency tree. Useful for identifying quantities necessary from all the dependencies.
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.DownloadTreeAsCSV
         */
        readonly downloadTreeAsCSV: {
            readonly name: "DownloadTreeAsCSV";
            readonly I: typeof Identifier;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.UploadEquationSalesBundleItems
         */
        readonly uploadEquationSalesBundleItems: {
            readonly name: "UploadEquationSalesBundleItems";
            readonly I: typeof IdentifierWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsSalesBundlesServicePaginationReq;
            readonly O: typeof EquationsSalesBundlesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewForFamilyID
         */
        readonly viewForFamilyID: {
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EquationsSalesBundlesServiceSearchAllReq;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EquationsSalesBundlesServiceFilterReq;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given count criteria
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof EquationsSalesBundlesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_sales_bundles.scailo_connect.d.ts.map
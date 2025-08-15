import { EquationSalesBundle, EquationSalesBundleItem, EquationSalesBundleItemHistoryRequest, EquationSalesBundleItemsSearchRequest, EquationsSalesBundlesItemsList, EquationsSalesBundlesList, EquationsSalesBundlesServiceCountReq, EquationsSalesBundlesServiceCreateRequest, EquationsSalesBundlesServiceFilterReq, EquationsSalesBundlesServiceItemCreateRequest, EquationsSalesBundlesServiceItemUpdateRequest, EquationsSalesBundlesServicePaginatedItemsResponse, EquationsSalesBundlesServicePaginationReq, EquationsSalesBundlesServicePaginationResponse, EquationsSalesBundlesServiceSearchAllReq, EquationsSalesBundlesServiceUpdateRequest } from "./equations_sales_bundles.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
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
            readonly O: typeof IdentifierResponse;
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
            readonly O: typeof IdentifierResponse;
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
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.SendForVerification
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Verify
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Approve
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.SendForRevision
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsSalesBundlesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.Halt
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Discard
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Restore
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Complete
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Repeat
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.Reopen
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
         * @generated from rpc Scailo.EquationsSalesBundlesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (IdentifierResponse);
         * Create a magic link
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
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
            readonly O: typeof IdentifierResponse;
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
            readonly O: typeof IdentifierResponse;
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
            readonly O: typeof IdentifierResponse;
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
            readonly O: typeof IdentifierResponse;
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
            readonly O: typeof IdentifierResponse;
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
            readonly O: typeof IdentifierResponse;
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
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload items
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
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
            readonly I: typeof IdentifierUUID;
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
            readonly I: typeof IdentifierUUIDWithFile;
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
         * View by UUID
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Name (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewByName
         */
        readonly viewByName: {
            readonly name: "ViewByName";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof EquationsSalesBundlesList;
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
         * Download equation with the given IdentifierUUID
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.DownloadByUUID
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
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof EquationsSalesBundlesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.EquationsSalesBundlesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_sales_bundles.scailo_connect.d.ts.map
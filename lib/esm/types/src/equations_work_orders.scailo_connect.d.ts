import { EquationsWorkOrdersItemsList, EquationsWorkOrdersList, EquationsWorkOrdersServiceCountReq, EquationsWorkOrdersServiceCreateRequest, EquationsWorkOrdersServiceFilterReq, EquationsWorkOrdersServiceItemCreateRequest, EquationsWorkOrdersServiceItemUpdateRequest, EquationsWorkOrdersServicePaginatedItemsResponse, EquationsWorkOrdersServicePaginationReq, EquationsWorkOrdersServicePaginationResponse, EquationsWorkOrdersServiceSearchAllReq, EquationsWorkOrdersServiceUpdateRequest, EquationWorkOrder, EquationWorkOrderItem, EquationWorkOrderItemHistoryRequest, EquationWorkOrderItemsSearchRequest } from "./equations_work_orders.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CloneRequest, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each equation work order
 *
 * @generated from service Scailo.EquationsWorkOrdersService
 */
export declare const EquationsWorkOrdersService: {
    readonly typeName: "Scailo.EquationsWorkOrdersService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EquationsWorkOrdersServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof EquationsWorkOrdersServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsWorkOrdersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.SendForVerification
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.Verify
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.Approve
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.SendForRevision
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsWorkOrdersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.Halt
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.Discard
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.Restore
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.Complete
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.Repeat
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.Reopen
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.CommentAdd
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Amend the equation work order and send for revision
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.Amend
         */
        readonly amend: {
            readonly name: "Amend";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone equation from an existing equation (denoted by the identifier)
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a equation work order
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.AddEquationWorkOrderItem
         */
        readonly addEquationWorkOrderItem: {
            readonly name: "AddEquationWorkOrderItem";
            readonly I: typeof EquationsWorkOrdersServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a equation work order
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ModifyEquationWorkOrderItem
         */
        readonly modifyEquationWorkOrderItem: {
            readonly name: "ModifyEquationWorkOrderItem";
            readonly I: typeof EquationsWorkOrdersServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a equation work order
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ApproveEquationWorkOrderItem
         */
        readonly approveEquationWorkOrderItem: {
            readonly name: "ApproveEquationWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a equation work order
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.DeleteEquationWorkOrderItem
         */
        readonly deleteEquationWorkOrderItem: {
            readonly name: "DeleteEquationWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a equation work order
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ReorderEquationWorkOrderItems
         */
        readonly reorderEquationWorkOrderItems: {
            readonly name: "ReorderEquationWorkOrderItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Equation Work Order Item by ID
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewEquationWorkOrderItemByID
         */
        readonly viewEquationWorkOrderItemByID: {
            readonly name: "ViewEquationWorkOrderItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrderItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation work order items for given equation work order ID
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewApprovedEquationWorkOrderItems
         */
        readonly viewApprovedEquationWorkOrderItems: {
            readonly name: "ViewApprovedEquationWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation work order items for given equation work order ID
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewUnapprovedEquationWorkOrderItems
         */
        readonly viewUnapprovedEquationWorkOrderItems: {
            readonly name: "ViewUnapprovedEquationWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the equation work order item
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewEquationWorkOrderItemHistory
         */
        readonly viewEquationWorkOrderItemHistory: {
            readonly name: "ViewEquationWorkOrderItemHistory";
            readonly I: typeof EquationWorkOrderItemHistoryRequest;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation work order items for given equation work order ID with pagination
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewPaginatedApprovedEquationWorkOrderItems
         */
        readonly viewPaginatedApprovedEquationWorkOrderItems: {
            readonly name: "ViewPaginatedApprovedEquationWorkOrderItems";
            readonly I: typeof EquationWorkOrderItemsSearchRequest;
            readonly O: typeof EquationsWorkOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation work order items for given equation work order ID with pagination
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewPaginatedUnapprovedEquationWorkOrderItems
         */
        readonly viewPaginatedUnapprovedEquationWorkOrderItems: {
            readonly name: "ViewPaginatedUnapprovedEquationWorkOrderItems";
            readonly I: typeof EquationWorkOrderItemsSearchRequest;
            readonly O: typeof EquationsWorkOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through equation work order items with pagination
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof EquationWorkOrderItemsSearchRequest;
            readonly O: typeof EquationsWorkOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.DownloadTreeAsCSV
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.UploadEquationWorkOrderItems
         */
        readonly uploadEquationWorkOrderItems: {
            readonly name: "UploadEquationWorkOrderItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Name (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewByName
         */
        readonly viewByName: {
            readonly name: "ViewByName";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsWorkOrdersServicePaginationReq;
            readonly O: typeof EquationsWorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for a work order (denoted by the given identifier)
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewForWorkOrderID
         */
        readonly viewForWorkOrderID: {
            readonly name: "ViewForWorkOrderID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the amendments made
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download equation with the given IdentifierUUID
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.DownloadByUUID
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EquationsWorkOrdersServiceSearchAllReq;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EquationsWorkOrdersServiceFilterReq;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.CountInStatus
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
         * @generated from rpc Scailo.EquationsWorkOrdersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof EquationsWorkOrdersServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof EquationsWorkOrdersServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.EquationsWorkOrdersService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_work_orders.scailo_connect.d.ts.map
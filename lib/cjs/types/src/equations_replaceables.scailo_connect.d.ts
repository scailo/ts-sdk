import { EquationReplaceable, EquationReplaceableItem, EquationReplaceableItemHistoryRequest, EquationReplaceableItemsSearchRequest, EquationsReplaceablesItemsList, EquationsReplaceablesList, EquationsReplaceablesServiceCountReq, EquationsReplaceablesServiceCreateRequest, EquationsReplaceablesServiceFilterReq, EquationsReplaceablesServiceItemCreateRequest, EquationsReplaceablesServiceItemUpdateRequest, EquationsReplaceablesServicePaginatedItemsResponse, EquationsReplaceablesServicePaginationReq, EquationsReplaceablesServicePaginationResponse, EquationsReplaceablesServiceSearchAllReq, EquationsReplaceablesServiceUpdateRequest } from "./equations_replaceables.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each equation replaceable
 *
 * @generated from service Scailo.EquationsReplaceablesService
 */
export declare const EquationsReplaceablesService: {
    readonly typeName: "Scailo.EquationsReplaceablesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EquationsReplaceablesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof EquationsReplaceablesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsReplaceablesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.SendForVerification
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
         * @generated from rpc Scailo.EquationsReplaceablesService.Verify
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
         * @generated from rpc Scailo.EquationsReplaceablesService.Approve
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
         * @generated from rpc Scailo.EquationsReplaceablesService.SendForRevision
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
         * @generated from rpc Scailo.EquationsReplaceablesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsReplaceablesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.Halt
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
         * @generated from rpc Scailo.EquationsReplaceablesService.Discard
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
         * @generated from rpc Scailo.EquationsReplaceablesService.Restore
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
         * @generated from rpc Scailo.EquationsReplaceablesService.Complete
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
         * @generated from rpc Scailo.EquationsReplaceablesService.Repeat
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
         * @generated from rpc Scailo.EquationsReplaceablesService.Reopen
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
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone equation from an existing equation (denoted by the identifier)
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a equation replaceable
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.AddEquationReplaceableItem
         */
        readonly addEquationReplaceableItem: {
            readonly name: "AddEquationReplaceableItem";
            readonly I: typeof EquationsReplaceablesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a equation replaceable
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ModifyEquationReplaceableItem
         */
        readonly modifyEquationReplaceableItem: {
            readonly name: "ModifyEquationReplaceableItem";
            readonly I: typeof EquationsReplaceablesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a equation replaceable
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ApproveEquationReplaceableItem
         */
        readonly approveEquationReplaceableItem: {
            readonly name: "ApproveEquationReplaceableItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a equation replaceable
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.DeleteEquationReplaceableItem
         */
        readonly deleteEquationReplaceableItem: {
            readonly name: "DeleteEquationReplaceableItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a equation replaceable
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ReorderEquationReplaceableItems
         */
        readonly reorderEquationReplaceableItems: {
            readonly name: "ReorderEquationReplaceableItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Equation Replaceable Item by ID
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewEquationReplaceableItemByID
         */
        readonly viewEquationReplaceableItemByID: {
            readonly name: "ViewEquationReplaceableItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceableItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation replaceable items for given equation replaceable ID
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewApprovedEquationReplaceableItems
         */
        readonly viewApprovedEquationReplaceableItems: {
            readonly name: "ViewApprovedEquationReplaceableItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation replaceable items for given equation replaceable ID
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewUnapprovedEquationReplaceableItems
         */
        readonly viewUnapprovedEquationReplaceableItems: {
            readonly name: "ViewUnapprovedEquationReplaceableItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the equation replaceable item
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewEquationReplaceableItemHistory
         */
        readonly viewEquationReplaceableItemHistory: {
            readonly name: "ViewEquationReplaceableItemHistory";
            readonly I: typeof EquationReplaceableItemHistoryRequest;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation replaceable items for given equation replaceable ID with pagination
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewPaginatedApprovedEquationReplaceableItems
         */
        readonly viewPaginatedApprovedEquationReplaceableItems: {
            readonly name: "ViewPaginatedApprovedEquationReplaceableItems";
            readonly I: typeof EquationReplaceableItemsSearchRequest;
            readonly O: typeof EquationsReplaceablesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation replaceable items for given equation replaceable ID with pagination
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewPaginatedUnapprovedEquationReplaceableItems
         */
        readonly viewPaginatedUnapprovedEquationReplaceableItems: {
            readonly name: "ViewPaginatedUnapprovedEquationReplaceableItems";
            readonly I: typeof EquationReplaceableItemsSearchRequest;
            readonly O: typeof EquationsReplaceablesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through equation replaceable items with pagination
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof EquationReplaceableItemsSearchRequest;
            readonly O: typeof EquationsReplaceablesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV file with the entire dependency tree. Useful for identifying quantities necessary from all the dependencies.
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.DownloadTreeAsCSV
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
         * @generated from rpc Scailo.EquationsReplaceablesService.UploadEquationReplaceableItems
         */
        readonly uploadEquationReplaceableItems: {
            readonly name: "UploadEquationReplaceableItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceable;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationReplaceable;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsReplaceablesServicePaginationReq;
            readonly O: typeof EquationsReplaceablesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ViewForFamilyID
         */
        readonly viewForFamilyID: {
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceable;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EquationsReplaceablesServiceSearchAllReq;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EquationsReplaceablesServiceFilterReq;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.CountInStatus
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
         * @generated from rpc Scailo.EquationsReplaceablesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof EquationsReplaceablesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof EquationsReplaceablesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.EquationsReplaceablesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_replaceables.scailo_connect.d.ts.map
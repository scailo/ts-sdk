import { Expense, ExpenseItem, ExpenseItemHistoryRequest, ExpenseItemsSearchRequest, ExpensesItemsList, ExpensesList, ExpensesServiceCountReq, ExpensesServiceCreateRequest, ExpensesServiceFilterReq, ExpensesServiceItemCreateRequest, ExpensesServiceItemUpdateRequest, ExpensesServicePaginatedItemsResponse, ExpensesServicePaginationReq, ExpensesServicePaginationResponse, ExpensesServiceSearchAllReq, ExpensesServiceUpdateRequest } from "./expenses.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each expense
 *
 * @generated from service Scailo.ExpensesService
 */
export declare const ExpensesService: {
    readonly typeName: "Scailo.ExpensesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.ExpensesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ExpensesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.ExpensesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ExpensesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.ExpensesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ExpensesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.ExpensesService.SendForVerification
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
         * @generated from rpc Scailo.ExpensesService.Verify
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
         * @generated from rpc Scailo.ExpensesService.Approve
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
         * @generated from rpc Scailo.ExpensesService.SendForRevision
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
         * @generated from rpc Scailo.ExpensesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ExpensesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.ExpensesService.Halt
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
         * @generated from rpc Scailo.ExpensesService.Discard
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
         * @generated from rpc Scailo.ExpensesService.Restore
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
         * @generated from rpc Scailo.ExpensesService.Complete
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
         * @generated from rpc Scailo.ExpensesService.Repeat
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
         * @generated from rpc Scailo.ExpensesService.Reopen
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
         * @generated from rpc Scailo.ExpensesService.CommentAdd
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
         * @generated from rpc Scailo.ExpensesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a expense
         *
         * @generated from rpc Scailo.ExpensesService.AddExpenseItem
         */
        readonly addExpenseItem: {
            readonly name: "AddExpenseItem";
            readonly I: typeof ExpensesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a expense
         *
         * @generated from rpc Scailo.ExpensesService.ModifyExpenseItem
         */
        readonly modifyExpenseItem: {
            readonly name: "ModifyExpenseItem";
            readonly I: typeof ExpensesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a expense
         *
         * @generated from rpc Scailo.ExpensesService.ApproveExpenseItem
         */
        readonly approveExpenseItem: {
            readonly name: "ApproveExpenseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a expense
         *
         * @generated from rpc Scailo.ExpensesService.DeleteExpenseItem
         */
        readonly deleteExpenseItem: {
            readonly name: "DeleteExpenseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a expense
         *
         * @generated from rpc Scailo.ExpensesService.ReorderExpenseItems
         */
        readonly reorderExpenseItems: {
            readonly name: "ReorderExpenseItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Expense Item by ID
         *
         * @generated from rpc Scailo.ExpensesService.ViewExpenseItemByID
         */
        readonly viewExpenseItemByID: {
            readonly name: "ViewExpenseItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ExpenseItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved expense items for given expense ID
         *
         * @generated from rpc Scailo.ExpensesService.ViewApprovedExpenseItems
         */
        readonly viewApprovedExpenseItems: {
            readonly name: "ViewApprovedExpenseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved expense items for given expense ID
         *
         * @generated from rpc Scailo.ExpensesService.ViewUnapprovedExpenseItems
         */
        readonly viewUnapprovedExpenseItems: {
            readonly name: "ViewUnapprovedExpenseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the expense item
         *
         * @generated from rpc Scailo.ExpensesService.ViewExpenseItemHistory
         */
        readonly viewExpenseItemHistory: {
            readonly name: "ViewExpenseItemHistory";
            readonly I: typeof ExpenseItemHistoryRequest;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved expense items for given expense ID with pagination
         *
         * @generated from rpc Scailo.ExpensesService.ViewPaginatedApprovedExpenseItems
         */
        readonly viewPaginatedApprovedExpenseItems: {
            readonly name: "ViewPaginatedApprovedExpenseItems";
            readonly I: typeof ExpenseItemsSearchRequest;
            readonly O: typeof ExpensesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved expense items for given expense ID with pagination
         *
         * @generated from rpc Scailo.ExpensesService.ViewPaginatedUnapprovedExpenseItems
         */
        readonly viewPaginatedUnapprovedExpenseItems: {
            readonly name: "ViewPaginatedUnapprovedExpenseItems";
            readonly I: typeof ExpenseItemsSearchRequest;
            readonly O: typeof ExpensesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through expense items with pagination
         *
         * @generated from rpc Scailo.ExpensesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof ExpenseItemsSearchRequest;
            readonly O: typeof ExpensesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.ExpensesService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.ExpensesService.UploadExpenseItems
         */
        readonly uploadExpenseItems: {
            readonly name: "UploadExpenseItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.ExpensesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Expense;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.ExpensesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Expense;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.ExpensesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Expense;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.ExpensesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Expense;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.ExpensesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.ExpensesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.ExpensesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.ExpensesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ExpensesServicePaginationReq;
            readonly O: typeof ExpensesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.ExpensesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ExpensesServiceSearchAllReq;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.ExpensesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ExpensesServiceFilterReq;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.ExpensesService.CountInStatus
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
         * @generated from rpc Scailo.ExpensesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ExpensesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.ExpensesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof ExpensesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=expenses.scailo_connect.d.ts.map
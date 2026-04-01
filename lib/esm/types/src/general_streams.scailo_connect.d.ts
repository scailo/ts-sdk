import { GeneralStream, GeneralStreamInternalSubscriber, GeneralStreamInternalSubscribersList, GeneralStreamMessage, GeneralStreamMessageReceiptsList, GeneralStreamMessagesList, GeneralStreamMessagesSearchRequest, GeneralStreamsList, GeneralStreamsServiceCountReq, GeneralStreamsServiceCreateRequest, GeneralStreamsServiceFilterReq, GeneralStreamsServiceImportInternalSubscribersRequest, GeneralStreamsServiceInternalSubscriberCreateRequest, GeneralStreamsServiceMessageCreateRequest, GeneralStreamsServicePaginatedMessagesResponse, GeneralStreamsServicePaginationReq, GeneralStreamsServicePaginationResponse, GeneralStreamsServiceSearchAllReq, GeneralStreamsServiceUpdateRequest } from "./general_streams.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithUserComment, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each general stream
 *
 * @generated from service Scailo.GeneralStreamsService
 */
export declare const GeneralStreamsService: {
    readonly typeName: "Scailo.GeneralStreamsService";
    readonly methods: {
        /**
         * Create
         *
         * @generated from rpc Scailo.GeneralStreamsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof GeneralStreamsServiceCreateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.GeneralStreamsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof GeneralStreamsServiceUpdateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Cancel
         *
         * @generated from rpc Scailo.GeneralStreamsService.Cancel
         */
        readonly cancel: {
            readonly name: "Cancel";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.GeneralStreamsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.GeneralStreamsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.GeneralStreamsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail(IdentifierWithEmailAttributes) returns (IdentifierUUID);
         *
         * @generated from rpc Scailo.GeneralStreamsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a message to an general stream
         *
         * @generated from rpc Scailo.GeneralStreamsService.AddMessage
         */
        readonly addMessage: {
            readonly name: "AddMessage";
            readonly I: typeof GeneralStreamsServiceMessageCreateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Saves a message for viewing it later
         *
         * @generated from rpc Scailo.GeneralStreamsService.SaveMessageForLater
         */
        readonly saveMessageForLater: {
            readonly name: "SaveMessageForLater";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a message in an general stream
         *
         * @generated from rpc Scailo.GeneralStreamsService.DeleteMessage
         */
        readonly deleteMessage: {
            readonly name: "DeleteMessage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View General Stream Message by UUID
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewMessageByUUID
         */
        readonly viewMessageByUUID: {
            readonly name: "ViewMessageByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GeneralStreamMessage;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all messages for given general stream UUID
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewMessages
         */
        readonly viewMessages: {
            readonly name: "ViewMessages";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GeneralStreamMessagesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View general stream messages for given general stream ID with pagination
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewPaginatedMessages
         */
        readonly viewPaginatedMessages: {
            readonly name: "ViewPaginatedMessages";
            readonly I: typeof GeneralStreamMessagesSearchRequest;
            readonly O: typeof GeneralStreamsServicePaginatedMessagesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through general stream messages with pagination
         *
         * @generated from rpc Scailo.GeneralStreamsService.SearchMessagesWithPagination
         */
        readonly searchMessagesWithPagination: {
            readonly name: "SearchMessagesWithPagination";
            readonly I: typeof GeneralStreamMessagesSearchRequest;
            readonly O: typeof GeneralStreamsServicePaginatedMessagesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all receipts for the given message UUID
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewMessageReceipts
         */
        readonly viewMessageReceipts: {
            readonly name: "ViewMessageReceipts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GeneralStreamMessageReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an internal subscriber
         *
         * @generated from rpc Scailo.GeneralStreamsService.AddInternalSubscriber
         */
        readonly addInternalSubscriber: {
            readonly name: "AddInternalSubscriber";
            readonly I: typeof GeneralStreamsServiceInternalSubscriberCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an internal subscriber
         *
         * @generated from rpc Scailo.GeneralStreamsService.DeleteInternalSubscriber
         */
        readonly deleteInternalSubscriber: {
            readonly name: "DeleteInternalSubscriber";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View an internal subscriber for the given ID
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewInternalSubscriberByID
         */
        readonly viewInternalSubscriberByID: {
            readonly name: "ViewInternalSubscriberByID";
            readonly I: typeof Identifier;
            readonly O: typeof GeneralStreamInternalSubscriber;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all internal subscribers for given general stream UUID
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewInternalSubscribers
         */
        readonly viewInternalSubscribers: {
            readonly name: "ViewInternalSubscribers";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GeneralStreamInternalSubscribersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import users as internal subscribers from team and returns the ID of the general stream
         *
         * @generated from rpc Scailo.GeneralStreamsService.ImportInternalSubscribersFromTeam
         */
        readonly importInternalSubscribersFromTeam: {
            readonly name: "ImportInternalSubscribersFromTeam";
            readonly I: typeof GeneralStreamsServiceImportInternalSubscribersRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import users as internal subscribers from department and returns the ID of the general stream
         *
         * @generated from rpc Scailo.GeneralStreamsService.ImportInternalSubscribersFromDepartment
         */
        readonly importInternalSubscribersFromDepartment: {
            readonly name: "ImportInternalSubscribersFromDepartment";
            readonly I: typeof GeneralStreamsServiceImportInternalSubscribersRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof GeneralStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GeneralStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof GeneralStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GeneralStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof GeneralStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof GeneralStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GeneralStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.GeneralStreamsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof GeneralStreamsServicePaginationReq;
            readonly O: typeof GeneralStreamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.GeneralStreamsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof GeneralStreamsServiceSearchAllReq;
            readonly O: typeof GeneralStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.GeneralStreamsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof GeneralStreamsServiceFilterReq;
            readonly O: typeof GeneralStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.GeneralStreamsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof GeneralStreamsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request
         *
         * @generated from rpc Scailo.GeneralStreamsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof GeneralStreamsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=general_streams.scailo_connect.d.ts.map
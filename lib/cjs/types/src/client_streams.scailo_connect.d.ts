import { ClientStream, ClientStreamClientSubscriber, ClientStreamClientSubscribersList, ClientStreamInternalSubscriber, ClientStreamInternalSubscribersList, ClientStreamMessage, ClientStreamMessageReceiptsList, ClientStreamMessagesList, ClientStreamMessagesSearchRequest, ClientStreamsList, ClientStreamsServiceClientSubscriberCreateRequest, ClientStreamsServiceCountReq, ClientStreamsServiceCreateRequest, ClientStreamsServiceFilterReq, ClientStreamsServiceImportInternalSubscribersRequest, ClientStreamsServiceInternalSubscriberCreateRequest, ClientStreamsServiceMessageCreateRequest, ClientStreamsServicePaginatedMessagesResponse, ClientStreamsServicePaginationReq, ClientStreamsServicePaginationResponse, ClientStreamsServiceSearchAllReq, ClientStreamsServiceUpdateRequest } from "./client_streams.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithUserComment, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each client stream
 *
 * @generated from service Scailo.ClientStreamsService
 */
export declare const ClientStreamsService: {
    readonly typeName: "Scailo.ClientStreamsService";
    readonly methods: {
        /**
         * Create
         *
         * @generated from rpc Scailo.ClientStreamsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ClientStreamsServiceCreateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.ClientStreamsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof ClientStreamsServiceUpdateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Cancel
         *
         * @generated from rpc Scailo.ClientStreamsService.Cancel
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
         * @generated from rpc Scailo.ClientStreamsService.Complete
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
         * @generated from rpc Scailo.ClientStreamsService.Reopen
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
         * @generated from rpc Scailo.ClientStreamsService.Repeat
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
         * @generated from rpc Scailo.ClientStreamsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a message to an client stream
         *
         * @generated from rpc Scailo.ClientStreamsService.AddMessage
         */
        readonly addMessage: {
            readonly name: "AddMessage";
            readonly I: typeof ClientStreamsServiceMessageCreateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Saves a message for viewing it later
         *
         * @generated from rpc Scailo.ClientStreamsService.SaveMessageForLater
         */
        readonly saveMessageForLater: {
            readonly name: "SaveMessageForLater";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a message in an client stream
         *
         * @generated from rpc Scailo.ClientStreamsService.DeleteMessage
         */
        readonly deleteMessage: {
            readonly name: "DeleteMessage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Client Stream Message by UUID
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewMessageByUUID
         */
        readonly viewMessageByUUID: {
            readonly name: "ViewMessageByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ClientStreamMessage;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all messages for given client stream UUID
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewMessages
         */
        readonly viewMessages: {
            readonly name: "ViewMessages";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ClientStreamMessagesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View client stream messages for given client stream ID with pagination
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewPaginatedMessages
         */
        readonly viewPaginatedMessages: {
            readonly name: "ViewPaginatedMessages";
            readonly I: typeof ClientStreamMessagesSearchRequest;
            readonly O: typeof ClientStreamsServicePaginatedMessagesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through client stream messages with pagination
         *
         * @generated from rpc Scailo.ClientStreamsService.SearchMessagesWithPagination
         */
        readonly searchMessagesWithPagination: {
            readonly name: "SearchMessagesWithPagination";
            readonly I: typeof ClientStreamMessagesSearchRequest;
            readonly O: typeof ClientStreamsServicePaginatedMessagesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all receipts for the given message UUID
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewMessageReceipts
         */
        readonly viewMessageReceipts: {
            readonly name: "ViewMessageReceipts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ClientStreamMessageReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an internal subscriber
         *
         * @generated from rpc Scailo.ClientStreamsService.AddInternalSubscriber
         */
        readonly addInternalSubscriber: {
            readonly name: "AddInternalSubscriber";
            readonly I: typeof ClientStreamsServiceInternalSubscriberCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an internal subscriber
         *
         * @generated from rpc Scailo.ClientStreamsService.DeleteInternalSubscriber
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
         * @generated from rpc Scailo.ClientStreamsService.ViewInternalSubscriberByID
         */
        readonly viewInternalSubscriberByID: {
            readonly name: "ViewInternalSubscriberByID";
            readonly I: typeof Identifier;
            readonly O: typeof ClientStreamInternalSubscriber;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all internal subscribers for given client stream UUID
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewInternalSubscribers
         */
        readonly viewInternalSubscribers: {
            readonly name: "ViewInternalSubscribers";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ClientStreamInternalSubscribersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import users as internal subscribers from team and returns the ID of the client stream
         *
         * @generated from rpc Scailo.ClientStreamsService.ImportInternalSubscribersFromTeam
         */
        readonly importInternalSubscribersFromTeam: {
            readonly name: "ImportInternalSubscribersFromTeam";
            readonly I: typeof ClientStreamsServiceImportInternalSubscribersRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import users as internal subscribers from department and returns the ID of the client stream
         *
         * @generated from rpc Scailo.ClientStreamsService.ImportInternalSubscribersFromDepartment
         */
        readonly importInternalSubscribersFromDepartment: {
            readonly name: "ImportInternalSubscribersFromDepartment";
            readonly I: typeof ClientStreamsServiceImportInternalSubscribersRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a client subscriber
         *
         * @generated from rpc Scailo.ClientStreamsService.AddClientSubscriber
         */
        readonly addClientSubscriber: {
            readonly name: "AddClientSubscriber";
            readonly I: typeof ClientStreamsServiceClientSubscriberCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a client subscriber
         *
         * @generated from rpc Scailo.ClientStreamsService.DeleteClientSubscriber
         */
        readonly deleteClientSubscriber: {
            readonly name: "DeleteClientSubscriber";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View client subscriber for the given ID
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewClientSubscriberByID
         */
        readonly viewClientSubscriberByID: {
            readonly name: "ViewClientSubscriberByID";
            readonly I: typeof Identifier;
            readonly O: typeof ClientStreamClientSubscriber;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all client subscribers for given client stream UUID
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewClientSubscribers
         */
        readonly viewClientSubscribers: {
            readonly name: "ViewClientSubscribers";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ClientStreamClientSubscribersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ClientStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ClientStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof ClientStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ClientStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof ClientStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ClientStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ClientStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.ClientStreamsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ClientStreamsServicePaginationReq;
            readonly O: typeof ClientStreamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.ClientStreamsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ClientStreamsServiceSearchAllReq;
            readonly O: typeof ClientStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.ClientStreamsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ClientStreamsServiceFilterReq;
            readonly O: typeof ClientStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.ClientStreamsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ClientStreamsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request
         *
         * @generated from rpc Scailo.ClientStreamsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof ClientStreamsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=client_streams.scailo_connect.d.ts.map
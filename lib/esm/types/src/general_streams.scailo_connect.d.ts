import { GeneralStream, GeneralStreamInternalSubscriber, GeneralStreamInternalSubscribersList, GeneralStreamMessage, GeneralStreamMessageReceiptsList, GeneralStreamMessagesList, GeneralStreamMessagesSearchRequest, GeneralStreamsList, GeneralStreamsServiceCountReq, GeneralStreamsServiceCreateRequest, GeneralStreamsServiceFilterReq, GeneralStreamsServiceImportInternalSubscribersRequest, GeneralStreamsServiceInternalSubscriberCreateRequest, GeneralStreamsServiceMessageCreateRequest, GeneralStreamsServicePaginatedMessagesResponse, GeneralStreamsServicePaginationReq, GeneralStreamsServicePaginationResponse, GeneralStreamsServiceSearchAllReq, GeneralStreamsServiceUpdateRequest } from "./general_streams.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithUserComment } from "./base.scailo_pb.js";
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
         * View by ID
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
         * View by UUID
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
         * View all
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
         * View all with the given entity UUID
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
         * View with pagination
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
         * View all that match the given search key
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
         * View all that match the given filter criteria
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
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.GeneralStreamsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof GeneralStreamsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=general_streams.scailo_connect.d.ts.map
import { VendorStream, VendorStreamInternalSubscriber, VendorStreamInternalSubscribersList, VendorStreamMessage, VendorStreamMessageReceiptsList, VendorStreamMessagesList, VendorStreamMessagesSearchRequest, VendorStreamsList, VendorStreamsServiceCountReq, VendorStreamsServiceCreateRequest, VendorStreamsServiceFilterReq, VendorStreamsServiceImportInternalSubscribersRequest, VendorStreamsServiceInternalSubscriberCreateRequest, VendorStreamsServiceMessageCreateRequest, VendorStreamsServicePaginatedMessagesResponse, VendorStreamsServicePaginationReq, VendorStreamsServicePaginationResponse, VendorStreamsServiceSearchAllReq, VendorStreamsServiceUpdateRequest, VendorStreamsServiceVendorSubscriberCreateRequest, VendorStreamVendorSubscriber, VendorStreamVendorSubscribersList } from "./vendor_streams.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierWithUserComment } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each vendor stream
 *
 * @generated from service Scailo.VendorStreamsService
 */
export declare const VendorStreamsService: {
    readonly typeName: "Scailo.VendorStreamsService";
    readonly methods: {
        /**
         * Create
         *
         * @generated from rpc Scailo.VendorStreamsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof VendorStreamsServiceCreateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.VendorStreamsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof VendorStreamsServiceUpdateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Cancel
         *
         * @generated from rpc Scailo.VendorStreamsService.Cancel
         */
        readonly cancel: {
            readonly name: "Cancel";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.VendorStreamsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.VendorStreamsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.VendorStreamsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail(IdentifierWithEmailAttributes) returns (IdentifierUUID);
         *
         * @generated from rpc Scailo.VendorStreamsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a message to an vendor stream
         *
         * @generated from rpc Scailo.VendorStreamsService.AddMessage
         */
        readonly addMessage: {
            readonly name: "AddMessage";
            readonly I: typeof VendorStreamsServiceMessageCreateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Saves a message for viewing it later
         *
         * @generated from rpc Scailo.VendorStreamsService.SaveMessageForLater
         */
        readonly saveMessageForLater: {
            readonly name: "SaveMessageForLater";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a message in an vendor stream
         *
         * @generated from rpc Scailo.VendorStreamsService.DeleteMessage
         */
        readonly deleteMessage: {
            readonly name: "DeleteMessage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Vendor Stream Message by UUID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewMessageByUUID
         */
        readonly viewMessageByUUID: {
            readonly name: "ViewMessageByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorStreamMessage;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all messages for given vendor stream UUID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewMessages
         */
        readonly viewMessages: {
            readonly name: "ViewMessages";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorStreamMessagesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View vendor stream messages for given vendor stream ID with pagination
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewPaginatedMessages
         */
        readonly viewPaginatedMessages: {
            readonly name: "ViewPaginatedMessages";
            readonly I: typeof VendorStreamMessagesSearchRequest;
            readonly O: typeof VendorStreamsServicePaginatedMessagesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through vendor stream messages with pagination
         *
         * @generated from rpc Scailo.VendorStreamsService.SearchMessagesWithPagination
         */
        readonly searchMessagesWithPagination: {
            readonly name: "SearchMessagesWithPagination";
            readonly I: typeof VendorStreamMessagesSearchRequest;
            readonly O: typeof VendorStreamsServicePaginatedMessagesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all receipts for the given message UUID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewMessageReceipts
         */
        readonly viewMessageReceipts: {
            readonly name: "ViewMessageReceipts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorStreamMessageReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an internal subscriber
         *
         * @generated from rpc Scailo.VendorStreamsService.AddInternalSubscriber
         */
        readonly addInternalSubscriber: {
            readonly name: "AddInternalSubscriber";
            readonly I: typeof VendorStreamsServiceInternalSubscriberCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an internal subscriber
         *
         * @generated from rpc Scailo.VendorStreamsService.DeleteInternalSubscriber
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
         * @generated from rpc Scailo.VendorStreamsService.ViewInternalSubscriberByID
         */
        readonly viewInternalSubscriberByID: {
            readonly name: "ViewInternalSubscriberByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorStreamInternalSubscriber;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all internal subscribers for given vendor stream UUID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewInternalSubscribers
         */
        readonly viewInternalSubscribers: {
            readonly name: "ViewInternalSubscribers";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorStreamInternalSubscribersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import users as internal subscribers from team and returns the ID of the vendor stream
         *
         * @generated from rpc Scailo.VendorStreamsService.ImportInternalSubscribersFromTeam
         */
        readonly importInternalSubscribersFromTeam: {
            readonly name: "ImportInternalSubscribersFromTeam";
            readonly I: typeof VendorStreamsServiceImportInternalSubscribersRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import users as internal subscribers from department and returns the ID of the vendor stream
         *
         * @generated from rpc Scailo.VendorStreamsService.ImportInternalSubscribersFromDepartment
         */
        readonly importInternalSubscribersFromDepartment: {
            readonly name: "ImportInternalSubscribersFromDepartment";
            readonly I: typeof VendorStreamsServiceImportInternalSubscribersRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a vendor subscriber
         *
         * @generated from rpc Scailo.VendorStreamsService.AddVendorSubscriber
         */
        readonly addVendorSubscriber: {
            readonly name: "AddVendorSubscriber";
            readonly I: typeof VendorStreamsServiceVendorSubscriberCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a vendor subscriber
         *
         * @generated from rpc Scailo.VendorStreamsService.DeleteVendorSubscriber
         */
        readonly deleteVendorSubscriber: {
            readonly name: "DeleteVendorSubscriber";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View vendor subscriber for the given ID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewVendorSubscriberByID
         */
        readonly viewVendorSubscriberByID: {
            readonly name: "ViewVendorSubscriberByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorStreamVendorSubscriber;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all vendor subscribers for given vendor stream UUID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewVendorSubscribers
         */
        readonly viewVendorSubscribers: {
            readonly name: "ViewVendorSubscribers";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorStreamVendorSubscribersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorStream;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof VendorStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.VendorStreamsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof VendorStreamsServicePaginationReq;
            readonly O: typeof VendorStreamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.VendorStreamsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof VendorStreamsServiceSearchAllReq;
            readonly O: typeof VendorStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.VendorStreamsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof VendorStreamsServiceFilterReq;
            readonly O: typeof VendorStreamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.VendorStreamsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof VendorStreamsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=vendor_streams.scailo_connect.d.ts.map
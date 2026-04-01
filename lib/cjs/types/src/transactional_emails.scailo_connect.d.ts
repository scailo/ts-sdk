import { TransactionalEmail, TransactionalEmailAttachmentsList, TransactionalEmailRecipientsList, TransactionalEmailsList, TransactionalEmailsServiceCountReq, TransactionalEmailsServiceCreateRequest, TransactionalEmailsServiceFilterReq, TransactionalEmailsServiceSearchAllReq } from "./transactional_emails.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CountResponse, Identifier, IdentifiersList, IdentifierUUID, StandardFile } from "./base.scailo_pb.js";
/**
 *
 * Describes the methods applicable on each transactional email
 *
 * @generated from service Scailo.TransactionalEmailsService
 */
export declare const TransactionalEmailsService: {
    readonly typeName: "Scailo.TransactionalEmailsService";
    readonly methods: {
        /**
         * Create a transactional email
         *
         * @generated from rpc Scailo.TransactionalEmailsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TransactionalEmailsServiceCreateRequest;
            readonly O: typeof TransactionalEmail;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.TransactionalEmailsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof TransactionalEmail;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.TransactionalEmailsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TransactionalEmail;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.TransactionalEmailsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof TransactionalEmailsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all recipients of the transactional email
         *
         * @generated from rpc Scailo.TransactionalEmailsService.ViewRecipients
         */
        readonly viewRecipients: {
            readonly name: "ViewRecipients";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TransactionalEmailRecipientsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all attachments of the transactional email
         *
         * @generated from rpc Scailo.TransactionalEmailsService.ViewAttachments
         */
        readonly viewAttachments: {
            readonly name: "ViewAttachments";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TransactionalEmailAttachmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all transactional emails that match the given search key
         *
         * @generated from rpc Scailo.TransactionalEmailsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof TransactionalEmailsServiceSearchAllReq;
            readonly O: typeof TransactionalEmailsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.TransactionalEmailsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof TransactionalEmailsServiceFilterReq;
            readonly O: typeof TransactionalEmailsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.TransactionalEmailsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof TransactionalEmailsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.TransactionalEmailsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof TransactionalEmailsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=transactional_emails.scailo_connect.d.ts.map
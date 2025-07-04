import { MagicLink, MagicLinkAccessLogsList, MagicLinkPaginationResp, MagicLinkServiceSearchByCodeReq, MagicLinksList, MagicLinksServiceCountReq, MagicLinksServiceCreateRequest, MagicLinksServiceFilterReq, MagicLinksServicePaginationReq, MagicLinksServiceSearchAllReq, MagicLinksServiceUpdateRequest } from "./magic_links.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, StandardFile } from "./base.scailo_pb.js";
/**
 *
 * Describes the methods applicable on each magic link
 *
 * @generated from service Scailo.MagicLinksService
 */
export declare const MagicLinksService: {
    readonly typeName: "Scailo.MagicLinksService";
    readonly methods: {
        /**
         * Create a magic link
         *
         * @generated from rpc Scailo.MagicLinksService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof MagicLinksServiceCreateRequest;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a magic link
         *
         * @generated from rpc Scailo.MagicLinksService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof MagicLinksServiceUpdateRequest;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard the magic link
         *
         * @generated from rpc Scailo.MagicLinksService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the magic link
         *
         * @generated from rpc Scailo.MagicLinksService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.MagicLinksService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.MagicLinksService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components that matches the given code
         *
         * @generated from rpc Scailo.MagicLinksService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof MagicLinkServiceSearchByCodeReq;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.MagicLinksService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof MagicLinksList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all magic links
         *
         * @generated from rpc Scailo.MagicLinksService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof MagicLinksList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all magic links with the given entity UUID
         *
         * @generated from rpc Scailo.MagicLinksService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof MagicLinksList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View magic links with pagination
         *
         * @generated from rpc Scailo.MagicLinksService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof MagicLinksServicePaginationReq;
            readonly O: typeof MagicLinkPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View access logs of magic link
         *
         * @generated from rpc Scailo.MagicLinksService.ViewAccessLogs
         */
        readonly viewAccessLogs: {
            readonly name: "ViewAccessLogs";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof MagicLinkAccessLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all magic links that match the given search key
         *
         * @generated from rpc Scailo.MagicLinksService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof MagicLinksServiceSearchAllReq;
            readonly O: typeof MagicLinksList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.MagicLinksService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof MagicLinksServiceFilterReq;
            readonly O: typeof MagicLinksList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.MagicLinksService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof MagicLinksServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.MagicLinksService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof MagicLinksServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=magic_links.scailo_connect.d.ts.map
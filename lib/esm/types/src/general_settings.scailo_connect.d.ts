import { GeneralSettings, GeneralSettingsServiceCreateRequest } from "./general_settings.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { Empty, IdentifierResponse, IdentifierUUIDsList, ImageResponse, StandardFile } from "./base.scailo_pb.js";
/**
 *
 * Describes the methods applicable on each general settings
 *
 * @generated from service Scailo.GeneralSettingsService
 */
export declare const GeneralSettingsService: {
    readonly typeName: "Scailo.GeneralSettingsService";
    readonly methods: {
        /**
         * Create a general settings
         *
         * @generated from rpc Scailo.GeneralSettingsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof GeneralSettingsServiceCreateRequest;
            readonly O: typeof GeneralSettings;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update the logo of the organization
         *
         * @generated from rpc Scailo.GeneralSettingsService.UpdateOrganizationLogo
         */
        readonly updateOrganizationLogo: {
            readonly name: "UpdateOrganizationLogo";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View current logo of the organization
         *
         * @generated from rpc Scailo.GeneralSettingsService.ViewOrganizationLogo
         */
        readonly viewOrganizationLogo: {
            readonly name: "ViewOrganizationLogo";
            readonly I: typeof Empty;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * ------------------------------------------------------
         * All view operations are listed below
         * View the current settings
         *
         * @generated from rpc Scailo.GeneralSettingsService.ViewSettings
         */
        readonly viewSettings: {
            readonly name: "ViewSettings";
            readonly I: typeof Empty;
            readonly O: typeof GeneralSettings;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV template that could be used to upload records
         *
         * @generated from rpc Scailo.GeneralSettingsService.DownloadImportTemplate
         */
        readonly downloadImportTemplate: {
            readonly name: "DownloadImportTemplate";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Bulk imports records from a provided CSV file.
         * Behavior:
         * - Deduplication: Skips entries where the `code` already exists in the system.
         * - Atomicity: This is an "all-or-nothing" operation; if any part of the
         *   import fails, no changes are committed.
         * - Idempotency: Multiple calls with the same CSV result in the same state.
         * Returns a list of UUIDs for all successfully processed or existing records.
         *
         * @generated from rpc Scailo.GeneralSettingsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=general_settings.scailo_connect.d.ts.map
import { GeneralSettings, GeneralSettingsUpdateRequest } from "./general_settings.scailo_pb.js";
import { Empty, IdentifierResponse, ImageResponse, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on general settings
 *
 * @generated from service Scailo.GeneralSettingsService
 */
export declare const GeneralSettingsService: {
    readonly typeName: "Scailo.GeneralSettingsService";
    readonly methods: {
        /**
         * Update General Settings
         *
         * @generated from rpc Scailo.GeneralSettingsService.UpdateSettings
         */
        readonly updateSettings: {
            readonly name: "UpdateSettings";
            readonly I: typeof GeneralSettingsUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
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
    };
};
//# sourceMappingURL=general_settings.scailo_connect.d.ts.map
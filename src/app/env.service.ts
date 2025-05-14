import { Injectable } from "@angular/core";
import { clientSecret } from "./shared/config/constants";

interface AppUrls {
    dashboardUrl: string;
    client_secret: string;
    oceURL: string;
    termsandConditions: string;
    privacyPolicy: string;
    AuthUrl: string;
    associatePortalGateWayUrl: string;
}

@Injectable({ providedIn: 'root' })
export class EnvService {
    init(): Promise<void> {
        return new Promise(resolve => {
            resolve();
        });
    }

    getAppUrl() {
        let appUrls: AppUrls = {
            dashboardUrl: this.getEnvType() === 'prod' ? `https://test-cca.clopay.com` : `https://${this.getEnvType()}-cca.clopay.com`,
            oceURL: `https://${this.getEnvType()}-iam.clopay.com/connect/token`,
            client_secret: clientSecret[this.getEnvType()],
            termsandConditions: 'https://dpadmin.clopay.com/cca/terms-and-conditions',
            privacyPolicy: 'https://dpadmin.clopay.com/cca/privacy-policy',
            AuthUrl: `https://${this.getEnvType()}-apigateway.clopay.com/api/security/v4/ValidateUser?aId=${this.getAppId()}&appIds=installer`,
            associatePortalGateWayUrl: `https://${this.getEnvType()}-apigateway.clopay.com/api/firemarshalapi/FireMarshall/`
        }
        return appUrls;
    }

    getEnvType(): string {
        const hostname = window && window.location && window.location.hostname;
        let envType: string = '';
        if ("localhost".includes(hostname)) {
            envType = 'dev'
        } else if ("https://dev-associateportal.clopay.com/".includes(hostname)) {
            envType = 'dev'
        } else if ("https://test-associateportal.clopay.com/".includes(hostname)) {
            envType = 'test'
        } else if ("https://staging-associateportal.clopay.com/".includes(hostname)) {
            envType = 'staging'
        } else if ("https://associateportal.clopay.com/".includes(hostname)) {
            envType = 'prod'
        }
        return envType;
    }

    getAppId() {
        const hostname = window && window.location && window.location.hostname;
        let appId: number = 0;
        if ("localhost".includes(hostname)) {
            appId = 53
        } else if ("https://dev-associateportal.clopay.com/".includes(hostname)) {
            appId = 53
        } else if ("https://test-associateportal.clopay.com/".includes(hostname)) {
            appId = 53
        } else if ("https://dev-associateportal.clopay.com/".includes(hostname)) {

        } else if ("https://dev-associateportal.clopay.com/".includes(hostname)) {

        }
        return appId;
    }
}
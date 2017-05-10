/**
 * Created by Vincent Plasse on 10/05/2017.
 */

import {Component} from "@angular/core";
import {Customer} from "../shared/sdk/models/Customer";
import {CustomerApi} from "../shared/sdk/services/custom/Customer";
import {LoopBackConfig} from "../shared/sdk/lb.config";
import {BASE_URL, API_VERSION} from "../shared/base.url";
import {AccessToken} from "../shared/sdk/models/BaseModels";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "signin.component.html"
})
export class SigninComponent {
  public customer: Customer = new Customer();

  constructor(private customerApi: CustomerApi, private router: Router) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  login(): void {
    this.customerApi.login(this.customer, true).subscribe(
      (token: AccessToken) => this.router.navigate(['/home']),
      err => alert(err.message)
    );
  }

  register() : void {
    this.customerApi.create(this.customer).subscribe((customer: Customer) => this.login());
  }
}

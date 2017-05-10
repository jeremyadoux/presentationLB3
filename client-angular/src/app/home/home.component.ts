/**
 * Created by Jérémy Adoux on 10/05/2017.
 */

import {Component, OnInit} from "@angular/core";
import {LoopBackAuth} from "../shared/sdk/services/core/auth.service";
import {LoopBackConfig} from "../shared/sdk/lb.config";
import {BASE_URL, API_VERSION} from "../shared/base.url";
@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  user =  {};

  ngOnInit(): void {
    this.user = this.auth.getCurrentUserData();
    console.log(this.user);
  }

  constructor(private auth: LoopBackAuth) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }


}

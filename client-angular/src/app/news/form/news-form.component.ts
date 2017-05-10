/**
 * Created by Jérémy Adoux on 10/05/2017.
 */

import {Component} from "@angular/core";
import {NewsApi} from "../../shared/sdk/services/custom/News";
import {LoopBackConfig} from "../../shared/sdk/lb.config";
import {BASE_URL, API_VERSION} from "../../shared/base.url";
import {News} from "../../shared/sdk/models/News";
import {LoopBackAuth} from "../../shared/sdk/services/core/auth.service";
@Component({
  moduleId: module.id,
  templateUrl: 'news-form.component.html',
  selector: 'news-form'
})

export class NewsFormComponent {
  public news: News = new News();

  constructor(private newsApi: NewsApi, private auth: LoopBackAuth) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  saveForm() {
    this.newsApi.create(this.news).subscribe(
      (news: News) => console.log('ok'),
      err => alert(err.message)
    )
  }
}

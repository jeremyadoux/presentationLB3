/**
 * Created by Jérémy Adoux on 10/05/2017.
 */

import {Component, OnInit} from "@angular/core";
import {News} from "../../shared/sdk/models/News";
import {NewsApi} from "../../shared/sdk/services/custom/News";
import {LoopBackConfig} from "../../shared/sdk/lb.config";
import {BASE_URL, API_VERSION} from "../../shared/base.url";
import {NewsExtended} from "../../shared/extended/news.extended.js";
@Component({
  moduleId: module.id,
  templateUrl: 'news-list.component.html',
  selector: 'news-list'
})

export class NewsListComponent implements OnInit {
  newsList: News[] = [];

  constructor(private newsApi: NewsExtended) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit(): void {
    this.getNewsList();
  }

  getNewsList(): void {
    this.newsApi.find().subscribe((data: News[]) => {
      this.newsList = data;
      this.newsApi.onCreate().subscribe((news: News) => {
        console.log(news);
        this.newsList.push(news);
        console.log(this.newsList);
      });
    })
  }

}



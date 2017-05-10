import {NewsApi} from "../sdk/services/custom/News";
import {Inject, Optional, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {SDKModels} from "../sdk/services/custom/SDKModels";
import {LoopBackAuth} from "../sdk/services/core/auth.service";
import {SocketConnection} from "../sdk/sockets/socket.connections";
import {JSONSearchParams} from "../sdk/services/core/search.params";
import {ErrorHandler} from "../sdk/services/core/error.service";
import {Observable} from "rxjs";
import {LoopBackConfig} from "../sdk/lb.config";
/**
 * Created by Jérémy Adoux on 10/05/2017.
 */

@Injectable()
export class NewsExtended extends NewsApi {
  constructor(
    @Inject(Http) protected http: Http,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, searchParams, errorHandler);
  }

  public onCreate(): Observable<any> {
    let _method: string = "POST";
    let _url: string = "/" + LoopBackConfig.getApiVersion() +
      "/News";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, true);

    return result;
  }
}

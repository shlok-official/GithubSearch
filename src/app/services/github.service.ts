import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
  private username:string;
  private client_id ='7cf42154cd2f10801421';
  private client_secret ='f913a4e1187a6145e9958afc8fb6826fd8847839';


  constructor(private _http:Http){
    console.log("Git ready for connection...");
    this.username ='shlok-official';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+ this.username +'?client_id='+this.client_id+'&client_secret='+ this.client_secret)
      .map(res =>res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+ this.username +'/repos?client_id='+this.client_id+'&client_secret='+ this.client_secret)
      .map(res =>res.json());
  }
}

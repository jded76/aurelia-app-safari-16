import { autoinject, observable, TaskQueue } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from 'aurelia-pal';

@autoinject()
export class App {
  public router: Router;
  public device: string;
  public osVersion: number;

  public attached(){
    this.device = window.navigator.userAgent;
    var agent = window.navigator.userAgent,
    start = agent.indexOf( "OS" );
    if( ( agent.indexOf( "iPhone" ) > -1 || agent.indexOf( "iPad" ) > -1 ) && start > -1 ){
        this.osVersion = window.Number(agent.substr( start + 3, 4 ).replace( "_", "." ));
    }
  }

  public reset(){
    window.location.href = window.location.origin;
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Test1";
    config.options.root = "/";
    config.options.pushState = true;
    config.map([
      {
        route: [""],
        name: PLATFORM.moduleName("home"),
        moduleId: "./home",
        nav: false,
        auth: false,
        title: "Home",
      },
      {
        route: ["about"],
        name: "about",
        moduleId: PLATFORM.moduleName("./about"),
        nav: false,
        auth: false,
        title: "about",
      },
      {
        route: ["test"],
        name: "test",
        moduleId: PLATFORM.moduleName("./test"),
        nav: false,
        auth: false,
        title: "test",
      },
    ]);
    this.router = router;
  }
}

import { Injectable } from "@angular/core";
import { FirbaseDataProvider } from './../../../../providers/dataprovider';


@Injectable()
export class LoginService {
    constructor(
        private data: FirbaseDataProvider
    ){
    }

    getCourses(){
        return this.data.getDataList('/courses');
    }

}
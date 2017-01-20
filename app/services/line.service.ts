import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const LINES_URL = 'http://localhost:9090/lines';

@Injectable()
export class LineService {
    constructor(private http: Http) {
    }

    getLines() {
        return this.http.get(LINES_URL).map(res => res.json());
    }
    getLine(id: string) {
        return this.http.get(LINES_URL + "/" + id).map(res => res.json());
    }

}
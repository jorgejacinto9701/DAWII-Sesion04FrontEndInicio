import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Deporte } from '../models/deporte.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';


@Injectable({
  providedIn: 'root'
})

export class DeporteService {

  constructor() { }

   

}

import { TestBed } from '@angular/core/testing';

import { HttpCrudTechCampService } from './http-crud-tech-camp.service';

describe('HttpCrudTechCampService', () => {
  let service: HttpCrudTechCampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCrudTechCampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

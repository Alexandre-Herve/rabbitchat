import { TestBed, inject } from '@angular/core/testing';

import { ChatStoreService } from './chat-store.service';

describe('ChatStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatStoreService]
    });
  });

  it('should be created', inject([ChatStoreService], (service: ChatStoreService) => {
    expect(service).toBeTruthy();
  }));
});

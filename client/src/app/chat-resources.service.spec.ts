import { TestBed, inject } from '@angular/core/testing'

import { ChatResourcesService } from './chat-resources.service'

describe('ChatResourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatResourcesService]
    })
  })

  it('should be created', inject([ChatResourcesService], (service: ChatResourcesService) => {
    expect(service).toBeTruthy()
  }))
})

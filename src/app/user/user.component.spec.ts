import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../interfaces/User';

import { UserComponent } from './user.component';

const mockUser: User = {
  login: "login",
  id: 1,
  node_id: "node_id",
  avatar_url: "avatar_url",
  gravatar_id: "gravatar_id",
  url: "url",
  html_url: "html_url",
  followers_url: "followers_url",
  following_url: "following_url",
  gists_url: "gists_url",
  starred_url: "starred_url",
  subscriptions_url: "subscriptions_url",
  organizations_url: "organizations_url",
  repos_url: "repos_url",
  events_url: "events_url",
  received_events_url: "received_events_url",
  type: "type",
  site_admin: false,
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to user detail screen on click', () => {
    component.goToDetails(mockUser);
    //TODO: check navigation to user details screen
    expect(component).toBeTruthy();
  });
});

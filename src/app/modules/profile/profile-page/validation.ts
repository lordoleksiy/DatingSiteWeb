import {IProfile} from "../../../models/Profile/IProfile";

export function validateProfile(profile: IProfile): boolean {
  if (!profile.age || profile.age < 0) {
    return false;
  }

  if (!profile.city) {
    return false;
  }

  if (!profile.description) {
    return false;
  }

  if (!profile.firstName) {
    return false;
  }
  if (!profile.lastName) {
    return false;
  }

  if (!profile.gender) {
    return false;
  }
  if (!profile.contact){
    return false;
  }

  if (!profile.keywords || profile.keywords.length === 0) {
    return false;
  }

  return true;
}

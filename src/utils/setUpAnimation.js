import { observeAnimations } from './observerAnimation';

let initialized = false;

export function setupAnimations() {
  if (!initialized) {
    observeAnimations();
    initialized = true;
  }
}
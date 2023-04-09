import FirebaseService from "./firebase";
import { getAnalytics } from "firebase/analytics";

class Analytics {
  constructor() {
    this.analytics = null;
    if(!this.instance) this.instance = this;
    return this.instance;
  }

  init() {
    this.analytics = getAnalytics(FirebaseService.app);
  }
}
const AnalyticsService = new Analytics;
export default AnalyticsService
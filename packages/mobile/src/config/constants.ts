import { BaseType, PreviousTotals, User } from "../types";
class IConstants {
  ratings = [
    "Single Engine Land",
    "Multi Engine Land",
    "Single Engine Sea",
    "Multi Engine Sea",
    "Instrument Rating",
  ];
  flightTimes = [];
  types = [
    "Total Flight Time",
    "Night",
    "Actual Instrument",
    "Simulated Instrument",
    "Cross Country",
    "Pilot in Command",
    "Second in Command",
    "Solo",
    "Dual Received",
    "Dual Given",
  ];
  defaultTimeTypes = this.types.map((type) => ({ type, enabled: true }));
  defaultTypes = this.types.reduce((obj, type) => {
    obj[type] = { type, isSelected: false };
    return obj;
  }, {} as { [key: string]: { type: string; isSelected: boolean } });
  defaultPreviousTypes = this.types.map((type) => ({ type, hours: "" }));
  times = [
    "Total Flight Time",
    "Night",
    "Actual Instrument",
    "Simulated Instrument",
    "Cross Country",
    "Pilot in Command",
    "Second in Command",
    "Solo",
    "Dual Received",
    "Dual Given",
  ];
  defaultTimes = this.times.map((time) => ({ type: time, hours: "" }));
  initialDefaultTimeTypes = this.times.map((time) => ({
    type: time,
    enabled: true,
  }));
  defaultPreviousTotals: PreviousTotals = {
    approachNumber: "",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    totalHours: "",
    dayLandings: "",
    nightLandings: "",
    times: this.defaultTimes,
    types: this.defaultPreviousTypes,
    userID: "",
    id: "",
  };
  navLinks = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: "",
    },
    {
      to: "/log-a-flight",
      label: "Log a Flight",
      icon: "",
    },
    {
      to: "/my-logbook",
      label: "My Logbook",
      icon: "",
    },
    { to: "/endorsements", label: "Endorsements", icon: "" },
    { to: "/export-options", label: "Export Options", icon: "" },
    { to: "/summaries", label: "Summaries", icon: "" },
    { to: "/pilot-profile", label: "Pilot Profile", icon: "" },
  ];
  privacyPolicyUrl = "https://ezlogbook.com/misc/privacy_policy.html";
  termsOfServiceUrl = "https://ezlogbook.com/misc/terms.html";
  genderData = ["Male", "Female", "Other", "Prefer not to say"];
  pilotGoals = [
    "Airlines",
    "Corporate",
    "Cargo",
    "Hobby-Flying",
    "General Aviation",
    "Military",
    "Personal/Business Use",
    "Medevac",
    "Law Enforcement",
    "Not sure yet/still exploring!",
  ];
  referralChannels = [
    "Flight School",
    "Flight Instructor",
    "Friend",
    "Google",
    "Social Media",
    "Other",
  ];
  defaultUser: Omit<User, keyof BaseType | "id"> = {
    email: "",
    name: "",
    firstName: "",
    lastName: "",
    dob: "",
    fcmToken: "",
    gender: "",
    phone: "",
    thumbnail: "",
    pilotGoals: [],
    userID: "",
    timeTypes: this.defaultTimeTypes,
    leadChannel: "",
  };
  genderOptions = ["Male", "Female", "Other", "Prefer not to say"];
  pilotGoalsOptions = [
    "Airlines",
    "Corporate",
    "Cargo",
    "Hobby-Flying",
    "General Aviation",
    "Military",
    "Personal/Business Use",
    "Medevac",
    "Law Enforcement",
    "Not sure yet/still exploring!",
  ];
  howDidYouHearOptions = [
    "Flight School",
    "Flight Instructor",
    "Friend",
    "Google",
    "Social Media",
    "Other",
  ];
  certificateTypes = [
    "Student",
    "Private",
    "Commercial",
    "ATP",
    "Flight Instructor",
    "Sport",
    "UAS",
  ];
  medicalClasses = ["Third Class", "Second Class", "First class", "Basic Med"];
  certificateCategories = [
    "Airplane",
    "Rotorcraft",
    "Glider",
    "Lighter-than-air",
    "Powered Lift",
    "Powered Parachute",
    "Weight Shift Control",
    "Other",
  ];
  airplaneClasses = [
    "Single-Engine Land",
    "Multi-Engine Land",
    "Single-Engine Sea",
    "Multi-Engine Sea",
  ];
  rotorcraftClasses = ["Helicopter", "Gyroplane"];
  lighterThanAirClasses = ["Balloon", "Airship"];
  weightShiftClasses = ["Land", "Sea"];
}

export const Constants = new IConstants();

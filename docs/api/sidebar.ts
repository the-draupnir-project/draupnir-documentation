import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/draupnir-api",
    },
    {
      type: "category",
      label: "Appservice",
      items: [
        {
          type: "doc",
          id: "api/get-management-room",
          label: "Find the management room for a draupnir",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-draupnirs",
          label: "Get the mxids of draupnirs that this user has provisioned.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-draupnir",
          label: "Create a new draupnir for the requesting user and protects their first room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/join-management-room",
          label: "Request a draupnir to join and protect a room.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Bot",
      items: [
        {
          type: "doc",
          id: "api/report-options",
          label: "Report an event to draupnir (CORS preflight request)",
          className: "api-method options",
        },
        {
          type: "doc",
          id: "api/message-reports",
          label: "Send a report to draupnir",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SpamChecker",
      items: [
        {
          type: "doc",
          id: "api/users-may-invite",
          label: "Check if a user is allowed to invite",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/user-may-join-room",
          label: "Check if a user is allowed to join a room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/check-event-for-spam",
          label: "Check if an event is spam",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "api/schemas/appserviceauthenticationbody",
          label: "AppserviceAuthenticationBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/appservicebadrequesterror",
          label: "AppserviceBadRequestError",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/appserviceunauthenticatederror",
          label: "AppserviceUnauthenticatedError",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/botunauthenticatederror",
          label: "BotUnauthenticatedError",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

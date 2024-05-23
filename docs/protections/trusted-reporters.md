---
sidebar_label: Trusted reporters
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>
SPDX-FileCopyrightText: 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: Apache-2.0

SPDX-FileAttributionText: <text>
This modified file contains work from Mjolnir
https://github.com/matrix-org/mjolnir
</text>
-->

# Trusted reporters

The trusted reporters protection can be used if you have abuse
reporting enabled for your Draupnir.

When the trusted reporters protection receives a sufficient number of
reports from trusted users concerning a given message, the protection
will take an automated action, such as redacting the reported message.

The users to trust, the actions to take, and the thresholds needed for
those actions are all configurable.

Prerequisites:
* `pollReport: true` in Draupnir config file
* restart Draupnir
* `!draupnir enable TrustedReporters`
* `!draupnir config add TrustedReporters.mxids @trusteduser:example.com`
* `!draupnir config set TrustedReporters.alertThreshold 3`

TrustedReporters supports 3 different thresholds; `alertThreshold`,
`redactThreshold`, and `banThreshold`.  By default, only
`alertThreshold` is enabled, and is set to `3`. Draupnir will only
consider reports that take place in rooms Draupnir is
protecting. `alertThreshold` is separate from Draupnir's ability to
log each report, which is `displayReports` in Draupnir's config file.

Make sure that anything you have sat in front of Synapse (e.g. nginx)
is correctly configured to forward `/_synapse/admin/v1/event_reports`
and `/_synapse/admin/v1/rooms/${room_id}/context/${revent_id}` to
Synapse, or Draupnir will not be able to poll for new
reports. Draupnir polls for new reports every 30 seconds.

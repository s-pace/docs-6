---
title: On-prem Agent - Extensions
date: 2018-11-29 12:00:00 Z
---

# OPA versions

The current version of the Workato On-Premise Agent (OPA) is `v2.6.1`.

Learn more about how to upgrade your OPA [here](/on-prem/agents/upgrade.md).

## v2.6
___

This is a major upgrade from [**v2.5**](#v2-5). In order to improve reliability and throughput, Workato introduced [on-prem groups](/on-prem/groups.md).

On-prem groups help achieve zero downtime for recipes that involves on-prem connections and prevent data and revenue loss through missing SLAs. All critical workflows running on on-prem connections are kept running 100% of the time because recipe can process jobs successfully even when one of the user’s on-prem servers goes down.

To do so, the OPA will be connecting to an expanded set of Workato on-prem gateways. If you are using a firewall whitelist to explicitly allow OPA traffic to the Workato cloud, you may need to expand the [firewall whitelist](/security/ip-whitelists.md#on-premise-agent) accordingly.

Learn more about on-prem groups [here](/on-prem/groups.md).

### 2.6.1

- Fixes a connectivity issue in v2.6.0.

### 2.6.0

- Major release.
- Introduces [on-prem groups](/on-prem/groups.md).
- Introduce High Availability (HA) and load balancing.

## v2.5
___

### 2.5.7

- Fixes the issue with conenction pool not recycling connections properly.

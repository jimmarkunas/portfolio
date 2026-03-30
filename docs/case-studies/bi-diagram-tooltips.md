# BI Diagram Tooltip Copy

## How to use this file

Fill in the `body` field for each node below. Leave all other fields untouched. Each `body` should be **2–3 sentences max**. Write in first-person PM voice, past tense, specific to the Boehringer Ingelheim B2B global commerce rollout on Adobe Commerce. Focus on what this node did in the context of this program and why it mattered — not a generic vendor description.

---

## Prompt for ChatGPT

You are writing tooltip body copy for an architecture diagram on a PM portfolio case study for the Boehringer Ingelheim global B2B commerce transformation. The project ran September 2020–March 2023. It was a global Adobe Commerce Cloud rollout across 5 countries for the animal health division. The stack included Adobe Commerce Cloud, SAP (migrating from Oracle mid-program), Mulesoft as the integration spine, Avalara for tax, and Adobe Experience Manager for content and analytics. Multi-million-dollar veterinary accounts were previously ordering by phone. The goal was a scalable global storefront with local flexibility.

Write 2–3 sentences per node in first-person PM voice, past tense. Focus on what the node did in this specific program and why it mattered — not a generic vendor description. Tone should match this example:

> "SAP became the source of truth for products, pricing, inventory, and orders mid-program as we migrated off Oracle. I had to manage cutover sequencing carefully so the storefront never lost visibility into live order data during the transition."

Fill in the `body` field for each node. Do not change any other fields.

---

## Nodes

### Shopper Browser
The customer-facing presentation layer — web, tablet, and mobile.

```
label: "CUSTOMER PRESENTATION"
title: "Shopper Browser"
body: ""
```

```
label: "CUSTOMER PRESENTATION"
title: "Adobe Web SDK"
body: ""
```

---

### SAP
Source of truth for back-office data. Contains Products, Inventory, and Orders sub-nodes.

```
label: "SOURCE OF TRUTH"
title: "SAP"
body: ""
```

```
label: "SOURCE OF TRUTH"
title: "Products"
body: ""
```

```
label: "SOURCE OF TRUTH"
title: "Inventory"
body: ""
```

```
label: "SOURCE OF TRUTH"
title: "Orders"
body: ""
```

---

### Mulesoft API Layer
The integration spine sitting between all systems. Contains IDP, Apps, and API/Hooks sub-nodes.

```
label: "INTEGRATION SPINE"
title: "Mulesoft API Layer"
body: ""
```

```
label: "INTEGRATION SPINE"
title: "IDP"
body: ""
```

```
label: "INTEGRATION SPINE"
title: "Apps"
body: ""
```

```
label: "INTEGRATION SPINE"
title: "API/Hooks"
body: ""
```

---

### Adobe Experience Manager
Content and analytics layer. Contains Content, Campaigns, and Analytics sub-nodes.

```
label: "CONTENT & ANALYTICS"
title: "Adobe Experience Manager"
body: ""
```

```
label: "CONTENT & ANALYTICS"
title: "Content"
body: ""
```

```
label: "CONTENT & ANALYTICS"
title: "Campaigns"
body: ""
```

```
label: "CONTENT & ANALYTICS"
title: "Analytics"
body: ""
```

---

### Adobe Commerce Cloud
The commerce layer. Has an Adobe GraphQL badge. Contains Catalog, Cart, and Checkout sub-nodes.

```
label: "COMMERCE LAYER"
title: "Adobe Commerce Cloud"
body: ""
```

```
label: "COMMERCE LAYER"
title: "Adobe GraphQL"
body: ""
```

```
label: "COMMERCE LAYER"
title: "Catalog"
body: ""
```

```
label: "COMMERCE LAYER"
title: "Cart"
body: ""
```

```
label: "COMMERCE LAYER"
title: "Checkout"
body: ""
```

---

### Data Lake
Dark node, bottom right. Has an AEM Connector badge.

```
label: "DATA"
title: "Data Lake"
body: ""
```

```
label: "DATA"
title: "AEM Connector"
body: ""
```

---

### 3rd Party

```
label: "3RD PARTY"
title: "Payments"
body: ""
```

```
label: "3RD PARTY"
title: "Tax"
body: ""
```

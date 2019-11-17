---
layout: base.njk
title: Menu
---

{%- for menu in collections.menu -%}

  <h1>{{ menu.data.title }}</h1>
  <p>{{ menu.data.description }}</p>
  <h2>{{ menu.data.price }}</h2>
{%- endfor -%}

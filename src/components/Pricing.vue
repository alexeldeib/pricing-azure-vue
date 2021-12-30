<template>
  <div id="pricing">
    <table>
      <tr>
        <th v-for="item in headers" v-bind:key="`${item}`">
          {{ item }}
        </th>
      </tr>

      <tr v-for="item in pricing.Items" v-bind:key="item.id">
        <td v-for="val in headers" v-bind:key="val.id">
          {{ item[val] ? item[val] : "" }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { PricingData } from "../ts/pricing";
import data from "../../pricing.json";
import { Options, Vue } from "vue-class-component";

interface dataInterface extends Object {
  headers: string[];
  pricing: PricingData;
}

@Options({
  data(): dataInterface {
    const parsedData: PricingData = data;
    const uniqueHeaders: Set<string> = new Set();
    parsedData.Items.map((item) =>
      Object.keys(item).forEach((key) => uniqueHeaders.add(key))
    );
    const headers: string[] = Array.from(uniqueHeaders);
    return {
      headers: headers,
      pricing: parsedData,
    };
  },
})
export default class Pricing extends Vue {}
</script>

<style scoped>
td {
  white-space: nowrap;
  border: 1px dotted #999;
}

th {
  border: 1px dotted #999;
}

table {
  table-layout: auto;
}
</style>
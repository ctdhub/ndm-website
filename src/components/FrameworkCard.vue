<template>
  <div style="display: flex; flex-direction: column; width: 100%">
    <div
      style="
        display: flex;
        flex-direction: column;
        padding: var(--size-3);
        gap: var(--size-3);
        align-items: center;
        text-align: center;
        color: white;
      "
      :style="{ backgroundColor: props.pcolor }"
    >
      <span style="font-weight: var(--font-weight-8)">{{
        props.toptitle
      }}</span>
      <div
        style="width: 80%; border-bottom: 1px solid white; height: 1px"
      ></div>
      <slot name="topdesc"></slot>
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--gray-2);
        padding: var(--size-6);
        gap: var(--size-4);
        text-align: center;
      "
    >
      <div style="display: flex; flex-direction: column; gap: var(--size-2)">
        <FontAwesomeIcon :icon="faClock" />
        <span
          style="
            font-weight: var(--font-weight-8);
            font-style: italic;
            text-decoration: underline;
          "
          :style="{ color: props.pcolor }"
          >{{ props.timeframe }}</span
        >
      </div>
      <div style="display: flex; flex-direction: column; gap: var(--size-4)">
        <FontAwesomeIcon
          :icon="props.midicondef"
          :style="{ color: props.pcolor }"
        />
        <span
          style="font-weight: var(--font-weight-8)"
          :style="{ color: props.pcolor }"
          >{{ props.midtitle }}</span
        >
        <slot name="midcontent"></slot>
      </div>
      <div style="display: flex; flex-direction: column; gap: var(--size-2)">
        <FontAwesomeIcon
          :icon="props.bottomicondef"
          :style="{ color: props.pcolor }"
        />
        <span
          style="font-weight: var(--font-weight-8)"
          :style="{ color: props.pcolor }"
          >{{ props.bottomtitle }}</span
        >
        <span>{{ props.bottomdesc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const props = defineProps({
  toptitle: {
    type: String,
    required: true,
  },
  timeframe: {
    type: String,
    required: true,
  },
  midicondef: {
    type: Object,
    required: true,
  },
  midtitle: {
    type: String,
    required: true,
  },
  bottomicondef: {
    type: Object,
    required: true,
  },
  bottomtitle: {
    type: String,
    required: true,
  },
  bottomdesc: {
    type: String,
    required: true,
  },
  pcolor: {
    type: String,
    required: true,
  },
});
</script>

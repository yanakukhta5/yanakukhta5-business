<script lang="ts">
import { mapActions } from "pinia";
import store from "@/store/index";
export default {
  props: {
    options: Array<String>,
    default: String,
  },

  methods: {
    ...mapActions(store, ["changeOptionChosen"]),

    changeState(event: Event) {
      if ((event.target as HTMLInputElement).value === this.default)
        this.changeOptionChosen(false);
      else this.changeOptionChosen(true);
    },

    capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    titleListener(){
      const selectSingle = this.$refs.selectSingle as HTMLDivElement;
      if ("active" === selectSingle.getAttribute("data-state")) {
        selectSingle.setAttribute("data-state", "");
      } else {
        selectSingle.setAttribute("data-state", "active");
      }
    },

    inputListener(){
      this.changeOptionChosen(true)
    },

    defaultListener(){
      this.changeOptionChosen(false)
    },

    labelListener(event: MouseEvent){
      (this.$refs.title as HTMLDivElement).textContent = (event.target as HTMLDivElement)?.textContent;
      (this.$refs.selectSingle as HTMLDivElement).setAttribute("data-state", "");
    }
  },

  computed: {
    defaultCapitalize() {
      return this.capitalizeFirstLetter(this.default as string);
    },

    optionsCapitalize() {
      return this.options?.map((item) =>
        this.capitalizeFirstLetter(item as string)
      );
    },
  },

  mounted() {
    const title = this.$refs.title as HTMLDivElement;
    const labels = this.$refs.label as Array<HTMLLabelElement>;
    const inputs = this.$refs.input as Array<HTMLInputElement>;
    const defaultInput = this.$refs.default as HTMLInputElement
    title.addEventListener("click", this.titleListener);
    labels.forEach((label) => {
      label.addEventListener("click", this.labelListener);
    });
    inputs.forEach((input) => {
      input.addEventListener("click", this.inputListener);
    });
    defaultInput.addEventListener('click', this.defaultListener)
  },

  unmounted(){
    (this.$refs.label as Array<HTMLLabelElement>).forEach(label => {
      label.removeEventListener('click', this.labelListener)
    }),

    (this.$refs.input as Array<HTMLInputElement>).forEach(input => {
      input.removeEventListener('click', this.inputListener)
    }),

    (this.$refs.title as HTMLDivElement).removeEventListener('click', this.titleListener),

    (this.$refs.default as HTMLInputElement).removeEventListener('click', this.defaultListener)
  }
};
</script>

<template>
  <form>
    <div class="select" data-state="" ref="selectSingle">
      <div class="select__title" ref="title"></div>
      <div class="select__content">
        <input
          :id="default"
          class="select__input"
          type="radio"
          name="singleSelect"
          checked
          ref="default"
        />
        <label
          :for="default"
          tabindex="0"
          class="select__label"
          :data-value="defaultCapitalize"
          ref="label"
        ></label>
        <template v-for="option in optionsCapitalize">
          <input
            :id="option"
            class="select__input"
            type="radio"
            name="singleSelect"
            ref="input"
          />
          <label
            :for="option"
            tabindex="0"
            class="select__label"
            :data-value="option"
            ref="label"
          ></label>
        </template>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
h1 {
  display: flex;
  justify-content: center;
}

.reset {
  display: flex;
  width: 230px;
  padding: 8px 16px;
  margin-bottom: 10px;

  border: solid 1px #c7ccd1;
  border-radius: 5px;

  transition: all 0.2s ease-out;

  cursor: pointer;

  text-transform: capitalize;

  background-color: #ffffff;
  color: $secondary;

  &:hover {
    background-color: $primary;
    color: #ffffff;
  }
}

.select {
  position: relative;
  min-width: 320px;
  display: flex;
  width: 230px;
  height: 40px;
  &[data-state="active"] {
    .select__title {
      &::before {
        transform: translate(-3px, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(3px, -50%) rotate(45deg);
      }
    }

    .select__content {
      border-width: 1px;

      border-color: rgba(#c7ccd1, 1);
    }

    .select__label {
      max-height: 40px;

      border-width: 1px;

      &::before {
        opacity: 1;
      }
    }
  }
}
.select__title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px;

  border-radius: 5px;
  border: solid 1px #c7ccd1;

  cursor: pointer;

  z-index: 2;

  &::before,
  &::after {
    content: "";

    position: absolute;
    top: 50%;
    right: 16px;

    display: block;
    width: 10px;
    height: 2px;

    transition: all 0.3s ease-out;

    background-color: #333333;

    transform: translate(-3px, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(3px, -50%) rotate(-45deg);
  }

  &:hover {
    border-color: $primary;

    &::before,
    &::after {
      background-color: $primary;
    }
  }
}

.select__content {
  position: absolute;
  top: 40px;
  left: 3px;

  display: flex;
  flex-direction: column;
  width: calc(100% - 6px);

  background-color: #ffffff;

  border: 1px solid rgba(#c7ccd1, 0);
  border-top-width: 0;
  border-bottom-width: 0;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  transition: all 0.3s ease-out;

  z-index: 1;
}
.select__input {
  display: none;
  pointer-events: none;

  &:checked + label {
    background-color: #dedede;

    &::after {
      content: attr(data-value);
    }
  }
  &:disabled + label {
    opacity: 0.6;
    pointer-events: none;
  }
}
.select__label {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  max-height: 0;
  padding: 0 16px;

  transition: all 0.1s ease-out;

  cursor: pointer;

  & + input + & {
    border-top: 0 solid #c7ccd160;
  }

  &:hover {
    background-color: $primary !important;

    color: #ffffff;
  }

  &::before {
    content: attr(data-value);

    transition: all 0.1s ease-out;

    opacity: 0;
  }
  &::after {
    position: absolute;
    top: -40px;
    left: 0;

    display: flex;
    align-items: center;
    width: 200px;
    height: 40px;
    padding: 8px 16px;

    color: #333333;

    z-index: -1;
  }
}
</style>

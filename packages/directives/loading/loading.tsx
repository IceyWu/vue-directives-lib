import { defineComponent, ref } from "vue";
import "./loading.scss";

export default defineComponent({
  name: "HayLoading",
  setup() {
    const title = ref("");
    const setTitle = (newTitle: string) => {
      title.value = newTitle;
    };

    return { title, setTitle };
  },
  render() {
    return (
      <div class="hay-loading-mask">
        <div class="hay-loading-spinner">
          <i class="hay-icon-loading"></i>
          {this.title && <p class="hay-loading-text">{this.title}</p>}
        </div>
      </div>
    );
  }
});

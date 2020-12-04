<template>
  <div>
    <quill-editor ref="editor" :options="editorOptions" style="height: 60vh"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { quillEditor } from 'vue-quill-editor'

@Component({
  components: { quillEditor },
})
export default class Editor extends Vue {
  public editorOptions: any = {
    placeholder: 'Insert Text Here', //提示
  }
}
</script>
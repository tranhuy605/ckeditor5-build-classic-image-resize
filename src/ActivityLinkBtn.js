import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import LinkEditing from "./linkediting";
import LinkUI from "./linkui";

export default class ActivityLinkBtn extends Plugin {
  /**
   * @inheritDoc
   */
  static get requires() {
    return [ LinkEditing, LinkUI ];
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'ActivityLinkBtn';
  }
}

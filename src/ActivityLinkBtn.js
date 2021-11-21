import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import linkIcon from './link.svg'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

export class ActivityLinkBtn extends Plugin {
  init () {
    console.log( 'ActivityLinkBtn was initialized' );
    const editor = this.editor
    editor.ui.componentFactory.add('activityLinkBtn', locale => {
      console.log('ok')
      const view = new ButtonView( locale );
      view.set( {
        label: 'Insert Activity Link',
        icon: linkIcon,
        tooltip: true
      } );
      view.on( 'execute', () => {
        const activityURL = prompt( 'Activity URL' );
        editor.model.change( writer => {
          const imageElement = writer.createElement( 'a', {
            href: activityURL,
            class: 'activity-book'
          } );

          // Insert the image in the current selection location.
          editor.model.insertContent( imageElement, editor.model.document.selection );
        } );
      } );
      return view;
    })
  }
}

/**
 * Created by josemanuel on 12/16/16.
 */
module latte{

    fragment_event_register('backend-explorer-roots-pages-after', (e) => {
        // Add custom node
        e.items.push(new StoreExplorerItem());
    });

}
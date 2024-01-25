import { Component } from '@angular/core';
import { BookmarkTileComponent } from "../bookmark-tile/bookmark-tile.component";

@Component({
    selector: 'app-bookmarks',
    standalone: true,
    templateUrl: './bookmarks.component.html',
    styleUrl: './bookmarks.component.scss',
    imports: [BookmarkTileComponent]
})
export class BookmarksComponent {

}

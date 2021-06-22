`ng generate module gomco-common/brand-list --routing=false`

`ng generate module _helper/mat-confirm-dialog --routing=false --project=smartparcelbox`

`ng generate pipe _helper/nullish-coalesce --module=_helper/nullish-coalesce --project=smartparcelbox`

`ng generate component _helper/mat-confirm-dialog/mat-confirm-dialog --module=_helper/mat-confirm-dialog --project=smartparcelbox`
`ng generate component admin/feed/list --module=admin/feed --project=smartparcelbox`

`ng generate component admin/page/edit --module=admin/page`
`ng generate directive gomco-common/inline-edit/edit-on-enter-directive/edit-on-enter-directive --module=gomco-common/inline-edit`

`ng generate component admin/brand/list --module=admin/brand`

`ng generate component guest/account/change-password --module=guest/account`

`ng generate component formly/repeat-section-type`
`ng generate module formly/tabs`

`ng generate service _helper/confirmation-dialog-service`

`ng build --prod=true`

`----------------to build deploy app on production-----------------`
`ng build --prod`
`firebase login`
`firebase init`
`public directory = dist`
`firebase deploy`
`npm install -g firebase-tools`

`Change path in firebase.json file`
`"public": "dist/smartparcelbox/browser"`

`"import { OpenAPIV2 } from "openapi-types";

`open \node_modules\@api-platform\api-doc-parser in terminal

`and then do npm install
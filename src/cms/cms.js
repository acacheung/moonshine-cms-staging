import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import MenuGroupPreview from './preview-templates/MenuGroupPreview'
import PressPagePreview from './preview-templates/PressPagePreview'
import TeamMemberPreview from './preview-templates/TeamMemberPreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('menu', MenuGroupPreview)
CMS.registerPreviewTemplate('press', PressPagePreview)
CMS.registerPreviewTemplate('team', TeamMemberPreview)

import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import TeamMemberPreview from './preview-templates/TeamMemberPreview'
import PressPagePreview from './preview-templates/PressPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('press', PressPagePreview)
CMS.registerPreviewTemplate('team', TeamMemberPreview)

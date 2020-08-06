import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import MaterialIcon from '@/components/Icons/MaterialIcon'
import LinkedinIcon from '@/components/Icons/LinkedinIcon'
import FBIcon from '@/components/Icons/FBIcon'
import GithubIcon from '@/components/Icons/GithubIcon'
import MediumIcon from '@/components/Icons/MediumIcon'
import GitlabIcon from '@/components/Icons/GitlabIcon'
import YTIcon from '@/components/Icons/YTIcon'
import IGIcon from '@/components/Icons/IGIcon'

Vue.use(Vuetify)

function missingMaterialIcons (ids) {
  const icons = {}
  for (const id of ids) {
    for (const suffix of ['fill', 'outline', 'two-tone', 'round', 'sharp']) {
      const name = `${id}_${suffix}`
      icons[name] = {
        component: MaterialIcon,
        props: {
          name
        }
      }
    }
  }
  return icons
}

Vue.use(Vuetify, {
  // iconfont: 'md',
  icons: {
    values: {
      ...missingMaterialIcons(['today', 'article', 'psychology', 'design_services', 'local_mall', 'tour', 'favorite_border', 'business_center', 'location_on', 'settings', 'exit_to_app', 'storage'])
      // This will enable 'visibility_outline', 'visibility_off_round' and so on.
    }
  }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      LinkedinIcon: {
        component: LinkedinIcon // you can use string here if component is registered globally
      },
      FBIcon: {
        component: FBIcon // you can use string here if component is registered globally
      },
      GithubIcon: {
        component: GithubIcon // you can use string here if component is registered globally
      },
      MediumIcon: {
        component: MediumIcon // you can use string here if component is registered globally
      },
      GitlabIcon: {
        component: GitlabIcon // you can use string here if component is registered globally
      },
      YTIcon: {
        component: YTIcon // you can use string here if component is registered globally
      },
      IGIcon: {
        component: IGIcon // you can use string here if component is registered globally
      }
    }
  }
})

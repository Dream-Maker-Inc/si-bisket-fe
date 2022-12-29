import { CustomAppbar } from '@/common/components/Appbar'
import { Footer } from '@/common/components/footer'
import { ProfileBannerChip } from '../components/ProfileBannerChip'
import { ArchiveSection } from '../sections/ArchiveSection'
import { ProfileBanner } from '../sections/ProfileBanner'
import { ProfileInfoSection } from '../sections/ProfileInfoSection'
import { useUserProfileView } from './useUserProfileView'

export const UserProfileView = () => {
  const { isCreator } = useUserProfileView()

  return (
    <div>
      <CustomAppbar />
      <main>
        <ProfileBanner>
          <ProfileBannerChip />
        </ProfileBanner>
        <ProfileInfoSection isCreator={isCreator} />
        <ArchiveSection isCreator={isCreator} />
      </main>
      <Footer />
    </div>
  )
}

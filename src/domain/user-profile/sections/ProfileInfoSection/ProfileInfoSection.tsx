import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { EditProfileButton } from '../ArchiveSection/elements/buttons/EditProfileButton'
import {
  EtcSection,
  FollowButton,
  NeighborCounters,
  ProfileDescription,
  ProfileName,
  SnsSection,
} from './elements'
import { userProfileInfoModels } from './models/userProfileInfo.model'

type ProfileInfoSectionProps = {
  isCreator: boolean
}

export const ProfileInfoSection = ({ isCreator }: ProfileInfoSectionProps) => {
  const models = userProfileInfoModels

  return (
    <div css={style.root}>
      <div css={style.container}>
        <div css={style.title}>
          <ProfileName name={models.name} verified={models.verified} />
          <div css={style.wrapper}>
            <FollowButton />
            <EditProfileButton />
          </div>
        </div>
        <NeighborCounters
          followers={models.followers}
          following={models.following}
        />

        {models.description.length >= 1 && (
          <ProfileDescription desc={models.description} />
        )}

        <SnsSection snsList={models.snsList} />

        {isCreator && (
          <EtcSection
            copyButtonProps={{ address: models.address, onClick: () => null }}
            syncButtonProps={{ onClick: () => null }}
          />
        )}
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    padding: 0 23px;
    padding-top: 82px;
    padding-bottom: 100px;
    @media ${`(max-width:854px)`} {
      padding-top: 50px;
    }
    @media ${MediaQueries.xs} {
      padding-top: 54px;
      padding-bottom: 80px;
    }
  `,
  container: css`
    max-width: 1400px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  `,
  title: css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 40px;

    @media ${`(max-width:854px)`} {
      width: unset;
      align-items: unset;
      flex-direction: column;
      gap: 16px;
    }
  `,
  wrapper: css`
    flex: 1;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${`(max-width:854px)`} {
      flex: unset;
      height: unset;
      justify-content: unset;
      gap: 12px;
    }
  `,
}

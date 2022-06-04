import BaseButton from 'components/ui/buttons/BaseButton'
import { useStakingContract } from '../../../contracts/staking'
import UploadIcon from 'assets/icons/outline/Upload.svg'
import { PropsWithChildren } from 'react'
import Star from 'assets/images/star--current.svg?inline'

const ClaimPannel = ({ hideHarvest }: { hideHarvest?: boolean }) => {
  const availableZKP = 135
  const { harvestRewards } = useStakingContract()
  const steps = ['Buy zkp tokens', 'Stake ZKP tokens', 'Claim lottery tickets', 'Invest in IDOs']

  const Step = ({ children, index }: PropsWithChildren<{ index: number }>) => {
    return (
      <div className="text-primaryClear text-16">
        <div className="">Step {index + 1}</div>
        <div className="font-bold">{children}</div>
      </div>
    )
  }
  return (
    <div className="ClaimPannel sticky top-6 left-0">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="block block__item text-primaryClear">
          <div className="font-heading text-16 mb-6">How it works?</div>
          <p>
            Owning ZKP tokens or ZKP-LP is requirement in order to participate in IDOs on ZkPad.
            <br />
            <br />
            You can lock your tokens and receive lottery tickets to invest in the listed projects.
          </p>
        </div>
        <div className="block block--contrast">
          {steps.map((step, index) => (
            <>
              <Step index={index} key={index}>
                {step}
              </Step>
              {index !== steps.length - 1 && (
                <Star alt={''} className="inline-block my- text-whitePurple" />
              )}
            </>
          ))}
        </div>
      </div>

      {!hideHarvest && (
        <div className="harvest block">
          <div className="block--contrast">
            <div className="title--medium mb-1">Harvest rewards</div>
            <div className="flex items-center">
              <div className="text-16 text-primaryClear transform translate-y-px">
                $ZKP Available
              </div>
              <div className="font-heading text-16 ml-6 text-primary">{availableZKP}</div>
            </div>
          </div>
          <div className="block__item">
            <BaseButton>
              <img src={UploadIcon} alt={''} />
              Claim {availableZKP} ZKP
            </BaseButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClaimPannel

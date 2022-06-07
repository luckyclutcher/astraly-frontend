import ClaimPannel from '../Lock/ClaimPannel'
import BuyForm from './BuyForm'
import Simulator from '../Lock/Simulator'
import Vertical from '../../ui/Separator/Vertical'

const BuyPage = () => {
  return (
    <div className="BuyPage">
      <div className="g-container mb-20">
        <h1 className="page-title title--big mb-16">Lock $ZKP</h1>

        <div className="lg:flex gap-6">
          <div className={'col-end-3 col-start-1'}>
            <div className="mb-10">
              <BuyForm />
            </div>

            <Simulator />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-6 left-0">
              <Vertical />
            </div>
          </div>

          <div className={'mt-4 md:mt-0 lg:w-127 flex-shrink-0'}>
            <ClaimPannel hideHarvest={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyPage